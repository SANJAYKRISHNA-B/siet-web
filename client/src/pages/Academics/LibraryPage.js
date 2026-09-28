import { sietHudHeader } from '../../components/common/HudHeader.js';
import { libIcons } from '../../data/libraryData.js';

export function libraryPage() {
  return `<main class="siet-library-page">
  ${sietHudHeader('Library', 'Library', false)}

  <section class="siet-lib-features-strip" aria-label="Key library features">
    <div class="siet-lib-features-container">
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.book}</span>
        <div class="lib-feat-text">
          <h3>Vast Collection</h3>
          <p>Books, journals, e-books, project reports and more.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.monitor}</span>
        <div class="lib-feat-text">
          <h3>Digital Resources</h3>
          <p>Access to e-journals, e-books and online databases.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.users}</span>
        <div class="lib-feat-text">
          <h3>Study Spaces</h3>
          <p>Peaceful &amp; comfortable reading environment.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.research}</span>
        <div class="lib-feat-text">
          <h3>Research Support</h3>
          <p>Guidance for projects, publications and research.</p>
        </div>
      </div>
      <div class="siet-lib-feature-item reveal">
        <span class="lib-feat-icon" aria-hidden="true">${libIcons.clock}</span>
        <div class="lib-feat-text">
          <h3>Extended Hours</h3>
          <p>Flexible timings for student convenience.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="siet-lib-body">
    <div class="siet-lib-container">
      <div class="siet-lib-layout siet-lib-layout-duo">
        <!-- Left: Image Card -->
        <div class="siet-lib-card-col">
          <div class="siet-lib-photo-card reveal">
            <img src="/brand/library-about.jpg" alt="Sri Shakthi Central Library reading hall and bookshelves">
            <div class="siet-lib-photo-badge">
              <span class="lib-badge-icon" aria-hidden="true">${libIcons.book}</span>
              <span class="lib-badge-text">Your Gateway to Knowledge</span>
            </div>
          </div>
        </div>

        <!-- Right: About Central Library -->
        <div class="siet-lib-about-col reveal">
          <div class="siet-lib-about-eyebrow">
            <span class="lib-gold-line"></span>
            <span class="lib-gold-text">ABOUT CENTRAL LIBRARY</span>
          </div>
          <h2 class="siet-lib-about-title">More Than Just Books</h2>
          <div class="siet-lib-about-text">
            <p>The Central Library at SIET is a hub of knowledge, innovation and learning. It provides a wide range of physical and digital resources, quiet study spaces and research support services to help students and faculty achieve their academic and research goals.</p>
            <p class="siet-lib-about-subtext">Print and digital resources, journals, databases and focused study environments support teaching, learning and research across all engineering disciplines.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Modal -->
  <div class="siet-lib-modal js-lib-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="siet-lib-modal-box">
      <div class="siet-lib-modal-header">
        <h3 class="js-lib-modal-title">Library Information</h3>
        <button type="button" class="siet-lib-modal-close js-lib-modal-close" aria-label="Close modal">×</button>
      </div>
      <div class="siet-lib-modal-body js-lib-modal-body"></div>
    </div>
  </div>
</main>`;
}
