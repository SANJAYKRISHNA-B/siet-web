// Lab Objectives & Specialization Areas Component

export function renderLabObjectives(lab) {
  return `
    <section class="lab-section lab-objectives-section" id="lab-objectives" aria-label="Objectives & Specializations of ${lab.name}">
      <div class="lab-shell">
        
        <!-- Two Column Layout: Objectives on left, Specializations on right -->
        <div class="lab-split-grid">
          
          <!-- Column 1: Core Objectives -->
          <div class="lab-split-col reveal">
            <div class="lab-section-header compact">
              <div class="lab-section-kicker">
                <span class="kicker-dot" style="background: ${lab.accentColor};"></span>
                <span>LEARNING OUTCOMES</span>
              </div>
              <h2 class="lab-section-title">Laboratory Objectives</h2>
              <p class="lab-section-subtitle">Key technical competencies and engineering capabilities fostered in this laboratory.</p>
            </div>

            <div class="lab-objectives-card">
              <ol class="lab-objectives-list">
                ${lab.objectives.map((obj, i) => `
                  <li class="objective-item">
                    <span class="objective-num" style="border-color: ${lab.accentColor}; color: ${lab.accentColor};">0${i + 1}</span>
                    <p class="objective-text">${obj}</p>
                  </li>
                `).join('')}
              </ol>
            </div>
          </div>

          <!-- Column 2: Areas of Specialization -->
          <div class="lab-split-col reveal">
            <div class="lab-section-header compact">
              <div class="lab-section-kicker">
                <span class="kicker-dot" style="background: ${lab.accentColor};"></span>
                <span>DOMAIN DEPTH</span>
              </div>
              <h2 class="lab-section-title">Areas of Specialization</h2>
              <p class="lab-section-subtitle">Specialized technical tracks explored through coursework and research projects.</p>
            </div>

            <div class="lab-specs-grid">
              ${lab.specializations.map((spec, i) => `
                <div class="lab-spec-card">
                  <div class="spec-header">
                    <span class="spec-badge">Track 0${i + 1}</span>
                    <h4 class="spec-title">${spec.title}</h4>
                  </div>
                  <p class="spec-desc">${spec.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
