import { ugProgramsDetailed, pgProgramsDetailed } from '../../data/programmesData.js';

export function sietPageHeader(title, subtitle = '', kicker = 'SRI SHAKTHI') {
  return `<section class="page-hero"><img class="page-crest" src="/brand/siet-logo.png" alt="Sri Shakthi emblem"><div class="eyebrow"><span></span> ${kicker}</div><h1 class="reveal">${title.toUpperCase()}</h1>${subtitle ? `<p>${subtitle}</p>` : ''}</section>`;
}

export function sietHudHeader(title, breadcrumbName = title, section = 'Departments', sectionHref = '#/departments', kicker = '') {
  let showDepts = true;
  if (typeof section === 'boolean') {
    showDepts = section;
    sectionHref = section ? '#/departments' : '';
    section = section ? 'Departments' : '';
  } else if (!section) {
    showDepts = false;
  }
  if (!kicker) {
    if (section === 'Admissions') kicker = 'SYSTEM ONLINE / ADMISSION PROFILE / SIET-OS';
    else if (section === 'Campus') kicker = 'SYSTEM ONLINE / CAMPUS PROFILE / SIET-OS';
    else if (showDepts) kicker = 'SYSTEM ONLINE / ACADEMIC PROFILE / SIET-OS';
    else kicker = '';
  }
  const kickerAttr = kicker ? ` data-kicker="${kicker}"` : '';
  const breadcrumbSection = showDepts && sectionHref ? `<a href="${sectionHref}">${section}</a><span>/</span>` : (section ? `<span>${section}</span><span>/</span>` : '');
  return `<section class="department-detail-header siet-hud-header"${kickerAttr}>
    <div class="department-detail-title">
      <div class="hud-title-group">
        <span class="hud-diamond" aria-hidden="true">◈</span>
        <h1>${title.toUpperCase()}</h1>
      </div>
      <div class="department-breadcrumb">
        <a href="#/">Home</a><span>/</span>${breadcrumbSection}<b>${breadcrumbName}</b>
      </div>
    </div>
  </section>`;
}

export function programSelectHtml(label, name) {
  return `
    <label>${label} <b>*</b>
      <select name="${name}" required>
        <option value="">Select ${label}</option>
        <optgroup label="Undergraduate (UG) Programmes">
          ${ugProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
        </optgroup>
        <optgroup label="Postgraduate (PG) Programmes">
          ${pgProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
        </optgroup>
      </select>
    </label>
  `;
}
