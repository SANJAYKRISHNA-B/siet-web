import { requireDatabase } from '../config/db.js';

export async function findRecentAdmissionEnquiry(mobileNumber, department, since) {
  const db = requireDatabase();
  const [rows] = await db.execute(
    `SELECT id, mobile_number AS mobileNumber
       FROM admission_enquiries
      WHERE mobile_number = ? AND department = ? AND created_at >= ?
      ORDER BY created_at DESC
      LIMIT 1`,
    [mobileNumber, department, since]
  );
  return rows[0] || null;
}

export async function insertAdmissionEnquiry(data) {
  const db = requireDatabase();
  const [result] = await db.execute(
    `INSERT INTO admission_enquiries
      (student_name, mobile_number, email, course, department, city, source, remarks, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [data.studentName, data.mobileNumber, data.email || null, data.course || null,
      data.department || null, data.city || null, data.source || 'Website',
      data.remarks || null, data.status || 'new']
  );
  return { id: result.insertId, mobileNumber: data.mobileNumber };
}

export async function insertAdmissionEnquiryCall(data) {
  const db = requireDatabase();
  const [result] = await db.execute(
    `INSERT INTO admission_enquiry_calls
      (admission_enquiry_id, provider_call_sid, student_number, counsellor_number, call_status, error_message)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [data.enquiryId, data.callSid || null, data.studentNumber, data.counsellorNumber,
      data.status || 'requested', data.errorMessage || null]
  );
  return { id: result.insertId };
}
