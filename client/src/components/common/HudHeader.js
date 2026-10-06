import { ugProgramsDetailed, pgProgramsDetailed } from '../../data/programmesData.js';

export function formatVmTitle(title) {
  if (!title) return '';
  if (title.includes('<em>')) return title;

  // Format '&' with Playfair italic gold accent
  if (title.includes('&amp;')) {
    return title.replace(/&amp;/g, '<em>&amp;</em>');
  }
  if (title.includes('&')) {
    return title.replace(/&/g, '<em>&amp;</em>');
  }

  const words = title.trim().split(/\s+/);
  if (words.length > 1) {
    const lastWord = words.pop();
    return `${words.join(' ')} <em>${lastWord}</em>`;
  }

  // Single word: clean white normal format without gold italic <em> accent
  return title.trim();
}

function getDefaultSubtitle(title, section) {
  const lower = (title || '').toLowerCase().trim();
  if (lower.includes('programme') || lower.includes('program')) {
    return 'Anna University Autonomous R2025 curriculum delivering industry-aligned engineering degree programmes.';
  }
  if (lower === 'departments' || lower.includes('department of')) {
    return 'World-class engineering departments combining fundamental research, modern laboratories, and multidisciplinary innovation.';
  }
  if (lower === 'curriculum') {
    return 'Outcome-based education framework mapped with industry benchmarks and international engineering standards.';
  }
  if (lower.includes('calendar')) {
    return 'Official semester schedule, assessment milestones, academic deadlines, and institutional working dates.';
  }
  if (lower === 'library') {
    return 'A comprehensive resource centre featuring 45,000+ volumes, international digital journals, and modern study spaces.';
  }
  if (lower === 'careers') {
    return 'Be part of a forward-thinking institution committed to nurturing the next generation of engineers and leaders.';
  }
  if (section === 'Admissions' || lower.includes('admission') || lower.includes('apply') || lower.includes('referral')) {
    return 'Begin your engineering journey at Sri Shakthi Institute of Engineering and Technology.';
  }
  if (section === 'Campus' || lower.includes('campus') || lower.includes('hostel') || lower.includes('facility') || lower.includes('sports')) {
    return 'World-class infrastructure designed to inspire innovation, wellness, sports excellence, and a vibrant community life.';
  }
  if (lower.includes('placement')) {
    return 'Empowering young innovators with industry-aligned skillsets, premier corporate recruitments, and high-impact career pathways.';
  }
  return 'Fostering academic excellence, innovative thinking, and professional achievement at Sri Shakthi.';
}

function getDefaultKicker(title, section, rawKicker) {
  if (rawKicker && !rawKicker.includes('SYSTEM ONLINE') && !rawKicker.includes('SIET-OS')) {
    return rawKicker;
  }
  const lower = (title || '').toLowerCase().trim();
  if (lower.includes('programme') || lower.includes('program')) return 'ACADEMIC PROGRAMMES';
  if (lower === 'departments') return 'ACADEMIC DEPARTMENTS';
  if (lower === 'curriculum') return 'AUTONOMOUS CURRICULUM R2025';
  if (lower.includes('calendar')) return 'SCHEDULES &amp; TIMETABLES';
  if (lower === 'library') return 'CENTRAL RESOURCE CENTRE';
  if (lower === 'careers') return 'JOIN OUR COMMUNITY';
  if (section === 'Admissions') return 'ADMISSIONS &amp; ENROLMENT';
  if (section === 'Campus') return 'CAMPUS LIFE &amp; FACILITIES';
  if (section === 'Academics') return 'ACADEMIC EXCELLENCE';
  if (section === 'Departments' || section === true) return 'DEPARTMENT PROFILE';
  return 'OUR INSTITUTIONAL PURPOSE';
}

export function sietPageHeader(title, subtitle = '', kicker = '') {
  const displayKicker = kicker || getDefaultKicker(title, '', '');
  const displaySubtitle = subtitle || getDefaultSubtitle(title, '');
  const formattedTitle = formatVmTitle(title);

  return `
    <section class="siet-vm-hero">
      <div class="siet-vm-hero-grid"></div>
      <div class="siet-vm-hero-orb orb-one"></div>
      <div class="siet-vm-hero-orb orb-two"></div>
      <div class="siet-vm-shell siet-vm-hero-content reveal">
        <p class="siet-vm-kicker"><i></i> ${displayKicker}</p>
        <h1>${formattedTitle}</h1>
        ${displaySubtitle ? `<p class="siet-vm-intro">${displaySubtitle}</p>` : ''}
      </div>
    </section>
  `;
}

export function sietHudHeader(title, breadcrumbName = title, section = 'Departments', sectionHref = '#/departments', kicker = '', subtitle = '') {
  const displayKicker = getDefaultKicker(title, section, kicker);
  const displaySubtitle = subtitle || getDefaultSubtitle(title, section);
  const formattedTitle = formatVmTitle(title);

  return `
    <section class="siet-vm-hero">
      <div class="siet-vm-hero-grid"></div>
      <div class="siet-vm-hero-orb orb-one"></div>
      <div class="siet-vm-hero-orb orb-two"></div>
      <div class="siet-vm-shell siet-vm-hero-content reveal">
        <p class="siet-vm-kicker"><i></i> ${displayKicker}</p>
        <h1>${formattedTitle}</h1>
        ${displaySubtitle ? `<p class="siet-vm-intro">${displaySubtitle}</p>` : ''}
      </div>
    </section>
  `;
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
