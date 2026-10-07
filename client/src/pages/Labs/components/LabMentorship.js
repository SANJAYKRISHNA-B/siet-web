// Lab Faculty & Academic Mentorship Component

export function renderLabMentorship(lab) {
  return `
    <section class="lab-section lab-mentorship-section" id="lab-mentorship" aria-label="Mentorship at ${lab.name}">
      <div class="lab-shell">
        
        <div class="lab-mentorship-box reveal">
          <div class="mentorship-content">
            <div class="lab-section-kicker">
              <span class="kicker-dot" style="background: ${lab.accentColor};"></span>
              <span>ACADEMIC SUPERVISION</span>
            </div>
            <h2 class="mentorship-title">${lab.mentorship.title}</h2>
            <p class="mentorship-lead">${lab.mentorship.desc}</p>

            <div class="mentorship-roles-grid">
              ${lab.mentorship.roles.map((roleText, i) => {
                const parts = roleText.split(':');
                const roleTitle = parts[0] ? parts[0].trim() : `Role 0${i + 1}`;
                const roleDesc = parts[1] ? parts[1].trim() : roleText;
                return `
                  <div class="mentorship-role-card">
                    <span class="role-badge">Faculty Mentorship</span>
                    <h4 class="role-title">${roleTitle}</h4>
                    <p class="role-desc">${roleDesc}</p>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="mentorship-footer-note">
              <span>Department Linkage: </span>
              <a href="#/department/${lab.deptSlug}" class="dept-link">Explore ${lab.department} →</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
