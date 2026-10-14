/**
 * FacultyModal Component
 * Interactive modal dialog for verified individual faculty profile
 */

export function renderFacultyModal(faculty) {
  if (!faculty) return '';

  const defaultAvatar = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="200" viewBox="0 0 160 200" fill="#e8f5e9"><rect width="160" height="200" fill="#f0f7f2"/><circle cx="80" cy="70" r="38" fill="#167a39" opacity="0.3"/><path d="M25 180 C25 125, 135 125, 135 180 Z" fill="#167a39" opacity="0.3"/></svg>')}`;
  const photoSrc = faculty.photo || defaultAvatar;

  const researchBadges = (faculty.researchInterests || [])
    .map(area => `<span class="research-tag">${area}</span>`)
    .join('');

  return `
    <div class="siet-faculty-modal-backdrop" id="faculty-profile-modal" role="dialog" aria-modal="true" aria-labelledby="modal-faculty-name">
      <div class="siet-faculty-modal-card">
        <button type="button" class="faculty-modal-close" id="close-faculty-modal" aria-label="Close profile">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="faculty-modal-header">
          <div class="faculty-modal-photo-col">
            <img 
              src="${photoSrc}" 
              alt="${faculty.name}" 
              class="faculty-modal-img" 
              onerror="this.onerror=null; this.src='${defaultAvatar}';"
            />
            <span class="faculty-verified-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Verified Faculty
            </span>
          </div>

          <div class="faculty-modal-title-col">
            <span class="faculty-modal-dept-label">${faculty.department}</span>
            <h2 id="modal-faculty-name" class="faculty-modal-name">${faculty.name}</h2>
            <div class="faculty-modal-role">${faculty.designation}</div>
            
            <div class="faculty-modal-quick-meta">
              <div class="meta-pill">
                <span class="meta-label">Qualification:</span>
                <span class="meta-val">${faculty.qualification || 'M.E. / Ph.D.'}</span>
              </div>
              <div class="meta-pill">
                <span class="meta-label">Experience:</span>
                <span class="meta-val">${faculty.experience || 'Experienced Academician'}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="faculty-modal-body">
          <div class="faculty-details-grid">
            <div class="faculty-detail-card">
              <h4>🏛️ Institutional Identification</h4>
              <table class="faculty-modal-table">
                <tbody>
                  <tr>
                    <th>Anna University FIN</th>
                    <td><strong>${faculty.auFin || 'Official Record'}</strong></td>
                  </tr>
                  <tr>
                    <th>AICTE Identification</th>
                    <td><strong>${faculty.aicteId || 'Official Record'}</strong></td>
                  </tr>
                  <tr>
                    <th>Department</th>
                    <td>${faculty.department}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="faculty-detail-card">
              <h4>📫 Institutional Contact</h4>
              <div class="faculty-contact-row">
                <div class="contact-icon">📧</div>
                <div>
                  <span class="contact-label">Official Email:</span>
                  <a href="mailto:${faculty.email}" class="faculty-email-link">${faculty.email}</a>
                </div>
              </div>
              <div class="faculty-contact-row" style="margin-top: 10px;">
                <div class="contact-icon">🏫</div>
                <div>
                  <span class="contact-label">Campus Location:</span>
                  <span>Academic Block, Sri Shakthi Campus, Coimbatore</span>
                </div>
              </div>
            </div>
          </div>

          <div class="faculty-detail-section" style="margin-top: 20px;">
            <h4>🔬 Research Specialization & Areas of Interest</h4>
            <div class="research-tags-wrap">
              ${researchBadges || '<span class="research-tag">Engineering Education</span>'}
            </div>
          </div>

          <div class="faculty-modal-disclaimer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Profile authenticated in accordance with Anna University Chennai and AICTE compliance registers.</span>
          </div>
        </div>

        <div class="faculty-modal-footer">
          <button type="button" class="button button-outline button-sm" id="modal-back-btn">
            ← Return to Faculty Directory
          </button>
          <a href="mailto:${faculty.email}?subject=Academic%20Inquiry%20via%20SIET%20Portal" class="button button-primary button-sm">
            Contact Faculty Member
          </a>
        </div>
      </div>
    </div>
  `;
}
