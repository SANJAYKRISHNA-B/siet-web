import { ugProgramsDetailed, pgProgramsDetailed } from '../../data/programmesData.js';
import { departmentCurricula } from '../../data/curriculumData.js';

export function academicOverviewPage() {
  // Dynamic metrics directly derived from existing project data
  const totalCredits = departmentCurricula['cse']
    ? Object.values(departmentCurricula['cse'].semesters).reduce((sum, s) => sum + (s.credits || 0), 0)
    : 168;
  const ugCount = ugProgramsDetailed.length;
  const pgCount = pgProgramsDetailed.length;
  const totalDisciplines = ugCount + pgCount;

  const labs = [
    { num: '01', name: 'AI Lab', slug: 'ai-lab', desc: 'GPU-accelerated deep learning, computer vision, and neural network experimentation.' },
    { num: '02', name: 'Cyber & Cloud Lab', slug: 'cyber-cloud-lab', desc: 'Enterprise cybersecurity, ethical penetration testing, and multi-cloud virtual testbeds.' },
    { num: '03', name: 'VLSI Lab', slug: 'vlsi-lab', desc: 'Industry-standard EDA cadence suites for ASIC synthesis, FPGA prototyping, and layout verification.' },
    { num: '04', name: 'Embedded Systems Lab', slug: 'embedded-systems-lab', desc: 'Real-time operating systems, ARM Cortex silicon microcontrollers, and firmware development.' },
    { num: '05', name: 'IoT Lab', slug: 'iot-lab', desc: 'Connected edge sensors, industrial wireless mesh protocols, and smart telemetry gateways.' },
    { num: '06', name: 'AR & VR Lab', slug: 'ar-vr-lab', desc: 'Spatial computing, immersive 3D simulation engines, and virtual training simulations.' },
    { num: '07', name: 'PCB Design Lab', slug: 'pcb-design-lab', desc: 'Precision PCB prototyping, surface-mount soldering, and RF high-frequency circuit analysis.' },
    { num: '08', name: 'Robotics Lab', slug: 'robotics-lab', desc: 'Multi-axis articulated robotic arms, autonomous mobile robots (AMRs), and PLC industrial automation.' }
  ];

  return `<main class="siet-acad-overview">
    <section class="acad-ov-unified-section" aria-label="Academic Overview">
      
      <!-- Top Decorative Accent Rings & Ambient Glow -->
      <div class="acad-ov-ambient-decor" aria-hidden="true">
        <div class="acad-ov-decor-glow"></div>
        <div class="acad-ov-decor-ring ring-1"></div>
        <div class="acad-ov-decor-ring ring-2"></div>
      </div>

      <!-- TOP HERO COMPOSITION (Deep Green Dominant) -->
      <div class="acad-ov-hero-container">
        <div class="acad-ov-shell">
          <div class="acad-ov-hero-grid">
            
            <!-- LEFT COLUMN: TITLE, INTRO, ACTIONS & INSTITUTIONAL CREDENTIALS -->
            <div class="acad-ov-hero-left reveal">
              <div class="acad-ov-kicker-wrap">
                <span class="acad-ov-kicker">ACADEMIC OVERVIEW</span>
                <span class="acad-ov-kicker-line" aria-hidden="true"></span>
              </div>

              <h1 class="acad-ov-main-heading">
                Where Knowledge Translates into <span class="acad-ov-accent-text">Capability.</span>
              </h1>

              <p class="acad-ov-hero-desc">
                Sri Shakthi Institute of Engineering and Technology delivers an autonomous, outcome-driven academic ecosystem built around our Autonomous Regulations 2025 (R2025) ${totalCredits}-credit framework. Across ${totalDisciplines} undergraduate and postgraduate engineering disciplines, students cultivate deep theoretical foundations coupled with continuous laboratory immersion, multidisciplinary electives, and industry capstone innovation.
              </p>

              <!-- HERO ACTION BUTTONS -->
              <div class="acad-ov-hero-actions">
                <a href="#/programmes" class="acad-ov-hero-btn primary" id="btn-acad-programmes">
                  <span>Explore Programmes</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17l9.2-9.2M17 17V7.8H7.8"/></svg>
                </a>
                <a href="#/curriculum" class="acad-ov-hero-btn secondary" id="btn-acad-curriculum">
                  <span>View R2025 Curriculum</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
                <a href="#/labs" class="acad-ov-hero-btn ghost" id="btn-acad-labs">
                  <span>8 Specialized Labs</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>

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

            <!-- RIGHT COLUMN: UNOBSTRUCTED HIGH-DEFINITION CAMPUS FRAME -->
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

      <!-- ORGANIC CURVED TRANSITION (From Deep Green into Warm Cream #FFF8DF) -->
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

            <!-- CARD 3: CONTINUOUS ASSESSMENT -->
            <article class="acad-ov-card reveal">
              <div class="acad-ov-card-icon-area" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div class="acad-ov-card-value">40%</div>
              <div class="acad-ov-card-label">CONTINUOUS ASSESSMENT</div>
              <p class="acad-ov-card-desc">Feedback-Led Evaluation &amp; Practical Mastery</p>
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
                  <p>The ${totalCredits}-credit autonomous curriculum gives students agility: combining disciplinary specialization with open multidisciplinary electives, minor degree tracks, continuous internal evaluations (40%), and fast-track capstone pathways.</p>
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

      <!-- SECTION 02: SPECIALIZED LABORATORIES SPOTLIGHT -->
      <div class="acad-ov-labs-wrapper" aria-label="Specialized Laboratories">
        <div class="acad-ov-shell">
          <div class="acad-ov-section-head reveal">
            <span class="acad-ov-section-tag">02 / EXPERIMENTAL EXCELLENCE</span>
            <h2 class="acad-ov-section-title light">8 Dedicated <em>Specialized Laboratories</em></h2>
            <p class="acad-ov-section-desc light">
              Theory is tested and transformed into tangible prototypes across purpose-built research centers equipped with enterprise silicon, computing clusters, and precision prototyping instruments.
            </p>
          </div>

          <div class="acad-ov-labs-grid">
            ${labs.map(lab => `
              <a href="#/labs/${lab.slug}" class="acad-ov-lab-card reveal" id="acad-lab-${lab.slug}">
                <span class="acad-ov-lab-number">${lab.num} &bull; SPECIALIZED LAB</span>
                <h3 class="acad-ov-lab-name">${lab.name}</h3>
                <p class="acad-ov-lab-desc">${lab.desc}</p>
                <span class="acad-ov-lab-link">
                  Explore Facility
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </a>
            `).join('')}
          </div>

          <div class="acad-ov-labs-footer reveal">
            <a href="#/labs" class="acad-ov-labs-viewall" id="btn-view-all-labs">
              <span>View All 8 Laboratory Dedicated Pages</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
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

      <!-- SECTION 03: THE LEARNING EXPERIENCE (Cream #FFF8DF) -->
      <div class="acad-ov-experience-wrapper">
        <div class="acad-ov-shell">
          <div class="acad-ov-section-head reveal">
            <span class="acad-ov-section-tag dark">03 / LEARNING EXPERIENCE</span>
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

      <!-- SECTION 04: ACADEMIC PHILOSOPHY & OUTCOMES (Deep Green #003F32) -->
      <div class="acad-ov-philosophy-wrapper">
        <div class="acad-ov-shell">
          <div class="acad-ov-section-head reveal">
            <span class="acad-ov-section-tag">04 / PHILOSOPHY &amp; OUTCOMES</span>
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
            <a href="#/curriculum" class="acad-ov-curriculum-btn" id="btn-acad-view-curriculum">
              <span>View Autonomous Curriculum Structure</span>
              <span class="acad-ov-btn-arrow" aria-hidden="true">&rarr;</span>
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

export const academicOverviewPageLegacy = academicOverviewPage;
