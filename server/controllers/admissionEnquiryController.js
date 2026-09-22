import { saveAdmissionEnquiry } from '../services/admissionEnquiryService.js';

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

export async function createAdmissionEnquiry(req, res, next) {
  try {
    const studentName = cleanText(req.body.studentName ?? req.body.name, 150);
    const mobileNumber = normalizeIndianMobile(req.body.mobileNumber ?? req.body.phone);
    const email = normalizeEmail(req.body.email);
    const course = cleanText(req.body.course ?? req.body.level, 100);
    const department = cleanText(req.body.department ?? req.body.preferredDepartment, 180);
    const city = cleanText(req.body.city, 100);
    const source = cleanText(req.body.source, 100) || 'Website';
    const remarks = cleanText(req.body.remarks ?? req.body.message, 2000);

    if (!studentName) throw validationError('Student name is required.');
    if (!mobileNumber) throw validationError('Enter a valid Indian mobile number, such as 9876543210 or +919876543210.');
    if (email === null) throw validationError('Enter a valid email address.');
    if (!course) throw validationError('Course level is required.');
    if (!department) throw validationError('Preferred department is required.');

    const { enquiry, duplicate } = await saveAdmissionEnquiry({
      studentName, mobileNumber, email, course, department, city, source, remarks, status: 'new'
    });

    return res.status(duplicate ? 200 : 201).json({
      success: true,
      message: duplicate
        ? 'This admission enquiry was already saved recently.'
        : 'Admission enquiry saved successfully',
      data: { id: enquiry.id, mobileNumber: enquiry.mobileNumber },
      duplicate
    });
  } catch (error) {
    return next(error);
  }
}
