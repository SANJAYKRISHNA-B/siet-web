import { findRecentAdmissionEnquiry, insertAdmissionEnquiry } from '../repositories/admissionEnquiryRepository.js';

const DUPLICATE_WINDOW_MS = 5 * 60 * 1000;

export async function saveAdmissionEnquiry(data) {
  const recentMatch = await findRecentAdmissionEnquiry(
    data.mobileNumber,
    data.department,
    new Date(Date.now() - DUPLICATE_WINDOW_MS)
  );

  if (recentMatch) return { enquiry: recentMatch, duplicate: true };

  const enquiry = await insertAdmissionEnquiry(data);
  return { enquiry, duplicate: false };
}
