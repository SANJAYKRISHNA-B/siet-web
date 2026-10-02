export function contactPage() {
  const contactIcon = (type) => ({
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  }[type]);

  return `<main class="contact-pro-page">
    <section class="siet-vm-hero contact-pro-hero">
      <div class="siet-vm-hero-grid"></div>
      <div class="siet-vm-hero-orb orb-one"></div>
      <div class="siet-vm-hero-orb orb-two"></div>
      <div class="siet-vm-shell contact-pro-hero-grid">
        <div class="contact-pro-hero-copy reveal">
          <p class="siet-vm-kicker"><i></i> CONTACT SRI SHAKTHI</p>
          <h1>Let’s start a meaningful <em>conversation.</em></h1>
          <p class="siet-vm-intro">Whether you are planning your studies, visiting our campus or seeking institutional support, the right team is ready to help.</p>
        </div>
        <div class="contact-pro-hero-meta reveal">
          <span>INSTITUTION CODE</span><strong>2727</strong><small>Autonomous Institution<br>Affiliated to Anna University</small>
        </div>
      </div>
    </section>

    <section class="contact-pro-overlap">
      <div class="contact-pro-shell contact-pro-cards">
        <article class="contact-pro-card reveal"><i>${contactIcon('phone')}</i><span>CALL US</span><h2><a href="tel:+914222369900">+91 422 2369900</a></h2><p>Admissions and institute office</p></article>
        <article class="contact-pro-card reveal"><i>${contactIcon('mail')}</i><span>EMAIL US</span><h2><a href="mailto:info@siet.ac.in">info@siet.ac.in</a></h2><p>General enquiries and support</p></article>
        <article class="contact-pro-card reveal"><i>${contactIcon('clock')}</i><span>OFFICE HOURS</span><h2>Monday - Saturday</h2><p>9:00 AM to 5:00 PM</p></article>
      </div>
    </section>

    <section class="contact-pro-main">
      <div class="contact-pro-shell contact-pro-layout">
        <div class="contact-pro-form-wrap reveal">
          <div class="contact-pro-heading"><span>WRITE TO US</span><h2>How can we help?</h2><p>Send your enquiry and the appropriate institutional team will respond.</p></div>
          <form class="contact-pro-form js-form">
            <div class="contact-pro-field-row">
              <label>Full name <b>*</b><input type="text" name="name" placeholder="Enter your full name" required></label>
              <label>Email address <b>*</b><input type="email" name="email" placeholder="name@example.com" required></label>
            </div>
            <div class="contact-pro-field-row">
              <label>Phone number <b>*</b><input type="tel" name="phone" placeholder="+91 98765 43210" required></label>
              <label>Enquiry category <b>*</b><select name="course" required><option value="">Select a category</option><option>Admissions</option><option>Academic Office</option><option>Examinations</option><option>Placements</option><option>Research and Industry</option><option>Campus and Transport</option><option>General Enquiry</option></select></label>
            </div>
            <label>Message <b>*</b><textarea name="message" rows="5" placeholder="Tell us how we can assist you" required></textarea></label>
            <div class="contact-pro-form-footer"><p>We usually respond during the next working day.</p><button type="submit">Send enquiry <span>→</span></button></div>
            <p class="status" aria-live="polite"></p>
          </form>
        </div>

        <aside class="contact-pro-location reveal">
          <div class="contact-pro-location-photo"><img src="/brand/techpark-local.png" alt="Sri Shakthi campus in Coimbatore"><span>CAMPUS LOCATION</span></div>
          <div class="contact-pro-address">
            <i>${contactIcon('pin')}</i>
            <div><h3>Visit Sri Shakthi</h3><p>Sri Shakthi Nagar, L&amp;T By-Pass,<br>Chinniyampalayam Post,<br>Coimbatore - 641062, Tamil Nadu.</p><a href="https://www.google.com/maps/search/?api=1&query=Sri+Shakthi+Institute+of+Engineering+and+Technology+Coimbatore" target="_blank" rel="noopener noreferrer">Get directions <span>↗</span></a></div>
          </div>
          <div class="contact-pro-departments"><span>DIRECT CONTACTS</span><div><p>Admission Office</p><a href="mailto:admissions@siet.ac.in">admissions@siet.ac.in</a></div><div><p>Academic Office</p><a href="mailto:academics@siet.ac.in">academics@siet.ac.in</a></div><div><p>Career Services</p><a href="mailto:placements@siet.ac.in">placements@siet.ac.in</a></div></div>
        </aside>
      </div>
    </section>
  </main>`;
}
