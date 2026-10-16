/**
 * AdminCallConsole Component
 * Provides an authorized administrator interface to inspect call logs,
 * retry eligible calls, and review telephony system configuration.
 */

export function renderAdminConsoleModal() {
  return `
    <div class="admin-console-backdrop" id="admin-console-modal" role="dialog" aria-modal="true" aria-labelledby="admin-console-title">
      <div class="admin-console-card">
        <!-- Modal Header -->
        <div class="admin-console-header">
          <div>
            <div class="admin-modal-kicker">🔐 AUTHORIZED ADMINISTRATOR ACCESS</div>
            <h2 id="admin-console-title">Admissions Call Simulation Console</h2>
            <p class="admin-console-subtitle">Audit automated call records, retry failed mock sessions, and inspect telephony configuration.</p>
          </div>
          <button type="button" class="admin-console-close-btn" id="close-admin-console-btn" aria-label="Close Admin Console">✕</button>
        </div>

        <!-- Passkey Lock State (Shown if not yet authenticated) -->
        <div id="admin-auth-lock-view" class="admin-auth-lock-view">
          <div class="admin-lock-icon">🔒</div>
          <h3>Administrator Passkey Required</h3>
          <p>Please enter the administrative key to access call records and retry controls.</p>
          <form id="admin-auth-form" class="admin-auth-form">
            <div class="admin-input-group">
              <input type="password" id="admin-passkey-input" placeholder="Enter Admin Passkey (Default: siet-admin-2026)" autocomplete="current-password" required>
              <button type="submit" class="button" id="admin-unlock-btn">Unlock Console →</button>
            </div>
            <p id="admin-auth-error" class="admin-auth-error" style="display:none;"></p>
            <small class="admin-auth-hint">💡 Default local passkey: <code>siet-admin-2026</code> (configured via <code>ADMIN_API_KEY</code>)</small>
          </form>
        </div>

        <!-- Authenticated Admin Content -->
        <div id="admin-authenticated-view" style="display: none;">
          <!-- Telephony Status Strip -->
          <div class="admin-telephony-strip" id="admin-telephony-strip">
            <!-- Populated dynamically via API -->
          </div>

          <!-- Stats Grid -->
          <div class="admin-stats-grid" id="admin-stats-grid">
            <!-- Populated dynamically -->
          </div>

          <!-- Table Controls & Filter Pills -->
          <div class="admin-table-controls">
            <div class="admin-filter-pills" id="admin-filter-pills">
              <button type="button" class="admin-pill is-active" data-status="all">All Calls</button>
              <button type="button" class="admin-pill" data-status="completed">Completed</button>
              <button type="button" class="admin-pill" data-status="busy">Busy</button>
              <button type="button" class="admin-pill" data-status="no-answer">No Answer</button>
              <button type="button" class="admin-pill" data-status="failed">Failed</button>
              <button type="button" class="admin-pill" data-status="queued">Queued / Ringing</button>
            </div>
            <button type="button" class="button button-sm button-outline" id="admin-refresh-btn">🔄 Refresh Logs</button>
          </div>

          <!-- Call Logs Table -->
          <div class="admin-table-wrap">
            <table class="admin-calls-table">
              <thead>
                <tr>
                  <th>Call SID</th>
                  <th>Applicant</th>
                  <th>Masked Phone</th>
                  <th>Department</th>
                  <th>Status</th>
                  <th>Talk Time</th>
                  <th>Retries</th>
                  <th>Timestamp</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="admin-calls-tbody">
                <tr><td colspan="9" style="text-align:center; padding: 24px;">Loading call records…</td></tr>
              </tbody>
            </table>
          </div>

          <!-- Live Exotel Readiness Checklist -->
          <div class="exotel-readiness-card">
            <h4>📋 Live Telephony Readiness Checklist (Optional Exotel Integration)</h4>
            <p>Real telephone calls remain disabled by default in ₹0 Free Mode. To enable live carrier calls in production:</p>
            <ul class="readiness-list" id="admin-readiness-checklist">
              <!-- Dynamically populated -->
            </ul>
          </div>
        </div>

        <div class="admin-console-footer">
          <span class="cost-guarantee">🛡️ ₹0 Budget Guarantee: No phone carrier charges or telephony subscriptions consumed.</span>
          <button type="button" class="button button-outline" id="admin-modal-dismiss-btn">Close Console</button>
        </div>
      </div>
    </div>
  `;
}

export function openAdminConsoleModal(mountElement) {
  if (!mountElement) return;
  mountElement.innerHTML = renderAdminConsoleModal();
  document.body.style.overflow = 'hidden';

  const modal = mountElement.querySelector('#admin-console-modal');
  const closeBtn = mountElement.querySelector('#close-admin-console-btn');
  const dismissBtn = mountElement.querySelector('#admin-modal-dismiss-btn');
  const lockView = mountElement.querySelector('#admin-auth-lock-view');
  const authForm = mountElement.querySelector('#admin-auth-form');
  const passkeyInput = mountElement.querySelector('#admin-passkey-input');
  const authError = mountElement.querySelector('#admin-auth-error');
  const authView = mountElement.querySelector('#admin-authenticated-view');
  const refreshBtn = mountElement.querySelector('#admin-refresh-btn');

  let activeAdminKey = sessionStorage.getItem('siet_admin_key') || '';
  let activeFilter = 'all';

  const closeModal = () => {
    mountElement.innerHTML = '';
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleEsc);
  };

  const handleEsc = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  document.addEventListener('keydown', handleEsc);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (dismissBtn) dismissBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  async function loadData() {
    if (!activeAdminKey) return;
    try {
      const res = await fetch(`/api/admin/calls?status=${activeFilter}`, {
        headers: { 'x-admin-key': activeAdminKey }
      });
      if (res.status === 401) {
        sessionStorage.removeItem('siet_admin_key');
        activeAdminKey = '';
        if (lockView) lockView.style.display = 'block';
        if (authView) authView.style.display = 'none';
        if (authError) {
          authError.style.display = 'block';
          authError.textContent = 'Session expired or invalid passkey.';
        }
        return;
      }
      const json = await res.json();
      if (!json.success || !json.data) return;

      renderDashboard(json.data);
    } catch (err) {
      console.error('Failed to load admin data:', err);
    }
  }

  function renderDashboard(data) {
    if (lockView) lockView.style.display = 'none';
    if (authView) authView.style.display = 'block';

    // 1. Telephony Strip
    const strip = mountElement.querySelector('#admin-telephony-strip');
    if (strip && data.telephony) {
      const t = data.telephony;
      strip.innerHTML = `
        <div class="telephony-stat-item">
          <small>CURRENT MODE</small>
          <strong class="mode-badge mode-${t.telephonyMode}">${t.label}</strong>
        </div>
        <div class="telephony-stat-item">
          <small>DATABASE ENGINE</small>
          <strong>${t.databaseEngine || 'SQLite'}</strong>
        </div>
        <div class="telephony-stat-item">
          <small>COST TO YOU</small>
          <strong style="color: #075b36;">${t.cost || '₹0.00'}</strong>
        </div>
        <div class="telephony-stat-item">
          <small>REAL CALLS</small>
          <strong>${t.telephonyMode === 'live' ? 'Enabled ⚠️' : 'Disabled (Simulation Only)'}</strong>
        </div>
      `;
    }

    // 2. Stats Grid
    const statsGrid = mountElement.querySelector('#admin-stats-grid');
    if (statsGrid && data.stats) {
      const s = data.stats;
      statsGrid.innerHTML = `
        <div class="admin-stat-card"><small>Total Applications</small><strong>${s.totalEnquiries || 0}</strong></div>
        <div class="admin-stat-card"><small>Simulated Calls</small><strong>${s.totalCalls || 0}</strong></div>
        <div class="admin-stat-card is-success"><small>Completed</small><strong>${s.completed || 0}</strong></div>
        <div class="admin-stat-card is-warning"><small>Busy Lines</small><strong>${s.busy || 0}</strong></div>
        <div class="admin-stat-card is-warning"><small>No Answer</small><strong>${s.noAnswer || 0}</strong></div>
        <div class="admin-stat-card is-danger"><small>Failed</small><strong>${s.failed || 0}</strong></div>
      `;
    }

    // 3. Table Rows
    const tbody = mountElement.querySelector('#admin-calls-tbody');
    if (tbody) {
      const calls = data.calls || [];
      if (!calls.length) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 30px; color:#64748b;">No call records found matching this filter.</td></tr>`;
      } else {
        tbody.innerHTML = calls.map(c => {
          const isEligibleForRetry = ['failed', 'busy', 'no-answer'].includes(c.status);
          const formattedDate = new Date(c.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          const maskedPhone = c.studentNumber ? (c.studentNumber.slice(0, 5) + '*****' + c.studentNumber.slice(-2)) : '-';
          return `
            <tr data-call-sid="${c.callSid}">
              <td><code>${c.callSid || '-'}</code></td>
              <td><strong>${c.studentName || 'Student'}</strong></td>
              <td>${maskedPhone}</td>
              <td>${c.department || '-'}</td>
              <td><span class="table-status-badge status-${c.status}">${c.status}</span></td>
              <td>${c.durationSeconds ? `${c.durationSeconds}s` : '0s'}</td>
              <td>${c.retryCount || 0}</td>
              <td><small>${formattedDate}</small></td>
              <td>
                ${isEligibleForRetry ? `
                  <button type="button" class="admin-retry-btn" data-action="admin-retry" data-call-sid="${c.callSid}">
                    Retry
                  </button>
                ` : `<span style="color:#94a3b8; font-size:12px;">—</span>`}
              </td>
            </tr>
          `;
        }).join('');
      }
    }

    // 4. Readiness Checklist
    const checklist = mountElement.querySelector('#admin-readiness-checklist');
    if (checklist && data.telephony?.checklistForLive) {
      checklist.innerHTML = data.telephony.checklistForLive.map(item => `
        <li class="${item.done ? 'is-done' : 'is-pending'}">
          <span class="chk-icon">${item.done ? '✓' : '○'}</span>
          <span>${item.item}</span>
        </li>
      `).join('');
    }
  }

  // Handle Auth submission
  if (authForm) {
    authForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const enteredKey = (passkeyInput.value || '').trim();
      if (!enteredKey) return;
      try {
        const res = await fetch('/api/admin/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-admin-key': enteredKey }
        });
        const json = await res.json();
        if (json.success) {
          activeAdminKey = enteredKey;
          sessionStorage.setItem('siet_admin_key', enteredKey);
          if (authError) authError.style.display = 'none';
          loadData();
        } else {
          if (authError) {
            authError.style.display = 'block';
            authError.textContent = 'Invalid administrator passkey.';
          }
        }
      } catch (err) {
        if (authError) {
          authError.style.display = 'block';
          authError.textContent = 'Unable to connect to verification service.';
        }
      }
    });
  }

  // Filter pills
  mountElement.querySelectorAll('.admin-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      mountElement.querySelectorAll('.admin-pill').forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      activeFilter = pill.getAttribute('data-status') || 'all';
      loadData();
    });
  });

  if (refreshBtn) {
    refreshBtn.addEventListener('click', loadData);
  }

  // Table row retry action delegation
  mountElement.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-action="admin-retry"]');
    if (!btn) return;
    const callSid = btn.getAttribute('data-call-sid');
    if (!callSid) return;
    try {
      btn.disabled = true;
      btn.textContent = 'Retrying…';
      const res = await fetch(`/api/admin/calls/${callSid}/retry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': activeAdminKey
        }
      });
      const json = await res.json();
      if (json.success) {
        loadData();
      } else {
        alert(json.message || 'Retry failed.');
      }
    } catch (err) {
      alert('Failed to retry call: ' + err.message);
    } finally {
      btn.disabled = false;
      btn.textContent = 'Retry';
    }
  });

  // If already logged in this session, load immediately
  if (activeAdminKey) {
    loadData();
  }
}
