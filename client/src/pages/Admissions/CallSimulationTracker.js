/**
 * CallSimulationTracker Component
 * Visualizes simulated automated admissions counseling calls in Mock Mode (100% Free / ₹0 cost).
 * Displays real-time lifecycle: Queued -> Ringing -> Completed / Busy / No-Answer / Failed.
 */

export function renderCallSimulationTracker(callData, applicantData) {
  const isMock = callData.isMock !== false;
  const initialStatus = callData.status || 'queued';
  const callSid = callData.callSid || callData.id || 'MOCK-SESSION';

  return `
    <div class="call-simulation-tracker-card" id="call-simulation-tracker-${callSid}">
      <!-- Header Banner -->
      <div class="tracker-header">
        <div class="tracker-badge-group">
          <span class="${isMock ? 'mock-mode-pill' : 'live-mode-pill'}">
            <span class="${isMock ? 'mock-pulse-dot' : 'live-pulse-dot'}"></span>
            ${isMock ? 'MOCK MODE — NO REAL CALLS' : 'LIVE EXOTEL OUTBOUND CALL'}
          </span>
          <span class="zero-cost-tag">${isMock ? '₹0 Budget Active' : 'Mumbai Voice Gateway'}</span>
        </div>
        <div class="tracker-call-sid" title="Call Identifier">
          <small>${isMock ? 'Mock Call ID:' : 'Exotel Call SID:'}</small>
          <code>${callSid}</code>
        </div>
      </div>

      <!-- Applicant Info Header -->
      <div class="tracker-applicant-strip">
        <div class="applicant-info-item">
          <span class="info-label">Applicant</span>
          <strong>${applicantData.studentName || 'Student'}</strong>
        </div>
        <div class="applicant-info-item">
          <span class="info-label">Mobile Number</span>
          <strong class="masked-phone">${applicantData.mobileNumber || ''}</strong>
        </div>
        <div class="applicant-info-item">
          <span class="info-label">Department</span>
          <span>${applicantData.department || 'Engineering'} (${applicantData.course || 'UG'})</span>
        </div>
        <div class="applicant-info-item">
          <span class="info-label">Voice Gateway</span>
          <span>${isMock ? '+91 98765 ***** (Virtual Desk)' : 'Exotel India (Mumbai)'}</span>
        </div>
      </div>

      <!-- Official Audio Greeting Banner -->
      <div class="tracker-greeting-banner">
        <div class="greeting-speaker-icon">🔊</div>
        <div class="greeting-banner-text">
          <span class="greeting-tag">Configured Exotel Voice Greeting</span>
          <p>"Thank you for your interest in Sri Shakthi Institute of Engineering and Technology. We have received your admission enquiry."</p>
        </div>
      </div>

      <!-- Live Stepper Progress -->
      <div class="tracker-stepper-wrap">
        <div class="stepper-track">
          <div class="stepper-step step-submitted is-done" data-step="submitted">
            <div class="step-icon">✓</div>
            <div class="step-text">
              <strong>Application Saved</strong>
              <small>Database recorded</small>
            </div>
          </div>

          <div class="stepper-connector ${['queued', 'ringing', 'completed', 'busy', 'no-answer', 'failed'].includes(initialStatus) ? 'is-active' : ''}"></div>

          <div class="stepper-step step-queued is-active" data-step="queued" id="stepper-step-queued">
            <div class="step-icon">1</div>
            <div class="step-text">
              <strong>Call Queued</strong>
              <small>Dialer queue</small>
            </div>
          </div>

          <div class="stepper-connector ${['ringing', 'completed', 'busy', 'no-answer', 'failed'].includes(initialStatus) ? 'is-active' : ''}"></div>

          <div class="stepper-step step-ringing" data-step="ringing" id="stepper-step-ringing">
            <div class="step-icon">2</div>
            <div class="step-text">
              <strong>Virtual Ringing</strong>
              <small>Dialing test device</small>
            </div>
          </div>

          <div class="stepper-connector ${['completed', 'busy', 'no-answer', 'failed'].includes(initialStatus) ? 'is-active' : ''}"></div>

          <div class="stepper-step step-outcome" data-step="outcome" id="stepper-step-outcome">
            <div class="step-icon">3</div>
            <div class="step-text">
              <strong id="stepper-outcome-label">Call Outcome</strong>
              <small id="stepper-outcome-sub">Simulation complete</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Status Feedback & Timer Panel -->
      <div class="tracker-status-panel" id="tracker-status-panel">
        <div class="live-status-pill status-${initialStatus}" id="live-status-badge">
          <span class="status-indicator-dot"></span>
          <span id="live-status-text">${formatStatusHeading(initialStatus)}</span>
        </div>
        <p class="status-description-text" id="live-status-desc">
          ${formatStatusText(initialStatus)}
        </p>
        <div class="status-meta-row">
          <span id="tracker-timer-display">⏱ Elapsed: <strong>0s</strong></span>
          <span id="tracker-duration-display" style="display:none;">📞 Talk Time: <strong>0s</strong></span>
        </div>
      </div>

      <!-- Interactive Scenario Tester for ₹0 Local Verification -->
      <div class="tracker-simulation-controls">
        <div class="simulation-controls-header">
          <span>🛠 <strong>Automated Test Controls (₹0 Mode):</strong> Verify other simulated call statuses</span>
        </div>
        <div class="simulation-btn-group">
          <button type="button" class="sim-btn sim-btn-completed" data-sim-outcome="completed" title="Test completed call with counselling briefing">
            <span>✅ Complete Call</span>
          </button>
          <button type="button" class="sim-btn sim-btn-busy" data-sim-outcome="busy" title="Test busy student line">
            <span>⚠️ Line Busy</span>
          </button>
          <button type="button" class="sim-btn sim-btn-no-answer" data-sim-outcome="no-answer" title="Test student not answering">
            <span>📵 No Answer</span>
          </button>
          <button type="button" class="sim-btn sim-btn-failed" data-sim-outcome="failed" title="Test network drop">
            <span>❌ Call Failed</span>
          </button>
          <button type="button" class="sim-btn sim-btn-retry" id="tracker-retry-btn" style="display:none;" title="Retry this failed or busy call">
            <span>🔄 Retry Call</span>
          </button>
        </div>
      </div>

      <!-- Safety Notice Footer -->
      <div class="tracker-safety-notice">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <span>Zero Network Charges: All statuses and recordings are purely local software simulations. No carrier networks were contacted.</span>
      </div>
    </div>
  `;
}

export function startCallSimulationTracker(container, callData, applicantData) {
  if (!container || !callData) return;
  container.innerHTML = renderCallSimulationTracker(callData, applicantData);

  const callSid = callData.callSid || callData.id;
  const statusBadge = container.querySelector('#live-status-badge');
  const statusText = container.querySelector('#live-status-text');
  const statusDesc = container.querySelector('#live-status-desc');
  const timerDisplay = container.querySelector('#tracker-timer-display strong');
  const durationDisplay = container.querySelector('#tracker-duration-display');
  const retryBtn = container.querySelector('#tracker-retry-btn');
  const stepQueued = container.querySelector('#stepper-step-queued');
  const stepRinging = container.querySelector('#stepper-step-ringing');
  const stepOutcome = container.querySelector('#stepper-step-outcome');
  const outcomeLabel = container.querySelector('#stepper-outcome-label');
  const outcomeSub = container.querySelector('#stepper-outcome-sub');

  let seconds = 0;
  const timer = setInterval(() => {
    seconds++;
    if (timerDisplay) timerDisplay.textContent = `${seconds}s`;
  }, 1000);

  let polling = true;

  async function checkStatus() {
    if (!polling) return;
    try {
      const res = await fetch(`/api/admission-enquiries/calls/${callSid}`);
      if (!res.ok) return;
      const json = await res.json();
      if (!json.success || !json.data) return;

      const data = json.data;
      updateUI(data.status, data.durationSeconds, data.errorMessage);

      if (['completed', 'busy', 'no-answer', 'failed'].includes(data.status)) {
        polling = false;
        clearInterval(timer);
      }
    } catch {
      // keep polling on connection blip
    }
  }

  function updateUI(status, duration, errorMessage) {
    if (!statusBadge) return;
    statusBadge.className = `live-status-pill status-${status}`;
    statusText.textContent = formatStatusHeading(status);
    statusDesc.textContent = errorMessage || formatStatusText(status);

    if (stepQueued && stepRinging && stepOutcome) {
      if (status === 'queued') {
        stepQueued.className = 'stepper-step step-queued is-active';
        stepRinging.className = 'stepper-step step-ringing';
        stepOutcome.className = 'stepper-step step-outcome';
      } else if (status === 'ringing') {
        stepQueued.className = 'stepper-step step-queued is-done';
        stepRinging.className = 'stepper-step step-ringing is-active';
        stepOutcome.className = 'stepper-step step-outcome';
      } else {
        stepQueued.className = 'stepper-step step-queued is-done';
        stepRinging.className = 'stepper-step step-ringing is-done';
        stepOutcome.className = `stepper-step step-outcome is-done is-${status}`;
        if (outcomeLabel) outcomeLabel.textContent = formatStatusHeading(status);
        if (outcomeSub) outcomeSub.textContent = status === 'completed' ? `${duration || 45}s talk time` : 'Terminal status';
      }
    }

    if (durationDisplay) {
      if (status === 'completed' && duration) {
        durationDisplay.style.display = 'inline';
        durationDisplay.querySelector('strong').textContent = `${duration}s`;
      } else {
        durationDisplay.style.display = 'none';
      }
    }

    if (retryBtn) {
      if (['busy', 'no-answer', 'failed'].includes(status)) {
        retryBtn.style.display = 'inline-flex';
      } else {
        retryBtn.style.display = 'none';
      }
    }
  }

  // Poll status every 1.5s
  const pollInterval = setInterval(() => {
    if (!polling) {
      clearInterval(pollInterval);
      return;
    }
    checkStatus();
  }, 1500);

  // Bind scenario testing buttons
  container.querySelectorAll('.sim-btn[data-sim-outcome]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const outcome = btn.getAttribute('data-sim-outcome');
      try {
        btn.disabled = true;
        const res = await fetch(`/api/admission-enquiries/calls/${callSid}/simulate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ outcome })
        });
        const json = await res.json();
        if (json.success && json.data) {
          polling = false;
          clearInterval(timer);
          clearInterval(pollInterval);
          updateUI(json.data.status, json.data.durationSeconds, json.data.errorMessage);
        }
      } catch (err) {
        console.error('Simulation outcome error:', err);
      } finally {
        btn.disabled = false;
      }
    });
  });

  // Bind retry button
  if (retryBtn) {
    retryBtn.addEventListener('click', async () => {
      try {
        retryBtn.disabled = true;
        retryBtn.textContent = 'Retrying…';
        const res = await fetch(`/api/admin/calls/${callSid}/retry`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-key': 'siet-admin-2026'
          }
        });
        const json = await res.json();
        if (json.success) {
          polling = true;
          seconds = 0;
          updateUI('queued', 0, null);
          const newTimer = setInterval(() => {
            seconds++;
            if (timerDisplay) timerDisplay.textContent = `${seconds}s`;
          }, 1000);
          const newPoll = setInterval(async () => {
            if (!polling) {
              clearInterval(newPoll);
              clearInterval(newTimer);
              return;
            }
            checkStatus();
          }, 1500);
        }
      } catch (err) {
        console.error('Retry error:', err);
      } finally {
        retryBtn.disabled = false;
        retryBtn.innerHTML = '<span>🔄 Retry Call</span>';
      }
    });
  }

  // Initial trigger after 800ms
  setTimeout(checkStatus, 800);
}

function formatStatusHeading(status) {
  switch (status) {
    case 'ringing': return 'Phone Ringing (Test Mode)';
    case 'completed': return 'Counselling Briefing Completed';
    case 'busy': return 'Line Busy (Simulated)';
    case 'no-answer': return 'No Answer (Timed Out)';
    case 'failed': return 'Simulated Call Failed';
    case 'duplicate_prevented': return 'Duplicate Call Suppressed';
    default: return 'Call Queued in System';
  }
}

function formatStatusText(status) {
  switch (status) {
    case 'ringing': return 'Simulating ringing tone on test number. Connecting to virtual academic counsellor...';
    case 'completed': return 'Automated admissions counselling call completed successfully. Academic briefing audio delivered in free simulation mode.';
    case 'busy': return 'Simulated subscriber reported busy signal. Call logged for automated administrator retry.';
    case 'no-answer': return 'Simulated ringer rang for 45s without answer. Logged for automated administrator retry.';
    case 'failed': return 'Simulated carrier dropped connection. Logged for administrator review and retry.';
    case 'duplicate_prevented': return 'An application with this mobile number was recently submitted. Duplicate call was prevented to protect quotas.';
    default: return 'Application validated. Mock call created in local database and queued for zero-cost automated testing.';
  }
}
