import { icon, deptIcon } from '../../components/common/SvgIcons.js';
import { ugPrograms, pgPrograms, bottomBannerHtml } from '../../data/programmesData.js';
import { programmeCards } from '../../components/cards/ProgrammeCard.js';

const counter = (to, suffix = '') => `<span class="js-counter" data-to="${to}" data-suffix="${suffix}">0${suffix}</span>`;

export function homePage() {
  return `<main class="home-page"><section class="home-impact-hero">
  <div class="home-impact-photo" aria-hidden="true"></div>
  <div class="home-impact-shade" aria-hidden="true"></div>
  <div class="home-impact-content reveal">
    <div class="home-impact-kicker"><span>LEARN</span><i></i><span>ACHIEVE</span></div>
    <h1>
      <span>POWERING</span>
      <strong>THE YOUTH</strong>
      <span>EMPOWERING</span>
      <strong>THE NATION</strong>
    </h1>
    <div class="home-impact-rule" aria-hidden="true"></div>
    <p>Industry-aligned training, hands-on learning and a vibrant placement ecosystem that transforms engineering potential into meaningful careers.</p>
    <div class="home-impact-actions">
      <a class="home-impact-secondary" href="#/campus-life">Explore Campus <span>${icon('play')}</span></a>
      <button type="button" class="home-impact-360-btn js-open-techpark-360" aria-label="Explore Tech Park 360 View">
        <span class="impact-360-badge">360°</span>
        <span>Explore Tech Park 360°</span>
        <span class="impact-360-arrow" aria-hidden="true">→</span>
      </button>
    </div>
  </div>
</section>
<section class="about-premium">
  <div class="about-glow glow-one" aria-hidden="true"></div>
  <div class="about-glow glow-two" aria-hidden="true"></div>
  <div class="about-container">
    <div class="about-label reveal">
      <span>01</span>
      <span class="line" aria-hidden="true"></span>
      <p>WHO WE ARE</p>
    </div>
    <div class="about-main">
      <div class="about-heading reveal">
        <h2>A campus where <span class="highlight-word">curiosity</span> becomes <span>capability.</span></h2>
      </div>
      <div class="about-content reveal">
        <span class="about-small-title">OUR PURPOSE</span>
        <p>Sri Shakthi Institute of Engineering and Technology is an autonomous institution in Coimbatore, approved by AICTE and affiliated to Anna University.</p>
        <p>Our industry-driven ecosystem brings engineering out of textbooks and into the real world.</p>
        <button type="button" class="discover-link js-discover-btn">
          <span>Discover our vision</span>
          <span class="arrow-circle">${icon('arrow')}</span>
        </button>
      </div>
    </div>
    <div class="stats-grid">
      ${[[663, 'Total Placement Offers', 'Batch of 2025–2026', 'chart'], [213, 'Companies', 'Recruiting Partners', 'trend'], [10273, 'Alumni Worldwide', 'Connected Globally', 'connect'], [5984, 'Students on Campus', 'Learning & Innovating', 'grad']].map(([n, t, s, ic], i) => `
        <article class="stat-box reveal">
          <span class="stat-index">0${i + 1}</span>
          <span class="stat-icon" aria-hidden="true">${icon(ic)}</span>
          <h3>${counter(n, '+')}</h3>
          <p>${t}</p>
          <span class="stat-subtitle">${s}</span>
          <span class="stat-bottom-line" aria-hidden="true"></span>
        </article>
      `).join('')}
    </div>
  </div>
  <div class="bottom-gold-line" aria-hidden="true"></div>
</section>
<section class="programmes-showcase programmes-section">
  <div class="watermark-script bottom-script" aria-hidden="true">Engineers for a Better Tomorrow</div>
  <div class="programmes-container">
    <div class="programmes-hero-v2">
      <div class="programmes-left-col reveal">
        <div class="section-kicker">
          <span>02</span>
          <i></i>
          <span>FIND YOUR FIELD</span>
        </div>
        <h2 class="programmes-main-title">
          Programmes<br>built for a <em>changing</em> world.
        </h2>
        <p class="programmes-subtitle">
          Foundational rigour, advanced technology labs, industry collaboration and project-led learning.
        </p>
        <div class="programme-toggle-pill">
          <button class="toggle-btn active" data-level="UG" type="button">UG Programmes</button>
          <button class="toggle-btn" data-level="PG" type="button">PG Programmes</button>
        </div>
        <div style="margin-top: 14px;">
          <a href="#/programmes" class="view-all-programmes-btn">View All UG &amp; PG Programmes &rarr;</a>
        </div>
      </div>
      <div class="programmes-feature-card reveal">
        <div class="feature-card-content">
          <span class="feature-icon-badge">${deptIcon('lightning')}</span>
          <h3 class="feature-card-title">Learn Today<br>Build Tomorrow</h3>
          <p class="feature-card-desc">
            Explore industry-relevant programmes designed to create future-ready engineers and innovators.
          </p>
          <button type="button" class="feature-action-btn js-scroll-programmes">
            <span class="feature-arrow-btn">→</span>
            <span>Discover Your Path</span>
          </button>
        </div>
        <div class="feature-card-visual">
          <div class="feature-arch-frame">
            <img src="/brand/techpark-local.png" alt="Sri Shakthi Tech Park" width="360" height="270" loading="lazy">
          </div>
          <div class="feature-stat-pill">
            <span class="stat-chart-icon">${deptIcon('chart')}</span>
            <div class="stat-pill-info">
              <strong id="prog-count-badge">14+</strong>
              <span id="prog-level-badge">UG Programmes</span>
              <small>Across Emerging Domains</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="programme-grid-container">
      <div id="programme-grid" class="programme-grid-v2">
        ${programmeCards(ugPrograms)}
        ${bottomBannerHtml}
      </div>
    </div>
  </div>
</section>
<section class="campus-section">
  <!-- Top-Right Background Accent -->

  <div class="campus-container">
    <aside class="campus-left reveal">
      <div class="campus-eyebrow">
        <span class="eyebrow-num">03</span>
        <span class="eyebrow-dash">—</span>
        <span class="eyebrow-text">LIFE AT SRI SHAKTHI</span>
      </div>
      <h1 class="campus-heading">Campus<br>Moments.<br><em>Student stories.</em></h1>
      <p class="campus-desc">Explore learning, innovation, celebrations and everyday campus experiences from the Sri Shakthi community.</p>
      
      <div class="campus-actions">
        <button type="button" class="campus-btn-primary js-explore-campus">Explore campus ${icon('arrow')}</button>
        <button type="button" class="campus-video-btn js-video">
          <span class="video-circle-icon">${icon('play')}</span>
          <span class="video-label-text">Watch<br>our story</span>
        </button>
      </div>

      <div class="campus-bottom-sketch-wrap" aria-hidden="true">
        <div class="campus-sketch-graphic"></div>
        <div class="campus-people-footer">PEOPLE <i>|</i> IDEAS <i>|</i> IMPACT <span class="footer-gold-bar"></span></div>
      </div>
    </aside>

    <main class="campus-content">
      <div class="campus-gallery-v2">
        <!-- Card 01: Student Life -->
        <article class="campus-card-v2 card-01 reveal" role="button" tabindex="0">
          <span class="card-index">01</span>
          <span class="card-floating-badge badge-green">${icon('grad')}</span>
          <img src="/brand/campus-life/student-life.png" alt="Student Life at Sri Shakthi" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-mint"></i>
                <h4 class="card-title">Student Life</h4>
              </div>
              <p class="card-subtitle">A campus that inspires every day.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>

        <!-- Card 02: Sports & Recreation -->
        <article class="campus-card-v2 card-02 reveal" role="button" tabindex="0">
          <span class="card-index">02</span>
          <span class="card-floating-badge badge-sand">${icon('runner')}</span>
          <img src="/brand/campus-life/sports.png" alt="Sports & Recreation" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-gold"></i>
                <h4 class="card-title">Sports & Recreation</h4>
              </div>
              <p class="card-subtitle">Victory is a habit here.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>

        <!-- Card 03: Innovation -->
        <article class="campus-card-v2 card-03 reveal" role="button" tabindex="0">
          <span class="card-index">03</span>
          <span class="card-floating-badge badge-yellow">${icon('bulb')}</span>
          <img src="/brand/campus-life/innovation.png" alt="Innovation & Labs" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-amber"></i>
                <h4 class="card-title">Innovation</h4>
              </div>
              <p class="card-subtitle">Ideas that create impact.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>

        <!-- Card 04: Culture & Arts -->
        <article class="campus-card-v2 card-04 reveal" role="button" tabindex="0">
          <span class="card-index">04</span>
          <span class="card-floating-badge badge-sand">${icon('masks')}</span>
          <img src="/brand/campus-life/cultural.png" alt="Culture & Arts" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-orange"></i>
                <h4 class="card-title">Culture & Arts</h4>
              </div>
              <p class="card-subtitle">Tradition. Creativity. Every performance.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>

        <!-- Card 05: Learning & Growth -->
        <article class="campus-card-v2 card-05 reveal" role="button" tabindex="0">
          <span class="card-index">05</span>
          <span class="card-floating-badge badge-mint">${icon('users')}</span>
          <img src="/brand/campus-life/learning-growth.png" alt="Learning & Growth" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-mint"></i>
                <h4 class="card-title">Learning & Growth</h4>
              </div>
              <p class="card-subtitle">Today's learners. Tomorrow's leaders.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>

        <!-- Card 06: Our Campus -->
        <article class="campus-card-v2 card-06 reveal" role="button" tabindex="0">
          <span class="card-index">06</span>
          <span class="card-floating-badge badge-leaf">${icon('leaf')}</span>
          <img src="/brand/techpark-local.png" alt="Sri Shakthi Tech Park & Campus" loading="lazy">
          <div class="card-bottom-overlay">
            <div class="card-info-side">
              <div class="card-title-row">
                <i class="cat-accent-bar bar-green"></i>
                <h4 class="card-title">Our Campus</h4>
              </div>
              <p class="card-subtitle">A greener, brighter tomorrow.</p>
            </div>
            <span class="card-circle-arrow">→</span>
          </div>
        </article>
      </div>

    </main>
  </div>
</section>

<!-- Section 04: Special Labs (Advanced Labs for a Brighter Tomorrow) -->
<section class="special-labs-section" id="special-labs">

  <div class="labs-container">
    <!-- Left Column: Eyebrow, Heading, Description, CTA, Watermark, Footer -->
    <aside class="labs-left reveal">
      <div class="labs-eyebrow">
        <span class="eyebrow-num">04</span>
        <span class="eyebrow-dash">—</span>
        <span class="eyebrow-text">SPECIAL LABS</span>
      </div>
      <h2 class="labs-heading">
        Advanced<br>
        Labs for a<br>
        <em>Brighter<br>Tomorrow.</em>
      </h2>
      <p class="labs-desc">
        State-of-the-art laboratories to explore, experiment and innovate — empowering students with hands-on experience for real-world impact.
      </p>

      <div class="labs-actions">
        <a href="#/centres-of-excellence" class="labs-btn-primary">Explore Our Labs →</a>
      </div>

      <div class="labs-script-watermark" aria-hidden="true">
        <span>Learn &#10003;</span>
        <span>Experiment</span>
        <span>Innovate</span>
        <svg class="script-curve-line" width="96" height="12" viewBox="0 0 96 12" fill="none">
          <path d="M2 10C32 3 70 2 94 8" stroke="#d4a300" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="labs-bottom-sketch-wrap" aria-hidden="true">
        <div class="campus-people-footer">PEOPLE <i>|</i> IDEAS <i>|</i> IMPACT <span class="footer-gold-bar"></span></div>
      </div>
    </aside>

    <!-- Right Column: Top Bar + 8-Card 4x2 Grid + Bottom Stats Row -->
    <main class="labs-content">
      <!-- 8-Card 4x2 Gallery Grid -->
      <div class="labs-gallery-grid">
        <!-- Card 01: AI Lab -->
        <article class="lab-card card-01 reveal" role="button" tabindex="0" data-cat="emerging" aria-label="01 AI Lab - Explore intelligent solutions for tomorrow.">
          <img src="/brand/special-labs/lab-ai-hd.jpg" alt="01 AI Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 02: Cyber & Cloud Lab -->
        <article class="lab-card card-02 reveal" role="button" tabindex="0" data-cat="emerging" aria-label="02 Cyber & Cloud Lab - Secure today. Scale tomorrow.">
          <img src="/brand/special-labs/lab-cyber-cloud-hd.jpg" alt="02 Cyber & Cloud Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 03: VLSI Lab -->
        <article class="lab-card card-03 reveal" role="button" tabindex="0" data-cat="core" aria-label="03 VLSI Lab - Designing the next generation chips.">
          <img src="/brand/special-labs/lab-vlsi-hd.jpg" alt="03 VLSI Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 04: Embedded Systems Lab -->
        <article class="lab-card card-04 reveal" role="button" tabindex="0" data-cat="core" aria-label="04 Embedded Systems Lab - Build. Integrate. Innovate.">
          <img src="/brand/special-labs/lab-embedded-hd.jpg" alt="04 Embedded Systems Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 05: IoT Lab -->
        <article class="lab-card card-05 reveal" role="button" tabindex="0" data-cat="emerging" aria-label="05 IoT Lab - Connect ideas to a smarter world.">
          <img src="/brand/special-labs/lab-iot-hd.jpg" alt="05 IoT Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 06: AR & VR Lab -->
        <article class="lab-card card-06 reveal" role="button" tabindex="0" data-cat="design" aria-label="06 AR & VR Lab - Experience. Create. Go Beyond.">
          <img src="/brand/special-labs/lab-ar-vr-hd.jpg" alt="06 AR & VR Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 07: PCB Design & Assembly Lab -->
        <article class="lab-card card-07 reveal" role="button" tabindex="0" data-cat="core" aria-label="07 PCB Design & Assembly Lab - From design to real-world prototypes.">
          <img src="/brand/special-labs/lab-pcb-hd.jpg" alt="07 PCB Design & Assembly Lab" loading="lazy" decoding="async">
        </article>

        <!-- Card 08: Robotics & Automation Lab -->
        <article class="lab-card card-08 reveal" role="button" tabindex="0" data-cat="design" aria-label="08 Robotics & Automation Lab - Ideate. Build. Automate.">
          <img src="/brand/special-labs/lab-robotics-hd.jpg" alt="08 Robotics & Automation Lab" loading="lazy" decoding="async">
        </article>
      </div>

      <!-- Bottom Floating Stats Row (Centered underneath the 4-column gallery) -->
      <div class="labs-bottom-row reveal">
        <div class="labs-stats-pill">
          <div class="lab-stat-item">
            <span class="lab-stat-icon badge-flask">${icon('flask')}</span>
            <div class="lab-stat-text">
              <strong>8</strong>
              <small>Specialized Labs</small>
            </div>
          </div>
          <span class="stats-item-divider" aria-hidden="true"></span>
          <div class="lab-stat-item">
            <span class="lab-stat-icon badge-users">${icon('users')}</span>
            <div class="lab-stat-text">
              <strong>${counter(500, '+')}</strong>
              <small>Students Trained</small>
            </div>
          </div>
          <span class="stats-item-divider" aria-hidden="true"></span>
          <div class="lab-stat-item">
            <span class="lab-stat-icon badge-bulb">${icon('bulb')}</span>
            <div class="lab-stat-text">
              <strong>${counter(100, '+')}</strong>
              <small>Projects & Innovations</small>
            </div>
          </div>
          <span class="stats-item-divider" aria-hidden="true"></span>
          <div class="lab-stat-item">
            <span class="lab-stat-icon badge-industry">${icon('industry')}</span>
            <div class="lab-stat-text">
              <strong>${counter(20, '+')}</strong>
              <small>Industry Collaborations</small>
            </div>
          </div>
        </div>

        <a href="#/centres-of-excellence" class="labs-cta-banner" aria-label="Explore labs and centres of excellence">
          <div class="labs-banner-copy">
            <strong>Labs Today.</strong>
            <span>Leaders Tomorrow.</span>
          </div>
          <span class="labs-banner-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  </div>

  <div class="labs-section-footer" aria-hidden="true">
    <span>A STRONGER TOMORROW THROUGH INNOVATION</span>
    <span class="footer-gold-bar"></span>
  </div>
</section>

<!-- Section 06: News & Events (What's Happening at Sri Shakthi) -->
<section class="news-events-section" id="news-events">
  <div class="events-arc-circle arc-1" aria-hidden="true"></div>

  <div class="events-container">
    <!-- Top Row: Left Heading & Right Featured Event Card -->
    <div class="events-hero-row">
      <!-- Left Column: Eyebrow, Heading, Desc, CTA, Avatars -->
      <div class="events-left-col reveal">
        <div class="events-eyebrow">
          <span class="eyebrow-num">05</span>
          <span class="eyebrow-dash">—</span>
          <span class="eyebrow-text">NEWS &amp; EVENTS</span>
        </div>
        <h2 class="events-heading">
          What's<br>
          Happening<br>
          <em>at Sri Shakthi.</em>
        </h2>
        <p class="events-desc">
          Stay updated with the latest events, achievements and opportunities across our campus community.
        </p>

        <a href="#/campus-life" class="events-btn-primary">View All Events →</a>

        <div class="events-community-pill">
          <div class="community-avatars">
            <img src="/brand/campus-life/student-life.png" alt="Student" class="avatar-circle">
            <img src="/brand/campus-life/placements.png" alt="Student" class="avatar-circle">
            <img src="/brand/campus-life/learning-growth.png" alt="Student" class="avatar-circle">
            <span class="avatar-plus">+</span>
          </div>
          <div class="community-text">
            <strong>A vibrant campus.</strong>
            <span>A happening community.</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Large Featured Event Card -->
      <div class="events-featured-card reveal">
        <div class="featured-bg-photo" style="background-image: url('/brand/events/featured-technovate-hd.jpg');"></div>
        <div class="featured-overlay-content">
          <div class="featured-left-info">
            <span class="featured-gold-badge">★ Featured Event</span>
            <h3 class="featured-title">TechNovate 2026</h3>
            <span class="featured-sub-tag">TECHNICAL SYMPOSIUM</span>
            <p class="featured-summary">
              A platform to ideate, innovate and build solutions for a better tomorrow. Join us for a day of learning, networking and inspiration.
            </p>

            <div class="featured-meta-list">
              <div class="featured-meta-row">
                <span class="meta-icon">${icon('calendar')}</span>
                <span>28 Aug 2026</span>
              </div>
              <div class="featured-meta-row">
                <span class="meta-icon">${icon('pin')}</span>
                <span>Main Auditorium</span>
              </div>
              <div class="featured-meta-row">
                <span class="meta-icon">${icon('clock')}</span>
                <span>09:00 AM - 05:00 PM</span>
              </div>
            </div>

            <a href="#/campus-life" class="featured-know-more-btn">Know More →</a>
          </div>

          <div class="featured-nav-controls" aria-hidden="true">
            <button type="button" class="featured-arrow-btn prev-feat" aria-label="Previous featured event">${icon('prev')}</button>
            <span class="featured-counter">01 / 03</span>
            <button type="button" class="featured-arrow-btn next-feat" aria-label="Next featured event">${icon('next')}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Category Filter Tabs -->
    <div class="events-filter-bar reveal" role="tablist" aria-label="Event categories">
      <button class="event-filter-pill active" type="button" data-cat="all">${icon('grid')} All</button>
      <button class="event-filter-pill" type="button" data-cat="technical">${icon('gear')} Technical</button>
      <button class="event-filter-pill" type="button" data-cat="cultural">${icon('music')} Cultural</button>
      <button class="event-filter-pill" type="button" data-cat="workshops">${icon('users')} Workshops</button>
      <button class="event-filter-pill" type="button" data-cat="sports">${icon('cup')} Sports</button>
      <button class="event-filter-pill" type="button" data-cat="others">••• Others</button>
    </div>

    <!-- 3-Card Event Grid -->
    <div class="events-cards-grid">
      <!-- Card 1: Sangamam 2026 -->
      <article class="event-item-card reveal" role="button" tabindex="0" data-cat="cultural others">
        <div class="event-card-media">
          <div class="event-date-badge">
            <strong class="date-num">15</strong>
            <span class="date-month">SEP</span>
          </div>
          <img src="/brand/events/event-sangamam-hd.jpg" alt="Sangamam 2026 Cultural Event" width="1672" height="941" loading="lazy" decoding="async">
        </div>
        <div class="event-card-body">
          <span class="event-cat-tag tag-orange">CULTURAL EVENT</span>
          <h4 class="event-card-title">Sangamam 2026</h4>
          <p class="event-card-desc">Celebrating talent, tradition and togetherness.</p>
          <div class="event-card-footer">
            <div class="event-meta-info">
              <div class="meta-item"><span class="meta-ico">${icon('pin')}</span><span>Open Air Theatre</span></div>
              <div class="meta-item"><span class="meta-ico">${icon('clock')}</span><span>04:00 PM - 10:00 PM</span></div>
            </div>
            <span class="event-circle-arrow">→</span>
          </div>
        </div>
      </article>

      <!-- Card 2: Industry Connect & Career Day -->
      <article class="event-item-card reveal" role="button" tabindex="0" data-cat="technical workshops">
        <div class="event-card-media">
          <div class="event-date-badge">
            <strong class="date-num">22</strong>
            <span class="date-month">SEP</span>
          </div>
          <img src="/brand/events/event-industry-connect-hd.jpg" alt="Industry Connect & Career Day" width="1672" height="941" loading="lazy" decoding="async">
        </div>
        <div class="event-card-body">
          <span class="event-cat-tag tag-gold">CAREER EVENT</span>
          <h4 class="event-card-title">Industry Connect &amp; Career Day</h4>
          <p class="event-card-desc">Meet industry leaders, explore opportunities and shape your future.</p>
          <div class="event-card-footer">
            <div class="event-meta-info">
              <div class="meta-item"><span class="meta-ico">${icon('pin')}</span><span>Convention Centre</span></div>
              <div class="meta-item"><span class="meta-ico">${icon('clock')}</span><span>10:00 AM - 04:00 PM</span></div>
            </div>
            <span class="event-circle-arrow">→</span>
          </div>
        </div>
      </article>

      <!-- Card 3: Inter-Department Sports Meet -->
      <article class="event-item-card reveal" role="button" tabindex="0" data-cat="sports others">
        <div class="event-card-media">
          <div class="event-date-badge">
            <strong class="date-num">03</strong>
            <span class="date-month">OCT</span>
          </div>
          <img src="/brand/events/event-sports-meet-hd.jpg" alt="Inter-Department Sports Meet" width="1672" height="941" loading="lazy" decoding="async">
        </div>
        <div class="event-card-body">
          <span class="event-cat-tag tag-orange">SPORTS EVENT</span>
          <h4 class="event-card-title">Inter-Department Sports Meet</h4>
          <p class="event-card-desc">Play. Compete. Build stronger bonds.</p>
          <div class="event-card-footer">
            <div class="event-meta-info">
              <div class="meta-item"><span class="meta-ico">${icon('pin')}</span><span>Sports Complex</span></div>
              <div class="meta-item"><span class="meta-ico">${icon('clock')}</span><span>08:00 AM - 06:00 PM</span></div>
            </div>
            <span class="event-circle-arrow">→</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Bottom Floating Stats Row & CTA Banner -->
    <div class="events-bottom-row reveal">

      <div class="events-stats-pill">
        <div class="ev-stat-item">
          <span class="ev-stat-icon badge-cal">${icon('calendar')}</span>
          <div class="ev-stat-text">
            <strong>${counter(50, '+')}</strong>
            <small>Events Every Year</small>
          </div>
        </div>
        <span class="stats-item-divider" aria-hidden="true"></span>
        <div class="ev-stat-item">
          <span class="ev-stat-icon badge-users">${icon('users')}</span>
          <div class="ev-stat-text">
            <strong>${counter(8, 'K+')}</strong>
            <small>Student Participation</small>
          </div>
        </div>
        <span class="stats-item-divider" aria-hidden="true"></span>
        <div class="ev-stat-item">
          <span class="ev-stat-icon badge-cup">${icon('cup')}</span>
          <div class="ev-stat-text">
            <strong>${counter(25, '+')}</strong>
            <small>Clubs &amp; Communities</small>
          </div>
        </div>
        <span class="stats-item-divider" aria-hidden="true"></span>
        <div class="ev-stat-item">
          <span class="ev-stat-icon badge-star">${icon('star')}</span>
          <div class="ev-stat-text">
            <strong>${counter(100, '+')}</strong>
            <small>Achievements &amp; Recognitions</small>
          </div>
        </div>
      </div>

      <a href="#/campus-life" class="events-cta-banner" aria-label="Be part of what's next">
        <div class="events-banner-copy">
          <strong>Be Part</strong>
          <span>of What's Next.</span>
        </div>
        <span class="events-banner-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  </div>
</section>
</main>`}
