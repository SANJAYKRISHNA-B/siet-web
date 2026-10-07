// Lab Facilities & Infrastructure Component

export function renderLabFacilities(lab) {
  return `
    <section class="lab-section lab-facilities-section" id="lab-facilities" aria-label="Facilities of ${lab.name}">
      <div class="lab-shell">
        
        <div class="lab-section-header reveal">
          <div class="lab-section-kicker">
            <span class="kicker-dot" style="background: ${lab.accentColor};"></span>
            <span>PHYSICAL & DIGITAL INFRASTRUCTURE</span>
          </div>
          <h2 class="lab-section-title">Laboratory Facilities</h2>
          <p class="lab-section-subtitle">Modern engineering workspaces equipped for uninterrupted research, rapid development, and student collaboration.</p>
        </div>

        <div class="lab-facilities-grid">
          ${lab.facilities.map((facility, index) => {
            const icons = ['🏢', '⚡', '🌐', '🛡️', '🖥️', '🔬'];
            const icon = icons[index % icons.length];
            return `
              <div class="lab-facility-card reveal">
                <div class="facility-icon-wrap" style="color: ${lab.accentColor};">
                  <span class="facility-icon" aria-hidden="true">${icon}</span>
                </div>
                <div class="facility-content">
                  <h4 class="facility-heading">Facility Feature 0${index + 1}</h4>
                  <p class="facility-text">${facility}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Infrastructure Highlights Strip -->
        <div class="lab-infra-strip reveal">
          <div class="infra-stat-pill">
            <span class="infra-icon" aria-hidden="true">🔋</span>
            <div class="infra-text">
              <strong>100% Online UPS</strong>
              <small>Zero interruption during live runs</small>
            </div>
          </div>

          <div class="infra-strip-divider" aria-hidden="true"></div>

          <div class="infra-stat-pill">
            <span class="infra-icon" aria-hidden="true">🌐</span>
            <div class="infra-text">
              <strong>1 Gbps Fiber LAN</strong>
              <small>High-bandwidth campus intranet</small>
            </div>
          </div>

          <div class="infra-strip-divider" aria-hidden="true"></div>

          <div class="infra-stat-pill">
            <span class="infra-icon" aria-hidden="true">❄️</span>
            <div class="infra-text">
              <strong>Climate Controlled</strong>
              <small>Dust-free acoustic lab environment</small>
            </div>
          </div>

          <div class="infra-strip-divider" aria-hidden="true"></div>

          <div class="infra-stat-pill">
            <span class="infra-icon" aria-hidden="true">👥</span>
            <div class="infra-text">
              <strong>Team Pods</strong>
              <small>Dedicated capstone collaboration bays</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
