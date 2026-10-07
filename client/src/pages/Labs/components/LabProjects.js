// Lab Featured Student Projects Component — Concise & Impactful

export function renderLabProjects(lab) {
  const topProjects = (lab.studentProjects || []).slice(0, 3);

  return `
    <section class="lab-section lab-projects-section" id="lab-projects" aria-label="Student Projects in ${lab.name}">
      <div class="lab-shell">
        
        <div class="lab-section-header reveal">
          <div class="lab-section-kicker">
            <span class="kicker-dot" style="background: ${lab.accentColor};"></span>
            <span>03 &bull; HANDS-ON APPLICATION</span>
          </div>
          <h2 class="lab-section-title">Featured Student Capstones</h2>
          <p class="lab-section-subtitle">Real-world prototypes, autonomous systems, and engineering innovations built by students in this laboratory.</p>
        </div>

        <div class="lab-compact-projects-grid">
          ${topProjects.map((proj, i) => `
            <div class="lab-compact-proj-card reveal">
              <div class="compact-proj-header">
                <span class="compact-proj-num">CAPSTONE 0${i + 1}</span>
                <span class="compact-proj-badge">★ Industry Focus</span>
              </div>
              <h3 class="compact-proj-title">${proj.title}</h3>
              <p class="compact-proj-desc">${proj.desc}</p>
              <div class="compact-proj-tags">
                ${(proj.tags || []).map(t => `<span class="compact-tag">${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
