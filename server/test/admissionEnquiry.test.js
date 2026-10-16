import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cleanText, normalizeEmail, normalizeIndianMobile } from '../controllers/admissionEnquiryController.js';
import { saveAdmissionEnquiry } from '../services/admissionEnquiryService.js';
import {
  generateMockCallId,
  createMockCall,
  getMockCallStatus,
  retryMockCall,
  simulateOutcome,
  maskPhoneNumber
} from '../services/mockCallService.js';
import { isLiveTelephonyEnabled, getTelephonyConfigSummary } from '../services/exotelService.js';

test('normalizes supported Indian mobile number formats', () => {
  assert.equal(normalizeIndianMobile('9876543210'), '9876543210');
  assert.equal(normalizeIndianMobile('+91 98765 43210'), '9876543210');
  assert.equal(normalizeIndianMobile('91-98765-43210'), '9876543210');
});

test('rejects invalid Indian mobile numbers', () => {
  assert.equal(normalizeIndianMobile('1234567890'), null);
  assert.equal(normalizeIndianMobile('98765'), null);
  assert.equal(normalizeIndianMobile('not-a-phone'), null);
});

test('sanitizes text and validates email without changing valid values', () => {
  assert.equal(cleanText('  Sanjay\u0000  Kumar  '), 'Sanjay Kumar');
  assert.equal(normalizeEmail(' Student@Example.com '), 'student@example.com');
  assert.equal(normalizeEmail('invalid-email'), null);
});

test('MySQL migration defines persistent enquiry fields and string mobile storage', () => {
  const testDirectory = path.dirname(fileURLToPath(import.meta.url));
  const sql = fs.readFileSync(path.resolve(testDirectory, '../migrations/001_create_enquiry_tables.sql'), 'utf8');
  assert.match(sql, /CREATE TABLE IF NOT EXISTS admission_enquiries/i);
  assert.match(sql, /mobile_number VARCHAR\(20\) NOT NULL/i);
  assert.match(sql, /student_name VARCHAR\(150\) NOT NULL/i);
  assert.match(sql, /updated_at TIMESTAMP/i);
  assert.doesNotMatch(sql, /UNIQUE\s*\([^)]*mobile_number/i);
});

test('MySQL migration defines an Exotel call audit table', () => {
  const testDirectory = path.dirname(fileURLToPath(import.meta.url));
  const sql = fs.readFileSync(path.resolve(testDirectory, '../migrations/002_create_admission_enquiry_calls.sql'), 'utf8');
  assert.match(sql, /CREATE TABLE IF NOT EXISTS admission_enquiry_calls/i);
  assert.match(sql, /provider_call_sid VARCHAR\(100\)/i);
  assert.match(sql, /FOREIGN KEY \(admission_enquiry_id\)/i);
});

test('mockCallService generates valid mock call ID and masks phone numbers', () => {
  const callId = generateMockCallId();
  assert.match(callId, /^mock_call_[a-z0-9]+_[a-z0-9]+$/);
  assert.equal(maskPhoneNumber('+919876543210'), '+91*****10');
});

test('saves admission enquiry and dispatches mock call in free mode (₹0 cost)', async () => {
  const uniquePhone = '987' + Math.floor(1000000 + Math.random() * 9000000);
  const result = await saveAdmissionEnquiry({
    studentName: 'Automated Test Student',
    mobileNumber: uniquePhone,
    email: 'test@example.com',
    course: 'UG',
    department: 'Computer Science and Engineering',
    consent: true,
    targetOutcome: 'completed'
  });

  assert.equal(result.duplicate, false);
  assert.ok(result.enquiry.id);
  assert.equal(result.call.isMock, true);
  assert.equal(result.call.provider, 'mock');
  assert.equal(result.call.status, 'queued');
  assert.equal(result.call.label, 'MOCK MODE — NO REAL CALLS');

  // Verify call can be retrieved
  const status = await getMockCallStatus(result.call.callSid);
  assert.ok(status);
  assert.equal(status.isMock, true);
  assert.equal(status.label, 'MOCK MODE — NO REAL CALLS');
});

test('detects duplicate submission within 5-minute window and prevents duplicate call', async () => {
  const uniquePhone = '986' + Math.floor(1000000 + Math.random() * 9000000);
  const dept = 'Agricultural Engineering';

  const first = await saveAdmissionEnquiry({
    studentName: 'First Attempt',
    mobileNumber: uniquePhone,
    department: dept,
    course: 'UG',
    consent: true
  });
  assert.equal(first.duplicate, false);

  const second = await saveAdmissionEnquiry({
    studentName: 'Duplicate Attempt',
    mobileNumber: uniquePhone,
    department: dept,
    course: 'UG',
    consent: true
  });
  assert.equal(second.duplicate, true);
  assert.equal(second.call.status, 'duplicate_prevented');
});

test('mock call state machine simulates outcomes (busy, no-answer, failed, completed)', async () => {
  const uniquePhone = '985' + Math.floor(1000000 + Math.random() * 9000000);
  const { call } = await saveAdmissionEnquiry({
    studentName: 'Simulation Student',
    mobileNumber: uniquePhone,
    department: 'Mechanical Engineering',
    course: 'UG',
    consent: true
  });

  // Test explicit outcome simulations
  const busyOutcome = await simulateOutcome(call.callSid, 'busy');
  assert.equal(busyOutcome.status, 'busy');
  assert.ok(busyOutcome.errorMessage.includes('busy'));

  const retryCall = await retryMockCall(call.callSid);
  assert.equal(retryCall.status, 'queued');
  assert.equal(retryCall.retryCount, 1);

  const completedOutcome = await simulateOutcome(call.callSid, 'completed');
  assert.equal(completedOutcome.status, 'completed');
  assert.ok(completedOutcome.durationSeconds > 0);

  // Attempting to retry a completed call should fail
  await assert.rejects(
    async () => retryMockCall(call.callSid),
    /Only calls in 'failed, busy, no-answer' status can be retried/
  );
});

test('telephony service defaults to mock mode with zero telephone network calls', () => {
  assert.equal(isLiveTelephonyEnabled(), false);
  const summary = getTelephonyConfigSummary();
  assert.equal(summary.telephonyMode, 'mock');
  assert.equal(summary.cost, '₹0.00 (Completely Free Simulation)');
});

test('Exotel Connect Two Numbers payload formats From/To and respects EXOTEL_DIAL_FIRST', async () => {
  const { prepareConnectTwoNumbersCall } = await import('../services/exotelService.js');
  const testPhone = process.env.EXOTEL_TEST_PHONE;
  const counsellor = process.env.EXOTEL_COUNSELLOR_NUMBER;
  const callerId = process.env.EXOTEL_CALLER_ID;

  // 1. Default (student first)
  const defaultPlan = prepareConnectTwoNumbersCall(testPhone);
  assert.equal(defaultPlan.dialOrder.dialFirst, 'student');
  assert.equal(defaultPlan.requestPayload.From, `+91${testPhone.slice(-10)}`);
  assert.equal(defaultPlan.requestPayload.To, `+91${counsellor.slice(-10)}`);
  assert.equal(defaultPlan.requestPayload.CallerId, callerId);
  assert.equal(defaultPlan.requestPayload.CallType, 'trans');
  assert.equal(defaultPlan.apiHost, 'https://api.exotel.com');
  assert.match(defaultPlan.dialOrder.description, /Exotel will dial Student.*first.*dial Counsellor/);

  // 2. Counsellor first
  const prevDial = process.env.EXOTEL_DIAL_FIRST;
  try {
    process.env.EXOTEL_DIAL_FIRST = 'counsellor';
    const counsellorPlan = prepareConnectTwoNumbersCall(testPhone);
    assert.equal(counsellorPlan.dialOrder.dialFirst, 'counsellor');
    assert.equal(counsellorPlan.requestPayload.From, `+91${counsellor.slice(-10)}`);
    assert.equal(counsellorPlan.requestPayload.To, `+91${testPhone.slice(-10)}`);
    assert.equal(counsellorPlan.requestPayload.CallerId, callerId);
    assert.match(counsellorPlan.dialOrder.description, /Exotel will dial Counsellor.*first.*dial Student/);
  } finally {
    if (prevDial === undefined) delete process.env.EXOTEL_DIAL_FIRST;
    else process.env.EXOTEL_DIAL_FIRST = prevDial;
  }
});

test('Exotel destination restrictions reject any number not matching EXOTEL_TEST_PHONE', async () => {
  const { prepareConnectTwoNumbersCall } = await import('../services/exotelService.js');
  const forbiddenNumber = '9876500000';

  assert.throws(
    () => prepareConnectTwoNumbersCall(forbiddenNumber),
    /Unauthorized destination/
  );
});

