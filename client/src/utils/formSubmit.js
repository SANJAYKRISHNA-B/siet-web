import { $, $$ } from './dom.js';
import { startCallSimulationTracker } from '../pages/Admissions/CallSimulationTracker.js';

export async function submitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  if (form.dataset.submitting === 'true') return;
  const status = $('.status', form);
  const btn = $('button[type="submit"], .career-submit', form);
  const originalButtonContent = btn?.innerHTML;
  const isAdmissionEnquiry = form.dataset.formType === 'admission-enquiry';

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  if (isAdmissionEnquiry) {
    const consentGiven = !!formData.get('consent');
    if (!consentGiven) {
      if (status) {
        status.textContent = 'Please provide contact consent to submit your application.';
        status.style.color = '#b3261e';
      }
      return;
    }
  }

  form.dataset.submitting = 'true';
  if (status) {
    status.textContent = isAdmissionEnquiry ? 'Saving application & launching call simulation…' : 'Submitting details…';
    status.style.color = '#0b7a48';
  }
  if (btn) {
    btn.disabled = true;
    btn.textContent = isAdmissionEnquiry ? 'Processing…' : 'Submitting…';
  }

  if (!data.name && data.referrer_name) {
    data.name = `${data.referrer_name} (Ref for: ${data.candidate_name || 'Candidate'})`;
  }
  if (!data.email && (data.referrer_email || data.candidate_email)) {
    data.email = data.referrer_email || data.candidate_email;
  }
  if (!data.phone && (data.referrer_phone || data.candidate_phone)) {
    data.phone = data.referrer_phone || data.candidate_phone;
  }
  if (!data.course && data.candidate_course) {
    data.course = data.candidate_course;
  }
  const fileInput = form.querySelector('input[type="file"]');
  if (fileInput?.files?.[0]) {
    data.fileName = fileInput.files[0].name;
    data.fileSize = `${Math.round(fileInput.files[0].size / 1024)} KB`;
  }
  try {
    const endpoint = form.dataset.apiEndpoint || '/api/enquiries';
    const payload = isAdmissionEnquiry ? {
      studentName: data.name,
      mobileNumber: data.phone,
      email: data.email,
      course: data.level,
      department: data.course,
      city: data.city || '',
      source: 'Website',
      remarks: data.message,
      consent: !!formData.get('consent'),
      desiredSimulation: data.desiredSimulation || 'completed'
    } : data;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const json = await res.json().catch(() => ({ message: 'The server returned an invalid response.' }));
    if (status) {
      status.textContent = json.message || (res.ok ? 'Admission enquiry saved successfully' : 'Unable to save your enquiry.');
      status.style.color = res.ok ? '#075b36' : '#b3261e';
    }

    if (isAdmissionEnquiry && res.ok && json?.data?.id) {
      const trackerMount = document.getElementById('apply-call-tracker-mount');
      if (trackerMount) {
        renderConsentTestCallCard(trackerMount, json.data);
        setTimeout(() => {
          trackerMount.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }

    if (res.ok && !json.data?.isDuplicate) {
      form.reset();
      const consentBox = form.querySelector('#apply-consent-checkbox');
      if (consentBox) consentBox.checked = true;
    }
  } catch (err) {
    if (status) {
      status.textContent = 'Unable to save your enquiry. Please check your connection and try again.';
      status.style.color = '#b3261e';
    }
  } finally {
    form.dataset.submitting = 'false';
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalButtonContent || 'Submit';
    }
  }
}

export function setupLevelSync(levelSelector, courseSelector, ugList = [], pgList = []) {
  const levelEl = $(levelSelector);
  const courseEl = $(courseSelector);
  if (!levelEl || !courseEl) return;
  levelEl.addEventListener('change', () => {
    const val = levelEl.value;
    const currentVal = courseEl.value;
    if (val === 'UG') {
      courseEl.innerHTML = `<option value="">Select Preferred Department</option>${ugList.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}`;
    } else if (val === 'PG') {
      courseEl.innerHTML = `<option value="">Select Preferred Department</option>${pgList.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}`;
    } else {
      courseEl.innerHTML = `
        <option value="">Select Preferred Department</option>
        <optgroup label="Undergraduate (UG) Programmes">
          ${ugList.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
        </optgroup>
        <optgroup label="Postgraduate (PG) Programmes">
          ${pgList.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
        </optgroup>
      `;
    }
    if ([...courseEl.options].some(o => o.value === currentVal)) {
      courseEl.value = currentVal;
    }
  });
}

export function renderConsentTestCallCard(container, applicantData) {
  const enquiryId = applicantData.id;
  const rawMobile = applicantData.mobileNumber || '';
  const maskedPhone = rawMobile ? `+91 ${rawMobile.slice(0, 3)}*****${rawMobile.slice(-2)}` : '';

  container.innerHTML = `
    <div class="test-call-consent-card" id="test-call-card-${enquiryId}">
      <div class="test-call-card-badge-row">
        <span class="test-call-chip">
          <span class="pulse-dot"></span> EXOTEL OUTBOUND CALL AUTOMATION
        </span>
        <span class="free-mode-chip">Official SIET Voice Service</span>
      </div>

      <div class="test-call-header">
        <h3>Application Saved (Ref: #${enquiryId})</h3>
        <p class="test-call-applicant-summary">
          Thank you, <strong>${applicantData.studentName}</strong>! Your admission enquiry for <strong>${applicantData.department || 'Engineering'} (${applicantData.course || 'UG'})</strong> has been recorded in our official admissions database.
        </p>
      </div>

      <div class="official-greeting-preview-box">
        <div class="greeting-box-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <strong>Configured Audio Call Greeting:</strong>
        </div>
        <blockquote class="official-greeting-text">
          "Thank you for your interest in Sri Shakthi Institute of Engineering and Technology. We have received your admission enquiry."
        </blockquote>
      </div>

      <div class="test-call-action-area">
        <label class="test-call-checkbox-label">
          <input type="checkbox" id="test-call-explicit-consent-${enquiryId}" checked>
          <span>I give explicit consent to initiate a one-time test automated call to my registered number (<strong>${maskedPhone}</strong>).</span>
        </label>

        <div class="test-call-button-row">
          <button type="button" class="button test-automated-call-btn" id="trigger-test-call-btn-${enquiryId}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Test Automated Call</span>
          </button>
          <div class="test-call-note">Explicit, consent-based verification. Public submissions never dial arbitrary numbers.</div>
        </div>

        <div class="test-call-feedback" id="test-call-feedback-${enquiryId}" style="display: none;"></div>
      </div>
    </div>
  `;

  const btn = container.querySelector(`#trigger-test-call-btn-${enquiryId}`);
  const consentChk = container.querySelector(`#test-call-explicit-consent-${enquiryId}`);
  const feedback = container.querySelector(`#test-call-feedback-${enquiryId}`);

  if (btn) {
    btn.addEventListener('click', async () => {
      if (!consentChk?.checked) {
        if (feedback) {
          feedback.style.display = 'block';
          feedback.className = 'test-call-feedback error';
          feedback.textContent = 'Please check the consent box to confirm you want to receive the automated test call.';
        }
        return;
      }

      btn.disabled = true;
      const originalText = btn.innerHTML;
      btn.innerHTML = `<span>Connecting Automated Call…</span>`;

      try {
        const response = await fetch(`/api/admission-enquiries/${enquiryId}/test-call`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ consent: true })
        });

        const callJson = await response.json();
        if (!response.ok || !callJson.success) {
          throw new Error(callJson.message || 'Unable to initiate test call.');
        }

        // Mount the live/mock call tracker
        startCallSimulationTracker(container, callJson.data.call, applicantData);
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (err) {
        btn.disabled = false;
        btn.innerHTML = originalText;
        if (feedback) {
          feedback.style.display = 'block';
          feedback.className = 'test-call-feedback error';
          feedback.textContent = err.message || 'Error initiating test call.';
        }
      }
    });
  }
}
