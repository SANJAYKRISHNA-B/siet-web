// Lab Hero & Showcase Component
// Top Header (Photo 2): Green Institutional Sub-Header with Breadcrumbs & Back Button
// Showcase Section (Photo 3): Clean White Section with Green Accents, Title, Metadata, CTAs, and Photo Card
import { formatVmTitle } from '../../../components/common/HudHeader.js';

export function renderLabHero(lab) {
  const formattedTitle = formatVmTitle(lab.name);

  return `
    <!-- Top Green Institutional Header Banner (Photo 2 / Breadcrumbs & Navigation) -->
    <header class="lab-header-banner siet-vm-hero" aria-label="${lab.name} Navigation Header">
      <div class="siet-vm-hero-grid" aria-hidden="true"></div>
      <div class="siet-vm-hero-orb orb-one" aria-hidden="true"></div>
      <div class="siet-vm-hero-orb orb-two" aria-hidden="true"></div>

      <div class="lab-shell siet-vm-hero-content">
        <!-- Integrated Clean Breadcrumb & Back Bar inside Green Header (Photo 2) -->
        <div class="lab-hero-breadcrumb-bar reveal">
          <ol class="lab-breadcrumb-list">
            <li><a href="#/">Home</a></li>
            <li class="sep" aria-hidden="true">/</li>
            <li class="active" aria-current="page">${lab.name}</li>
          </ol>
          <a href="#/special-labs" class="lab-back-btn" aria-label="Return to specialized laboratories section">
            <span class="back-arrow" aria-hidden="true">←</span>
            <span>Back to Labs</span>
          </a>
        </div>
      </div>
    </header>

    <!-- Lab Showcase Section (Photo 3 — Clean White Background with Green & Gold Accents) -->
    <section class="lab-section lab-showcase-section" aria-label="${lab.name} Facility Details">
      <div class="lab-shell">
        <div class="lab-hero-grid">
          
          <!-- Left Column: Kicker, Title, Subtitle, Copy, Metadata & Action CTAs -->
          <div class="lab-hero-copy reveal">
            <div class="lab-showcase-kicker-row">
              <span class="lab-showcase-kicker-text">— SRI SHAKTHI SPECIALIZED LABORATORY · 0${lab.id}</span>
              <span class="lab-hero-cat-tag ${lab.categoryBadgeClass}">${lab.category}</span>
            </div>

            <h1 class="lab-showcase-title">${formattedTitle}</h1>
            <p class="lab-showcase-subtitle">${lab.tagline}</p>

            <p class="lab-hero-desc">${lab.metaSummary}</p>

            <div class="lab-hero-meta-strip">
              <div class="lab-hero-meta-item">
                <span class="meta-icon" aria-hidden="true">🏛️</span>
                <div class="meta-text">
                  <small>Department</small>
                  <strong>${lab.department}</strong>
                </div>
              </div>

              <div class="lab-hero-meta-divider" aria-hidden="true"></div>

              <div class="lab-hero-meta-item">
                <span class="meta-icon" aria-hidden="true">⚡</span>
                <div class="meta-text">
                  <small>Lab Capacity</small>
                  <strong>${lab.capacity}</strong>
                </div>
              </div>

              <div class="lab-hero-meta-divider" aria-hidden="true"></div>

              <div class="lab-hero-meta-item">
                <span class="meta-icon" aria-hidden="true">⏱️</span>
                <div class="meta-text">
                  <small>Working Hours</small>
                  <strong>${lab.timing}</strong>
                </div>
              </div>
            </div>

            <div class="lab-hero-actions">
              <a href="#lab-overview" class="lab-btn lab-btn-primary">
                <span>Explore Facilities</span>
                <span class="btn-arrow" aria-hidden="true">↓</span>
              </a>
              <a href="#lab-contact" class="lab-btn lab-btn-secondary">
                <span>Lab Enquiry</span>
                <span class="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <!-- Right Column: Dedicated Lab Image Display Card (Photo 3) -->
          <div class="lab-hero-media-wrap reveal">
            <div class="lab-hero-media-frame">
              <img 
                src="${lab.image}" 
                alt="${lab.name} - ${lab.tagline}" 
                class="lab-hero-img" 
                loading="eager" 
                fetchpriority="high"
                onerror="this.src='/brand/campus-arch.jpg'"
              >
              <div class="lab-media-overlay" aria-hidden="true"></div>
              
              <div class="lab-media-top-badge">
                <span class="lab-media-id">0${lab.id}</span>
                <div class="lab-media-status">
                  <span class="pulse-dot"></span>
                  <span>Active Research Workspace</span>
                </div>
              </div>

              <div class="lab-media-caption-bar">
                <span class="lab-accent-bar" style="background: ${lab.accentColor};" aria-hidden="true"></span>
                <div class="caption-copy">
                  <strong class="lab-media-title">${lab.name}</strong>
                  <span class="lab-media-subtitle">${lab.shortDesc || lab.tagline}</span>
                </div>
                <a href="#lab-overview" class="lab-media-circle-btn" aria-label="Explore ${lab.name}">
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

