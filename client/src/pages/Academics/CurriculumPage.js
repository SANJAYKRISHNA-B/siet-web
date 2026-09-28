import { getDeptCurriculum, allDepartments } from '../../data/curriculumData.js';
import { sietHudHeader } from '../../components/common/HudHeader.js';
import { libIcons } from '../../data/libraryData.js';
import { routeParams } from '../../utils/router.js';

export const currIcons = {
  gradCap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  headphone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`
};

export let currActiveDept = 'agri';
let currActiveSem = 1;
let currActiveRegulation = 'r2025';

export function getCurrModalData(target, deptId = 'agri') {
  const dept = getDeptCurriculum(deptId);
  const deptFullName = `${dept.degree} ${dept.name}`;

  if (target === 'curriculum-r2025') {
    return {
      title: `${deptFullName} — Autonomous Curriculum (R2025)`,
      content: `
        <p>The Autonomous Curriculum (Regulations 2025) for <b>${deptFullName}</b> of Sri Shakthi Institute of Engineering and Technology is outcome-driven and structured across <b>168 total credits</b>.</p>
        <h4>Credit Distribution Across Categories</h4>
        <ul>
          <li><span class="siet-lib-resource-badge">HSMC</span> Humanities and Social Sciences (12 Credits)</li>
          <li><span class="siet-lib-resource-badge">BSC</span> Basic Sciences (Mathematics, Physics, Chemistry) (25 Credits)</li>
          <li><span class="siet-lib-resource-badge">ESC</span> Engineering Sciences &amp; Maker Foundation (24 Credits)</li>
          <li><span class="siet-lib-resource-badge">PCC</span> Professional Core Courses &amp; Specialization Labs (68 Credits)</li>
          <li><span class="siet-lib-resource-badge">PEC</span> Professional Electives (Discipline Specialization Tracks) (18 Credits)</li>
          <li><span class="siet-lib-resource-badge">OEC</span> Multidisciplinary Open Electives (9 Credits)</li>
          <li><span class="siet-lib-resource-badge">PROJ</span> Industry Internship &amp; Capstone Project (12 Credits)</li>
        </ul>
        <p>For detailed credit transfer, honours/minor degree regulations, or academic syllabus copies for ${dept.name}, contact the office of Controller of Examinations.</p>
      `
    };
  }

  if (target === 'syllabus-r2025') {
    return {
      title: `${deptFullName} — Detailed Syllabus (R2025)`,
      content: `
        <p>Each syllabus outlines course educational objectives, unit-wise topic descriptions, laboratory experiments, modern tool requirements, textbooks, and reference volumes for <b>${deptFullName}</b>.</p>
        <h4>Specialization Focus</h4>
        <p>${dept.desc}</p>
        <h4>Core Pillars</h4>
        <ul>
          <li><b>Fundamental Rigor:</b> Strong theoretical grounding through classroom and tutorial sessions.</li>
          <li><b>Hands-on Laboratory Mastery:</b> High-tech practical labs aligned with current industry standards.</li>
          <li><b>Industry &amp; Research Readiness:</b> Mini-projects, hackathons, and capstone engineering challenges.</li>
        </ul>
        <p>To request certified copies of course syllabi for competitive exams or foreign higher education, please email <a href="mailto:academics@siet.ac.in">academics@siet.ac.in</a>.</p>
      `
    };
  }

  if (target === 'regulations-r2025') {
    return {
      title: 'Academic Regulations (Autonomous R2025)',
      content: `
        <div class="siet-reg-switch-tabs" role="tablist" aria-label="Academic Regulations Switcher">
          <button type="button" class="siet-reg-tab-btn js-reg-tab-btn is-active" data-target="regulations-r2025">Regulations 2025 (R2025)</button>
          <button type="button" class="siet-reg-tab-btn js-reg-tab-btn" data-target="regulations-r2021">Regulations 2021 (R2021)</button>
        </div>
        <div class="siet-reg-banner">
          <span class="reg-pill">AUTONOMOUS R2025</span>
          <p>Effective from Academic Year 2025–26 under outcome-based education (OBE) and 168-credit curriculum framework.</p>
        </div>
        <h4>Key Academic Highlights</h4>
        <ul>
          <li><b>Attendance:</b> A candidate must secure a minimum of <b>75% attendance</b> in each course to be eligible for End Semester Examinations.</li>
          <li><b>Evaluation System:</b> Continuous Internal Assessment (CIA) carries <b>40%</b> and End Semester Examination (ESE) carries <b>60%</b>.</li>
          <li><b>Letter Grading System:</b> Performance is evaluated on a 10-point letter grading system: <b>S, A+, A, B+, B, C+, C</b>.</li>
          <li><b>Fast-Track Semester:</b> High-performing students (CGPA ≥ 8.5) may complete electives in semesters 5–7 and undertake full-time industry capstone in semester 8.</li>
          <li><b>168-Credit Framework:</b> Agile structure comprising Basic Sciences, Engineering Sciences, Professional Cores, Industry Verticals, and Experiential Learning.</li>
        </ul>
        <h4>R2025 Letter Grading &amp; Grade Points</h4>
        <div class="curr-table-wrapper" style="margin: 12px 0 16px;">
          <table class="curr-table" style="font-size: 13.5px;">
            <thead>
              <tr>
                <th style="width: 120px;">Letter Grade</th>
                <th>Performance Level</th>
                <th style="width: 120px; text-align: center;">Grade Point</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><span class="siet-reg-badge-grade">S</span></td><td>Superior / Outstanding</td><td style="text-align: center;"><b>10</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">A+</span></td><td>Excellent</td><td style="text-align: center;"><b>9</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">A</span></td><td>Very Good</td><td style="text-align: center;"><b>8</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">B+</span></td><td>Good</td><td style="text-align: center;"><b>7</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">B</span></td><td>Above Average</td><td style="text-align: center;"><b>6.5</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">C+</span></td><td>Average</td><td style="text-align: center;"><b>6</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">C</span></td><td>Pass / Satisfactory</td><td style="text-align: center;"><b>5</b></td></tr>
            </tbody>
          </table>
        </div>
      `
    };
  }

  if (target === 'regulations-r2021') {
    return {
      title: 'Academic Regulations (Autonomous R2021)',
      content: `
        <div class="siet-reg-switch-tabs" role="tablist" aria-label="Academic Regulations Switcher">
          <button type="button" class="siet-reg-tab-btn js-reg-tab-btn" data-target="regulations-r2025">Regulations 2025 (R2025)</button>
          <button type="button" class="siet-reg-tab-btn js-reg-tab-btn is-active" data-target="regulations-r2021">Regulations 2021 (R2021)</button>
        </div>
        <div class="siet-reg-banner">
          <span class="reg-pill">AUTONOMOUS R2021</span>
          <p>Autonomous Choice Based Credit System (CBCS) Regulations implemented for 2021–2024 batches.</p>
        </div>
        <h4>Key Academic Highlights</h4>
        <ul>
          <li><b>Attendance:</b> A candidate must secure a minimum of <b>75% attendance</b> in each course to be eligible for End Semester Examinations.</li>
          <li><b>Evaluation System:</b> Continuous Internal Assessment (CIA) carries <b>40%</b> and End Semester Examination (ESE) carries <b>60%</b>.</li>
          <li><b>Letter Grading System:</b> Performance is evaluated on a 10-point letter grading system: <b>O, A+, A, B+, B, C, U</b>.</li>
          <li><b>Choice Based Credit System (CBCS):</b> Semester-based flexible course choices, professional electives, and open electives.</li>
        </ul>
        <h4>R2021 Letter Grading &amp; Grade Points</h4>
        <div class="curr-table-wrapper" style="margin: 12px 0 16px;">
          <table class="curr-table" style="font-size: 13.5px;">
            <thead>
              <tr>
                <th style="width: 120px;">Letter Grade</th>
                <th>Performance Level</th>
                <th style="width: 120px; text-align: center;">Grade Point</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><span class="siet-reg-badge-grade">O</span></td><td>Outstanding</td><td style="text-align: center;"><b>10</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">A+</span></td><td>Excellent</td><td style="text-align: center;"><b>9</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">A</span></td><td>Very Good</td><td style="text-align: center;"><b>8</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">B+</span></td><td>Good</td><td style="text-align: center;"><b>7</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">B</span></td><td>Average</td><td style="text-align: center;"><b>6</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade">C</span></td><td>Satisfactory</td><td style="text-align: center;"><b>5</b></td></tr>
              <tr><td><span class="siet-reg-badge-grade grade-fail">U</span></td><td>Reappearance (Fail)</td><td style="text-align: center;"><b style="color:#c0392b">0</b></td></tr>
            </tbody>
          </table>
        </div>
        <h4>Official Regulation Document</h4>
        <div style="margin-top: 10px;">
          <a href="/brand/Regulation 2021 UG.pdf" target="_blank" rel="noopener" download="Regulation 2021 UG.pdf" class="curr-download-btn" style="padding: 10px 18px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Download Regulation 2021 (UG) PDF</span>
          </a>
        </div>
      `
    };
  }

  if (target === 'scheme-exam') {
    return {
      title: `Scheme of Examination — ${deptFullName}`,
      content: `
        <h4>Internal Assessment (40 Marks)</h4>
        <ul>
          <li><b>Internal Assessment Tests (IAT I &amp; II):</b> Two centralized examinations (each 100 marks converted to 20 marks).</li>
          <li><b>Experiential Assignment / Project:</b> Industry-aligned hands-on problem solving (10 marks).</li>
          <li><b>Quiz, Seminar &amp; Technical Presentation:</b> Active classroom engagement (10 marks).</li>
        </ul>
        <h4>End Semester Examination (60 Marks)</h4>
        <p>Autonomous central evaluation conducted for 100 marks with Bloom's Taxonomy-based question paper and converted to 60 marks.</p>
      `
    };
  }

  if (target === 'academic-help') {
    return {
      title: 'Academic Dean Desk & Student Support',
      content: `
        <p>The Academic Office assists students with curriculum clarifications, elective selections, re-evaluation requests, and academic calendar scheduling.</p>
        <h4>Office Details</h4>
        <p><b>Dean (Academics):</b> Dr. R. Manimegalai, Ph.D.<br>
        <b>Location:</b> Administrative Block, Ground Floor (Room A-108)<br>
        <b>Direct Phone:</b> +91 422 2369900 (Ext. 215)<br>
        <b>Email:</b> <a href="mailto:academics@siet.ac.in">academics@siet.ac.in</a></p>
        <p><b>Student Hours:</b> Monday to Friday, 3:30 PM – 5:00 PM</p>
      `
    };
  }

  return { title: 'Academic Document', content: '<p>Details will be updated shortly.</p>' };
}

export function renderCurriculumTable(deptId = 'agri', semNum = 1, regulation = 'r2021') {
  const dept = getDeptCurriculum(deptId, regulation);
  const data = dept?.semesters?.[semNum] || dept?.semesters?.[1] || {
    name: `Semester ${semNum}`,
    credits: 0,
    courses: [],
    totals: { l: 0, t: 0, p: 0, c: 0 }
  };

  return `
    <div class="curr-sem-header">
      <div class="curr-sem-title-box">
        <span class="curr-sem-icon">${libIcons.book}</span>
        <h3 id="active-sem-name">${data.name}</h3>
      </div>
      <div class="curr-sem-actions">
        <span class="curr-credits-pill">Total Credits: <b id="active-sem-credits">${data.credits}</b></span>
        <a class="curr-download-btn curr-download-sem" href="/downloads/sample-syllabus.pdf" download="${dept.id}-${regulation}-semester-${semNum}-syllabus-sample.pdf" aria-label="Download ${regulation.toUpperCase()} sample syllabus for ${dept.name}, ${data.name}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14"/></svg>
          <span>Semester Syllabus</span>
        </a>
      </div>
    </div>
    <div class="curr-table-wrapper">
      <table class="curr-table" aria-label="Course curriculum table for ${dept.degree} ${dept.name} ${data.name}">
        <thead>
          <tr>
            <th class="th-num">S.No.</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th class="th-credit">L</th>
            <th class="th-credit">T</th>
            <th class="th-credit">P</th>
            <th class="th-credit">C</th>
            <th class="th-download">Syllabus</th>
          </tr>
        </thead>
        <tbody>
          ${data.courses.map(c => `
            <tr>
              <td class="td-num">${c.sno}</td>
              <td class="td-code">${c.code}</td>
              <td class="td-title">${c.title}</td>
              <td class="td-credit">${c.l}</td>
              <td class="td-credit">${c.t}</td>
              <td class="td-credit">${c.p}</td>
              <td class="td-credit"><b>${c.c}</b></td>
              <td class="td-download"><a class="curr-download-btn curr-download-course" href="/downloads/sample-syllabus.pdf" download="${dept.id}-${regulation}-${c.code}-syllabus-sample.pdf" aria-label="Download ${regulation.toUpperCase()} sample syllabus for ${c.code} ${c.title}" title="Download ${c.code} sample syllabus"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14"/></svg><span>PDF</span></a></td>
            </tr>
          `).join('')}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" style="text-align:left;padding-left:16px"><b>Total</b></td>
            <td class="td-credit">${data.totals.l}</td>
            <td class="td-credit">${data.totals.t}</td>
            <td class="td-credit">${data.totals.p}</td>
            <td class="td-credit">${data.totals.c}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  `;
}

const currSemestersList = [
  [1, 'Semester I'],
  [2, 'Semester II'],
  [3, 'Semester III'],
  [4, 'Semester IV'],
  [5, 'Semester V'],
  [6, 'Semester VI'],
  [7, 'Semester VII'],
  [8, 'Semester VIII']
];

export function renderAcademicsSidebar(activeItem = 'curriculum') {
  return `<aside class="siet-curr-sidebar">
    <div class="siet-curr-sidecard">
      <div class="siet-curr-sidehead">
        <span class="sidehead-icon" aria-hidden="true">${currIcons.gradCap}</span>
        <div class="sidehead-text">
          <h3>Academics</h3>
          <p>Your learning journey, our priority.</p>
        </div>
      </div>
      <nav class="siet-curr-nav" aria-label="Academic navigation">
        <a href="#/curriculum" class="siet-curr-navlink ${activeItem === 'curriculum' ? 'is-active' : ''}">
          <span class="navlink-content">
            <span class="navlink-icon">${libIcons.book}</span>
            <span>Curriculum</span>
          </span>
          <span class="navlink-arrow">›</span>
        </a>
        <a href="#/academic-calendar" class="siet-curr-navlink ${activeItem === 'academic-calendar' ? 'is-active' : ''}">
          <span class="navlink-content">
            <span class="navlink-icon">${currIcons.calendar}</span>
            <span>Academic Calendar</span>
          </span>
          <span class="navlink-arrow">›</span>
        </a>
        <button type="button" class="siet-curr-navlink js-curr-modal-trigger ${activeItem === 'regulations' || activeItem === 'regulations-2025' || activeItem === 'regulations-2021' ? 'is-active' : ''}" data-target="regulations-r2025">
          <span class="navlink-content">
            <span class="navlink-icon">${currIcons.shield}</span>
            <span>Regulations</span>
          </span>
          <span class="navlink-arrow">›</span>
        </button>
      </nav>
    </div>
  </aside>`;
}

export function renderAcademicsModal() {
  return `<!-- Curriculum / Academic Modal Dialog -->
  <div class="siet-lib-modal js-curr-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="siet-lib-modal-box">
      <div class="siet-lib-modal-header">
        <h3 class="js-curr-modal-title">Academic Document</h3>
        <button type="button" class="siet-lib-modal-close js-curr-modal-close" aria-label="Close modal">×</button>
      </div>
      <div class="siet-lib-modal-body js-curr-modal-body"></div>
    </div>
  </div>`;
}

export function curriculumPage() {
  const params = routeParams();
  const queryDept = params.get('dept');
  const queryRegulation = params.get('regulation');
  currActiveRegulation = queryRegulation === 'r2021' ? 'r2021' : 'r2025';
  if (queryDept) {
    const matched = getDeptCurriculum(queryDept, currActiveRegulation);
    if (matched) currActiveDept = matched.id;
  } else {
    currActiveDept = 'agri';
    currActiveSem = 1;
  }
  const activeDept = getDeptCurriculum(currActiveDept, currActiveRegulation);

  return `<main class="siet-curr-page">
  ${sietHudHeader('Curriculum', 'Curriculum', false)}

  <section class="siet-curr-body">
    <div class="siet-curr-container">
      <div class="siet-curr-grid">
        <!-- Left Sidebar: Academics Nav -->
        ${renderAcademicsSidebar('curriculum')}

        <!-- Center: Interactive Curriculum Viewer -->
        <main class="siet-curr-center">
          <!-- Department Tabs (Alphabetical order) -->
          <div class="curr-dept-tabs" role="tablist" aria-label="Select Engineering Department">
            ${[...allDepartments].sort((a, b) => a.code.localeCompare(b.code)).map(d => `
              <button type="button" 
                      class="curr-dept-tab ${d.id === activeDept.id ? 'is-active' : ''}" 
                      role="tab" 
                      aria-selected="${d.id === activeDept.id ? 'true' : 'false'}" 
                      data-dept="${d.id}"
                      title="${d.degree} ${d.name} (${d.code})">
                ${d.code}
              </button>
            `).join('')}
          </div>

          <div class="curr-center-eyebrow">CURRICULUM</div>
          <h2 class="curr-center-title" id="curr-dept-title">${activeDept.degree} ${activeDept.name}</h2>
          <p class="curr-center-desc" id="curr-dept-desc">${activeDept.desc}</p>

          <div class="curr-regulation-switch" aria-label="Select curriculum regulation">
            <div class="curr-regulation-copy">
              <span>Regulation</span>
              <small>Choose the applicable batch syllabus</small>
            </div>
            <div class="curr-regulation-toggle" role="tablist">
              ${['r2021', 'r2025'].map(regulation => `
                <button type="button" class="curr-regulation-btn ${regulation === currActiveRegulation ? 'is-active' : ''}"
                        role="tab" aria-selected="${regulation === currActiveRegulation ? 'true' : 'false'}"
                        data-regulation="${regulation}">${regulation.toUpperCase()}</button>
              `).join('')}
            </div>
          </div>

          <!-- Semester Tabs (Image 2 style) -->
          <div class="curr-sem-tabs" role="tablist" aria-label="Select Semester">
            ${currSemestersList.map(([num, name]) => `
              <button type="button" 
                      class="curr-sem-tab ${num === currActiveSem ? 'is-active' : ''}" 
                      role="tab" 
                      aria-selected="${num === currActiveSem ? 'true' : 'false'}" 
                      data-sem="${num}">
                ${name}
              </button>
            `).join('')}
          </div>

          <!-- Dynamic Semester Table Area -->
          <div id="curr-table-area">
            ${renderCurriculumTable(activeDept.id, currActiveSem, currActiveRegulation)}
          </div>
        </main>
      </div>
    </div>
  </section>

  ${renderAcademicsModal()}
</main>`;
}

