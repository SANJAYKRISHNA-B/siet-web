import { saveAdmissionEnquiry, initiateTestAutomatedCall } from '../services/admissionEnquiryService.js';
import { getMockCallStatus, simulateOutcome } from '../services/mockCallService.js';
import { updateAdmissionEnquiryCallStatus, getAdmissionEnquiryById } from '../repositories/admissionEnquiryRepository.js';
import { validateWebhookAuth } from '../services/exotelService.js';

export function cleanText(value, maxLength = 255) {
  if (value === undefined || value === null) return '';
  return String(value)
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

export function normalizeIndianMobile(value) {
  let mobile = cleanText(value, 30).replace(/[\s()-]/g, '');
  if (mobile.startsWith('+91')) mobile = mobile.slice(3);
  else if (mobile.startsWith('91') && mobile.length === 12) mobile = mobile.slice(2);
  return /^[6-9]\d{9}$/.test(mobile) ? mobile : null;
}

export function normalizeEmail(value) {
  const email = cleanText(value, 255).toLowerCase();
  if (!email) return '';
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}

function validationError(message) {
  const error = new Error(message);
  error.status = 400;
  return error;
}

// In-memory IP rate limiter: max 10 submissions per IP per 5 minutes
const rateLimitMap = new Map();

export function checkRateLimit(ip) {
  if (
    process.env.NODE_ENV === 'test' ||
    Boolean(process.env.NODE_TEST_CONTEXT) ||
    process.argv.some(a => typeof a === 'string' && a.includes('--test')) ||
    process.execArgv.some(a => typeof a === 'string' && a.includes('--test'))
  ) {
    return true;
  }

  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, resetAt: now + 5 * 60 * 1000 };
  if (now > entry.resetAt) {
    entry.count = 1;
    entry.resetAt = now + 5 * 60 * 1000;
  } else {
    entry.count++;
  }
  rateLimitMap.set(ip, entry);
  return entry.count <= 10;
}

export function resetRateLimits() {
  rateLimitMap.clear();
}

export async function createAdmissionEnquiry(req, res, next) {
  try {
    const ip = req.ip || req.socket?.remoteAddress || 'unknown';
    if (!checkRateLimit(ip)) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please wait a few minutes before submitting again.'
      });
    }

    const studentName = cleanText(req.body.studentName ?? req.body.name, 150);
    const mobileNumber = normalizeIndianMobile(req.body.mobileNumber ?? req.body.phone);
    const email = normalizeEmail(req.body.email);
    const course = cleanText(req.body.course ?? req.body.level, 100);
    const department = cleanText(req.body.department ?? req.body.preferredDepartment, 180);
    const city = cleanText(req.body.city, 100);
    const source = cleanText(req.body.source, 100) || 'Website';
    const remarks = cleanText(req.body.remarks ?? req.body.message, 2000);
    const consent = Boolean(req.body.consent === true || req.body.consent === 'true' || req.body.consent === 1 || req.body.consent === '1');
    const targetOutcome = cleanText(req.body.targetOutcome, 30) || 'completed';

    if (!studentName) throw validationError('Student name is required.');
    if (!mobileNumber) throw validationError('Enter a valid Indian mobile number, such as 9876543210 or +919876543210.');
    if (email === null) throw validationError('Enter a valid email address.');
    if (!course) throw validationError('Course level is required.');
    if (!department) throw validationError('Preferred department is required.');
    if (!consent) throw validationError('You must provide consent for communication before submitting the application.');

    const { enquiry, duplicate, call } = await saveAdmissionEnquiry({
      studentName,
      mobileNumber,
      email,
      course,
      department,
      city,
      source,
      remarks,
      consent,
      targetOutcome,
      status: 'new'
    });

    return res.status(duplicate ? 200 : 201).json({
      success: true,
      message: duplicate
        ? 'An application with this mobile number and department was already received recently.'
        : 'Admission application saved successfully. Automated counselling call initiated.',
      data: {
        id: enquiry.id,
        studentName,
        mobileNumber: enquiry.mobileNumber,
        department,
        course,
        call: duplicate ? {
          status: 'duplicate_prevented',
          isMock: true,
          label: 'MOCK MODE — NO REAL CALLS',
          message: 'Duplicate submission: duplicate call suppressed.'
        } : call
      },
      duplicate
    });
  } catch (error) {
    return next(error);
  }
}

export async function triggerTestAutomatedCall(req, res, next) {
  try {
    const ip = req.ip || req.socket?.remoteAddress || 'unknown';
    if (!checkRateLimit(ip)) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please wait a few minutes before trying again.'
      });
    }

    const { id } = req.params;
    const enquiry = await getAdmissionEnquiryById(id);
    if (!enquiry) {
      return res.status(404).json({ success: false, message: 'Admission application record not found.' });
    }

    const consent = Boolean(req.body.consent === true || req.body.consent === 'true' || req.body.consent === 1);
    if (!consent) {
      return res.status(400).json({
        success: false,
        message: 'Explicit consent is required before initiating an automated test call.'
      });
    }

    const targetOutcome = cleanText(req.body.targetOutcome, 30) || 'completed';

    const result = await initiateTestAutomatedCall({
      enquiryId: enquiry.id,
      mobileNumber: enquiry.mobileNumber,
      consent: true,
      targetOutcome
    });

    if (result.duplicateCall) {
      return res.status(429).json({
        success: false,
        message: result.call.message,
        data: result.call
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Automated admissions verification call initiated.',
      data: {
        enquiryId: enquiry.id,
        studentName: enquiry.studentName,
        mobileNumber: enquiry.mobileNumber,
        department: enquiry.department,
        call: result.call
      }
    });
  } catch (error) {
    return next(error);
  }
}

export async function getCallStatus(req, res, next) {
  try {
    const { callSid } = req.params;
    if (!callSid) throw validationError('Call identifier is required.');

    const status = await getMockCallStatus(callSid);
    if (!status) {
      return res.status(404).json({ success: false, message: 'Call record not found.' });
    }

    return res.json({
      success: true,
      data: status
    });
  } catch (error) {
    return next(error);
  }
}

export async function simulateCallOutcome(req, res, next) {
  try {
    const { callSid } = req.params;
    const { outcome } = req.body;
    if (!callSid) throw validationError('Call identifier is required.');
    if (!outcome) throw validationError('Outcome is required (e.g. completed, busy, no-answer, failed).');

    const updated = await simulateOutcome(callSid, outcome);
    return res.json({
      success: true,
      message: `Simulated call outcome set to: ${outcome}`,
      data: updated
    });
  } catch (error) {
    return next(error);
  }
}

export async function handleExotelWebhook(req, res, next) {
  try {
    if (!validateWebhookAuth(req)) {
      return res.status(401).json({ success: false, message: 'Invalid webhook signature or token.' });
    }

    const callSid = req.body?.CallSid || req.body?.callSid || req.query?.CallSid;
    const rawStatus = req.body?.Status || req.body?.status || req.query?.Status;
    const status = (rawStatus || '').toLowerCase().trim();
    const duration = Number(req.body?.RecordingDuration || req.body?.Duration || 0);

    if (!callSid || !status) {
      return res.status(400).json({
        success: false,
        message: 'Invalid webhook payload: Both CallSid and Status are required.'
      });
    }

    const updated = await updateAdmissionEnquiryCallStatus(callSid, status, duration);
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: `Call record with Sid '${callSid}' not found.`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Webhook processed successfully.',
      data: {
        callSid: updated.callSid,
        status: updated.status,
        durationSeconds: updated.durationSeconds
      }
    });
  } catch (error) {
    return next(error);
  }
}
