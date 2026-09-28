import { $, $$ } from './dom.js';

export async function submitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  if (form.dataset.submitting === 'true') return;
  const status = $('.status', form);
  const btn = $('button[type="submit"], .career-submit', form);
  const originalButtonContent = btn?.innerHTML;
  const isAdmissionEnquiry = form.dataset.formType === 'admission-enquiry';
  form.dataset.submitting = 'true';
  if (status) {
    status.textContent = isAdmissionEnquiry ? 'Saving…' : 'Submitting details…';
    status.style.color = '#0b7a48';
  }
  if (btn) {
    btn.disabled = true;
    btn.textContent = isAdmissionEnquiry ? 'Saving…' : 'Submitting…';
  }
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
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
      remarks: data.message
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
    if (res.ok) form.reset();
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
