import { icon } from '../components/common/SvgIcons.js';
import { counter } from '../utils/dom.js';

export function placementHighlightsCardInner() {
  return `
    <!-- Centered Heading Group (Referencing COE Template Architecture) -->
    <div class="placement-heading-group">
      <div class="coe-exec-kicker-row" style="justify-content: center; margin-bottom: 6px;">
        <span class="coe-kicker-gold">CENTRE FOR CAREER DEVELOPMENT</span>
        <span class="coe-kicker-div">•</span>
        <span class="coe-kicker-sub">OFFICIAL RECRUITMENT CELL</span>
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
          ${icon('ps-users')}
        </div>
        <div class="ps-stat-pill">₹10 LPA+</div>
        <strong class="ps-stat-count">${counter(26, '+')}</strong>
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
          ${icon('ps-chart')}
        </div>
        <div class="ps-stat-pill">₹6 LPA+</div>
        <strong class="ps-stat-count">${counter(98, '+')}</strong>
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
          ${icon('ps-diploma')}
        </div>
        <div class="ps-stat-pill">₹4 LPA+</div>
        <strong class="ps-stat-count">${counter(226, '+')}</strong>
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
          ${icon('ps-briefcase')}
        </div>
        <div class="ps-stat-pill">₹3 LPA+</div>
        <strong class="ps-stat-count">${counter(272, '+')}</strong>
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
  `;
}

const placementLogos = [
  { name: 'Cognizant', file: 'Cognizant-logo.png', line: 1 },
  { name: 'Zoho', file: 'zoho-logo.png', line: 2 },
  { name: 'ConverSight', file: 'Conver-sight-logo.png', line: 1 },
  { name: 'Presidio', file: 'Presido-logo.png', line: 2 },
  { name: 'ServiceNow', file: 'servicenow-logo.png', line: 2 },
  { name: 'Nallas', file: 'nallas-logo.png', line: 1 },
  { name: 'ITC Limited', file: 'ITC-limited-logo.png', line: 2 },
  { name: 'nference', file: 'nference-logo.png', line: 1 },
  { name: 'ZyNerd', file: 'Zynerd-logo.png', line: 2 },
  { name: 'Retail AI', file: 'Retail-ai-logo.png', line: 1 },
  { name: 'Mr. Copper', file: 'mr-copper-logo.png', line: 2 },
  { name: 'Vakilsearch', file: 'Vakil-search-logo.png', line: 1 },
  { name: 'Conserve', file: 'conserve-logo.png', line: 2 },
  { name: 'Vendasta', file: 'vendasta-logo.png', line: 2 },
  { name: 'Abluva', file: 'Abluva-logo.png', line: 1 },
  { name: 'Zentron Labs', file: 'Zentron-labs-logo.png', line: 2 },
  { name: 'Adya', file: 'Adya-logo.png', line: 1 },
  { name: 'Auriseg', file: 'Auriseg-logo.png', line: 1 }
];

export function placementMarqueeSection() {
  const renderLogos = (items) => items.map(item => `
    <div class="placement-marquee-item" data-logo="${item.file.replace('-logo.png', '').toLowerCase()}">
      <img src="/brand/placement-company-logo/line-${item.line}/${item.file}" alt="${item.name} logo" class="placement-marquee-logo" loading="eager" decoding="async">
    </div>
  `).join('');

  const logosHtml = renderLogos(placementLogos);

  return `
    <section class="placement-marquee-section" aria-label="Recruiting Partners and Placement Companies">
      <div class="placement-marquee-shell">
        <div class="placement-marquee-row placement-marquee-single-line" aria-label="Partner Companies">
          <div class="placement-marquee-track">
            <div class="placement-marquee-group">
              ${logosHtml}
            </div>
            <div class="placement-marquee-group" aria-hidden="true">
              ${logosHtml}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
