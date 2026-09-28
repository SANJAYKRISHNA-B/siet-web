import { sietHudHeader, sietPageHeader, programSelectHtml } from '../../components/common/HudHeader.js';
import { ugProgramsDetailed, pgProgramsDetailed } from '../../data/programmesData.js';
import { icon } from '../../components/common/SvgIcons.js';

export function referralPage() { return `<main class="enquiry-page-v3 referral-page">${sietPageHeader('Admission Referral', 'Recommend an aspiring student for admissions to Sri Shakthi Institute of Engineering & Technology.', 'SRI SHAKTHI &bull; REFERRAL PROGRAMME')}<section class="enquiry-main-v3"><div class="enquiry-heading-v3"><small>REFERRAL PROGRAMME</small><h1>STUDENT ADMISSION REFERRAL</h1><p style="color:#52695c;margin-top:6px;font-size:15px;line-height:1.5">Alumni, students, parents, faculty, and well-wishers can refer candidates for undergraduate and postgraduate engineering admissions.</p></div><form class="enquiry-form-v3 js-form"><div style="font-weight:700;color:#0b3d20;font-size:15px;border-bottom:2px solid #e0ece4;padding-bottom:8px;margin-bottom:14px;letter-spacing:0.02em">REFERRER DETAILS (YOUR INFORMATION)</div><div class="enquiry-fields-v3">${field('Your Full Name', 'referrer_name', 'text', 'Enter your full name')}${field('Your Mobile Number', 'referrer_phone', 'tel', 'Enter your 10 digit mobile number')}${field('Your Email Address', 'referrer_email', 'email', 'Enter your email address')}${selectField('Your Relationship with SIET', 'referrer_relation', ['Alumni', 'Current Student', 'Faculty / Staff', 'Parent', 'Industry Partner', 'Well-wisher'])}<label id="referrer-reg-no-wrapper" class="referral-reg-no-field" style="display:none">Current Student Register Number <b>*</b><input type="text" name="referrer_reg_no" id="referrer_reg_no" placeholder="Enter current student register number" autocomplete="off"></label></div><div style="font-weight:700;color:#0b3d20;font-size:15px;border-bottom:2px solid #e0ece4;padding-bottom:8px;margin-top:18px;margin-bottom:14px;letter-spacing:0.02em">CANDIDATE DETAILS (STUDENT BEING REFERRED)</div><div class="enquiry-fields-v3">${field('Candidate Full Name', 'candidate_name', 'text', 'Enter candidate\'s full name')}${field('Candidate Mobile Number', 'candidate_phone', 'tel', 'Enter candidate\'s 10 digit mobile number')}${field('Candidate Email Address', 'candidate_email', 'email', 'Enter candidate\'s email')} ${selectField('Preferred Course Level', 'candidate_level', ['UG', 'PG'])}${programSelectHtml('Preferred Department', 'candidate_course')}${field('Current Qualification / School', 'candidate_qualification', 'text', 'Class 12 / Diploma / Degree')}</div><label>Message / Reason for Referral<textarea name="remarks" rows="3" placeholder="Tell us about the candidate's achievements, interests, or any specific guidance needed..."></textarea></label><button class="button" type="submit">Submit Referral →</button><p class="status" aria-live="polite"></p></form></section></main>` }

export function applyPortalPage(activeTab = 'enquiry') {
  const isRef = (activeTab === 'referral');
  return `<main class="enquiry-page-v3 apply-portal-page">
    <section class="department-detail-header siet-hud-header">
      <div class="department-detail-title">
        <div class="hud-title-group">
          <span class="hud-diamond" aria-hidden="true">◈</span>
          <h1 id="apply-hud-title">${isRef ? 'STUDENT ADMISSION REFERRAL' : 'APPLY FOR SRI SHAKTHI'}</h1>
        </div>
        <div class="department-breadcrumb">
          <a href="#/">← Back to Home</a><span>/</span><b id="apply-hud-breadcrumb">${isRef ? 'Referral' : 'Apply'}</b>
        </div>
      </div>
    </section>

    <section class="apply-main-container">
      <div class="career-tabs apply-tabs" role="tablist">
        <button type="button" class="apply-portal-tab-btn ${!isRef ? 'active' : ''}" data-portal-tab="enquiry" role="tab" aria-selected="${!isRef}">Admission Enquiry</button>
        <button type="button" class="apply-portal-tab-btn ${isRef ? 'active' : ''}" data-portal-tab="referral" role="tab" aria-selected="${isRef}">Admission Referral</button>
      </div>

      <!-- ENQUIRY PANE -->
      <div id="apply-pane-enquiry" class="apply-portal-pane ${!isRef ? 'is-active' : ''}">
        <div class="apply-form-center-wrap">
          <div class="apply-card-header">
            <div class="card-kicker"><span class="kicker-line"></span> ONLINE ADMISSION ENQUIRY</div>
            <h2>Start Your Engineering Journey With SIET</h2>
            <p>Complete this brief form to schedule your dedicated academic counseling session and receive programme details.</p>
          </div>

          <form class="enquiry-form-v3 apply-form-v3 js-form" data-api-endpoint="/api/admission-enquiries" data-form-type="admission-enquiry">
            <!-- STEP 1: PERSONAL CONTACT -->
            <div class="form-step-section">
              <div class="form-step-title"><span class="step-num">1</span> Personal Information</div>
              <div class="enquiry-fields-v3">
                ${field('Full Name', 'name', 'text', 'Enter your full name')}
                <label>Mobile Number <b>*</b>
                  <div class="phone-input-wrap">
                    <span class="phone-prefix">+91</span>
                    <input type="tel" name="phone" placeholder="10 digit mobile" pattern="[0-9]{10}" maxlength="10" required>
                  </div>
                </label>
                ${field('Email Address', 'email', 'email', 'Enter your email address')}
              </div>
            </div>

            <!-- STEP 2: ACADEMIC INTEREST -->
            <div class="form-step-section">
              <div class="form-step-title"><span class="step-num">2</span> Academic Preferences</div>
              <div class="enquiry-fields-v3">
                ${selectField('Course Level', 'level', ['UG', 'PG'])}
                ${programSelectHtml('Preferred Department', 'course')}
                ${field('Academic Qualification / Marks', 'qualification', 'text', 'Class 12 % / Diploma / Degree CGPA')}
              </div>
            </div>

            <!-- STEP 3: SPECIFIC QUERY & QUICK CHIPS -->
            <div class="form-step-section">
              <div class="form-step-title"><span class="step-num">3</span> Queries &amp; Guidance Needed</div>
              <div class="quick-chips-wrapper">
                <div class="quick-chips-label">Quick topics you’d like details on:</div>
                <div class="quick-chips-group">
                  <button type="button" class="quick-chip-btn" data-topic="Fee structure and scholarship criteria">💰 Fee Structure</button>
                  <button type="button" class="quick-chip-btn" data-topic="Campus hostel accommodation and mess facilities">🏠 Hostel &amp; Mess</button>
                  <button type="button" class="quick-chip-btn" data-topic="College bus routes covering major destinations">🚌 Bus Routes</button>
                  <button type="button" class="quick-chip-btn" data-topic="Merit and sports scholarship opportunities">🌟 Scholarships</button>
                  <button type="button" class="quick-chip-btn" data-topic="Admission and counselling guidance">📋 Admission Guidance</button>
                </div>
              </div>

              <label>Message / Any Specific Query <b>*</b>
                <textarea name="message" id="enquiry-message-area" rows="4" required minlength="5" placeholder="Share any specific queries regarding courses, eligibility, or admissions..."></textarea>
              </label>
            </div>

            <div class="form-submit-footer">
              <div class="confidential-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Official SIET Admissions · 100% Confidential</span>
              </div>
              <button class="button apply-submit-btn" type="submit">Submit Application →</button>
            </div>
            <p class="status" aria-live="polite"></p>
          </form>
        </div>
      </div>

      <!-- REFERRAL PANE -->
      <div id="apply-pane-referral" class="apply-portal-pane ${isRef ? 'is-active' : ''}">
        <div class="apply-form-center-wrap">
          <div class="apply-card-header">
            <div class="card-kicker"><span class="kicker-line"></span> RECOMMEND A STUDENT</div>
            <h2>Candidate Referral Form</h2>
            <p>Please provide your information along with the aspiring candidate's contact details.</p>
          </div>

          <form class="enquiry-form-v3 apply-form-v3 js-form">
            <!-- REFERRER DETAILS -->
            <div class="form-step-section">
              <div class="form-step-title"><span class="step-num">1</span> Referrer Details (Your Information)</div>
              <div class="enquiry-fields-v3">
                ${field('Your Full Name', 'referrer_name', 'text', 'Enter your full name')}
                <label>Your Mobile Number <b>*</b>
                  <div class="phone-input-wrap">
                    <span class="phone-prefix">+91</span>
                    <input type="tel" name="referrer_phone" placeholder="10 digit mobile" pattern="[0-9]{10}" maxlength="10" required>
                  </div>
                </label>
                ${field('Your Email Address', 'referrer_email', 'email', 'Enter your email address')}
                ${selectField('Your Relationship with SIET', 'referrer_relation', ['Alumni', 'Current Student', 'Faculty / Staff', 'Parent', 'Industry Partner', 'Well-wisher'])}
                <label id="referrer-reg-no-wrapper" class="referral-reg-no-field" style="display:none">Current Student Register Number <b>*</b>
                  <input type="text" name="referrer_reg_no" id="referrer_reg_no" placeholder="Enter register number (e.g. 714022...)" autocomplete="off">
                </label>
              </div>
            </div>

            <!-- CANDIDATE DETAILS -->
            <div class="form-step-section">
              <div class="form-step-title"><span class="step-num">2</span> Candidate Details (Student Being Referred)</div>
              <div class="enquiry-fields-v3">
                ${field('Candidate Full Name', 'candidate_name', 'text', 'Enter candidate\'s full name')}
                <label>Candidate Mobile Number <b>*</b>
                  <div class="phone-input-wrap">
                    <span class="phone-prefix">+91</span>
                    <input type="tel" name="candidate_phone" placeholder="10 digit mobile" pattern="[0-9]{10}" maxlength="10" required>
                  </div>
                </label>
                ${field('Candidate Email Address', 'candidate_email', 'email', 'Enter candidate\'s email')}
                ${selectField('Preferred Course Level', 'candidate_level', ['UG', 'PG'])}
                ${programSelectHtml('Preferred Department', 'candidate_course')}
                ${field('Current Qualification / School', 'candidate_qualification', 'text', 'Class 12 / Diploma / Degree')}
              </div>
            </div>

            <!-- RECOMMENDATION NOTES -->
            <div class="form-step-section">
              <div class="form-step-title"><span class="step-num">3</span> Recommendation Notes</div>
              <label>Message / Reason for Referral
                <textarea name="remarks" rows="3" placeholder="Tell us about the candidate's academic interests, sports/cultural achievements, or any specific scholarship guidance needed..."></textarea>
              </label>
            </div>

            <div class="form-submit-footer">
              <div class="confidential-badge">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>Direct Referral to Admissions Committee</span>
              </div>
              <button class="button apply-submit-btn" type="submit">Submit Referral →</button>
            </div>
            <p class="status" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>
  </main>`;
}

function enquiryPage(apply = false) { return applyPortalPage(apply ? 'enquiry' : 'enquiry'); }
const field = (label, name, type, placeholder) => `<label>${label} <b>*</b><input type="${type}" name="${name}" placeholder="${placeholder}" required></label>`;
const selectField = (label, name, opts) => `<label>${label} <b>*</b><select name="${name}" required><option value="">Select ${label}</option>${opts.map(o => `<option>${o}</option>`).join('')}</select></label>`;
