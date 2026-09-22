// Training & Placement Cell Portal
// Sri Shakthi Institute of Engineering and Technology (Autonomous)
// Built referencing the bespoke Executive COE Portal Template Architecture

export const placementIcons = {
  highlights: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  recruiters: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  training: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  stats: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  policy: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  contact: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
};

export const placementTeam = [
  {
    name: 'Dr. R. Saravanakumar',
    designation: 'Head — Corporate Relations & Placements',
    role: 'Chief Placement Officer',
    qualification: 'Ph.D., M.E., B.E.',
    badge: 'Head of Department'
  },
  {
    name: 'Prof. K. Venkatesh',
    designation: 'Senior Placement Officer',
    role: 'Product & IT Hiring Lead',
    qualification: 'M.Tech, B.E.',
    badge: 'IT & Software Relations'
  },
  {
    name: 'Prof. M. Soundarya',
    designation: 'Placement Officer',
    role: 'Core Engineering & Automotive Lead',
    qualification: 'M.E., B.E.',
    badge: 'Core & Manufacturing'
  },
  {
    name: 'Mr. S. Dinesh Kumar',
    designation: 'Head of Career Development & Training',
    role: 'Technical Aptitude & Full Stack Lead',
    qualification: 'M.E., B.Tech',
    badge: 'Training Lead'
  }
];

export const placementTrainingRoadmap = [
  {
    sem: 'Year 1 · Semesters 1 & 2',
    title: 'Foundational Aptitude & Professional Communication',
    desc: 'Focuses on verbal fluency, logical thinking, quantitative aptitude, and business etiquette through experiential workshops.',
    modules: [
      'Diagnostic Assessment & Goal Setting',
      'Quantitative Aptitude & Number Theory',
      'Logical Reasoning & Analytical Thinking',
      'Corporate Etiquette & Presentation Mastery'
    ]
  },
  {
    sem: 'Year 2 · Semesters 3 & 4',
    title: 'Data Structures, Problem Solving & Full-Stack Coding',
    desc: 'Rigorous hands-on coding bootcamps on LeetCode/HackerRank, Object-Oriented Programming, and web application architecture.',
    modules: [
      'Data Structures & Algorithms in Java / C++ / Python',
      'Database Design & SQL Optimization',
      'Web Technologies, REST APIs & GitHub Workflows',
      'Internal Hackathons & Peer Code Reviews'
    ]
  },
  {
    sem: 'Year 3 · Semesters 5 & 6',
    title: 'Industry Hackathons, Domain Immersion & Internships',
    desc: 'System design, domain-specific certifications (AWS, Azure, Cisco, Cadence), and mandatory summer industry internships.',
    modules: [
      'Advanced Competitive Programming & Dynamic Programming',
      'Cloud Computing, DevOps & Microservices',
      'Core Engineering Simulation & Embedded Systems',
      'Smart India Hackathon & Product Prototype Building'
    ]
  },
  {
    sem: 'Year 4 · Semesters 7 & 8',
    title: 'Executive Mock Interviews & Dream Company Drives',
    desc: 'Intensive company-specific grooming, mock technical and HR panels with industry alumni, and on-campus recruitment drives.',
    modules: [
      'Company-Specific Technical Question Banks',
      'Mock Group Discussions & Behavioral HR Panels',
      'Resume Engineering & LinkedIn Optimization',
      'Day-1 Mega Drives & Product Dream Recruitment'
    ]
  }
];

export const placementStatsTable = [
  { tier: 'Tier 1 (Product & High Dream)', package: '₹10.00 – ₹24.00+ LPA', placed: '26+ Students', recruiters: 'Zoho, Microsoft, Cisco, Thoughtworks, Target, Hexaware' },
  { tier: 'Tier 2 (Dream & Super Dream)', package: '₹6.00 – ₹9.99 LPA', placed: '98+ Students', recruiters: 'Cognizant GenC Elevate, TCS Digital, Virtusa, Bosch, L&T' },
  { tier: 'Tier 3 (Core & Global IT)', package: '₹4.00 – ₹5.99 LPA', placed: '226+ Students', recruiters: 'Infosys, Wipro, Accenture, Caterpillar, Hyundai Mobis, TVS' },
  { tier: 'Tier 4 (Mass & Direct Recruitment)', package: '₹3.00 – ₹3.99 LPA', placed: '272+ Students', recruiters: 'Tech Mahindra, Capgemini, HCL, Quest Global, Mindtree' }
];

export function placementsPortalPage(activeTab = 'highlights') {
  return `
  <main class="siet-coe-page siet-placement-portal-page">
    <!-- Bespoke Executive Placement Hero Template (Referencing COE Template Architecture) -->
    <section class="coe-exec-hero placement-exec-hero">
      <div class="coe-exec-hero-glow" aria-hidden="true"></div>
      <div class="coe-exec-hero-pattern" aria-hidden="true"></div>
      
      <div class="coe-exec-shell">
        <!-- Top Metadata & Navigation Bar -->
        <div class="coe-exec-topbar">
          <nav class="coe-exec-breadcrumbs" aria-label="Breadcrumb">
            <a href="#/">Home</a>
            <span class="sep">/</span>
            <span>Career Services</span>
            <span class="sep">/</span>
            <span class="cur">Training &amp; Placements</span>
          </nav>
          
          <div class="coe-exec-status-group">
            <span class="coe-status-pill">
              <span class="status-pulse"></span>
              <span>CORPORATE RELATIONS &amp; RECRUITMENT CELL</span>
            </span>
            <span class="coe-status-tag">BATCH 2025–2026</span>
          </div>
        </div>

        <!-- Main Executive Presentation Banner -->
        <div class="coe-exec-main">
          <div class="coe-exec-content-col">
            <div class="coe-exec-kicker-row">
              <span class="coe-kicker-gold">CENTRE FOR CAREER DEVELOPMENT</span>
              <span class="coe-kicker-div">•</span>
              <span class="coe-kicker-sub">INDUSTRY-ALIGNED IMMERSION</span>
            </div>

            <h1 class="coe-exec-title">Training &amp; Placement Cell</h1>
            <p class="coe-exec-institution">Sri Shakthi Institute of Engineering and Technology</p>
            <p class="coe-exec-accreditation">
              <span>Autonomous Institution Affiliated to Anna University, Chennai</span>
              <span class="dot">•</span>
              <span>Approved by AICTE, New Delhi</span>
              <span class="dot">•</span>
              <span class="naac-highlight">NAAC 'A' Grade</span>
              <span class="dot">•</span>
              <span>NBA Accredited Programmes</span>
            </p>

            <div class="coe-exec-quote-card">
              <p>
                "Empowering young innovators with industry-aligned skillsets, hands-on experiential learning, and premier career opportunities across global technology leaders, multinationals, and Fortune 500 enterprises."
              </p>
            </div>

            <!-- Executive Placement Pillar Chips -->
            <div class="coe-exec-pillars-row">
              <div class="coe-pillar-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                <span><b>Highest CTC:</b> ₹24+ LPA Top Offer</span>
              </div>
              <div class="coe-pillar-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <span><b>Recruiters:</b> 200+ Global Partners</span>
              </div>
              <div class="coe-pillar-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                <span><b>Tiers:</b> ₹10 LPA+, ₹6 LPA+, ₹4 LPA+, ₹3 LPA+</span>
              </div>
              <div class="coe-pillar-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span><b>Sectors:</b> Product, IT, AI &amp; Core</span>
              </div>
              <div class="coe-pillar-chip">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <span><b>Placement Rate:</b> 90%+ Consistent Record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Vertical Navigation Layout Section (COE Template Architecture) -->
    <section class="coe-main-tabs-section">
      <div class="coe-portal-layout">
        <!-- Left Vertical Navigation Sidebar -->
        <aside class="coe-vertical-sidebar">
          <div class="coe-sidebar-header">
            <span class="coe-sidebar-kicker">CAREER SERVICES</span>
            <h3 class="coe-sidebar-title">Placement Portal</h3>
          </div>

          <nav class="coe-vertical-nav" role="tablist" aria-label="Placements Sections Navigation">
            <button type="button" class="coe-tab-btn ${activeTab === 'highlights' ? 'active' : ''}" data-tab="highlights" role="tab" aria-selected="${activeTab === 'highlights'}">
              <span class="tab-icon">${placementIcons.highlights}</span>
              <span class="tab-title">Placement Highlights</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'recruiters' ? 'active' : ''}" data-tab="recruiters" role="tab" aria-selected="${activeTab === 'recruiters'}">
              <span class="tab-icon">${placementIcons.recruiters}</span>
              <span class="tab-title">Top Recruiters</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'training' ? 'active' : ''}" data-tab="training" role="tab" aria-selected="${activeTab === 'training'}">
              <span class="tab-icon">${placementIcons.training}</span>
              <span class="tab-title">Training Pathways</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'stats' ? 'active' : ''}" data-tab="stats" role="tab" aria-selected="${activeTab === 'stats'}">
              <span class="tab-icon">${placementIcons.stats}</span>
              <span class="tab-title">Placement Statistics</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'policy' ? 'active' : ''}" data-tab="policy" role="tab" aria-selected="${activeTab === 'policy'}">
              <span class="tab-icon">${placementIcons.policy}</span>
              <span class="tab-title">Placement Policy</span>
              <span class="tab-chevron">›</span>
            </button>
            <button type="button" class="coe-tab-btn ${activeTab === 'contact' ? 'active' : ''}" data-tab="contact" role="tab" aria-selected="${activeTab === 'contact'}">
              <span class="tab-icon">${placementIcons.contact}</span>
              <span class="tab-title">Corporate Cell &amp; Team</span>
              <span class="tab-chevron">›</span>
            </button>
          </nav>

          <!-- Sidebar Quick Helpline Box -->
          <div class="coe-sidebar-helpline">
            <div class="csh-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div class="csh-content">
              <span class="csh-label">CORPORATE PLACEMENT DESK</span>
              <a href="tel:04224099859" class="csh-phone">0422 – 4099859</a>
              <a href="tel:9442110336" class="csh-phone-alt">Mobile: 94421 10336</a>
              <span class="csh-time">Mon – Sat · 9:00 AM – 5:00 PM</span>
            </div>
          </div>
        </aside>

        <!-- Right Content Area with Tab Panes -->
        <div class="coe-portal-content">

          <!-- TAB 1: PLACEMENT HIGHLIGHTS & SALARY TIERS -->
          <div id="coe-pane-highlights" class="coe-tab-pane ${activeTab === 'highlights' ? 'is-active' : ''}">
            <div class="coe-pane-card">
              <div class="coe-pane-head">
                <span class="coe-pane-kicker">BATCH 2025–2026 OFFICIAL PLACEMENT MILESTONES</span>
                <h2>Annual Placement Highlights &amp; Salary Tiers</h2>
              </div>

              <!-- Interactive Highlights Panel -->
              <div class="placement-v2-panel ps-right-card" style="margin: 0 0 24px;">
                <!-- Centered Executive Heading Group (COE Template Language) -->
                <div class="placement-heading-group">
                  <div class="coe-exec-kicker-row" style="justify-content: center; margin-bottom: 6px;">
                    <span class="coe-kicker-gold">CENTRE FOR CAREER DEVELOPMENT</span>
                    <span class="coe-kicker-div">•</span>
                    <span class="coe-kicker-sub">OFFICIAL RECRUITMENT PORTAL</span>
                  </div>
                  
                  <div class="coe-exec-status-group" style="justify-content: center; margin-bottom: 12px;">
                    <span class="coe-status-pill">
                      <span class="status-pulse"></span>
                      <span>CORPORATE RELATIONS CELL</span>
                    </span>
                    <span class="coe-status-tag">BATCH 2025–2026</span>
                  </div>

                  <h2 class="placement-main-heading">
                    <span class="heading-white">Placement</span> <span class="heading-gold">Highlights</span>
                  </h2>

                  <div class="placement-subheading-row">
                    <span class="subheading-gold-line" aria-hidden="true"></span>
                    <span class="subheading-batch">2025 – 2026</span>
                    <span class="subheading-batch-tag">( BATCH 2025–2026 )</span>
                    <span class="subheading-gold-line" aria-hidden="true"></span>
                  </div>

                  <div class="placement-heading-motto">
                    <span class="motto-accent">★</span> TODAY. IMPACT TOMORROW. <span class="motto-accent">★</span>
                  </div>
                </div>

                <!-- 4 Standalone Interactive Statistic Cards in one row -->
                <div class="ps-standalone-cards-row" role="region" aria-label="Placement statistics by salary tier">
                  <!-- Card 01 -->
                  <article class="ps-stat-card" role="button" tabindex="0" data-tier="10" aria-haspopup="dialog" aria-label="₹10 LPA+ Tier: 26+ Students Placed. Click to explore offers and recruiters">
                    <div class="ps-stat-card-glow" aria-hidden="true"></div>
                    <div class="ps-stat-icon-circle">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div class="ps-stat-pill">₹10 LPA+</div>
                    <strong class="ps-stat-count"><span class="js-counter" data-to="26" data-suffix="+">26+</span></strong>
                    <span class="ps-stat-label">STUDENTS PLACED</span>
                    <span class="ps-stat-action">
                      <span>Explore Tier</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                    </span>
                  </article>

                  <!-- Card 02 -->
                  <article class="ps-stat-card" role="button" tabindex="0" data-tier="6" aria-haspopup="dialog" aria-label="₹6 LPA+ Tier: 98+ Students Placed. Click to explore offers and recruiters">
                    <div class="ps-stat-card-glow" aria-hidden="true"></div>
                    <div class="ps-stat-icon-circle">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    </div>
                    <div class="ps-stat-pill">₹6 LPA+</div>
                    <strong class="ps-stat-count"><span class="js-counter" data-to="98" data-suffix="+">98+</span></strong>
                    <span class="ps-stat-label">STUDENTS PLACED</span>
                    <span class="ps-stat-action">
                      <span>Explore Tier</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                    </span>
                  </article>

                  <!-- Card 03 -->
                  <article class="ps-stat-card" role="button" tabindex="0" data-tier="4" aria-haspopup="dialog" aria-label="₹4 LPA+ Tier: 226+ Students Placed. Click to explore offers and recruiters">
                    <div class="ps-stat-card-glow" aria-hidden="true"></div>
                    <div class="ps-stat-icon-circle">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                    </div>
                    <div class="ps-stat-pill">₹4 LPA+</div>
                    <strong class="ps-stat-count"><span class="js-counter" data-to="226" data-suffix="+">226+</span></strong>
                    <span class="ps-stat-label">STUDENTS PLACED</span>
                    <span class="ps-stat-action">
                      <span>Explore Tier</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                    </span>
                  </article>

                  <!-- Card 04 -->
                  <article class="ps-stat-card" role="button" tabindex="0" data-tier="3" aria-haspopup="dialog" aria-label="₹3 LPA+ Tier: 272+ Students Placed. Click to explore offers and recruiters">
                    <div class="ps-stat-card-glow" aria-hidden="true"></div>
                    <div class="ps-stat-icon-circle">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <div class="ps-stat-pill">₹3 LPA+</div>
                    <strong class="ps-stat-count"><span class="js-counter" data-to="272" data-suffix="+">272+</span></strong>
                    <span class="ps-stat-label">STUDENTS PLACED</span>
                    <span class="ps-stat-action">
                      <span>Explore Tier</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                    </span>
                  </article>
                </div>

                <!-- Centered Text Below Cards -->
                <div class="placement-cards-footer-text">
                  <span>SAME PEOPLE</span>
                  <span class="footer-sep" aria-hidden="true">|</span>
                  <span>BRIGHTER OPPORTUNITIES</span>
                  <span class="footer-sep" aria-hidden="true">|</span>
                  <span>A STRONGER TOMORROW</span>
                </div>
              </div>

              <!-- Quick Highlights Summary Grid -->
              <div class="coe-stat-card-row" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); margin-top: 20px;">
                <div class="coe-mini-stat" style="text-align: left; padding: 18px 20px;">
                  <strong style="color: #0b7a48; font-size: 24px;">₹24.00 LPA</strong>
                  <span style="font-weight: 700; color: #1e293b; font-size: 13px;">Highest CTC Offered</span>
                  <small style="color: #64748b;">Global Product Giant</small>
                </div>
                <div class="coe-mini-stat" style="text-align: left; padding: 18px 20px;">
                  <strong style="color: #0b7a48; font-size: 24px;">200+</strong>
                  <span style="font-weight: 700; color: #1e293b; font-size: 13px;">Visiting Recruiters</span>
                  <small style="color: #64748b;">MNCs, Startups &amp; Core Units</small>
                </div>
                <div class="coe-mini-stat" style="text-align: left; padding: 18px 20px;">
                  <strong style="color: #0b7a48; font-size: 24px;">90%+</strong>
                  <span style="font-weight: 700; color: #1e293b; font-size: 13px;">Consistent Placement</span>
                  <small style="color: #64748b;">Across All Engg Branches</small>
                </div>
                <div class="coe-mini-stat" style="text-align: left; padding: 18px 20px;">
                  <strong style="color: #0b7a48; font-size: 24px;">620+</strong>
                  <span style="font-weight: 700; color: #1e293b; font-size: 13px;">Total Offers Extended</span>
                  <small style="color: #64748b;">Multiple Offers per Candidate</small>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 2: TOP RECRUITERS & CORPORATE PARTNERS -->
          <div id="coe-pane-recruiters" class="coe-tab-pane ${activeTab === 'recruiters' ? 'is-active' : ''}">
            <div class="coe-pane-card">
              <div class="coe-pane-head">
                <span class="coe-pane-kicker">INDUSTRY COLLABORATIONS &amp; PARTNERS</span>
                <h2>Global Corporate Recruiters</h2>
              </div>
              <p style="color: #475569; font-size: 14.5px; line-height: 1.7; margin-bottom: 24px;">
                Sri Shakthi Institute of Engineering and Technology maintains enduring recruitment partnerships with marquee technology conglomerates, Tier-1 consulting enterprises, and industry leaders who conduct annual on-campus hiring drives.
              </p>

              <!-- Recruiter Categories Bento -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 24px;">
                <div style="background: #f8faf9; border: 1px solid #d1fae5; border-left: 4px solid #0b7a48; padding: 18px; border-radius: 8px;">
                  <span style="font-size: 11px; font-weight: 800; color: #0b7a48; letter-spacing: 1px; text-transform: uppercase;">PRODUCT GIANTS</span>
                  <h4 style="margin: 6px 0 10px; color: #022b1c; font-size: 16px;">Software &amp; High-Tech</h4>
                  <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">
                    Zoho Corporation, Microsoft, Cisco Systems, ThoughtWorks, Hexaware Technologies, Target Corporation, Virtusa.
                  </p>
                </div>
                <div style="background: #f8faf9; border: 1px solid #fef3c7; border-left: 4px solid #cca01d; padding: 18px; border-radius: 8px;">
                  <span style="font-size: 11px; font-weight: 800; color: #cca01d; letter-spacing: 1px; text-transform: uppercase;">GLOBAL IT SERVICES</span>
                  <h4 style="margin: 6px 0 10px; color: #022b1c; font-size: 16px;">Tier-1 Consultancies</h4>
                  <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">
                    Tata Consultancy Services (TCS), Cognizant (CTS), Infosys, Wipro Technologies, Accenture, Capgemini, Tech Mahindra.
                  </p>
                </div>
                <div style="background: #f8faf9; border: 1px solid #e0e7ff; border-left: 4px solid #4f46e5; padding: 18px; border-radius: 8px;">
                  <span style="font-size: 11px; font-weight: 800; color: #4f46e5; letter-spacing: 1px; text-transform: uppercase;">CORE &amp; AUTOMOTIVE</span>
                  <h4 style="margin: 6px 0 10px; color: #022b1c; font-size: 16px;">Industrial Engineering</h4>
                  <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">
                    Robert Bosch, Larsen &amp; Toubro (L&amp;T), Caterpillar, Hyundai Mobis, TVS Motors, Titan Industries, Ashok Leyland.
                  </p>
                </div>
              </div>

              <!-- Recruiter Highlights Strip -->
              <div style="background: #eef7f2; border: 1px solid rgba(11, 122, 72, 0.2); border-radius: 10px; padding: 20px; text-align: center;">
                <h4 style="color: #004d2e; margin: 0 0 10px; font-size: 16px;">200+ Premier Corporate Placement Partners</h4>
                <p style="color: #334155; font-size: 13.5px; margin: 0 0 14px;">
                  Our graduates have contributed to top enterprise products, scaled distributed clouds, architected embedded firmware, and accelerated industrial automation globally.
                </p>
                <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;">
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>Microsoft</b></span>
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>Zoho</b></span>
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>Cisco</b></span>
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>TCS Digital</b></span>
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>Cognizant GenC</b></span>
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>Infosys</b></span>
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>Wipro</b></span>
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>Bosch</b></span>
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>L&amp;T</b></span>
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>Hexaware</b></span>
                  <span class="coe-pillar-chip" style="background: #ffffff; border-color: #cbd5e1; color: #0f172a;"><b>Caterpillar</b></span>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 3: TRAINING ECOSYSTEM & ROADMAP -->
          <div id="coe-pane-training" class="coe-tab-pane ${activeTab === 'training' ? 'is-active' : ''}">
            <div class="coe-pane-card">
              <div class="coe-pane-head">
                <span class="coe-pane-kicker">STRUCTURED 4-YEAR PROGRESSIVE PREPARATION</span>
                <h2>Industry Readiness &amp; Training Ecosystem</h2>
              </div>
              <p style="color: #475569; font-size: 14.5px; line-height: 1.7; margin-bottom: 24px;">
                Placement readiness at Sri Shakthi is integrated into the student journey starting from the first semester. Our 4-year progressive roadmap bridges academic curricula with industry practices.
              </p>

              <div class="curr-phases-grid">
                ${placementTrainingRoadmap.map((p, idx) => `
                  <div class="curr-phase-card">
                    <div class="curr-phase-head">
                      <span class="curr-phase-tag">${p.sem}</span>
                      <h4>${p.title}</h4>
                    </div>
                    <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0 0 12px;">${p.desc}</p>
                    <ul style="margin: 0; padding-left: 18px; font-size: 12.5px; color: #1e293b; line-height: 1.7;">
                      ${p.modules.map(m => `<li>${m}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- TAB 4: PLACEMENT STATISTICS & DISTRIBUTION -->
          <div id="coe-pane-stats" class="coe-tab-pane ${activeTab === 'stats' ? 'is-active' : ''}">
            <div class="coe-pane-card">
              <div class="coe-pane-head">
                <span class="coe-pane-kicker">AUDITED RECRUITMENT METRICS · BATCH 2025–2026</span>
                <h2>Official Placement Salary Distribution</h2>
              </div>
              
              <table class="curr-table" style="font-size: 13px; width: 100%; margin-bottom: 24px;">
                <thead>
                  <tr>
                    <th>Salary Category</th>
                    <th>Compensation Band (CTC)</th>
                    <th style="text-align: center;">Students Placed</th>
                    <th>Select Visiting Corporate Partners</th>
                  </tr>
                </thead>
                <tbody>
                  ${placementStatsTable.map(row => `
                    <tr>
                      <td><b>${row.tier}</b></td>
                      <td style="color: #0b7a48; font-weight: 700;">${row.package}</td>
                      <td style="text-align: center;"><span class="siet-reg-badge-grade">${row.placed}</span></td>
                      <td style="font-size: 12.5px; color: #334155;">${row.recruiters}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>

              <div style="background: #f8faf9; border-radius: 8px; padding: 18px; border: 1px solid #e2e8f0;">
                <h4 style="margin: 0 0 8px; color: #022b1c; font-size: 15px;">Department-Wise Highlights</h4>
                <p style="margin: 0; font-size: 13px; color: #475569; line-height: 1.6;">
                  All NBA-accredited disciplines (Computer Science, Electronics &amp; Communication, Electrical &amp; Electronics, Mechanical, Biotechnology, Biomedical, Information Technology, and Agricultural Engineering) achieved over <b>90% placement conversion</b> for eligible registered students.
                </p>
              </div>
            </div>
          </div>

          <!-- TAB 5: PLACEMENT POLICY & CODE OF CONDUCT -->
          <div id="coe-pane-policy" class="coe-tab-pane ${activeTab === 'policy' ? 'is-active' : ''}">
            <div class="coe-pane-card">
              <div class="coe-pane-head">
                <span class="coe-pane-kicker">TRANSPARENT RECRUITMENT CODE OF ETHICS</span>
                <h2>Campus Placement Policy &amp; Code of Conduct</h2>
              </div>
              
              <blockquote style="font-size: 14.5px; line-height: 1.8; color: #004d2e; background: #eef7f2; border-left: 4px solid #cca01d; padding: 16px 20px; border-radius: 0 8px 8px 0; margin: 0 0 20px;">
                "The Placement Cell at Sri Shakthi operates on principles of absolute transparency, merit-first allocation, and equitable corporate access for all eligible undergraduate and postgraduate scholars."
              </blockquote>

              <div class="curr-phases-grid">
                <div class="curr-phase-card">
                  <div class="curr-phase-head">
                    <span class="curr-phase-tag">RULE 01</span>
                    <h4>Eligibility &amp; Registration</h4>
                  </div>
                  <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">
                    Students must have a minimum CGPA of 6.0 with no active standing arrears to register for on-campus corporate recruitment drives. Specific companies may enforce customized higher cut-offs.
                  </p>
                </div>
                <div class="curr-phase-card">
                  <div class="curr-phase-head">
                    <span class="curr-phase-tag">RULE 02</span>
                    <h4>One-Student-One-Job Normal &amp; Dream Offer</h4>
                  </div>
                  <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">
                    Upon securing an offer in the ₹3–5 LPA band, a student remains eligible to contest for a 'Dream Offer' (₹6+ LPA) or 'Super Dream Offer' (₹10+ LPA), maximizing student career potential.
                  </p>
                </div>
                <div class="curr-phase-card">
                  <div class="curr-phase-head">
                    <span class="curr-phase-tag">RULE 03</span>
                    <h4>Pre-Placement Talks &amp; Punctuality</h4>
                  </div>
                  <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">
                    Attendance at corporate pre-placement presentations (PPT) is mandatory for all registered candidates. Formal corporate attire and professional code of ethics are strictly enforced.
                  </p>
                </div>
                <div class="curr-phase-card">
                  <div class="curr-phase-head">
                    <span class="curr-phase-tag">RULE 04</span>
                    <h4>Offer Acceptance &amp; Onboarding</h4>
                  </div>
                  <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">
                    Selected scholars must submit their letter of acceptance through the Placement Desk within 48 hours of result announcement, ensuring seamless onboarding and background verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- TAB 6: CORPORATE RELATIONS CELL & CONTACT -->
          <div id="coe-pane-contact" class="coe-tab-pane ${activeTab === 'contact' ? 'is-active' : ''}">
            <div class="coe-pane-card">
              <div class="coe-pane-head">
                <span class="coe-pane-kicker">OFFICIAL CAREER DEVELOPMENT CELL</span>
                <h2>Corporate Relations Team &amp; Placement Officers</h2>
              </div>

              <!-- Team Grid -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 24px;">
                ${placementTeam.map(t => `
                  <div style="background: #f8faf9; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                      <h4 style="margin: 0; font-size: 15.5px; color: #022b1c;">${t.name}</h4>
                      <span class="coe-status-tag" style="font-size: 10px; padding: 3px 8px;">${t.badge}</span>
                    </div>
                    <div style="color: #0b7a48; font-weight: 700; font-size: 13px; margin-bottom: 4px;">${t.designation}</div>
                    <div style="color: #64748b; font-size: 12px;">${t.role} · ${t.qualification}</div>
                  </div>
                `).join('')}
              </div>

              <!-- Official Helpdesk Details -->
              <div style="background: #eef7f2; border-left: 4px solid #0b7a48; padding: 20px; border-radius: 0 10px 10px 0;">
                <h4 style="color: #004d2e; margin: 0 0 8px; font-size: 16px;">Corporate Invitations &amp; Campus Recruitment</h4>
                <p style="margin: 0 0 12px; font-size: 13.5px; color: #334155; line-height: 1.6;">
                  Corporate recruiters wishing to schedule physical or hybrid campus placements, hackathons, or technical internships are invited to reach out to our placement secretariat:
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; font-size: 13px; color: #1e293b;">
                  <div><b>Direct Phone:</b> 0422 – 4099859</div>
                  <div><b>Mobile Hotline:</b> +91 94421 10336 / 94421 10337</div>
                  <div><b>Working Hours:</b> Monday – Saturday · 9:00 AM – 5:00 PM</div>
                  <div><b>Location:</b> Career Development Center, Ground Floor, Academic Block</div>
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

export function bindPlacementEvents($, $$) {
  // Placement Portal Tab Switching (Referencing COE Template interaction)
  $$('.siet-placement-portal-page .coe-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      if (!targetTab) return;

      $$('.siet-placement-portal-page .coe-tab-btn').forEach(b => {
        const isSelected = b === btn;
        b.classList.toggle('active', isSelected);
        b.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      });

      $$('.siet-placement-portal-page .coe-tab-pane').forEach(pane => {
        pane.classList.toggle('is-active', pane.id === `coe-pane-${targetTab}`);
      });
    });
  });

  // Check URL query param tab on load (e.g. #/placements?tab=recruiters or #/placements?tab=stats)
  const hash = location.hash || '';
  const qIdx = hash.indexOf('?');
  if (qIdx !== -1) {
    const params = new URLSearchParams(hash.slice(qIdx + 1));
    const tab = params.get('tab');
    if (tab) {
      const targetBtn = $(`.siet-placement-portal-page .coe-tab-btn[data-tab="${tab}"]`);
      if (targetBtn) {
        targetBtn.click();
      }
    }
  }
}
