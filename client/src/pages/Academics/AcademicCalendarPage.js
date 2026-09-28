import { sietHudHeader } from '../../components/common/HudHeader.js';
import { renderAcademicsSidebar, renderAcademicsModal } from './CurriculumPage.js';

export function academicCalendarPageLegacy() {
  return `<main class="siet-curr-page siet-calendar-page">
  ${sietHudHeader('Academic Calendar', 'Academic Calendar', false)}

  <section class="siet-curr-body">
    <div class="siet-curr-container">
      <div class="siet-curr-grid">
        <!-- Left Sidebar: Academics Nav -->
        ${renderAcademicsSidebar('academic-calendar')}

        <!-- Main Content -->
        <article class="siet-curr-main">
          <div class="siet-calendar-card">
            <div class="siet-calendar-header">
              <div>
                <span class="curr-badge">AUTONOMOUS 2025–2026</span>
                <h2>Autonomous Academic Schedule &amp; Calendar</h2>
                <p>Detailed timeline for class commencement, continuous internal assessments, model examinations, end-semester practicals, and theory examinations.</p>
              </div>
              <div class="calendar-actions">
                <a href="#/curriculum" class="dept-curriculum-action">View Full Curriculum →</a>
              </div>
            </div>

            <div class="calendar-schedule-tables">
              <h3 class="calendar-term-heading">Odd Semester (III, V, VII Semesters)</h3>
              <div class="curr-table-wrapper">
                <table class="curr-table calendar-table">
                  <thead>
                    <tr>
                      <th style="width:70px">S.No</th>
                      <th>Academic Milestone / Event</th>
                      <th style="width:220px">Date / Duration</th>
                      <th style="width:130px">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="td-num">1</td>
                      <td class="td-title">Commencement of Odd Semester Classes</td>
                      <td class="td-code">14 July 2025</td>
                      <td><span class="cal-status cal-open">Completed</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">2</td>
                      <td class="td-title">Continuous Internal Assessment – I (CIA I)</td>
                      <td class="td-code">25 Aug 2025 – 01 Sep 2025</td>
                      <td><span class="cal-status cal-open">Completed</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">3</td>
                      <td class="td-title">Continuous Internal Assessment – II (CIA II)</td>
                      <td class="td-code">06 Oct 2025 – 13 Oct 2025</td>
                      <td><span class="cal-status cal-active">Active</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">4</td>
                      <td class="td-title">Last Working Day for Odd Semester</td>
                      <td class="td-code">07 Nov 2025</td>
                      <td><span class="cal-status">Scheduled</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">5</td>
                      <td class="td-title">End Semester Practical Examinations</td>
                      <td class="td-code">10 Nov 2025 – 18 Nov 2025</td>
                      <td><span class="cal-status">Scheduled</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">6</td>
                      <td class="td-title">End Semester Theory Examinations</td>
                      <td class="td-code">24 Nov 2025 – 15 Dec 2025</td>
                      <td><span class="cal-status">Scheduled</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 class="calendar-term-heading" style="margin-top:36px">Even Semester (IV, VI, VIII Semesters)</h3>
              <div class="curr-table-wrapper">
                <table class="curr-table calendar-table">
                  <thead>
                    <tr>
                      <th style="width:70px">S.No</th>
                      <th>Academic Milestone / Event</th>
                      <th style="width:220px">Date / Duration</th>
                      <th style="width:130px">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="td-num">1</td>
                      <td class="td-title">Re-opening &amp; Commencement of Even Semester Classes</td>
                      <td class="td-code">05 Jan 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">2</td>
                      <td class="td-title">Continuous Internal Assessment – I (CIA I)</td>
                      <td class="td-code">16 Feb 2026 – 23 Feb 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">3</td>
                      <td class="td-title">Continuous Internal Assessment – II (CIA II)</td>
                      <td class="td-code">23 Mar 2026 – 30 Mar 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">4</td>
                      <td class="td-title">Last Working Day for Even Semester</td>
                      <td class="td-code">24 Apr 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">5</td>
                      <td class="td-title">End Semester Practical Examinations</td>
                      <td class="td-code">27 Apr 2026 – 06 May 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                    <tr>
                      <td class="td-num">6</td>
                      <td class="td-title">End Semester Theory Examinations</td>
                      <td class="td-code">11 May 2026 – 02 Jun 2026</td>
                      <td><span class="cal-status">Upcoming</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  ${renderAcademicsModal()}
</main>`;
}

const oddSemesterCalendar = [
  {
    semester: 'Semester III',
    caption: 'Second Year',
    accent: 'semester-three',
    events: [
      ['Commencement of Classes', '21 July 2025', 'Completed'],
      ['Continuous Internal Assessment - I', '01 Sep 2025 - 06 Sep 2025', 'Completed'],
      ['Continuous Internal Assessment - II', '13 Oct 2025 - 18 Oct 2025', 'Completed'],
      ['Last Working Day', '14 Nov 2025', 'Scheduled'],
      ['End Semester Practical Examinations', '17 Nov 2025 - 22 Nov 2025', 'Scheduled'],
      ['End Semester Theory Examinations', '01 Dec 2025 - 19 Dec 2025', 'Scheduled']
    ]
  },
  {
    semester: 'Semester V',
    caption: 'Third Year',
    accent: 'semester-five',
    events: [
      ['Commencement of Classes', '14 July 2025', 'Completed'],
      ['Continuous Internal Assessment - I', '25 Aug 2025 - 30 Aug 2025', 'Completed'],
      ['Continuous Internal Assessment - II', '06 Oct 2025 - 11 Oct 2025', 'Completed'],
      ['Last Working Day', '07 Nov 2025', 'Scheduled'],
      ['End Semester Practical Examinations', '10 Nov 2025 - 15 Nov 2025', 'Scheduled'],
      ['End Semester Theory Examinations', '24 Nov 2025 - 15 Dec 2025', 'Scheduled']
    ]
  },
  {
    semester: 'Semester VII',
    caption: 'Final Year',
    accent: 'semester-seven',
    events: [
      ['Commencement of Classes', '07 July 2025', 'Completed'],
      ['Continuous Internal Assessment - I', '18 Aug 2025 - 23 Aug 2025', 'Completed'],
      ['Continuous Internal Assessment - II', '29 Sep 2025 - 04 Oct 2025', 'Completed'],
      ['Last Working Day', '31 Oct 2025', 'Scheduled'],
      ['End Semester Practical Examinations', '03 Nov 2025 - 08 Nov 2025', 'Scheduled'],
      ['End Semester Theory Examinations', '17 Nov 2025 - 08 Dec 2025', 'Scheduled']
    ]
  }
];

export function renderOddSemesterCalendar({ semester, caption, accent, events }) {
  return `<section class="calendar-semester-block ${accent}">
    <div class="calendar-semester-heading">
      <div><span>${caption}</span><h3>${semester}</h3></div>
      <span class="calendar-semester-type">ODD SEMESTER</span>
    </div>
    <div class="curr-table-wrapper">
      <table class="curr-table calendar-table" aria-label="Academic calendar for ${semester}">
        <thead><tr><th style="width:70px">S.No</th><th>Academic Milestone / Event</th><th style="width:220px">Date / Duration</th><th style="width:130px">Status</th></tr></thead>
        <tbody>${events.map(([event, date, status], index) => `<tr><td class="td-num">${index + 1}</td><td class="td-title">${event}</td><td class="td-code">${date}</td><td><span class="cal-status ${status === 'Completed' ? 'cal-open' : ''}">${status}</span></td></tr>`).join('')}</tbody>
      </table>
    </div>
  </section>`;
}

export function academicCalendarPage() {
  return `<main class="siet-curr-page siet-calendar-page">
    ${sietHudHeader('Academic Calendar', 'Academic Calendar', false)}
    <section class="siet-curr-body">
      <div class="siet-curr-container">
        <div class="siet-curr-grid">
          ${renderAcademicsSidebar('academic-calendar')}
          <article class="siet-curr-main">
            <div class="siet-calendar-card">
              <div class="siet-calendar-header">
                <div>
                  <span class="curr-badge">AUTONOMOUS 2025-2026</span>
                  <h2>Odd Semester Academic Calendar</h2>
                  <p>Semester-specific schedules for III, V and VII semesters. Each timeline reflects its respective commencement, assessment and examination dates.</p>
                </div>
                <div class="calendar-actions"><a href="#/curriculum" class="dept-curriculum-action">View Full Curriculum →</a></div>
              </div>
              <div class="calendar-schedule-note"><strong>Separate semester schedules</strong><span>Dates are displayed independently because instructional and examination timelines vary by semester.</span></div>
              <div class="calendar-schedule-tables calendar-odd-specific">
                ${oddSemesterCalendar.map(renderOddSemesterCalendar).join('')}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    ${renderAcademicsModal()}
  </main>`;
}

