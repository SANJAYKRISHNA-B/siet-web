// Specialized Laboratories Directory Page (/labs)

import { labsList } from '../../data/labData.js';

export function labsPage() {
  return `
    <main class="labs-directory-page">
      <!-- Directory Hero (Matching SIET Institutional Hero Design) -->
      <header class="labs-dir-hero siet-vm-hero" aria-label="Specialized Laboratories Directory">
        <div class="siet-vm-hero-grid" aria-hidden="true"></div>
        <div class="siet-vm-hero-orb orb-one" aria-hidden="true"></div>
        <div class="siet-vm-hero-orb orb-two" aria-hidden="true"></div>

        <div class="lab-shell siet-vm-hero-content">
          <!-- Integrated Clean Breadcrumb inside Hero -->
          <div class="lab-hero-breadcrumb-bar reveal">
            <ol class="lab-breadcrumb-list">
              <li><a href="#/">Home</a></li>
              <li class="sep" aria-hidden="true">/</li>
              <li class="active" aria-current="page">Specialized Laboratories</li>
            </ol>
            <a href="#/special-labs" class="lab-back-btn" aria-label="Return to homepage section">
              <span class="back-arrow" aria-hidden="true">←</span>
              <span>Back to Home</span>
            </a>
          </div>

          <div class="labs-dir-hero-content reveal">
            <p class="siet-vm-kicker"><i></i> INNOVATION &amp; RESEARCH TESTBEDS</p>
            <h1 class="labs-dir-title">Specialized <em>Laboratories</em></h1>
            <p class="siet-vm-intro labs-dir-subtitle">
              Eight dedicated industry-grade research and experimentation suites equipping Sri Shakthi engineers to master artificial intelligence, cloud defense, chip design, embedded firmware, IoT, spatial computing, PCB fabrication, and robotics.
            </p>

            <div class="labs-dir-stats-row">
              <div class="dir-stat-item">
                <strong>8</strong>
                <span>Specialized Labs</span>
              </div>
              <span class="dir-stat-sep" aria-hidden="true"></span>
              <div class="dir-stat-item">
                <strong>500+</strong>
                <span>Students Trained Yearly</span>
              </div>
              <span class="dir-stat-sep" aria-hidden="true"></span>
              <div class="dir-stat-item">
                <strong>100+</strong>
                <span>Active Innovations</span>
              </div>
              <span class="dir-stat-sep" aria-hidden="true"></span>
              <div class="dir-stat-item">
                <strong>20+</strong>
                <span>Industry Collaborations</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Laboratories Showcase Grid Section -->
      <section class="labs-dir-catalog-section" id="catalog">
        <div class="lab-shell">
          
          <div class="labs-dir-filter-bar reveal" role="tablist" aria-label="Filter laboratories">
            <button type="button" class="lab-dir-filter-pill active" data-filter="all">All Labs (8)</button>
            <button type="button" class="lab-dir-filter-pill" data-filter="emerging">Emerging Tech</button>
            <button type="button" class="lab-dir-filter-pill" data-filter="core">Core Hardware</button>
            <button type="button" class="lab-dir-filter-pill" data-filter="design">Robotics &amp; XR</button>
          </div>

          <div class="labs-directory-grid">
            ${labsList.map(lab => `
              <article class="labs-dir-card reveal" data-category="${lab.categoryKey}">
                <a href="#/labs/${lab.slug}" class="dir-card-media-wrap" aria-label="Open ${lab.name} profile">
                  <img 
                    src="${lab.image}" 
                    alt="${lab.name}" 
                    loading="lazy" 
                    decoding="async"
                    onerror="this.src='/brand/campus-arch.jpg'"
                  >
                  <span class="dir-card-num-badge">${lab.id}</span>
                  <span class="dir-card-badge ${lab.categoryBadgeClass}">${lab.category}</span>
                </a>

                <div class="dir-card-body">
                  <div class="dir-card-title-row">
                    <span class="dir-accent-line" style="background: ${lab.accentColor};" aria-hidden="true"></span>
                    <h3 class="dir-card-title">
                      <a href="#/labs/${lab.slug}">${lab.name}</a>
                    </h3>
                  </div>

                  <p class="dir-card-tagline">${lab.tagline}</p>
                  <p class="dir-card-desc">${lab.metaSummary}</p>

                  <div class="dir-card-meta">
                    <span class="dir-meta-tag">⚡ ${lab.capacity}</span>
                    <span class="dir-meta-tag">🏛️ ${lab.department}</span>
                  </div>

                  <div class="dir-card-footer">
                    <a href="#/labs/${lab.slug}" class="dir-explore-btn">
                      <span>View Dedicated Lab Page</span>
                      <span class="explore-arrow" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            `).join('')}
          </div>

        </div>
      </section>

      <!-- Bottom Institutional Banner -->
      <section class="labs-dir-bottom-banner">
        <div class="lab-shell">
          <div class="labs-banner-inner reveal">
            <div class="banner-text">
              <h3>Empowering Next-Generation Engineers</h3>
              <p>Explore our laboratories, schedule an on-campus demonstration, or collaborate with departmental research teams.</p>
            </div>
            <div class="banner-actions">
              <a href="#/contact" class="lab-btn lab-btn-primary">Schedule Campus Visit →</a>
              <a href="#/curriculum" class="lab-btn lab-btn-secondary">Explore Academic Syllabi</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
