import { sietHudHeader } from '../../components/common/HudHeader.js';
import { ugProgramsDetailed, pgProgramsDetailed } from '../../data/programmesData.js';
import { renderAcademicsSidebar, renderAcademicsModal } from './CurriculumPage.js';
import { departmentCurricula } from '../../data/curriculumData.js';

export function academicOverviewPageLegacy() {
  // Dynamic metrics directly derived from existing project data
  const totalCredits = departmentCurricula['cse']
    ? Object.values(departmentCurricula['cse'].semesters).reduce((sum, s) => sum + (s.credits || 0), 0)
    : 168;
  const totalDisciplines = ugProgramsDetailed.length + pgProgramsDetailed.length;
  const ugCount = ugProgramsDetailed.length;
  const pgCount = pgProgramsDetailed.length;

  return `<main class="siet-acad-overview">
    <section class="acad-ov-unified-section" aria-label="Academic Overview">
      
      <!-- Top Decorative Accent Rings & Ambient Glow -->
      <div class="acad-ov-ambient-decor" aria-hidden="true">
        <div class="acad-ov-decor-glow"></div>
        <div class="acad-ov-decor-ring ring-1"></div>
        <div class="acad-ov-decor-ring ring-2"></div>
      </div>

      <!-- TOP HERO COMPOSITION (Deep Green #003F32) -->
      <div class="acad-ov-hero-container">
        <div class="acad-ov-shell">
          <div class="acad-ov-hero-grid">
            
            <!-- LEFT COLUMN -->
            <div class="acad-ov-hero-left reveal">
              <div class="acad-ov-kicker-wrap">
                <span class="acad-ov-kicker">ACADEMIC OVERVIEW</span>
                <span class="acad-ov-kicker-line" aria-hidden="true"></span>
              </div>

              <h1 class="acad-ov-main-heading">
                Outcome-Driven <span class="acad-ov-accent-text">Engineering Education</span> Grounded in Excellence.
              </h1>

              <p class="acad-ov-hero-desc">
                Sri Shakthi Institute of Engineering and Technology delivers an agile, forward-looking academic ecosystem anchored in our Autonomous Regulations 2025 (R2025) ${totalCredits}-credit framework. Spanning ${totalDisciplines} undergraduate and postgraduate engineering disciplines, our outcome-based model seamlessly integrates foundational sciences with continuous laboratory immersion, multidisciplinary electives, and industry-partnered capstone innovation.
              </p>

              <!-- INSTITUTIONAL BADGE ROW -->
              <div class="acad-ov-inst-badges" aria-label="Institutional credentials and affiliations">
                <div class="inst-badge-item">
                  <span class="inst-badge-icon" aria-hidden="true">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  </span>
                  <div class="inst-badge-text">
                    <strong>Autonomous Institution</strong>
                    <span>Regulations 2025 (R2025)</span>
                  </div>
                </div>

                <div class="inst-badge-divider" aria-hidden="true"></div>

                <div class="inst-badge-item">
                  <span class="inst-badge-icon" aria-hidden="true">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  </span>
                  <div class="inst-badge-text">
                    <strong>Affiliated to</strong>
                    <span>Anna University, Chennai</span>
                  </div>
                </div>

                <div class="inst-badge-divider" aria-hidden="true"></div>

                <div class="inst-badge-item">
                  <span class="inst-badge-icon" aria-hidden="true">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
                  </span>
                  <div class="inst-badge-text">
                    <strong>TNEA Code 2727</strong>
                    <span>Autonomous Counselling</span>
                  </div>
                </div>

                <div class="inst-badge-divider" aria-hidden="true"></div>

                <div class="inst-badge-item">
                  <span class="inst-badge-icon" aria-hidden="true">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
                  </span>
                  <div class="inst-badge-text">
                    <strong>NAAC &lsquo;A&rsquo; Grade</strong>
                    <span>NBA Accredited Programmes</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- RIGHT COLUMN: CAMPUS / ACADEMIC IMAGE -->
            <div class="acad-ov-hero-right reveal">
              <div class="acad-ov-campus-frame">
                <img src="/brand/techpark-local.png" alt="Sri Shakthi Campus &amp; Academic Innovation Hub" class="acad-ov-campus-img" loading="eager" decoding="async">
                <div class="acad-ov-image-glare" aria-hidden="true"></div>
                <div class="acad-ov-campus-badge">
                  <span class="badge-crest" aria-hidden="true">
                    <img src="/brand/siet-logo.png" alt="" class="badge-crest-img">
                  </span>
                  <div class="badge-content">
                    <span class="badge-kicker">SRI SHAKTHI CAMPUS</span>
                    <strong class="badge-title">ACADEMIC EXCELLENCE</strong>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- ORGANIC CURVED TRANSITION (From Deep Green into Cream #FFF8DF) -->
      <div class="acad-ov-curved-transition" aria-hidden="true">
        <svg class="acad-ov-wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
          <path d="M0,45 C320,115 680,15 1060,85 C1240,115 1360,95 1440,75 L1440,120 L0,120 Z" fill="#FFC928" opacity="0.45"/>
          <path d="M0,65 C300,125 700,35 1080,95 C1250,120 1370,105 1440,90 L1440,120 L0,120 Z" fill="#FFF8DF"/>
        </svg>
      </div>

      <!-- FOUR ACADEMIC HIGHLIGHTS AREA (Cream #FFF8DF) -->
      <div class="acad-ov-cream-area">
        <div class="acad-ov-shell">
          <div class="acad-ov-highlights-grid">
            
            <!-- CARD 1: CREDITS -->
            <article class="acad-ov-card reveal">
              <div class="acad-ov-card-icon-area" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  <line x1="9" y1="7" x2="15" y2="7"/>
                  <line x1="9" y1="11" x2="13" y2="11"/>
                </svg>
              </div>
              <div class="acad-ov-card-value">${totalCredits}</div>
              <div class="acad-ov-card-label">CREDITS</div>
              <p class="acad-ov-card-desc">Autonomous R2025 Curriculum Framework</p>
            </article>

            <!-- CARD 2: DISCIPLINES -->
            <article class="acad-ov-card reveal">
              <div class="acad-ov-card-icon-area" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1.5"/>
                  <rect x="14" y="3" width="7" height="7" rx="1.5"/>
                  <rect x="3" y="14" width="7" height="7" rx="1.5"/>
                  <rect x="14" y="14" width="7" height="7" rx="1.5"/>
                </svg>
              </div>
              <div class="acad-ov-card-value">${totalDisciplines}</div>
              <div class="acad-ov-card-label">DISCIPLINES</div>
              <p class="acad-ov-card-desc">${ugCount} UG &amp; ${pgCount} PG Academic Programmes</p>
            </article>

            <!-- CARD 3: OUTCOME BASED -->
            <article class="acad-ov-card reveal">
              <div class="acad-ov-card-icon-area" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div class="acad-ov-card-value">100%</div>
              <div class="acad-ov-card-label">OUTCOME BASED</div>
              <p class="acad-ov-card-desc">Bloom’s Taxonomy &amp; Experiential Learning Model</p>
            </article>

            <!-- CARD 4: ACCREDITATION -->
            <article class="acad-ov-card reveal">
              <div class="acad-ov-card-icon-area" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div class="acad-ov-card-value">NAAC &lsquo;A&rsquo;</div>
              <div class="acad-ov-card-label">ACCREDITED</div>
              <p class="acad-ov-card-desc">Eligible Engineering Programmes NBA Accredited</p>
            </article>

          </div>
        </div>
      </div>

      <!-- ORGANIC CURVED TRANSITION (Cream into Deep Forest Green) -->
      <div class="acad-ov-curved-transition to-dark" aria-hidden="true">
        <svg class="acad-ov-wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
          <path d="M0,45 C380,110 740,20 1100,85 C1260,110 1370,95 1440,80 L1440,120 L0,120 Z" fill="#FFC928" opacity="0.4"/>
          <path d="M0,65 C340,120 760,40 1120,95 C1270,115 1380,105 1440,92 L1440,120 L0,120 Z" fill="#002D24"/>
        </svg>
      </div>

      <!-- SECTION 01: ACADEMIC APPROACH (Deep Forest Green) -->
      <div class="acad-ov-approach-wrapper">
        <div class="acad-ov-shell">
          <div class="acad-ov-section-head reveal">
            <span class="acad-ov-section-tag">01 / ACADEMIC APPROACH</span>
            <h2 class="acad-ov-section-title light">An Academic Ecosystem Built for <em>Depth and Application</em></h2>
            <p class="acad-ov-section-desc light">
              Our academic model moves beyond conventional instruction. By synthesizing theoretical rigor with continuous experimental validation, students develop the analytical depth and practical mastery needed to engineer real solutions.
            </p>
          </div>

          <div class="acad-ov-approach-grid">
            <div class="acad-ov-approach-narrative reveal">
              <div class="acad-ov-pillar-item">
                <div class="pillar-marker">01</div>
                <div class="pillar-body">
                  <h3>Strong Academic Foundations</h3>
                  <p>Every engineering discipline is grounded in comprehensive mathematical sciences, computational logic, and physical principles. Curricula are systematically aligned with Bloom’s Revised Taxonomy, establishing progressive cognitive development from conceptual understanding to complex system design.</p>
                </div>
              </div>

              <div class="acad-ov-pillar-item">
                <div class="pillar-marker">02</div>
                <div class="pillar-body">
                  <h3>Practical &amp; Laboratory Integration</h3>
                  <p>Theoretical lectures are directly coupled with hands-on laboratory sessions, experimentation, and design studios. Students test and validate theoretical hypotheses on industry-grade equipment, simulation suites, and specialized R&amp;D testbeds.</p>
                </div>
              </div>

              <div class="acad-ov-pillar-item">
                <div class="pillar-marker">03</div>
                <div class="pillar-body">
                  <h3>Autonomous Regulations 2025 (R2025)</h3>
                  <p>The 168-credit autonomous curriculum gives students agility: combining disciplinary specialization with open multidisciplinary electives, minor degree tracks, continuous internal evaluations (40%), and fast-track capstone pathways.</p>
                </div>
              </div>

              <div class="acad-ov-pillar-item">
                <div class="pillar-marker">04</div>
                <div class="pillar-body">
                  <h3>Industry Exposure &amp; Applied Innovation</h3>
                  <p>Through industry-partnered coursework, design thinking challenges, hackathons, and research mentorship, students learn to bridge academic concepts with contemporary global engineering practices and emerging technologies.</p>
                </div>
              </div>
            </div>

            <div class="acad-ov-approach-visual reveal">
              <div class="acad-ov-visual-stack">
                <div class="visual-photo-wrap">
                  <img src="/brand/departments-campus.jpg" alt="Engineering Laboratory and Collaborative Learning" loading="lazy" decoding="async">
                  <div class="visual-photo-overlay" aria-hidden="true"></div>
                </div>
                <div class="visual-highlight-card">
                  <div class="highlight-stat">
                    <span class="stat-num">${totalCredits}</span>
                    <span class="stat-label">Credits Autonomous Framework</span>
                  </div>
                  <p class="highlight-text">
                    Structured to build core disciplinary competence, multidisciplinary breadth, and professional ethics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ORGANIC CURVED TRANSITION (Deep Green into Cream #FFF8DF) -->
      <div class="acad-ov-curved-transition to-cream" aria-hidden="true">
        <svg class="acad-ov-wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
          <path d="M0,45 C320,115 680,15 1060,85 C1240,115 1360,95 1440,75 L1440,120 L0,120 Z" fill="#FFC928" opacity="0.45"/>
          <path d="M0,65 C300,125 700,35 1080,95 C1250,120 1370,105 1440,90 L1440,120 L0,120 Z" fill="#FFF8DF"/>
        </svg>
      </div>

      <!-- SECTION 02: THE LEARNING EXPERIENCE (Cream #FFF8DF) -->
      <div class="acad-ov-experience-wrapper">
        <div class="acad-ov-shell">
          <div class="acad-ov-section-head reveal">
            <span class="acad-ov-section-tag dark">02 / LEARNING EXPERIENCE</span>
            <h2 class="acad-ov-section-title dark">The Student Journey: <em>From Fundamentals to Capstone Mastery</em></h2>
            <p class="acad-ov-section-desc dark">
              How students experience academics at Sri Shakthi: a progressive, guided trajectory designed to cultivate independent inquiry, technical proficiency, and professional confidence.
            </p>
          </div>

          <div class="acad-ov-journey-grid">
            <!-- Stage 1 -->
            <article class="acad-ov-journey-card reveal">
              <div class="journey-card-top">
                <span class="journey-badge">STAGE 1 &bull; YEAR 1</span>
                <span class="journey-step-num">01</span>
              </div>
              <h3 class="journey-card-title">Foundational Sciences &amp; Engineering Practices</h3>
              <p class="journey-card-desc">
                First-year students build rigorous fundamentals in matrices, calculus, engineering physics, chemistry, computational problem solving in Python and C, engineering graphics, and professional communication laboratory.
              </p>
              <div class="journey-card-meta">
                <span class="meta-tag">Mathematical Rigor</span>
                <span class="meta-tag">Programming Labs</span>
                <span class="meta-tag">Engineering Graphics</span>
              </div>
            </article>

            <!-- Stage 2 -->
            <article class="acad-ov-journey-card reveal">
              <div class="journey-card-top">
                <span class="journey-badge">STAGE 2 &bull; YEARS 2 &amp; 3</span>
                <span class="journey-step-num">02</span>
              </div>
              <h3 class="journey-card-title">Disciplinary Depth &amp; Laboratory Immersion</h3>
              <p class="journey-card-desc">
                Students immerse in advanced core subjects coupled with continuous laboratory experiments, Design Thinking &amp; Innovation coursework, professional development modules, and faculty-mentored mini-projects.
              </p>
              <div class="journey-card-meta">
                <span class="meta-tag">Core Specialization</span>
                <span class="meta-tag">Design Thinking</span>
                <span class="meta-tag">Continuous Labs</span>
              </div>
            </article>

            <!-- Stage 3 -->
            <article class="acad-ov-journey-card reveal">
              <div class="journey-card-top">
                <span class="journey-badge">STAGE 3 &bull; YEAR 4</span>
                <span class="journey-step-num">03</span>
              </div>
              <h3 class="journey-card-title">Multidisciplinary Electives &amp; Capstone Innovation</h3>
              <p class="journey-card-desc">
                Senior learners personalize their pathways through emerging technology electives, fast-track industry capstone projects, full-semester corporate internships, and applied research publications.
              </p>
              <div class="journey-card-meta">
                <span class="meta-tag">Advanced Electives</span>
                <span class="meta-tag">Industry Internship</span>
                <span class="meta-tag">Capstone Projects</span>
              </div>
            </article>
          </div>

          <!-- Editorial Quote Banner -->
          <div class="acad-ov-experience-quote reveal">
            <div class="quote-content">
              <span class="quote-mark" aria-hidden="true">&ldquo;</span>
              <p class="quote-text">
                Education should do more than prepare students for a profession. It must inspire them to question, create, collaborate, and use their capabilities to make a meaningful difference.
              </p>
              <div class="quote-author">
                <strong>Sri Shakthi Academic Philosophy</strong>
                <span>Autonomous Regulations 2025 &bull; Outcome-Based Education</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ORGANIC CURVED TRANSITION (Cream into Deep Green #003F32) -->
      <div class="acad-ov-curved-transition to-dark" aria-hidden="true">
        <svg class="acad-ov-wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
          <path d="M0,45 C380,110 740,20 1100,85 C1260,110 1370,95 1440,80 L1440,120 L0,120 Z" fill="#FFC928" opacity="0.4"/>
          <path d="M0,65 C340,120 760,40 1120,95 C1270,115 1380,105 1440,92 L1440,120 L0,120 Z" fill="#003F32"/>
        </svg>
      </div>

      <!-- SECTION 03: ACADEMIC PHILOSOPHY & OUTCOMES (Deep Green #003F32) -->
      <div class="acad-ov-philosophy-wrapper">
        <div class="acad-ov-shell">
          <div class="acad-ov-section-head reveal">
            <span class="acad-ov-section-tag">03 / PHILOSOPHY &amp; OUTCOMES</span>
            <h2 class="acad-ov-section-title light">Knowledge in Action. <em>Character in Leadership.</em></h2>
            <p class="acad-ov-section-desc light">
              Rooted in our enduring institutional beliefs, the academic experience develops four complementary dimensions of graduate capability.
            </p>
          </div>

          <div class="acad-ov-outcomes-grid">
            <article class="acad-ov-outcome-card reveal">
              <div class="outcome-icon-wrap" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              </div>
              <h3>Deep Conceptual Mastery</h3>
              <p>Academic excellence is our gateway. We empower learners with strong theoretical comprehension, mathematical modeling capacity, and deep domain principles.</p>
            </article>

            <article class="acad-ov-outcome-card reveal">
              <div class="outcome-icon-wrap" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <h3>Applied Problem Solving</h3>
              <p>Learning becomes lasting when ideas are tested in action. Students develop the skill to analyze complex real-world challenges and design robust engineering solutions.</p>
            </article>

            <article class="acad-ov-outcome-card reveal">
              <div class="outcome-icon-wrap" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 2.6 1.4 4.8 3.5 6v2a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-2c2.1-1.2 3.5-3.4 3.5-6a7 7 0 0 0-7-7zm-2 19a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-.5h-4v.5z"></path></svg>
              </div>
              <h3>Innovation &amp; Public Good</h3>
              <p>Knowledge carries responsibility. We cultivate creativity and ethical awareness, preparing engineers to build sustainable, human-centric technologies that serve society.</p>
            </article>

            <article class="acad-ov-outcome-card reveal">
              <div class="outcome-icon-wrap" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3>Professional Readiness</h3>
              <p>Employability is our milestone; confident citizenship is our destination. Graduates emerge with multidisciplinary teamwork, communication skills, and lifelong adaptability.</p>
            </article>
          </div>

          <!-- CENTERED CURRICULUM ACTION BANNER -->
          <div class="acad-ov-action-banner reveal">
            <div class="action-banner-text">
              <h3>Ready to explore the full academic structure?</h3>
              <p>Review semester-wise course syllabi, credit distribution, elective tracks, and autonomous regulations.</p>
            </div>
            <a href="#/curriculum" class="acad-ov-curriculum-btn">
              <span>View Autonomous Curriculum Structure</span>
              <span class="acad-ov-btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>

        </div>
      </div>

      <!-- BOTTOM DECORATIVE AREA (Smooth curved ending inside same section) -->
      <div class="acad-ov-bottom-ending" aria-hidden="true">
        <svg class="acad-ov-bottom-wave-svg" viewBox="0 0 1440 90" preserveAspectRatio="none" fill="none">
          <path d="M0,0 C360,70 820,10 1440,65 L1440,90 L0,90 Z" fill="#00221A"/>
        </svg>
        <div class="acad-ov-bottom-footer-bar">
          <div class="acad-ov-shell">
            <div class="acad-ov-motto-row">
              <span class="motto-word">KNOWLEDGE</span>
              <span class="motto-sep">&bull;</span>
              <span class="motto-word">SKILLS</span>
              <span class="motto-sep">&bull;</span>
              <span class="motto-word">VALUES</span>
              <span class="motto-sep">&bull;</span>
              <span class="motto-word">IMPACT</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  </main>`;
}

export function academicOverviewPage() {
  const totalCredits = departmentCurricula['cse']
    ? Object.values(departmentCurricula['cse'].semesters).reduce((sum, semester) => sum + (semester.credits || 0), 0)
    : 168;
  const ugCount = ugProgramsDetailed.length;
  const pgCount = pgProgramsDetailed.length;
  const totalDisciplines = ugCount + pgCount;

  const metrics = [
    [totalCredits, '', 'Curriculum credits', 'Autonomous R2025 framework'],
    [totalDisciplines, '', 'Specialised disciplines', `${ugCount} UG and ${pgCount} PG programmes`],
    [40, '%', 'Continuous assessment', 'Feedback-led learning and evaluation'],
    [8, '', 'NBA-accredited programmes', 'Alongside institutional NAAC A accreditation']
  ];

  const pillars = [
    ['01', 'Learn the principles', 'Build mathematical, scientific and computational foundations through connected classroom instruction.'],
    ['02', 'Test every idea', 'Move continuously between theory, laboratories, design studios and industry-grade simulation environments.'],
    ['03', 'Choose your direction', 'Shape a distinctive pathway through minors, multidisciplinary electives and emerging technology tracks.'],
    ['04', 'Build for the world', 'Turn knowledge into prototypes, research, internships and an industry-partnered capstone project.']
  ];

  const journey = [
    ['Year 01', 'Discover', 'Foundational sciences, engineering practices, programming and communication.'],
    ['Years 02–03', 'Deepen', 'Core specialisation, continuous labs, mini-projects and design thinking.'],
    ['Year 04', 'Deliver', 'Advanced electives, industry internship, research and capstone innovation.']
  ];

  const outcomes = [
    ['01', 'Conceptual mastery', 'Understand systems from first principles and reason with confidence.'],
    ['02', 'Applied intelligence', 'Translate complex challenges into practical engineering responses.'],
    ['03', 'Creative responsibility', 'Design ethical, sustainable and human-centred technology.'],
    ['04', 'Professional readiness', 'Communicate, collaborate and adapt in a changing global workplace.']
  ];

  return `<main class="academic-new">
    <section class="siet-vm-hero academic-new-hero">
      <div class="siet-vm-hero-grid"></div>
      <div class="siet-vm-hero-orb orb-one"></div>
      <div class="siet-vm-hero-orb orb-two"></div>
      <div class="siet-vm-shell academic-new-hero-grid">
        <div class="academic-new-hero-copy reveal">
          <p class="siet-vm-kicker"><i></i> ACADEMIC OVERVIEW</p>
          <h1>Where knowledge becomes <em>capability.</em></h1>
          <p class="siet-vm-intro">An autonomous engineering education built around strong foundations, purposeful experimentation and the confidence to solve real problems.</p>
          <div class="academic-new-actions">
            <a class="academic-new-primary" href="#/programmes">Explore programmes <span>↗</span></a>
            <a class="academic-new-text-link" href="#/curriculum">View R2025 curriculum <span>→</span></a>
          </div>
          <div class="academic-new-credentials">
            <span>Autonomous Institution</span><i></i><span>Anna University</span><i></i><span>TNEA 2727</span>
          </div>
        </div>
        <div class="academic-new-hero-media reveal">
          <div class="academic-new-photo-main"><img src="/brand/techpark-local.png" alt="Sri Shakthi academic campus"></div>
          <div class="academic-new-photo-small"><img src="/brand/departments-campus.jpg" alt="Students learning in a collaborative engineering environment"></div>
          <div class="academic-new-seal"><strong>R2025</strong><span>Autonomous<br>Curriculum</span></div>
          <p class="academic-new-image-note">Learning designed for<br><strong>depth + application</strong></p>
        </div>
      </div>
    </section>

    <section class="academic-new-metrics" aria-label="Academic highlights">
      <div class="academic-new-shell academic-new-metrics-grid">
        ${metrics.map(([value, suffix, label, note], index) => `<article class="academic-new-metric reveal"><span class="academic-new-metric-index">0${index + 1}</span><strong><span class="js-counter" data-to="${value}" data-suffix="${suffix}">0${suffix}</span></strong><h2>${label}</h2><p>${note}</p><i class="academic-new-metric-rule"></i></article>`).join('')}
      </div>
    </section>

    <section class="academic-new-model">
      <div class="academic-new-shell">
        <div class="academic-new-section-intro reveal">
          <p class="academic-new-kicker dark"><span></span> THE SRI SHAKTHI MODEL</p>
          <div><h2>Education is not a straight line.</h2><p>It is a cycle of understanding, experimenting, choosing and creating. Every part of our academic model is designed to keep that cycle moving.</p></div>
        </div>
        <div class="academic-new-model-layout">
          <div class="academic-new-model-visual reveal">
            <img src="/brand/departments-campus.jpg" alt="Engineering laboratory learning at Sri Shakthi">
            <div class="academic-new-vertical-word">EXPERIENCE</div>
          </div>
          <div class="academic-new-pillars">
            ${pillars.map(([number, title, text]) => `<article class="academic-new-pillar reveal"><span>${number}</span><div><h3>${title}</h3><p>${text}</p></div><b>↗</b></article>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="academic-new-journey">
      <div class="academic-new-shell">
        <div class="academic-new-journey-head reveal"><p>YOUR FOUR-YEAR JOURNEY</p><h2>From curious learner<br>to confident engineer.</h2></div>
        <div class="academic-new-timeline reveal">
          ${journey.map(([year, title, text], index) => `<article class="academic-new-stage reveal"><div class="academic-new-stage-dot"><span>${index + 1}</span></div><p>${year}</p><h3>${title}</h3><div>${text}</div></article>`).join('')}
        </div>
        <blockquote class="academic-new-quote reveal"><span>“</span><p>Education should inspire students to question, create, collaborate and use their capabilities to make a meaningful difference.</p><footer>Sri Shakthi Academic Philosophy</footer></blockquote>
      </div>
    </section>

    <section class="academic-new-outcomes">
      <div class="academic-new-shell academic-new-outcomes-layout">
        <div class="academic-new-outcomes-copy reveal"><p class="academic-new-kicker"><span></span> GRADUATE OUTCOMES</p><h2>Ready for work.<br>Ready for life.</h2><p>Our graduates leave with more than a degree. They carry four complementary capabilities into every challenge.</p></div>
        <div class="academic-new-outcomes-grid">
          ${outcomes.map(([number, title, text]) => `<article class="academic-new-outcome reveal"><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}
        </div>
      </div>
    </section>

    <section class="academic-new-cta">
      <div class="academic-new-shell academic-new-cta-inner reveal">
        <div><p>THE COMPLETE ACADEMIC BLUEPRINT</p><h2>See how every semester builds momentum.</h2></div>
        <a href="#/curriculum">Explore the curriculum <span>→</span></a>
      </div>
    </section>
  </main>`;
}

