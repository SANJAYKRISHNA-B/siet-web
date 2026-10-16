import {
  findRecentAdmissionEnquiry,
  findRecentAdmissionEnquiryCall,
  insertAdmissionEnquiry,
  insertAdmissionEnquiryCall
} from '../repositories/admissionEnquiryRepository.js';
import { connectStudentToCounsellor, isLiveTelephonyEnabled } from './exotelService.js';
import { createMockCall } from './mockCallService.js';

const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;

async function recordLiveCall(data) {
  try {
    await insertAdmissionEnquiryCall(data);
  } catch (error) {
    console.error(`Could not record call for enquiry ${data.enquiryId}: ${error.message}`);
  }
}

export async function initiateTestAutomatedCall({ enquiryId, mobileNumber, consent, targetOutcome = 'completed' }) {
  if (!consent) {
    const error = new Error('Explicit consent is required to initiate an automated test call.');
    error.status = 400;
    throw error;
  }

  // 5-minute duplicate call suppression
  const recentCall = await findRecentAdmissionEnquiryCall(
    enquiryId,
    mobileNumber,
    new Date(Date.now() - DUPLICATE_WINDOW_MS)
  );

  if (recentCall) {
    return {
      call: {
        skipped: true,
        status: 'duplicate_prevented',
        callSid: recentCall.callSid,
        message: 'A test call was already requested for this number recently. Please wait 5 minutes before trying again.'
      },
      duplicateCall: true
    };
  }

  let call = null;

  if (isLiveTelephonyEnabled()) {
    // Live Exotel call (only if explicitly enabled with TELEPHONY_MODE=live and authorized test number)
    const studentNumber = `+91${String(mobileNumber).replace(/\D/g, '').slice(-10)}`;
    const counsellorNumber = process.env.EXOTEL_COUNSELLOR_NUMBER || 'App-Flow';
    try {
      call = await connectStudentToCounsellor(mobileNumber);
      await recordLiveCall({
        enquiryId: enquiryId || null,
        provider: 'exotel',
        callSid: call.callSid,
        studentNumber,
        counsellorNumber,
        status: call.status
      });
    } catch (error) {
      call = { skipped: false, provider: 'exotel', status: 'failed', errorMessage: error.message };
      await recordLiveCall({
        enquiryId: enquiryId || null,
        provider: 'exotel',
        studentNumber,
        counsellorNumber,
        status: 'failed',
        errorMessage: error.message
      });
      throw error;
    }
  } else {
    // Default Free Mode: Simulated mock call (₹0 budget, no API key, no charges)
    call = await createMockCall({
      enquiryId: enquiryId || null,
      studentNumber: mobileNumber,
      counsellorNumber: process.env.EXOTEL_COUNSELLOR_NUMBER || '+919876543210',
      targetOutcome: targetOutcome || 'completed'
    });
  }

  return { call, duplicateCall: false };
}

export async function saveAdmissionEnquiry(data, options = {}) {
  const recentMatch = await findRecentAdmissionEnquiry(
    data.mobileNumber,
    data.department,
    new Date(Date.now() - DUPLICATE_WINDOW_MS)
  );

  if (recentMatch) {
    return {
      enquiry: recentMatch,
      duplicate: true,
      call: {
        skipped: true,
        status: 'duplicate_prevented',
        message: 'Duplicate application detected within 5 minutes. Additional call suppressed.'
      }
    };
  }

  const enquiry = await insertAdmissionEnquiry(data);
  let call = null;

  if (options.autoCall !== false && data.triggerCall !== false) {
    try {
      const res = await initiateTestAutomatedCall({
        enquiryId: enquiry.id,
        mobileNumber: data.mobileNumber,
        consent: data.consent,
        targetOutcome: data.targetOutcome || 'completed'
      });
      call = res.call;
    } catch (err) {
      call = { skipped: true, status: 'failed', errorMessage: err.message };
    }
  }

  return { enquiry, duplicate: false, call };
}
