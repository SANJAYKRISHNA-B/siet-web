// Recruitment fields shared by all three institution choices.
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const options = values => values.map(value => {
  const [key, label] = Array.isArray(value) ? value : [value, value];
  return `<option value="${escapeHtml(key)}">${escapeHtml(label)}</option>`;
}).join('');
const label = (title, control, required = false) => `<label><span>${title}${required ? ' <b>*</b>' : ''}</span>${control}</label>`;
const input = (title, name, type = 'text', required = false, placeholder = '', attrs = '') => label(title, `<input name="${name}" type="${type}" ${required ? 'required' : ''} placeholder="${placeholder}" ${attrs}>`, required);
const select = (title, name, values, required = false, placeholder = 'Please Select', attrs = '') => label(title, `<select name="${name}" ${required ? 'required' : ''} ${attrs}>${placeholder === null ? '' : `<option value="">${placeholder}</option>`}${options(values)}</select>`, required);
const countryCodes = 'AF AL DZ AS AD AO AI AQ AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BQ BA BW BV BR IO BN BG BF BI CV KH CM CA KY CF TD CL CN CX CC CO KM CG CD CK CR CI HR CU CW CY CZ DK DJ DM DO EC EG SV GQ ER EE SZ ET FK FO FJ FI FR GF PF TF GA GM GE DE GH GI GR GL GD GP GU GT GG GN GW GY HT HM VA HN HK HU IS IN ID IR IQ IE IM IL IT JM JP JE JO KZ KE KI KP KR KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN ME MS MA MZ MM NA NR NP NL NC NZ NI NE NG NU NF MK MP NO OM PK PW PS PA PG PY PE PH PN PL PT PR QA RE RO RU RW BL SH KN LC MF PM VC WS SM ST SA SN RS SC SL SG SX SK SI SB SO ZA GS SS ES LK SD SR SJ SE CH SY TW TJ TZ TH TL TG TK TO TT TN TR TM TC TV UG UA AE GB US UM UY UZ VU VE VN VG VI WF EH YE ZM ZW'.split(' ');
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
const countries = countryCodes.map(code => regionNames.of(code)).sort((a, b) => a.localeCompare(b));
const indianStates = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
const salaryRanges = ['Below ₹10,000', '₹10,000 – ₹20,000', '₹20,001 – ₹30,000', '₹30,001 – ₹40,000', '₹40,001 – ₹50,000', '₹50,001 – ₹75,000', '₹75,001 – ₹1,00,000', 'Above ₹1,00,000'];
const years = [...Array.from({ length: 41 }, (_, i) => String(i)), '40+'];

export function careerFormFields(unit) {
  return `<div class="career-field-column">
    ${input('Name', 'name', 'text', true, 'Enter name', 'autocomplete="name"')}
    ${input('Enter your Contact Number', 'phone', 'tel', true, 'Enter phone number', 'autocomplete="tel"')}
    ${input('Enter your Email Address', 'email', 'email', true, 'Enter email', 'autocomplete="email"')}
    ${input('Date of Birth', 'dateOfBirth', 'date', true, '', `max="${new Date().toLocaleDateString('en-CA')}" autocomplete="bday"`)}
    ${select('Select your Country', 'country', countries, true, 'Select Country', 'autocomplete="country-name"')}
    ${label('Select your State/Region', '<input name="state" list="career-state-options" placeholder="Select or enter state / region" autocomplete="address-level1" disabled><datalist id="career-state-options"></datalist>')}
    ${input('Select your City', 'city', 'text', false, 'Enter city', 'autocomplete="address-level2" disabled')}
    ${select('Engineering College / CBSE School / Food Testing Lab', 'institution', [['college', 'Engineering College'], ['school', 'CBSE School'], ['lab', 'Food Testing Lab']], true, null)}
    ${select('Application Category', 'category', unit.cats.map(c => c[0]), true, 'Select a Category')}
    ${select('Position you would like to apply', 'position', [], true, 'Select a Position', 'disabled')}
    ${select('Department you would like to apply', 'department', [], true, 'Select a Department', 'disabled')}
    ${select('Highest Qualification', 'qualification', ['Ph.D.', 'Ph.D. Pursuing', 'M.E. / M.Tech.', 'MBA', 'MCA', 'M.Sc.', 'M.A.', 'M.Com.', 'M.Ed.', 'B.E. / B.Tech.', 'B.Sc.', 'B.A.', 'B.Com.', 'B.Ed.', 'Diploma', 'ITI', 'Other'], true, 'Select a Degree')}
    ${select('Select your Social Category', 'socialCategory', ['General / OC', 'BC', 'BCM', 'MBC / DNC', 'OBC', 'SC', 'SCA', 'ST', 'Other'], true)}
  </div><div class="career-field-column">
    ${input('Current Working Institution', 'currentInstitution', 'text', false, 'Current Institution', 'autocomplete="organization"')}
    ${input('Current Working Position', 'currentPosition', 'text', false, 'Current Position', 'autocomplete="organization-title"')}
    ${select('Current Salary Range (in Indian Rupee) / Month', 'currentSalary', salaryRanges, false, 'Select a Range')}
    ${select('Expected Salary Range (in Indian Rupee) / Month', 'expectedSalary', salaryRanges, true, 'Select a Range')}
    ${select('Notice Period to Join (in Weeks)', 'noticePeriod', ['Immediately', ...Array.from({ length: 12 }, (_, i) => `${i + 1} ${i === 0 ? 'week' : 'weeks'}`), 'More than 12 weeks'], false, 'Select in weeks')}
    ${select('Total Teaching Experience (in years)', 'teachingExperience', years, false, null)}
    ${select('Total Industrial Experience (in years)', 'industrialExperience', years, false, null)}
    ${select('Total Research Experience (in years)', 'researchExperience', years, false, null)}
    ${select('How did you come to know about this Opening Position?', 'openingSource', ['College Website', 'Job Portal', 'Newspaper', 'Social Media', 'Employee / Friend Referral', 'Other'])}
    ${label('Why am I looking for a change from my current position?', '<textarea name="message" rows="5" placeholder="Why am I looking for a change from my current position?"></textarea>')}
    ${label('Upload Resume (Max file size: 2 MB; PDF / DOC / DOCX / RTF)', '<input type="file" name="resume" accept=".pdf,.doc,.docx,.rtf" required aria-describedby="career-resume-help">', true)}
    <small id="career-resume-help">Upload a PDF, Word document, or RTF file up to 2 MB.</small>
  </div>`;
}

export function bindCareerForm(form, units, onUnitChange) {
  if (!form) return;
  const controls = form.elements;
  const fill = (name, values, placeholder) => {
    controls[name].innerHTML = `<option value="">${placeholder}</option>${options(values)}`;
    controls[name].disabled = !values.length;
  };
  controls.institution.addEventListener('change', () => onUnitChange(controls.institution.value));
  controls.category.addEventListener('change', () => {
    const unit = units[controls.institution.value];
    const category = unit.cats.find(c => c[0] === controls.category.value);
    fill('position', category?.[1] || [], 'Select a Position');
    fill('department', [], 'Select a Department');
  });
  controls.position.addEventListener('change', () => {
    fill('department', controls.position.value ? units[controls.institution.value].departments : [], 'Select a Department');
  });
  controls.country.addEventListener('change', () => {
    controls.state.value = '';
    controls.city.value = '';
    controls.state.disabled = !controls.country.value;
    controls.city.disabled = true;
    form.querySelector('#career-state-options').innerHTML = options(controls.country.value === 'India' ? indianStates : []);
  });
  controls.state.addEventListener('input', () => {
    controls.city.value = '';
    controls.city.disabled = !controls.state.value.trim();
  });
  controls.resume.addEventListener('change', () => {
    const file = controls.resume.files[0];
    const error = !file ? '' : file.size > 2 * 1024 * 1024 ? 'Please choose a resume no larger than 2 MB.' : !/\.(pdf|docx?|rtf)$/i.test(file.name) ? 'Please choose a PDF, DOC, DOCX, or RTF file.' : '';
    controls.resume.setCustomValidity(error);
    if (error) controls.resume.reportValidity();
  });
  // Keep the selected institution and dependent controls consistent after submission.
  form.addEventListener('reset', () => {
    const unitKey = controls.institution.value;
    queueMicrotask(() => {
      onUnitChange(unitKey);
      controls.state.disabled = true;
      controls.city.disabled = true;
      controls.resume.setCustomValidity('');
    });
  });
}
