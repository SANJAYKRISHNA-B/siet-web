import {
  listAllAdmissionEnquiryCalls,
  getCallSummaryStats,
  getAdmissionEnquiryCallBySid,
  insertAdmissionEnquiry
} from '../repositories/admissionEnquiryRepository.js';
import { retryMockCall } from '../services/mockCallService.js';
import { getTelephonyConfigSummary, connectStudentToCounsellor, isLiveTelephonyEnabled } from '../services/exotelService.js';
import { initiateTestAutomatedCall } from '../services/admissionEnquiryService.js';
import { isSqliteFallback } from '../config/db.js';

export function verifyAdminAuth(req, res, next) {
  const configuredKey = process.env.ADMIN_API_KEY || 'siet-admin-2026';
  const providedKey = req.headers['x-admin-key']
    || (req.headers.authorization && req.headers.authorization.replace(/^Bearer\s+/i, ''))
    || req.query.admin_key
    || req.body?.admin_key;

  if (!providedKey || providedKey !== configuredKey) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Administrator access required. Enter the administrator passkey.'
    });
  }

  next();
}

export async function verifyAdminKey(req, res) {
  // If request reached here through verifyAdminAuth middleware, key is valid!
  return res.json({
    success: true,
    message: 'Administrator authenticated successfully.'
  });
}

export async function getAdminCallLogs(req, res, next) {
  try {
    const limit = Math.min(Number(req.query.limit || 50), 200);
    const offset = Math.max(Number(req.query.offset || 0), 0);
    const statusFilter = req.query.status || 'all';

    const calls = await listAllAdmissionEnquiryCalls(limit, offset, statusFilter);
    const stats = await getCallSummaryStats();
    const config = getTelephonyConfigSummary();

    return res.json({
      success: true,
      data: {
        calls,
        stats,
        telephony: {
          ...config,
          databaseEngine: isSqliteFallback() ? 'SQLite (Built-in Persistent Free Mode)' : 'MySQL Database',
          budget: '₹0 (Completely Free)'
        }
      }
    });
  } catch (error) {
    return next(error);
  }
}

export async function retryCall(req, res, next) {
  try {
    const { callSid } = req.params;
    if (!callSid) {
      return res.status(400).json({ success: false, message: 'Call SID is required.' });
    }

    const record = await getAdmissionEnquiryCallBySid(callSid);
    if (!record) {
      return res.status(404).json({ success: false, message: 'Call record not found.' });
    }

    let retried = null;
    if (record.provider === 'mock' || !isLiveTelephonyEnabled()) {
      retried = await retryMockCall(callSid);
    } else {
      retried = await connectStudentToCounsellor(record.studentNumber);
    }

    return res.json({
      success: true,
      message: 'Call retry scheduled successfully.',
      data: retried
    });
  } catch (error) {
    return next(error);
  }
}

export async function getSystemStatus(req, res, next) {
  try {
    const stats = await getCallSummaryStats();
    const config = getTelephonyConfigSummary();

    return res.json({
      success: true,
      data: {
        stats,
        telephony: config,
        database: {
          engine: isSqliteFallback() ? 'SQLite' : 'MySQL',
          isFreeMode: isSqliteFallback(),
          location: isSqliteFallback() ? 'server/data/siet.sqlite' : (process.env.MYSQL_HOST || '127.0.0.1')
        },
        security: {
          adminProtection: 'Active',
          rateLimiting: '10 requests per 5 min per IP',
          duplicateWindowMinutes: 5,
          mockCallsAlwaysSafe: true
        }
      }
    });
  } catch (error) {
    return next(error);
  }
}

export async function triggerAdminTestCall(req, res, next) {
  try {
    const phoneNumber = req.body.phoneNumber || process.env.EXOTEL_TEST_PHONE_NUMBER || '9876543210';
    const targetOutcome = req.body.targetOutcome || 'completed';

    let enquiryId = req.body.enquiryId;
    if (!enquiryId) {
      const testRecord = await insertAdmissionEnquiry({
        studentName: 'Admin Test Call',
        mobileNumber: phoneNumber,
        course: 'UG',
        department: 'Admissions Office (Admin Test)',
        source: 'Admin Console',
        consent: true,
        status: 'admin_test'
      });
      enquiryId = testRecord.id;
    }

    const result = await initiateTestAutomatedCall({
      enquiryId,
      mobileNumber: phoneNumber,
      consent: true,
      targetOutcome
    });

    return res.json({
      success: true,
      message: 'Admin authorized test call initiated.',
      data: result.call
    });
  } catch (error) {
    return next(error);
  }
}

