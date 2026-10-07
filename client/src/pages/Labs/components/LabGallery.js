// Lab Gallery Component

export function renderLabGallery(lab) {
  return `
    <section class="lab-section lab-gallery-section" id="lab-gallery" aria-label="Visual Gallery of ${lab.name}">
      <div class="lab-shell">
        
        <div class="lab-section-header reveal">
          <div class="lab-section-kicker">
            <span class="kicker-dot" style="background: ${lab.accentColor};"></span>
            <span>CAMPUS FACILITY SHOWCASE</span>
          </div>
          <h2 class="lab-section-title">Laboratory Gallery</h2>
          <p class="lab-section-subtitle">Visual impressions of the state-of-the-art laboratory environment, equipment benches, and technology suites.</p>
        </div>

        <div class="lab-gallery-grid">
          ${lab.gallery.map((item, i) => `
            <figure class="lab-gallery-card ${i === 0 ? 'card-featured' : ''} reveal">
              <div class="gallery-media-wrap">
                <img 
                  src="${item.img}" 
                  alt="${item.title}" 
                  loading="lazy" 
                  decoding="async"
                  onerror="this.src='/brand/campus-arch.jpg'"
                >
                <div class="gallery-overlay" aria-hidden="true"></div>
                <div class="gallery-tag">${lab.name}</div>
              </div>
              <figcaption class="gallery-caption">
                <h4 class="caption-title">${item.title}</h4>
                <p class="caption-desc">${item.caption}</p>
              </figcaption>
            </figure>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
