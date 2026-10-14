/**
 * FacultyCard Component
 * Displays a single faculty member with passport photo, credentials, and actions.
 */

export const DEFAULT_FACULTY_AVATAR = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="150" viewBox="0 0 120 150" fill="#e8f5e9"><rect width="120" height="150" fill="#f0f7f2"/><circle cx="60" cy="50" r="28" fill="#167a39" opacity="0.3"/><path d="M20 135 C20 95, 100 95, 100 135 Z" fill="#167a39" opacity="0.3"/></svg>')}`;

export function renderFacultyCard(faculty) {
  const isHead = (faculty.designation || '').toLowerCase().includes('head');
  const isProf = (faculty.designation || '').toLowerCase().includes('professor') && !isHead;
  const isAssoc = (faculty.designation || '').toLowerCase().includes('associate');
  
  const badgeClass = isHead ? 'badge-hod' : (isAssoc ? 'badge-assoc' : (isProf ? 'badge-prof' : 'badge-asst'));
  const photoSrc = faculty.photo || DEFAULT_FACULTY_AVATAR;

  return `
    <div class="siet-faculty-card" data-id="${faculty.id}" data-designation="${faculty.designation.toLowerCase()}">
      <div class="faculty-card-top">
        <div class="faculty-photo-wrapper">
          <img 
            src="${photoSrc}" 
            alt="Portrait of ${faculty.name}" 
            class="faculty-portrait-img" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='${DEFAULT_FACULTY_AVATAR}';"
          />
          <span class="faculty-designation-badge ${badgeClass}" title="${faculty.designation}">${faculty.designation}</span>
        </div>
      </div>
      <div class="faculty-card-body">
        <h3 class="faculty-card-name" title="${faculty.name}">${faculty.name}</h3>
        <p class="faculty-card-dept" title="${faculty.department}">${faculty.department}</p>
        
        <div class="faculty-card-credentials">
          <div class="faculty-cred-item">
            <span class="cred-label">Qualification</span>
            <span class="cred-value highlight" title="${faculty.qualification || 'M.E. / Ph.D.'}">${faculty.qualification || 'M.E. / Ph.D.'}</span>
          </div>
          <div class="faculty-cred-item">
            <span class="cred-label">Specialization</span>
            <span class="cred-value" title="${faculty.specialization || 'Engineering'}">${faculty.specialization || 'Engineering'}</span>
          </div>
        </div>

        <div class="faculty-compliance-chips">
          ${faculty.auFin && faculty.auFin !== 'Available on request' ? `<span class="compliance-chip" title="Anna University Faculty ID"><small>AU-FIN:</small> <strong>${faculty.auFin}</strong></span>` : ''}
          ${faculty.aicteId && faculty.aicteId !== 'Available on request' ? `<span class="compliance-chip" title="AICTE Identification"><small>AICTE:</small> <strong>${faculty.aicteId}</strong></span>` : ''}
        </div>

        <button 
          type="button" 
          class="faculty-view-profile-btn" 
          data-action="view-faculty-profile" 
          data-faculty-id="${faculty.id}"
          aria-label="View verified profile of ${faculty.name}">
          <span>View Full Profile</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
}
