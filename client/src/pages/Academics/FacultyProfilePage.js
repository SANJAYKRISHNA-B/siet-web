import { getFacultyById } from '../../data/faculty/index.js';
import { sietHudHeader } from '../../components/common/HudHeader.js';

/**
 * Dedicated Full Page View for an Individual Faculty Profile
 */
export function facultyProfilePage(facultyId) {
  const faculty = getFacultyById(facultyId);

  if (!faculty) {
    return `
      <main class="faculty-profile-page">
        ${sietHudHeader('Faculty Member Not Found', 'Faculty Directory')}
        <div class="page-content-wrapper" style="max-width: 900px; margin: 40px auto; text-align: center; padding: 40px 20px;">
          <h2>Faculty Profile Not Found</h2>
          <p>The requested faculty profile could not be located in the official directory.</p>
          <a href="#/departments" class="button button-primary" style="margin-top: 16px;">Browse All Departments</a>
        </div>
      </main>
    `;
  }

  const defaultAvatar = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="250" viewBox="0 0 200 250" fill="#e8f5e9"><rect width="200" height="250" fill="#f0f7f2"/><circle cx="100" cy="85" r="48" fill="#167a39" opacity="0.3"/><path d="M30 225 C30 155, 170 155, 170 225 Z" fill="#167a39" opacity="0.3"/></svg>')}`;
  const photoSrc = faculty.photo || defaultAvatar;

  const deptSlug = faculty.department.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const researchBadges = (faculty.researchInterests || [])
    .map(area => `<span class="research-tag">${area}</span>`)
    .join('');

  return `
    <main class="faculty-profile-page">
      ${sietHudHeader(faculty.name, faculty.department)}
      
      <div class="page-content-wrapper" style="max-width: 1080px; margin: 0 auto; padding: 30px 20px 60px;">
        <nav class="faculty-breadcrumb" aria-label="Breadcrumb" style="margin-bottom: 24px; font-size: 13px; color: #64748b;">
          <a href="#/" style="color: #167a39; text-decoration: none;">Home</a>
          <span style="margin: 0 8px;">/</span>
          <a href="#/departments" style="color: #167a39; text-decoration: none;">Departments</a>
          <span style="margin: 0 8px;">/</span>
          <a href="#/department/${deptSlug}" style="color: #167a39; text-decoration: none;">${faculty.department}</a>
          <span style="margin: 0 8px;">/</span>
          <span style="color: #1e293b; font-weight: 600;">${faculty.name}</span>
        </nav>

        <div class="faculty-page-layout" style="display: grid; grid-template-columns: 320px 1fr; gap: 36px; align-items: start;">
          <!-- Left Column: Portrait & Key Identification -->
          <div class="faculty-portrait-card" style="background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 28px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <div style="position: relative; display: inline-block; margin-bottom: 20px;">
              <img 
                src="${photoSrc}" 
                alt="${faculty.name}" 
                style="width: 180px; height: 230px; object-fit: cover; border-radius: 12px; border: 3px solid #ffffff; box-shadow: 0 8px 20px rgba(0,0,0,0.12);"
                onerror="this.onerror=null; this.src='${defaultAvatar}';"
              />
              <div style="margin-top: 12px;">
                <span class="faculty-verified-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Verified Faculty Profile
                </span>
              </div>
            </div>

            <h3 style="font-size: 20px; font-weight: 800; color: #0b3d20; margin: 0 0 6px;">${faculty.name}</h3>
            <p style="font-size: 14px; font-weight: 600; color: #167a39; margin: 0 0 16px;">${faculty.designation}</p>

            <div style="background: #f8fafc; border-radius: 10px; padding: 14px; text-align: left; font-size: 13px; margin-bottom: 20px; border: 1px solid #e2e8f0;">
              <div style="margin-bottom: 8px;">
                <strong style="color: #64748b; display: block; font-size: 11px; text-transform: uppercase;">Anna University FIN</strong>
                <span style="color: #1e293b; font-weight: 700;">${faculty.auFin}</span>
              </div>
              <div>
                <strong style="color: #64748b; display: block; font-size: 11px; text-transform: uppercase;">AICTE ID</strong>
                <span style="color: #1e293b; font-weight: 700;">${faculty.aicteId}</span>
              </div>
            </div>

            <a href="#/department/${deptSlug}" class="button button-outline" style="width: 100%; display: block; text-align: center; margin-bottom: 10px;">
              ← Back to Department
            </a>
            <a href="mailto:${faculty.email}?subject=Academic%20Inquiry%20via%20SIET%20Website" class="button button-primary" style="width: 100%; display: block; text-align: center;">
              Send Official Email
            </a>
          </div>

          <!-- Right Column: Academic Credentials, Experience, & Research -->
          <div class="faculty-main-info" style="display: flex; flex-direction: column; gap: 24px;">
            <!-- Academic Credentials -->
            <div style="background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 28px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <h3 style="font-size: 18px; font-weight: 800; color: #0b3d20; margin: 0 0 16px; border-bottom: 2px solid #e8f5e9; padding-bottom: 10px;">
                Academic Profile &amp; Qualifications
              </h3>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 18px;">
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 16px;">
                  <span style="font-size: 12px; font-weight: 600; color: #167a39; text-transform: uppercase; display: block; margin-bottom: 4px;">Highest Qualification</span>
                  <strong style="font-size: 18px; color: #0b3d20;">${faculty.qualification}</strong>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px;">
                  <span style="font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; display: block; margin-bottom: 4px;">Experience</span>
                  <strong style="font-size: 16px; color: #1e293b;">${faculty.experience}</strong>
                </div>
              </div>

              <div style="margin-top: 20px;">
                <h4 style="font-size: 14px; font-weight: 700; color: #334155; margin: 0 0 8px;">Department Affiliation</h4>
                <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">
                  Serving in the Department of <strong>${faculty.department}</strong> at Sri Shakthi Institute of Engineering and Technology (Autonomous), approved by AICTE New Delhi and affiliated with Anna University Chennai.
                </p>
              </div>
            </div>

            <!-- Research & Specializations -->
            <div style="background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 28px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <h3 style="font-size: 18px; font-weight: 800; color: #0b3d20; margin: 0 0 16px; border-bottom: 2px solid #e8f5e9; padding-bottom: 10px;">
                Research Areas &amp; Specializations
              </h3>
              <p style="font-size: 14px; color: #64748b; margin: 0 0 14px;">
                Core competencies, academic domains, and investigative subject areas:
              </p>
              <div class="research-tags-wrap">
                ${researchBadges}
              </div>
            </div>

            <!-- Institutional Contact Details -->
            <div style="background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; padding: 28px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <h3 style="font-size: 18px; font-weight: 800; color: #0b3d20; margin: 0 0 16px; border-bottom: 2px solid #e8f5e9; padding-bottom: 10px;">
                Official Institutional Contact
              </h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 14px;">
                <div>
                  <strong style="color: #64748b; display: block; font-size: 12px; margin-bottom: 4px;">Institutional Email</strong>
                  <a href="mailto:${faculty.email}" style="color: #167a39; font-weight: 700; text-decoration: underline;">${faculty.email}</a>
                </div>
                <div>
                  <strong style="color: #64748b; display: block; font-size: 12px; margin-bottom: 4px;">Campus Office</strong>
                  <span style="color: #1e293b;">Department Faculty Wing, Sri Shakthi Campus, Coimbatore - 641062</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
}
