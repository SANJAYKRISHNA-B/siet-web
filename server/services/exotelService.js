export const EXOTEL_OFFICIAL_GREETING = "Thank you for your interest in Sri Shakthi Institute of Engineering and Technology. We have received your admission enquiry.";

const requiredVariables = [
  'EXOTEL_API_KEY',
  'EXOTEL_API_TOKEN',
  'EXOTEL_ACCOUNT_SID',
  'EXOTEL_CALLER_ID'
];

export function getTelephonyMode() {
  return (process.env.EXOTEL_CALL_MODE || process.env.TELEPHONY_MODE || 'mock').toLowerCase();
}

export function isExotelConfigured() {
  return requiredVariables.every(name => Boolean(process.env[name]));
}

export function isLiveTelephonyEnabled() {
  return getTelephonyMode() === 'live' && isExotelConfigured();
}

export function getExotelApiBaseUrl() {
  if (process.env.EXOTEL_API_BASE_URL) {
    return process.env.EXOTEL_API_BASE_URL.replace(/\/$/, '');
  }
  const region = (process.env.EXOTEL_REGION || 'singapore').toLowerCase().trim();
  if (region === 'mumbai' || region === 'india' || region === 'in') {
    return 'https://api.in.exotel.com';
  }
  // Singapore cluster (Default for Singapore provisioned Exotel accounts: https://api.exotel.com)
  return 'https://api.exotel.com';
}

export function getExotelRegion() {
  const url = getExotelApiBaseUrl();
  if (url.includes('api.in.exotel.com')) return 'Mumbai (India)';
  if (url.includes('api.exotel.com')) return 'Singapore';
  return 'Custom Region';
}

export function formatIndianE164(value) {
  const digits = String(value || '').replace(/\D/g, '');
  if (/^[6-9]\d{9}$/.test(digits)) return `+91${digits}`;
  if (/^91[6-9]\d{9}$/.test(digits)) return `+${digits}`;
  if (/^0[6-9]\d{9}$/.test(digits)) return `+91${digits.slice(1)}`;
  throw new Error(`Exotel phone numbers must be valid 10-digit Indian mobile numbers (received: ${value}).`);
}

export function getTenDigitIndianMobile(value) {
  const digits = String(value || '').replace(/\D/g, '');
  if (/^[6-9]\d{9}$/.test(digits)) return digits;
  if (/^91[6-9]\d{9}$/.test(digits)) return digits.slice(2);
  if (/^0[6-9]\d{9}$/.test(digits)) return digits.slice(1);
  return digits.slice(-10);
}

/**
 * Validates prerequisites and builds the exact official Exotel "Connect Two Numbers" request payload.
 *
 * Exotel Connect Two Numbers API behavior:
 * - Exotel dials 'From' first.
 * - Once the first party answers, Exotel dials 'To' and bridges the two legs together.
 * - Both parties see 'CallerId' (assigned ExoPhone).
 *
 * Safety & Security restrictions:
 * - Live calls are strictly restricted to the verified test phone (EXOTEL_TEST_PHONE) and
 *   the authorized admissions counsellor (EXOTEL_COUNSELLOR_NUMBER).
 * - Any unauthorized destination number is rejected immediately.
 */
export function prepareConnectTwoNumbersCall(targetStudentNumber) {
  const testPhoneRaw = process.env.EXOTEL_TEST_PHONE || process.env.EXOTEL_TEST_PHONE_NUMBER;
  if (!testPhoneRaw) {
    throw new Error('EXOTEL_TEST_PHONE is not configured in backend environment. Live calls are blocked to prevent dialing unverified numbers.');
  }

  const counsellorRaw = process.env.EXOTEL_COUNSELLOR_NUMBER;
  if (!counsellorRaw) {
    throw new Error('EXOTEL_COUNSELLOR_NUMBER is not configured in backend environment. Authorized admissions counsellor destination is required.');
  }

  const callerId = process.env.EXOTEL_CALLER_ID;
  if (!callerId) {
    throw new Error('EXOTEL_CALLER_ID is not configured in backend environment. Assigned virtual ExoPhone number is required.');
  }

  const accountSid = process.env.EXOTEL_ACCOUNT_SID;
  if (!accountSid) {
    throw new Error('EXOTEL_ACCOUNT_SID is not configured in backend environment.');
  }

  const formattedTestPhone = formatIndianE164(testPhoneRaw);
  const formattedCounsellor = formatIndianE164(counsellorRaw);
  const formattedStudent = formatIndianE164(targetStudentNumber);

  // STRICT DESTINATION RESTRICTION: Reject any student destination that is not the verified test phone
  const studentDigits = getTenDigitIndianMobile(targetStudentNumber);
  const testPhoneDigits = getTenDigitIndianMobile(testPhoneRaw);

  if (studentDigits !== testPhoneDigits) {
    throw new Error(`Unauthorized destination: Outbound calls are strictly restricted to the verified test phone. Destination number is rejected.`);
  }

  // Determine Dialing Order:
  // Exotel dials 'From' first. After 'From' answers, Exotel dials 'To' and bridges the call.
  // Default: 'student' (verified test phone is called first, then connected to counsellor).
  // Optional: 'counsellor' (counsellor is called first, then connected to student).
  const dialFirst = (process.env.EXOTEL_DIAL_FIRST || 'student').toLowerCase().trim();
  const isCounsellorFirst = dialFirst === 'counsellor';

  const fromNumber = isCounsellorFirst ? formattedCounsellor : formattedStudent;
  const toNumber = isCounsellorFirst ? formattedStudent : formattedCounsellor;

  const baseUrl = getExotelApiBaseUrl(); // Singapore cluster: https://api.exotel.com
  const endpoint = `${baseUrl}/v1/Accounts/${encodeURIComponent(accountSid)}/Calls/connect.json`;

  const requestPayload = {
    From: fromNumber,
    To: toNumber,
    CallerId: callerId,
    CallType: 'trans'
  };

  if (process.env.EXOTEL_TIME_LIMIT) {
    requestPayload.TimeLimit = process.env.EXOTEL_TIME_LIMIT;
  }
  if (process.env.EXOTEL_TIMEOUT) {
    requestPayload.TimeOut = process.env.EXOTEL_TIMEOUT;
  }
  if (process.env.EXOTEL_STATUS_CALLBACK_URL) {
    requestPayload.StatusCallback = process.env.EXOTEL_STATUS_CALLBACK_URL;
    requestPayload['StatusCallbackEvents[0]'] = 'terminal';
  }

  return {
    endpoint,
    apiHost: baseUrl,
    accountSid,
    callerId,
    dialOrder: {
      dialFirst: isCounsellorFirst ? 'counsellor' : 'student',
      from: fromNumber,
      fromParty: isCounsellorFirst ? 'Admissions Counsellor' : 'Student (Verified Test Phone)',
      to: toNumber,
      toParty: isCounsellorFirst ? 'Student (Verified Test Phone)' : 'Admissions Counsellor',
      description: isCounsellorFirst
        ? `Exotel will dial Counsellor (From: ${fromNumber}) first. Once answered, Exotel will dial Student (To: ${toNumber}) and bridge the call.`
        : `Exotel will dial Student (From: ${fromNumber}) first. Once answered, Exotel will dial Counsellor (To: ${toNumber}) and bridge the call.`
    },
    requestPayload,
    authorizedNumbers: {
      testPhone: formattedTestPhone,
      counsellorNumber: formattedCounsellor,
      callerId
    }
  };
}

export function checkLiveReadiness() {
  const hasApiKey = Boolean(process.env.EXOTEL_API_KEY && process.env.EXOTEL_API_KEY.trim());
  const hasApiToken = Boolean(process.env.EXOTEL_API_TOKEN && process.env.EXOTEL_API_TOKEN.trim());
  const hasAccountSid = Boolean(process.env.EXOTEL_ACCOUNT_SID && process.env.EXOTEL_ACCOUNT_SID.trim());
  const hasCallerId = Boolean(process.env.EXOTEL_CALLER_ID && process.env.EXOTEL_CALLER_ID.trim());
  const hasTestPhone = Boolean(
    (process.env.EXOTEL_TEST_PHONE && process.env.EXOTEL_TEST_PHONE.trim()) ||
    (process.env.EXOTEL_TEST_PHONE_NUMBER && process.env.EXOTEL_TEST_PHONE_NUMBER.trim())
  );
  const hasCounsellorNumber = Boolean(
    process.env.EXOTEL_COUNSELLOR_NUMBER && process.env.EXOTEL_COUNSELLOR_NUMBER.trim()
  );

  const missing = [];
  if (!hasAccountSid) missing.push('EXOTEL_ACCOUNT_SID');
  if (!hasApiKey) missing.push('EXOTEL_API_KEY');
  if (!hasApiToken) missing.push('EXOTEL_API_TOKEN');
  if (!hasCallerId) missing.push('EXOTEL_CALLER_ID');
  if (!hasTestPhone) missing.push('EXOTEL_TEST_PHONE');
  if (!hasCounsellorNumber) missing.push('EXOTEL_COUNSELLOR_NUMBER');

  const isConfigured = hasAccountSid && hasApiKey && hasApiToken && hasCallerId;
  const isReadyForRealCall = isConfigured && hasTestPhone && hasCounsellorNumber;

  return {
    isReadyForRealCall,
    isConfigured,
    region: getExotelRegion(),
    apiHost: getExotelApiBaseUrl(),
    missing,
    hasApiKey,
    hasApiToken,
    hasAccountSid,
    hasCallerId,
    hasTestPhone,
    hasCounsellorNumber,
    hasCallDestination: hasCounsellorNumber
  };
}

export function getTelephonyConfigSummary() {
  const isLive = isLiveTelephonyEnabled();
  const currentMode = getTelephonyMode();
  const testNumber = process.env.EXOTEL_TEST_PHONE || process.env.EXOTEL_TEST_PHONE_NUMBER;
  const counsellorNumber = process.env.EXOTEL_COUNSELLOR_NUMBER;
  const readiness = checkLiveReadiness();

  let connectPlan = null;
  try {
    if (testNumber && counsellorNumber) {
      connectPlan = prepareConnectTwoNumbersCall(testNumber);
    }
  } catch {
    // Plan preview optional if numbers not yet configured
  }

  return {
    telephonyMode: currentMode,
    isLive,
    isLiveConfigured: isExotelConfigured(),
    accountRegion: getExotelRegion(),
    apiBaseUrl: getExotelApiBaseUrl(),
    missingVariables: requiredVariables.filter(name => !process.env[name]),
    hasApiKey: Boolean(process.env.EXOTEL_API_KEY),
    hasApiToken: Boolean(process.env.EXOTEL_API_TOKEN),
    accountSidConfigured: Boolean(process.env.EXOTEL_ACCOUNT_SID),
    callerIdConfigured: Boolean(process.env.EXOTEL_CALLER_ID),
    counsellorNumberConfigured: Boolean(counsellorNumber),
    testNumberConfigured: Boolean(testNumber),
    dialFirst: (process.env.EXOTEL_DIAL_FIRST || 'student').toLowerCase(),
    dialOrder: connectPlan?.dialOrder || null,
    officialGreeting: EXOTEL_OFFICIAL_GREETING,
    liveReadiness: readiness,
    label: isLive ? 'LIVE MODE (Exotel Real Calls)' : 'MOCK MODE — NO REAL CALLS',
    cost: isLive ? 'Standard Exotel account tariff / credits apply' : '₹0.00 (Completely Free Simulation)',
    warning: isLive
      ? 'LIVE MODE IS ACTIVE: Outbound calls dial real numbers and consume carrier balance.'
      : 'MOCK MODE IS ACTIVE: Zero telephony network charges, zero credits required, zero real calls.',
    checklistForLive: [
      { item: 'Set EXOTEL_CALL_MODE=live in server environment (currently mock)', done: currentMode === 'live' },
      { item: 'Provide EXOTEL_API_KEY and EXOTEL_API_TOKEN in .env', done: Boolean(process.env.EXOTEL_API_KEY && process.env.EXOTEL_API_TOKEN) },
      { item: 'Provide EXOTEL_ACCOUNT_SID in .env', done: Boolean(process.env.EXOTEL_ACCOUNT_SID) },
      { item: 'Provide EXOTEL_CALLER_ID (virtual ExoPhone)', done: Boolean(process.env.EXOTEL_CALLER_ID) },
      { item: 'Provide EXOTEL_COUNSELLOR_NUMBER in .env', done: Boolean(counsellorNumber) },
      { item: 'Configure EXOTEL_TEST_PHONE to restrict real calls', done: Boolean(testNumber) },
      { item: 'Verify Exotel cluster API host matches account region (Singapore)', done: getExotelRegion() === 'Singapore' },
      { item: 'Active Exotel trial/paid balance and verified test mobile numbers', done: isExotelConfigured() }
    ]
  };
}

export async function connectStudentToCounsellor(studentNumber) {
  // Never initiate a real call unless live mode is explicitly enabled
  if (!isLiveTelephonyEnabled()) {
    return {
      skipped: true,
      provider: 'mock',
      status: 'not_configured',
      reason: 'Telephony mode is set to mock. Real call suppressed for ₹0 safety.'
    };
  }

  // Prepares and strictly validates destination restrictions, numbers, and endpoint
  const plan = prepareConnectTwoNumbersCall(studentNumber);

  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(plan.requestPayload)) {
    body.append(key, value);
  }

  const auth = Buffer.from(`${process.env.EXOTEL_API_KEY}:${process.env.EXOTEL_API_TOKEN}`).toString('base64');

  const response = await fetch(plan.endpoint, {
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
  try { payload = JSON.parse(responseText); } catch { /* handled as error below */ }

  if (!response.ok) {
    const message = payload?.RestException?.Message || payload?.message || responseText || `HTTP ${response.status}`;
    throw new Error(`Exotel rejected the call request: ${String(message).slice(0, 350)}`);
  }

  const call = payload.Call || payload.call || payload;
  // NOTE: Initial status is queued/initiated. Never mark as completed merely because API succeeded.
  return {
    skipped: false,
    provider: 'exotel',
    callSid: call.Sid || call.sid || null,
    status: (call.Status || call.status || 'queued').toLowerCase(),
    from: plan.dialOrder.from,
    to: plan.dialOrder.to,
    callerId: plan.callerId,
    studentNumber: plan.authorizedNumbers.testPhone,
    counsellorNumber: plan.authorizedNumbers.counsellorNumber
  };
}

export function validateWebhookAuth(req) {
  const expectedToken = process.env.EXOTEL_WEBHOOK_TOKEN;
  if (!expectedToken) return true; // Optional security token if not set
  const token = req.headers['x-exotel-token'] || req.query.token || req.body?.token;
  return token === expectedToken;
}

