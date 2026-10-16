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

export async function findRecentAdmissionEnquiryCall(enquiryId, mobileNumber, since) {
  const db = requireDatabase();
  const rawDigits = String(mobileNumber || '').replace(/\D/g, '').slice(-10);
  const [rows] = await db.execute(
    `SELECT id, provider_call_sid AS callSid, call_status AS status, created_at AS createdAt
       FROM admission_enquiry_calls
      WHERE (admission_enquiry_id = ? OR student_number LIKE ? OR student_number = ?)
        AND created_at >= ?
      ORDER BY created_at DESC
      LIMIT 1`,
    [enquiryId || 0, `%${rawDigits}%`, mobileNumber, since]
  );
  return rows[0] || null;
}

export async function insertAdmissionEnquiry(data) {
  const db = requireDatabase();
  const [result] = await db.execute(
    `INSERT INTO admission_enquiries
      (student_name, mobile_number, email, course, department, city, source, remarks, consent, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.studentName,
      data.mobileNumber,
      data.email || null,
      data.course || null,
      data.department || null,
      data.city || null,
      data.source || 'Website',
      data.remarks || null,
      data.consent ? 1 : 0,
      data.status || 'new'
    ]
  );
  return { id: result.insertId, mobileNumber: data.mobileNumber };
}

export async function getAdmissionEnquiryById(id) {
  const db = requireDatabase();
  const [rows] = await db.execute(
    `SELECT id, student_name AS studentName, mobile_number AS mobileNumber,
            email, course, department, city, source, remarks, consent,
            status, created_at AS createdAt
       FROM admission_enquiries
      WHERE id = ?
      LIMIT 1`,
    [id]
  );
  return rows[0] || null;
}

export async function insertAdmissionEnquiryCall(data) {
  const db = requireDatabase();
  const [result] = await db.execute(
    `INSERT INTO admission_enquiry_calls
      (admission_enquiry_id, provider, provider_call_sid, student_number, counsellor_number, call_status, duration_seconds, retry_count, error_message)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      data.enquiryId,
      data.provider || 'mock',
      data.callSid || null,
      data.studentNumber,
      data.counsellorNumber,
      data.status || 'queued',
      data.durationSeconds || 0,
      data.retryCount || 0,
      data.errorMessage || null
    ]
  );
  return { id: result.insertId, callSid: data.callSid };
}

export async function getAdmissionEnquiryCallBySid(callSid) {
  const db = requireDatabase();
  const [rows] = await db.execute(
    `SELECT c.id, c.admission_enquiry_id AS enquiryId, c.provider,
            c.provider_call_sid AS callSid, c.student_number AS studentNumber,
            c.counsellor_number AS counsellorNumber, c.call_status AS status,
            c.duration_seconds AS durationSeconds, c.retry_count AS retryCount,
            c.error_message AS errorMessage, c.created_at AS createdAt,
            c.updated_at AS updatedAt,
            e.student_name AS studentName, e.course, e.department
       FROM admission_enquiry_calls c
       LEFT JOIN admission_enquiries e ON c.admission_enquiry_id = e.id
      WHERE c.provider_call_sid = ?
      LIMIT 1`,
    [callSid]
  );
  return rows[0] || null;
}

export async function updateAdmissionEnquiryCallStatus(callSid, status, durationSeconds = null, errorMessage = null, incrementRetry = false) {
  const db = requireDatabase();
  if (incrementRetry) {
    await db.execute(
      `UPDATE admission_enquiry_calls
          SET call_status = ?,
              duration_seconds = COALESCE(?, duration_seconds),
              error_message = ?,
              retry_count = retry_count + 1,
              updated_at = CURRENT_TIMESTAMP
        WHERE provider_call_sid = ?`,
      [status, durationSeconds, errorMessage, callSid]
    );
  } else {
    await db.execute(
      `UPDATE admission_enquiry_calls
          SET call_status = ?,
              duration_seconds = COALESCE(?, duration_seconds),
              error_message = ?,
              updated_at = CURRENT_TIMESTAMP
        WHERE provider_call_sid = ?`,
      [status, durationSeconds, errorMessage, callSid]
    );
  }
  return getAdmissionEnquiryCallBySid(callSid);
}

export async function listAllAdmissionEnquiryCalls(limit = 50, offset = 0, statusFilter = null) {
  const db = requireDatabase();
  if (statusFilter && statusFilter !== 'all') {
    const [rows] = await db.execute(
      `SELECT c.id, c.admission_enquiry_id AS enquiryId, c.provider,
              c.provider_call_sid AS callSid, c.student_number AS studentNumber,
              c.counsellor_number AS counsellorNumber, c.call_status AS status,
              c.duration_seconds AS durationSeconds, c.retry_count AS retryCount,
              c.error_message AS errorMessage, c.created_at AS createdAt,
              c.updated_at AS updatedAt,
              e.student_name AS studentName, e.course, e.department
         FROM admission_enquiry_calls c
         LEFT JOIN admission_enquiries e ON c.admission_enquiry_id = e.id
        WHERE c.call_status = ?
        ORDER BY c.created_at DESC
        LIMIT ? OFFSET ?`,
      [statusFilter, limit, offset]
    );
    return rows;
  }

  const [rows] = await db.execute(
    `SELECT c.id, c.admission_enquiry_id AS enquiryId, c.provider,
            c.provider_call_sid AS callSid, c.student_number AS studentNumber,
            c.counsellor_number AS counsellorNumber, c.call_status AS status,
            c.duration_seconds AS durationSeconds, c.retry_count AS retryCount,
            c.error_message AS errorMessage, c.created_at AS createdAt,
            c.updated_at AS updatedAt,
            e.student_name AS studentName, e.course, e.department
       FROM admission_enquiry_calls c
       LEFT JOIN admission_enquiries e ON c.admission_enquiry_id = e.id
      ORDER BY c.created_at DESC
      LIMIT ? OFFSET ?`,
    [limit, offset]
  );
  return rows;
}

export async function getCallSummaryStats() {
  const db = requireDatabase();
  const [totalRows] = await db.execute(`SELECT COUNT(*) AS total FROM admission_enquiry_calls`);
  const [statusRows] = await db.execute(
    `SELECT call_status AS status, COUNT(*) AS count
       FROM admission_enquiry_calls
      GROUP BY call_status`
  );
  const [enquiriesRows] = await db.execute(`SELECT COUNT(*) AS totalEnquiries FROM admission_enquiries`);

  const statusMap = {};
  for (const row of statusRows) {
    statusMap[row.status] = Number(row.count);
  }

  return {
    totalCalls: Number(totalRows[0]?.total || 0),
    totalEnquiries: Number(enquiriesRows[0]?.totalEnquiries || 0),
    queued: statusMap.queued || 0,
    ringing: statusMap.ringing || 0,
    completed: statusMap.completed || 0,
    busy: statusMap.busy || 0,
    noAnswer: statusMap['no-answer'] || 0,
    failed: statusMap.failed || 0
  };
}
