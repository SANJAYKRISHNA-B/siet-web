// Office of the Controller of Examinations (COE) Data & Page Templates
// Sri Shakthi Institute of Engineering and Technology (Autonomous)
// Extracted directly and exclusively from live official site: https://www.siet.ac.in/coe/index.html

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
    file: 'https://www.siet.ac.in/coe/forms/PhotoCopy-form.pdf',
    filename: 'PhotoCopy-form.pdf',
    badge: 'Photocopy'
  },
  {
    title: 'Revaluation Form',
    code: 'REVALUATION-FORM',
    desc: 'Application form for central revaluation of evaluated semester end theory examination answer booklets.',
    file: 'https://www.siet.ac.in/coe/forms/Revaluation%20form.pdf',
    filename: 'Revaluation form.pdf',
    badge: 'Revaluation'
  },
  {
    title: 'Revaluation - Script Valuation Form',
    code: 'REVAL-SCRIPT-FORM',
    desc: 'Official faculty assessment and endorsement rubric for course coordinator scrutiny prior to revaluation.',
    file: 'https://www.siet.ac.in/coe/forms/Revaluation-Script%20Valuation%20form.pdf',
    filename: 'Revaluation-Script Valuation form.pdf',
    badge: 'Faculty Scrutiny'
  },
  {
    title: 'Transcript Application Form',
    code: 'TRANSCRIPT-FORM',
    desc: 'Requisition form for issuing certified official transcripts, WES verification, medium of instruction and CGPA conversion.',
    file: 'https://www.siet.ac.in/coe/forms/Transcript%20application%20form.pdf',
    filename: 'Transcript application form.pdf',
    badge: 'Transcripts'
  },
  {
    title: 'Duplicate Certificate Form',
    code: 'DUPLICATE-FORM',
    desc: 'Formal application format and affidavit for obtaining duplicate grade sheet or degree certificate.',
    file: 'https://www.siet.ac.in/coe/forms/Duplicate%20Certificate%20Form.pdf',
    filename: 'Duplicate Certificate Form.pdf',
    badge: 'Duplicate Cards'
  }
];

export const coeRegulationsList = [
  {
    title: 'R2021 UG Regulation',
    desc: 'Undergraduate Autonomous Regulations, curriculum structure, choice-based credit system and assessment rules.',
    filename: 'Regulation 2021 UG.pdf',
    file: 'https://www.siet.ac.in/coe/forms/Regulation%202021%20UG.pdf',
    badge: 'UG Regulation'
  },
  {
    title: 'R2021 UG - Amendment I',
    desc: 'Official Amendment I to Regulations 2021 for undergraduate degree programmes.',
    filename: 'R2021 UG-AMENDMENT - I SIET.pdf',
    file: 'https://www.siet.ac.in/coe/forms/R2021%20UG-AMENDMENT%20-%20I%20SIET.pdf',
    badge: 'Amendment I'
  },
  {
    title: 'R2021 UG - Amendment II',
    desc: 'Official Amendment II to Regulations 2021 regarding elective choices and credits.',
    filename: 'R2021 UG-AMENDMENT - II SIET.pdf',
    file: 'https://www.siet.ac.in/coe/forms/R2021%20UG-AMENDMENT%20-%20II%20SIET.pdf',
    badge: 'Amendment II'
  },
  {
    title: 'R2021 PG Regulation',
    desc: 'Postgraduate Autonomous Regulations for Master of Engineering (M.E.) programmes.',
    filename: 'Regulation 2021 PG.pdf',
    file: 'https://www.siet.ac.in/coe/forms/Regulation%202021%20PG.pdf',
    badge: 'PG Regulation'
  }
];

export const coeExamSchedules = [
  {
    title: 'UG Semester VII CIAT - Rescheduled',
    desc: 'Revised Continuous Internal Assessment Test (CIE-II) schedule for 7th Semester B.E./B.Tech candidates.',
    filename: 'CIA-II semester VII UG Rescheduled.pdf',
    file: 'https://www.siet.ac.in/coe/forms/CIA-II%20semester%20VII%20UG%20Rescheduled.pdf',
    status: 'Latest'
  },
  {
    title: 'UG Semester VII CIAT Schedule',
    desc: 'Continuous Internal Assessment Test (CIE-II) schedule for final year undergraduate students.',
    filename: 'CIA-II semester VII UG.pdf',
    file: 'https://www.siet.ac.in/coe/forms/CIA-II%20semester%20VII%20UG.pdf',
    status: 'Notice'
  }
];

export function coePortalPage(activeTab = 'about') {
  return `
  <main class="siet-coe-page">
    <!-- Single Clean Unified Hero Banner -->
    <section class="coe-hero-strip">
      <div class="coe-hero-shell">
        <div class="coe-hero-crest">
          <img src="/brand/siet-logo.png" alt="Sri Shakthi emblem">
        </div>
        <div class="coe-hero-content">
          <div class="coe-hero-breadcrumb">
            <a href="#/">Home</a><span>/</span><b>Controller of Examinations</b>
          </div>
          <span class="coe-eyebrow">AUTONOMOUS EXAMINATION &amp; EVALUATION CELL · ESTD. SEPTEMBER 2019</span>
          <h1>Office of the Controller of Examinations</h1>
          <p>"The Office of the Controller of Examinations plays an essential role in the academic activities of the college and is an important part of the autonomy. The CoE office is responsible to assess the continuous learning process of the students at defined intervals and publish the outcome for the students ensuring confidentiality."</p>
          <div class="coe-badges-row">
            <span class="coe-badge"><b>Est. September 2019</b> · Autonomous Conferment</span>
            <span class="coe-badge"><b>Anna University</b> · Affiliated Autonomous</span>
            <span class="coe-badge"><b>NBA Accredited</b> · Agri, BME, BT, CSE, ECE, EEE, Mech, IT</span>
            <span class="coe-badge"><b>NAAC 'A' Grade</b> · Counselling Code 2727</span>
            <span class="coe-badge"><b>Barcoded Papers</b> · Dummy Numbering</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Action Cards (Result, Transcripts, Forms, Helpline) -->
    <section class="coe-quick-strip">
      <div class="coe-quick-grid">
        <a href="#/coe-result" class="coe-action-card highlight-card">
          <div class="action-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          </div>
          <div class="action-copy">
            <small>ONLINE EXAM SERVICES</small>
            <h3>End Semester Results</h3>
            <p>Access official examination results from the Anna University / SIET Autonomous Server.</p>
            <span class="action-arrow">Access Result Portal →</span>
          </div>
        </a>

        <a href="#/coe-transcript" class="coe-action-card">
          <div class="action-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          </div>
          <div class="action-copy">
            <small>GLOBAL CREDENTIALS</small>
            <h3>Official Transcripts</h3>
            <p>Certified transcript application for WES, foreign universities &amp; immigration.</p>
            <span class="action-arrow">View Transcript Guide →</span>
          </div>
        </a>

        <button type="button" class="coe-action-card js-coe-tab-jump" data-target-tab="forms">
          <div class="action-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </div>
          <div class="action-copy">
            <small>STUDENT DOWNLOADS</small>
            <h3>Downloads &amp; Forms</h3>
            <p>Official photocopy, revaluation, duplicate certificate forms and regulations.</p>
            <span class="action-arrow">Browse Downloads →</span>
          </div>
        </button>

        <button type="button" class="coe-action-card js-coe-tab-jump" data-target-tab="contact">
          <div class="action-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div class="action-copy">
            <small>EXAMINATION HELPLINE</small>
            <h3>Grievance Cell &amp; Contact</h3>
            <p>For all exam queries: 0422-4099859, 9442110336 or coe@siet.ac.in.</p>
            <span class="action-arrow">Contact Directory →</span>
          </div>
        </button>
      </div>
    </section>

    <!-- Main Vertical Navigation Layout Section -->
    <section class="coe-main-tabs-section">
      <div class="coe-portal-layout">
        <!-- Left Vertical Navigation Sidebar -->
        <aside class="coe-vertical-sidebar">
          <div class="coe-sidebar-header">
            <span class="coe-sidebar-kicker">COE DIRECTORY</span>
            <h3 class="coe-sidebar-title">Portal Sections</h3>
          </div>

          <nav class="coe-vertical-nav" role="tablist" aria-label="COE Sections Navigation">
            <button type="button" class="coe-tab-btn ${activeTab === 'about' ? 'active' : ''}" data-tab="about" role="tab" aria-selected="${activeTab === 'about'}">
              <span class="tab-icon">🏛</span>
              <span class="tab-title">About COE</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'responsibilities' ? 'active' : ''}" data-tab="responsibilities" role="tab" aria-selected="${activeTab === 'responsibilities'}">
              <span class="tab-icon">⚙️</span>
              <span class="tab-title">Responsibilities</span>
              <span class="tab-count-badge">22</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'committee' ? 'active' : ''}" data-tab="committee" role="tab" aria-selected="${activeTab === 'committee'}">
              <span class="tab-icon">👥</span>
              <span class="tab-title">Committee</span>
              <span class="tab-count-badge">5</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'schedules' ? 'active' : ''}" data-tab="schedules" role="tab" aria-selected="${activeTab === 'schedules'}">
              <span class="tab-icon">📅</span>
              <span class="tab-title">Exam Schedule</span>
              <span class="tab-count-badge">2</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'forms' ? 'active' : ''}" data-tab="forms" role="tab" aria-selected="${activeTab === 'forms'}">
              <span class="tab-icon">📥</span>
              <span class="tab-title">Downloads &amp; Forms</span>
              <span class="tab-count-badge">5</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'regulations' ? 'active' : ''}" data-tab="regulations" role="tab" aria-selected="${activeTab === 'regulations'}">
              <span class="tab-icon">📘</span>
              <span class="tab-title">Regulation &amp; Curriculum</span>
              <span class="tab-count-badge">4</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'results' ? 'active' : ''}" data-tab="results" role="tab" aria-selected="${activeTab === 'results'}">
              <span class="tab-icon">📊</span>
              <span class="tab-title">Results</span>
              <span class="tab-status-pill">Live</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'contact' ? 'active' : ''}" data-tab="contact" role="tab" aria-selected="${activeTab === 'contact'}">
              <span class="tab-icon">📞</span>
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
              <h2>Controller of Examinations</h2>
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

        <!-- TAB 3: EXAMINATION COMMITTEE MEMBERS (Executive Roster + Verbatim Table) -->
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
              <h2>Downloads-Forms</h2>
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
              <span class="coe-pane-kicker">ACADEMIC REGULATIONS</span>
              <h2>Regulation and Curriculum</h2>
              <p>Official Regulations and Amendments published by the Office of the Controller of Examinations:</p>
            </div>

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
                    <a href="${reg.file}" target="_blank" rel="noopener" download="${reg.filename}" class="form-download-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      <span>Download (${reg.filename})</span>
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 7: RESULTS (Official link to https://www.siet.ac.in/Result/) -->
        <div id="coe-pane-results" class="coe-tab-pane ${activeTab === 'results' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">AUTONOMOUS RESULT SYSTEM</span>
              <h2>Results</h2>
              <p>Official End Semester Examination Results as published on the SIET Results Portal:</p>
            </div>

            <div class="coe-two-col">
              <div class="coe-col-main">
                <div class="coe-highlight-box" style="margin-bottom: 20px; border-left: 4px solid #005a36;">
                  <span class="box-tag">OFFICIAL RESULT SERVER</span>
                  <h3>End Semester Results</h3>
                  <p style="font-size: 14.5px; line-height: 1.6; color: #1e3a2b; margin: 8px 0 16px;">
                    Students can access their Continuous Internal Evaluation (CIE) and Semester End Examination results directly from the official SIET Result Portal by providing their <b>Register Number</b> and <b>Date of Birth</b>.
                  </p>
                  <a href="https://www.siet.ac.in/Result/" target="_blank" rel="noopener" class="button" style="display: inline-flex; align-items: center; gap: 8px; font-weight: 700;">
                    <span>Open Official Results Portal (siet.ac.in/Result)</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>

                <div class="aside-checklist-box" style="background: #fbfdfc; border: 1px solid #dce8e0; border-radius: 12px; padding: 20px;">
                  <h4 style="color: #004d2e; margin: 0 0 10px; font-size: 16px;">Important Post-Result Guidelines:</h4>
                  <ul class="ac-list">
                    <li><span class="ac-check">✓</span> <b>Photocopy of Answer Scripts:</b> Students can apply for evaluated answer scripts using the Photocopy Form within the specified deadline.</li>
                    <li><span class="ac-check">✓</span> <b>Revaluation of Answer Scripts:</b> Eligible candidates can apply for revaluation of end-semester theory papers using the official Revaluation Form.</li>
                    <li><span class="ac-check">✓</span> <b>Statement of Grades:</b> Official printed grade cards are issued through the institution office after the result review process is complete.</li>
                  </ul>
                </div>
              </div>

              <div class="coe-col-aside">
                <div class="aside-timing-box">
                  <h4>Related Forms for Download</h4>
                  <p>Official forms required after result publication:</p>
                  <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 14px;">
                    <a href="https://www.siet.ac.in/coe/forms/PhotoCopy-form.pdf" target="_blank" rel="noopener" class="button button-outline" style="text-align: left; font-size: 13px; padding: 10px 14px;">
                      📄 Photocopy Form (PDF) ↓
                    </a>
                    <a href="https://www.siet.ac.in/coe/forms/Revaluation%20form.pdf" target="_blank" rel="noopener" class="button button-outline" style="text-align: left; font-size: 13px; padding: 10px 14px;">
                      📄 Revaluation Form (PDF) ↓
                    </a>
                    <a href="https://www.siet.ac.in/coe/forms/Revaluation-Script%20Valuation%20form.pdf" target="_blank" rel="noopener" class="button button-outline" style="text-align: left; font-size: 13px; padding: 10px 14px;">
                      📄 Script Valuation Form (PDF) ↓
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 8: GRIEVANCE CELL & CONTACT (Exact details from siet.ac.in/coe) -->
        <div id="coe-pane-contact" class="coe-tab-pane ${activeTab === 'contact' ? 'is-active' : ''}">
          <div class="coe-pane-card">
            <div class="coe-pane-head">
              <span class="coe-pane-kicker">CONTROLLER OF EXAMINATIONS - GRIEVANCE CELL</span>
              <h2>Contact</h2>
              <p><i>"For All examination related queries/grievances"</i></p>
            </div>

            <div class="coe-contact-panel">
              <div class="contact-panel-head">
                <h3>Contact</h3>
                <p><b>The Controller of Examinations,</b><br>
                Sri Shakthi Institute of Engineering and Technology,<br>
                L&amp;T bye Pass Road,<br>
                Coimbatore-641 062.</p>
              </div>

              <div class="contact-details-grid">
                <div class="contact-item">
                  <span class="ci-icon">✉</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:coe@siet.ac.in">coe@siet.ac.in</a></p>
                  </div>
                </div>

                <div class="contact-item">
                  <span class="ci-icon">☎</span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:04224099859">0422 – 4099859</a><br>
                    <a href="tel:9442110336">9442110336</a></p>
                  </div>
                </div>

                <div class="contact-item">
                  <span class="ci-icon">🌐</span>
                  <div>
                    <strong>Official Result Portal</strong>
                    <p><a href="https://www.siet.ac.in/Result/" target="_blank" rel="noopener">https://www.siet.ac.in/Result/</a></p>
                  </div>
                </div>

                <div class="contact-item">
                  <span class="ci-icon">🏛</span>
                  <div>
                    <strong>Institution Website</strong>
                    <p><a href="https://www.siet.ac.in" target="_blank" rel="noopener">https://www.siet.ac.in</a></p>
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
        <p>Access official autonomous examination results from the Sri Shakthi Institute of Engineering and Technology Result Portal</p>
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
              <p>Official Results Portal: <a href="https://www.siet.ac.in/Result/" target="_blank" rel="noopener" style="color: #cca01d; text-decoration: underline; font-weight: 700;">https://www.siet.ac.in/Result/</a></p>
            </div>
          </div>

          <div style="background: #f7faf8; border: 1px solid #deece4; border-radius: 12px; padding: 24px; margin-top: 20px;">
            <h3 style="color: #004d2e; margin: 0 0 10px; font-size: 18px;">How to Access Your End Semester Results</h3>
            <p style="font-size: 14.5px; line-height: 1.65; color: #284234; margin: 0 0 18px;">
              Autonomous examination marks and provisional result outcomes are hosted securely on the official institution server. To check your results:
            </p>
            <ol style="margin: 0 0 20px 20px; font-size: 14px; line-height: 1.7; color: #284234; padding: 0;">
              <li>Click the green button below to open the official <b>SIET Result Portal</b>.</li>
              <li>Enter your 12-digit university <b>Register Number</b>.</li>
              <li>Provide your registered <b>Date of Birth</b>.</li>
              <li>Click <b>Get Result</b> on the official server to view your Statement of Grades.</li>
            </ol>

            <div style="display: flex; flex-wrap: wrap; gap: 14px; align-items: center;">
              <a href="https://www.siet.ac.in/Result/" target="_blank" rel="noopener" class="button result-btn-submit" style="display: inline-flex; align-items: center; gap: 10px; font-size: 15px; font-weight: 750; text-decoration: none; padding: 14px 28px;">
                <span>Launch Official Results Portal (siet.ac.in/Result)</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <a href="#/coe" class="button button-outline" style="text-decoration: none;">← Back to COE Portal</a>
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
                  <a href="https://www.siet.ac.in/coe/forms/PhotoCopy-form.pdf" target="_blank" rel="noopener" download="PhotoCopy-form.pdf" class="form-download-btn">
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
                  <a href="https://www.siet.ac.in/coe/forms/Revaluation%20form.pdf" target="_blank" rel="noopener" download="Revaluation form.pdf" class="form-download-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    <span>Download (Revaluation form.pdf)</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="coe-highlight-box" style="margin-top: 24px;">
              <span class="box-tag">GRIEVANCE CELL</span>
              <h3>Controller of Examinations - Grievance Cell</h3>
              <p><i>"For All examination related queries/grievances"</i><br>
              <b>The Controller of Examinations,</b> Sri Shakthi Institute of Engineering and Technology, L&amp;T bye Pass Road, Coimbatore-641 062.<br>
              <b>Email:</b> <a href="mailto:coe@siet.ac.in">coe@siet.ac.in</a> | <b>Phone:</b> <a href="tel:04224099859">0422 – 4099859</a> / <a href="tel:9442110336">9442110336</a></p>
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
                  <a href="https://www.siet.ac.in/coe/forms/Transcript%20application%20form.pdf" target="_blank" rel="noopener" download="Transcript application form.pdf" class="form-download-btn">
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
                  <a href="https://www.siet.ac.in/coe/forms/Duplicate%20Certificate%20Form.pdf" target="_blank" rel="noopener" download="Duplicate Certificate Form.pdf" class="form-download-btn">
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

  // Jump to tab buttons from quick cards
  $$('.js-coe-tab-jump').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.targetTab;
      const tabBtn = $(`.coe-tab-btn[data-tab="${target}"]`);
      if (tabBtn) {
        tabBtn.click();
        tabBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
}
