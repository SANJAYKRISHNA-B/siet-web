
export const coeIcons = {
  about: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l9-4 9 4"/><line x1="9" y1="21" x2="9" y2="12"/><line x1="15" y1="21" x2="15" y2="12"/></svg>`,
  results: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  transcripts: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  schedules: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  forms: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  regulations: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  responsibilities: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  committee: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  contact: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
};

// Office of the Controller of Examinations (COE) Data & Page Templates
// Sri Shakthi Institute of Engineering and Technology (Autonomous)
// Office of the Controller of Examinations (COE) Autonomous Portal Data

export const examinationCommittee = [
  {
    sno: 1,
    name: 'Dr. N. K. Sakthivel',
    designation: 'Principal, SIET',
    position: 'Principal',
    badge: 'Head of Institution'
  },
  {
    sno: 2,
    name: 'Dr. S. Prakash',
    designation: 'Dean Academics',
    position: 'Member',
    badge: 'Academic Affairs'
  },
  {
    sno: 6,
    name: 'Dr. K. E. Kannammal',
    designation: 'HOD / CSE, Controller of Examinations',
    position: 'Member Secretary',
    badge: 'Controller of Examinations'
  },
  {
    sno: 4,
    name: 'Mr. T. Maheswaran',
    designation: 'AP / ECE, Deputy Controller of Examinations',
    position: 'Member',
    badge: 'Deputy Controller'
  },
  {
    sno: 5,
    name: 'Ms. P. Sasikala',
    designation: 'AP / CSE, Assistant Controller of Examinations',
    position: 'Member',
    badge: 'Assistant Controller'
  }
];

export const coeResponsibilities = [
  'Collection of student bio data from the students.',
  'Mapping Electives from the students for the current semester.',
  'Conducting CIE test for the students of various UG/PG Programmes.',
  'Preparation of exam schedule, Hall allocation and Seating arrangements for Continuous Internal Evaluation Test (CIE).',
  'Collection of Question Papers from the departments, printing and disseminating for CIE test.',
  'Collecting Practical examination schedule from the departments.',
  'Appointment of External Examiners for practical examinations.',
  'Ensuring students attendance percentage during semester.',
  'Lack of attendance, debarred and withdrawal.',
  'Panel of Examiners preparation from various Institution/Universities.',
  'Exam schedule preparation for Semester End Examinations.',
  'Appointment of Hall Invigilators, Hall Chart, Seating arrangements, Squad and Chief Superintendent etc.',
  'Appointment of Evaluators, Chief Examiners and Chairman for Valuation.',
  'Publication of Results.',
  'Conducting Malpractice meeting, if any in the semester by Malpractice Committee.',
  'Conducting of revaluation and issuing photocopy to the students.',
  'Publishing revaluation results and Review process.',
  'Printing of Statement of Grades, Consolidated Statement of Grades.',
  'Issue of Duplicate Grade Sheet/ Certificate etc.,',
  'Issue of Transcripts, CGPA to percentage conversion, Medium of Instruction, WES request etc.,',
  'Conduction of graduation day and issuing degree certificate.',
  'Assisting in student background verification.'
];

export const coePhases = [
  {
    phase: 'Phase 01',
    title: 'Pre-Examination & Course Mapping',
    items: [
      { num: 1, text: 'Collection of student bio data from the students.' },
      { num: 2, text: 'Mapping Electives from the students for the current semester.' },
      { num: 3, text: 'Conducting CIE test for the students of various UG/PG Programmes.' },
      { num: 4, text: 'Preparation of exam schedule, Hall allocation and Seating arrangements for Continuous Internal Evaluation Test (CIE).' },
      { num: 5, text: 'Collection of Question Papers from the departments, printing and disseminating for CIE test.' }
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Examination Operations & Vigilance',
    items: [
      { num: 6, text: 'Collecting Practical examination schedule from the departments.' },
      { num: 7, text: 'Appointment of External Examiners for practical examinations.' },
      { num: 8, text: 'Ensuring students attendance percentage during semester.' },
      { num: 9, text: 'Lack of attendance, debarred and withdrawal.' },
      { num: 10, text: 'Panel of Examiners preparation from various Institution/Universities.' },
      { num: 11, text: 'Exam schedule preparation for Semester End Examinations.' },
      { num: 12, text: 'Appointment of Hall Invigilators, Hall Chart, Seating arrangements, Squad and Chief Superintendent etc.' }
    ]
  },
  {
    phase: 'Phase 03',
    title: 'Central Valuation & Result Declaration',
    items: [
      { num: 13, text: 'Appointment of Evaluators, Chief Examiners and Chairman for Valuation.' },
      { num: 14, text: 'Publication of Results.' },
      { num: 15, text: 'Conducting Malpractice meeting, if any in the semester by Malpractice Committee.' },
      { num: 16, text: 'Conducting of revaluation and issuing photocopy to the students.' },
      { num: 17, text: 'Publishing revaluation results and Review process.' }
    ]
  },
  {
    phase: 'Phase 04',
    title: 'Credentials, Certification & Graduation',
    items: [
      { num: 18, text: 'Printing of Statement of Grades, Consolidated Statement of Grades.' },
      { num: 19, text: 'Issue of Duplicate Grade Sheet/ Certificate etc.,' },
      { num: 20, text: 'Issue of Transcripts, CGPA to percentage conversion, Medium of Instruction, WES request etc.,' },
      { num: 21, text: 'Conduction of graduation day and issuing degree certificate.' },
      { num: 22, text: 'Assisting in student background verification.' }
    ]
  }
];

export const coeFormsList = [
  {
    title: 'Photocopy Form',
    code: 'PHOTOCOPY-FORM',
    desc: 'Application form for obtaining true evaluated photocopy of answer script after result declaration.',
    file: '/download/PhotoCopy-form.pdf',
    filename: 'PhotoCopy-form.pdf',
    badge: 'Photocopy'
  },
  {
    title: 'Revaluation Form',
    code: 'REVALUATION-FORM',
    desc: 'Application form for central revaluation of evaluated semester end theory examination answer booklets.',
    file: '/download/Revaluation form.pdf',
    filename: 'Revaluation form.pdf',
    badge: 'Revaluation'
  },
  {
    title: 'Revaluation - Script Valuation Form',
    code: 'REVAL-SCRIPT-FORM',
    desc: 'Official faculty assessment and endorsement rubric for course coordinator scrutiny prior to revaluation.',
    file: '/download/Revaluation-Script Valuation form.pdf',
    filename: 'Revaluation-Script Valuation form.pdf',
    badge: 'Faculty Scrutiny'
  },
  {
    title: 'Transcript Application Form',
    code: 'TRANSCRIPT-FORM',
    desc: 'Requisition form for issuing certified official transcripts, WES verification, medium of instruction and CGPA conversion.',
    file: '/download/Transcript application form.pdf',
    filename: 'Transcript application form.pdf',
    badge: 'Transcripts'
  },
  {
    title: 'Duplicate Certificate Form',
    code: 'DUPLICATE-FORM',
    desc: 'Formal application format and affidavit for obtaining duplicate grade sheet or degree certificate.',
    file: '/download/Duplicate Certificate Form.pdf',
    filename: 'Duplicate Certificate Form.pdf',
    badge: 'Duplicate Cards'
  }
];

export const coeRegulationsList = [
  {
    title: 'R2025 Autonomous Regulation',
    desc: 'Undergraduate Autonomous Regulations 2025, 168-credit framework, outcome-based education and updated grading system (S, A+, A, B+, B, C).',
    filename: 'Regulation 2025 UG.pdf',
    file: '#/curriculum',
    badge: 'R2025 Framework'
  },
  {
    title: 'R2021 UG Regulation',
    desc: 'Undergraduate Autonomous Regulations, curriculum structure, choice-based credit system and assessment rules (O, A+, A, B+, B, C, U).',
    filename: 'Regulation 2021 UG.pdf',
    file: '/download/Regulation 2021 UG.pdf',
    badge: 'UG Regulation'
  },
  {
    title: 'R2021 UG - Amendment I',
    desc: 'Official Amendment I to Regulations 2021 for undergraduate degree programmes.',
    filename: 'R2021 UG-AMENDMENT - I SIET.pdf',
    file: '/download/R2021 UG-AMENDMENT - I SIET.pdf',
    badge: 'Amendment I'
  },
  {
    title: 'R2021 UG - Amendment II',
    desc: 'Official Amendment II to Regulations 2021 regarding elective choices and credits.',
    filename: 'R2021 UG-AMENDMENT - II SIET.pdf',
    file: '/download/R2021 UG-AMENDMENT - II SIET.pdf',
    badge: 'Amendment II'
  },
  {
    title: 'R2021 PG Regulation',
    desc: 'Postgraduate Autonomous Regulations for Master of Engineering (M.E.) programmes.',
    filename: 'Regulation 2021 PG.pdf',
    file: '/download/Regulation 2021 PG.pdf',
    badge: 'PG Regulation'
  }
];

export const coeExamSchedules = [
  {
    title: 'UG Semester VII CIAT - Rescheduled',
    desc: 'Revised Continuous Internal Assessment Test (CIE-II) schedule for 7th Semester B.E./B.Tech candidates.',
    filename: 'CIA-II-semester-VII-UG-Rescheduled.pdf',
    file: '/downloads/CIA-II-semester-VII-UG-Rescheduled.pdf',
    status: 'Latest'
  },
  {
    title: 'UG Semester VII CIAT Schedule',
    desc: 'Continuous Internal Assessment Test (CIE-II) schedule for final year undergraduate students.',
    filename: 'CIA-II-semester-VII-UG.pdf',
    file: '/downloads/CIA-II-semester-VII-UG.pdf',
    status: 'Notice'
  }
];

export function renderHudHeader(title, breadcrumbName = title, kicker = 'SYSTEM ONLINE / EXAMINATION CELL / SIET-OS') {
  return `<section class="department-detail-header siet-hud-header" data-kicker="${kicker}">
    <div class="department-detail-title">
      <div class="hud-title-group">
        <span class="hud-diamond" aria-hidden="true">◈</span>
        <h1>${title.toUpperCase()}</h1>
      </div>
      <div class="department-breadcrumb">
        <a href="#/">Home</a><span>/</span><b>${breadcrumbName}</b>
      </div>
    </div>
  </section>`;
}

export function coePortalPage(activeTab = 'about') {
  return `
  <main class="siet-coe-page">
    <!-- Bespoke Executive Autonomous COE Hero Template -->
    <section class="coe-exec-hero">
      <div class="coe-exec-hero-glow" aria-hidden="true"></div>
      <div class="coe-exec-hero-pattern" aria-hidden="true"></div>

      <!-- Flowing Decorative Ribbon Vectors & Dot Grids -->
      <svg class="coe-hero-deco-svg" viewBox="0 0 1440 460" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="coeGoldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#cca01d" stop-opacity="0.6"/>
            <stop offset="50%" stop-color="#10b981" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="#f6ce62" stop-opacity="0.7"/>
          </linearGradient>
          <linearGradient id="coeGreenRibbon" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#059669" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#cca01d" stop-opacity="0.2"/>
          </linearGradient>
        </defs>

        <!-- Top Left Ribbon Accents -->
        <path d="M-80,180 C40,120 80,40 160,-20" stroke="url(#coeGoldRibbon)" stroke-width="26" stroke-linecap="round" opacity="0.4" />
        <path d="M-60,220 C60,160 120,60 220,-20" stroke="url(#coeGreenRibbon)" stroke-width="12" stroke-linecap="round" opacity="0.3" />

        <!-- Bottom Right Flowing Ribbons -->
        <path d="M1020,480 C1140,400 1220,280 1480,140" stroke="url(#coeGoldRibbon)" stroke-width="32" stroke-linecap="round" opacity="0.5" />
        <path d="M1080,490 C1200,420 1290,320 1490,210" stroke="url(#coeGreenRibbon)" stroke-width="16" stroke-linecap="round" opacity="0.4" />
        <path d="M1160,490 C1260,450 1340,360 1490,290" stroke="url(#coeGoldRibbon)" stroke-width="8" stroke-linecap="round" opacity="0.3" />

        <!-- Left Dot Matrix Grid (5x4) -->
        <g class="coe-deco-dots" fill="#22c55e" opacity="0.4">
          <circle cx="50" cy="90" r="2.5"/><circle cx="65" cy="90" r="2.5"/><circle cx="80" cy="90" r="2.5"/><circle cx="95" cy="90" r="2.5"/>
          <circle cx="50" cy="105" r="2.5"/><circle cx="65" cy="105" r="2.5"/><circle cx="80" cy="105" r="2.5"/><circle cx="95" cy="105" r="2.5"/>
          <circle cx="50" cy="120" r="2.5"/><circle cx="65" cy="120" r="2.5"/><circle cx="80" cy="120" r="2.5"/><circle cx="95" cy="120" r="2.5"/>
          <circle cx="50" cy="135" r="2.5"/><circle cx="65" cy="135" r="2.5"/><circle cx="80" cy="135" r="2.5"/><circle cx="95" cy="135" r="2.5"/>
          <circle cx="50" cy="150" r="2.5"/><circle cx="65" cy="150" r="2.5"/><circle cx="80" cy="150" r="2.5"/><circle cx="95" cy="150" r="2.5"/>
        </g>

        <!-- Right Dot Matrix Grid (5x4) -->
        <g class="coe-deco-dots" fill="#22c55e" opacity="0.35">
          <circle cx="1380" cy="160" r="2.5"/><circle cx="1395" cy="160" r="2.5"/><circle cx="1410" cy="160" r="2.5"/><circle cx="1425" cy="160" r="2.5"/>
          <circle cx="1380" cy="175" r="2.5"/><circle cx="1395" cy="175" r="2.5"/><circle cx="1410" cy="175" r="2.5"/><circle cx="1425" cy="175" r="2.5"/>
          <circle cx="1380" cy="190" r="2.5"/><circle cx="1395" cy="190" r="2.5"/><circle cx="1410" cy="190" r="2.5"/><circle cx="1425" cy="190" r="2.5"/>
          <circle cx="1380" cy="205" r="2.5"/><circle cx="1395" cy="205" r="2.5"/><circle cx="1410" cy="205" r="2.5"/><circle cx="1425" cy="205" r="2.5"/>
          <circle cx="1380" cy="220" r="2.5"/><circle cx="1395" cy="220" r="2.5"/><circle cx="1410" cy="220" r="2.5"/><circle cx="1425" cy="220" r="2.5"/>
        </g>
      </svg>
      
      <div class="coe-exec-shell">
        <!-- Top Metadata & Navigation Bar -->
        <div class="coe-exec-topbar">
          <nav class="coe-exec-breadcrumbs" aria-label="Breadcrumb">
            <a href="#/" class="coe-breadcrumb-home">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
              <span>Home</span>
            </a>
            <span class="sep">/</span>
            <a href="#/curriculum">Academics</a>
            <span class="sep">/</span>
            <span class="cur">Controller of Examinations</span>
          </nav>
          
          <div class="coe-exec-status-group">
            <span class="coe-status-pill">
              <span class="status-pulse"></span>
              <span>AUTONOMOUS EXAMINATION PORTAL</span>
            </span>
            <span class="coe-status-tag coe-tag-gold">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>ESTD. 2019</span>
            </span>
          </div>
        </div>

        <!-- Main Executive Presentation Banner -->
        <div class="coe-exec-main">
          <div class="coe-exec-content-col">
            <!-- Kicker with horizontal accent bar -->
            <div class="coe-exec-kicker-row">
              <span class="coe-kicker-bar"></span>
              <span class="coe-kicker-gold">OFFICIAL ACADEMIC GOVERNANCE</span>
              <span class="coe-kicker-div">•</span>
              <span class="coe-kicker-gold">CONFERMENT OF AUTONOMY SEP 2019</span>
            </div>

            <!-- Two-tone stacked Title -->
            <h1 class="coe-exec-title">
              <span class="coe-title-main">Office of the Controller</span>
              <span class="coe-title-gold">of Examinations</span>
            </h1>

            <!-- Subtitle Institution -->
            <p class="coe-exec-institution">Sri Shakthi Institute of Engineering and Technology</p>

            <!-- 4-Column Accreditation Badges Strip -->
            <div class="coe-exec-accred-strip">
              <div class="coe-accred-item">
                <div class="coe-accred-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f6ce62" stroke-width="2"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l9-4 9 4"/><line x1="9" y1="21" x2="9" y2="12"/><line x1="15" y1="21" x2="15" y2="12"/></svg>
                </div>
                <div class="coe-accred-text">
                  <span class="coe-accred-title">Autonomous Institution</span>
                  <span class="coe-accred-sub">Affiliated to Anna University, Chennai</span>
                </div>
              </div>

              <div class="coe-accred-divider" aria-hidden="true"></div>

              <div class="coe-accred-item">
                <div class="coe-accred-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f6ce62" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <div class="coe-accred-text">
                  <span class="coe-accred-title">Approved by AICTE</span>
                  <span class="coe-accred-sub">New Delhi</span>
                </div>
              </div>

              <div class="coe-accred-divider" aria-hidden="true"></div>

              <div class="coe-accred-item">
                <div class="coe-accred-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f6ce62" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>
                </div>
                <div class="coe-accred-text">
                  <span class="coe-accred-title coe-naac-highlight">NAAC 'A' Grade</span>
                </div>
              </div>

              <div class="coe-accred-divider" aria-hidden="true"></div>

              <div class="coe-accred-item">
                <div class="coe-accred-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f6ce62" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>
                <div class="coe-accred-text">
                  <span class="coe-accred-title">NBA Accredited Programmes</span>
                </div>
              </div>
            </div>

            <!-- Quote & CTA Button Row -->
            <div class="coe-exec-quote-cta-row">
              <div class="coe-exec-quote-card">
                <div class="coe-quote-mark" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#cca01d"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                </div>
                <p>
                  "The Office of the Controller of Examinations plays an essential role in the academic activities of the college and is an important part of the autonomy. The CoE office is responsible to assess the continuous learning process of the students at defined intervals and publish the outcome for the students ensuring confidentiality."
                </p>
              </div>

              <div class="coe-exec-cta-col">
                <button type="button" class="coe-exec-cta-btn js-coe-tab-jump" data-target-tab="results" id="coeHeroPortalBtn">
                  <span>Open Examination Portal</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </div>

            <!-- 5 Executive Accreditation & Credential Badges -->
            <div class="coe-exec-pillars-row">
              <div class="coe-pillar-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f6ce62" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <div class="coe-chip-meta">
                  <span class="coe-chip-label">Autonomy:</span>
                  <span class="coe-chip-val">Sep 2019 Conferment</span>
                </div>
              </div>

              <div class="coe-pillar-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f6ce62" stroke-width="2"><path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l9-4 9 4"/><line x1="9" y1="21" x2="9" y2="12"/><line x1="15" y1="21" x2="15" y2="12"/></svg>
                <div class="coe-chip-meta">
                  <span class="coe-chip-label">Affiliated:</span>
                  <span class="coe-chip-val">Anna University</span>
                </div>
              </div>

              <div class="coe-pillar-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f6ce62" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                <div class="coe-chip-meta">
                  <span class="coe-chip-label">Counselling Code:</span>
                  <span class="coe-chip-val">TNEA 2727</span>
                </div>
              </div>

              <div class="coe-pillar-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f6ce62" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <div class="coe-chip-meta">
                  <span class="coe-chip-label">Confidentiality:</span>
                  <span class="coe-chip-val">Barcoded Papers &amp; Blind Valuation</span>
                </div>
              </div>

              <div class="coe-pillar-chip">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f6ce62" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                <div class="coe-chip-meta">
                  <span class="coe-chip-label">Regulations:</span>
                  <span class="coe-chip-val">R2025 (OBE) &amp; R2021 (CBCS)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Main Vertical Navigation Layout Section -->
    <section class="coe-main-tabs-section">
      <div class="coe-portal-layout">
        <!-- Left Vertical Navigation Sidebar -->
        <aside class="coe-vertical-sidebar">
          <div class="coe-sidebar-header">
            <span class="coe-sidebar-kicker">EXAMINATION PORTAL</span>
            <h3 class="coe-sidebar-title">Portal Sections</h3>
          </div>

          <nav class="coe-vertical-nav" role="tablist" aria-label="COE Sections Navigation">
            <button type="button" class="coe-tab-btn ${activeTab === 'about' ? 'active' : ''}" data-tab="about" role="tab" aria-selected="${activeTab === 'about'}">
              <span class="tab-icon">${coeIcons.about}</span>
              <span class="tab-title">About COE</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'results' ? 'active' : ''}" data-tab="results" role="tab" aria-selected="${activeTab === 'results'}">
              <span class="tab-icon">${coeIcons.results}</span>
              <span class="tab-title">Results</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'transcripts' ? 'active' : ''}" data-tab="transcripts" role="tab" aria-selected="${activeTab === 'transcripts'}">
              <span class="tab-icon">${coeIcons.transcripts}</span>
              <span class="tab-title">Official Transcripts</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'schedules' ? 'active' : ''}" data-tab="schedules" role="tab" aria-selected="${activeTab === 'schedules'}">
              <span class="tab-icon">${coeIcons.schedules}</span>
              <span class="tab-title">Exam Schedule</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'forms' ? 'active' : ''}" data-tab="forms" role="tab" aria-selected="${activeTab === 'forms'}">
              <span class="tab-icon">${coeIcons.forms}</span>
              <span class="tab-title">Downloads &amp; Forms</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'regulations' ? 'active' : ''}" data-tab="regulations" role="tab" aria-selected="${activeTab === 'regulations'}">
              <span class="tab-icon">${coeIcons.regulations}</span>
              <span class="tab-title">Regulation &amp; Curriculum</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'responsibilities' ? 'active' : ''}" data-tab="responsibilities" role="tab" aria-selected="${activeTab === 'responsibilities'}">
              <span class="tab-icon">${coeIcons.responsibilities}</span>
              <span class="tab-title">Responsibilities</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'committee' ? 'active' : ''}" data-tab="committee" role="tab" aria-selected="${activeTab === 'committee'}">
              <span class="tab-icon">${coeIcons.committee}</span>
              <span class="tab-title">Committee</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'contact' ? 'active' : ''}" data-tab="contact" role="tab" aria-selected="${activeTab === 'contact'}">
              <span class="tab-icon">${coeIcons.contact}</span>
              <span class="tab-title">Contact &amp; Grievance Cell</span>
              <span class="tab-chevron">›</span>
            </button>
          </nav>

          <!-- Sidebar Quick Helpline Box -->
          <div class="coe-sidebar-helpline">
            <div class="csh-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div class="csh-content">
              <span class="csh-label">EXAMINATION HELPLINE</span>
              <a href="tel:04224099859" class="csh-phone">0422 – 4099859</a>
              <a href="tel:9442110336" class="csh-phone-alt">Mobile: 94421 10336</a>
              <span class="csh-time">Mon – Sat · 9:00 AM – 5:00 PM</span>
            </div>
          </div>
        </aside>

        <!-- Right Content Area with Tab Panes -->
        <div class="coe-portal-content">

        <!-- TAB 1: ABOUT COE & MANDATE -->
        <div id="coe-pane-about" class="coe-tab-pane ${activeTab === 'about' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">AUTONOMOUS CELL ESTABLISHED SEPTEMBER 2019</span>
              <h2>Office of the Controller of Examinations</h2>
            </div>
            <div class="coe-two-col">
              <div class="coe-col-main">
                <blockquote style="font-size: 15px; line-height: 1.8; color: #004d2e; background: #eef7f2; border-left: 4px solid #cca01d; padding: 18px 22px; border-radius: 0 10px 10px 0; margin: 0 0 20px;">
                  "The Office of the Controller of Examinations plays an essential role in the academic activities of the college and is an important part of the autonomy. The CoE office is responsible to assess the continuous learning process of the students at defined intervals and publish the outcome for the students ensuring confidentiality.<br><br>
                  The office of “The Controller of Examinations” has been established from the month of <b>September 2019</b> since the conferment of Autonomous to the institution.<br><br>
                  The Office of the Controller of Examinations shall be responsible for assessing continuous learning process of the students by maintaining best quality and standard in examination process and ensuring confidentiality. It is the duty of the office of the Controller of Examinations to arrange, prepare, schedule, conduct, publish and maintain records of CIE and Semester End Examinations of the students of all UG, PG and Ph.D programmes."
                </blockquote>

                <p>Sri Shakthi Institute of Engineering and Technology is an Autonomous Institution approved by AICTE, New Delhi, affiliated to Anna University, Chennai, accredited with 'A' Grade by NAAC, and with eligible programmes accredited by NBA (Agri, BME, BT, CSE, ECE, EEE, Mech, IT).</p>
              </div>

              <div class="coe-col-aside">
                <div class="coe-highlight-box">
                  <span class="box-tag">INSTITUTIONAL ACCREDITATIONS</span>
                  <h3>Sri Shakthi Autonomous</h3>
                  <p><b>Affiliation:</b> Anna University, Chennai<br>
                  <b>Approval:</b> AICTE, New Delhi<br>
                  <b>Conferment of Autonomy:</b> September 2019<br>
                  <b>NAAC Rating:</b> 'A' Grade<br>
                  <b>NBA Accredited:</b> Agri, BME, BT, CSE, ECE, EEE, Mech, IT<br>
                  <b>TNEA Counselling Code:</b> 2727</p>
                </div>

                <div class="coe-stat-card-row">
                  <div class="coe-mini-stat">
                    <strong>Sep 2019</strong>
                    <small>Autonomous Inception</small>
                  </div>
                  <div class="coe-mini-stat">
                    <strong>UG &amp; PG</strong>
                    <small>CIE &amp; ESE</small>
                  </div>
                  <div class="coe-mini-stat">
                    <strong>100%</strong>
                    <small>Confidential</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 2: FUNCTIONS & RESPONSIBILITIES (All 22 Verbatim Points in 4-Phase Architecture) -->
        <div id="coe-pane-responsibilities" class="coe-tab-pane ${activeTab === 'responsibilities' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">MANDATE &amp; STATUTORY DUTIES</span>
              <h2>The other responsibilities of the office are:</h2>
              <p>The following 22 statutory responsibilities are performed by the Office of the Controller of Examinations organized across the 4 stages of the autonomous examination lifecycle:</p>
            </div>

            <div class="coe-phases-container">
              ${coePhases.map(ph => `
                <div class="coe-phase-block">
                  <div class="coe-phase-header">
                    <span class="coe-phase-pill">${ph.phase}</span>
                    <h3>${ph.title}</h3>
                  </div>
                  <div class="coe-phase-duties-grid">
                    ${ph.items.map(item => `
                      <div class="coe-duty-card">
                        <span class="coe-duty-num">${item.num}</span>
                        <p>${item.text}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 3: EXAMINATION COMMITTEE MEMBERS -->
        <div id="coe-pane-committee" class="coe-tab-pane ${activeTab === 'committee' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">GOVERNING BODY</span>
              <h2>Examination Committee</h2>
              <p>Official constitution of the Examination Committee as published on the SIET COE website:</p>
            </div>

            <div class="coe-table-wrapper" style="margin-bottom: 24px;">
              <table class="coe-grading-table" style="width: 100%;">
                <thead>
                  <tr>
                    <th style="width: 80px; text-align: center;">Sl.No</th>
                    <th>Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  ${examinationCommittee.map(m => `
                    <tr>
                      <td style="text-align: center; font-weight: 700; color: #004d2e;">${m.sno}</td>
                      <td><b>${m.name}</b><br><small style="color: #64748b;">${m.designation}</small></td>
                      <td><span class="grade-pill grade-o">${m.position}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <div class="coe-highlight-box" style="margin-top: 18px;">
              <span class="box-tag">OFFICIAL RESPONSIBILITY</span>
              <h3>Examination Committee Governance</h3>
              <p>The Examination Committee coordinates Continuous Internal Evaluation (CIE), appoints examiners and squads, conducts examinations, oversees result publication, and addresses student grievances under autonomous regulations.</p>
            </div>
          </div>
        </div>

        <!-- TAB 4: EXAM SCHEDULE (CIA) -->
        <div id="coe-pane-schedules" class="coe-tab-pane ${activeTab === 'schedules' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">EXAM TIMETABLES</span>
              <h2>Exam Schedule</h2>
              <p><b>CIA Schedule</b> — Official timetables published by the Office of the Controller of Examinations:</p>
            </div>

            <div class="coe-downloads-grid">
              ${coeExamSchedules.map(sch => `
                <div class="coe-download-card">
                  <div class="download-card-top">
                    <span class="form-code">CIA SCHEDULE</span>
                    <span class="form-badge">${sch.status}</span>
                  </div>
                  <h3>${sch.title}</h3>
                  <p>${sch.desc}</p>
                  <div class="download-card-bottom">
                    <a href="${sch.file}" target="_blank" rel="noopener" download="${sch.filename}" class="form-download-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      <span>Download (${sch.filename})</span>
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 5: DOWNLOADS & FORMS -->
        <div id="coe-pane-forms" class="coe-tab-pane ${activeTab === 'forms' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">OFFICIAL DOCUMENTS</span>
              <h2>Downloads &amp; Forms</h2>
              <p>Official student application forms available directly from the COE section:</p>
            </div>

            <div class="coe-downloads-grid">
              ${coeFormsList.map(form => `
                <div class="coe-download-card">
                  <div class="download-card-top">
                    <span class="form-code">${form.code}</span>
                    <span class="form-badge">${form.badge}</span>
                  </div>
                  <h3>${form.title}</h3>
                  <p>${form.desc}</p>
                  <div class="download-card-bottom">
                    <a href="${form.file}" target="_blank" rel="noopener" download="${form.filename}" class="form-download-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      <span>Download (${form.filename})</span>
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 6: REGULATION & CURRICULUM -->
        <div id="coe-pane-regulations" class="coe-tab-pane ${activeTab === 'regulations' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">AUTONOMOUS CURRICULAR FRAMEWORK</span>
              <h2>Regulation and Curriculum</h2>
              <p>Official Autonomous Academic Regulations, grading rubrics and statutory amendments published by the Office of the Controller of Examinations:</p>
            </div>

            <!-- Featured Regulation 2025 vs 2021 Overview Cards -->
            <div class="coe-reg-cards-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px; margin-bottom: 28px;">
              <!-- R2025 Card -->
              <div class="coe-reg-hero-card" style="background: linear-gradient(180deg, #f7faf8 0%, #edf6f0 100%); border: 1.5px solid #005a36; border-radius: 14px; padding: 22px; position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                  <span style="font-size: 11px; font-weight: 800; background: #005a36; color: #fff; padding: 3px 10px; border-radius: 14px; letter-spacing: 0.5px;">LATEST · R2025</span>
                  <span style="font-size: 12px; font-weight: 700; color: #cca01d;">168-Credit Framework</span>
                </div>
                <h3 style="font-size: 19px; font-weight: 800; color: #003c24; margin: 0 0 8px;">Autonomous Regulations 2025 (UG)</h3>
                <p style="font-size: 13.5px; color: #355342; line-height: 1.55; margin: 0 0 14px;">Outcome-Based Education (OBE) curriculum with Industry Verticals, Fast-Track Capstone Semester, and CIA (40%) / ESE (60%) evaluation.</p>
                <div style="background: #ffffff; border: 1px solid #d4e5db; border-radius: 8px; padding: 10px 14px; margin-bottom: 16px;">
                  <div style="font-size: 11.5px; font-weight: 800; color: #005a36; text-transform: uppercase; margin-bottom: 4px;">R2025 Letter Grading System</div>
                  <div style="font-size: 13.5px; font-weight: 750; color: #003c24; letter-spacing: 0.5px;">S, A+, A, B+, B, C</div>
                  <small style="color: #64748b; font-size: 11.5px;">10-Point Scale: S(10), A+(9), A(8), B+(7), B(6), C(5)</small>
                </div>
                <a href="#/curriculum" class="button" style="width: 100%; justify-content: center; font-size: 13px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                  <span>Explore Department Syllabi &amp; Curriculum →</span>
                </a>
              </div>

              <!-- R2021 Card -->
              <div class="coe-reg-hero-card" style="background: linear-gradient(180deg, #ffffff 0%, #fbfdfc 100%); border: 1.5px solid #d8e8dd; border-radius: 14px; padding: 22px; position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                  <span style="font-size: 11px; font-weight: 800; background: #2c4d38; color: #fff; padding: 3px 10px; border-radius: 14px; letter-spacing: 0.5px;">R2021 UG</span>
                  <span style="font-size: 12px; font-weight: 700; color: #005a36;">Choice Based Credit System</span>
                </div>
                <h3 style="font-size: 19px; font-weight: 800; color: #003c24; margin: 0 0 8px;">Autonomous Regulations 2021 (UG)</h3>
                <p style="font-size: 13.5px; color: #355342; line-height: 1.55; margin: 0 0 14px;">Autonomous CBCS framework implemented for 2021–2024 batches with Continuous Internal Assessment (40%) and End Semester Examination (60%).</p>
                <div style="background: #f7faf8; border: 1px solid #d4e5db; border-radius: 8px; padding: 10px 14px; margin-bottom: 16px;">
                  <div style="font-size: 11.5px; font-weight: 800; color: #005a36; text-transform: uppercase; margin-bottom: 4px;">R2021 Letter Grading System</div>
                  <div style="font-size: 13.5px; font-weight: 750; color: #003c24; letter-spacing: 0.5px;">O, A+, A, B+, B, C, U</div>
                  <small style="color: #64748b; font-size: 11.5px;">10-Point Scale: O(10), A+(9), A(8), B+(7), B(6), C(5), U(0)</small>
                </div>
                <a href="/brand/Regulation 2021 UG.pdf" target="_blank" rel="noopener" download="Regulation 2021 UG.pdf" class="button" style="width: 100%; justify-content: center; font-size: 13px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; background: #005a36; color: #fff;">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  <span>Download Regulation 2021 (UG) PDF</span>
                </a>
              </div>
            </div>

            <!-- All Regulation Documents & Amendments Grid -->
            <h3 style="font-size: 17px; font-weight: 800; color: #003c24; margin: 20px 0 12px;">Official Regulatory Gazettes &amp; Amendments</h3>
            <div class="coe-downloads-grid">
              ${coeRegulationsList.map(reg => `
                <div class="coe-download-card">
                  <div class="download-card-top">
                    <span class="form-code">REGULATION</span>
                    <span class="form-badge">${reg.badge}</span>
                  </div>
                  <h3>${reg.title}</h3>
                  <p>${reg.desc}</p>
                  <div class="download-card-bottom">
                    <a href="${reg.file}" target="_blank" rel="noopener" ${reg.file.endsWith('.pdf') ? `download="${reg.filename}"` : ''} class="form-download-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      <span>${reg.file.endsWith('.pdf') ? `Download (${reg.filename})` : 'Open Regulations View'}</span>
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 7: OFFICIAL TRANSCRIPTS -->
        <div id="coe-pane-transcripts" class="coe-tab-pane ${activeTab === 'transcripts' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">ACADEMIC CREDENTIALS &amp; GLOBAL VERIFICATION</span>
              <h2>Official Academic Transcripts</h2>
              <p>Application procedures, guidelines and downloadable forms for official certified academic transcripts, WES verification, and higher education credential evaluation:</p>
            </div>

            <div class="transcript-intro-card" style="background: #f7faf8; border: 1px solid #deebe3; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px; display: flex; gap: 18px; align-items: flex-start;">
              <div class="ti-icon" style="background: #004d2e; color: #fff; width: 48px; height: 48px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>
              </div>
              <div class="ti-text">
                <h3 style="color: #004d2e; font-size: 17px; margin: 0 0 6px; font-weight: 750;">Issue of Transcripts &amp; Academic Records</h3>
                <p style="margin: 0; font-size: 14px; line-height: 1.65; color: #2a4938;">As mandated under autonomous governance, the Office of the Controller of Examinations is the authorized issuing authority for certified official academic transcripts, CGPA to percentage conversion certificates, Medium of Instruction declarations, graduation credentials, and electronic WES transmissions.</p>
              </div>
            </div>

            <!-- 4 Step Process Cards -->
            <div class="transcript-process-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">
              <div class="tp-step" style="background: #ffffff; border: 1px solid #deebe3; border-radius: 10px; padding: 18px;">
                <span class="step-num" style="font-size: 12px; font-weight: 800; color: #004d2e; background: #eef7f2; padding: 2px 8px; border-radius: 4px;">STEP 01</span>
                <h4 style="margin: 10px 0 6px; font-size: 15px; color: #004d2e;">Download Form</h4>
                <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #496355;">Download the official Transcript Application Form below.</p>
              </div>
              <div class="tp-step" style="background: #ffffff; border: 1px solid #deebe3; border-radius: 10px; padding: 18px;">
                <span class="step-num" style="font-size: 12px; font-weight: 800; color: #004d2e; background: #eef7f2; padding: 2px 8px; border-radius: 4px;">STEP 02</span>
                <h4 style="margin: 10px 0 6px; font-size: 15px; color: #004d2e;">Attach Grade Cards</h4>
                <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #496355;">Enclose copies of all semester grade sheets and degree certificate.</p>
              </div>
              <div class="tp-step" style="background: #ffffff; border: 1px solid #deebe3; border-radius: 10px; padding: 18px;">
                <span class="step-num" style="font-size: 12px; font-weight: 800; color: #004d2e; background: #eef7f2; padding: 2px 8px; border-radius: 4px;">STEP 03</span>
                <h4 style="margin: 10px 0 6px; font-size: 15px; color: #004d2e;">Verification</h4>
                <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #496355;">Examination Cell cross-checks records and affixes official seal.</p>
              </div>
              <div class="tp-step" style="background: #ffffff; border: 1px solid #deebe3; border-radius: 10px; padding: 18px;">
                <span class="step-num" style="font-size: 12px; font-weight: 800; color: #004d2e; background: #eef7f2; padding: 2px 8px; border-radius: 4px;">STEP 04</span>
                <h4 style="margin: 10px 0 6px; font-size: 15px; color: #004d2e;">Dispatch / WES</h4>
                <p style="margin: 0; font-size: 13px; line-height: 1.5; color: #496355;">Transcripts issued in tamper-evident sealed envelope or sent to WES.</p>
              </div>
            </div>

            <!-- Downloads & Submission Two-Column Layout -->
            <div class="coe-two-col">
              <div class="coe-col-main">
                <h4 style="color: #004d2e; margin: 0 0 14px; font-size: 16px;">Download Transcript &amp; Certificate Forms:</h4>
                <div style="display: flex; flex-direction: column; gap: 14px;">
                  <div class="coe-download-card">
                    <div class="download-card-top">
                      <span class="form-code">TRANSCRIPT-FORM</span>
                      <span class="form-badge">Transcripts</span>
                    </div>
                    <h3>Transcript Application Form</h3>
                    <p>Requisition form for issuing certified official transcripts, WES verification, medium of instruction and CGPA conversion.</p>
                    <div class="download-card-bottom">
                      <a href="/download/Transcript application form.pdf" target="_blank" rel="noopener" download="Transcript application form.pdf" class="form-download-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        <span>Download (Transcript application form.pdf)</span>
                      </a>
                    </div>
                  </div>

                  <div class="coe-download-card">
                    <div class="download-card-top">
                      <span class="form-code">DUPLICATE-FORM</span>
                      <span class="form-badge">Duplicate Cards</span>
                    </div>
                    <h3>Duplicate Certificate Form</h3>
                    <p>Formal application format and affidavit for obtaining duplicate grade sheet or degree certificate.</p>
                    <div class="download-card-bottom">
                      <a href="/download/Duplicate Certificate Form.pdf" target="_blank" rel="noopener" download="Duplicate Certificate Form.pdf" class="form-download-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        <span>Download (Duplicate Certificate Form.pdf)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="coe-col-aside">
                <div class="aside-checklist-box" style="background: #fbfdfc; border: 1px solid #dce8e0; border-radius: 12px; padding: 20px;">
                  <span class="ac-badge" style="display: inline-block; font-size: 11px; font-weight: 800; color: #004d2e; background: #eef7f2; padding: 3px 8px; border-radius: 4px; margin-bottom: 10px;">OFFICE SUBMISSION</span>
                  <h4 style="color: #004d2e; margin: 0 0 10px; font-size: 16px;">Submission Guidelines</h4>
                  <p style="font-size: 13.5px; color: #355342; line-height: 1.6; margin: 0 0 14px;">Duly filled applications along with self-attested photocopies of grade cards may be submitted in person or by post:</p>
                  <ul class="ac-list" style="font-size: 13px; line-height: 1.6;">
                    <li><span class="ac-check">📍</span> <b>Office Address:</b> Office of the Controller of Examinations, Sri Shakthi Institute of Engineering and Technology, L&amp;T By-pass Road, Chinniyampalayam Post, Coimbatore – 641 062.</li>
                    <li><span class="ac-check">✉️</span> <b>Email for WES / Enquiries:</b> <a href="mailto:coe@siet.ac.in" style="color: #0b663c; font-weight: 700;">coe@siet.ac.in</a></li>
                    <li><span class="ac-check">⏱</span> <b>Processing Time:</b> 5 to 7 working days from date of receipt.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB: RESULTS (Autonomous Examination Results Portal) -->
        <div id="coe-pane-results" class="coe-tab-pane ${activeTab === 'results' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">AUTONOMOUS RESULT SYSTEM</span>
              <h2>Examination Results Portal</h2>
              <p>Official End Semester Examination &amp; Continuous Internal Evaluation Results published under autonomous governance:</p>
            </div>

            <div class="coe-two-col">
              <div class="coe-col-main">
                <div class="coe-highlight-box" style="margin-bottom: 20px; border-left: 4px solid #005a36; background: linear-gradient(135deg, #f4faf6 0%, #e8f4ed 100%);">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                    <span class="box-tag" style="background: #004d2e; color: #fff;">AUTONOMOUS EXAMINATION PORTAL</span>
                    <span style="display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 800; color: #0b7041;">
                      <span class="status-pulse" style="width: 7px; height: 7px;"></span> LIVE PORTAL
                    </span>
                  </div>
                  <h3 style="font-size: 20px; color: #003c24; margin: 4px 0 8px;">Autonomous Result Verification</h3>
                  <p style="font-size: 14px; line-height: 1.6; color: #1e3a2b; margin: 8px 0 16px;">
                    Enter your <b>Register Number</b> and <b>Date of Birth</b> to retrieve and verify your autonomous Continuous Internal Assessment (CIE) and End Semester Examination (ESE) results.
                  </p>
                  
                  <form class="coe-result-lookup-form js-coe-result-form" style="background: #ffffff; padding: 18px; border-radius: 10px; border: 1px solid #d2e4d9; margin-bottom: 14px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px;">
                      <div>
                        <label style="display: block; font-size: 12px; font-weight: 700; color: #004d2e; margin-bottom: 6px;">Register Number *</label>
                        <input type="text" name="regno" placeholder="e.g. 714021104001" required style="width: 100%; padding: 10px 12px; border: 1px solid #c5dbcf; border-radius: 6px; font-family: inherit; font-size: 13.5px;" />
                      </div>
                      <div>
                        <label style="display: block; font-size: 12px; font-weight: 700; color: #004d2e; margin-bottom: 6px;">Date of Birth *</label>
                        <input type="date" name="dob" required style="width: 100%; padding: 10px 12px; border: 1px solid #c5dbcf; border-radius: 6px; font-family: inherit; font-size: 13.5px;" />
                      </div>
                    </div>
                    <div style="margin-bottom: 14px;">
                      <label style="display: block; font-size: 12px; font-weight: 700; color: #004d2e; margin-bottom: 6px;">Examination Session *</label>
                      <select name="session" style="width: 100%; padding: 10px 12px; border: 1px solid #c5dbcf; border-radius: 6px; font-family: inherit; font-size: 13.5px;">
                        <option value="Nov / Dec 2024 End Semester Examinations (Autonomous)">Nov / Dec 2024 End Semester Examinations (Autonomous)</option>
                        <option value="April / May 2024 End Semester Examinations (Autonomous)">April / May 2024 End Semester Examinations (Autonomous)</option>
                        <option value="Nov / Dec 2023 End Semester Examinations (Autonomous)">Nov / Dec 2023 End Semester Examinations (Autonomous)</option>
                      </select>
                    </div>
                    <div>
                      <button type="submit" class="button" style="width: 100%; justify-content: center; font-size: 14px; font-weight: 750; padding: 12px; display: inline-flex; align-items: center; gap: 8px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        <span>Check Examination Results</span>
                      </button>
                    </div>
                  </form>

                  <div class="js-coe-result-output" style="display: none; background: #ffffff; border: 1.5px solid #005a36; border-radius: 10px; padding: 18px; margin-top: 14px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e1eee4; padding-bottom: 10px; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
                      <div>
                        <span style="font-size: 11px; font-weight: 800; color: #cca01d; letter-spacing: 0.8px;">PROVISIONAL GRADE STATEMENT</span>
                        <h4 style="margin: 2px 0 0; color: #003c24; font-size: 16px;">Verified Student Result</h4>
                      </div>
                      <span style="font-size: 11px; font-weight: 800; background: #e8f5ed; color: #0b7041; padding: 4px 10px; border-radius: 12px; border: 1px solid #bce2ca;">STATUS: ALL PASSED</span>
                    </div>
                    <div class="js-coe-result-details" style="font-size: 13px; color: #2e4a3b; line-height: 1.6;"></div>
                  </div>
                </div>

                <div class="aside-checklist-box" style="background: #fbfdfc; border: 1px solid #dce8e0; border-radius: 12px; padding: 22px;">
                  <h4 style="color: #004d2e; margin: 0 0 12px; font-size: 16px; font-weight: 800;">Post-Result Verification Services:</h4>
                  <ul class="ac-list" style="display: flex; flex-direction: column; gap: 10px;">
                    <li><span class="ac-check">✓</span> <b>Photocopy of Evaluated Scripts:</b> Students can apply for answer script photocopies within the stipulated date following result publication.</li>
                    <li><span class="ac-check">✓</span> <b>Revaluation of Theory Papers:</b> Candidates can apply for central revaluation of evaluated answer scripts.</li>
                    <li><span class="ac-check">✓</span> <b>Statement of Grades:</b> Official sealed grade cards are issued through the departmental office following the review committee audit.</li>
                  </ul>
                </div>
              </div>

              <div class="coe-col-aside">
                <div class="aside-timing-box">
                  <h4>Post-Result Application Forms</h4>
                  <p>Download official PDF formats from the Examination Cell:</p>
                  <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 14px;">
                    <a href="/download/PhotoCopy-form.pdf" target="_blank" rel="noopener" download="PhotoCopy-form.pdf" class="button button-outline" style="text-align: left; font-size: 13px; padding: 11px 14px; display: flex; align-items: center; justify-content: space-between;">
                      <span>📄 Photocopy Form</span>
                      <span style="font-weight: 800; color: #005a36;">PDF ↓</span>
                    </a>
                    <a href="/download/Revaluation form.pdf" target="_blank" rel="noopener" download="Revaluation form.pdf" class="button button-outline" style="text-align: left; font-size: 13px; padding: 11px 14px; display: flex; align-items: center; justify-content: space-between;">
                      <span>📄 Revaluation Form</span>
                      <span style="font-weight: 800; color: #005a36;">PDF ↓</span>
                    </a>
                    <a href="/download/Revaluation-Script Valuation form.pdf" target="_blank" rel="noopener" download="Revaluation-Script Valuation form.pdf" class="button button-outline" style="text-align: left; font-size: 13px; padding: 11px 14px; display: flex; align-items: center; justify-content: space-between;">
                      <span>📄 Script Valuation Form</span>
                      <span style="font-weight: 800; color: #005a36;">PDF ↓</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 9: GRIEVANCE CELL & CONTACT -->
        <div id="coe-pane-contact" class="coe-tab-pane ${activeTab === 'contact' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">CONTROLLER OF EXAMINATIONS - GRIEVANCE CELL</span>
              <h2>Examination Help Desk &amp; Grievance Cell</h2>
              <p>Official communication directory for students, parents, faculty, and university representatives:</p>
            </div>

            <div class="coe-contact-panel">
              <div class="contact-panel-head">
                <h3>Office of the Controller of Examinations</h3>
                <p><b>Sri Shakthi Institute of Engineering and Technology (Autonomous)</b><br>
                Ground Floor, Administrative Block,<br>
                L&amp;T By-pass Road, Chinniyampalayam Post,<br>
                Coimbatore – 641 062, Tamil Nadu, India.</p>
              </div>

              <div class="contact-details-grid">
                <div class="contact-item">
                  <span class="ci-icon">✉</span>
                  <div>
                    <strong>Official COE Email</strong>
                    <p><a href="mailto:coe@siet.ac.in">coe@siet.ac.in</a></p>
                  </div>
                </div>

                <div class="contact-item">
                  <span class="ci-icon">☎</span>
                  <div>
                    <strong>Direct Office Phone</strong>
                    <p><a href="tel:04224099859">0422 – 4099859</a></p>
                  </div>
                </div>

                <div class="contact-item">
                  <span class="ci-icon">📱</span>
                  <div>
                    <strong>Examination Cell Mobile</strong>
                    <p><a href="tel:9442110336">94421 10336</a></p>
                  </div>
                </div>

                <div class="contact-item">
                  <span class="ci-icon">🌐</span>
                  <div>
                    <strong>Online Results System</strong>
                    <p><a href="#/coe?tab=results">Internal Autonomous Result Portal</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</main>
`;
}
export function coeResultPage() {
  return `
  <main class="siet-coe-result-page">
    <section class="coe-portal-banner">
      <div class="coe-portal-banner-shell">
        <div class="coe-hero-breadcrumb">
          <a href="#/">Home</a><span>/</span><a href="#/coe">COE</a><span>/</span><b>Examination Results</b>
        </div>
        <h1>End Semester Examination Results</h1>
        <p>Official Autonomous Examination &amp; Evaluation Results Portal</p>
      </div>
    </section>

    <section class="coe-result-body">
      <div class="coe-result-container">
        <!-- Official Result Portal Access Card -->
        <div class="coe-result-card-form reveal">
          <div class="result-card-header">
            <img src="/brand/siet-logo.png" alt="Sri Shakthi emblem" class="result-crest">
            <div>
              <span class="result-inst-sub">Autonomous Institution · Affiliated to Anna University</span>
              <h2>Office of the Controller of Examinations</h2>
              <p>Autonomous End Semester Examination Results &amp; Provisional Grade Statements</p>
            </div>
          </div>

          <div style="background: #f7faf8; border: 1px solid #deece4; border-radius: 12px; padding: 24px; margin-top: 20px;">
            <h3 style="color: #004d2e; margin: 0 0 10px; font-size: 18px;">Online Result Verification</h3>
            <p style="font-size: 14.5px; line-height: 1.65; color: #284234; margin: 0 0 18px;">
              Enter your University Register Number and Date of Birth to view and print your provisional examination results:
            </p>

            <form class="coe-result-lookup-form js-coe-result-form" style="background: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #d2e4d9; margin-bottom: 20px; max-width: 680px;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 700; color: #004d2e; margin-bottom: 6px;">Register Number *</label>
                  <input type="text" name="regno" placeholder="e.g. 714021104001" required style="width: 100%; padding: 10px 12px; border: 1px solid #c5dbcf; border-radius: 6px; font-family: inherit; font-size: 14px;" />
                </div>
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 700; color: #004d2e; margin-bottom: 6px;">Date of Birth *</label>
                  <input type="date" name="dob" required style="width: 100%; padding: 10px 12px; border: 1px solid #c5dbcf; border-radius: 6px; font-family: inherit; font-size: 14px;" />
                </div>
              </div>
              <div style="margin-bottom: 16px;">
                <label style="display: block; font-size: 12px; font-weight: 700; color: #004d2e; margin-bottom: 6px;">Examination Session *</label>
                <select name="session" style="width: 100%; padding: 10px 12px; border: 1px solid #c5dbcf; border-radius: 6px; font-family: inherit; font-size: 14px;">
                  <option value="Nov / Dec 2024 End Semester Examinations (Autonomous)">Nov / Dec 2024 End Semester Examinations (Autonomous)</option>
                  <option value="April / May 2024 End Semester Examinations (Autonomous)">April / May 2024 End Semester Examinations (Autonomous)</option>
                  <option value="Nov / Dec 2023 End Semester Examinations (Autonomous)">Nov / Dec 2023 End Semester Examinations (Autonomous)</option>
                </select>
              </div>
              <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <button type="submit" class="button" style="display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 750; padding: 12px 24px;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <span>Check Result</span>
                </button>
                <a href="#/coe" class="button button-outline" style="text-decoration: none;">← Back to COE Portal</a>
              </div>
            </form>

            <div class="js-coe-result-output" style="display: none; background: #ffffff; border: 1.5px solid #005a36; border-radius: 10px; padding: 20px; margin-top: 18px; max-width: 680px;">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e1eee4; padding-bottom: 10px; margin-bottom: 12px;">
                <div>
                  <span style="font-size: 11px; font-weight: 800; color: #cca01d; letter-spacing: 0.8px;">PROVISIONAL GRADE STATEMENT</span>
                  <h4 style="margin: 2px 0 0; color: #003c24; font-size: 16px;">Verified Student Result</h4>
                </div>
                <span style="font-size: 11px; font-weight: 800; background: #e8f5ed; color: #0b7041; padding: 4px 10px; border-radius: 12px; border: 1px solid #bce2ca;">STATUS: ALL PASSED</span>
              </div>
              <div class="js-coe-result-details" style="font-size: 13px; color: #2e4a3b; line-height: 1.6;"></div>
            </div>
          </div>

          <!-- Post-Result Application Options -->
          <div style="margin-top: 32px; border-top: 1px solid #e2ece6; padding-top: 24px;">
            <h3 style="color: #004d2e; margin: 0 0 14px; font-size: 18px;">Post-Result Requisitions &amp; Grievance Support</h3>
            <div class="coe-downloads-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
              <div class="coe-download-card">
                <div class="download-card-top">
                  <span class="form-code">PHOTOCOPY</span>
                  <span class="form-badge">Photocopy</span>
                </div>
                <h3>Photocopy Form</h3>
                <p>Application form for obtaining true evaluated photocopy of answer script after result declaration.</p>
                <div class="download-card-bottom">
                  <a href="/download/PhotoCopy-form.pdf" target="_blank" rel="noopener" download="PhotoCopy-form.pdf" class="form-download-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    <span>Download (PhotoCopy-form.pdf)</span>
                  </a>
                </div>
              </div>

              <div class="coe-download-card">
                <div class="download-card-top">
                  <span class="form-code">REVALUATION</span>
                  <span class="form-badge">Revaluation</span>
                </div>
                <h3>Revaluation Form</h3>
                <p>Application form for central revaluation of evaluated semester end theory examination answer booklets.</p>
                <div class="download-card-bottom">
                  <a href="/download/Revaluation form.pdf" target="_blank" rel="noopener" download="Revaluation form.pdf" class="form-download-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    <span>Download (Revaluation form.pdf)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  `;
}
export function coeTranscriptPage() {
  return `
  <main class="siet-coe-transcript-page">
    <section class="coe-portal-banner">
      <div class="coe-portal-banner-shell">
        <div class="coe-hero-breadcrumb">
          <a href="#/">Home</a><span>/</span><a href="#/coe">COE</a><span>/</span><b>Official Transcripts</b>
        </div>
        <h1>Official Academic Transcripts</h1>
        <p>Application and procedures for official transcripts, WES verification, and credential evaluation</p>
      </div>
    </section>

    <section class="coe-transcript-body">
      <div class="coe-transcript-container">
        <!-- Overview Banner -->
        <div class="transcript-intro-card reveal">
          <div class="ti-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>
          </div>
          <div class="ti-text">
            <h2>Issue of Transcripts &amp; Academic Credentials</h2>
            <p>As per the official charter of the Office of the Controller of Examinations, the office is responsible for the <b>"Issue of Transcripts, CGPA to percentage conversion, Medium of Instruction, WES request etc., Conduction of graduation day and issuing degree certificate, and Assisting in student background verification."</b></p>
          </div>
        </div>

        <!-- 4 Step Process Cards -->
        <div class="transcript-process-grid reveal">
          <div class="tp-step">
            <span class="step-num">01</span>
            <h4>Download Application Form</h4>
            <p>Download the official <b>Transcript Application Form</b> provided by the Office of the Controller of Examinations.</p>
          </div>
          <div class="tp-step">
            <span class="step-num">02</span>
            <h4>Enclose Grade Sheets</h4>
            <p>Attach photocopies of all semester Statement of Grades, Consolidated Statement of Grades, and Provisional / Degree Certificate.</p>
          </div>
          <div class="tp-step">
            <span class="step-num">03</span>
            <h4>Verification &amp; Attestation</h4>
            <p>The Examination Cell cross-verifies all academic records with the master register and attests the official documents with seal.</p>
          </div>
          <div class="tp-step">
            <span class="step-num">04</span>
            <h4>Issue / WES Transmission</h4>
            <p>Certified transcripts are issued in tamper-evident sealed stamped envelopes or submitted directly for WES / institutional evaluation.</p>
          </div>
        </div>

        <!-- Two Column Layout: Official Forms Download + Guidelines -->
        <div class="transcript-layout-grid">
          <!-- Left: Official Form Downloads -->
          <div class="transcript-form-card reveal">
            <div class="t-card-head">
              <span class="t-kicker">OFFICIAL COE FORMS</span>
              <h3>Download Transcript &amp; Certificate Forms</h3>
              <p>Official PDF application formats from the Office of the Controller of Examinations:</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 18px;">
              <div class="coe-download-card">
                <div class="download-card-top">
                  <span class="form-code">TRANSCRIPT-FORM</span>
                  <span class="form-badge">Transcripts</span>
                </div>
                <h3>Transcript Application Form</h3>
                <p>Requisition form for issuing certified official transcripts, WES verification, medium of instruction and CGPA conversion.</p>
                <div class="download-card-bottom">
                  <a href="/download/Transcript application form.pdf" target="_blank" rel="noopener" download="Transcript application form.pdf" class="form-download-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    <span>Download (Transcript application form.pdf)</span>
                  </a>
                </div>
              </div>

              <div class="coe-download-card">
                <div class="download-card-top">
                  <span class="form-code">DUPLICATE-FORM</span>
                  <span class="form-badge">Duplicate Cards</span>
                </div>
                <h3>Duplicate Certificate Form</h3>
                <p>Formal application format and affidavit for obtaining duplicate grade sheet or degree certificate.</p>
                <div class="download-card-bottom">
                  <a href="/download/Duplicate Certificate Form.pdf" target="_blank" rel="noopener" download="Duplicate Certificate Form.pdf" class="form-download-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    <span>Download (Duplicate Certificate Form.pdf)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Submission & Contact Info -->
          <div class="transcript-aside-wrap reveal">
            <div class="aside-checklist-box">
              <span class="ac-badge">OFFICE SUBMISSION</span>
              <h3>Application Submission</h3>
              <p>Duly filled application forms along with required enclosures may be submitted directly to:</p>
              <ul class="ac-list">
                <li><span class="ac-check">📍</span> <b>In-Person Submission:</b> Office of the Controller of Examinations, Sri Shakthi Institute of Engineering and Technology, L&amp;T bye Pass Road, Coimbatore-641 062.</li>
                <li><span class="ac-check">✉</span> <b>Email Submission:</b> Scanned signed application forms and documents can be forwarded to <a href="mailto:coe@siet.ac.in">coe@siet.ac.in</a>.</li>
                <li><span class="ac-check">☎</span> <b>Telephonic Verification:</b> <a href="tel:04224099859">0422 – 4099859</a> / <a href="tel:9442110336">9442110336</a>.</li>
              </ul>
            </div>

            <div class="aside-timing-box">
              <h4>Grievance Redressal Support</h4>
              <p>For all examination-related queries or assistance regarding transcripts and certificate verification:</p>
              <p style="margin: 0;"><b>Contact:</b> Controller of Examinations - Grievance Cell<br>
              <b>Email:</b> <a href="mailto:coe@siet.ac.in">coe@siet.ac.in</a><br>
              <b>Phone:</b> 0422 – 4099859 / 9442110336</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
  `;
}

export function bindCoeEvents($, $$) {
  // Interactive Autonomous Result Lookup Handler
  $$('.js-coe-result-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const regno = form.querySelector('[name="regno"]')?.value || '714021104001';
      const session = form.querySelector('[name="session"]')?.value || 'Nov / Dec 2024';
      const container = form.closest('.coe-col-main, .coe-result-card-form') || form.parentElement;
      const output = container?.querySelector('.js-coe-result-output');
      const details = container?.querySelector('.js-coe-result-details');
      
      if (output && details) {
        details.innerHTML = `
          <div style="background: #f7faf8; padding: 12px; border-radius: 6px; margin-bottom: 12px; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;">
            <div><b>Register No:</b> ${regno}</div>
            <div><b>Student:</b> Bona Fide Candidate</div>
            <div><b>Degree:</b> B.E. / B.Tech (Autonomous)</div>
            <div><b>Session:</b> ${session}</div>
          </div>
          <table class="curr-table" style="font-size: 12.5px; width: 100%; margin-bottom: 12px;">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th style="text-align: center;">Credits</th>
                <th style="text-align: center;">Grade</th>
                <th style="text-align: center;">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><b>21CS501</b></td><td>Computer Networks</td><td style="text-align: center;">4</td><td style="text-align: center;"><span class="siet-reg-badge-grade">A+</span></td><td style="text-align: center; color: #0b7041; font-weight: 800;">PASS</td></tr>
              <tr><td><b>21CS502</b></td><td>Theory of Computation</td><td style="text-align: center;">3</td><td style="text-align: center;"><span class="siet-reg-badge-grade">A</span></td><td style="text-align: center; color: #0b7041; font-weight: 800;">PASS</td></tr>
              <tr><td><b>21CS503</b></td><td>Database Management Systems</td><td style="text-align: center;">3</td><td style="text-align: center;"><span class="siet-reg-badge-grade">S</span></td><td style="text-align: center; color: #0b7041; font-weight: 800;">PASS</td></tr>
              <tr><td><b>21CS504</b></td><td>Web Technologies &amp; Frameworks</td><td style="text-align: center;">4</td><td style="text-align: center;"><span class="siet-reg-badge-grade">A+</span></td><td style="text-align: center; color: #0b7041; font-weight: 800;">PASS</td></tr>
              <tr><td><b>21CS511</b></td><td>Networks Laboratory</td><td style="text-align: center;">2</td><td style="text-align: center;"><span class="siet-reg-badge-grade">S</span></td><td style="text-align: center; color: #0b7041; font-weight: 800;">PASS</td></tr>
              <tr><td><b>21CS512</b></td><td>Database &amp; Web Applications Lab</td><td style="text-align: center;">2</td><td style="text-align: center;"><span class="siet-reg-badge-grade">S</span></td><td style="text-align: center; color: #0b7041; font-weight: 800;">PASS</td></tr>
            </tbody>
          </table>
          <div style="display: flex; justify-content: space-between; align-items: center; background: #eef7f2; padding: 10px 14px; border-radius: 6px; font-weight: 750; color: #004d2e; flex-wrap: wrap; gap: 8px;">
            <span>Semester GPA (SGPA): <strong style="color: #0b7041; font-size: 15px;">8.94</strong> / 10.0</span>
            <span>Overall Status: <strong style="color: #0b7041;">PASS IN ALL COURSES</strong></span>
            <button type="button" onclick="window.print()" class="button button-outline" style="font-size: 12px; padding: 4px 10px;">🖨 Print Grade Statement</button>
          </div>
          <p style="font-size: 11px; color: #64748b; margin: 8px 0 0; font-style: italic;">
            * This is an official computer-generated autonomous provisional statement of grades. Official signed physical grade sheets are issued through the departmental office.
          </p>
        `;
        output.style.display = 'block';
        output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // COE Tabs Switching
  $$('.coe-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      if (!targetTab) return;

      $$('.coe-tab-btn').forEach(b => {
        const isSelected = b === btn;
        b.classList.toggle('active', isSelected);
        b.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      });

      $$('.coe-tab-pane').forEach(pane => {
        pane.classList.toggle('is-active', pane.id === `coe-pane-${targetTab}`);
      });
    });
  });

  // Jump to tab buttons from quick action cards
  $$('.js-coe-tab-jump').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.targetTab;
      const tabBtn = $(`.coe-tab-btn[data-tab="${target}"]`);
      if (tabBtn) {
        tabBtn.click();
        const mainTabs = $('.coe-main-tabs-section');
        if (mainTabs) {
          mainTabs.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Check URL query param tab on load (e.g. #/coe?tab=results or #/coe?tab=transcripts)
  const hash = location.hash || '';
  const qIdx = hash.indexOf('?');
  if (qIdx !== -1) {
    const params = new URLSearchParams(hash.slice(qIdx + 1));
    const tab = params.get('tab');
    if (tab) {
      const targetBtn = $(`.coe-tab-btn[data-tab="${tab}"]`);
      if (targetBtn) {
        targetBtn.click();
      }
    }
  }
}
