import test from 'node:test';
import assert from 'node:assert/strict';
import app from '../app.js';
import { saveAdmissionEnquiry } from '../services/admissionEnquiryService.js';
import { simulateOutcome } from '../services/mockCallService.js';

// Helper to make local in-process requests to the Express app
async function mockRequest(path, { method = 'GET', headers = {}, body = null } = {}) {
  const url = `http://127.0.0.1:5050${path}`;
  const init = {
    method,
    headers: { 'Content-Type': 'application/json', ...headers }
  };
  if (body) init.body = JSON.stringify(body);

  // We can test the Express app directly via fetch or supertest-like approach
  // Since server is running or we can start a lightweight listener
  return new Promise((resolve, reject) => {
    const server = app.listen(0, '127.0.0.1', async () => {
      try {
        const port = server.address().port;
        const res = await fetch(`http://127.0.0.1:${port}${path}`, init);
        const data = await res.json().catch(() => null);
        server.close(() => resolve({ status: res.status, ok: res.ok, data }));
      } catch (err) {
        server.close(() => reject(err));
      }
    });
  });
}

test('POST /api/admission-enquiries enforces consent and creates mock call', async () => {
  // Test without consent
  const withoutConsent = await mockRequest('/api/admission-enquiries', {
    method: 'POST',
    body: {
      studentName: 'No Consent Student',
      mobileNumber: '9845012345',
      course: 'UG',
      department: 'Biotechnology'
      // consent missing
    }
  });
  assert.equal(withoutConsent.status, 400);
  assert.ok(withoutConsent.data.message.includes('consent'));

  // Test with consent
  const withConsent = await mockRequest('/api/admission-enquiries', {
    method: 'POST',
    body: {
      studentName: 'Valid Consent Student',
      mobileNumber: '98450' + Math.floor(10000 + Math.random() * 90000),
      course: 'UG',
      department: 'Biotechnology',
      consent: true
    }
  });
  assert.equal(withConsent.status, 201);
  assert.ok(withConsent.data.data.call.callSid);
  assert.equal(withConsent.data.data.call.label, 'MOCK MODE — NO REAL CALLS');
});

test('GET /api/admission-enquiries/calls/:callSid returns live state machine status', async () => {
  const phone = '98340' + Math.floor(10000 + Math.random() * 90000);
  const enquiry = await saveAdmissionEnquiry({
    studentName: 'Tracker Student',
    mobileNumber: phone,
    course: 'UG',
    department: 'Civil Engineering',
    consent: true
  });

  const res = await mockRequest(`/api/admission-enquiries/calls/${enquiry.call.callSid}`);
  assert.equal(res.status, 200);
  assert.equal(res.data.data.callSid, enquiry.call.callSid);
  assert.equal(res.data.data.isMock, true);
  assert.ok(res.data.data.timeline.length >= 3);
});

test('ADMIN endpoints: rejects unauthorized access without admin passkey (401)', async () => {
  const res = await mockRequest('/api/admin/calls', {
    method: 'GET'
    // no x-admin-key header
  });
  assert.equal(res.status, 401);
  assert.ok(res.data.message.includes('Administrator access required'));
});

test('ADMIN endpoints: permits access with valid x-admin-key header (200)', async () => {
  const res = await mockRequest('/api/admin/calls', {
    method: 'GET',
    headers: { 'x-admin-key': 'siet-admin-2026' }
  });
  assert.equal(res.status, 200);
  assert.ok(Array.isArray(res.data.data.calls));
  assert.ok(res.data.data.stats);
  assert.equal(res.data.data.telephony.telephonyMode, 'mock');
});

test('ADMIN endpoints: allows retrying failed or busy mock calls', async () => {
  const phone = '98230' + Math.floor(10000 + Math.random() * 90000);
  const enquiry = await saveAdmissionEnquiry({
    studentName: 'Retry Candidate',
    mobileNumber: phone,
    course: 'UG',
    department: 'Information Technology',
    consent: true
  });

  // Simulate busy state
  await simulateOutcome(enquiry.call.callSid, 'busy');

  // Retry via admin endpoint
  const retryRes = await mockRequest(`/api/admin/calls/${enquiry.call.callSid}/retry`, {
    method: 'POST',
    headers: { 'x-admin-key': 'siet-admin-2026' }
  });
  assert.equal(retryRes.status, 200);
  assert.equal(retryRes.data.data.status, 'queued');
  assert.equal(retryRes.data.data.retryCount, 1);
});

test('POST /api/admission-enquiries/:id/test-call triggers explicit consent test call', async () => {
  const phone = '98190' + Math.floor(10000 + Math.random() * 90000);
  const enquiry = await saveAdmissionEnquiry({
    studentName: 'Consent Test Student',
    mobileNumber: phone,
    course: 'UG',
    department: 'Robotics and Automation',
    consent: true,
    triggerCall: false
  }, { autoCall: false });

  // Test call without consent
  const noConsent = await mockRequest(`/api/admission-enquiries/${enquiry.enquiry.id}/test-call`, {
    method: 'POST',
    body: { consent: false }
  });
  assert.equal(noConsent.status, 400);

  // Test call with consent
  const res = await mockRequest(`/api/admission-enquiries/${enquiry.enquiry.id}/test-call`, {
    method: 'POST',
    body: { consent: true }
  });
  assert.equal(res.status, 200);
  assert.ok(res.data.data.call.callSid);
  assert.equal(res.data.data.call.status, 'queued');

  // Duplicate call within 5 min should be prevented
  const dup = await mockRequest(`/api/admission-enquiries/${enquiry.enquiry.id}/test-call`, {
    method: 'POST',
    body: { consent: true }
  });
  assert.equal(dup.status, 429);
  assert.ok(dup.data.message.includes('already requested'));
});

test('ADMIN endpoint: /api/admin/test-call allows admin-only test calls', async () => {
  const testPhone = '98550' + Math.floor(10000 + Math.random() * 90000);
  const unauthorized = await mockRequest('/api/admin/test-call', {
    method: 'POST',
    body: { phoneNumber: testPhone }
  });
  assert.equal(unauthorized.status, 401);

  const authorized = await mockRequest('/api/admin/test-call', {
    method: 'POST',
    headers: { 'x-admin-key': 'siet-admin-2026' },
    body: { phoneNumber: testPhone, targetOutcome: 'completed' }
  });
  assert.equal(authorized.status, 200);
  assert.ok(authorized.data.data.callSid);
  assert.equal(authorized.data.data.status, 'queued');
});
