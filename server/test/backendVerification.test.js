import test from 'node:test';
import assert from 'node:assert/strict';
import app from '../app.js';
import { saveAdmissionEnquiry } from '../services/admissionEnquiryService.js';
import { getAdmissionEnquiryById, getAdmissionEnquiryCallBySid } from '../repositories/admissionEnquiryRepository.js';
import { isLiveTelephonyEnabled, connectStudentToCounsellor } from '../services/exotelService.js';

// Helper to make local in-process requests to the Express app on ephemeral ports
async function makeRequest(path, { method = 'GET', headers = {}, body = null } = {}) {
  const init = {
    method,
    headers: { 'Content-Type': 'application/json', ...headers }
  };
  if (body) init.body = JSON.stringify(body);

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

test('1. Health check endpoint GET /api/health returns 200 OK', async () => {
  const res = await makeRequest('/api/health');
  assert.equal(res.status, 200);
  assert.equal(res.data.ok, true);
  assert.equal(res.data.service, 'SIET API');
});

test('2. Valid application submission POST /api/admission-enquiries saves record to database (201)', async () => {
  const phone = '987' + Math.floor(1000000 + Math.random() * 9000000);
  const payload = {
    studentName: 'Verification Test Student',
    mobileNumber: phone,
    email: 'verify.student@siet.ac.in',
    course: 'UG',
    department: 'Artificial Intelligence and Data Science',
    city: 'Coimbatore',
    remarks: 'Looking for 2026 admissions',
    consent: true
  };

  const res = await makeRequest('/api/admission-enquiries', {
    method: 'POST',
    body: payload
  });

  assert.equal(res.status, 201);
  assert.equal(res.data.success, true);
  assert.ok(res.data.data.id);
  assert.equal(res.data.data.studentName, 'Verification Test Student');
  assert.equal(res.data.data.mobileNumber, phone);
  assert.equal(res.data.data.department, 'Artificial Intelligence and Data Science');
  assert.ok(res.data.data.call.callSid);
  assert.equal(res.data.data.call.isMock, true);

  // Directly verify persistence in database
  const dbRecord = await getAdmissionEnquiryById(res.data.data.id);
  assert.ok(dbRecord, 'Record must exist in admission_enquiries table');
  assert.equal(dbRecord.studentName, 'Verification Test Student');
  assert.equal(dbRecord.mobileNumber, phone);
  assert.equal(dbRecord.email, 'verify.student@siet.ac.in');
  assert.equal(dbRecord.department, 'Artificial Intelligence and Data Science');
  assert.equal(dbRecord.consent, 1);
});

test('3. Invalid application data is rejected with 400 Bad Request', async () => {
  const baseValid = {
    studentName: 'Validation Candidate',
    mobileNumber: '9845012345',
    email: 'candidate@example.com',
    course: 'UG',
    department: 'Computer Science and Engineering',
    consent: true
  };

  // Missing studentName
  const missingName = await makeRequest('/api/admission-enquiries', {
    method: 'POST',
    body: { ...baseValid, studentName: '' }
  });
  assert.equal(missingName.status, 400);
  assert.ok(missingName.data.message.includes('name'));

  // Invalid phone number
  const invalidPhone = await makeRequest('/api/admission-enquiries', {
    method: 'POST',
    body: { ...baseValid, mobileNumber: '12345' }
  });
  assert.equal(invalidPhone.status, 400);
  assert.ok(invalidPhone.data.message.includes('mobile'));

  // Invalid email
  const invalidEmail = await makeRequest('/api/admission-enquiries', {
    method: 'POST',
    body: { ...baseValid, email: 'not-an-email' }
  });
  assert.equal(invalidEmail.status, 400);
  assert.ok(invalidEmail.data.message.includes('email'));

  // Missing course
  const missingCourse = await makeRequest('/api/admission-enquiries', {
    method: 'POST',
    body: { ...baseValid, course: '' }
  });
  assert.equal(missingCourse.status, 400);
  assert.ok(missingCourse.data.message.includes('Course'));

  // Missing department
  const missingDept = await makeRequest('/api/admission-enquiries', {
    method: 'POST',
    body: { ...baseValid, department: '' }
  });
  assert.equal(missingDept.status, 400);
  assert.ok(missingDept.data.message.includes('department'));

  // Missing consent
  const missingConsent = await makeRequest('/api/admission-enquiries', {
    method: 'POST',
    body: { ...baseValid, consent: false }
  });
  assert.equal(missingConsent.status, 400);
  assert.ok(missingConsent.data.message.includes('consent'));
});

test('4. Duplicate application within 5-minute cooldown returns duplicate status and suppresses call', async () => {
  const phone = '983' + Math.floor(1000000 + Math.random() * 9000000);
  const payload = {
    studentName: 'Duplicate Test',
    mobileNumber: phone,
    course: 'UG',
    department: 'Electrical and Electronics Engineering',
    consent: true
  };

  const first = await makeRequest('/api/admission-enquiries', { method: 'POST', body: payload });
  assert.equal(first.status, 201);
  assert.equal(first.data.duplicate, false);

  const second = await makeRequest('/api/admission-enquiries', { method: 'POST', body: payload });
  assert.equal(second.status, 200);
  assert.equal(second.data.duplicate, true);
  assert.equal(second.data.data.call.status, 'duplicate_prevented');
});

test('5. Application remains saved even if optional call execution fails', async () => {
  const phone = '982' + Math.floor(1000000 + Math.random() * 9000000);

  // Directly call saveAdmissionEnquiry with options that simulate a call failure
  const saved = await saveAdmissionEnquiry({
    studentName: 'Resilient Student',
    mobileNumber: phone,
    course: 'UG',
    department: 'Mechanical Engineering',
    consent: true,
    triggerCall: false
  }, { autoCall: false });

  assert.ok(saved.enquiry.id);
  const found = await getAdmissionEnquiryById(saved.enquiry.id);
  assert.ok(found);
  assert.equal(found.studentName, 'Resilient Student');
  assert.equal(found.mobileNumber, phone);
});

test('6. POST /api/admission-enquiries/:id/test-call requires consent and enforces 5-min cooldown', async () => {
  const phone = '981' + Math.floor(1000000 + Math.random() * 9000000);
  const initial = await saveAdmissionEnquiry({
    studentName: 'Cooldown Tester',
    mobileNumber: phone,
    course: 'UG',
    department: 'Biomedical Engineering',
    consent: true,
    triggerCall: false
  }, { autoCall: false });

  const enquiryId = initial.enquiry.id;

  // 404 on non-existent enquiry
  const notFound = await makeRequest('/api/admission-enquiries/999999/test-call', {
    method: 'POST',
    body: { consent: true }
  });
  assert.equal(notFound.status, 404);

  // 400 if consent is missing
  const noConsent = await makeRequest(`/api/admission-enquiries/${enquiryId}/test-call`, {
    method: 'POST',
    body: { consent: false }
  });
  assert.equal(noConsent.status, 400);

  // 200 on first valid test-call
  const success = await makeRequest(`/api/admission-enquiries/${enquiryId}/test-call`, {
    method: 'POST',
    body: { consent: true }
  });
  assert.equal(success.status, 200);
  assert.ok(success.data.data.call.callSid);

  // 429 duplicate call suppression on immediate retry
  const duplicate = await makeRequest(`/api/admission-enquiries/${enquiryId}/test-call`, {
    method: 'POST',
    body: { consent: true }
  });
  assert.equal(duplicate.status, 429);
  assert.ok(duplicate.data.message.includes('already requested'));
});

test('7. Exotel webhook endpoint validates payloads, handles terminal events, and is idempotent', async () => {
  // Missing payload (empty body) -> 400 Bad Request
  const emptyBody = await makeRequest('/api/admission-enquiries/webhooks/exotel', {
    method: 'POST',
    body: {}
  });
  assert.equal(emptyBody.status, 400);
  assert.ok(emptyBody.data.message.includes('required'));

  // Missing Status -> 400 Bad Request
  const missingStatus = await makeRequest('/api/admission-enquiries/webhooks/exotel', {
    method: 'POST',
    body: { CallSid: 'some_call_sid' }
  });
  assert.equal(missingStatus.status, 400);

  // Unknown CallSid -> 404 Not Found
  const unknownSid = await makeRequest('/api/admission-enquiries/webhooks/exotel', {
    method: 'POST',
    body: { CallSid: 'non_existent_call_sid_12345', Status: 'completed' }
  });
  assert.equal(unknownSid.status, 404);

  // Setup a real call record to test valid delivery
  const phone = '980' + Math.floor(1000000 + Math.random() * 9000000);
  const enquiry = await saveAdmissionEnquiry({
    studentName: 'Webhook Receiver Student',
    mobileNumber: phone,
    course: 'UG',
    department: 'Civil Engineering',
    consent: true
  });
  const callSid = enquiry.call.callSid;
  assert.ok(callSid);

  // Valid webhook delivery updating status to completed
  const webhookRes = await makeRequest('/api/admission-enquiries/webhooks/exotel', {
    method: 'POST',
    body: {
      CallSid: callSid,
      Status: 'completed',
      RecordingDuration: 52
    }
  });
  assert.equal(webhookRes.status, 200);
  assert.equal(webhookRes.data.success, true);
  assert.equal(webhookRes.data.data.status, 'completed');

  // Verify DB record was updated
  const updatedCall = await getAdmissionEnquiryCallBySid(callSid);
  assert.equal(updatedCall.status, 'completed');
  assert.equal(updatedCall.durationSeconds, 52);

  // Duplicate webhook event (same payload again) -> 200 OK (idempotent, no error)
  const duplicateWebhook = await makeRequest('/api/admission-enquiries/webhooks/exotel', {
    method: 'POST',
    body: {
      CallSid: callSid,
      Status: 'completed',
      RecordingDuration: 52
    }
  });
  assert.equal(duplicateWebhook.status, 200);
  assert.equal(duplicateWebhook.data.data.status, 'completed');
});

test('8. Unauthorized users cannot trigger arbitrary calls or access admin controls (401)', async () => {
  // Unauthorized admin calls listing
  const unauthCalls = await makeRequest('/api/admin/calls');
  assert.equal(unauthCalls.status, 401);

  // Unauthorized admin test call trigger
  const unauthTrigger = await makeRequest('/api/admin/test-call', {
    method: 'POST',
    body: { phoneNumber: '9876543210' }
  });
  assert.equal(unauthTrigger.status, 401);

  // Unauthorized retry
  const unauthRetry = await makeRequest('/api/admin/calls/mock_123/retry', {
    method: 'POST'
  });
  assert.equal(unauthRetry.status, 401);

  // Authorized request with x-admin-key: siet-admin-2026 succeeds
  const authSystem = await makeRequest('/api/admin/system-status', {
    headers: { 'x-admin-key': 'siet-admin-2026' }
  });
  assert.equal(authSystem.status, 200);
  assert.ok(authSystem.data.data.stats);
});

test('9. Live Exotel safety constraints prevent dialing arbitrary or unverified numbers', async () => {
  // In mock mode, isLiveTelephonyEnabled is false
  assert.equal(isLiveTelephonyEnabled(), false);

  // Calling connectStudentToCounsellor in mock mode returns safe skipped payload with 0 charges
  const skippedCall = await connectStudentToCounsellor('9876543210');
  assert.equal(skippedCall.skipped, true);
  assert.equal(skippedCall.provider, 'mock');
  assert.equal(skippedCall.status, 'not_configured');
});

test('10. Exotel Singapore cluster base URL resolution and live readiness check', async () => {
  const { getExotelApiBaseUrl, getExotelRegion, checkLiveReadiness } = await import('../services/exotelService.js');
  const baseUrl = getExotelApiBaseUrl();
  const region = getExotelRegion();
  const readiness = checkLiveReadiness();

  assert.equal(baseUrl, 'https://api.exotel.com');
  assert.equal(region, 'Singapore');
  assert.equal(readiness.isConfigured, true);
  assert.equal(readiness.region, 'Singapore');
  assert.equal(readiness.apiHost, 'https://api.exotel.com');
  // Both test phone and counsellor number are configured in environment
  assert.equal(readiness.hasTestPhone, true);
  assert.equal(readiness.hasCounsellorNumber, true);
  assert.equal(readiness.isReadyForRealCall, true);
  assert.equal(readiness.missing.length, 0);
});

test('11. Exotel Connect Two Numbers endpoint, parameter mapping, dialing order, and strict destination rejection', async () => {
  const { prepareConnectTwoNumbersCall, getTelephonyMode } = await import('../services/exotelService.js');

  // Verify safe mock mode is active
  assert.equal(getTelephonyMode(), 'mock');

  const testPhone = process.env.EXOTEL_TEST_PHONE;
  const counsellorNumber = process.env.EXOTEL_COUNSELLOR_NUMBER;
  const callerId = process.env.EXOTEL_CALLER_ID;
  const accountSid = process.env.EXOTEL_ACCOUNT_SID;

  assert.ok(testPhone, 'EXOTEL_TEST_PHONE must be present in environment');
  assert.ok(counsellorNumber, 'EXOTEL_COUNSELLOR_NUMBER must be present in environment');
  assert.ok(callerId, 'EXOTEL_CALLER_ID must be present in environment');

  // Valid test phone number mapping
  const plan = prepareConnectTwoNumbersCall(testPhone);

  // 1. Official endpoint and Singapore API host
  assert.equal(plan.apiHost, 'https://api.exotel.com');
  assert.equal(plan.endpoint, `https://api.exotel.com/v1/Accounts/${encodeURIComponent(accountSid)}/Calls/connect.json`);

  // 2. CallerId is assigned ExoPhone
  assert.equal(plan.callerId, callerId);
  assert.equal(plan.requestPayload.CallerId, callerId);

  // 3. Dialing order: By default, Exotel dials From (student test phone) first, and To (counsellor) upon answer
  assert.equal(plan.dialOrder.dialFirst, 'student');
  assert.equal(plan.requestPayload.From, `+91${testPhone.slice(-10)}`);
  assert.equal(plan.requestPayload.To, `+91${counsellorNumber.slice(-10)}`);
  assert.equal(plan.requestPayload.CallType, 'trans');
  assert.ok(plan.dialOrder.description.includes('From'));
  assert.ok(plan.dialOrder.description.includes('To'));

  // 4. Strict restriction: Any destination number other than EXOTEL_TEST_PHONE is strictly rejected
  const arbitraryNumber = '9845099999';
  assert.throws(
    () => prepareConnectTwoNumbersCall(arbitraryNumber),
    /Unauthorized destination/
  );
});

