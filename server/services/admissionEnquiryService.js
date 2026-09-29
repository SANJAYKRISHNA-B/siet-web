import {
  findRecentAdmissionEnquiry,
  insertAdmissionEnquiry,
  insertAdmissionEnquiryCall
} from '../repositories/admissionEnquiryRepository.js';
import { connectStudentToCounsellor, isExotelConfigured } from './exotelService.js';

const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;

async function recordCall(data) {
  try {
    await insertAdmissionEnquiryCall(data);
  } catch (error) {
    console.error(`Could not record Exotel call for enquiry ${data.enquiryId}: ${error.message}`);
  }
}

export async function saveAdmissionEnquiry(data) {
  const recentMatch = await findRecentAdmissionEnquiry(
    data.mobileNumber,
    data.department,
    new Date(Date.now() - DUPLICATE_WINDOW_MS)
  );

  if (recentMatch) return { enquiry: recentMatch, duplicate: true };

  const enquiry = await insertAdmissionEnquiry(data);
  let call = { skipped: true, status: 'not_configured' };

  if (isExotelConfigured()) {
    const studentNumber = `+91${data.mobileNumber}`;
    const counsellorNumber = process.env.EXOTEL_COUNSELLOR_NUMBER;
    try {
      call = await connectStudentToCounsellor(data.mobileNumber);
      await recordCall({
        enquiryId: enquiry.id,
        callSid: call.callSid,
        studentNumber,
        counsellorNumber,
        status: call.status
      });
    } catch (error) {
      call = { skipped: false, status: 'failed' };
      await recordCall({
        enquiryId: enquiry.id,
        studentNumber,
        counsellorNumber,
        status: 'failed',
        errorMessage: error.message
      });
      console.error(`Exotel call request failed for enquiry ${enquiry.id}: ${error.message}`);
    }
  }

  return { enquiry, duplicate: false, call };
}
