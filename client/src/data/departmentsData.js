import { ugPrograms as programs } from './programmesData.js';

export const departmentDetails = {
  'Agricultural Engineering': {
    courses: [['B.E - Agricultural Engineering', '60'], ['M.Tech - Farm Machinery', '18']],
    overview: 'The department of Agricultural Engineering was started in Sri Shakthi Institute of Engineering and Technology (SSIET), Coimbatore, in 2015. The Chairman, Dr. S Thangavelu, is himself an Agricultural Engineer and a Ph. D. degree holder in Bio Energy from Tamil Nadu Agricultural University (TNAU), Coimbatore, and worked as a faculty for 28 years in TNAU. During the past years, the department has been in the journey with SSIET to fulfil the motto, ‘Powering the Youth, Empowering the Nation’. The department offers B. E. Agriculture Engineering, focussing on widening the practical knowledge of the students thus encouraging them to solve different practical difficulties in small-landholdings. Well-qualified faculty members are the strength of the department. The department constitutes experienced and dedicated faculty and supporting staff members with excellent academic research and industrial work experience to promote research and intervention in the existing methods. Presently, the faculty consists of experts from farm machinery and power, soil and water conservation engineering, agricultural processing, civil engineering, mechanical engineering, food technology and agriculture. Further, the practical knowledge gained by them during practical field works and industrial visits has been added advantage for new technology and innovations. The department is new in offering the degree program in the institute. Despite, about 30 students have been graduated during 2019 from the department and are well placed. At present there are 375 students are admitted in the degree program, and the department is envisage more students in the future.',
    sections: {
      'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2653261981</td>
                <td class="center-align">1-456603189</td>
                <td><strong>Dr.Ibrahim Sheriff K A</strong></td>
                <td>Professor</td>
                <td>UG-Agricultural Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/agri_faculty_photos/ibrahim-sheriff.png" alt="Dr.Ibrahim Sheriff K A" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2655821995</td>
                <td class="center-align">1-44024258070</td>
                <td><strong>Dr.Vijay Aravinth K</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Agricultural Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/agri_faculty_photos/vijay-aravinth.png" alt="Dr.Vijay Aravinth K" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2678731996</td>
                <td class="center-align">1-7602353714</td>
                <td><strong>Mr.Mohammed Thousiff S</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Agricultural Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/agri_faculty_photos/mohammed-thousiff.png" alt="Mr.Mohammed Thousiff S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2664721989</td>
                <td class="center-align">1-2292695694</td>
                <td><strong>Mr.Muthusamy K</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Agricultural Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/agri_faculty_photos/muthusamy.png" alt="Mr.Muthusamy K" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2691781981</td>
                <td class="center-align">1-38102668142</td>
                <td><strong>Mrs.Priyanka R</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Agricultural Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/agri_faculty_photos/priyanka.png" alt="Mrs.Priyanka R" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2694772000</td>
                <td class="center-align">1-43781638268</td>
                <td><strong>Ms.Srijavijayalakshmi A</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Agricultural Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/agri_faculty_photos/srijavijayalakshmi.png" alt="Ms.Srijavijayalakshmi A" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2677542000</td>
                <td class="center-align">1-43727589118</td>
                <td><strong>Ms.Durga G</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Agricultural Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/agri_faculty_photos/durga.png" alt="Ms.Durga G" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2672311999</td>
                <td class="center-align">1-47950476362</td>
                <td><strong>Mrs.Saranya J</strong></td>
                <td>Assistant Professor</td>
                <td>UG-General Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/agri_faculty_photos/saranya.png" alt="Mrs.Saranya J" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2699892000</td>
                <td class="center-align">1-44716276390</td>
                <td><strong>Ms.Poojha J</strong></td>
                <td>Assistant Professor</td>
                <td>PG-Farm Machinery</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/agri_faculty_photos/poojha.png" alt="Ms.Poojha J" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2688101995</td>
                <td class="center-align">1-44967602972</td>
                <td><strong>Dr.Kommanaboyina Raju Yadav</strong></td>
                <td>Assistant Professor</td>
                <td>PG-Farm Machinery</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/agri_faculty_photos/raju-yadav.png" alt="Dr.Kommanaboyina Raju Yadav" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Why Agricultural Engineering at SIET': `
        <h2>Why Agricultural Engineering at SIET</h2>
        <ol class="dept-custom-list">
          <li>The students of all the departments are sent for industrial trainings and also for industrial visits in engineering based companies.</li>
          <li>The graduates get placements in these industries during their final year.</li>
          <li>The Department organizes a number of events to build the employability and entrepreneurial traits in our students. “Velaan Thiruvizha” – Agri Fest is conducted every year in the campus.</li>
          <li>MoUs for industrial visit and training with the following reputed organizations for the Department of Agriculture Engineering</li>
        </ol>
      `,
      'Unique Facilities': `
        <h2>Unique Facilities</h2>
        <ol class="dept-custom-list">
          <li>The students of all the departments are sent for industrial trainings and also for industrial visits in engineering based companies.</li>
          <li>The graduates get placements in these industries during their final year.</li>
          <li>MoUs for industrial visit and training with the following reputed organizations for the Department of Agriculture Engineering.</li>
          <li>Eminent Professors with more than 30 years of teaching experience.</li>
          <li>Development of technical skills to make the Innovative Products with option of Patent.</li>
          <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
        </ol>
      `,
      'Achievements': `
        <h2>Achievements</h2>
        <ol class="dept-custom-list">
          <li>During the past years, the department has organised a number of events to build the employability and entrepreneurial traits in our students.</li>
          <li>“VelaanThiruvizha” – Agri Fest is conducted every year in the campus. Every Year, more than 100 stalls were arranged for the Agri Fest and around 3000 visitors visited the festival.</li>
          <li>The students are given relevant trainings in national level institutes/ industries. A few of them includes Farm Machinery Testing and Training Institute at Ananthapur and Hisar, The Dhan Foundation at Madurai, Soil and Water Conservation Research Institute at Ooty, Farms of National Seeds Corporation at Raichur, Suratgarh and Hisar, Escorts Training and Development Center at Bengaluru and JCB Training Center at Kovai Road.</li>
        </ol>
      `,
      'Vision & Mission': `
        <h2>Vision</h2>
        <p class="dept-lead-text">Educating and empowering the students to become successful agricultural engineers and entrepreneurs to elicit research capability that applies science and technology to enhance agricultural productivity, farm mechanization, irrigation engineering, conservation of water, energy and post-harvest handling and value addition with a sound knowledge of agricultural principles.</p>
        
        <h2 style="margin-top: 36px;">Mission</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M1:</strong> To train and prepare the students with general knowledge and expertise in the fields of agricultural sciences, soil and water conservation, post-harvest technology and agro energy.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M2:</strong> To set up the required facilities in the laboratories to satisfy the needs of industry and R&D.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M3:</strong> To build expertise on the different facets of agricultural engineering to make graduates grow as entrepreneurs, scientists, educators and sustainable food production technologists which meet the food needs of the ever-increasing population of our country.</div>
          </li>
        </ul>
      `,
      'Programme Educational Objectives': `
        <h2>Programme Educational Objectives</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO1:</strong> Acquire basic knowledge required for the industries connected with micro irrigation, tractor manufacture, agricultural machinery manufacture, food processing and water management.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO2:</strong> Attain and practice technical skills to pursue higher studies in India and abroad in different disciplines of Agricultural Engineering.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO3:</strong> Imbibe practical skills and real time problem solving capabilities to enable them to become entrepreneurs.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO4:</strong> Gain sound knowledge in the emerging trends such as IT, IoT, ICT so as to enable them to apply their knowledge in robotics, automation and smart farming systems to achieve higher crop productivity.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO5:</strong> Develop confidence for appearing in various competitive examinations such as UPSC, TNPSC and banks examinations so that the students become technocrats and administrators.</div>
          </li>
        </ul>
      `,
      'Programme Specific Outcomes': `
        <h2>Programme Specific Outcomes</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO1: Professional skills :</strong> To ensure education necessary to understand agriculture engineering solutions in global and social context to improve agriculture.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO2: Problem solving skills :</strong> To have the ability to solve complex problems related to farm mechanization, soil and water conservation, post harvest technology, renewable and non-renewable resource technologies, landscape architecture and modern irrigation techniques.</div>
          </li>
        </ul>
      `,
      'Feedback': `
        <h2>Feedback</h2>
        <p class="dept-lead-text">We welcome feedback from students, parents, alumni, and industry partners to help us continuously elevate our curriculum, laboratory facilities, and student learning experience.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Your Name *</label>
              <input type="text" placeholder="Full Name" required>
            </div>
            <div class="dept-form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="name@domain.com" required>
            </div>
            <div class="dept-form-group">
              <label>Stakeholder Category *</label>
              <select required>
                <option value="">Select Stakeholder Category</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Parent">Parent</option>
                <option value="Industry Partner">Industry Partner / Recruiter</option>
                <option value="Faculty">Faculty</option>
              </select>
            </div>
            <div class="dept-form-group">
              <label>Rating *</label>
              <select required>
                <option value="5">★★★★★ Excellent (5/5)</option>
                <option value="4">★★★★☆ Very Good (4/5)</option>
                <option value="3">★★★☆☆ Good (3/5)</option>
                <option value="2">★★☆☆☆ Fair (2/5)</option>
                <option value="1">★☆☆☆☆ Needs Improvement (1/5)</option>
              </select>
            </div>
          </div>
          <div class="dept-form-group" style="margin-top: 16px;">
            <label>Comments &amp; Suggestions *</label>
            <textarea rows="4" placeholder="Share your suggestions for curriculum, laboratory facilities, or training..." required></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Agricultural Engineering department.
          </div>
        </form>
      `
    }
  },
  'Artificial Intelligence and Data Science': {
    courses: [['B.Tech - Artificial Intelligence and Data Science', '240']],
    overview: `<p>Artificial Intelligence and Data Science was established in 2021 with the aim of enabling students to acquire specialized knowledge. This Department offers a 4 year B.Tech (Artificial Intelligence and Data Science) Programme. It has a heartfelt team of dedicated faculty members with a sound knowledge in various areas and has the state-of-art facilities for various laboratories and supports smart class learning.</p><p style="margin-top: 16px;">The job market for data science and AI professionals is booming across the world, making it a desirable career choice. AI engineers and data scientists are both intertwined job roles and have the potential to help a professional leverage rewarding career growth opportunities.</p>`,
    sections: {
      'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2631551976</td>
                <td class="center-align">1-4533208180</td>
                <td><strong>Dr.V.Kamalaveni</strong></td>
                <td>Professor & Head</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/kamalaveni-v-vanji-gounder.png" alt="Dr.V.Kamalaveni" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2635961981</td>
                <td class="center-align">1-3358044470</td>
                <td><strong>Dr.Bala Kumar Natarajan</strong></td>
                <td>Associate Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/bala-kumar-natarajan.png" alt="Dr.Bala Kumar Natarajan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2626041983</td>
                <td class="center-align">1-723065185</td>
                <td><strong>Dr.Buvaneswaran Balamani</strong></td>
                <td>Associate Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/buvaneswaran-balamani.png" alt="Dr.Buvaneswaran Balamani" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2628631986</td>
                <td class="center-align">1-3654896415</td>
                <td><strong>Dr.Dhashinamoorthy Thavamani</strong></td>
                <td>Associate Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/dhashinamoorthy-thavamani.png" alt="Dr.Dhashinamoorthy Thavamani" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2655941993</td>
                <td class="center-align">1-1406772315</td>
                <td><strong>Mrs.Ambika</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/ambika.png" alt="Mrs.Ambika" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2677491992</td>
                <td class="center-align">1-3698712520</td>
                <td><strong>Mr.Barath Kumar</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/barath-kumar.png" alt="Mr.Barath Kumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2628821998</td>
                <td class="center-align">1-43381987080</td>
                <td><strong>Mr.Dhinaharan</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/dhinaharan.png" alt="Mr.Dhinaharan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2627292001</td>
                <td class="center-align">1-11622715940</td>
                <td><strong>Mrs.M.Dhivya</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/dhivya-m.png" alt="Mrs.M.Dhivya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2665862000</td>
                <td class="center-align">1-43381753530</td>
                <td><strong>Mrs.S.P.Dhivya</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/dhivya-sp.png" alt="Mrs.S.P.Dhivya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2616991996</td>
                <td class="center-align">1-44049412940</td>
                <td><strong>Ms.Gayathiri</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/gayathiri.png" alt="Ms.Gayathiri" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2624681995</td>
                <td class="center-align">1-44749288875</td>
                <td><strong>Mrs.S.Geethanjali</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/geethanjali-s.png" alt="Mrs.S.Geethanjali" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">12</td>
                <td class="center-align">2633561995</td>
                <td class="center-align">1-43381753905</td>
                <td><strong>Ms.J.Hari Priya</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/hari-priya-j.png" alt="Ms.J.Hari Priya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">13</td>
                <td class="center-align">2694991997</td>
                <td class="center-align">1-44749287925</td>
                <td><strong>Mr.Jayabala Surya Narayana Moorthy</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/jayabala-surya-narayana-moorthy.png" alt="Mr.Jayabala Surya Narayana Moorthy" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">14</td>
                <td class="center-align">2632322004</td>
                <td class="center-align">1-44749289125</td>
                <td><strong>Mr.Krishna Satheesh</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/krishna-satheesh.png" alt="Mr.Krishna Satheesh" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">15</td>
                <td class="center-align">2614141989</td>
                <td class="center-align">1-44123595220</td>
                <td><strong>Mrs.M.Logeshwari</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/logeshwari-m.png" alt="Mrs.M.Logeshwari" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">16</td>
                <td class="center-align">2619301978</td>
                <td class="center-align">1-45332080555</td>
                <td><strong>Mr.Mayank Chauhan</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/mayank-chauhan.png" alt="Mr.Mayank Chauhan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">17</td>
                <td class="center-align">2624761994</td>
                <td class="center-align">1-4795532275</td>
                <td><strong>Mr.Mugesh Chandran</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/mugesh-chandran.png" alt="Mr.Mugesh Chandran" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">18</td>
                <td class="center-align">2696692000</td>
                <td class="center-align">1-44748929615</td>
                <td><strong>Mrs.Priya Dharshini Rajan</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/priya-dharshini-rajan.png" alt="Mrs.Priya Dharshini Rajan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">19</td>
                <td class="center-align">2662342004</td>
                <td class="center-align">1-44073171810</td>
                <td><strong>Mrs.Priya Rajaendran</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/priya-rajaendran.png" alt="Mrs.Priya Rajaendran" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">20</td>
                <td class="center-align">2672221994</td>
                <td class="center-align">1-46907261560</td>
                <td><strong>Mrs.Revathi</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/revathi.png" alt="Mrs.Revathi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">21</td>
                <td class="center-align">2620762007</td>
                <td class="center-align">1-46905827860</td>
                <td><strong>Mrs.Samlin Jenifer</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/samlin-jenifer.png" alt="Mrs.Samlin Jenifer" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">22</td>
                <td class="center-align">2659611994</td>
                <td class="center-align">1-44816211555</td>
                <td><strong>Ms.A.Sangamithara</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/sangamithara-a.png" alt="Ms.A.Sangamithara" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">23</td>
                <td class="center-align">2622412000</td>
                <td class="center-align">1-4647070190</td>
                <td><strong>Mrs.Saranya Devi</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/saranya-devi.png" alt="Mrs.Saranya Devi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">24</td>
                <td class="center-align">2655071994</td>
                <td class="center-align">1-47948889395</td>
                <td><strong>Mrs.Saranya Subaramani</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/saranya-subaramani.png" alt="Mrs.Saranya Subaramani" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">25</td>
                <td class="center-align">2677481994</td>
                <td class="center-align">1-12145504765</td>
                <td><strong>Mrs.Sini Prabhakar</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/sini-prabhakar.png" alt="Mrs.Sini Prabhakar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">26</td>
                <td class="center-align">2654391995</td>
                <td class="center-align">1-2299912275</td>
                <td><strong>Ms.Sivadharsini</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/sivadharsini.png" alt="Ms.Sivadharsini" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">27</td>
                <td class="center-align">2660932001</td>
                <td class="center-align">1-44072931060</td>
                <td><strong>Mrs.Subhasri Selvaraj</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/subhasri-selvaraj.png" alt="Mrs.Subhasri Selvaraj" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">28</td>
                <td class="center-align">2646841997</td>
                <td class="center-align">1-9316597230</td>
                <td><strong>Ms.Swetha</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/swetha.png" alt="Ms.Swetha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">29</td>
                <td class="center-align">2654562005</td>
                <td class="center-align">1-45332080565</td>
                <td><strong>Mr.Vijayakumar Bala Subaramani</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Data Science</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aids-faculty-images/vijayakumar-bala-subaramani.png" alt="Mr.Vijayakumar Bala Subaramani" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Why Artificial Intelligence and Data Science at SIET': `
        <h2>Why Artificial Intelligence and Data Science at SIET</h2>
        <ol class="dept-custom-list">
          <li>100% Placement every year</li>
          <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
        </ol>
      `,
      'Why Artificial Intelligence and Data Science at SIET': `
        <h2>Why Artificial Intelligence and Data Science at SIET</h2>
        <ol class="dept-custom-list">
          <li>100% Placement every year</li>
          <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
        </ol>
      `,
      'Unique Facilities': `
        <h2>Unique Facilities</h2>
        <ol class="dept-custom-list">
          <li>Using online platform for Programming Practice.</li>
          <li>Industry Training for faculty members</li>
          <li>Certification Courses with industry Collaboration- Software Testing with Virtusa and Data Analytics with Duccen.</li>
        </ol>
      `,
      'Achievements': `
        <h2>Achievements</h2>
        <ol class="dept-custom-list">
          <li>Consistent 100% placement record for graduating batches in leading product and technology companies.</li>
          <li>Industry Collaboration and CoE Certification programs with Virtusa for Software Testing and Duccen for Data Analytics.</li>
          <li>Student achievements and top ranks in national hackathons, coding leagues, and data intelligence summits.</li>
          <li>High-performance computing lab established with dedicated GPU workstations for deep learning and neural network training.</li>
        </ol>
      `,
      'Vision & Mission': `
        <h2>Vision</h2>
        <p class="dept-lead-text">To be a globally recognized center of excellence in Artificial Intelligence and Data Science, fostering innovation, research, and education to address real-world challenges and contribute to societal advancement. To create a trans-formative learning environment that prepares students to become leaders and innovators in the fields of Artificial Intelligence and Data Science.</p>
        
        <h2 style="margin-top: 36px;">Mission</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To provide a comprehensive and dynamic curriculum that equips students with the knowledge and skills required to excel in Artificial Intelligence and Data Science</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To promote cutting-edge research and development in Artificial Intelligence and Data Science, addressing both fundamental and applied problems</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To facilitate internships, co-op programs, and project-based learning to provide students with practical experience and industry exposure</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To address the social, legal, and ethical implications of AI and Data Science through dedicated coursework and research initiatives</div>
          </li>
        </ul>
      `,
      'Programme Educational Objectives': `
        <h2>Programme Educational Objectives</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO1:</strong> To ensure that the graduates will be proficient in utilizing the fundamental knowledge of basic sciences, mathematics and computer science for the applications relevant to various streams of Engineering and Technology.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO2:</strong> To enrich graduates with the core competencies necessary for applying knowledge of computers and modern tools to develop hardware and software systems by understanding the importance of social, business and environmental needs in the human context.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO3:</strong> To enable graduates to think logically, act ethically, pursue lifelong learning and to have the capacity to understand technical issues related to computing systems and to design optimal solutions.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO4:</strong> To enable graduates to gain ability and attitude to adapt with emerging technological changes.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO5:</strong> To enable graduates to establish themselves as technocrats or entrepreneurs by applying their technical skills to solve real world problems to meet the needs of industry, academia and research.</div>
          </li>
        </ul>
      `,
      'Programme Specific Outcomes': `
        <h2>Programme Specific Outcomes</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO1: Machine Learning &amp; Intelligent Systems:</strong> Ability to design, train, evaluate, and deploy deep learning models, natural language pipelines, and computer vision systems to solve complex computational and domain-specific challenges.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO2: Big Data Engineering &amp; Analytics:</strong> Capability to architect scalable data pipelines, enterprise analytics platforms, cloud databases, and predictive intelligence solutions following ethical AI governance and standards.</div>
          </li>
        </ul>
      `,
      'Feedback': `
        <h2>Feedback</h2>
        <p class="dept-lead-text">We welcome feedback from students, parents, alumni, and industry partners to help us continuously elevate our curriculum, laboratory facilities, and student learning experience.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Your Name *</label>
              <input type="text" placeholder="Full Name" required>
            </div>
            <div class="dept-form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="name@domain.com" required>
            </div>
            <div class="dept-form-group">
              <label>Stakeholder Category *</label>
              <select required>
                <option value="">Select Stakeholder Category</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Parent">Parent</option>
                <option value="Industry Partner">Industry Partner / Recruiter</option>
                <option value="Faculty">Faculty</option>
              </select>
            </div>
            <div class="dept-form-group">
              <label>Rating *</label>
              <select required>
                <option value="5">★★★★★ Excellent (5/5)</option>
                <option value="4">★★★★☆ Very Good (4/5)</option>
                <option value="3">★★★☆☆ Good (3/5)</option>
                <option value="2">★★☆☆☆ Fair (2/5)</option>
                <option value="1">★☆☆☆☆ Needs Improvement (1/5)</option>
              </select>
            </div>
          </div>
          <div class="dept-form-group" style="margin-top: 16px;">
            <label>Comments &amp; Suggestions *</label>
            <textarea rows="4" placeholder="Share your suggestions for curriculum, laboratory facilities, or training..." required></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Artificial Intelligence and Data Science department.
          </div>
        </form>
      `
    }
  },
  'Artificial Intelligence and Machine Learning': {
    courses: [['B.Tech - Artificial Intelligence and Machine Learning', '120']],
    overview: `<p>Artificial Intelligence and Machine Learning was established in 2021 with the aim of enabling students to acquire specialized knowledge. This Department offers a 4 year B.Tech (Artificial Intelligence and Machine Learning) Programme. It has a heartfelt team of dedicated faculty members with a sound knowledge in various areas and has the state-of-art facilities for various laboratories and supports smart class learning.</p><p style="margin-top: 16px;">Becoming an expert in AI will enable you to challenge current ways of working and change the way you perceive most things. Highlighting yourself as someone who strives for positive change, as well as an eagerness to learn the latest technologies could take you a long way in your career.</p>`,
    sectionsList: [
      'About the Department',
      'Why Artificial Intelligence and Machine Learning at SIET',
      'Vision & Mission',
      'Programme Educational Objectives',
      'Programme Specific Outcomes',
      'Programme Outcomes',
      'Faculty Profile',
      'PAC Members',
      'Curriculum',
      'Feedback'
    ],
    sections: {
      'Why Artificial Intelligence and Machine Learning at SIET': `
        <h2>Why Artificial Intelligence and Machine Learning at SIET</h2>
        <ol class="dept-custom-list">
          <li>100% Placement every year</li>
          <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
        </ol>
      `,
      'Why Artificial Intelligence and Machine Learning at SIET': `
        <h2>Why Artificial Intelligence and Machine Learning at SIET</h2>
        <ol class="dept-custom-list">
          <li>100% Placement every year</li>
          <li>Industry oriented rich curriculum, supported with subject wise industrial visits, engineering exploration labs, skills development courses and internships</li>
        </ol>
      `,
      'Vision & Mission': `
        <h2>Vision</h2>
        <p class="dept-lead-text">To be a distinguished engineering school renowned for its exceptional teaching, groundbreaking research, and impactful public service initiatives and be a sought-after hub of expertise in Artificial Intelligence and Machine Learning.</p>
        
        <h2 style="margin-top: 36px;">Mission</h2>
        <p class="dept-lead-text">To create an empowering environment where intellectual capacity, critical thinking, creativity, and problem-solving abilities of students are nurtured, ensuring their preparedness to thrive in the transformative fields of Artificial Intelligence and Machine Learning. Being committed to instilling these vital skills while upholding the highest ethical standards, enabling students to become innovative contributors to advancement of society.</p>
      `,
      'Programme Educational Objectives': `
        <h2>Programme Educational Objectives</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO1: Foundation in Core Concepts:</strong> Graduates will possess a strong foundation in mathematics, computer science, and artificial intelligence, enabling them to understand and solve complex technical problems.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO2: Proficiency in AI &amp; ML Techniques:</strong> Graduates will be proficient in the application of AI and ML techniques and tools and create innovative solutions.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO3: Research and Development:</strong> Graduates will be prepared to engage in research and development activities, while understanding the ethical, societal, and environmental impacts of AI and ML technologies.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO4: Lifelong Learning and Professional Growth:</strong> Graduates will engage in lifelong learning through professional development, higher education, and participation in professional communities to stay abreast of emerging technologies and methodologies in AI and ML.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO5: Leadership and Teamwork:</strong> Graduates will develop leadership qualities and teamwork skills, will be equipped with entrepreneurial skills and knowledge, enabling them to create startups and contribute to the economic growth by leveraging AI and ML technologies.</div>
          </li>
        </ul>
      `,
      'Programme Specific Outcomes': `
        <h2>Programme Specific Outcomes</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO1: AI Problem Solvers:</strong> Apply knowledge of mathematics, statistics, and domain-specific concepts in the design, development and evaluation of the machine learning models and algorithms that effectively solve future real world challenges</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO2: AI System Developers:</strong> Design and implement systems that act intelligently and learn from experience by leveraging a variety of programming languages, frameworks and modern Software tools by adhering to ethical and legal standards in AI development.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO3: AI Innovators and Researchers:</strong> Effectively communicate and collaborate with diverse teams and contribute to the transfer of AI research innovations into practical applications.</div>
          </li>
        </ul>
      `,
      'Programme Outcomes': `
        <h2>Programme Outcomes</h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO1: Engineering Knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO2: Problem Analysis:</strong> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO3: Design/Development of Solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO4: Conduct Investigations of Complex Problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO5: Modern Tool Usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO6: The Engineer and Society:</strong> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO7: Environment and Sustainability:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO8: Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO9: Individual and Team Work:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO10: Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO11: Project Management and Finance:</strong> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PO12: Life-long Learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</div>
          </li>
        </ul>
      `,
      'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2631551979</td>
                <td class="center-align">1-4533208190</td>
                <td><strong>Dr.G.Arulvadivu</strong></td>
                <td>Professor & Head</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/arulvadivu-g.png" alt="Dr.G.Arulvadivu" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2635961983</td>
                <td class="center-align">1-3358044480</td>
                <td><strong>Dr.Anshuman Sinha</strong></td>
                <td>Associate Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/anshuman-sinha.png" alt="Dr.Anshuman Sinha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2626041984</td>
                <td class="center-align">1-723065195</td>
                <td><strong>Mrs.D.Ansline Lidiya</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/ansline-lidiya-d.png" alt="Mrs.D.Ansline Lidiya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2628631987</td>
                <td class="center-align">1-3654896425</td>
                <td><strong>Mr.G.Arun Prasanth</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/arun-prasanth-g.png" alt="Mr.G.Arun Prasanth" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2655941995</td>
                <td class="center-align">1-1406772325</td>
                <td><strong>Mrs.T.A.Benazir</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/benazir-t-a.png" alt="Mrs.T.A.Benazir" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2677491993</td>
                <td class="center-align">1-3698712530</td>
                <td><strong>Mrs.N.Gayathri</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/gayathri-n.png" alt="Mrs.N.Gayathri" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2628821999</td>
                <td class="center-align">1-43381987090</td>
                <td><strong>Mrs.S.Hemalatha</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/hemalatha-s.png" alt="Mrs.S.Hemalatha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2627292002</td>
                <td class="center-align">1-11622715950</td>
                <td><strong>Mr.Karthikeyan</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/karthikeyan.png" alt="Mr.Karthikeyan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2665862001</td>
                <td class="center-align">1-43381753540</td>
                <td><strong>Mrs.M.Keerthana</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/keerthana-m.png" alt="Mrs.M.Keerthana" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2616991997</td>
                <td class="center-align">1-44049412950</td>
                <td><strong>Mrs.R.Kirthiga</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/kirthiga-r.png" alt="Mrs.R.Kirthiga" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2624681996</td>
                <td class="center-align">1-44749288885</td>
                <td><strong>Mr.K.S.P.Madhan</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/madhan-ksp.png" alt="Mr.K.S.P.Madhan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">12</td>
                <td class="center-align">2633561996</td>
                <td class="center-align">1-43381753915</td>
                <td><strong>Ms.Narmatha</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/narmatha.png" alt="Ms.Narmatha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">13</td>
                <td class="center-align">2694991998</td>
                <td class="center-align">1-44749287935</td>
                <td><strong>Mrs.C.Niranchana</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/niranchana-c.png" alt="Mrs.C.Niranchana" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">14</td>
                <td class="center-align">2632322005</td>
                <td class="center-align">1-44749289135</td>
                <td><strong>Ms.S.Nivedha</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/nivedha-s.png" alt="Ms.S.Nivedha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">15</td>
                <td class="center-align">2614141990</td>
                <td class="center-align">1-44123595230</td>
                <td><strong>Ms.N.Pavethra</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/pavethra-n.png" alt="Ms.N.Pavethra" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">16</td>
                <td class="center-align">2619301979</td>
                <td class="center-align">1-45332080565</td>
                <td><strong>Mrs.M.Perachiselvi</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/perachiselvi-m.png" alt="Mrs.M.Perachiselvi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">17</td>
                <td class="center-align">2624761995</td>
                <td class="center-align">1-4795532285</td>
                <td><strong>Mrs.M.Priya</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/priya-m.png" alt="Mrs.M.Priya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">18</td>
                <td class="center-align">2696692001</td>
                <td class="center-align">1-44748929625</td>
                <td><strong>Ms.K.Priyanka</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/priyanka-k.png" alt="Ms.K.Priyanka" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">19</td>
                <td class="center-align">2662342005</td>
                <td class="center-align">1-44073171820</td>
                <td><strong>Mrs.R.Pushpa Kumari</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/pushpa-kumari-r.png" alt="Mrs.R.Pushpa Kumari" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">20</td>
                <td class="center-align">2672221995</td>
                <td class="center-align">1-46907261570</td>
                <td><strong>Mrs.R.Ramitha Devi</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/ramitha-devi-r.png" alt="Mrs.R.Ramitha Devi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">21</td>
                <td class="center-align">2620762008</td>
                <td class="center-align">1-46905827870</td>
                <td><strong>Mrs.T.Ranjitham</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/ranjitham-t.png" alt="Mrs.T.Ranjitham" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">22</td>
                <td class="center-align">2659611995</td>
                <td class="center-align">1-44816211565</td>
                <td><strong>Mr.T.Vijay</strong></td>
                <td>Assistant Professor</td>
                <td>Artificial Intelligence and Machine Learning</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/aiml-faculty-images/vijay-t.png" alt="Mr.T.Vijay" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'PAC Members': `
        <h2>PAC Members</h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 70px;">S.No</th>
                <th>Name</th>
                <th>Designation</th>
                <th style="width: 140px;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Dr. D. Elangovan</td><td>Principal</td><td>Chairman</td></tr>
              <tr><td>2</td><td>Mrs. S. Hemalatha</td><td>Associate Professor &amp; Head</td><td>Convener</td></tr>
              <tr><td>3</td><td>Dr. Sindhia Lingaswamy</td><td>Assistant Professor at National Institute of Technology -Tiruchirapalli, Tamil Nadu</td><td>Academic expert</td></tr>
              <tr><td>4</td><td>Dr. Prasanth</td><td>Associate Professor, Department of Computer Science and Engineering, Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai, Tamil Nadu</td><td>Academic Expert</td></tr>
              <tr><td>5</td><td>Dr. Shriram K Vasudevan</td><td>Lead - Technical (AI/GenAI) Software Tools Ecosystem Specialist Intel corporation Bengaluru</td><td>Industry Expert</td></tr>
              <tr><td>6</td><td>Dr. Kamalaveni</td><td>Professor</td><td>Member</td></tr>
              <tr><td>7</td><td>Ms. S. Nivedha</td><td>Associate Professor</td><td>Member</td></tr>
              <tr><td>8</td><td>Mr. C. Raju</td><td>Associate Professor</td><td>Member</td></tr>
              <tr><td>8</td><td>Mr. N. Harish</td><td>Technical Lead Nference Labs Pvt Ltd</td><td>Alumni</td></tr>
              <tr><td>9</td><td>Ms. Nikita Selvaraj</td><td>Student Nominee</td><td>Member</td></tr>
              <tr><td>10</td><td>Mr. Jayasurya</td><td>Student Nominee</td><td>Member</td></tr>
            </tbody>
          </table>
        </div>
      `,
      'Feedback': `
        <h2>Feedback</h2>
        <p class="dept-lead-text">We welcome feedback from students, parents, alumni, and industry partners to help us continuously elevate our curriculum, laboratory facilities, and student learning experience.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Your Name *</label>
              <input type="text" placeholder="Full Name" required>
            </div>
            <div class="dept-form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="name@domain.com" required>
            </div>
            <div class="dept-form-group">
              <label>Stakeholder Category *</label>
              <select required>
                <option value="">Select Stakeholder Category</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Parent">Parent</option>
                <option value="Industry Partner">Industry Partner / Recruiter</option>
                <option value="Faculty">Faculty</option>
              </select>
            </div>
            <div class="dept-form-group">
              <label>Rating *</label>
              <select required>
                <option value="5">★★★★★ Excellent (5/5)</option>
                <option value="4">★★★★☆ Very Good (4/5)</option>
                <option value="3">★★★☆☆ Good (3/5)</option>
                <option value="2">★★☆☆☆ Fair (2/5)</option>
                <option value="1">★☆☆☆☆ Needs Improvement (1/5)</option>
              </select>
            </div>
          </div>
          <div class="dept-form-group" style="margin-top: 16px;">
            <label>Comments &amp; Suggestions *</label>
            <textarea rows="4" placeholder="Share your suggestions for curriculum, laboratory facilities, or training..." required></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Artificial Intelligence and Machine Learning department.
          </div>
        </form>
      `
    }
  },
  'Biomedical Engineering': {
    courses: [['B.E - Biomedical Engineering', '60']],
    overview: `<p>Welcome to the Department of Biomedical Engineering at Sri Shakthi Institute of Engineering and Technology! Biomedical Engineering is an interdisciplinary field that integrates the principles of engineering with biological and medical sciences to improve healthcare systems and enhance the quality of human life.</p>`,
    sectionsList: [
      'About the Department',
      'Why Biomedical Engineering at SIET',
      'Vision & Mission',
      'Laboratory Facility',
      'List of Laboratories',
      'Faculty Profile',
      'PAC Members',
      'Curriculum',
      'Research Activities',
      'Research Achievements',
      'Department Association Activities',
      'Events Organized',
      'Medical Camp',
      'Placement Details',
      'Feedback'
    ],
    sections: {
      'Vision & Mission': `
        <h2 style="text-align: center; color: #167a39;"><u>VISION</u></h2>
        <p style="text-align: center; max-width: 920px; margin: 0 auto; line-height: 1.7; font-size: 16px;">To develop the department of Biomedical Engineering into globally recognized Centre for quality education and innovative research to provide better health care service to the society.</p>
        
        <h2 style="text-align: center; color: #167a39; margin-top: 40px;"><u>MISSION</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To achieve academic excellence through continuous upgradation in technological competencies to meet the evolving challenges of the healthcare industry.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To empower students for higher education and lifelong learning by fostering research aptitude and innovation in biomedical engineering.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To translate biomedical research into practical applications, thereby enhancing employment, entrepreneurship, and industrial collaboration.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div>To instill ethical, social, and economic responsibility among students and researchers, ensuring their innovations contribute positively to society.</div>
          </li>
        </ul>

        <h2 style="text-align: center; color: #167a39; margin-top: 40px;"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO1:</strong> To build a strong foundation in life sciences and engineering principles to analyze and solve complex biomedical problems and challenges.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO2:</strong> To design and develop biomedical systems and medical devices that meet global standards and provide economically viable solutions for society.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO3:</strong> To foster professional success by inculcating ethical values, teamwork, communication, and leadership skills that enhance employability and empower students to address societal needs.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO4:</strong> To bridge the gap between engineering and medicine by sustaining and expanding technical competence and professional growth through lifelong learning, higher studies, or multidisciplinary research.</div>
          </li>
        </ul>
      `,
      'About the Department': `
        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
          <div style="border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <table style="border-collapse: collapse; margin: 0; min-width: 280px;">
              <thead>
                <tr style="background: #167a39; color: white;">
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;">Course Offered</th>
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #fff;">
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;">B.E - Biomedical Engineering</td>
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;">60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h2 style="text-align: center; color: #167a39;"><u>ABOUT THE DEPARTMENT</u></h2>
        <p style="text-align: center; font-size: 17px; margin-bottom: 20px; font-weight: 500;">Welcome to the Department of Biomedical Engineering at Sri Shakthi Institute of Engineering and Technology!</p>
        <p style="margin-bottom: 16px;">Biomedical Engineering is an interdisciplinary field that integrates the principles of engineering with biological and medical sciences to improve healthcare systems and enhance the quality of human life. It focuses on the design, development, and application of medical devices, diagnostic equipment, imaging systems, prosthetics, artificial organs, and rehabilitation technologies used in modern medicine.</p>
        <p style="margin-bottom: 16px;">Biomedical engineers play a vital role in bridging the gap between engineering and healthcare. By working closely with doctors, researchers, and healthcare professionals, they develop innovative technologies that assist in disease diagnosis, treatment, monitoring, and patient care. The field also includes areas such as biomaterials, medical imaging, physiological modeling, biomedical signal processing, and healthcare technology management.</p>
        <p style="margin-bottom: 24px;">As technology continues to advance, biomedical engineering contributes significantly to the development of safer, more efficient, and life-saving medical solutions that improve patient outcomes and healthcare delivery worldwide.</p>
        <p style="font-style: italic; color: #333; margin-bottom: 12px; padding-left: 16px; border-left: 3px solid #167a39; font-size: 15px;">&ldquo;The good physician treats the disease; the great physician treats the patient who has the disease.&rdquo; &ndash; William Osler</p>
        <p style="font-style: italic; color: #333; margin-bottom: 20px; padding-left: 16px; border-left: 3px solid #167a39; font-size: 15px;">&ldquo;Engineering is the art of directing the great sources of power in nature for the use and convenience of humankind.&rdquo; &ndash; Thomas Tredgold</p>
        <p>These perspectives reflect the essence of Biomedical Engineering&mdash;combining the compassion of medicine with the innovation of engineering to serve humanity and advance healthcare.</p>
      `,
      'Why Biomedical Engineering at SIET': `
        <h2 style="text-align: center; color: #167a39;"><u>WHY BIOMEDICAL ENGINEERING AT SIET</u></h2>
        <p style="margin-bottom: 16px;">Biomedical Engineering at Sri Shakthi Institute of Engineering and Technology (SIET) provides students with a strong foundation in both engineering and medical sciences, preparing them to contribute effectively to the rapidly growing healthcare technology sector. The program focuses on developing technical knowledge, practical skills, and innovative thinking required for designing and managing modern medical devices and healthcare systems.</p>
        <p style="margin-bottom: 16px;">At SIET, students benefit from a dynamic learning environment supported by experienced faculty members and well-equipped laboratories. The curriculum is designed to bridge theoretical concepts with practical applications in areas such as medical instrumentation, diagnostic equipment, biomedical signal processing, and healthcare technology management.</p>
        <p style="margin-bottom: 16px;">To enhance industry exposure and professional development, the department regularly organizes guest lectures by resource persons from multinational companies (MNCs) every month. These expert sessions help students understand current industry trends, technological advancements, and career opportunities in the biomedical field.</p>
        <p style="margin-bottom: 16px;">In addition, the department actively conducts seminars, workshops, and technical training programs to strengthen students' practical knowledge and research skills. Students also gain valuable real-world experience through sandwich programmes and industry interactions, enabling them to connect academic learning with clinical and industrial practices.</p>
        <p style="margin-bottom: 24px;">Through these initiatives, the Biomedical Engineering program at SIET aims to produce competent engineers who are capable of innovating and contributing to the advancement of healthcare technologies.</p>
        <div style="margin-top: 24px; text-align: center;">
          <img src="/assets/images/departments/biomedical/bme-why-students-lab.jpg" alt="Biomedical Engineering students in clinical hospital laboratory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); max-height: 400px; object-fit: cover;">
        </div>
      `,
      'Laboratory Facility': `
        <h2 style="text-align: center; color: #167a39;"><u>LABORATORY FACILITY</u></h2>
        <div style="margin: 0 0 24px; text-align: center;">
          <img src="/assets/images/departments/biomedical/bme-lab-facility-overview.jpg" alt="Biomedical Engineering Laboratory Facility" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); max-height: 380px; object-fit: cover;">
        </div>
        <p style="margin-bottom: 16px;">Our laboratories provide a real time working environment to our students and this practical training enables faster and better understanding of the theoretical concepts. All equipments are calibrated and maintained to enable our students to enjoy their learning experience.</p>
        <p style="margin-bottom: 16px;">One such lab is <strong>Hematology laboratory</strong>, where students can analyse blood samples in the same method like hospital does to analyze blood test report. The laboratory includes Laminar air flow chamber, spectrophotometry, calorimeter, centrifuge, incubator, microscope etc.</p>
        <p style="margin-bottom: 16px;">Students perform real time testing of blood samples to assess glucose level, cholesterol level, various serum protein level, creatinine and other blood components. Students can also research on the growth of various microorganisms via the usage of incubator, centrifuge, Spectrophotometer, Colorimeter, and microscope that are calibrated and maintained in proper conditions.</p>
        <p style="margin-bottom: 20px;">Another significant laboratory is our <strong>Advanced biomedical equipments laboratory</strong>, where high level, hospital - grade equipments are maintained and used for education. Equipments such as the Ultrasound scanner, Ventilator, Dialysis machine, Defibrillator, pacemaker etc are available to provide real time demo of the same for the students.</p>
        <div style="margin: 24px 0; text-align: center;">
          <img src="/assets/images/departments/biomedical/bme-advanced-equipments-lab.jpg" alt="Advanced Biomedical Equipments Laboratory" style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); max-height: 380px; object-fit: cover;">
        </div>
        <p style="margin-bottom: 16px;">The students are given hands on training to operate ultrasound scanner in its various mode. Different modes of Ultrasound scan and ultrasound probes along with their application are demonstrated in real time.</p>
        <p style="margin-bottom: 16px;">With the help of ventilator students are able to operate, modulate and check the functions of different modes of ventilation working function.</p>
        <p style="margin-bottom: 16px;">Our department real time hemodialyzer machine is operated using coloured solution to help students visualise the principles of dialysis and ultra filtration. They are trained to troubleshoot various mechanical and electrical errors in the dialysis machine. They also disassemble and assemble the parts of defibrillator and pacemaker to study the functions of every individual components.</p>
        <p style="margin-bottom: 16px;">Various educational models of the human body can be found in our <strong>Human anatomy and physiology laboratory</strong>, which serve as objects of interest for all our students to learn about the 3D models of human anatomy to visualize the actual body parts. Few to name are 3D model of Human eye, ear, brain, heart, alveoli, respiratory system, urinary system, digestive system, skeletal system, etc.</p>
        <p style="margin-bottom: 24px;"><strong>Biomedical instrumentation laboratory</strong> has a wide range of medical diagnostic equipments used to analyse the parameters like EEG, ECG, ERG, EMG, SpO2 measurement, ultrasonic bloodflow meter etc. The students take measurements for themselves or their friends. They were taught to dismantle the equipment, trouble shoot the problem and assemble the setup again.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 24px;">
          <div style="text-align: center;">
            <img src="/assets/images/departments/biomedical/bme-smart-glove-project.jpg" alt="Smart Sensor Glove Project" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); object-fit: cover; aspect-ratio: 4/3;">
            <p style="font-size: 13px; font-weight: 600; color: #555; margin-top: 8px;">Smart Sensor Glove / Assistive Robotics Prototype</p>
          </div>
          <div style="text-align: center;">
            <img src="/assets/images/departments/biomedical/bme-virtual-keyboard-project.jpg" alt="Message Conveyor Virtual Keyboard Project" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.1); object-fit: cover; aspect-ratio: 4/3;">
            <p style="font-size: 13px; font-weight: 600; color: #555; margin-top: 8px;">Message Conveyor Virtual Keyboard Diagnostic Unit</p>
          </div>
        </div>
      `,
      'List of Laboratories': `
        <h2 style="text-align: center; color: #167a39;"><u>LIST OF LABORATORIES</u></h2>
        <p style="margin-bottom: 20px;">The Department of Biomedical Engineering houses industry-standard, fully equipped laboratories enabling students to conduct clinical analysis, medical instrumentation prototyping, and equipment troubleshooting.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px;">S.No</th>
                <th style="width: 240px;">Laboratory Name</th>
                <th>Major Equipments &amp; Facilities</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>Hematology Laboratory</strong></td>
                <td>Laminar Air Flow Chamber, Spectrophotometer, Colorimeter, Centrifuge, Incubator, High-Resolution Optical Microscopes, Hemocytometers.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Advanced Biomedical Equipments Laboratory</strong></td>
                <td>Hospital-Grade Real-Time Ultrasound Scanner, Multi-mode Mechanical ICU Ventilator, Hemodialysis Machine, External Defibrillator, Cardiac Pacemaker Demonstration Unit.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Biomedical Instrumentation Laboratory</strong></td>
                <td>Multi-channel EEG, ECG, ERG, EMG Data Acquisition Systems, Pulse Oximeters (SpO2), Ultrasonic Blood Flow Meters, Patient Vital Signs Monitor, Calibration Testbenches.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Human Anatomy and Physiology Laboratory</strong></td>
                <td>Full-Scale 3D Anatomical Human Torso, 3D Models of Human Eye, Ear, Brain, Heart, Alveoli, Respiratory System, Digestive System, Urinary System, Skeletal System.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">5</td>
                <td><strong>Diagnostic and Therapeutic Equipment Laboratory</strong></td>
                <td>Surgical Diathermy (Electrosurgical Unit), Shortwave &amp; Microwave Diathermy, Diagnostic Audiometer, Syringe &amp; Infusion Pumps, Nerve Stimulators.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">6</td>
                <td><strong>Biomedical Signal and Image Processing Laboratory</strong></td>
                <td>High-Performance Computing Workstations, MATLAB, LabVIEW, Python for Healthcare AI, DICOM Image Processing Software, Biosignal Analysis Toolkits.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2631551977</td>
                <td class="center-align">1-4533208170</td>
                <td><strong>Dr.Lekshmi V Nair</strong></td>
                <td>Professor & Head</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/lekshmi-v-nair.png" alt="Dr.Lekshmi V Nair" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2635961986</td>
                <td class="center-align">1-3358044460</td>
                <td><strong>Ms.A.M.Vishali</strong></td>
                <td>Assistant Professor</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/am-vishali.png" alt="Ms.A.M.Vishali" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2626041987</td>
                <td class="center-align">1-723065175</td>
                <td><strong>Mr.Balaji</strong></td>
                <td>Assistant Professor</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/balaji.png" alt="Mr.Balaji" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2628631993</td>
                <td class="center-align">1-3654896405</td>
                <td><strong>Ms.Divya</strong></td>
                <td>Assistant Professor</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/divya.png" alt="Ms.Divya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2655941994</td>
                <td class="center-align">1-1406772305</td>
                <td><strong>Mr.Jasonraj</strong></td>
                <td>Assistant Professor</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/jasonraj.png" alt="Mr.Jasonraj" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2677491991</td>
                <td class="center-align">1-3698712510</td>
                <td><strong>Mr.Manoj Prabu</strong></td>
                <td>Assistant Professor</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/manoj-prabu.png" alt="Mr.Manoj Prabu" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2628821997</td>
                <td class="center-align">1-43381987070</td>
                <td><strong>Mrs.Nirmalakumari</strong></td>
                <td>Assistant Professor</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/nirmalakumari.png" alt="Mrs.Nirmalakumari" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2627292000</td>
                <td class="center-align">1-11622715930</td>
                <td><strong>Ms.Pavithra</strong></td>
                <td>Assistant Professor</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/pavithra.png" alt="Ms.Pavithra" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2665861999</td>
                <td class="center-align">1-43381753520</td>
                <td><strong>Ms.Priyavarthini</strong></td>
                <td>Assistant Professor</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/priyavarthini.png" alt="Ms.Priyavarthini" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2616991995</td>
                <td class="center-align">1-44049412930</td>
                <td><strong>Mrs.Rajalaxmi</strong></td>
                <td>Assistant Professor</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/rajalaxmi.png" alt="Mrs.Rajalaxmi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2624681994</td>
                <td class="center-align">1-44749288865</td>
                <td><strong>Ms.Sowkaarthiga</strong></td>
                <td>Assistant Professor</td>
                <td>Biomedical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/bme-faculty-images/sowkaarthiga.png" alt="Ms.Sowkaarthiga" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'PAC Members': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAM ADVISORY COMMITTEE (PAC)</u></h2>
        <p style="margin-bottom: 20px;">The Program Advisory Committee ensures continuous curriculum refinement in alignment with healthcare industry demands and clinical technology standards.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px;">S.No</th>
                <th>Member Name</th>
                <th>Designation &amp; Organization</th>
                <th>Role in PAC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>Dr. R. Malathi</strong></td>
                <td>Head of the Department, Biomedical Engg, SIET</td>
                <td>Chairman</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Dr. K. Radhakrishnan</strong></td>
                <td>Professor &amp; Head, Dept of Biomedical Engg, PSG Tech</td>
                <td>Academic Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Dr. M. Senthilkumar</strong></td>
                <td>Professor, Dept of Medical Electronics, Anna University</td>
                <td>Academic Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Mr. N. Venkatesh</strong></td>
                <td>Senior Biomedical Specialist, GE Healthcare</td>
                <td>Industry Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">5</td>
                <td><strong>Mr. G. Sundararaman</strong></td>
                <td>Technical Director, Philips Healthcare Systems</td>
                <td>Industry Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">6</td>
                <td><strong>Dr. V. Rajesh</strong></td>
                <td>Chief Biomedical Engineer, Ganga Medical Centre &amp; Hospitals</td>
                <td>Hospital / Clinical Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">7</td>
                <td><strong>Mr. K. Arun Kumar</strong></td>
                <td>Assistant Professor, Biomedical Engg, SIET</td>
                <td>Member Secretary</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">8</td>
                <td><strong>Ms. K. Pavithra</strong></td>
                <td>Lead Biomedical Engineer, Siemens Healthineers</td>
                <td>Alumni Representative</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Research Activities': `
        <h2 style="text-align: center; color: #167a39;"><u>RESEARCH ACTIVITIES</u></h2>
        <p style="margin-bottom: 20px;">The department actively pursues interdisciplinary research spanning medical electronics, assistive rehabilitation robotics, and AI-driven clinical diagnosis.</p>
        <div class="dept-objectives-grid">
          <div class="dept-obj-card">
            <span class="dept-obj-tag">CLINICAL AI</span>
            <h4>Clinical Diagnosis &amp; Deep Learning</h4>
            <p>Developing lightweight neural networks for early diagnosis of diabetic retinopathy, cardiovascular irregularities from ECG rhythms, and pulmonary conditions from chest radiographs.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">BIOSENSORS</span>
            <h4>Point-of-Care Biosensing Devices</h4>
            <p>Design of non-invasive and microfluidic biosensors for continuous blood glucose and metabolic biomarker monitoring with real-time smartphone telemetry.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">ASSISTIVE TECH</span>
            <h4>Rehabilitation Robotics &amp; Smart Gloves</h4>
            <p>Prototyping sensor-embedded rehabilitation gloves and message-conveyor virtual keyboards to assist stroke rehabilitation patients and individuals with speech/motor impairments.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">TELEMEDICINE</span>
            <h4>Healthcare IoT &amp; Remote Vitals</h4>
            <p>Cloud-integrated wearable devices transmitting ECG, SpO2, heart rate, and body temperature to clinical dashboards for remote monitoring in rural healthcare outreach.</p>
          </div>
        </div>
      `,
      'Research Achievements': `
        <h2 style="text-align: center; color: #167a39;"><u>RESEARCH ACHIEVEMENTS</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px;">S.No</th>
                <th>Achievement Category</th>
                <th>Key Highlights &amp; Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>International Conference (ICCDBD – 2026)</strong></td>
                <td>Successfully hosted the 6th International Conference on Clinical Diagnosis and Biomedical Devices (ICCDBD – 2026) with over 120 research delegates from academia and healthcare industry.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Scopus &amp; SCI Journal Publications</strong></td>
                <td>Faculty members and students have published 45+ research papers in reputed peer-reviewed journals including IEEE Transactions, Elsevier Biomedical Signal Processing, and Springer.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Patents Published &amp; Filed</strong></td>
                <td>5 intellectual property patents published in the domains of wearable vital sensors, virtual keyboard message conveyors, and hemodialysis error diagnosis mechanisms.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Funded Projects &amp; Grants</strong></td>
                <td>Management and industry-supported research initiatives focusing on assistive rehabilitation robotics, point-of-care biosensors, and hemodialyzer testing platforms.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Department Association Activities': `
        <h2 style="text-align: center; color: #167a39;"><u>DEPARTMENT ASSOCIATION ACTIVITIES</u></h2>
        <p style="margin-bottom: 16px;">The Biomedical Engineering Association (<strong>BIOMEDIX</strong>) serves as a vibrant platform for student innovation, technical symposia, and clinical engineering exposure.</p>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>Monthly MNC Expert Lectures:</strong> Industry specialists from multinational medical device corporations deliver interactive technical sessions on ultrasound probes, dialysis mechanisms, and regulatory standards every month.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>Clinical Immersion &amp; Hospital Visits:</strong> Regular field visits and hospital shadow shifts at leading multispecialty hospitals across Coimbatore for on-site diagnostic equipment inspection.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>Sandwich Programmes:</strong> Hands-on industry internship programs bridging academic coursework with core medical device maintenance, clinical testing, and quality assurance.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>Student Prototyping Clubs:</strong> Student teams collaborate on healthcare hardware prototypes including smart gloves, EEG acquisition units, and pulse oximeter circuits.</div>
          </li>
        </ul>
      `,
      'Events Organized': `
        <h2 style="text-align: center; color: #167a39;"><u>EVENTS ORGANIZED</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px;">S.No</th>
                <th>Event Title</th>
                <th>Type</th>
                <th>Key Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>ICCDBD – 2026</strong></td>
                <td>International Conference</td>
                <td>6th International Conference on Clinical Diagnosis and Biomedical Devices with global keynote speakers and published proceedings.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Hands-on Workshop on Ventilators &amp; Dialysis Systems</strong></td>
                <td>Technical Workshop</td>
                <td>Intensive 3-day practical training on calibration, trouble-shooting, and assembly of hospital-grade ventilators and hemodialysis units.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Medical Equipment Calibration Bootcamp</strong></td>
                <td>Industry Training</td>
                <td>Hands-on biomedical sensor testing, defibrillator safety tests, and ultrasound probe frequency measurements.</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>National Symposium on Healthcare Robotics</strong></td>
                <td>National Symposium</td>
                <td>Project exhibitions showcasing assistive technologies, bionic arms, and IoT vital signs telemedicine platforms.</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Medical Camp': `
        <h2 style="text-align: center; color: #167a39;"><u>COMMUNITY MEDICAL CAMPS</u></h2>
        <p style="margin-bottom: 16px;">Demonstrating social and healthcare responsibility, the Department of Biomedical Engineering organizes regular community health camps and clinical diagnostic drives in neighboring rural regions.</p>
        <div class="dept-objectives-grid">
          <div class="dept-obj-card">
            <span class="dept-obj-tag">HEALTH SCREENING</span>
            <h4>Rural Diagnostic Health Camp</h4>
            <p>Students and faculty set up point-of-care testing stations providing free blood glucose, hemoglobin, blood pressure, BMI, and oxygen saturation screening for over 500+ rural residents.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">CARDIAC MONITORING</span>
            <h4>ECG &amp; Vital Signs Camp</h4>
            <p>Conducted in collaboration with hospital cardiologists, utilizing multi-lead ECG diagnostic setups to screen elderly citizens for arrhythmias and hypertension risks.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">COMMUNITY AWARENESS</span>
            <h4>Healthcare Awareness Drive</h4>
            <p>Educating rural families on healthy lifestyle habits, preventive healthcare measures, diabetes management, and early warning signs of cardiovascular diseases.</p>
          </div>
        </div>
      `,
      'Placement Details': `
        <h2 style="text-align: center; color: #167a39;"><u>PLACEMENT DETAILS</u></h2>
        <p style="margin-bottom: 16px;">The Department of Biomedical Engineering consistently achieves outstanding placement records in core medical device multinationals, clinical technology developers, and healthcare IT firms.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th>Top Recruiting Companies</th>
                <th>Job Roles</th>
                <th>Placement Highlights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>GE Healthcare, Philips Healthcare, Siemens Healthineers, B. Braun, Mindray</strong></td>
                <td>Biomedical Service Engineer, Field Clinical Specialist, Medical Device Specialist</td>
                <td>Core Medical Device Manufacturing &amp; Global Support</td>
              </tr>
              <tr>
                <td><strong>Zifo RnD Solutions, L&amp;T Technology Services, Wipro Healthcare, Cognizant Life Sciences</strong></td>
                <td>Healthcare Data Analyst, Clinical SAS Programmer, Medical Software Engineer</td>
                <td>Healthcare IT &amp; Clinical Informatics</td>
              </tr>
              <tr>
                <td><strong>Ganga Hospital, Apollo Hospitals, Manipal Hospitals, Kovai Medical Center (KMCH)</strong></td>
                <td>Hospital Biomedical Engineer, Quality &amp; NABH Compliance Engineer</td>
                <td>Premier Hospital Networks &amp; Clinical Centers</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Feedback': `
        <h2 style="text-align: center; color: #167a39;"><u>DEPARTMENT FEEDBACK</u></h2>
        <p>We value your suggestions to enhance our clinical labs, curriculum, and research initiatives. Please submit your feedback below.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Full Name *</label>
              <input type="text" required placeholder="Dr. / Mr. / Ms. Your Name">
            </div>
            <div class="dept-form-group">
              <label>Email Address *</label>
              <input type="email" required placeholder="your.email@example.com">
            </div>
          </div>
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Stakeholder Category *</label>
              <select required>
                <option value="">Select Category</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Faculty">Faculty / Academician</option>
                <option value="Employer">Healthcare Industry / Hospital Partner</option>
                <option value="Parent">Parent</option>
              </select>
            </div>
            <div class="dept-form-group">
              <label>Topic / Area of Feedback *</label>
              <select required>
                <option value="">Select Area</option>
                <option value="Curriculum">Curriculum &amp; Syllabus</option>
                <option value="Laboratories">Laboratory &amp; Diagnostic Equipment</option>
                <option value="Placement">Hospital Internships &amp; Placements</option>
                <option value="Research">Research &amp; Device Prototyping</option>
                <option value="Other">General Suggestions</option>
              </select>
            </div>
          </div>
          <div class="dept-form-group">
            <label>Your Feedback / Suggestions *</label>
            <textarea rows="4" required placeholder="Please provide your feedback or suggestions for Biomedical Engineering..."></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Biomedical Engineering department.
          </div>
        </form>
      `
    }
  },
  'Biotechnology': {
    courses: [['B.Tech - Biotechnology', '60']],
    overview: `<p>Biotechnology (BT) combines the biological science with technologies to create innovative products for healthcare, agriculture, food, pharmaceuticals and environmental control. The biotechnology sector is expected to offer huge opportunities in the next 5-10 years in the areas of vaccines, bioactive therapeutic proteins, contract research, clinical trials, bioinformatics, medicinal plants, animal biotechnology, seri biotechnology, stem cell biotechnology, bio-fuels, bio-pesticides, human genetics and environmental biotechnology. BT produces Orphan Medicinal Products (OMP) to cure rare and incurable chronic diseases. BT already benefited 350 million patients around the world. BT medicines help to treat chronic illnesses such as heart attacks, stroke, multiple sclerosis, breast cancer, cystic fibrosis, leukemia, diabetes, hepatitis and other rare, infectious diseases. Insulin is a life saving biotech medicine for patients with diabetes.</p>`,
    sectionsList: [
      'About the Department',
      'Why Biotechnology at SIET',
      'Unique Facilities',
      'Achievements',
      'Vision & Mission',
      'Programme Educational Objectives',
      'Programme Specific Outcomes',
      'Faculty Profile',
      'PAC Members',
      'Academic Calendar',
      'Curriculum',
      'Placements - Key Companies',
      'Student Placements',
      'Newsletter & Magazine',
      'Feedback'
    ],
    sections: {
      'About the Department': `
        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
          <div style="border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <table style="border-collapse: collapse; margin: 0; min-width: 280px;">
              <thead>
                <tr style="background: #167a39; color: white;">
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;">Course Offered</th>
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #fff;">
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;">B.Tech - Biotechnology</td>
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;">60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h2 style="text-align: center; color: #167a39;"><u>ABOUT THE DEPARTMENT</u></h2>
        <p>Biotechnology (BT) combines the biological science with technologies to create innovative products for healthcare, agriculture, food, pharmaceuticals and environmental control. The biotechnology sector is expected to offer huge opportunities in the next 5-10 years in the areas of vaccines, bioactive therapeutic proteins, contract research, clinical trials, bioinformatics, medicinal plants, animal biotechnology, seri biotechnology, stem cell biotechnology, bio-fuels, bio-pesticides, human genetics and environmental biotechnology. BT produces Orphan Medicinal Products (OMP) to cure rare and incurable chronic diseases. BT already benefited 350 million patients around the world. BT medicines help to treat chronic illnesses such as heart attacks, stroke, multiple sclerosis, breast cancer, cystic fibrosis, leukemia, diabetes, hepatitis and other rare, infectious diseases. Insulin is a life saving biotech medicine for patients with diabetes.</p>
      `,
      'Why Biotechnology at SIET': `
        <h2 style="text-align: center; color: #167a39;"><u>WHY BIOTECHNOLOGY AT SIET</u></h2>
        <p style="margin-bottom: 16px;">The department is equipped with state-of-the-art facilities that enable students to gain strong practical training in biotechnology. It is supported by a team of experienced and accomplished faculty members who have collectively published more than 50 research papers. The faculty actively mentor students in emerging and interdisciplinary areas such as bioenergy, biofuels, microbial robotics, living concrete, bio design, industrial enzymes, recombinant protein therapeutics, development of anti-aging formulations, and photobioreactor design.</p>
        <p style="margin-bottom: 16px;">The program emphasizes experiential learning, encouraging students to learn science through hands-on practice rather than purely theoretical study. Students are also trained to effectively access scientific databases, analyze information, and transform it into meaningful knowledge. In addition, the department ensures 100% placement assistance for registered students in core biotechnology and related companies.</p>
        <p>Students receive training across diverse scientific domains, enabling them to participate in innovation and entrepreneurship competitions such as IICDC, TNSTI, INOWAH, and other national-level innovation challenges. To strengthen industry exposure and practical understanding, industrial visits related to each subject are organized every semester, allowing students to connect academic learning with real-world applications.</p>
      `,
      'Unique Facilities': `
        <h2 style="text-align: center; color: #167a39;"><u>UNIQUE FACILITIES</u></h2>
        <ol class="dept-custom-list">
          <li>100% Placement</li>
          <li>Industry oriented curriculum supported for engineering exploration labs and internships.</li>
          <li>Eminent professors with excellent experience in Academics, Research and Industry.</li>
          <li>Summer and Winter Internships are provided for all the students.</li>
          <li>Facilities are available to provide internship for 12 months during final year so that the students can get employment immediately after internship.</li>
          <li>Research project on Microbial Robotics for targeted drug delivery is underway. Dr.S.Shanmugasudaram, Emeritus Scientist is carrying out the project for the last 6 months and the project is expected to be completed in 2 years and also the above project is fully funded and supported by our management. In this project Selected microorganisms will be loaded with desired drugs and it will be magnetised which will move to the place where it is required.</li>
          <li>Research project carried out by final year students like Sowndarya, Kaviya and Ramya where they have already generated the 3D structure of a synthetic enzyme and also planning to synthesize the enzymes according to industry needs which do not exist in nature.</li>
          <li>Faculty research project on Bio-refinery and Bio-oil production is carried out by Mrs.M.Sujitha Head of the Department, where lipid containing yeast is used as a source of oil production and also it is microbial oil.</li>
          <li>Faculties have published papers in Scopus indexed Journals</li>
          <li>It is proposed to conduct International conference every year in the month of May</li>
        </ol>
      `,
      'Achievements': `
        <h2 style="text-align: center; color: #167a39;"><u>STUDENTS ACHIEVEMENTS</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th>STUDENT NAME</th>
                <th style="width: 80px; text-align: center;">YEAR</th>
                <th style="width: 140px; text-align: center;">ACADEMIC / SPORTS</th>
                <th>DETAILS OF ACHIEVEMENT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Akksadha</strong></td>
                <td style="text-align: center;">IV</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Student have got their post graduation MS at East China University for Science &amp; Technology, China with a fellowship of 1 lakh/month.</td>
              </tr>
              <tr>
                <td><strong>S.Janupriya</strong></td>
                <td style="text-align: center;">IV</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Internship at Monash University, Malaysia to carry out the project titled &ldquo;Antioxidants study of PCL/lignin-PEG-15% NCC&rdquo;</td>
              </tr>
              <tr>
                <td><strong>Aishwarya S.Y</strong></td>
                <td style="text-align: center;">III</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Got 1st Prize in Nano challenge 2019 held on PSG STEP, Coimbatore. She has been awarded Rs 25000 for the incubation space to carry out her prototype development.</td>
              </tr>
              <tr>
                <td><strong>S.Janupriya</strong></td>
                <td style="text-align: center;">IV</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Got Agathiyar award 2020 and also cash prize of Rs 5000 for poster presentation in National Conference, organised by Central Council for Research in Siddha with Support of Ministry of AYUSH.</td>
              </tr>
              <tr>
                <td><strong>Kavipriya, Nivedithalakshmi</strong></td>
                <td style="text-align: center;">IV</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Got First place in Paper presentation in World cancer Day at Dr.NGP college of Arts &amp; Science.</td>
              </tr>
              <tr>
                <td><strong>Elizabeth Angel, Bharath Kumar, Bruce Joshua Sinclair</strong></td>
                <td style="text-align: center;">I</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Selected for final round of TNSI (Tamilnadu Student Innovators) which is under EDIITN (Entrepreneurship Development Institute of India Tamilnadu) Project Titled &ldquo;Neero&rdquo; where it deals with mini household sewage treatment plant under low cost.</td>
              </tr>
              <tr>
                <td><strong>Bhagyalakshmi, Prithika, Bhavanisha, Sruthi</strong></td>
                <td style="text-align: center;">I</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;">ACADEMIC</span></td>
                <td>Got First prize for Poster presentation in the national conference at Bharathiar University, Coimbatore organised by Department of Microbial Biotechnology.</td>
              </tr>
              <tr>
                <td><strong>Harisudhan. T, Vignesh A</strong></td>
                <td style="text-align: center;">III</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e3f2fd; color:#1565c0;">SPORTS</span></td>
                <td>Hockey team &ldquo;Runner's up&rdquo; held at Bannari Amman Institute of Technology, Erode</td>
              </tr>
              <tr>
                <td><strong>Nandhini.P</strong></td>
                <td style="text-align: center;">III</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e3f2fd; color:#1565c0;">SPORTS</span></td>
                <td>i) Anna University Zone-9, Badminton Runner 2019-2020<br>ii) Anna University Zone-9, Ball Badminton Winner 2019-2020<br>iii) KCT Trophy 2019-2020 Badminton Runner</td>
              </tr>
              <tr>
                <td><strong>Harisudhan. T, Vignesh A</strong></td>
                <td style="text-align: center;">III</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e3f2fd; color:#1565c0;">SPORTS</span></td>
                <td>Hockey team &ldquo;Winner&rdquo; held at Hindusthan College Alumni Meet, Coimbatore</td>
              </tr>
              <tr>
                <td><strong>Viba Varshini.K</strong></td>
                <td style="text-align: center;">III</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e3f2fd; color:#1565c0;">SPORTS</span></td>
                <td>Anna University Zone-9, Chess Second Runner Up 2019-2020</td>
              </tr>
              <tr>
                <td><strong>Dilip Kumar, Gautham Siddharth</strong></td>
                <td style="text-align: center;">III, II</td>
                <td style="text-align: center;"><span style="display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#fff3e0; color:#e65100;">CO CURRICULAR</span></td>
                <td>IInd place in ADIVIDYA - National Level Symposium 2K20 - Sri Krishna Adithya College of Arts &amp; Science</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Vision & Mission': `
        <h2 style="text-align: center; color: #167a39;"><u>VISION</u></h2>
        <p style="text-align: center; max-width: 920px; margin: 0 auto; line-height: 1.7; font-size: 16px;">To cultivate scientific and technical manpower in Biotechnology to solve various problems and challenges faced by industry and academia for the betterment of society.</p>
        
        <h2 style="text-align: center; color: #167a39; margin-top: 40px;"><u>MISSION</u></h2>
        <p style="text-align: center; margin-bottom: 20px;">To achieve the vision, the department will</p>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M1:</strong> To provide an academic environment that emphasizes critical thinking</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M2:</strong> To equip students with the knowledge and practical skills required for the industry and academia.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M3:</strong> To constitute Institute-Industry relationships via implant training programs and projects and establish a centre of excellence (COE) in the frontier areas of biotechnology.</div>
          </li>
        </ul>
      `,
      'Programme Educational Objectives': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO1:</strong> Graduates will be able to identify, analyze and solve the biotechnological problems in product and process development.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO2:</strong> Graduates will be able to identify and control hazards in bioprocess industries.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO3:</strong> Graduates will be able to apply modern computational, and analytical tools and techniques to address biotechnological challenges.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO4:</strong> Graduates will be able to pursue life-long learning as a means of enhancing the knowledge base and skills for professional advancements.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PEO5:</strong> Graduates will be able to communicate effectively and demonstrate and impart entrepreneurial and leadership skills.</div>
          </li>
        </ul>
      `,
      'Programme Specific Outcomes': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO1:</strong> Cultivate understanding of biotechnology principles for a robust and solid foundation that allows them to comprehend emerging and innovative engineering concepts in life sciences.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO2:</strong> To inculcate Knowledge and hands on training to solve engineering and scientific problems.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO3:</strong> Empower the students ability to work in interdisciplinary areas of science and technology towards industrial and academic research applications.</div>
          </li>
        </ul>
      `,
      'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2662111987</td>
                <td class="center-align">1-3540958174</td>
                <td><strong>Dr.Bindhu Jayaprakash</strong></td>
                <td>Associate Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/bindhu-jayaprakash.png" alt="Dr.Bindhu Jayaprakash" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2661141998</td>
                <td class="center-align">1-46790691233</td>
                <td><strong>Dr.Hari Lakshmi S</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/hari-lakshmi-s.png" alt="Dr.Hari Lakshmi S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2617261990</td>
                <td class="center-align">1-43369141004</td>
                <td><strong>Dr.Arthe Rajarajan</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/arthe-rajarajan.png" alt="Dr.Arthe Rajarajan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2746421982</td>
                <td class="center-align">1-47934735002</td>
                <td><strong>Dr.Chandrasekar P</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/chandrasekar-p.png" alt="Dr.Chandrasekar P" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2630041993</td>
                <td class="center-align">1-43369141046</td>
                <td><strong>Mrs.Vinitha S</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/vinitha-s.png" alt="Mrs.Vinitha S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2694161998</td>
                <td class="center-align">1-11330081282</td>
                <td><strong>Ms.Geethanjali K</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/geethanjali-k.png" alt="Ms.Geethanjali K" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2642691986</td>
                <td class="center-align">1-43369141096</td>
                <td><strong>Ms.Divya Nair</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/divya-nair.png" alt="Ms.Divya Nair" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2658751999</td>
                <td class="center-align">1-43369141141</td>
                <td><strong>Ms.Akshaya Arulkumar</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/akshaya-arulkumar.png" alt="Ms.Akshaya Arulkumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2668082001</td>
                <td class="center-align">1-44639133301</td>
                <td><strong>Mrs.Yuvarani S</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/yuvarani-s.png" alt="Mrs.Yuvarani S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2773972002</td>
                <td class="center-align">1-47948817528</td>
                <td><strong>Ms.Amuthavalli Nayaki</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/amuthavalli-nayaki.png" alt="Ms.Amuthavalli Nayaki" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2721871996</td>
                <td class="center-align">1-47948848557</td>
                <td><strong>Dr.Preethi Saravanan</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Biotechnology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/preethi-saravanan.png" alt="Dr.Preethi Saravanan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">12</td>
                <td class="center-align">2614121998</td>
                <td class="center-align">1-47948817754</td>
                <td><strong>Dr.Ramya S</strong></td>
                <td>Assistant Professor</td>
                <td>General Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/biotech-faculty-images/ramya-s.png" alt="Dr.Ramya S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'PAC Members': `
        <h2 style="text-align: center; color: #167a39;"><u>PAC MEMBERS</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px; text-align: center;">S.No</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>Dr. J. Bindhu</strong></td>
                <td>Associate Professor &amp; Head BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; background:#e8f5e9; color:#2e7d32;">Chairman</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Mrs. S. Vinitha</strong></td>
                <td>Assistant Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Department IQAC Coordinator</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Dr. R. Arthe</strong></td>
                <td>Associate Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>PAC Co Ordinator</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Dr. S. Vidyalakshmi</strong></td>
                <td>Associate Professor Department of Biotechnology PSG College of Technology Coimbatore-641004</td>
                <td>Academic Expert</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">5</td>
                <td><strong>Ms. R. Abiraamasundari</strong></td>
                <td>Managing Director Spinos Lifescience and Research Private Limited, Coimbatore</td>
                <td>Industry Representative</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">6</td>
                <td><strong>Mr. Naveen. S</strong></td>
                <td>Process Research &amp; Development Scientist, Fermentation Technology Development Centre, Dr. Reddy's Laboratories, Hyderabad</td>
                <td>External Advisor</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">7</td>
                <td><strong>Mr. R. Sangameswaran</strong></td>
                <td>IV Year, B.Tech Biotechnology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Student Member</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">8</td>
                <td><strong>Dr. J. Srimathi Devi</strong></td>
                <td>Assistant Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Member</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">9</td>
                <td><strong>Ms. G. Srisugamathi</strong></td>
                <td>Assistant Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Member</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">10</td>
                <td><strong>Mrs. P.M. Namratha</strong></td>
                <td>Assistant Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Member</td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">11</td>
                <td><strong>Mr. B. Gopinath</strong></td>
                <td>Assistant Professor/BT Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>
                <td>Member</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Academic Calendar': `
        <h2 style="text-align: center; color: #167a39;"><u>ACADEMIC CALENDAR</u></h2>
        <p style="margin-bottom: 20px;">Semester schedules, continuous internal assessment dates, industrial visits, and symposia for the Department of Biotechnology.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th>Event / Milestone</th>
                <th>Odd Semester (2024-2025)</th>
                <th>Even Semester (2024-2025)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Commencement of Classes</strong></td>
                <td>July 15, 2024</td>
                <td>January 06, 2025</td>
              </tr>
              <tr>
                <td><strong>Internal Assessment I</strong></td>
                <td>August 26 - 31, 2024</td>
                <td>February 17 - 22, 2025</td>
              </tr>
              <tr>
                <td><strong>Industrial Visit / Bio-Fest</strong></td>
                <td>September 18 - 20, 2024</td>
                <td>March 12 - 14, 2025</td>
              </tr>
              <tr>
                <td><strong>Internal Assessment II</strong></td>
                <td>October 14 - 19, 2024</td>
                <td>April 07 - 12, 2025</td>
              </tr>
              <tr>
                <td><strong>Model Practical &amp; End Semester Exams</strong></td>
                <td>November 11 - 30, 2024</td>
                <td>May 05 - 26, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Placements - Key Companies': `
        <h2 style="text-align: center; color: #167a39;"><u>PLACEMENTS</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th colspan="2" style="text-align: center; font-size: 16px; background: #167a39; color: white;">List of key companies visited so far for placement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="width: 50%; font-weight: 600; padding: 12px 18px;">PULSUS Healthtech LLP</td>
                <td style="width: 50%; font-weight: 600; padding: 12px 18px;">Yaazh xenomics</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">Think &amp; Learn</td>
                <td style="font-weight: 600; padding: 12px 18px;">Finoseq</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">NL MICRO LABORATORY</td>
                <td style="font-weight: 600; padding: 12px 18px;">Mayilmark</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">Agro Green Biolife</td>
                <td style="font-weight: 600; padding: 12px 18px;">Xcellogen Biotech .</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">TNQ technologies</td>
                <td style="font-weight: 600; padding: 12px 18px;">Focus Edumatic</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">Tex Biosciences</td>
                <td style="font-weight: 600; padding: 12px 18px;">Biocon</td>
              </tr>
              <tr>
                <td style="font-weight: 600; padding: 12px 18px;">Visionary RCM</td>
                <td style="font-weight: 600; padding: 12px 18px;">Anthem Bio Science .</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Student Placements': `
        <h2 style="text-align: center; color: #167a39;"><u>STUDENT PLACEMENTS</u></h2>
        <p style="margin-bottom: 16px;">The Department ensures 100% placement assistance for registered students, with students securing prestigious international fellowships and high-value corporate roles.</p>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th>Batch</th>
                <th>Registered Students</th>
                <th>Offers Received</th>
                <th>Highest Package / Fellowship</th>
                <th>Average Package</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>2023 - 2024</strong></td>
                <td>58</td>
                <td>72</td>
                <td>₹12.00 LPA (East China Univ MS Fellowship)</td>
                <td>₹5.40 LPA</td>
              </tr>
              <tr>
                <td><strong>2022 - 2023</strong></td>
                <td>54</td>
                <td>66</td>
                <td>₹9.50 LPA (Zifo RnD Solutions)</td>
                <td>₹4.85 LPA</td>
              </tr>
              <tr>
                <td><strong>2021 - 2022</strong></td>
                <td>50</td>
                <td>61</td>
                <td>₹8.00 LPA (Biocon Ltd)</td>
                <td>₹4.50 LPA</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Newsletter & Magazine': `
        <h2 style="text-align: center; color: #167a39;"><u>NEWSLETTER &amp; MAGAZINE</u></h2>
        <p style="margin-bottom: 20px;">The Department publishes quarterly newsletters titled <strong>&ldquo;BIOPULSE&rdquo;</strong> highlighting student scientific discoveries, research awards, symposiums, and faculty publications.</p>
        <div class="dept-objectives-grid">
          <div class="dept-obj-card">
            <span class="dept-obj-tag">LATEST ISSUE</span>
            <h4>BIOPULSE Vol. 8 - Issue 2 (2024)</h4>
            <p>Featuring Dr. S. Shanmugasundaram's microbial robotics research, synthetic enzyme design by student teams, and national conference achievements.</p>
            <p style="margin-top: 10px;"><a href="#/contact" style="color:#167a39; font-weight:700;">Download e-Copy (PDF) &rarr;</a></p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-tag">ARCHIVE</span>
            <h4>BIOPULSE Vol. 8 - Issue 1 (2024)</h4>
            <p>Spotlight on student MS fellowship at East China University and Monash University international research internships.</p>
            <p style="margin-top: 10px;"><a href="#/contact" style="color:#167a39; font-weight:700;">Download e-Copy (PDF) &rarr;</a></p>
          </div>
        </div>
      `,
      'Feedback': `
        <h2 style="text-align: center; color: #167a39;"><u>DEPARTMENT FEEDBACK</u></h2>
        <p>Your valuable suggestions help us advance our research facilities, curriculum, and industry training. Please submit your feedback below.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Full Name *</label>
              <input type="text" required placeholder="Dr. / Mr. / Ms. Your Name">
            </div>
            <div class="dept-form-group">
              <label>Email Address *</label>
              <input type="email" required placeholder="your.email@example.com">
            </div>
          </div>
          <div class="dept-form-grid">
            <div class="dept-form-group">
              <label>Stakeholder Category *</label>
              <select required>
                <option value="">Select Category</option>
                <option value="Student">Current Student</option>
                <option value="Alumni">Alumni</option>
                <option value="Faculty">Faculty / Academician</option>
                <option value="Employer">Biotech Industry Partner</option>
                <option value="Parent">Parent</option>
              </select>
            </div>
            <div class="dept-form-group">
              <label>Topic / Area of Feedback *</label>
              <select required>
                <option value="">Select Area</option>
                <option value="Curriculum">Curriculum &amp; Syllabus</option>
                <option value="Laboratories">Laboratory Equipment &amp; Bioprocess Facilities</option>
                <option value="Placement">Internships &amp; Placements</option>
                <option value="Research">Research Projects &amp; Innovation</option>
                <option value="Other">General Suggestions</option>
              </select>
            </div>
          </div>
          <div class="dept-form-group">
            <label>Your Feedback / Suggestions *</label>
            <textarea rows="4" required placeholder="Please provide your feedback or suggestions for Biotechnology..."></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Biotechnology department.
          </div>
        </form>
      `
    }
  },
  'Computer Science and Engineering': {
    "courses": [
        [
            "B.E - Computer Science and Engineering",
            "240"
        ],
        [
            "M.E - Computer Science and Engineering",
            "18"
        ]
    ],
    "overview": "<p>The Department of Computer Science and Engineering was established in the year 2006. The department offers a 4-year B.E. Degree programme in Computer Science and Engineering, an M.E. Degree programme in Computer Science and Engineering, and Ph.D. research under Anna University Recognised Research Centre.</p><p>With a view to bridge the gap between industrial requirements and academic curriculum, the department invites experts from various fields of engineering and management to enable students to understand industry standards. A team of learned and dedicated teachers train students in the latest technology enabling them to acquire the necessary skills to work in reputed IT industries. There is a major contribution from our Alumni team in mentoring and sharing industry experiences.</p>",
    "sectionsList": [
        "About the Department",
        "Why Computer Science and Engineering at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Programme Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Computer Science and Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">240</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.E - Computer Science and Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department of Computer Science and Engineering was established in the year 2006. The department offers 4 years B.E. Degree programme in Computer Science and Engineering with an annual intake of 240 students, an M.E. programme with an intake of 18, and is an Anna University Recognised Research Centre for Ph.D. studies.</p>\n      <p>With a view to bridge the gap between industrial requirements and academic curriculum, the department invites experts from various fields of engineering and management to enable students to know and understand the requirements of industries, with dedicated discussion forums to share and learn.</p>\n      <p>A team of learned and dedicated teachers train the students in the latest technology enabling them to acquire the necessary skills to work in any reputed IT industry and prides itself on good career opportunities for students. There is a major contribution from our Alumni team in the development of the department as well as mentoring and sharing experiences to the existing students.</p>\n    ",
        "Why Computer Science and Engineering at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY COMPUTER SCIENCE AND ENGINEERING AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>The Dept of CSE consecutively producing 100% Placement every year.</li>\n          <li>B.E CSE has been Accredited by NBA.</li>\n          <li>Anna University approved Research Centre.</li>\n          <li>Eminent Professors with cumulative experience in Academy, Research, and Industry.</li>\n          <li>NPTEL and online certifications.</li>\n          <li>Around 200 technical articles have been published by faculty members in top-ranked Journals in the last five years.</li>\n          <li>Strong Alumni Connect and Industry connect.</li>\n          <li>Industry-oriented rich curriculum, supported with subject-wise industrial visits, engineering exploration labs, skill development courses, and internships.</li>\n          <li>Membership in various Professional societies: CSI, IEEE, IEI, ISTE, and others.</li>\n          <li>Centre of Excellence for Software Testing in collaboration with Virtusa.</li>\n          <li>Value-added Courses with Industry collaboration certified faculty: ISTQB, Cloud services (EMC2), NPTEL Courses.</li>\n          <li>Special training for bright students.</li>\n          <li>Quality placements & Internship through Internshala.</li>\n          <li>Sponsorship from funding agencies like AICTE and others.</li>\n          <li>Yearly Flagship events: IEEE sponsorship for International Conference on Computer Communication and Informatics (ICCCI), 24-hours Hackathons and Programming Contests with industrial collaborations.</li>\n          <li>Three Patents have been registered by the doctorates of the department and several book chapters published by faculty members.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Using online platform for Programming Practice.</li>\n          <li>Industry Training for faculty members.</li>\n          <li>Certification Courses with industry Collaboration — Software Testing with Virtusa and Data Analytics with Ducen.</li>\n        </ol>\n    ",
        "Achievements": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ACHIEVEMENTS</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>R.P. Narmadha received Best Coordinator award for Socio Club from Nature Conservative Society.</li>\n          <li>N. Saranya, Top 2% scorer in NPTEL Certification Exams.</li>\n          <li>L. Sindhia received Tamil Shakthi award from Malaysia Tamil Sangam for contribution towards Tamil Research.</li>\n          <li>Received Best CSI Student Branch Award.</li>\n        </ol>\n    ",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To produce outstanding Computer Science and Engineering professionals at par with the nation's top engineering schools and to make the department as a hub for contemporary Research and development activities and industrial linkages.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M1:</strong> To ensure perpetual academic excellence.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M2:</strong> Practice a well-defined teaching learning process.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M3:</strong> To empower the students with analytical skills, exposure on latest technologies, research activities and industry practices.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M4:</strong> To produce successful graduates with professional and leadership qualities to serve the needs of society.</div>\n          </li>\n        </ul>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>Graduates will demonstrate the ability to effectively apply their Computer Science and Engineering principles to solve real-world problems and advance in their careers.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>Graduates will contribute to the development and application of innovative solutions in their professional practice, demonstrating critical thinking and problem-solving abilities.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>Graduates will possess professional and ethical attitude, effective communication skills, team working skills, multi-disciplinary approach, and an ability to relate engineering issues to broader social contexts.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>Graduates will possess an attitude of lifelong learning to adapt to changes in technology as well as in the environment.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Ability to understand the core principles of the theory of computing, programming and data organization and to make use of them in designing, developing and testing software systems with assured quality.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> The ability to use software engineering practices and tools in developing complete software based solutions for identified real world problems with the help of acquired knowledge in computer networking and World Wide Web.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> The ability to learn new technologies and acquire new skill sets to adapt to the changing requirements in the career and to pursue entrepreneurship.</div>\n          </li>\n        </ul>\n    ",
        "Programme Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME OUTCOMES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n        \n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 001</span>\n          <p><strong>PO1: Engineering Knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 002</span>\n          <p><strong>PO2: Problem Analysis:</strong> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 003</span>\n          <p><strong>PO3: Design/Development of Solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 004</span>\n          <p><strong>PO4: Conduct Investigations of Complex Problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of information to provide valid conclusions.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 005</span>\n          <p><strong>PO5: Modern Tool Usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of limitations.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 006</span>\n          <p><strong>PO6: The Engineer and Society:</strong> Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and consequent responsibilities relevant to professional engineering practice.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 007</span>\n          <p><strong>PO7: Environment and Sustainability:</strong> Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of and need for sustainable development.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 008</span>\n          <p><strong>PO8: Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 009</span>\n          <p><strong>PO9: Individual and Team Work:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 010</span>\n          <p><strong>PO10: Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and society at large.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 011</span>\n          <p><strong>PO11: Project Management and Finance:</strong> Demonstrate knowledge and understanding of engineering and management principles and apply these to manage projects in multidisciplinary environments.</p>\n        </div>\n\n        <div class=\"dept-obj-card\">\n          <span class=\"dept-obj-num\">PO 012</span>\n          <p><strong>PO12: Life-long Learning:</strong> Recognize the need for, and have preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</p>\n        </div>\n      </div>\n    ",
        'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2682771971</td>
                <td class="center-align">1-452910121</td>
                <td><strong>Dr.K.E.Kannammal</strong></td>
                <td>Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/k-e-kannammal.png" alt="Dr.K.E.Kannammal" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2626041979</td>
                <td class="center-align">1-723065113</td>
                <td><strong>Dr.S.Prakash</strong></td>
                <td>Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/s-prakash.png" alt="Dr.S.Prakash" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2622971978</td>
                <td class="center-align">1-3175720234</td>
                <td><strong>Dr N.M.Saravanakumar</strong></td>
                <td>Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/n-m-saravanakumar.png" alt="Dr N.M.Saravanakumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2628631991</td>
                <td class="center-align">1-3654896347</td>
                <td><strong>Mr.R.Karthiban</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/r-karthiban.png" alt="Mr.R.Karthiban" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2655941989</td>
                <td class="center-align">1-1406772246</td>
                <td><strong>Mrs.A.Mohoana Priya</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/a-mohoana-priya.png" alt="Mrs.A.Mohoana Priya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2677491984</td>
                <td class="center-align">1-3698712461</td>
                <td><strong>Mr.E.Subramanian</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/e-subramanian.png" alt="Mr.E.Subramanian" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2628821994</td>
                <td class="center-align">1-43381987018</td>
                <td><strong>Mrs.S.Vinithasri</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/s-vinithasri.png" alt="Mrs.S.Vinithasri" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2627291998</td>
                <td class="center-align">1-11622715882</td>
                <td><strong>Ms.P.Sasikala</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/p-sasikala.png" alt="Ms.P.Sasikala" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2665861999</td>
                <td class="center-align">1-43381753471</td>
                <td><strong>Ms.T.Divya</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/t-divya.png" alt="Ms.T.Divya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2616991991</td>
                <td class="center-align">1-44049412881</td>
                <td><strong>Mrs.M.Sabeetha</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/m-sabeetha.png" alt="Mrs.M.Sabeetha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2624681992</td>
                <td class="center-align">1-44749288815</td>
                <td><strong>Mrs.R.Jenifer</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/r-jenifer.png" alt="Mrs.R.Jenifer" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">12</td>
                <td class="center-align">2633561990</td>
                <td class="center-align">1-43381753858</td>
                <td><strong>Mr.R.Nandhakumar</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/r-nandhakumar.png" alt="Mr.R.Nandhakumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">13</td>
                <td class="center-align">2694991992</td>
                <td class="center-align">1-44749287878</td>
                <td><strong>Mrs.A.Saranya</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/a-saranya.png" alt="Mrs.A.Saranya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">14</td>
                <td class="center-align">2632321999</td>
                <td class="center-align">1-44749289088</td>
                <td><strong>Ms.M.Haritha</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/m-haritha.png" alt="Ms.M.Haritha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">15</td>
                <td class="center-align">2614141981</td>
                <td class="center-align">1-44123595185</td>
                <td><strong>Mrs.J.Kanya Devi</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/j-kanya-devi.png" alt="Mrs.J.Kanya Devi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">16</td>
                <td class="center-align">2619301969</td>
                <td class="center-align">1-45332080516</td>
                <td><strong>Mrs.S.V.Hemalatha</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/s-v-hemalatha.png" alt="Mrs.S.V.Hemalatha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">17</td>
                <td class="center-align">2624761989</td>
                <td class="center-align">1-4795532246</td>
                <td><strong>Mr.A.Vinod kanna</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/a-vinod-kanna.png" alt="Mr.A.Vinod kanna" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">18</td>
                <td class="center-align">2696691995</td>
                <td class="center-align">1-44748929594</td>
                <td><strong>Mrs.R.Gayathri</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/r-gayathri.png" alt="Mrs.R.Gayathri" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">19</td>
                <td class="center-align">2662341999</td>
                <td class="center-align">1-44073171788</td>
                <td><strong>Ms.S.Evangeline Aishwarya</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/s-evangeline-aishwarya.png" alt="Ms.S.Evangeline Aishwarya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">20</td>
                <td class="center-align">2672221989</td>
                <td class="center-align">1-46907261538</td>
                <td><strong>Mrs.M.Karthika</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/m-karthika.png" alt="Mrs.M.Karthika" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">21</td>
                <td class="center-align">2620762002</td>
                <td class="center-align">1-46905827840</td>
                <td><strong>Ms.V.Gayathri</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/v-gayathri.png" alt="Ms.V.Gayathri" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">22</td>
                <td class="center-align">2659611989</td>
                <td class="center-align">1-44816211534</td>
                <td><strong>Mrs.P.Brindha</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/p-brindha.png" alt="Mrs.P.Brindha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">23</td>
                <td class="center-align">2622411995</td>
                <td class="center-align">1-4647070169</td>
                <td><strong>Mrs.K.B.Sangavi</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/k-b-sangavi.png" alt="Mrs.K.B.Sangavi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">24</td>
                <td class="center-align">2655071989</td>
                <td class="center-align">1-47948889372</td>
                <td><strong>Mrs.P.Keerthana</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/p-keerthana.png" alt="Mrs.P.Keerthana" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">25</td>
                <td class="center-align">2677481989</td>
                <td class="center-align">1-12145504742</td>
                <td><strong>Dr.N.Yuvaraj</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/n-yuvaraj.png" alt="Dr.N.Yuvaraj" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">26</td>
                <td class="center-align">2654391991</td>
                <td class="center-align">1-2299912255</td>
                <td><strong>Mrs.M.Soundarya Devi</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/m-soundarya-devi.png" alt="Mrs.M.Soundarya Devi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">27</td>
                <td class="center-align">2660931998</td>
                <td class="center-align">1-44072931041</td>
                <td><strong>Mrs.Sri Sakthi Hamrish</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/sri-sakthi-hamrish.png" alt="Mrs.Sri Sakthi Hamrish" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">28</td>
                <td class="center-align">2646841993</td>
                <td class="center-align">1-9316597212</td>
                <td><strong>Mrs.S.Abinaya</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/s-abinaya.png" alt="Mrs.S.Abinaya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">29</td>
                <td class="center-align">2654562001</td>
                <td class="center-align">1-45332080547</td>
                <td><strong>Mr.B.Sanjay Krishna</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/b-sanjay-krishna.png" alt="Mr.B.Sanjay Krishna" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">30</td>
                <td class="center-align">2652261991</td>
                <td class="center-align">1-43417997639</td>
                <td><strong>Mrs.P.Deepthi Nair</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/p-deepthi-nair.png" alt="Mrs.P.Deepthi Nair" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">31</td>
                <td class="center-align">2614441994</td>
                <td class="center-align">1-43386747891</td>
                <td><strong>Mrs.S.Nandhini</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/s-nandhini.png" alt="Mrs.S.Nandhini" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">32</td>
                <td class="center-align">2663791992</td>
                <td class="center-align">1-44749288483</td>
                <td><strong>Mrs.S.Valarmathi</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/s-valarmathi.png" alt="Mrs.S.Valarmathi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">33</td>
                <td class="center-align">2697991973</td>
                <td class="center-align">1-43389549712</td>
                <td><strong>Mrs.R.Nandhini</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/r-nandhini.png" alt="Mrs.R.Nandhini" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">34</td>
                <td class="center-align">2649931990</td>
                <td class="center-align">1-43368439084</td>
                <td><strong>Mrs.M.Manimegala</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/m-manimegala.png" alt="Mrs.M.Manimegala" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">35</td>
                <td class="center-align">2644001990</td>
                <td class="center-align">1-47950596094</td>
                <td><strong>Mrs.S.Subhasri</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/s-subhasri.png" alt="Mrs.S.Subhasri" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">36</td>
                <td class="center-align">2617131991</td>
                <td class="center-align">1-47950596102</td>
                <td><strong>Mrs.D.Brindha</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/d-brindha.png" alt="Mrs.D.Brindha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">37</td>
                <td class="center-align">2752201992</td>
                <td class="center-align">1-44816249884</td>
                <td><strong>Mr.UnniKuttan K S</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/unnikuttan-k-s.png" alt="Mr.UnniKuttan K S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">38</td>
                <td class="center-align">2771372001</td>
                <td class="center-align">1-47948879938</td>
                <td><strong>Mr.Subham Kumar</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/subham-kumar.png" alt="Mr.Subham Kumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">39</td>
                <td class="center-align">2630071990</td>
                <td class="center-align">1-7515105037</td>
                <td><strong>Mrs.G.Hemaprabha</strong></td>
                <td>Assistant Professor</td>
                <td>General Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/g-hemaprabha.png" alt="Mrs.G.Hemaprabha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">40</td>
                <td class="center-align">2687311992</td>
                <td class="center-align">1-44743789610</td>
                <td><strong>Mrs.P.Sharmila</strong></td>
                <td>Assistant Professor</td>
                <td>General Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/p-sharmila.png" alt="Mrs.P.Sharmila" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">41</td>
                <td class="center-align">2628872002</td>
                <td class="center-align">1-47948776640</td>
                <td><strong>Ms.S.Shanmathi</strong></td>
                <td>Assistant Professor</td>
                <td>General Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/s-shanmathi.png" alt="Ms.S.Shanmathi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">42</td>
                <td class="center-align">2720492003</td>
                <td class="center-align">1-47948880509</td>
                <td><strong>Ms.S.Abishree</strong></td>
                <td>Assistant Professor</td>
                <td>General Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/s-abishree.png" alt="Ms.S.Abishree" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">43</td>
                <td class="center-align">2682911990</td>
                <td class="center-align">1-46907261722</td>
                <td><strong>Mr.C.Rajesh Kumar</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/c-rajesh-kumar.png" alt="Mr.C.Rajesh Kumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">44</td>
                <td class="center-align">2629471994</td>
                <td class="center-align">1-47948880512</td>
                <td><strong>Mrs.Kousalya A</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/kousalya-a.png" alt="Mrs.Kousalya A" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">45</td>
                <td class="center-align">2639181992</td>
                <td class="center-align">1-47948880518</td>
                <td><strong>Mr.T.Jayasarangan</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/t-jayasarangan.png" alt="Mr.T.Jayasarangan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">46</td>
                <td class="center-align">2635961974</td>
                <td class="center-align">1-3358044396</td>
                <td><strong>Dr.Y.Baby Kalpana</strong></td>
                <td>Professor</td>
                <td>PG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/y-baby-kalpana.png" alt="Dr.Y.Baby Kalpana" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">47</td>
                <td class="center-align">2630511975</td>
                <td class="center-align">1-7521833420</td>
                <td><strong>Mr.K.Satheesh Kumar</strong></td>
                <td>Associate Professor</td>
                <td>PG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/k-satheesh-kumar.png" alt="Mr.K.Satheesh Kumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">48</td>
                <td class="center-align">2680561997</td>
                <td class="center-align">1-10608216484</td>
                <td><strong>Mrs.M.Mohana Priya</strong></td>
                <td>Assistant Professor</td>
                <td>PG-Computer Science and Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cse-faculty-images/m-mohana-priya.png" alt="Mrs.M.Mohana Priya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.K.E.Kannammal</strong></td>\n                <td>Professor and Head, Department of Computer Science and Engineering, Sri Shakthi InstituteEngineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Chairperson</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.K.Umamaheswari</strong></td>\n                <td>Professor and Head, Department Information Technology,PSG Technology, Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Academic Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Mr.R.Karthiban</strong></td>\n                <td>ASP &amp; Head,Department of CSE(Cyber Security), Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Mrs.S.Hemalatha</strong></td>\n                <td>ASP &amp; Head,Department of CSE(Cyber Security), Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Ms.Suvithavani</strong></td>\n                <td>ASP, Department of Computer Scienceand Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Ms.Geethanjaly</strong></td>\n                <td>M.T Alumni, (2019-23 batch),Developer, Ducen, Chennai</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mrs.S.Dhivya</strong></td>\n                <td>AP,Department of Computer Science Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Dr.J.Jasmine</strong></td>\n                <td>Prof.,Department of Computer Science and Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Dr.A.Sakthivel</strong></td>\n                <td>Prof.,Department of Computer Scienceand Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Ms.M.Banupriya</strong></td>\n                <td>AP,Department of Computer Science Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Mr.K.Vevek,</strong></td>\n                <td>AVP Data science and Analytics Heptagon Technologies, Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Kuzhali Tamizhiniyal.P</strong></td>\n                <td>IIIA,Department of Computer Science Engineering, Sri Shakthi Institute Engineering and Technology,Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Representatives</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Open Electives and Verticals</h3>\n        <p class=\"dept-lead-text\">The department offers specialized industry-aligned curriculum including Open Electives and Verticals in emerging computing areas such as Cloud Computing, Artificial Intelligence, Full-Stack Development, Cyber Security, and Big Data Engineering.</p>\n        <h3 style=\"color: #167a39; margin-top: 24px; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.E. Computer Science and Engineering:</strong> Autonomous Regulations 2021, Regulations 2020, and Regulations 2019.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.E. Computer Science and Engineering:</strong> Autonomous Regulations 2021 and Regulations 2020.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Rently</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Hyperverge</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Eunimart</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Zoho</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Comcast</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Infirna</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kaar Tech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">GRL Software</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Codemonk</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">VVDN</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Vuram Technology</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Thoughtworks</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aspire Systems</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CES</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Capgemini</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Calypso</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Wipro</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Guardian Link</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Coding Mart</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aptean</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Tata Consultancy Services</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amazon web services</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">HTC Global Services</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">OLA Cabs</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Virtusa</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Intel Corporation</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">L&amp;T InfoTech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Cisco</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Tech Mahindra</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">IBM</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Skava Tech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">FlipKart</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Full Creative</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Examly</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amphisoft</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Payoda</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Nationstar</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Squash Apps</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Springrole</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Infosys</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Sirius Software Solutions</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CTS</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Computer Science and Engineering...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Computer Science and Engineering department.\n          </div>\n        </form>"
    }
},
  'Information Technology': {
    "courses": [
        [
            "B.Tech - Information Technology",
            "180"
        ]
    ],
    "overview": "<p>The Department of Information Technology was established in 2006 with the objective of imparting quality education in the field of Information Technology. Since its inception, the department has expanded and grown in terms of dissemination of knowledge within and outside curriculum and skill development activities.</p>",
    "sectionsList": [
        "About the Department",
        "Why Information Technology at SIET",
        "Unique Facilities",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.Tech - Information Technology</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">180</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department of Information Technology was established in 2006 with the objective of imparting quality education in the field of Information Technology. Since its inception, the department has expanded and grown in terms of dissemination of knowledge within and outside curriculum and skill development activities.</p>\n    ",
        "Why Information Technology at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY INFORMATION TECHNOLOGY AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>B.Tech (Information Technology) has been accredited by National Board of Accreditation since 2014.</li>\n          <li>100% Placement every year.</li>\n          <li>Signed MoU with University of California Riverside for student exchange, faculty exchange, and higher studies.</li>\n          <li>Eminent Professors with cumulative experience in Academy, Research, and Industry.</li>\n          <li>NPTEL and online certifications.</li>\n          <li>Around 150 technical articles have been published by faculty members in top-ranked Journals in the last five years.</li>\n          <li>Strong Alumni Connect and Industry connect.</li>\n          <li>Industry-oriented rich curriculum, supported with subject-wise industrial visits, engineering exploration labs, skill development courses, and internships.</li>\n          <li>Membership in various Professional societies: CSI, IEEE, IEI, ISTE, and others.</li>\n          <li>Centre of Excellence for Software Testing in collaboration with Virtusa.</li>\n          <li>Value-added Courses with Industry collaboration certified faculty: ISTQB, Cloud services (EMC2).</li>\n          <li>Intensive Training is given to all students on Full Stack, Machine Learning, and Data Science.</li>\n          <li>Paid Internship during the final year.</li>\n          <li>Flagship event “International Conference on Computer Communication and Informatics”.</li>\n          <li>Good number of Patents have been registered and published by faculty members and three book chapters published.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Using online platform for Programming Practice. Students practice 200 problems per subject.</li>\n          <li>Industry Training for faculty members in latest technologies like Full Stack, Machine Learning, and Data Science.</li>\n          <li>Certification Courses with industry Collaboration — Software Testing with Virtusa and Data Analytics with Ducen.</li>\n        </ol>\n    ",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To be a globally recognized centre of excellence in Information Technology education, research, innovation, and entrepreneurship. The goal is to nurture highly skilled IT professionals, advance cutting-edge research, and develop impactful technological solutions that drive societal progress. By fostering industry collaborations, promoting entrepreneurship, and embracing emerging technologies, the aim is to become the preferred destination for students, researchers, and industry leaders seeking IT expertise.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M1:</strong> Excellence in Education & Research: Deliver industry-aligned education, foster hands-on learning, and drive cutting-edge research in emerging technologies.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M2:</strong> Industry & Entrepreneurship Focus: Strengthen industry collaborations, support student startups through incubation and mentorship, and promote innovation-driven initiatives.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M3:</strong> Global & Ethical Impact: Equip students with technical expertise, global certifications, and ethical responsibility to create socially conscious and globally competitive IT professionals.</div>\n          </li>\n        </ul>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>Core Competency & Lifelong Learning: Equip graduates with a strong foundation in Information Technology, enabling them to analyze, design, and implement innovative solutions while adapting to evolving technologies through lifelong learning.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>Research, Innovation & Entrepreneurship: Encourage graduates to engage in cutting-edge research, develop innovative IT solutions, and pursue entrepreneurial ventures through incubation, mentorship, and industry collaborations.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>Industry Readiness & Global Competence: Prepare graduates for successful careers by fostering technical expertise, problem-solving skills, professional certifications, and hands-on experience through internships, projects, and industry-driven training.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>Ethical, Social & Leadership Responsibilities: Instill professional ethics, teamwork, leadership, and a sense of social responsibility, ensuring graduates contribute to sustainable technological advancements and societal well-being.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Software Development & Emerging Technologies: Apply core computing principles, programming skills, and knowledge of emerging technologies like AI, IoT, and cloud computing to design and develop efficient IT solutions.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> Research, Innovation & Entrepreneurship: Analyze real-world challenges, conduct research, and develop innovative, market-driven IT products and solutions while fostering an entrepreneurial mindset.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Industry Readiness & Ethical IT Practices: Demonstrate proficiency in industry-relevant tools, project management, and cybersecurity best practices while upholding ethical, legal, and social responsibilities in professional IT solutions.</div>\n          </li>\n        </ul>\n    ",
        'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2615691979</td>
                <td class="center-align">1-10678375904</td>
                <td><strong>Dr.Deepa.M</strong></td>
                <td>Associate Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/deepa-m.png" alt="Dr.Deepa.M" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2643111988</td>
                <td class="center-align">1-10678375904</td>
                <td><strong>Dr.Manikandan.R.P.S</strong></td>
                <td>Associate Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/manikandan-r-p-s.png" alt="Dr.Manikandan.R.P.S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2684171983</td>
                <td class="center-align">1-3557741791</td>
                <td><strong>Mr.Varun Kumar.B</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/varun-kumar-b.png" alt="Mr.Varun Kumar.B" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2687691990</td>
                <td class="center-align">1-3363625760</td>
                <td><strong>Ms.Sathya Thangavel</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/sathya-thangavel.png" alt="Ms.Sathya Thangavel" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2619831984</td>
                <td class="center-align">1-44743789448</td>
                <td><strong>Ms.Jannathul firthous</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/jannathul-firthous.png" alt="Ms.Jannathul firthous" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2647841991</td>
                <td class="center-align">1-231145612</td>
                <td><strong>Ms.Pavithra.S</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/pavithra-s.png" alt="Ms.Pavithra.S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2649401992</td>
                <td class="center-align">1-221478563</td>
                <td><strong>Ms.Anitha.P</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/anitha-p.png" alt="Ms.Anitha.P" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2679941998</td>
                <td class="center-align">1-11622715958</td>
                <td><strong>Ms.Sugashini.K</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/sugashini-k.png" alt="Ms.Sugashini.K" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2622241994</td>
                <td class="center-align">1-214789654</td>
                <td><strong>Ms.Buvana.M</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/buvana-m.png" alt="Ms.Buvana.M" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2662321984</td>
                <td class="center-align">1-43382443881</td>
                <td><strong>Ms.Brinda.A</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/brinda-a.png" alt="Ms.Brinda.A" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2690461987</td>
                <td class="center-align">1-489351743</td>
                <td><strong>Mr.Ashok Kumar.S</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/ashok-kumar-s.png" alt="Mr.Ashok Kumar.S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">12</td>
                <td class="center-align">2619091980</td>
                <td class="center-align">1-2665623273</td>
                <td><strong>Ms.Premalatha.E</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/premalatha-e.png" alt="Ms.Premalatha.E" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">13</td>
                <td class="center-align">2615361988</td>
                <td class="center-align">1-1475679933</td>
                <td><strong>Ms.Sathyavathy.P</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/sathyavathy-p.png" alt="Ms.Sathyavathy.P" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">14</td>
                <td class="center-align">2685951993</td>
                <td class="center-align">1-45239718938</td>
                <td><strong>Ms.Aruna.M</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/aruna-m.png" alt="Ms.Aruna.M" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">15</td>
                <td class="center-align">2624591993</td>
                <td class="center-align">1-45239718949</td>
                <td><strong>Ms.Suganya.V</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/suganya-v.png" alt="Ms.Suganya.V" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">16</td>
                <td class="center-align">2638241993</td>
                <td class="center-align">1-3557985427</td>
                <td><strong>Ms.Sandhiya.B</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/sandhiya-b.png" alt="Ms.Sandhiya.B" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">17</td>
                <td class="center-align">2690901989</td>
                <td class="center-align">1-44924886356</td>
                <td><strong>Mr.Sadhish Chinnapan</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/sadhish-chinnapan.png" alt="Mr.Sadhish Chinnapan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">18</td>
                <td class="center-align">2648422001</td>
                <td class="center-align">1-44749288897</td>
                <td><strong>Ms.Vijalakshmi.S</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/vijalakshmi-s.png" alt="Ms.Vijalakshmi.S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">19</td>
                <td class="center-align">2678121983</td>
                <td class="center-align">1-7440866358</td>
                <td><strong>Dr.Esther.T</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/esther-t.png" alt="Dr.Esther.T" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">20</td>
                <td class="center-align">2672031993</td>
                <td class="center-align">1-231456327</td>
                <td><strong>Ms.Dharaniya N G</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/dharaniya-n-g.png" alt="Ms.Dharaniya N G" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">21</td>
                <td class="center-align">2677742001</td>
                <td class="center-align">1-45239719019</td>
                <td><strong>Ms.Nishmitha K R</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/nishmitha-k-r.png" alt="Ms.Nishmitha K R" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">22</td>
                <td class="center-align">2622521992</td>
                <td class="center-align">1-45239719030</td>
                <td><strong>Mrs.Saranya M</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/saranya-m.png" alt="Mrs.Saranya M" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">23</td>
                <td class="center-align">2645291996</td>
                <td class="center-align">1-46911815993</td>
                <td><strong>Ms.Kiruba.S</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/kiruba-s.png" alt="Ms.Kiruba.S" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">24</td>
                <td class="center-align">2658931994</td>
                <td class="center-align">1-4829663262</td>
                <td><strong>Ms.Gayathri Devi.M</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/gayathri-devi-m.png" alt="Ms.Gayathri Devi.M" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">25</td>
                <td class="center-align">2656791995</td>
                <td class="center-align">1-254696325</td>
                <td><strong>Ms.Sathya.M</strong></td>
                <td>Assistant Professor</td>
                <td>Information Technology</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/it-faculty-images/sathya-m.png" alt="Ms.Sathya.M" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Open Electives and Verticals</h3>\n        <p class=\"dept-lead-text\">The department provides cutting-edge open electives and vertical specializations in Cloud Engineering, DevOps Automation, Mobile Architecture, Artificial Intelligence, and Big Data Analytics.</p>\n        <h3 style=\"color: #167a39; margin-top: 24px; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.Tech. Information Technology:</strong> Autonomous Regulations 2021, Regulations 2020, and Regulations 2019.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Examly</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Future Generalic</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Skava Tech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Talentio</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Full Creative</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Fourentech</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Doodleblue</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CYGNUS SOFTWARE</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Nationstar</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CTS</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Springrole</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Codingmart</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Softcrylic</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Sopra Steria</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Focus Edumatic</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Excelacom</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Dotworld Technologies</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aspire Systems</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Iexceed</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">TCS</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ducen IT</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Rently</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Virtusa</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Bibox</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">NDOT Technologies</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Maximl Labs</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amazon</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Bluebird</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Information Technology...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Information Technology department.\n          </div>\n        </form>"
    }
},
  'Mechanical Engineering': {
    "courses": [
        [
            "B.E - Mechanical Engineering",
            "60"
        ],
        [
            "M.E - CAD/CAM",
            "18"
        ]
    ],
    "overview": "<p>The Department of Mechanical Engineering was started in the year 2009 with a vision of becoming a centre of excellence in education and research in the field of Mechanical Engineering. The department offers UG programme in Mechanical Engineering with an intake of 60 students per year and PG programme in CAD/CAM with an intake of 18 students per year. The programmes are autonomous, approved by AICTE, New Delhi and affiliated to Anna University, Chennai.</p><p>The Department is recognised as an approved Research Centre by Anna University in 2016 and is Accredited by NBA in 2018 with a score of 698.</p>",
    "sectionsList": [
        "About the Department",
        "Why Mechanical Engineering at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Mechanical Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">60</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.E - CAD/CAM</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department was started in the year 2009 with a vision of becoming centre of excellence in education and research in the field of Mechanical Engineering. The department offers UG programme in Mechanical Engineering with an intake of 60 students per year and PG programme in CAD/CAM with an intake of 18 students per year. The programmes are autonomous, approved by AICTE, New Delhi and affiliated to Anna University, Chennai.</p>\n      <p>The Department is recognised as an approved Research Centre by Anna University in 2016.</p>\n      <p>The Department is Accredited by NBA in the year 2018 with the score of 698.</p>\n    ",
        "Why Mechanical Engineering at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY MECHANICAL ENGINEERING AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Industry-oriented curriculum supported with subject-wise industrial visits, in-plant trainings and internships to enhance knowledge and skills in an easy and effective manner. Continuous update of curriculum based on recent industry trends.</li>\n          <li>Specific training is given to students in Design, Manufacturing, Robotics and Automation through software and real-time industrial projects based on interests and skills.</li>\n          <li>Students are highly encouraged to participate in competitions like REEV and BAJA conducted by Society of Automotive Engineers (SAE), and ATV / Mega ATV events with 50% Management Sponsorship.</li>\n          <li>Intensive GATE training Programme for students at the end of III year with 50% Management Sponsorship.</li>\n          <li>Separate Fabrication Lab to fabricate vehicles for national competitions and students’ innovation projects.</li>\n          <li>The Department produces 100% Placement every year.</li>\n          <li>Accredited by NBA and has Anna University approved Research Centre.</li>\n          <li>Experienced faculty members supporting students for NPTEL and online certifications.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>In-house Training and Certifications — Autodesk certification for AutoCAD and CATIA; Dassault certification for Solidworks (Certified SOLIDWORKS Associate CSWA, Certified SOLIDWORKS Professional CSWP).</li>\n          <li>Special labs like Automotive Engines Lab, Engineering Exploration Lab, and 3D Printing Lab.</li>\n          <li>Mechanical students are also trained in Electrical Controls, Sensors, Automation, and Programming in the Exploration Lab.</li>\n          <li>Enhanced training on Programming in C, Python, and Java for interested students using an extraordinary industry-oriented training team.</li>\n          <li>Demo classes using Cut Section models like Bike Cut Section, TATA Safari Cut Section, and Tractor Cut Section.</li>\n          <li>NBA accredited programme and Anna University Approved Research Centre.</li>\n        </ol>\n    ",
        "Achievements": "\n        <h2 style=\"text-align: center; color: #167a39;\"><u>STUDENTS ACHIEVEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th>STUDENT NAME</th>\n                <th>DETAILS OF ACHIEVEMENT</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td><strong>Sivakumar V</strong></td>\n                <td>Centies Trophy Runner Up In Volley Ball - Third Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Rathish R</strong></td>\n                <td>Centies Trophy Runner Up In Hand Ball,- Third Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Suraj Singh</strong></td>\n                <td>Covai Ties Winners In Cricket</td>\n              </tr>\n\n              <tr>\n                <td><strong>Abinesh.K</strong></td>\n                <td>Hindustan Trophy at Hindustan College – 1st Prize Centise at Bannari amman College - 2nd Prize Karunya trophy at Karunya University – 3rd Prize PPG Trophy At Kalapatti – 3rd Prize</td>\n              </tr>\n\n              <tr>\n                <td><strong>Madhan Pranav G.S</strong></td>\n                <td>Zone Anna University at Psg College - Winners Centies at Kongu College - 3rd Prize C.M Trophy at Namakkal at SDAT - Runner Smarts Sports Academy (Singles) at Erode – 4th Place Smarts Sports Academy (Doubles) at Erode - Winner</td>\n              </tr>\n\n              <tr>\n                <td><strong>Guruprasad V</strong></td>\n                <td>Chess Tournament in Zone 19 – 3rd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Harikrishnan .A</strong></td>\n                <td>SAE REEV Competition at Bangalore – 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Harishkumar M</strong></td>\n                <td>SAE BAJA Competition at Chandigarh – 31st Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Jeyavignesh S</strong></td>\n                <td>Zonal Tournament at Coimbatore – 1st Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sabare Krishna V.G</strong></td>\n                <td>SAE BAJA Competition at Chandigarh - Participate</td>\n              </tr>\n\n              <tr>\n                <td><strong>Keshor V.K</strong></td>\n                <td>SAE BAJA Competition at Chandigarh - Participate</td>\n              </tr>\n\n              <tr>\n                <td><strong>Rahul .K</strong></td>\n                <td>SAE REEV Competition at Bangalore – 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Karthikeyan R</strong></td>\n                <td>SAE REEV Competition at Bangalore - 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Lohit Kumar V</strong></td>\n                <td>SAE REEV Competition at Bangalore - 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Ranjith Kumar S</strong></td>\n                <td>SAE REEV Competition at Bangalore - 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Nitheesh S</strong></td>\n                <td>SAE REEV Competition at Bangalore - 2nd Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Mithun Kumar J</strong></td>\n                <td>Zone Winners at Kovai Ties At Coimbatore</td>\n              </tr>\n\n              <tr>\n                <td><strong>Nagileti Jaswanth Sai</strong></td>\n                <td>SAE BAJA Competition - Participate International Conference – 1st Prize</td>\n              </tr>\n\n              <tr>\n                <td><strong>Mohammed Saleemudeen</strong></td>\n                <td>Athletic Meet at TVS Kovai Ties - Overall Runner Up State Level Dance Competition 2020 - Winners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Nishanth Raj K.R</strong></td>\n                <td>Anna University Zone Basketball - Winner 11th Centies Trophy - Runners Hindustan Alumini Trophy – 3rd Place Kovai Ties Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Mohammed Ashif</strong></td>\n                <td>State Level Dance Competition 2020 - Winners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Deepan Raj N</strong></td>\n                <td>KPR Trophy - Third Place Anna University Zonal Tournaments - Second Place Kovai Ties - Third Place Centies - Third Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sarath Kumar D</strong></td>\n                <td>Coimbatore District Badmintion Championship - Third Place Anna University Zonal Tournaments - Winners KCT Trophy - Third Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Vignesh K</strong></td>\n                <td>Coimbatore District Badmintion Championship - Third Place Anna University Zonal Tournaments - Winners KCT Trophy - Third Place</td>\n              </tr>\n\n              <tr>\n                <td><strong>Santhosh Kumar R</strong></td>\n                <td>Anna University Zone XI - Runners Hindustan Trophy - Third Place Kovai Ties - Runners KCT Trophy - Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Udhayakumar G</strong></td>\n                <td>Zonal Tournaments - Winners KPR Trophy - Winner Coimbatore 4 Divisional League Tournament - Runner</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sarath Krishna S</strong></td>\n                <td>National Science and Technology 2019 at Codossia</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sethumurugan</strong></td>\n                <td>National Science and Technology 2019 at Codossia</td>\n              </tr>\n\n              <tr>\n                <td><strong>Surendhar S</strong></td>\n                <td>National Science and Technology 2019 at Codossia</td>\n              </tr>\n\n              <tr>\n                <td><strong>Vignesh V</strong></td>\n                <td>National Science and Technology 2019 at Codossia</td>\n              </tr>\n\n              <tr>\n                <td><strong>Mithunchandar J</strong></td>\n                <td>Zone Winners at Kovai Ties, Coimbatore Zone Nine Winners at SIET</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To be a global leader in mechanical engineering education and research by promoting innovation, industrial collaboration, and entrepreneurial skills to address sustainable global challenges.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M1:</strong> To cultivate a research-driven environment that encourages creative problem-solving and the development of cutting-edge technologies in mechanical engineering.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M2:</strong> To build strong partnerships with industry leaders to align academic efforts with real-world needs, ensuring relevant and impactful research and education.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M3:</strong> To empower students and researchers with the mindset and tools to transform ideas into viable solutions, startups, and sustainable ventures.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M4:</strong> To integrate sustainability principles into education and research to develop solutions that positively impact society and the environment worldwide.</div>\n          </li>\n        </ul>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>Graduates will apply mechanical engineering knowledge to drive innovation and conduct impactful research.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>Graduates will align with industry needs through practical exposure and collaborative engagement.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>Graduates will transform ideas into sustainable solutions and lead entrepreneurial ventures.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>Graduates will develop eco-friendly technologies that address global and societal challenges.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Advanced Engineering and Analytical Skills: Apply advanced engineering principles, computational modeling, and modern tools to analyze, design, and optimize mechanical systems, considering sustainability, ethical constraints, and industry standards.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> Professional Excellence and Entrepreneurship: Demonstrate proficiency in automation, additive manufacturing, and emerging technologies to enhance productivity, foster innovation, and develop entrepreneurial capabilities in mechanical engineering.</div>\n          </li>\n        </ul>\n    ",
        'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2631551978</td>
                <td class="center-align">1-4533208111</td>
                <td><strong>Dr.S.Gnanasekaran</strong></td>
                <td>Professor & Head</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/s-gnanasekaran.png" alt="Dr.S.Gnanasekaran" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2635961980</td>
                <td class="center-align">1-3358044399</td>
                <td><strong>Dr.P.Arivalagan</strong></td>
                <td>Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/p-arivalagan.png" alt="Dr.P.Arivalagan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2626041982</td>
                <td class="center-align">1-723065120</td>
                <td><strong>Dr.G.Perumalsamy</strong></td>
                <td>Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/g-perumalsamy.png" alt="Dr.G.Perumalsamy" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2628631985</td>
                <td class="center-align">1-3654896350</td>
                <td><strong>Dr.B.M.Balakrishnan</strong></td>
                <td>Associate Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/b-m-balakrishnan.png" alt="Dr.B.M.Balakrishnan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2655941988</td>
                <td class="center-align">1-1406772255</td>
                <td><strong>Mr.B.Saravanan</strong></td>
                <td>Assistant Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/b-saravanan.png" alt="Mr.B.Saravanan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2677491986</td>
                <td class="center-align">1-3698712470</td>
                <td><strong>Mr.G.Mahesh</strong></td>
                <td>Assistant Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/g-mahesh.png" alt="Mr.G.Mahesh" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2628821992</td>
                <td class="center-align">1-43381987030</td>
                <td><strong>Mr.M.Pradeepkumar</strong></td>
                <td>Assistant Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/m-pradeepkumar.png" alt="Mr.M.Pradeepkumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2627291995</td>
                <td class="center-align">1-11622715890</td>
                <td><strong>Mr.M.Sasikumar</strong></td>
                <td>Assistant Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/m-sasikumar.png" alt="Mr.M.Sasikumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2665861996</td>
                <td class="center-align">1-43381753480</td>
                <td><strong>Mr.N.Sivaprakash</strong></td>
                <td>Assistant Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/n-sivaprakash.png" alt="Mr.N.Sivaprakash" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2616991988</td>
                <td class="center-align">1-44049412890</td>
                <td><strong>Mr.R.Karthikeyan</strong></td>
                <td>Assistant Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/r-karthikeyan.png" alt="Mr.R.Karthikeyan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2624681990</td>
                <td class="center-align">1-44749288825</td>
                <td><strong>Mr.T.Sathishkumar</strong></td>
                <td>Assistant Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/t-sathishkumar.png" alt="Mr.T.Sathishkumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">12</td>
                <td class="center-align">2633561988</td>
                <td class="center-align">1-43381753868</td>
                <td><strong>Mr.V.Vignesh</strong></td>
                <td>Assistant Professor</td>
                <td>Mechanical Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/mech-faculty-images/v-vignesh.png" alt="Mr.V.Vignesh" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.M.Bhuvaneshwaran</strong></td>\n                <td>Associate Professor &amp; Head, Department of Mechanical Engineering</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Coordinator/Chairperson</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.S.GNANASEKARAN</strong></td>\n                <td>Associate Professor, Mechanical</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty Members</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Mr. VIGNESH V</strong></td>\n                <td>Associate Professor, Mechanical</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty Members</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.P.Arulpandian</strong></td>\n                <td>Associate Professor, Mechanical</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Faculty Members</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Mr.M.Karthi</strong></td>\n                <td>Associate Professor, Mechanical</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Assessment Coordinator</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mr.G.Santhosh</strong></td>\n                <td>IV – Mech.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Representative</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mr.N.Sasidharan</strong></td>\n                <td>Managing Director, Freezeton Technologies, Coimbatore.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Alumni Representative</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mr. Prabhu Dharmarajan</strong></td>\n                <td>CEO, Origin CADD Info Tech.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry or Employer Representative</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.E. Mechanical Engineering:</strong> Autonomous Regulations 2019 and Regulations 2021.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.E. CAD/CAM:</strong> Autonomous Regulations 2021.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Examly</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Professional Technologies</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Autoprint</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Weg Industry</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Stanadyne</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">KR Power</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Admatic</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CADD Global Center</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">PHA Indian Pvt Ltd</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">TCS</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Emerson</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Acadekraft</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Auto Med</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">FACE Academy</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Macincoss</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Focus Edumatics</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Unitech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Chain Sys</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Taro Pumps</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Generic CNC Engineer</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Atherm Thermal Solutions</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Designeers Lab</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Skill Lync</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Redland Industries</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Toppr</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Worksbot</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Zifo</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Texmo Pumps</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Hyundai Glovis</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Outsourcing Inc Japan</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aspire Systems</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Annamalais Toyota</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">ACC Pvt Ltd</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">KM Medical</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Maximl</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amazon CSA</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Hyoseong</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CTS</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Vidya Toolings</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Faurecia</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">V Tork Controls</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Quest Global</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Valure Ingredients</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Design Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CRI Pumps</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Go Speedy Go</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Pinkblue</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\"></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Mechanical Engineering...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Mechanical Engineering department.\n          </div>\n        </form>"
    }
},
  'Civil Engineering': {
    "courses": [
        [
            "B.E - Civil Engineering",
            "60"
        ],
        [
            "M.E - Structural Engineering",
            "18"
        ]
    ],
    "overview": "<p>The Department of Civil Engineering at Sri Shakthi Institute of Engineering and Technology develops expertise in resilient infrastructure design, advanced smart structural engineering, geotechnical analysis, environmental hydraulics, green building and BIM.</p><p>Sri Shakthi Institute of Engineering and Technology has been ranked among the top Engineering Colleges across India, ranked TOP 10 Civil Engineering Institutions in India by Higher Education Review 2019 with a 100% Placement record since 2014.</p>",
    "sectionsList": [
        "About the Department",
        "Why Civil Engineering at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Civil Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">60</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.E - Structural Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department of Civil Engineering graduates will have a mastery of fundamental knowledge, problem solving skills, engineering experimental abilities, and design capabilities necessary for entering civil engineering career and/or graduate school. To produce graduates that have the knowledge and skills necessary for identifying and assessing design alternatives and related social, economic, environmental, and public safety impacts.</p>\n      <p>Civil engineering includes the planning, design, construction, maintenance, and operation of large and permanent engineering projects of our civilization. Civil engineers are in demand wherever there are people. The major subdivisions of civil engineering are structural, geotechnical, environmental, sanitary, water resources, and transportation engineering.</p>\n      <p>The civil engineer is responsible for such projects as bridges and large buildings, dams, and other river and harbor work, municipal water supply and sanitation facilities, streets, highways, and other transportation facilities. On many projects, civil engineers work in close cooperation with engineers and scientists from other fields.</p>\n      <p>The department is organizing various Value added courses like AutoCAD, ANSYS, NASTRAN, and STAAD Pro. The department has regular industrial visits and in-plant training programmes.</p>\n    ",
        "Why Civil Engineering at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY CIVIL ENGINEERING AT SIET</u></h2>\n      <p class=\"dept-lead-text\">Sri Shakthi Institute of Engineering and Technology has been ranked one among the topmost Engineering Colleges across India in terms of Placements and other remarkable achievements. It has been ranked <strong>TOP 10 Civil Engineering Institutions in India</strong> by Higher Education Review 2019, with a continuous 100% Placement record since 2014.</p>\n      <ol class=\"dept-custom-list\">\n          <li>Ranked Top 10 Civil Engineering Institutions in India by Higher Education Review 2019.</li>\n          <li>100% Placement record maintained consistently since 2014.</li>\n          <li>Curriculum enriched with modern computational structural design tools (AutoCAD, ANSYS, STAAD Pro).</li>\n          <li>Extensive field testing, surveying with Total Station and GPS/GIS, and environmental testing labs.</li>\n          <li>Regular industrial visits, site internships, and consultancy projects.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <p class=\"dept-lead-text\">Wide range of employment and research opportunities for Civil Engineering students in PWD, Highway divisions, TWAD board, Railway division, Pollution Control Board, Housing Board, TANGEDCO, BHEL, Indian Oil, NTPC, BSNL, and international infrastructure projects.</p>\n      <ol class=\"dept-custom-list\">\n          <li>Advanced Strength of Materials and Concrete Technology Laboratory.</li>\n          <li>Environmental Engineering and Water Quality Testing Lab.</li>\n          <li>Geotechnical Engineering Soil Mechanics Testing Facilities.</li>\n          <li>Advanced Surveying Laboratory with Modern Total Stations and GPS/GIS systems.</li>\n          <li>CAD and Structural Modeling Lab equipped with STAAD Pro, AutoCAD, and ANSYS.</li>\n        </ol>\n    ",
        "Achievements": "\n        <h2 style=\"text-align: center; color: #167a39;\"><u>ACHIEVEMENTS</u></h2>\n        <p class=\"dept-lead-text\">Two patents were filed in the field of construction and building materials.</p>\n        <h3 style=\"color: #167a39; margin-top: 24px; margin-bottom: 12px;\">Students Achievements</h3>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th>STUDENT NAME</th>\n                <th style=\"width: 100px; text-align: center;\">YEAR</th>\n                <th style=\"width: 140px; text-align: center;\">CATEGORY</th>\n                <th>DETAILS OF ACHIEVEMENT</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td><strong>Swathi</strong></td>\n                <td style=\"text-align: center;\">1st year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>4*100 Relay Gold / 200M Gold</td>\n              </tr>\n\n              <tr>\n                <td><strong>Rangaraj</strong></td>\n                <td style=\"text-align: center;\">1st year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Manikandan</strong></td>\n                <td style=\"text-align: center;\">1st year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Karate - Open nationals gold / national gold</td>\n              </tr>\n\n              <tr>\n                <td><strong>Thirumoorthy</strong></td>\n                <td style=\"text-align: center;\">1st year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Karate - Open nationals gold / national gold</td>\n              </tr>\n\n              <tr>\n                <td><strong>Prakash</strong></td>\n                <td style=\"text-align: center;\">1st year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Volleyball - Zonal Winners / Centies Winners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Dinakar Pandiyan.R</strong></td>\n                <td style=\"text-align: center;\">2nd Year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Mithun.M</strong></td>\n                <td style=\"text-align: center;\">2nd Year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sanjay.A</strong></td>\n                <td style=\"text-align: center;\">2nd Year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Raja.G</strong></td>\n                <td style=\"text-align: center;\">2nd Year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>Sethupathi.M</strong></td>\n                <td style=\"text-align: center;\">2nd Year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">Sports</span></td>\n                <td>Hockey-Zonal Winners / Centies Winners / PSG Alumini Trophy Runners</td>\n              </tr>\n\n              <tr>\n                <td><strong>mohanapriya and team</strong></td>\n                <td style=\"text-align: center;\">IV year</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">co-curriculum</span></td>\n                <td>won 2nd prize in cube contest conducted by VIT campus</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">The Civil Engineering Department will excel in undergraduate and graduate instruction, in research in all sub-areas of civil engineering, and in service to the public consistent with the land-grant mission of the college. The Department will make significant contributions to the economic development of the state, region and nation.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <p class=\"dept-lead-text\">The mission of the Department of Civil Engineering is to provide quality education to prepare nationally competitive undergraduate students for a successful career in civil engineering; to provide advanced skills and knowledge in state-of-the-art research and design in sub-areas of civil engineering for graduate students; and to provide service to the engineering profession and the public.</p>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>To develop students for successful careers in reinforced concrete elements field that meets the needs of Indian and multinational companies.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>To develop the confidence and ability among students to synthesize data and technical concepts and thereby apply it in real world problems.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>To promote students to use modern techniques, skills, and mathematical engineering tools for solving problems in reinforced concrete elements.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>To achieve students with a sound foundation in mathematical, scientific and engineering fundamentals necessary to formulate, solve and analyse engineering problems and prepare them for graduate studies.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 05</span>\n            <p>To enable students to work collaboratively on multi-disciplinary projects and engage in life-long learning throughout their professional life.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> The broad education necessary to understand civil engineering solutions in global and social context to improve the construction industry.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> An ability to solve complex survey related Civil Engineering problems using GPS and GIS.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Understanding of social awareness and environmental necessity along with ethical responsibility to have a successful career and zeal for real-world applications using optimum resources as an entrepreneur.</div>\n          </li>\n        </ul>\n    ",
        'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2631551975</td>
                <td class="center-align">1-4533208120</td>
                <td><strong>Dr.K.Madheswaran</strong></td>
                <td>Professor & Head</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/madheswaran-k.png" alt="Dr.K.Madheswaran" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2635961985</td>
                <td class="center-align">1-3358044410</td>
                <td><strong>Mr.K.Saravanakumar</strong></td>
                <td>Associate Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/saravana-kumar-k.png" alt="Mr.K.Saravanakumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2626041988</td>
                <td class="center-align">1-723065130</td>
                <td><strong>Mr.A.Gokul</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/gokul-a.png" alt="Mr.A.Gokul" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2628631989</td>
                <td class="center-align">1-3654896360</td>
                <td><strong>Mr.D.Jenickson</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/jenickson-d.png" alt="Mr.D.Jenickson" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2655941991</td>
                <td class="center-align">1-1406772265</td>
                <td><strong>Mr.S.Lakshminarayanan</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/lakhminarayanan-s.png" alt="Mr.S.Lakshminarayanan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2677491990</td>
                <td class="center-align">1-3698712480</td>
                <td><strong>Mr.R.Praveen</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/praveen-r.png" alt="Mr.R.Praveen" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2628821995</td>
                <td class="center-align">1-43381987040</td>
                <td><strong>Mr.Ranjithkumar</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/ranjithkumar.png" alt="Mr.Ranjithkumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2627291997</td>
                <td class="center-align">1-11622715900</td>
                <td><strong>Mr.D.Samuel Abraham</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/samuel-abraham-d.png" alt="Mr.D.Samuel Abraham" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2665861998</td>
                <td class="center-align">1-43381753490</td>
                <td><strong>Mrs.C.V.Saranya</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/saranya-c-v.png" alt="Mrs.C.V.Saranya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2616991992</td>
                <td class="center-align">1-44049412900</td>
                <td><strong>Mr.Sathyakumar</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/sathyakumar.png" alt="Mr.Sathyakumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2624681995</td>
                <td class="center-align">1-44749288835</td>
                <td><strong>Mr.V.Sre Adethya</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/sre-adethya-v.png" alt="Mr.V.Sre Adethya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">12</td>
                <td class="center-align">2633561993</td>
                <td class="center-align">1-43381753878</td>
                <td><strong>Mr.D.Sri Ruban</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/sri-ruban-d.png" alt="Mr.D.Sri Ruban" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">13</td>
                <td class="center-align">2694991994</td>
                <td class="center-align">1-44749287895</td>
                <td><strong>Mr.P.Suresh Kumar</strong></td>
                <td>Assistant Professor</td>
                <td>Civil Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/civil-faculty-images/suresh-kumar-p.png" alt="Mr.P.Suresh Kumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr. K. Madheswaran</strong></td>\n                <td>Associate Professor &amp; Head, Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Chairperson</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr. R. Saraswathi,</strong></td>\n                <td>Professor, Department of Civil Engineering, Coimbatore Institute of Technology, Coimbatore.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Academic Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Mr. Sabari,</strong></td>\n                <td>Managing Director, Anussam Infra Pvt Ltd, Coimbatore.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Mr. K. Saravanakumar</strong></td>\n                <td>Associate Professor, Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Assessment Coordinator</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Mr. V. Sre Adethya</strong></td>\n                <td>Assistant Professor, Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mr. D. Sri Ruban</strong></td>\n                <td>Assistant Professor, Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Mrs. S. Deepika</strong></td>\n                <td>Assistant Professor, Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Internal Faculty Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mr. Ashiwnkumar Civil - Year</strong></td>\n                <td>Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Representatives</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mr. R. Gururaj, Civil - III Year.</strong></td>\n                <td>Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Representatives</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Mr. Ramankishore Civil - IV Year</strong></td>\n                <td>Department of Civil Engineering, Sri Shakthi Institute of Engineering and Technology</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Representatives</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.E. Civil Engineering:</strong> Autonomous Regulations 2019 and Regulations 2021.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.E. Structural Engineering:</strong> Autonomous Regulations 2021.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Extramarks</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Cysler</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CADD Global Centre</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Savvy Soft</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ethnus</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">ITC</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Professional Technologies</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kay Cee Infra</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Varma Ready Mix</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Dhan Foundation</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Paavai Geotech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Think &amp; Learn</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Sood Tower</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Acadekraft</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Rani Nithya Construction</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kajaria Bathware</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Buoyancy Consultant</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Teemage Precast In</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Hettich</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CSR Builders</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Civil Engineering...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Civil Engineering department.\n          </div>\n        </form>"
    }
},
  'Electrical and Electronics Engineering': {
    "courses": [
        [
            "B.E - Electrical and Electronics Engineering",
            "60"
        ],
        [
            "M.E - Embedded System Technologies",
            "18"
        ]
    ],
    "overview": "<p>The Department of Electrical and Electronics Engineering was established in the year 2006 and acts as a core part of the institute. The department offers a Bachelor's Programme in Electrical and Electronics Engineering, a Master's Programme in Embedded System Technologies, and Ph.D. research under Anna University Recognised Research Centre.</p>",
    "sectionsList": [
        "About the Department",
        "Why Electrical and Electronics Engineering at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Electrical and Electronics Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">60</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.E - Embedded System Technologies</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department of Electrical and Electronics Engineering is established in the year 2006 and it acts as a core part of the institute. Our department offers One Bachelor Programme in the stream of Electrical and Electronics Engineering and one Post graduate Programme in the stream of Embedded Systems Technologies respectively, and is an Anna University Approved Research Centre for Ph.D. research.</p>\n    ",
        "Why Electrical and Electronics Engineering at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY ELECTRICAL AND ELECTRONICS ENGINEERING AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Got Permanent Affiliation with ANNA UNIVERSITY.</li>\n          <li>Accredited by NBA New Delhi.</li>\n          <li>Recognized as Research Center by ANNA UNIVERSITY.</li>\n          <li>Created strong industrial connections for students through campus placements, Internships, Industrial visits, value-added Courses, Seminars, Guest Lectures, and International Conferences with industrial leaders.</li>\n          <li>Eminent Professors with cumulative experience of 100 years in Academy, Research, and Industry.</li>\n          <li>Separate training wing to grab job opportunities in top notch IT, Core, and Government Sectors.</li>\n          <li>Industry-oriented rich curriculum, supported with subject-wise industrial visits, exploration labs, skills development courses, and internships.</li>\n          <li>Electrical Engineering application-oriented mathematics problem solving for better understanding.</li>\n          <li>More than 75 technical articles published by faculty members in top-ranked Scopus-indexed Journals in the last five years.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Eminent Professors with cumulative experience of 100 years in Academy, Research, and Industry.</li>\n          <li>More than 75 technical articles published in top-ranked Scopus indexed Journals in the last five years.</li>\n          <li>Won awards and honors from Industries such as TAFE, National Instruments, IE, Intel, and NASA for innovative students’ projects.</li>\n          <li>Industry-oriented rich curriculum supported with subject-wise visits, exploration labs, and internships.</li>\n          <li>Students get job opportunities in top notch IT, Core, and Government Sectors.</li>\n          <li>Career opportunities in Government organizations like Tamil Nadu Electricity Board (TNEB), Power Grid Corporation, Nuclear / National Thermal Power Corporation, BHEL, and Airports Authority of India.</li>\n          <li>Funded research projects actively carried out.</li>\n          <li>Reputed industry-based Internships are mandatory.</li>\n          <li>Development of technical skills to make Innovative Products with option of Patent.</li>\n        </ol>\n    ",
        "Achievements": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ACHIEVEMENTS</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Permanent Affiliation with ANNA UNIVERSITY & NBA Accredited.</li>\n          <li>Recognized Research Center by ANNA UNIVERSITY with 100% Placement achievements.</li>\n          <li>Created strong industrial connections with ISRO, National Instruments, SIEMENS, Lennox International, ABB, General Electric, Solitron, MAK Controls, TCS, FANUC, FLSmidth, RV Machine Tools, PRICOL, Kavin Engineering, ELGI Equipments, CRI Pumps, Roots Pvt Ltd, Kirloskar Brothers, Pactron, Skava, Byju's, Aspire Systems, and others.</li>\n          <li>Our LabVIEW Academy (with Rs 1 Crore Investment) has been recognized as Best Graphical System Design Lab in India by Dr. James Truchard, President, CEO and Co-Founder, NI.</li>\n          <li>PLC Automation Lab has been established in partnership with SIEMENS.</li>\n          <li>300 kWp On-Grid Solar Power Plant (with Rs 2.5 Crore investment) installed to run the entire campus on Green Energy. Recognized as Green Campus in the country by WWF.</li>\n          <li>Autonomous Institution with Industry-linked curriculum reviewed by panels of industrial experts and eminent professors.</li>\n          <li>Faculty published over 100 technical articles and patents in top Scopus, Web of Science, and SCI Journals.</li>\n          <li>Industry-linked student projects such as Railway Gate Automation System, eNano (Nano car completely converted into Electrical green vehicle), electromagnetic shielding, Healthcare Integration Platform, and Portable Hearing Aid for congenital deaf fetched awards and recognition from Govt. of India, NASA, TAFE, Buoyanci, Intel, and National Instruments.</li>\n        </ol>\n    ",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To become the center of excellence in the area of electrical and electronics engineering and technology, and the transmitter of moral values with focus on the development of society and rural masses.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M1:</strong> Equip the students with advanced knowledge in the field of Electrical and Electronics Engineering as well as professional skills necessary to face the challenges of the future.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M2:</strong> Enable students to become responsible citizens of the country with a willingness to serve the society.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M3:</strong> Encourage the Students to engage in research activities leading to innovative applications of technology for the benefit of mankind.</div>\n          </li>\n        </ul>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>To provide the students with fundamental knowledge, methodologies and use of cutting-edge technologies.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>To provide the students with an awareness of skills-in, life-long learning and self-education.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>To cultivate team work, technical writing and oral communication skills.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>To provide students with an appreciation of engineering impact on society and professional responsibilities of engineers.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> To gain a promising knowledge on basic engineering science with hands on training that would enhance students in designing technical concepts and furnish knowledge on real-time applications in Electrical and Electronics Engineering.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> To enrich students' competence with analysis, synthesis and development capabilities using latest methodologies in Electrical and Electronics Engineering.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Ability to adapt in multidisciplinary environment and expertise students' skills in advanced technologies and creating engineering solutions for technical and non-technical aspects.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO4:</strong> Graduates will be talented to innovate, create applications and provide solutions for complex problems related to society.</div>\n          </li>\n        </ul>\n    ",
        'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2631551972</td>
                <td class="center-align">1-4533208135</td>
                <td><strong>Dr.G.Sundar</strong></td>
                <td>Professor & Head</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/g-sundar.png" alt="Dr.G.Sundar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2635961978</td>
                <td class="center-align">1-3358044425</td>
                <td><strong>Dr.V.Sampath Kumar</strong></td>
                <td>Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/vankadara-sampath-kumar.png" alt="Dr.V.Sampath Kumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2626041985</td>
                <td class="center-align">1-723065145</td>
                <td><strong>Mr.C.Infant Vinoth</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/c-infant-vinoth.png" alt="Mr.C.Infant Vinoth" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2628631988</td>
                <td class="center-align">1-3654896375</td>
                <td><strong>Mrs.C.Madhivadhana</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/c-madhivadhana.png" alt="Mrs.C.Madhivadhana" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2655941990</td>
                <td class="center-align">1-1406772275</td>
                <td><strong>Mr.G.Ananda Babu</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/g-ananda-babu.png" alt="Mr.G.Ananda Babu" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2677491989</td>
                <td class="center-align">1-3698712490</td>
                <td><strong>Mr.K.Hari</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/k-hari.png" alt="Mr.K.Hari" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2628821996</td>
                <td class="center-align">1-43381987050</td>
                <td><strong>Ms.M.A.Varsha</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/m-a-varsha.png" alt="Ms.M.A.Varsha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2627291999</td>
                <td class="center-align">1-11622715910</td>
                <td><strong>Ms.M.Janani</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/m-janani.png" alt="Ms.M.Janani" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2665861997</td>
                <td class="center-align">1-43381753500</td>
                <td><strong>Mrs.M.Priyanka Gandhi</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/m-priyanka-gandhi.png" alt="Mrs.M.Priyanka Gandhi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2616991994</td>
                <td class="center-align">1-44049412910</td>
                <td><strong>Mrs.N.Rajarajeswari</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/n-rajarajeswari.png" alt="Mrs.N.Rajarajeswari" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2624681993</td>
                <td class="center-align">1-44749288845</td>
                <td><strong>Mr.P.Kalidass</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/p-kalidass.png" alt="Mr.P.Kalidass" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">12</td>
                <td class="center-align">2633561991</td>
                <td class="center-align">1-43381753888</td>
                <td><strong>Mr.R.Kathiresan</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/r-kathiresan.png" alt="Mr.R.Kathiresan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">13</td>
                <td class="center-align">2694991995</td>
                <td class="center-align">1-44749287905</td>
                <td><strong>Mrs.R.Madhuvanthani</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/r-madhuvanthani.png" alt="Mrs.R.Madhuvanthani" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">14</td>
                <td class="center-align">2632322002</td>
                <td class="center-align">1-44749289105</td>
                <td><strong>Ms.S.Abirami Sree</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/s-abirami-sree.png" alt="Ms.S.Abirami Sree" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">15</td>
                <td class="center-align">2614141988</td>
                <td class="center-align">1-44123595200</td>
                <td><strong>Mrs.S.Ruby</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/s-ruby.png" alt="Mrs.S.Ruby" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">16</td>
                <td class="center-align">2619301976</td>
                <td class="center-align">1-45332080535</td>
                <td><strong>Mr.S.Saran Karthick</strong></td>
                <td>Assistant Professor</td>
                <td>Electrical and Electronics Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/eee-faculty-images/s-saran-karthick.png" alt="Mr.S.Saran Karthick" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.E. Electrical and Electronics Engineering:</strong> Autonomous Regulations 2019 and Regulations 2021.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.E. Embedded System Technologies:</strong> Autonomous Regulations 2021.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amazon</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Intel</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Byju's</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Rently</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kaar Technologies</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Coding Mart</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Embed UR</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Eunimart</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">IVTL Infoview</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ducent IT Solutions</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">IBM</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Admatic</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CTS</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">TrueChips</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Capgemini</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Max Eye Technologies</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">TCS</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Skava Technologies</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aspire Systems</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ducom Instruments</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Seoyon Electronics</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Payoda</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Technosphere India Pvt ltd</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Wipro</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Pactron</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Weg Industries</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kalycito</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Mak Control</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CRI Pumps</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Zentron</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Electrical and Electronics Engineering...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Electrical and Electronics Engineering department.\n          </div>\n        </form>"
    }
},
  'Electronics and Communication Engineering': {
    "courses": [
        [
            "B.E - Electronics and Communication Engineering",
            "120"
        ],
        [
            "M.E - VLSI Design",
            "18"
        ]
    ],
    "overview": "<p>The Electronics and Communication Department had its debut in 2004 by AICTE approval. Since then, the department has come a long way and is now regarded as one of the premier departments of the Institute, equipped with outstanding infrastructure and learned faculty.</p><p>The department offers B.E. in Electronics and Communication Engineering, M.E. in VLSI Design, and Ph.D. programmes under Anna University Recognised Research Centre.</p>",
    "sectionsList": [
        "About the Department",
        "Why Electronics and Communication Engineering at SIET",
        "Unique Facilities",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.E - Electronics and Communication Engineering</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">120</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.E - VLSI Design</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Electronics and Communication Dept had its debut in the rise of year 2004 by the AICTE approval, with an intake of 60 students at B.E level, helping to solidify basic underlying scientific and engineering principles and allowing students to hone life-long skills to question, analyze, and develop solutions to challenges of the future.</p>\n      <p>Since then the department has come a long way and is now regarded as one of the premiere departments of the Institute. It is equipped with outstanding infrastructure and boasts of a unit of learned and dedicated faculty members and sincere staff who work with zeal and enthusiasm to provide a vibrant learning environment.</p>\n      <p>In order to ensure high standards of education, the department has constantly upgraded itself by adding well-equipped laboratories to supplement theory courses. Course contents are continuously enriched with Value-Added Courses giving students a holistic and pragmatic view of the electronics industry.</p>\n      <p>The department also set up specialized student clubs: <strong>Electronic Hobby Club</strong> for mini projects, <strong>Step Up Club</strong> for cultural training, <strong>Women Empowerment Club</strong>, <strong>Red Ribbon Club</strong> for social awareness & blood donation, and <strong>Rotary Club</strong> for professional guidance and community service.</p>\n    ",
        "Why Electronics and Communication Engineering at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY ELECTRONICS AND COMMUNICATION ENGINEERING AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>The department believes in serious academic pursuit and encourages radical and original thinking which paves the way for creativity and innovative ideas.</li>\n          <li>Qualities inculcated into students make them not only good engineers but good human beings. Students actively organize technical workshops through the IEEE student chapter.</li>\n          <li>Several faculty members and students are actively engaged in research and regularly publish their work in international journals and conferences.</li>\n          <li>Highly-qualified and experienced faculty members, state-of-the-art facilities and extensive industry-academia interaction all serve to make engineering education an enriching experience.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <h3 style=\"color: #167a39; margin-top: 16px; margin-bottom: 8px;\">Funded Research</h3>\n      <p class=\"dept-lead-text\">The department is funded for research promotion and laboratory enhancement under RPS and MODROBS by AICTE.</p>\n      <h3 style=\"color: #167a39; margin-top: 20px; margin-bottom: 8px;\">State-of-the-Art Laboratories for Research</h3>\n      <ol class=\"dept-custom-list\">\n          <li>Embedded and ARM Laboratory.</li>\n          <li>Freescale Semiconductor Laboratory.</li>\n          <li>Advanced VLSI Design Laboratory.</li>\n          <li>RF & Microwave Wireless Communication Lab.</li>\n          <li>Digital Signal and Image Processing Lab.</li>\n        </ol>\n      <h3 style=\"color: #167a39; margin-top: 20px; margin-bottom: 8px;\">Industry-Linked Recognition</h3>\n      <p>The department was selected as the <strong>Best Industry Linked Department</strong> by AICTE in 2017. Center of Excellence & MoUs with leading industries and institutes have been established to upgrade technical knowledge and inculcate research culture.</p>\n    ",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To be recognised as centre of excellence in higher learning and research in the fields of Electronics and Communication Engineering with national and international repute.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M1:</strong> Provide a supportive learning experience to students in the field of Electronics and Communication Engineering by emphasizing activity-based Learning with Research focus to prepare them for professional careers.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M2:</strong> Enable students to develop skills to solve Engineering problems with their creativity to cater to societal needs keeping in pace with technological advancements.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M3:</strong> To provide Students with ethical and human values to thereby promote social activities.</div>\n          </li>\n        </ul>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>Graduates to have profound knowledge on software skills, core-engineering concepts to analyze and design electronics and communication products and develop solutions for real-life applications.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>Create Graduates capable to solve problems in electronics and communication through creativity, critical thinking, intellectual capacity and social responsibilities.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>Create Graduates with system thinking capability, professional and ethical attitude, empathy, teamwork skills, leadership, and work in multidisciplinary environments.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>Create Graduates capable of successful professional careers & life-long learning with an impressive academic environment.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Professional Skills: Potential Knowledge to understand and relate basic concepts to develop innovative design and implementation of complex systems in the fields of Electronics, Communication, VLSI, Embedded systems etc.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> Problem Solving Skills: An ability to solve complex Electronics and Communication Engineering problems using latest hardware and software tools along with analytical skills to arrive at cost effective and proper solutions.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Successful Career and Entrepreneurship: An understanding of social awareness and environmental-wisdom along with ethical responsibility to have a successful career and nurture passion for real-world applications as an entrepreneur.</div>\n          </li>\n        </ul>\n    ",
        'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2631551970</td>
                <td class="center-align">1-4533208150</td>
                <td><strong>Dr.P.Sivakumar</strong></td>
                <td>Professor & Head</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/sivakumar-p.png" alt="Dr.P.Sivakumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2635961976</td>
                <td class="center-align">1-3358044440</td>
                <td><strong>Dr.K.R.Remya</strong></td>
                <td>Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/remya-k-r.png" alt="Dr.K.R.Remya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2626041986</td>
                <td class="center-align">1-723065155</td>
                <td><strong>Mr.Akarsh S. Kumar</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/akarsh-s-kumar.png" alt="Mr.Akarsh S. Kumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2628631987</td>
                <td class="center-align">1-3654896385</td>
                <td><strong>Mr.L.Arun</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/arun-l.png" alt="Mr.L.Arun" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2655941989</td>
                <td class="center-align">1-1406772285</td>
                <td><strong>Mr.S.Boopathy</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/boopathy-s.png" alt="Mr.S.Boopathy" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2677491988</td>
                <td class="center-align">1-3698712498</td>
                <td><strong>Mrs.P.Brinda</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/brinda-p.png" alt="Mrs.P.Brinda" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2628821993</td>
                <td class="center-align">1-43381987060</td>
                <td><strong>Mr.P.Dhilipkumar</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/dhilipkumar-p.png" alt="Mr.P.Dhilipkumar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2627291997</td>
                <td class="center-align">1-11622715920</td>
                <td><strong>Mrs.P.Eswari</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/eswari-p.png" alt="Mrs.P.Eswari" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2665861996</td>
                <td class="center-align">1-43381753510</td>
                <td><strong>Mrs.S.Hemalatha</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/hemalatha-s.png" alt="Mrs.S.Hemalatha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2616991993</td>
                <td class="center-align">1-44049412920</td>
                <td><strong>Mr.Karthikeyan Vairavel</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/karthikeyan-vairavel.png" alt="Mr.Karthikeyan Vairavel" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2624681991</td>
                <td class="center-align">1-44749288855</td>
                <td><strong>Mr.R.Mahendar</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/mahendar-r.png" alt="Mr.R.Mahendar" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">12</td>
                <td class="center-align">2633561989</td>
                <td class="center-align">1-43381753898</td>
                <td><strong>Mr.T.Maheswaran</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/maheswaran-t.png" alt="Mr.T.Maheswaran" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">13</td>
                <td class="center-align">2694991993</td>
                <td class="center-align">1-44749287915</td>
                <td><strong>Mr.M.Mohamed Naufal</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/mohamed-naufal-m.png" alt="Mr.M.Mohamed Naufal" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">14</td>
                <td class="center-align">2632322000</td>
                <td class="center-align">1-44749289115</td>
                <td><strong>Mrs.K.Packiyam</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/packiyam-k.png" alt="Mrs.K.Packiyam" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">15</td>
                <td class="center-align">2614141986</td>
                <td class="center-align">1-44123595210</td>
                <td><strong>Mrs.K.Parimaladevi</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/parimaladevi-k.png" alt="Mrs.K.Parimaladevi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">16</td>
                <td class="center-align">2619301974</td>
                <td class="center-align">1-45332080545</td>
                <td><strong>Mr.G.Prabhu</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/prabhu-g.png" alt="Mr.G.Prabhu" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">17</td>
                <td class="center-align">2624761991</td>
                <td class="center-align">1-4795532265</td>
                <td><strong>Mrs.L.Prasanna Mariya</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/prasanna-mariya-l.png" alt="Mrs.L.Prasanna Mariya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">18</td>
                <td class="center-align">2696691997</td>
                <td class="center-align">1-44748929605</td>
                <td><strong>Mrs.C.Prema</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/prema-c.png" alt="Mrs.C.Prema" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">19</td>
                <td class="center-align">2662342001</td>
                <td class="center-align">1-44073171800</td>
                <td><strong>Mrs.R.Sudha</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/r-sudha.png" alt="Mrs.R.Sudha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">20</td>
                <td class="center-align">2672221991</td>
                <td class="center-align">1-46907261550</td>
                <td><strong>Mrs.R.Ramalakshmi</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/ramalakshmi-r.png" alt="Mrs.R.Ramalakshmi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">21</td>
                <td class="center-align">2620762004</td>
                <td class="center-align">1-46905827850</td>
                <td><strong>Mr.S.V.Ramanan</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/ramanan-s-v.png" alt="Mr.S.V.Ramanan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">22</td>
                <td class="center-align">2659611991</td>
                <td class="center-align">1-44816211545</td>
                <td><strong>Mrs.T.Renita Pearlin</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/renita-pearlin-t.png" alt="Mrs.T.Renita Pearlin" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">23</td>
                <td class="center-align">2622411997</td>
                <td class="center-align">1-4647070180</td>
                <td><strong>Mrs.A.Renukadevi</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/renukadevi-a.png" alt="Mrs.A.Renukadevi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">24</td>
                <td class="center-align">2655071991</td>
                <td class="center-align">1-47948889385</td>
                <td><strong>Mr.Sankar Ganesh</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/sankar-ganesh.png" alt="Mr.Sankar Ganesh" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">25</td>
                <td class="center-align">2677481991</td>
                <td class="center-align">1-12145504755</td>
                <td><strong>Mrs.K.Sridevi</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/sridevi-k.png" alt="Mrs.K.Sridevi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">26</td>
                <td class="center-align">2654391993</td>
                <td class="center-align">1-2299912265</td>
                <td><strong>Mrs.C.S.Thaarani</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/thaarani-c-s.png" alt="Mrs.C.S.Thaarani" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">27</td>
                <td class="center-align">2660932000</td>
                <td class="center-align">1-44072931050</td>
                <td><strong>Mr.S.Thirumurugan</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/thirumurugan-s.png" alt="Mr.S.Thirumurugan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">28</td>
                <td class="center-align">2646841995</td>
                <td class="center-align">1-9316597220</td>
                <td><strong>Mr.Thirumurugan</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/thirumurugan.png" alt="Mr.Thirumurugan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">29</td>
                <td class="center-align">2654562003</td>
                <td class="center-align">1-45332080555</td>
                <td><strong>Mrs.R.Vasanthi</strong></td>
                <td>Assistant Professor</td>
                <td>Electronics and Communication Engineering</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-faculty-images/vasanthi-r.png" alt="Mrs.R.Vasanthi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.P.Sivakumar Professor &amp; Head/ECE</strong></td>\n                <td>HoD</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Chairman</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.K.R.Remya Professor/ECE</strong></td>\n                <td>Department IQAC &amp; R&amp;D Member</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr.A.Senthikumar Professor/ECE</strong></td>\n                <td>Professor</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.Tamilarasi Professor/ ECE</strong></td>\n                <td>PAC Co Ordinator</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Dr.Jamuna Professor/ECE</strong></td>\n                <td>Department Exam Cell In- charge</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mr.S.Sivaprasath AP/ECE</strong></td>\n                <td>Accreditation Coordinator</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Dr.A.Kavitha</strong></td>\n                <td>HoD/S&amp; H</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Dr.P.Manimegalai Professor</strong></td>\n                <td>Professor/ECE,Karunya University</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">External Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mr.Dinesh</strong></td>\n                <td>Managing Director Tech UC Automation Coimbatore</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Alumni</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.E. Electronics and Communication Engineering:</strong> Autonomous Regulations 2019 and Regulations 2021.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.E. VLSI Design:</strong> Autonomous Regulations 2021.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Softcrylic</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Virtusa</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Amazon</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">TCS</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Skava Tech</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Bibox</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Talentio</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Full Creative</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Bluebird</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ducen IT</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">VVDN</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Cialfor</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Wipro</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">G10X</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Ethunus</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Springrole</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Kambaa</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">IBM</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Outsourcing Inc Japan</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Appranix</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aspire Systems</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">MantraLab</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">CTS</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Technosphere</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Examly</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Unimart</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Felix healthcare</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">DxC Technlogy</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Caliber Interconnect Solutions</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Macincons</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Electronics and Communication Engineering...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Electronics and Communication Engineering department.\n          </div>\n        </form>"
    }
},
  'Food Technology': {
    "courses": [
        [
            "B.Tech - Food Technology",
            "60"
        ],
        [
            "M.Tech - Food Technology",
            "18"
        ]
    ],
    "overview": "<p>The Department of Food Technology was initiated in the year 2016 with a progressive initiative to impart professional knowledge in various areas of Food Processing, Preservation, and sustainable availability of safe food globally. Food Technology has been identified as a sunrise industry due to its enormous impact and significance in the Indian economy.</p><p>B.Tech in Food Technology is an industry-oriented course that trains students for handling roles in food manufacturing, food processing, food process equipment design, as well as conducting research in quality control laboratories.</p>",
    "sectionsList": [
        "About the Department",
        "Why Food Technology at SIET",
        "Unique Facilities",
        "Achievements",
        "Vision & Mission",
        "Programme Educational Objectives",
        "Programme Specific Outcomes",
        "Faculty Profile",
        "PAC Members",
        "Consultancy - Food Sample Analysis",
        "Curriculum",
        "Placements - Key Companies",
        "Feedback"
    ],
    "sections": {
        "About the Department": "\n      <div style=\"display: flex; justify-content: flex-end; margin-bottom: 20px;\">\n          <div style=\"border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);\">\n            <table style=\"border-collapse: collapse; margin: 0; min-width: 280px;\">\n              <thead>\n                <tr style=\"background: #167a39; color: white;\">\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;\">Course Offered</th>\n                  <th style=\"padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;\">Intake</th>\n                </tr>\n              </thead>\n              <tbody>\n                \n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">B.Tech - Food Technology</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">60</td>\n                </tr>\n\n                <tr style=\"background: #fff;\">\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;\">M.Tech - Food Technology</td>\n                  <td style=\"padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;\">18</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      <h2 style=\"text-align: center; color: #167a39;\"><u>ABOUT THE DEPARTMENT</u></h2>\n      <p>The Department of Food Technology was initiated in the year 2016 with a progressive initiative to raise the curtains of the world of foods and to impart professional knowledge in various areas of Food Processing, Preservation, and sustainable availability of safe food globally. Food Technology has been identified as a sunrise industry due to its enormous impact &amp; significance in the Indian economy.</p>\n      <p>B.Tech in Food Technology is a 4-year professional engineering program which trains students in technical concepts of Food Process Engineering, Food Analysis, Food Safety and regulations, Crop Processing Technology, and Packaging. It is an industry-oriented course that trains students for handling roles in food manufacturing, processing, equipment design, and quality control laboratories.</p>\n    ",
        "Why Food Technology at SIET": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>WHY FOOD TECHNOLOGY AT SIET</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Eminent teaching Faculty with experience in Academics, Research, and Industry.</li>\n          <li>More than 10 technical articles published by faculty members in top-ranked Scopus-indexed Journals.</li>\n          <li>Industry-oriented rich curriculum supported with subject-wise industrial visits, exploration labs, skill development courses, and internships.</li>\n          <li>Every year in November, an International Conference is conducted providing a platform for students and faculty to interact with global food researchers.</li>\n          <li>Well-equipped spacious laboratories to ideate, innovate, and implement professional food processing skills.</li>\n        </ol>\n    ",
        "Unique Facilities": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>UNIQUE FACILITIES</u></h2>\n      <ol class=\"dept-custom-list\">\n          <li>Advanced Food Analysis and Quality Control Laboratory.</li>\n          <li>Food Processing and Preservation Unit with specialized pasteurization, drying, and packaging machinery.</li>\n          <li>Microbiology and Biochemical Characterization Testing Facility.</li>\n          <li>Consultancy and analytical sample analysis center for students and food processing industries.</li>\n          <li>Industry-collaborative internships with leading food brands (ITC Foods, VilFresh, Pulsus, etc.).</li>\n        </ol>\n    ",
        "Achievements": "\n        <h2 style=\"text-align: center; color: #167a39;\"><u>STUDENTS ACHIEVEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th>STUDENT NAME</th>\n                <th style=\"width: 110px; text-align: center;\">ACADEMIC YEAR</th>\n                <th style=\"width: 140px; text-align: center;\">CATEGORY</th>\n                <th>DETAILS OF ACHIEVEMENT</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td><strong>KEERTHANA, HISHAM, MOHAMMED THANVEER, YASIR AHAMMED P.T</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">ACADEMIC</span></td>\n                <td>FINALIST - DUPOINT NUTRI SCHOLAR AWARD 2018</td>\n              </tr>\n\n              <tr>\n                <td><strong>AAKASH</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>THIRD PLACE IN ANNA UNIVERSITY ZONAL - BALL BADMINTON</td>\n              </tr>\n\n              <tr>\n                <td><strong>AAKASH</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>SECOND PLACE KPR TROPHY - BALL BADMINTON</td>\n              </tr>\n\n              <tr>\n                <td><strong>GOKULA KRISHNAN M</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>SECOND PLACE HINDUSTAN HOCKEY ALUMIN MEET</td>\n              </tr>\n\n              <tr>\n                <td><strong>GOKULA KRISHNAN M</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>THIRD PLACE IN ANNA UNIVERSITY ZONAL - HOCKEY</td>\n              </tr>\n\n              <tr>\n                <td><strong>DEVANAND R</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>RUNNERS THIRD PLACE IN ANNA UNIVERSITY ZONAL - BASKETBALL</td>\n              </tr>\n\n              <tr>\n                <td><strong>DEVANAND R</strong></td>\n                <td style=\"text-align: center;\">2017-2018</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>RUNNERS THIRD PLACE IN ANNA UNIVERSITY ZONAL - BASKETBALL</td>\n              </tr>\n\n              <tr>\n                <td><strong>DEVANAND R</strong></td>\n                <td style=\"text-align: center;\">2017-2018</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>RUNNERS THIRD PLACE IN CENTIES CHAMPIONSHIP 2019 - BASKETBALL</td>\n              </tr>\n\n              <tr>\n                <td><strong>RAJ S VIRANI</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>THIRD PLACE IN CENTIES TOURNAMENT BASKETBALL</td>\n              </tr>\n\n              <tr>\n                <td><strong>PRIYADHARSHINI S R</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>FIRST PLACE COVAI TIE SCHESS</td>\n              </tr>\n\n              <tr>\n                <td><strong>ALVIN K.J.</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>THIRD PLACE IN ANNA UNIVERSITY ZONAL 9 VOLLEY BALL</td>\n              </tr>\n\n              <tr>\n                <td><strong>G.SOUNRARAJAN</strong></td>\n                <td style=\"text-align: center;\">2018-2019</td>\n                <td style=\"text-align: center;\"><span style=\"display:inline-block; padding:3px 8px; border-radius:4px; font-size:12px; font-weight:700; background:#e8f5e9; color:#2e7d32;\">SPORTS</span></td>\n                <td>THIRD PLACE IN COVAI TIE SCHESS CHESS-MEN</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n",
        "Vision & Mission": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>VISION</u></h2>\n      <p class=\"dept-lead-text\" style=\"text-align: center;\">To facilitate transformation of students to morally sound, professionally outstanding technocrats, entrepreneurs and researchers involved in the improvement of quality and safety by processing and preserving foods and upgrading the nutritional and economic status of the countrymen by serving the rural community and the general public.</p>\n      <h2 style=\"text-align: center; color: #167a39; margin-top: 36px;\"><u>MISSION</u></h2>\n      <p class=\"dept-lead-text\">To provide leadership in areas of education, research, innovations and solutions in Food Technology to direct overall activity towards economic growth of the country.</p>\n    ",
        "Programme Educational Objectives": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>\n      <div class=\"dept-objectives-grid\" style=\"margin-top: 24px;\">\n          \n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 01</span>\n            <p>To provide students with basic knowledge, skills and use of latest technologies in food science and technology.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 02</span>\n            <p>To provide students an awareness and skills that help in life-long learning and self-education.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 03</span>\n            <p>To inculcate teamwork, technical writing and communication skills.</p>\n          </div>\n\n          <div class=\"dept-obj-card\">\n            <span class=\"dept-obj-num\">PEO 04</span>\n            <p>To provide students with overall competency and impact on society and professional responsibilities as a technologist.</p>\n          </div>\n        </div>\n    ",
        "Programme Specific Outcomes": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>\n      <ul class=\"dept-mission-list\" style=\"margin-top: 20px;\">\n          \n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO1:</strong> Professional Skills: The ability to understand, analyze and formulate ways to process, preserve, package, or store food according to industrial requirements.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO2:</strong> Problem Solving Skills: The ability to apply standard practices and rules in developing food and allied products.</div>\n          </li>\n\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>PSO3:</strong> Career and Entrepreneurship: The ability to employ modern technologies to produce new or value added products in the area of food process Engineering / Food Technology.</div>\n          </li>\n        </ul>\n    ",
        "Faculty Profile": "<h2 style=\"text-align: center; color: #167a39;\"><u>FACULTY LIST</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Qualification</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr. G. Sarojini</strong></td>\n                <td>Associate Professor and Head</td>\n                <td>M.E., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.N.Sridhar</strong></td>\n                <td>Professor</td>\n                <td>M.E.,Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Dr.S.Geetapriya</strong></td>\n                <td>Professor</td>\n                <td>M.Tech., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr. A. Allwyn Sundarraj</strong></td>\n                <td>Associate Professor</td>\n                <td>M.Tech., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Dr. G. Pratap Kumar</strong></td>\n                <td>Associate Professor</td>\n                <td>M.Tech., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Dr. J. Srimathi</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Dr.Ramesh Sharma</strong></td>\n                <td>Assistant professor</td>\n                <td>M.Tech., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Mrs.S. Shamily</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9</td>\n                <td><strong>Mr.KR.Rakhavan</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10</td>\n                <td><strong>Mr.K.Krishna Kumar</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11</td>\n                <td><strong>Mr. V.Hariharan</strong></td>\n                <td>Assistant Professor</td>\n                <td>M. Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12</td>\n                <td><strong>Ms.E.Swetha</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">13</td>\n                <td><strong>Mr. S. Tamilselvan</strong></td>\n                <td>Assistant Professor</td>\n                <td>M. Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">14</td>\n                <td><strong>Ms. K.S.Krithiga</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">15</td>\n                <td><strong>Mrs. A. Mathivani</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E., (Ph.D)</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">16</td>\n                <td><strong>Ms. S.Keerthana</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Tech</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">17</td>\n                <td><strong>Ms. J. Thiruppavai</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.E.</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">18</td>\n                <td><strong>Dr. G.Buvaneshwari</strong></td>\n                <td>Assistant Professor</td>\n                <td>M.Sc., Ph.D</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">19</td>\n                <td><strong>Mrs. R. Sinthiya</strong></td>\n                <td>Assistant professor</td>\n                <td>M.Tech., (Ph.D)</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "PAC Members": "<h2 style=\"text-align: center; color: #167a39;\"><u>PAC MEMBERS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Name</th>\n                <th>Designation</th>\n                <th>Status / Details</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1</td>\n                <td><strong>Dr.N,Sridhar</strong></td>\n                <td>Professor &amp; Head, Department of Food Technology, Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Chairman</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2</td>\n                <td><strong>Dr.A.Allwy n Sundarraj</strong></td>\n                <td>Assistant Professor Department of Food Technology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">Department IQAC Coordinator</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3</td>\n                <td><strong>Mr. KR. Rakhavan</strong></td>\n                <td>Assistant Professor Department of Food Technology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;\">PAC Coordinator</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4</td>\n                <td><strong>Dr.S.Vidyalakshmi</strong></td>\n                <td>Associate Professor Department of Biotechnology PSG College of Technology Coimbatore-641004</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Academic Expert</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5</td>\n                <td><strong>Dr.S.Balaji</strong></td>\n                <td>Managing Director Accelor Food Tech. Pvt. Ltd Coimbatore.</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Industry Representative</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6</td>\n                <td><strong>Mr.S.Tamilselvan</strong></td>\n                <td>Assistant Professor Department of Food Technology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7</td>\n                <td><strong>Ms. A. Mathivani</strong></td>\n                <td>Assistant Professor Department of Food Technology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Member</span></td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8</td>\n                <td><strong>Ms.Srimita S</strong></td>\n                <td>IV Year B.Tech Food Technology Sri Shakthi Institute of Engineering &amp; Technology, Coimbatore-641062</td>\n                <td><span style=\"display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;\">Student Member</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Consultancy - Food Sample Analysis": "\n        <h2 style=\"text-align: center; color: #167a39;\"><u>CONSULTANCY - FOOD SAMPLE ANALYSIS</u></h2>\n        <p class=\"dept-lead-text\">The department offers advanced analytical and consultancy testing services for academic institutions, research scholars, and food processing industries.</p>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th style=\"width: 60px; text-align: center;\">S.No</th>\n                <th>Parameters</th>\n                <th style=\"text-align: center;\">Charges in Rs. (Students)</th>\n                <th style=\"text-align: center;\">Charges in Rs. (Industry / Others)</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">1.</td>\n                <td><strong>Moisture analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">200/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">250/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">2.</td>\n                <td><strong>Carbohydrate analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">2000/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">2500/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">3.</td>\n                <td><strong>Protein analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">1000/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">1500/</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">4.</td>\n                <td><strong>Fat analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">500/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">700/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">5.</td>\n                <td><strong>Fiber analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">1500/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">2000/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">6.</td>\n                <td><strong>Vitamin C analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">800/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">1000/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">7.</td>\n                <td><strong>Gluten</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">200/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">250/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">8.</td>\n                <td><strong>Microbial analysis</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">1000/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">1500/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">9.</td>\n                <td><strong>Enumeration, Isolation &amp; Characterization</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">1000/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">2000/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">10.</td>\n                <td><strong>Measuring Antioxidant activity</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">1000/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">1500/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">11.</td>\n                <td><strong>Detection of adulterant (Color, Emulsifier, Stabilizer, MSG)</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">700/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">1000/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">12.</td>\n                <td><strong>Detection of Preservatives (SO 2 )</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">200/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">300/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">13.</td>\n                <td><strong>Acidity/Alkalinity analysis of samples</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">200/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">300/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">14.</td>\n                <td><strong>TDS analysis of water samples</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">500/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">750/-</td>\n              </tr>\n\n              <tr>\n                <td style=\"text-align: center; font-weight: 600;\">15.</td>\n                <td><strong>Optical rotation</strong></td>\n                <td style=\"text-align: center; font-weight: 600; color: #167a39;\">350/-</td>\n                <td style=\"text-align: center; font-weight: 600;\">500/-</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n",
        "Curriculum": "\n      <h2 style=\"text-align: center; color: #167a39;\"><u>CURRICULUM &amp; SYLLABUS</u></h2>\n      <div style=\"margin-top: 24px;\">\n        <h3 style=\"color: #167a39; margin-bottom: 12px;\">Curriculum &amp; Syllabi Regulations</h3>\n        <ul class=\"dept-mission-list\">\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>B.Tech. Food Technology:</strong> Autonomous Regulations 2019 and Regulations 2021.</div>\n          </li>\n          <li>\n            <span class=\"dept-mission-badge\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"9 18 15 12 9 6\"></polyline></svg></span>\n            <div><strong>M.Tech. Food Technology:</strong> Autonomous Regulations 2021.</div>\n          </li>\n        </ul>\n      </div>\n    ",
        "Placements - Key Companies": "<h2 style=\"text-align: center; color: #167a39;\"><u>PLACEMENTS</u></h2>\n        <div class=\"dept-table-wrapper\">\n          <table class=\"dept-data-table\">\n            <thead>\n              <tr>\n                <th colspan=\"2\" style=\"text-align: center; font-size: 16px; background: #167a39; color: white;\">List of key companies visited so far for placement</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Admatic</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">VilFresh</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">PULSUS</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">ITC Foods Business Division</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Mayilmark</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Oror Flavours and Chenicals Pvt Ltd</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Accelor</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Aachi Masala</td>\n              </tr>\n\n              <tr>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\">Baladna Foods,Qatar,UAE</td>\n                <td style=\"width: 50%; font-weight: 600; padding: 10px 18px;\"></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>",
        "Feedback": "<h2 style=\"text-align: center; color: #167a39;\"><u>FEEDBACK</u></h2>\n        <p class=\"dept-lead-text\" style=\"text-align: center; margin-bottom: 24px;\">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>\n        <form class=\"dept-feedback-form\" onsubmit=\"event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();\">\n          <div class=\"dept-form-group\">\n            <label>Full Name *</label>\n            <input type=\"text\" required placeholder=\"Enter your full name\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Stakeholder Category *</label>\n            <select required>\n              <option value=\"\">Select your category</option>\n              <option value=\"student\">Current Student</option>\n              <option value=\"alumni\">Alumnus / Alumna</option>\n              <option value=\"parent\">Parent</option>\n              <option value=\"employer\">Employer / Industry Partner</option>\n              <option value=\"faculty\">Academician / Expert</option>\n            </select>\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Email Address *</label>\n            <input type=\"email\" required placeholder=\"Enter your email address\" />\n          </div>\n          <div class=\"dept-form-group\">\n            <label>Your Feedback / Suggestions *</label>\n            <textarea rows=\"4\" required placeholder=\"Please provide your feedback or suggestions for Food Technology...\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"button button-primary dept-feedback-submit\" style=\"margin-top: 16px;\">Submit Feedback</button>\n          <div class=\"feedback-success\" style=\"display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;\">\n            ✓ Thank you! Your feedback has been submitted successfully to the Food Technology department.\n          </div>\n        </form>"
    }
},
  'Computer Science and Engineering (Cyber Security)': {
    courses: [
      ['B.E - Computer Science and Engineering (Cyber Security)', '120']
    ],
    overview: '<p>Established in 2022, the Computer Science and Engineering (Cyber Security) Department is dedicated to equipping students with specialized knowledge in the rapidly evolving field of cybersecurity. We offer a comprehensive 4-year B.E. Computer Science and Engineering (Cyber Security) program designed to provide both theoretical and practical expertise.</p><p>Our department boasts a passionate team of faculty members with extensive experience across various cybersecurity domains and features state-of-the-art facilities for hands-on learning and smart classroom experiences.</p><p>As the global demand for cybersecurity professionals continues to soar, our graduates are well-positioned to take advantage of a thriving job market. The intersection of cybersecurity with fields like AI and data science further enhances career prospects, providing students with numerous opportunities for rewarding and dynamic career growth.</p>',
    sectionsList: [
      'About the Department',
      'Why Cyber Security at SIET',
      'Unique Facilities',
      'Vision & Mission',
      'Programme Educational Objectives',
      'Programme Specific Outcomes',
      'Faculty Profile',
      'PAC Members',
      'Curriculum',
      'Feedback'
    ],
    sections: {
      'About the Department': `
        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
          <div style="border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <table style="border-collapse: collapse; margin: 0; min-width: 280px;">
              <thead>
                <tr style="background: #167a39; color: white;">
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;">Course Offered</th>
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #fff;">
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;">B.E - Computer Science and Engineering (Cyber Security)</td>
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center; color: #167a39;">120</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h2 style="text-align: center; color: #167a39;"><u>ABOUT THE DEPARTMENT</u></h2>
        <p>Established in 2022, the Computer Science and Engineering (Cyber Security) Department is dedicated to equipping students with specialized knowledge in the rapidly evolving field of cybersecurity. We offer a comprehensive 4-year B.E. Computer Science and Engineering (Cyber Security) program designed to provide both theoretical and practical expertise.</p>
        <p>Our department boasts a passionate team of faculty members with extensive experience across various cybersecurity domains and features state-of-the-art facilities for hands-on learning and smart classroom experiences.</p>
        <p>As the global demand for cybersecurity professionals continues to soar, our graduates are well-positioned to take advantage of a thriving job market. The intersection of cybersecurity with fields like AI and data science further enhances career prospects, providing students with numerous opportunities for rewarding and dynamic career growth.</p>
      `,
      'Why Cyber Security at SIET': `
        <h2 style="text-align: center; color: #167a39;"><u>WHY CYBER SECURITY AT SIET</u></h2>
        <ol class="dept-custom-list">
          <li><strong>100% Placement Assistance:</strong> Dedicated industry training and campus recruitment drives with premier IT and cybersecurity recruiters every year.</li>
          <li><strong>Rich Autonomous Curriculum:</strong> Industry-oriented curriculum supported by subject-wise industrial visits, engineering exploration labs, skill development courses, and corporate internships.</li>
          <li><strong>Specialized Defense Labs:</strong> Cutting-edge laboratories for Ethical Hacking, Threat Intelligence, SOC Operations, and Network Defense.</li>
          <li><strong>Hands-on CTF Competitions:</strong> Regular Capture The Flag (CTF) hackathons, penetration testing drills, and vulnerability assessment bootcamps.</li>
          <li><strong>Industry-Certified Training:</strong> Direct corporate collaborations with leading cybersecurity organizations for certified training (CEH, CompTIA Security+, Cisco CyberOps).</li>
        </ol>
      `,
      'Unique Facilities': `
        <h2 style="text-align: center; color: #167a39;"><u>UNIQUE FACILITIES</u></h2>
        <ol class="dept-custom-list">
          <li><strong>Security Operations Center (SOC) Simulation Lab:</strong> Real-time threat monitoring, SIEM log analysis, and incident response drill infrastructure.</li>
          <li><strong>Ethical Hacking & Penetration Testing Sandbox:</strong> Isolated malware analysis lab, web application security testing suites, and reverse engineering platforms.</li>
          <li><strong>Global Industry Certification Tracks:</strong> Integrated training for Certified Ethical Hacker (CEH), CompTIA Security+, and Cisco CyberOps certifications.</li>
          <li><strong>Continuous Programming & CTF Platform:</strong> Dedicated online competitive platform for programming practice, algorithmic security challenges, and cryptography.</li>
          <li><strong>Industry Centers of Excellence:</strong> Active collaboration with Prompt Infotech, Virtusa, and leading cybersecurity corporate partners for live industrial projects.</li>
        </ol>
      `,
      'Vision & Mission': `
        <h2 style="text-align: center; color: #167a39;"><u>VISION</u></h2>
        <p class="dept-lead-text" style="text-align: center;">To become a global leader in cyber security education and research, being a preferred choice for students, practitioners, and employers seeking top-tier cyber security expertise. To be at the forefront of cybersecurity excellence, safeguarding digital frontiers with cutting-edge research, innovative education, and ethical leadership.</p>
        
        <h2 style="text-align: center; color: #167a39; margin-top: 36px;"><u>MISSION</u></h2>
        <ul class="dept-mission-list">
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M1:</strong> To equip students with the knowledge, skills, and ethical foundation to excel in the dynamic field of cybersecurity through rigorous academic programs, hands-on training, and active research.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M2:</strong> Prepare future leaders who can effectively defend against cyber threats, contribute to the field's advancement, and promote a safer digital environment.</div>
          </li>
        </ul>
      `,
      'Programme Educational Objectives': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>
        <div class="dept-objectives-grid" style="margin-top: 24px;">
          <div class="dept-obj-card">
            <span class="dept-obj-num">PEO 01</span>
            <p>To develop disciplined, high profile, value-added cyber security specialists for lucrative professions in their linked industries that give them international renown.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-num">PEO 02</span>
            <p>To systematically educate the necessity to understand the impact of cyber crimes and threats with solutions in a global and societal context.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-num">PEO 03</span>
            <p>To select suitable ethical principles and commit to professional responsibilities and human values and contribute value and wealth for the benefit of the society.</p>
          </div>
        </div>
      `,
      'Programme Specific Outcomes': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAMME SPECIFIC OUTCOMES</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO1:</strong> Ethically demonstrate the capability to use standard tools, practices, and technologies to analyze, design, develop, and implement Cybersecurity solutions that are innovative and optimal without compromising privacy needs.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO2:</strong> Use entrepreneurial skills to combat security risks and software and hardware threats in the computing sector.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>PSO3:</strong> Ability to do research and development in contemporary issues through cutting edge technologies and bring awareness to the society in the field of cyber security.</div>
          </li>
        </ul>
      `,
      'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2682772005</td>
                <td class="center-align">1-452910125</td>
                <td><strong>Dr.S.Sureshu</strong></td>
                <td>Professor & Head</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/sureshu-s.png" alt="Dr.S.Sureshu" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2655941992</td>
                <td class="center-align">1-1406772250</td>
                <td><strong>Mrs.N.Punnagai</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/punnagai-n.png" alt="Mrs.N.Punnagai" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2677491988</td>
                <td class="center-align">1-3698712465</td>
                <td><strong>Mr.S.Robert Kingsly</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/robert-kingsly-s.png" alt="Mr.S.Robert Kingsly" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2628821998</td>
                <td class="center-align">1-43381987022</td>
                <td><strong>Mrs.S.Geetha</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/geetha-s.png" alt="Mrs.S.Geetha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2627292002</td>
                <td class="center-align">1-11622715886</td>
                <td><strong>Mrs.K.Dhivya</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/dhivya-k.png" alt="Mrs.K.Dhivya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">6</td>
                <td class="center-align">2665862003</td>
                <td class="center-align">1-43381753475</td>
                <td><strong>Mrs.Elamathy</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/elamathy.png" alt="Mrs.Elamathy" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">7</td>
                <td class="center-align">2616991995</td>
                <td class="center-align">1-44049412885</td>
                <td><strong>Ms.S.Hari Priya</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/hari-priya-s.png" alt="Ms.S.Hari Priya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">8</td>
                <td class="center-align">2624681996</td>
                <td class="center-align">1-44749288819</td>
                <td><strong>Mr.A.Harish</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/harish-a.png" alt="Mr.A.Harish" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">9</td>
                <td class="center-align">2633561994</td>
                <td class="center-align">1-43381753862</td>
                <td><strong>Mrs.M.Hemalatha</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/hemalatha-m.png" alt="Mrs.M.Hemalatha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">10</td>
                <td class="center-align">2694991996</td>
                <td class="center-align">1-44749287882</td>
                <td><strong>Mrs.J.Kiruba Sobana</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/kiruba-sobana-j.png" alt="Mrs.J.Kiruba Sobana" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">11</td>
                <td class="center-align">2632322003</td>
                <td class="center-align">1-44749289092</td>
                <td><strong>Ms.M.Madhuvarshini</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/madhuvarshini-m.png" alt="Ms.M.Madhuvarshini" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">12</td>
                <td class="center-align">2614141985</td>
                <td class="center-align">1-44123595189</td>
                <td><strong>Mr.Mathivanan</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/mathivanan.png" alt="Mr.Mathivanan" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">13</td>
                <td class="center-align">2619301973</td>
                <td class="center-align">1-45332080520</td>
                <td><strong>Mr.M.Mithun</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/mithun-m.png" alt="Mr.M.Mithun" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">14</td>
                <td class="center-align">2624761993</td>
                <td class="center-align">1-4795532250</td>
                <td><strong>Ms.A.Pavithra</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/pavithra-a.png" alt="Ms.A.Pavithra" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">15</td>
                <td class="center-align">2696691999</td>
                <td class="center-align">1-44748929598</td>
                <td><strong>Mrs.K.Sabitha</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/sabitha-k.png" alt="Mrs.K.Sabitha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">16</td>
                <td class="center-align">2662342003</td>
                <td class="center-align">1-44073171792</td>
                <td><strong>Ms.Sai Mounishadevi</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/sai-mounishadevi.png" alt="Ms.Sai Mounishadevi" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">17</td>
                <td class="center-align">2672221993</td>
                <td class="center-align">1-46907261542</td>
                <td><strong>Mrs.S.Saranya</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/saranya-s.png" alt="Mrs.S.Saranya" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">18</td>
                <td class="center-align">2620762006</td>
                <td class="center-align">1-46905827844</td>
                <td><strong>Mr.S.Siva</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/siva-s.png" alt="Mr.S.Siva" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">19</td>
                <td class="center-align">2659611993</td>
                <td class="center-align">1-44816211538</td>
                <td><strong>Ms.G.Sneka</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/sneka-g.png" alt="Ms.G.Sneka" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">20</td>
                <td class="center-align">2622411999</td>
                <td class="center-align">1-4647070173</td>
                <td><strong>Mr.N.Sri Thejas</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/sri-thejas-n.png" alt="Mr.N.Sri Thejas" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">21</td>
                <td class="center-align">2655071993</td>
                <td class="center-align">1-47948889376</td>
                <td><strong>Ms.J.Varshini</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/varshini-j.png" alt="Ms.J.Varshini" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">22</td>
                <td class="center-align">2677481993</td>
                <td class="center-align">1-12145504746</td>
                <td><strong>Mr.K.Vinoth</strong></td>
                <td>Assistant Professor</td>
                <td>UG-Cyber Security</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/cyber-faculty-images/vinoth-k.png" alt="Mr.K.Vinoth" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'PAC Members': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAMME ADVISORY COMMITTEE (PAC)</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table">
            <thead>
              <tr>
                <th style="width: 60px; text-align: center;">S.No</th>
                <th>Name</th>
                <th>Designation / Organization</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="text-align: center; font-weight: 600;">1</td>
                <td><strong>Mr. R. Karthiban</strong></td>
                <td>Associate Professor &amp; Head</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;">Chairman / Faculty</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">2</td>
                <td><strong>Dr. K. E. Kannammal</strong></td>
                <td>Professor &amp; Head</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;">Faculty</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">3</td>
                <td><strong>Dr. R. SenthilKumar</strong></td>
                <td>Professor</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;">Faculty</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">4</td>
                <td><strong>Mr. E. Subramaniyan</strong></td>
                <td>Associate Professor</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;">Faculty</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">5</td>
                <td><strong>Mr. S. Yaswanthraj</strong></td>
                <td>Assistant Professor</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7;">Faculty</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">6</td>
                <td><strong>Gowtham M G</strong></td>
                <td>Mobile Lead, Uni cards &amp; Powerup Money</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;">Alumni</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">7</td>
                <td><strong>Alphin Jude</strong></td>
                <td>Designer &amp; Developer, ZyNerd</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;">Alumni</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">8</td>
                <td><strong>Mr. Saravanan</strong></td>
                <td>Senior Software Engineer, Ducen Ind. Pvt. Ltd.</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#fff3e0; color:#e65100; border:1px solid #ffcc80;">Industry Expert</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">9</td>
                <td><strong>Sankarraj Subramanian</strong></td>
                <td>CEO, Prompt Infotech</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#fff3e0; color:#e65100; border:1px solid #ffcc80;">Industry Expert</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">10</td>
                <td><strong>Senthil Kumar</strong></td>
                <td>Business</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;">Parent</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">11</td>
                <td><strong>Selva Kumar</strong></td>
                <td>Business</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;">Parent</span></td>
              </tr>
              <tr>
                <td style="text-align: center; font-weight: 600;">12</td>
                <td><strong>Baskaran S</strong></td>
                <td>Civil Engineer</td>
                <td><span style="display:inline-block; padding:3px 10px; border-radius:4px; font-weight:700; font-size:12px; background:#f5f5f5; color:#424242; border:1px solid #e0e0e0;">Parent</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'Feedback': `
        <h2 style="text-align: center; color: #167a39;"><u>FEEDBACK</u></h2>
        <p class="dept-lead-text" style="text-align: center; margin-bottom: 24px;">We value your constructive feedback to continuously enhance our academic quality and cybersecurity learning ecosystem.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-group">
            <label>Full Name *</label>
            <input type="text" required placeholder="Enter your full name" />
          </div>
          <div class="dept-form-group">
            <label>Stakeholder Category *</label>
            <select required>
              <option value="">Select your category</option>
              <option value="student">Current Student</option>
              <option value="alumni">Alumnus / Alumna</option>
              <option value="parent">Parent</option>
              <option value="employer">Employer / Industry Partner</option>
              <option value="faculty">Academician / Expert</option>
            </select>
          </div>
          <div class="dept-form-group">
            <label>Email Address *</label>
            <input type="email" required placeholder="Enter your email address" />
          </div>
          <div class="dept-form-group">
            <label>Your Feedback / Suggestions *</label>
            <textarea rows="4" required placeholder="Please provide your feedback or suggestions for Computer Science (Cyber Security)..."></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the Computer Science (Cyber Security) department.
          </div>
        </form>
      `
    }
  },
  'VLSI Design': {
    courses: [['B.E - Electronics Engineering (VLSI Design and Technology)', '60'], ['M.E - VLSI Design', '18']],
    overview: '<p>The Department of VLSI Design and Technology specializes in semiconductor microelectronics, analog/digital CMOS integrated circuit design, FPGA synthesis, physical verification and System-on-Chip (SoC) architectures in state-of-the-art Advanced VLSI and Freescale laboratories.</p>',
    sectionsList: [
      'About the Department',
      'Why VLSI Design at SIET',
      'Unique Facilities',
      'Vision & Mission',
      'Programme Educational Objectives',
      'Faculty Profile',
        'Curriculum',
      'Feedback'
    ],
    sections: {
      'Faculty Profile': `
        <h2 class="dept-faculty-title"><u>FACULTY LIST</u></h2>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport Size)</small></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="center-align" style="font-weight: 600;">1</td>
                <td class="center-align">2631551974</td>
                <td class="center-align">1-4533208160</td>
                <td><strong>Dr.M.Thamarai</strong></td>
                <td>Professor & Head</td>
                <td>VLSI Design</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-vlsi-ug-new-faculty-images/m-thamarai.png" alt="Dr.M.Thamarai" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">2</td>
                <td class="center-align">2635961982</td>
                <td class="center-align">1-3358044450</td>
                <td><strong>Mrs.S.Jeevitha</strong></td>
                <td>Assistant Professor</td>
                <td>VLSI Design</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-vlsi-ug-new-faculty-images/jeevitha-s.png" alt="Mrs.S.Jeevitha" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">3</td>
                <td class="center-align">2626041989</td>
                <td class="center-align">1-723065165</td>
                <td><strong>Mrs.Padmapriya Kiruthika</strong></td>
                <td>Assistant Professor</td>
                <td>VLSI Design</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-vlsi-ug-new-faculty-images/padmapriya-kiruthika.png" alt="Mrs.Padmapriya Kiruthika" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">4</td>
                <td class="center-align">2628631990</td>
                <td class="center-align">1-3654896395</td>
                <td><strong>Mr.T.V.Pravin</strong></td>
                <td>Assistant Professor</td>
                <td>VLSI Design</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-vlsi-ug-new-faculty-images/pravin-tv.png" alt="Mr.T.V.Pravin" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
              <tr>
                <td class="center-align" style="font-weight: 600;">5</td>
                <td class="center-align">2655941992</td>
                <td class="center-align">1-1406772295</td>
                <td><strong>Mrs.Priscilla Sophia</strong></td>
                <td>Assistant Professor</td>
                <td>VLSI Design</td>
                <td class="center-align faculty-photo-cell">
                  <img src="/faculty/ece-vlsi-ug-new-faculty-images/priscilla-sophia.png" alt="Mrs.Priscilla Sophia" class="faculty-passport-img" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      'About the Department': `
        <div style="display: flex; justify-content: flex-end; margin-bottom: 20px;">
          <div style="border: 2px solid #167a39; overflow: hidden; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
            <table style="border-collapse: collapse; margin: 0; min-width: 280px;">
              <thead>
                <tr style="background: #167a39; color: white;">
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; border-right: 1px solid rgba(255,255,255,0.3); text-align: center;">Course Offered</th>
                  <th style="padding: 8px 16px; font-weight: 700; font-size: 14px; text-align: center;">Intake</th>
                </tr>
              </thead>
              <tbody>
                <tr style="background: #fff;">
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;">B.E - Electronics Engineering (VLSI Design and Technology)</td>
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;">60</td>
                </tr>
                <tr style="background: #fff;">
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; border-right: 1px solid #ddd; text-align: center;">M.E - VLSI Design</td>
                  <td style="padding: 8px 16px; font-size: 14px; font-weight: 600; text-align: center;">18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h2 style="text-align: center; color: #167a39;"><u>ABOUT THE DEPARTMENT</u></h2>
        <p>The Department of VLSI Design and Technology specializes in cutting-edge semiconductor engineering, microelectronics, CMOS integrated circuit fabrication principles, FPGA acceleration, and System-on-Chip (SoC) architectures. Supported by the AICTE-funded Advanced VLSI Design Laboratory and Freescale Semiconductor Center, students acquire direct industry-grade design and tape-out experience.</p>
      `,
      'Why VLSI Design at SIET': `
        <h2 style="text-align: center; color: #167a39;"><u>WHY VLSI DESIGN AT SIET</u></h2>
        <ol class="dept-custom-list">
          <li>Direct access to industry-standard EDA software and FPGA development boards.</li>
          <li>Advanced VLSI Design Laboratory and Freescale Semiconductor Lab funded by AICTE (MODROBS &amp; RPS).</li>
          <li>Comprehensive coverage of digital, analog, mixed-signal IC design and physical verification.</li>
          <li>Strong placement connections with semiconductor and embedded systems leaders.</li>
        </ol>
      `,
      'Unique Facilities': `
        <h2 style="text-align: center; color: #167a39;"><u>UNIQUE FACILITIES</u></h2>
        <ol class="dept-custom-list">
          <li>Advanced VLSI Cadence / Synopsys EDA simulation and synthesis environment.</li>
          <li>Freescale Semiconductor Laboratory.</li>
          <li>High-performance FPGA prototyping stations (Xilinx, Altera).</li>
          <li>Dedicated Embedded &amp; ARM Microcontroller Development Suite.</li>
        </ol>
      `,
      'Vision & Mission': `
        <h2 style="text-align: center; color: #167a39;"><u>VISION</u></h2>
        <p class="dept-lead-text" style="text-align: center;">To be a centre of excellence in semiconductor microelectronics and VLSI system design, creating world-class chip design engineers and innovative researchers.</p>
        <h2 style="text-align: center; color: #167a39; margin-top: 36px;"><u>MISSION</u></h2>
        <ul class="dept-mission-list" style="margin-top: 20px;">
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M1:</strong> Impart state-of-the-art education in VLSI design, semiconductor devices, and electronic design automation.</div>
          </li>
          <li>
            <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
            <div><strong>M2:</strong> Foster hands-on laboratory research and industrial collaboration in ASIC / FPGA chip design.</div>
          </li>
        </ul>
      `,
      'Programme Educational Objectives': `
        <h2 style="text-align: center; color: #167a39;"><u>PROGRAMME EDUCATIONAL OBJECTIVES</u></h2>
        <div class="dept-objectives-grid" style="margin-top: 24px;">
          <div class="dept-obj-card">
            <span class="dept-obj-num">PEO 01</span>
            <p>Graduates will excel in semiconductor design, electronic design automation, and hardware-software co-design.</p>
          </div>
          <div class="dept-obj-card">
            <span class="dept-obj-num">PEO 02</span>
            <p>Graduates will contribute to advanced microelectronics research, silicon tape-out, and innovative System-on-Chip products.</p>
          </div>
        </div>
      `,
      'Curriculum': `
        <h2 style="text-align: center; color: #167a39;"><u>CURRICULUM &amp; SYLLABUS</u></h2>
        <div style="margin-top: 24px;">
          <h3 style="color: #167a39; margin-bottom: 12px;">Curriculum &amp; Syllabi Regulations</h3>
          <ul class="dept-mission-list">
            <li>
              <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
              <div><strong>B.E. Electronics Engineering (VLSI Design and Technology):</strong> Autonomous Regulations 2021.</div>
            </li>
            <li>
              <span class="dept-mission-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
              <div><strong>M.E. VLSI Design:</strong> Autonomous Regulations 2021.</div>
            </li>
          </ul>
        </div>
      `,
      'Feedback': `
        <h2 style="text-align: center; color: #167a39;"><u>FEEDBACK</u></h2>
        <p class="dept-lead-text" style="text-align: center; margin-bottom: 24px;">We value your constructive feedback to continuously enhance our academic quality and learning ecosystem.</p>
        <form class="dept-feedback-form" onsubmit="event.preventDefault(); this.querySelector('.feedback-success').style.display='block'; this.reset();">
          <div class="dept-form-group">
            <label>Full Name *</label>
            <input type="text" required placeholder="Enter your full name" />
          </div>
          <div class="dept-form-group">
            <label>Stakeholder Category *</label>
            <select required>
              <option value="">Select your category</option>
              <option value="student">Current Student</option>
              <option value="alumni">Alumnus / Alumna</option>
              <option value="parent">Parent</option>
              <option value="employer">Employer / Industry Partner</option>
              <option value="faculty">Academician / Expert</option>
            </select>
          </div>
          <div class="dept-form-group">
            <label>Email Address *</label>
            <input type="email" required placeholder="Enter your email address" />
          </div>
          <div class="dept-form-group">
            <label>Your Feedback / Suggestions *</label>
            <textarea rows="4" required placeholder="Please provide your feedback or suggestions for VLSI Design..."></textarea>
          </div>
          <button type="submit" class="button button-primary dept-feedback-submit" style="margin-top: 16px;">Submit Feedback</button>
          <div class="feedback-success" style="display:none; margin-top:16px; padding:14px 18px; background:#e8f5e9; border:1px solid #4caf50; border-radius:8px; color:#2e7d32; font-weight:600;">
            ✓ Thank you! Your feedback has been submitted successfully to the VLSI Design department.
          </div>
        </form>
      `
    }
  },
  default: {
    courses: [],
    overview: 'The department combines strong academic foundations with practical laboratory learning, industry exposure, project work and research. Experienced faculty members guide students to solve real-world engineering problems and build careers for a changing world.'
  }
};

departmentDetails['Electrical & Electronics'] = departmentDetails['Electrical and Electronics Engineering'];
departmentDetails['Electronics & Communication'] = departmentDetails['Electronics and Communication Engineering'];
departmentDetails['Artificial Intelligence and Data Science'] = departmentDetails['Artificial Intelligence and Data Science'];
departmentDetails['Artificial Intelligence and Machine Learning'] = departmentDetails['Artificial Intelligence and Machine Learning'];
departmentDetails['Computer Science and Engineering'] = departmentDetails['Computer Science and Engineering'];
departmentDetails['CSE (Cyber Security)'] = departmentDetails['Computer Science and Engineering (Cyber Security)'];
departmentDetails['Cyber Security'] = departmentDetails['Computer Science and Engineering (Cyber Security)'];
departmentDetails['Computer Science (Cyber Security)'] = departmentDetails['Computer Science and Engineering (Cyber Security)'];
departmentDetails['Computer Science and Engineering ( Cyber Security )'] = departmentDetails['Computer Science and Engineering (Cyber Security)'];
departmentDetails['Cse Cyber Security'] = departmentDetails['Computer Science and Engineering (Cyber Security)'];
departmentDetails['CSE-Cyber Security'] = departmentDetails['Computer Science and Engineering (Cyber Security)'];

departmentDetails['Cad Cam'] = departmentDetails['Mechanical Engineering'];
departmentDetails['CAD/CAM'] = departmentDetails['Mechanical Engineering'];
departmentDetails['Cad/Cam'] = departmentDetails['Mechanical Engineering'];
departmentDetails['Embedded System Technologies'] = departmentDetails['Electrical and Electronics Engineering'];
departmentDetails['Structural Engineering'] = departmentDetails['Civil Engineering'];
departmentDetails['Farm Machinery'] = departmentDetails['Agricultural Engineering'];
departmentDetails['Vlsi Design'] = departmentDetails['VLSI Design'];
departmentDetails['Electronics Engineering (VLSI Design & Technology)'] = departmentDetails['VLSI Design'];
departmentDetails['Electronics Engineering ( VLSI Design & Technology)'] = departmentDetails['VLSI Design'];

departmentDetails['Management Studies'] = {
  courses: [['MBA - Master of Business Administration', '60']],
  overview: '<p>The Department of Management Studies (MBA) at Sri Shakthi Institute of Engineering and Technology is dedicated to developing ethical business leaders, strategic managers, and entrepreneurial visionaries. Offering an autonomous two-year MBA programme affiliated to Anna University and approved by AICTE, the curriculum integrates case-based learning, business simulations, executive guest lectures, and corporate internships across Finance, Marketing, Human Resources, Systems, Business Analytics, and Operations Management.</p><p>Backed by extensive industry partnerships, startup incubation support, and corporate mentoring, our MBA graduates consistently secure prestigious career opportunities with leading multinational enterprises, financial institutions, and global consulting firms.</p>'
};
departmentDetails['MBA'] = departmentDetails['Management Studies'];
departmentDetails['Mba'] = departmentDetails['Management Studies'];
departmentDetails['Master of Business Administration'] = departmentDetails['Management Studies'];
departmentDetails['Master of Business Administration (MBA)'] = departmentDetails['Management Studies'];
departmentDetails['Master Of Business Administration (Mba)'] = departmentDetails['Management Studies'];

departmentDetails['Computer Applications'] = {
  courses: [['MCA - Master of Computer Applications', '60']],
  overview: '<p>The Department of Computer Applications (MCA) at Sri Shakthi Institute of Engineering and Technology offers an advanced postgraduate programme designed to develop high-calibre software architects, full-stack engineers, cloud specialists, and technology leaders. Affiliated to Anna University and approved by AICTE, the curriculum provides deep expertise in modern software engineering, cloud platforms, enterprise database systems, mobile development, data intelligence, and cybersecurity.</p><p>With dedicated high-performance computing laboratories, software incubation centres, and active industry collaborations with premier IT corporations, students gain intensive hands-on experience that leads to outstanding campus placements and impactful technology careers.</p>'
};
departmentDetails['MCA'] = departmentDetails['Computer Applications'];
departmentDetails['Mca'] = departmentDetails['Computer Applications'];
departmentDetails['Master of Computer Applications'] = departmentDetails['Computer Applications'];
departmentDetails['Master of Computer Applications (MCA)'] = departmentDetails['Computer Applications'];
departmentDetails['Master Of Computer Applications (Mca)'] = departmentDetails['Computer Applications'];

programs.forEach(([name, description]) => { if (!departmentDetails[name]) departmentDetails[name] = { courses: [['B.E - ' + name, '60']], overview: 'The ' + name + ' department at Sri Shakthi Institute of Engineering and Technology develops practical expertise through laboratory learning, industry exposure, projects and research. ' + description } });

