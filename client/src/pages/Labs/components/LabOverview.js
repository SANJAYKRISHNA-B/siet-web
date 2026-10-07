// Lab Overview & Objectives Component — Focused & Essential Information

export function renderLabOverview(lab) {
  const topObjectives = (lab.objectives || []).slice(0, 4);

  return `
    <section class="lab-section lab-overview-section" id="lab-overview" aria-label="About ${lab.name}">
      <div class="lab-shell">
        <div class="lab-section-header reveal">
          <div class="lab-section-kicker">
            <span class="kicker-dot" style="background: ${lab.accentColor};"></span>
            <span>01 &bull; LABORATORY PROFILE</span>
          </div>
          <h2 class="lab-section-title">Overview &amp; Core Objectives</h2>
          <p class="lab-section-subtitle">${lab.tagline}</p>
        </div>

        <div class="lab-compact-overview-grid">
          <!-- Left Column: About & Key Fast Specs -->
          <div class="lab-compact-info-col reveal">
            <div class="lab-compact-prose">
              <p class="lab-lead-desc">${lab.metaSummary}</p>
            </div>

            <div class="lab-specs-mini-grid">
              <div class="spec-mini-item">
                <span class="spec-mini-icon" aria-hidden="true">🏛️</span>
                <div class="spec-mini-text">
                  <small>Department</small>
                  <strong>${lab.department}</strong>
                </div>
              </div>

              <div class="spec-mini-item">
                <span class="spec-mini-icon" aria-hidden="true">⚡</span>
                <div class="spec-mini-text">
                  <small>Capacity</small>
                  <strong>${lab.capacity}</strong>
                </div>
              </div>

              <div class="spec-mini-item">
                <span class="spec-mini-icon" aria-hidden="true">⏱️</span>
                <div class="spec-mini-text">
                  <small>Working Hours</small>
                  <strong>${(lab.timing || '').split('(')[0].trim()}</strong>
                </div>
              </div>

              <div class="spec-mini-item">
                <span class="spec-mini-icon" aria-hidden="true">🎯</span>
                <div class="spec-mini-text">
                  <small>Academic Model</small>
                  <strong>Autonomous R2025 Framework</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Key Learning Objectives -->
          <div class="lab-compact-objectives-col reveal">
            <div class="lab-clean-obj-box">
              <h3 class="clean-obj-title">Key Learning Outcomes</h3>
              <ul class="clean-obj-list">
                ${topObjectives.map((obj, i) => `
                  <li class="clean-obj-item">
                    <span class="clean-obj-num" style="color: ${lab.accentColor}; border-color: ${lab.accentColor};">0${i + 1}</span>
                    <p class="clean-obj-text">${obj}</p>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
