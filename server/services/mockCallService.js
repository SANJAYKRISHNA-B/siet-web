import crypto from 'node:crypto';
import {
  insertAdmissionEnquiryCall,
  getAdmissionEnquiryCallBySid,
  updateAdmissionEnquiryCallStatus
} from '../repositories/admissionEnquiryRepository.js';

// In-memory registry for simulation timers and requested outcomes
const activeSimulations = new Map();

export function generateMockCallId() {
  const stamp = Date.now().toString(36);
  const rand = crypto.randomBytes(3).toString('hex');
  return `mock_call_${stamp}_${rand}`;
}

export function maskPhoneNumber(phone) {
  if (!phone) return '';
  const str = String(phone);
  if (str.length <= 4) return '***';
  return str.slice(0, 3) + '*****' + str.slice(-2);
}

export async function createMockCall({ enquiryId, studentNumber, counsellorNumber, targetOutcome = 'completed' }) {
  const callSid = generateMockCallId();
  const counsellor = counsellorNumber || '+919876543210';
  const student = studentNumber.startsWith('+') ? studentNumber : `+91${studentNumber}`;

  await insertAdmissionEnquiryCall({
    enquiryId,
    provider: 'mock',
    callSid,
    studentNumber: student,
    counsellorNumber: counsellor,
    status: 'queued',
    durationSeconds: 0,
    retryCount: 0,
    errorMessage: null
  });

  activeSimulations.set(callSid, {
    startTime: Date.now(),
    targetOutcome: targetOutcome || 'completed',
    enquiryId
  });

  return {
    skipped: false,
    isMock: true,
    provider: 'mock',
    callSid,
    status: 'queued',
    studentNumber: student,
    counsellorNumber: counsellor,
    label: 'MOCK MODE — NO REAL CALLS',
    message: 'Simulated automated counselling call initiated. No real telephone charges incurred.'
  };
}

export async function getMockCallStatus(callSid) {
  const record = await getAdmissionEnquiryCallBySid(callSid);
  if (!record) return null;

  // If this is an Exotel live call, return current database status directly
  if (record.provider !== 'mock') {
    return {
      ...record,
      isMock: false,
      maskedStudentNumber: maskPhoneNumber(record.studentNumber)
    };
  }

  // Handle mock progression
  let currentStatus = record.status;
  let duration = record.durationSeconds || 0;
  let errorMessage = record.errorMessage;

  const sim = activeSimulations.get(callSid);
  const now = Date.now();
  const createdMs = new Date(record.createdAt).getTime();
  const elapsed = sim ? (now - sim.startTime) : (now - createdMs);
  const target = sim?.targetOutcome || 'completed';

  // State machine progression:
  // 0s - 1.5s: queued
  // 1.5s - 4.5s: ringing
  // 4.5s+: final outcome (completed, busy, no-answer, or failed)
  if (currentStatus === 'queued' && elapsed >= 1500) {
    currentStatus = 'ringing';
    await updateAdmissionEnquiryCallStatus(callSid, 'ringing');
  }

  if ((currentStatus === 'ringing' || currentStatus === 'queued') && elapsed >= 4500) {
    if (target === 'busy') {
      currentStatus = 'busy';
      errorMessage = 'Simulated: Line busy / student on another call.';
      duration = 0;
    } else if (target === 'no-answer') {
      currentStatus = 'no-answer';
      errorMessage = 'Simulated: Ringer timed out after 45 seconds with no answer.';
      duration = 0;
    } else if (target === 'failed') {
      currentStatus = 'failed';
      errorMessage = 'Simulated: Network carrier timeout / unreachable destination.';
      duration = 0;
    } else {
      currentStatus = 'completed';
      duration = Math.floor(35 + Math.random() * 25); // 35-60 seconds duration
      errorMessage = null;
    }
    await updateAdmissionEnquiryCallStatus(callSid, currentStatus, duration, errorMessage);
  }

  const updatedRecord = await getAdmissionEnquiryCallBySid(callSid);

  return {
    id: updatedRecord.id,
    enquiryId: updatedRecord.enquiryId,
    callSid: updatedRecord.callSid,
    status: updatedRecord.status,
    provider: 'mock',
    isMock: true,
    label: 'MOCK MODE — NO REAL CALLS',
    studentNumber: maskPhoneNumber(updatedRecord.studentNumber),
    rawStudentNumber: updatedRecord.studentNumber,
    counsellorNumber: updatedRecord.counsellorNumber,
    durationSeconds: updatedRecord.durationSeconds || 0,
    retryCount: updatedRecord.retryCount || 0,
    errorMessage: updatedRecord.errorMessage,
    createdAt: updatedRecord.createdAt,
    updatedAt: updatedRecord.updatedAt,
    studentName: updatedRecord.studentName,
    course: updatedRecord.course,
    department: updatedRecord.department,
    timeline: [
      {
        stage: 'queued',
        label: 'Call Queued in System',
        reached: true,
        desc: 'Call simulation request validated and placed in admissions queue.'
      },
      {
        stage: 'ringing',
        label: 'Virtual Line Ringing',
        reached: ['ringing', 'completed', 'busy', 'no-answer', 'failed'].includes(updatedRecord.status),
        desc: 'Simulating carrier handoff and ringer tone to student device.'
      },
      {
        stage: updatedRecord.status,
        label: formatStatusLabel(updatedRecord.status),
        reached: ['completed', 'busy', 'no-answer', 'failed'].includes(updatedRecord.status),
        desc: formatStatusDescription(updatedRecord.status, updatedRecord.durationSeconds)
      }
    ]
  };
}

export async function retryMockCall(callSid) {
  const record = await getAdmissionEnquiryCallBySid(callSid);
  if (!record) {
    const error = new Error('Call record not found.');
    error.status = 404;
    throw error;
  }

  const eligibleStatuses = ['failed', 'busy', 'no-answer'];
  if (!eligibleStatuses.includes(record.status)) {
    const error = new Error(`Only calls in '${eligibleStatuses.join(', ')}' status can be retried. Current status is '${record.status}'.`);
    error.status = 400;
    throw error;
  }

  // Reset status to queued, increment retry count
  await updateAdmissionEnquiryCallStatus(callSid, 'queued', 0, null, true);

  // Reset simulation timer so it progresses again: queued -> ringing -> completed
  activeSimulations.set(callSid, {
    startTime: Date.now(),
    targetOutcome: 'completed',
    enquiryId: record.enquiryId
  });

  return getMockCallStatus(callSid);
}

export async function simulateOutcome(callSid, outcome) {
  const allowed = ['queued', 'ringing', 'completed', 'busy', 'no-answer', 'failed'];
  if (!allowed.includes(outcome)) {
    const error = new Error(`Invalid outcome. Allowed: ${allowed.join(', ')}`);
    error.status = 400;
    throw error;
  }

  let duration = 0;
  let errorMessage = null;

  if (outcome === 'completed') {
    duration = 45;
  } else if (outcome === 'busy') {
    errorMessage = 'Simulated: Line busy / student on another call.';
  } else if (outcome === 'no-answer') {
    errorMessage = 'Simulated: Ringer timed out after 45 seconds with no answer.';
  } else if (outcome === 'failed') {
    errorMessage = 'Simulated: Network carrier timeout / unreachable destination.';
  }

  await updateAdmissionEnquiryCallStatus(callSid, outcome, duration, errorMessage);
  activeSimulations.delete(callSid);
  return getMockCallStatus(callSid);
}

function formatStatusLabel(status) {
  switch (status) {
    case 'completed': return 'Call Completed Successfully';
    case 'busy': return 'Student Line Busy';
    case 'no-answer': return 'No Answer from Student';
    case 'failed': return 'Simulated Call Failed';
    case 'ringing': return 'Phone Ringing';
    default: return 'Call Queued';
  }
}

function formatStatusDescription(status, duration) {
  switch (status) {
    case 'completed': return `Automated counselling briefing completed (${duration || 45} seconds talk-time).`;
    case 'busy': return 'Simulated student phone reported busy signal. Eligible for administrator retry.';
    case 'no-answer': return 'Simulated ringer rang for 45s with no pickup. Eligible for administrator retry.';
    case 'failed': return 'Simulated failure: network routing dropped. Eligible for administrator retry.';
    case 'ringing': return 'Simulating ringback tone on test line.';
    default: return 'Queued for automated dialer dispatch.';
  }
}
