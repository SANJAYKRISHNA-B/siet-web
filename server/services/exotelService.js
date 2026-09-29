const requiredVariables = [
  'EXOTEL_API_KEY',
  'EXOTEL_API_TOKEN',
  'EXOTEL_ACCOUNT_SID',
  'EXOTEL_CALLER_ID',
  'EXOTEL_COUNSELLOR_NUMBER'
];

export function isExotelConfigured() {
  return requiredVariables.every(name => Boolean(process.env[name]));
}

function indianE164(value) {
  const digits = String(value || '').replace(/\D/g, '');
  if (/^[6-9]\d{9}$/.test(digits)) return `+91${digits}`;
  if (/^91[6-9]\d{9}$/.test(digits)) return `+${digits}`;
  throw new Error('Exotel phone numbers must be valid Indian mobile numbers.');
}

export async function connectStudentToCounsellor(studentNumber) {
  if (!isExotelConfigured()) return { skipped: true, status: 'not_configured' };

  const baseUrl = (process.env.EXOTEL_API_BASE_URL || 'https://api.in.exotel.com').replace(/\/$/, '');
  const accountSid = encodeURIComponent(process.env.EXOTEL_ACCOUNT_SID);
  const endpoint = `${baseUrl}/v1/Accounts/${accountSid}/Calls/connect.json`;
  const student = indianE164(studentNumber);
  const counsellor = indianE164(process.env.EXOTEL_COUNSELLOR_NUMBER);
  const body = new URLSearchParams({
    From: student,
    To: counsellor,
    CallerId: process.env.EXOTEL_CALLER_ID
  });
  const auth = Buffer.from(`${process.env.EXOTEL_API_KEY}:${process.env.EXOTEL_API_TOKEN}`).toString('base64');

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body,
    signal: AbortSignal.timeout(10000)
  });
  const responseText = await response.text();
  let payload = {};
  try { payload = JSON.parse(responseText); } catch { /* handled as an HTTP error below */ }

  if (!response.ok) {
    const message = payload?.RestException?.Message || payload?.message || responseText || `HTTP ${response.status}`;
    throw new Error(`Exotel rejected the call request: ${String(message).slice(0, 350)}`);
  }

  const call = payload.Call || payload.call || payload;
  return {
    skipped: false,
    callSid: call.Sid || call.sid || null,
    status: call.Status || call.status || 'queued',
    studentNumber: student,
    counsellorNumber: counsellor
  };
}
