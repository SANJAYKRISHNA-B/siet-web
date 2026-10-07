// Lab Technologies, Tools & Software Stack Component

export function renderLabTechnology(lab) {
  return `
    <section class="lab-section lab-tech-section" id="lab-technologies" aria-label="Technologies used in ${lab.name}">
      <div class="lab-shell">
        
        <div class="lab-section-header reveal">
          <div class="lab-section-kicker">
            <span class="kicker-dot" style="background: ${lab.accentColor};"></span>
            <span>DEVELOPMENT ECOSYSTEM</span>
          </div>
          <h2 class="lab-section-title">Technologies &amp; Software Toolchains</h2>
          <p class="lab-section-subtitle">Industry-aligned frameworks, simulation environments, and programming toolkits mastered by students.</p>
        </div>

        <div class="lab-tech-grid">
          ${lab.technologies.map(tech => `
            <div class="lab-tech-card reveal">
              <div class="tech-card-header">
                <span class="tech-cat-pill">${tech.category}</span>
                <span class="tech-icon-marker" style="color: ${lab.accentColor};">⚡</span>
              </div>
              <h4 class="tech-name">${tech.name}</h4>
              <p class="tech-desc">${tech.desc}</p>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
