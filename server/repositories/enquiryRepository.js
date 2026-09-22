import { requireDatabase } from '../config/db.js';

export async function insertEnquiry(data) {
  const db = requireDatabase();
  const [result] = await db.execute(
    `INSERT INTO enquiries (name, email, phone, course, message, enquiry_type)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [data.name, data.email, data.phone, data.course, data.message || null, data.enquiryType]
  );
  return { id: result.insertId };
}
