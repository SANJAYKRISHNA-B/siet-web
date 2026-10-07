// Lab Contact & Visit Enquiry Component — Clean, Focused & Actionable

export function renderLabContact(lab) {
  return `
    <section class="lab-section lab-contact-section" id="lab-contact" aria-label="Visit & Contact for ${lab.name}">
      <div class="lab-shell">
        
        <div class="lab-compact-contact-box reveal">
          <div class="contact-box-left">
            <div class="lab-section-kicker">
              <span class="kicker-dot" style="background: ${lab.accentColor};"></span>
              <span>04 &bull; LABORATORY VISIT &amp; INQUIRIES</span>
            </div>
            <h2 class="compact-contact-title">Visit the ${lab.name}</h2>
            <p class="compact-contact-desc">
              Interested in student project allocations, specialized research access, or campus industrial visits? Connect directly with the ${lab.department}.
            </p>

            <div class="compact-contact-pills">
              <span class="contact-pill-item">
                <span class="pill-emoji">📍</span>
                <span>Sri Shakthi Tech Park, Coimbatore</span>
              </span>
              <span class="contact-pill-item">
                <span class="pill-emoji">⏱️</span>
                <span>${(lab.timing || '').split('(')[0].trim()}</span>
              </span>
              <span class="contact-pill-item">
                <span class="pill-emoji">✉️</span>
                <span><a href="mailto:academics@siet.ac.in">academics@siet.ac.in</a></span>
              </span>
            </div>
          </div>

          <div class="contact-box-right">
            <div class="contact-action-card">
              <h3>Have a Query or Project Proposal?</h3>
              <p>Our departmental laboratory coordinators are available for academic consultations and campus facility tours.</p>
              <div class="contact-action-btns">
                <a href="#/contact" class="lab-btn lab-btn-primary">
                  <span>Contact Department Office</span>
                  <span class="btn-arrow" aria-hidden="true">→</span>
                </a>
                <a href="#/apply" class="lab-btn lab-btn-secondary">
                  <span>Admissions 2025-26</span>
                  <span class="btn-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
