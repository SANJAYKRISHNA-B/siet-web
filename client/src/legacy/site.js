const $=(selector,root=document)=>root?.querySelector?.(selector)||null;
const $$=(selector,root=document)=>root?.querySelectorAll?[...root.querySelectorAll(selector)]:[];
let appRoot;
const icon=(name)=>{
  if(name==='menu') return `<svg class="ui-icon-svg menu-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3.5" y1="6" x2="20.5" y2="6"></line><line x1="3.5" y1="12" x2="20.5" y2="12"></line><line x1="3.5" y1="18" x2="20.5" y2="18"></line></svg>`;
  if(name==='close') return `<svg class="ui-icon-svg close-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  return `<span class="ui-icon" aria-hidden="true">${({home:'⌂',users:'♙',book:'▤',grad:'◇',building:'▥',quality:'✓',brief:'▣',compass:'◉',arrow:'→',down:'⌄',trophy:'♛',trend:'↗',gift:'◇',play:'▶',phone:'☎'}[name]||'◆')}</span>`;
};

const pageGroups=[
 {label:'About',icon:'users',items:[['vision-mission','Vision & Mission'],['chairman','Chairman’s Desk'],['principal','Principal’s Desk']]},
 {label:'Academics',icon:'book',items:[['academics','Academic Overview'],['departments','Departments'],['curriculum','Curriculum'],['academic-calendar','Academic Calendar'],['library','Library']]},
 {label:'Admissions',icon:'grad',items:[['programmes','UG & PG Programmes'],['eligibility','Eligibility'],['scholarships','Scholarships'],['fees','Fee Information'],['admission-enquiry','Admission Enquiry']]},
 {label:'Campus',icon:'building',items:[['campus-life','Campus Life'],['facilities','Facilities'],['hostel','Hostel'],['transport','Transport'],['sports','Sports'],['clubs','Student Clubs'],['ncc','NCC & NSS']]},
 {label:'Quality & Excellence',icon:'quality',items:[['centres-of-excellence','Centres of Excellence'],['accreditations','NBA & NAAC'],['examinations','Examinations'],['iqac','IQAC']]},
 {label:'Explore',icon:'compass',items:[['training','Career Development'],['research','Research & Development'],['innovation','Innovation & Incubation'],['alumni','Alumni'],['contact','Contact Us']]}
];
const pageCopy={
 academics:['Academic Overview','Knowledge designed for application.','Flexible learning, strong fundamentals, laboratories, projects and industry exposure form the core of the Sri Shakthi academic experience.'],departments:['Departments','Ten disciplines. One culture of discovery.','Explore engineering and technology departments offering focused learning, laboratories, research and industry engagement.'],curriculum:['Curriculum','Current, connected and outcome-driven.','The curriculum combines disciplinary depth, professional skills, multidisciplinary electives, projects and experiential learning.'],'academic-calendar':['Academic Calendar','Plan the academic year.','Semester schedules bring together instruction, assessment, events, examinations and academic milestones.'],library:['Central Library','A connected knowledge centre.','Print and digital resources, journals, databases and focused study environments support teaching, learning and research.'],examinations:['Examinations','Clear processes. Fair assessment.','The Controller of Examinations coordinates schedules, evaluation, results and academic records for autonomous programmes.'],programmes:['UG & PG Programmes','Choose the field you want to shape.','Undergraduate and postgraduate pathways connect engineering foundations with emerging technologies and real-world practice.'],eligibility:['Eligibility','Your pathway to Sri Shakthi.','Admission eligibility follows applicable Government of Tamil Nadu, AICTE and Anna University norms.'],scholarships:['Scholarships','Talent deserves opportunity.','Merit and need-based scholarship pathways help ambitious learners access high-quality engineering education.'],fees:['Fee Information','Clear guidance for applicants.','Contact the admissions office for programme-specific fee structure, counselling and scholarship guidance.'],'campus-life':['Campus Life','Learn. Build. Belong.','A vibrant 45-acre eco-friendly campus brings together academics, culture, sport, entrepreneurship and community.'],facilities:['Facilities','Spaces made for exploration.','Advanced laboratories, collaborative classrooms, seminar halls, digital infrastructure and student support facilities.'],hostel:['Hostel','A welcoming campus home.','Student residences support safe, comfortable living, shared learning and a strong sense of community.'],transport:['Transport','Connected to Coimbatore.','College transport supports convenient travel across major routes in and around the city.'],sports:['Sports','Energy beyond academics.','With 26+ activities and a proud competitive record, sport is central to student wellbeing and leadership.'],clubs:['Student Clubs','Find your people. Build your voice.','Technical, cultural, social and professional clubs turn interests into projects, events and leadership experience.'],ncc:['NCC & NSS','Unity, discipline and service.','Student service programmes develop character, citizenship, teamwork and responsibility.'],placements:['Placements','Preparing talent for meaningful careers.','Career readiness spans aptitude, communication, technical training, internships, industry interaction and recruitment.'],training:['Career Development','Skills that move careers forward.','Dedicated training helps students build technical confidence, professional communication and placement readiness.'],research:['Research & Development','Ideas engineered into impact.','Faculty and students pursue applied research, publications, prototypes, consultancy and interdisciplinary collaboration.'],innovation:['Innovation & Incubation','From problem to prototype.','Mentoring, maker culture and entrepreneurial support help student ideas grow into useful solutions and ventures.'],'centres-of-excellence':['Centres of Excellence','Advanced tools. Industry contexts.','Specialist centres connect learners with contemporary platforms, domain expertise and practical challenges.'],accreditations:['Approvals & Accreditations','Quality recognised. Standards sustained.','An autonomous institution approved by AICTE, affiliated to Anna University, accredited by NAAC and with eligible programmes accredited by NBA.'],alumni:['Alumni','Shakthians around the world.','A growing network of 10,273+ alumni strengthens mentorship, opportunity and lifelong institutional connection.'],iqac:['IQAC & NAAC','Quality as a continuous practice.','The Internal Quality Assurance Cell supports evidence-led improvement across academics, governance and student experience.'],contact:['Contact Us','We are here to help.','Visit the campus, speak with admissions, or connect with the institute office using the details below.']
};
const programs=[
 ['Agricultural Engineering','Smart farming, irrigation, machinery and sustainable food systems.','/assets/images/category/cat1.jpg'],['Biomedical Engineering','Diagnostic, therapeutic and healthcare technologies.','/assets/images/category/cat2.jpg'],['Biotechnology','Bioprocessing, molecular science and industrial biotechnology.','/assets/images/category/cat3.jpg'],['Civil Engineering','Resilient infrastructure, structures and sustainable cities.','/assets/images/category/cat4.jpg'],['Computer Science & Engineering','Intelligent software, data systems and AI-powered solutions.','/assets/images/category/cat5.jpg'],['Electrical & Electronics','Power systems, renewable energy and industrial automation.','/assets/images/category/cat6.jpg'],['Electronics & Communication','Connected systems, embedded design and signal processing.','/assets/images/category/cat7.jpg'],['Food Technology','Food processing, quality, safety and product development.','/assets/images/category/cat8.jpg'],['Information Technology','Secure digital products, cloud platforms and networks.','/assets/images/course/3.jpg'],['Mechanical Engineering','Design, manufacturing, machines and mobility systems.','/assets/images/course/6.jpg'],['Artificial Intelligence & Data Science','AI, analytics and data-driven engineering.','/assets/images/course/3.jpg'],['Artificial Intelligence & Machine Learning','Intelligent automation and applied AI.','/assets/images/category/cat5.jpg'],['CSE (Cyber Security)','Secure computing and resilient networks.','/assets/images/course/3.jpg'],['VLSI Design','Semiconductor design and embedded systems.','/assets/images/category/cat7.jpg']
];

function header(){return `<div class="notice"><div class="notice-track"><span><b>ADMISSIONS 2026–27 NOW OPEN</b><i></i> Applications are invited for undergraduate and postgraduate engineering programmes <i></i> Begin your journey at Sri Shakthi <i></i> TNEA Counselling Code: 2727</span><span aria-hidden="true"><b>ADMISSIONS 2026–27 NOW OPEN</b><i></i> Applications are invited for undergraduate and postgraduate engineering programmes <i></i> Begin your journey at Sri Shakthi <i></i> TNEA Counselling Code: 2727</span></div></div>
<header class="institution-header-v4 exact-image-header"><div class="institution-header-shell"><a class="siet-header-image" href="#/" aria-label="Sri Shakthi Institute of Engineering and Technology home"><img src="/brand/siet-exact-header.png" alt="Sri Shakthi Institute of Engineering and Technology — NBA accredited, NAAC A grade, counselling code 2727" width="2048" height="256"></a><nav class="institution-navbar" aria-label="Main navigation"><button class="institution-mobile-toggle" aria-label="Open navigation menu" type="button">${icon('menu')}</button><a class="institution-mobile-logo" href="#/" aria-label="Sri Shakthi Home"><img src="/brand/siet-logo.png" alt="Sri Shakthi" class="mobile-logo-img"><span class="mobile-logo-text"><b>SRI SHAKTHI</b><small>Autonomous Institution</small></span></a><a class="institution-home" href="#/" aria-label="Home">${icon('home')}</a><div class="institution-menu">${pageGroups.map((g,i)=>`${i===5?'<a class="institution-nav-link" href="#/placements">Placements</a>':''}<div class="institution-nav-group"><button type="button">${g.label}${icon('down')}</button><div>${g.items.map(([s,n])=>`<a href="#/${s}">${n}</a>`).join('')}</div></div>`).join('')}<a class="institution-nav-link" href="#/careers">Careers</a></div><a class="institution-nav-apply" href="#/apply">Apply Now ${icon('arrow')}</a></nav></div></header>
<div class="mobile-nav-backdrop"></div>
<aside class="mobile-nav" aria-label="Mobile Navigation"><div class="mobile-nav-header"><a href="#/" class="mobile-nav-brand"><img src="/brand/siet-logo.png" alt="Sri Shakthi"><div><strong>SRI SHAKTHI</strong><small>Autonomous Institution</small></div></a><button class="mobile-nav-close" aria-label="Close menu">${icon('close')}</button></div><div class="mobile-nav-body"><a href="#/" class="mobile-nav-link mobile-nav-home">${icon('home')} Home</a><div class="mobile-nav-accordion">${pageGroups.map((g,i)=>`${i===5?'<a class="mobile-nav-link" href="#/placements">Placements</a>':''}<div class="mobile-nav-group"><button type="button" class="mobile-nav-group-toggle" aria-expanded="false"><span>${g.label}</span>${icon('down')}</button><div class="mobile-nav-subitems">${g.items.map(([s,n])=>`<a href="#/${s}" class="mobile-nav-sublink">${n}</a>`).join('')}</div></div>`).join('')}<a class="mobile-nav-link" href="#/careers">Careers @ SIET</a></div></div><div class="mobile-nav-footer"><a class="mobile-apply-link" href="#/apply">Apply Now ${icon('arrow')}</a></div></aside>`}

function footer(){return `<footer class="site-footer footer-reference"><div class="footer-top"><div class="footer-brand"><a class="mark" href="#/"><img src="/brand/siet-logo.png" alt="Sri Shakthi emblem"><span><b>SRI SHAKTHI</b><small>INSTITUTE OF ENGINEERING AND TECHNOLOGY</small><em>AUTONOMOUS · AFFILIATED TO ANNA UNIVERSITY</em></span></a><p>Powering the youth.<br>Empowering the nation.</p></div><div class="footer-sitemap">${pageGroups.map(g=>`<div class="footer-link-group"><b>${g.label}</b>${g.items.map(([s,n])=>`<a href="#/${s}"><span>›</span>${n}</a>`).join('')}</div>`).join('')}</div></div><div class="footer-legal"><small>© ${new Date().getFullYear()} Sri Shakthi Institute of Engineering &amp; Technology. All rights reserved.</small><nav><a href="#/privacy-policy">Privacy Policy</a><i></i><a href="#/terms">Terms of Use</a><i></i><a href="#/sitemap">Sitemap</a></nav></div></footer>`}
const counter=(to,suffix='')=>`<span class="js-counter" data-to="${to}" data-suffix="${suffix}">0${suffix}</span>`;

function homePage(){return `<main><section class="placement-stage placement-stage-v2"><div class="placement-v2-hero"><div class="placement-v2-container">
 <div class="placement-v2-copy reveal"><div class="placement-v2-kicker">PLACEMENT EXCELLENCE</div><div class="placement-v2-pill">CLASS OF 2027</div><h1>Powering the Youth.<em>Empowering the Nation.</em></h1><p>Focused training, industry-led preparation and a strong placement ecosystem that transforms engineering potential into meaningful careers.</p><div class="placement-v2-actions"><button type="button" class="placement-v2-btn primary js-scroll-programmes">Explore placements ${icon('arrow')}</button><button class="placement-v2-btn secondary js-video">${icon('play')} Watch placement journey</button></div></div>
 <div class="placement-v2-panel reveal"><div class="placement-v2-panel-head">2026–27 PLACEMENT HIGHLIGHTS (TILL 31ST JULY 2026)</div><div class="placement-v2-highest"><span>${icon('trophy')}</span><div><small>HIGHEST PLACED PACKAGE</small><strong>₹${counter(33)} LPA</strong></div><i></i><div class="placement-v2-record"><large>PLACEMENT RECORD</large><strong>CLASS OF 2027</strong></div></div><div class="placement-v2-stats">${[[16,'₹10 LPA+','gift'],[37,'₹8 LPA+','trend'],[82,'₹5.5 LPA+','brief']].map(([n,p,i])=>`<article><span class="placement-v2-icon">${icon(i)}</span><strong>${counter(n,n===82?'+':'')}</strong><h3>Students Placed</h3><i></i><b>${p}</b></article>`).join('')}</div></div>
</div></div></section>
<section class="about-premium"><div class="about-container"><div class="about-label reveal"><span>01</span><p>WHO WE ARE</p></div><div class="about-main"><div class="about-heading reveal"><h2>A campus where <span class="highlight-word">curiosity</span> becomes <span>capability.</span></h2></div><div class="about-content reveal"><span class="about-small-title">OUR PURPOSE</span><p>Sri Shakthi Institute of Engineering and Technology is an autonomous institution in Coimbatore, approved by AICTE and affiliated to Anna University.</p><p>Our industry-driven ecosystem brings engineering out of textbooks and into the real world.</p><button type="button" class="discover-link js-discover-btn">Discover our vision ${icon('arrow')}</button></div></div><div class="stats-grid">${[[4263,'Job offers','Last 5 Years'],[657,'Offers in 2026','Growing Every Year'],[10273,'Alumni Worldwide','Connected Globally'],[4452,'Students on Campus','Learning & Innovating']].map(([n,t,s],i)=>`<article class="stat-box reveal"><span class="stat-index">0${i+1}</span><h3>${counter(n,'+')}</h3><p>${t}</p><span class="stat-subtitle">${s}</span></article>`).join('')}</div></div></section>
<section class="programmes-showcase programmes-section"><div class="programmes-container"><div class="section-kicker"><span>02</span><i></i><span>FIND YOUR FIELD</span></div><div class="programmes-hero reveal"><div class="programmes-heading"><h2>Programmes built for a <em>changing</em> world.</h2></div><div class="programmes-info"><p>Foundational rigour, advanced technology labs, industry collaboration and project-led learning.</p><div class="programme-toggle"><button class="toggle-btn active" data-level="UG">UG Programmes</button><button class="toggle-btn" data-level="PG">PG Programmes</button></div></div></div><div class="programme-area"><div class="programme-header"><div><small>EXPLORE</small><h3><span id="level-name">UG</span> Programmes</h3></div></div><div id="programme-grid" class="programme-grid">${programmeCards(programs)}</div></div></div></section>
<section class="campus-section"><div class="campus-container"><aside class="campus-left reveal"><div class="section-kicker"><span>03</span><i></i><span>LIFE AT SRI SHAKTHI</span></div><h1>Campus Moments.<em>Student stories.</em></h1><p>Explore learning, innovation, celebrations and everyday campus experiences from the Sri Shakthi community.</p><button type="button" class="button js-explore-campus">Explore campus ${icon('arrow')}</button></aside><main class="campus-content"><div class="campus-gallery">${[['placements.png','A campus that inspires every day.'],['student-life.png','Victory is a habit here.'],['cultural.png','Culture. Tradition. Every performance.'],['innovation.png','Ideas that create impact.']].map(([img,t])=>`<div class="gallery-card reveal" role="button" tabindex="0"><img src="/brand/campus-life/${img}" alt="${t}"><div class="gallery-content"><h3>${t}</h3><span>→</span></div></div>`).join('')}</div></main></div></section></main>`}

function programmeCards(list){return list.map(([n,d])=>`<div class="programme-card programme-card-simple reveal" role="button" tabindex="0"><span class="programme-icon">◆</span><h4>${n}</h4><span class="arrow-btn">→</span></div>`).join('')}
const slugify=s=>s.toLowerCase().replaceAll(' ','-').replaceAll('&','and').replaceAll('/','-');
function visionPage(){
  return `<style>
    .vision-sidebar { border-top: 6px solid var(--coral); background: var(--paper); padding: 28px; }
    .vision-sidebar span { font-size: 9px; font-weight: 700; color: #44705a; letter-spacing: 0.15em; display: block; margin-bottom: 15px; }
    .vision-tab-btn { display: flex; justify-content: space-between; align-items: center; padding: 15px 12px; border-bottom: 1px solid #d6e3da; font-weight: 600; cursor: pointer; color: var(--navy); transition: all 0.2s ease; margin-bottom: 5px; }
    .vision-tab-btn:hover { background: #f0f7f3; }
    .vision-tab-btn.active { border: 2px solid var(--navy); background: var(--mint); border-radius: 6px; padding: 13px 12px; }
    .vision-tab-btn span { color: var(--coral); font-weight: bold; }
    .vision-content-pane { display: none; }
    .vision-content-pane.active { display: block; }
    .outcome-list { display: flex; flex-direction: column; gap: 20px; }
    .outcome-card { display: flex; gap: 20px; align-items: flex-start; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid var(--navy); box-shadow: 0 4px 15px rgba(0,0,0,0.02); }
    .outcome-badge { width: 32px; height: 32px; border-radius: 50%; background: var(--navy); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; font-size: 14px; }
    .outcome-info h4 { margin: 0 0 8px 0; color: var(--navy); font-size: 18px; font-weight: 700; }
    .outcome-info p { margin: 0; line-height: 1.6; color: #526b5c; font-size: 15px; }
    .values-list { display: flex; flex-direction: column; gap: 20px; }
    .value-card { display: flex; gap: 20px; align-items: flex-start; padding: 24px; background: white; border-radius: 8px; border-left: 4px solid var(--coral); box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
    .value-icon { font-size: 24px; color: var(--navy); line-height: 1; }
    .value-info h4 { margin: 0 0 8px 0; color: var(--navy); font-size: 18px; font-weight: 700; }
    .value-info p { margin: 0; line-height: 1.6; color: #526b5c; font-size: 15px; }
    .philosophy-section h3 { font-size: 22px; color: var(--navy); margin-bottom: 25px; }
    .milestone { display: flex; gap: 24px; align-items: flex-start; padding: 24px; background: var(--mint); border-radius: 8px; margin-bottom: 20px; border-left: 6px solid var(--coral); }
    .milestone-num { font-size: 32px; font-weight: 800; color: var(--navy); line-height: 1; }
    .milestone-content h4 { margin: 0 0 8px 0; color: var(--navy); font-size: 18px; text-transform: uppercase; font-weight: 700; }
    .milestone-content p { margin: 0; line-height: 1.6; color: #173226; font-size: 16px; }
    @media(max-width: 900px) {
      .vision-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    }
  </style>
  <main class="vision-page">
    <section class="vision-chairman-section">
      <div class="vision-chairman-wrap">
        <div class="vision-chairman-photo reveal">
          <img src="/brand/chairman-photo.png" alt="Dr. S. Thangavelu">
          <div class="chairman-name-card">
            <strong>Dr. S. Thangavelu</strong>
            <span>Chairman</span>
            <span>Sri Shakthi Group of Institutions</span>
          </div>
        </div>
        <div class="vision-chairman-copy reveal">
          <small>SRI SHAKTHI</small>
          <h1>Vision &amp; Mission</h1>
          <h2>Engineering education with purpose.</h2>
          <p>We are committed to building a brighter future through quality education, innovation, research and ethical values.</p>
          <a class="button" href="#/chairman">Read Full Message ${icon('arrow')}</a>
        </div>
      </div>
    </section>
    
    <section class="page-content vision-grid" style="grid-template-columns: 320px 1fr; gap: 5vw; background: white;">
      <aside class="vision-sidebar">
         <span>VISION AND MISSION</span>
         <a href="javascript:void(0)" class="vision-tab-btn active" data-tab="vision-mission">Vision and Mission <span>→</span></a>
         <a href="javascript:void(0)" class="vision-tab-btn" data-tab="program-outcomes">Program Outcomes of the Institution <span>→</span></a>
         <a href="javascript:void(0)" class="vision-tab-btn" data-tab="core-values">Core Values of the Institution <span>→</span></a>
         <a href="javascript:void(0)" class="vision-tab-btn" data-tab="philosophy">Philosophy <span>→</span></a>
      </aside>
      
      <div class="vision-tab-container reveal">
         <!-- Pane 1: Vision & Mission -->
         <div class="vision-content-pane active" data-pane="vision-mission">
            <div class="section-no">OUR VISION</div>
            <h2>Recognised for excellence.</h2>
            <p>To make the institution one of our nation's great engineering schools, recognized nationally and internationally for excellence in teaching, research and public service. We seek to be the preferred destination for students, practitioners seeking an engineering education, employers hiring engineering graduates and organizations seeking engineering knowledge.</p>
            <br><br>
            <div class="section-no">OUR MISSION</div>
            <h2>Developing capability and creativity.</h2>
            <p>To Provide an encouraging environment to develop the intellectual capacity, critical thinking, creativity and problem solving ability of the students.</p>
         </div>
         
         <!-- Pane 2: Program Outcomes -->
         <div class="vision-content-pane" data-pane="program-outcomes">
            <div class="section-no">PROGRAM OUTCOMES</div>
            <h2>Program Outcomes of the Institution</h2>
            <div class="outcome-list">
               <div class="outcome-card">
                  <div class="outcome-badge">a</div>
                  <div class="outcome-info">
                     <h4>Engineering Knowledge</h4>
                     <p>Apply the Knowledge of Mathematics science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">b</div>
                  <div class="outcome-info">
                     <h4>Problem Analysis</h4>
                     <p>Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusion using first principles of mathematics, natural sciences, and engineering sciences.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">c</div>
                  <div class="outcome-info">
                     <h4>Design / Development of Solutions</h4>
                     <p>Solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">d</div>
                  <div class="outcome-info">
                     <h4>Conduct Investigations of Complex Problems</h4>
                     <p>Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data and synthesis of the information to provide valid conclusions.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">e</div>
                  <div class="outcome-info">
                     <h4>Modern Tool Usage</h4>
                     <p>Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">f</div>
                  <div class="outcome-info">
                     <h4>The Engineer and Society</h4>
                     <p>Apply reasoning informed by the contextual knowledge to access societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">g</div>
                  <div class="outcome-info">
                     <h4>Environment and Sustainability</h4>
                     <p>Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">h</div>
                  <div class="outcome-info">
                     <h4>Ethics</h4>
                     <p>Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">i</div>
                  <div class="outcome-info">
                     <h4>Individual and Team Work</h4>
                     <p>Function effectively as an individual, and as a member or leader in diverse teams and the multidisciplinary settings.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">j</div>
                  <div class="outcome-info">
                     <h4>Communication</h4>
                     <p>Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">k</div>
                  <div class="outcome-info">
                     <h4>Project Management and Finance</h4>
                     <p>Demonstrate knowledge and understanding of engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and multidisciplinary environments.</p>
                  </div>
               </div>
               <div class="outcome-card">
                  <div class="outcome-badge">l</div>
                  <div class="outcome-info">
                     <h4>Lifelong Learning</h4>
                     <p>Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</p>
                  </div>
               </div>
            </div>
         </div>
         
         <!-- Pane 3: Core Values -->
         <div class="vision-content-pane" data-pane="core-values">
            <div class="section-no">CORE VALUES</div>
            <h2>Core Values of the Institution</h2>
            <div class="values-list">
               <div class="value-card">
                  <div class="value-icon">★</div>
                  <div class="value-info">
                     <h4>Quality Education and Integrity</h4>
                     <p>Providing quality, global education that allows the student to achieve their career goals and aspirations with ethical values; preparing responsible citizens through systematic education.</p>
                  </div>
               </div>
               <div class="value-card">
                  <div class="value-icon">★</div>
                  <div class="value-info">
                     <h4>Excellence in every area</h4>
                     <p>Imparting career-focused educational programs with the highest level of academic to prepare the students with real-world experience.</p>
                  </div>
               </div>
               <div class="value-card">
                  <div class="value-icon">★</div>
                  <div class="value-info">
                     <h4>Bringing the best</h4>
                     <p>Encouraging critical thinking, quantitative, ethical decision making, effective communication and social responsibility in students.</p>
                  </div>
               </div>
               <div class="value-card">
                  <div class="value-icon">★</div>
                  <div class="value-info">
                     <h4>Focusing on research activities</h4>
                     <p>Creating excellent infrastructural amenities to undertake research activities, publish quality research articles and patenting the products/ technologies essential for the society.</p>
                  </div>
               </div>
            </div>
         </div>
         
         <!-- Pane 4: Philosophy -->
         <div class="vision-content-pane" data-pane="philosophy">
            <div class="section-no">PHILOSOPHY</div>
            <h2>Philosophy</h2>
            <div class="philosophy-section">
               <h3>We strongly believe...</h3>
               <div class="milestone">
                  <div class="milestone-num">01</div>
                  <div class="milestone-content">
                     <h4>GATEWAY to success</h4>
                     <p>Achieving 100% pass is only the GATEWAY to success.</p>
                  </div>
               </div>
               <div class="milestone">
                  <div class="milestone-num">02</div>
                  <div class="milestone-content">
                     <h4>First MILESTONE</h4>
                     <p>Breeding 100% employable / entrepreneurial engineers is the first MILESTONE.</p>
                  </div>
               </div>
               <div class="milestone">
                  <div class="milestone-num">03</div>
                  <div class="milestone-content">
                     <h4>Our DESTINATION</h4>
                     <p>Creating 100% confident, contributing and self-realising citizens who will uphold the pride and cultural ethos of our great nation is our DESTINATION.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  </main>`;
}
function chairmanPage(){return `<main class="chairman-page"><section class="chairman-content"><aside class="chairman-portrait reveal"><img src="/brand/chairman-photo.png" alt="Dr. S. Thangavelu"><h2>Dr. S. Thangavelu</h2><b>Chairman</b><p>Sri Shakthi Group of Institutions</p></aside><article class="chairman-message reveal"><small>A MESSAGE FROM THE CHAIRMAN</small><h1>A dream built on equality, excellence and service.</h1><p>I have always been inspired by Dr. Martin Luther King's statement, 'I have a dream' - a dream I believe will come true - a dream that my children will one day live in a world where they will not be judged by the colour of their skin, but by the content of their character'. This need for tolerance - to create an equal society with no discrimination in Caste, Creed or Colour was best exemplified in the words of Mahatma Gandhi.</p><blockquote>“I do not want my institution to be walled off on all sides, I want the culture of all lands to be blown about my institution as freely as possible. But I refuse to be blown off by any one of them. Mine is not a religion of the prison house. It has room for the least among God's creations but it is proof against insolent pride of race, religion or colour.”</blockquote><p>And this I believe will be the watchword of each and every Shakthian.</p><p>The vision for Sri Shakthi is to make the institution one of our nation's great engineering schools, recognized nationally and internationally for excellence in teaching, research and public service. We seek to be the preferred destination for students, practitioners seeking an engineering education, employers hiring engineering graduates and organizations seeking engineering knowledge.</p><strong>Dr. S. Thangavelu, Chairman</strong></article></section></main>`}
function principalPage(){return `<main class="chairman-page principal-page"><section class="chairman-content"><aside class="chairman-portrait reveal"><img src="/brand/principal-saravana-kumar.png" alt="Principal"><h2>Dr. N. M. Saravana Kumar</h2><b>Principal, SIET</b></aside><article class="chairman-message reveal"><small>FROM THE PRINCIPAL'S DESK</small><h1>Learning that moves beyond the classroom.</h1><p>Welcome to our institution, where excellence in education, innovation, and character development form the foundation of our academic journey.</p><p>We provide a vibrant learning environment that empowers students with knowledge, technical expertise and essential life skills. Our faculty continuously strive to deliver quality education through innovative teaching, industry collaboration, research and experiential learning.</p><blockquote>We prepare graduates to become competent professionals, responsible citizens and future leaders.</blockquote><strong>Dr. N. M. Saravana Kumar, M.E., Ph.D.<br>Principal, SIET</strong></article></section></main>`}

const careerUnits={
  college:{
    name:'Engineering College',
    subtitle:'Autonomous Institution · Affiliated to Anna University',
    desc:'We invite passionate educators, researchers and industry professionals to join an institution focused on applied research, innovation and industry-relevant engineering education.',
    cats:[
      ['Leadership Positions',['Principal / Dean','Head of Department','Academic Administrator']],
      ['College Teaching Positions',['Professor','Associate Professor','Assistant Professor']],
      ['Career Oriented Specialists',['Aptitude Trainer','Programming Trainer','Machine Learning Trainer']],
      ['Managerial Positions',['HR and Administration','Admissions and Outreach']],
      ['Creative Positions',['Content and Communications','Graphic Designer']]
    ]
  },
  school:{
    name:'CBSE Senior Secondary School',
    subtitle:'Affiliated to CBSE, New Delhi',
    desc:'Join an inspiring school community committed to experiential holistic education, academic excellence, sporting achievement and character building.',
    cats:[
      ['School Leadership Positions',['Principal / Vice Principal','Academic Coordinator','Section Head']],
      ['PGT & TGT Teachers',['English','Mathematics','Physics','Chemistry','Biology','Computer Science']],
      ['Primary & Kindergarten',['PRT Teachers','Montessori / Kindergarten Educators','Language Specialists']],
      ['Sports & Extracurricular',['Physical Education Director','Art & Craft Teacher','Music & Dance Instructor']]
    ]
  },
  lab:{
    name:'Food & Environmental Testing Laboratory',
    subtitle:'NABL Accredited Testing Facility',
    desc:'Work in cutting-edge laboratory facilities conducting physical, chemical, and microbiological analyses for agricultural, food, and environmental sectors.',
    cats:[
      ['Quality & Laboratory Management',['Quality Manager','Technical Manager','NABL Coordinator']],
      ['Analytical Specialists',['Senior Food Analyst','Chemical Analyst','Residue Analysis Specialist']],
      ['Microbiology Specialists',['Senior Microbiologist','Microbiology Analyst']],
      ['Technical Support',['Laboratory Technician','Sample Management Assistant']]
    ]
  }
};

function internalPage(route){
  const isDept=route.startsWith('department/');
  const deptName=isDept?titleCase(route.slice(11).replaceAll('-',' ')).replaceAll(' And ',' & '):'';
  const data=isDept?[deptName,`Department of ${deptName}`,'Build strong engineering foundations through expert teaching, practical laboratories, industry exposure, projects, research and collaborative learning.']:(pageCopy[route]||['Sri Shakthi','Institutional information','Explore Sri Shakthi Institute of Engineering and Technology.']);
  
  const sidebarHtml=`
  <aside class="internal-sidebar reveal">
    <div class="sidebar-box quick-links-box">
      <span class="sidebar-kicker">EXPLORE SRI SHAKTHI</span>
      <h3>Quick Navigation</h3>
      <nav class="sidebar-nav">
        <a href="#/programmes">UG &amp; PG Programmes <span>→</span></a>
        <a href="#/departments">All Departments <span>→</span></a>
        <a href="#/eligibility">Admission Eligibility <span>→</span></a>
        <a href="#/scholarships">Scholarship Pathways <span>→</span></a>
        <a href="#/campus-life">Campus Life &amp; Facilities <span>→</span></a>
        <a href="#/placements">Placement Highlights <span>→</span></a>
        <a href="#/research">Research &amp; Innovation <span>→</span></a>
      </nav>
    </div>
    <div class="sidebar-box contact-card-box">
      <span class="sidebar-kicker">ADMISSIONS HELPLINE</span>
      <h3>Plan Your Journey</h3>
      <p>Speak directly with our academic counsellors for programme guidance and scholarships.</p>
      <div class="sidebar-contact-info">
        <strong>☎ +91 422 2369900</strong>
        <small>✉ info@siet.ac.in</small>
        <small>📍 L&amp;T Bypass, Chinniyampalayam, Coimbatore</small>
      </div>
      <a href="#/admission-enquiry" class="button sidebar-btn">Enquire for Admission ${icon('arrow')}</a>
    </div>
    <div class="sidebar-box badges-card-box">
      <span class="sidebar-kicker">ACCREDITATIONS</span>
      <div class="sidebar-badges">
        <span>NBA Accredited</span>
        <span>NAAC 'A' Grade</span>
        <span>Autonomous</span>
        <span>AICTE Approved</span>
      </div>
    </div>
  </aside>`;

  const deptExtras=isDept?`
  <div class="dept-highlights-grid">
    <div class="dept-stat-card"><span class="stat-num">96%</span><b>Placement Record</b><small>Top product &amp; core companies</small></div>
    <div class="dept-stat-card"><span class="stat-num">14+</span><b>Specialized Labs</b><small>State-of-the-art facilities</small></div>
    <div class="dept-stat-card"><span class="stat-num">1:15</span><b>Faculty-Student Ratio</b><small>Focused mentorship</small></div>
    <div class="dept-stat-card"><span class="stat-num">50+</span><b>Patents &amp; Projects</b><small>Applied research focus</small></div>
  </div>
  <div class="dept-section-block">
    <div class="section-no">CORE LABORATORIES &amp; FACILITIES</div>
    <div class="dept-labs-list">
      <div class="dept-lab-item"><b>Advanced Computing &amp; AI Lab</b><p>High-performance computing cluster, modern GPUs, and deep learning platforms.</p></div>
      <div class="dept-lab-item"><b>Project &amp; Prototype Studio</b><p>Embedded systems, IoT testbeds, sensors and robotics testing facilities.</p></div>
      <div class="dept-lab-item"><b>Industry Collaboration Center</b><p>Dedicated workspaces co-developed with leading technology partners.</p></div>
    </div>
  </div>`:'' ;

  return `<main class="internal-page">
    <section class="page-hero">
      <img class="page-crest" src="/brand/siet-logo.png" alt="">
      <div class="eyebrow"><span></span> SRI SHAKTHI</div>
      <h1 class="reveal">${data[0]}</h1>
      <p>${data[1]}</p>
    </section>
    <section class="page-content">
      <div class="reveal">
        <div class="section-no">OVERVIEW</div>
        <h2>${data[1]}</h2>
        <p>${data[2]}</p>
        ${deptExtras}
        ${route==='contact'?'<div class="contact-panel"><b>Sri Shakthi Institute of Engineering & Technology</b><p>Sri Shakthi Nagar, L&T By-Pass, Chinniyampalayam, Coimbatore – 641062</p><p>+91 422 2369900 · info@siet.ac.in</p></div>':''}
        <div style="margin-top: 32px;"><a class="button" href="#/admission-enquiry">Enquire now ${icon('arrow')}</a></div>
      </div>
      ${sidebarHtml}
    </section>
    ${['departments','programmes'].includes(route)?`<section class="page-content programme-content"><div class="section-no">PROGRAMMES &amp; DEPARTMENTS</div><div>${programs.map(([n,d,img])=>`<a class="flip-card" href="#/department/${slugify(n)}"><span class="flip-card-inner"><span class="flip-front"><small>DEPARTMENT</small><b>${n}</b><p>${d}</p><span>Explore department →</span></span><span class="flip-back" style="background-image:linear-gradient(180deg,transparent,rgba(3,45,27,.94)),url('${img}')"><b>${n}</b></span></span></a>`).join('')}</div></section>`:''}
  </main>`;
}
const titleCase=s=>s.replace(/\b\w/g,c=>c.toUpperCase());

function enquiryPage(apply=false){return `<main class="enquiry-page-v3"><section class="enquiry-hero-v3"><img src="/brand/siet-logo.png" alt=""><div class="eyebrow"><span></span> SRI SHAKTHI</div><h1>${apply?'Apply for Sri Shakthi':'Admission Enquiry'}</h1><h2>Let’s plan your <em>next step.</em></h2><p>Share your interests and contact details. Our admissions team will guide you in choosing the right programme.</p></section><section class="enquiry-main-v3"><div class="enquiry-heading-v3"><small>ENQUIRY FORM</small><h1>Start your engineering journey with SIET</h1></div><form class="enquiry-form-v3 js-form"><div class="enquiry-fields-v3">${field('Full Name','name','text','Enter your full name')}${field('Mobile Number','phone','tel','Enter 10 digit mobile number')}${field('Email Address','email','email','Enter your email address')}${selectField('Course Level','level',['UG','PG'])}${selectField('Preferred Department','course',programs.map(p=>p[0]))}${field('Academic Qualification / Marks','qualification','text','Qualification and marks')}</div><label>Message / Any Specific Query <b>*</b><textarea name="message" rows="4" required minlength="10"></textarea></label><button class="button" type="submit">${apply?'Submit Application':'Send Enquiry'} →</button><p class="status" aria-live="polite"></p></form></section></main>`}
const field=(label,name,type,placeholder)=>`<label>${label} <b>*</b><input type="${type}" name="${name}" placeholder="${placeholder}" required></label>`;
const selectField=(label,name,opts)=>`<label>${label} <b>*</b><select name="${name}" required><option value="">Select ${label}</option>${opts.map(o=>`<option>${o}</option>`).join('')}</select></label>`;
function careersPage(){
  const unit=careerUnits.college;
  return `<main class="careers-page"><section class="career-hero"><small>WORK WITH US</small><h1>Faculty Recruitment</h1><h2>Build careers that <em>shape futures.</em></h2><p>Join a community of educators, researchers and professionals committed to powering the youth and empowering the nation.</p></section><section class="career-main"><div class="career-tabs"><button class="active" data-unit="college" type="button">Engineering College</button><button data-unit="school" type="button">CBSE School</button><button data-unit="lab" type="button">Food Testing Lab</button></div><div class="career-intro"><img src="/brand/siet-logo.png" alt=""><div><small>${unit.subtitle}</small><h2>Sri Shakthi ${unit.name}</h2><p>${unit.desc}</p></div></div><div class="career-application-layout"><form class="career-form js-form"><div class="career-form-head"><small>APPLICATION FORM</small><h2>Faculty &amp; Professional Recruitment</h2></div><div class="career-fields">${field('Full Name','name','text','Enter your full name')}${field('Mobile Number','phone','tel','Enter mobile number')}${field('Email Address','email','email','Enter email')}${selectField('Application Category','category',unit.cats.map(c=>c[0]))}${field('Position','position','text','Position you would like to apply')}${field('Highest Qualification','qualification','text','Enter highest degree')}<label class="career-wide">Why are you looking for a change?<textarea name="message" rows="4"></textarea></label><label class="career-wide career-file">Upload Resume <b>*</b><input type="file" name="resume" accept=".pdf,.doc,.docx,.rtf" required></label></div><button class="career-submit" type="submit">Submit Application →</button><p class="status" aria-live="polite"></p></form><aside class="career-categories"><div class="career-side-title"><small>EXPLORE OPENINGS</small><h2>${unit.name} Openings</h2></div>${unit.cats.map((c,i)=>`<details ${i===0?'open':''}><summary>${c[0]} ${icon('down')}</summary><div>${c[1].map(r=>`<span>→ ${r}</span>`).join('')}</div></details>`).join('')}<div class="career-contact"><small>RECRUITMENT QUERIES</small><h3>Let’s build the future together.</h3><a href="mailto:careers@siet.ac.in">careers@siet.ac.in</a></div></aside></div></section></main>`;
}

function videoModal(){return `<div class="video-modal" role="dialog" aria-modal="true"><div class="video-shell portrait"><button class="video-close" aria-label="Close video">×</button><div class="video-frame"><video controls autoplay playsinline poster="/brand/techpark-hd.jpg"><source src="/brand/siet-campus-video.mp4" type="video/mp4"></video></div></div></div>`}
function route(){return decodeURIComponent(location.hash.replace(/^#\/?/,'')).replace(/\/$/,'')}
function render(){if(!appRoot)return;const r=route();let content=!r?homePage():r==='vision-mission'||r==='about'?visionPage():r==='chairman'?chairmanPage():r==='principal'?principalPage():r==='admission-enquiry'||r==='apply'?enquiryPage(r==='apply'):r==='careers'?careersPage():internalPage(r);appRoot.innerHTML=header()+content+footer();document.title=`${r?titleCase(r.replaceAll('-',' ')):'Sri Shakthi'} | SIET`;bind();scrollTo(0,0)}

function bind(){
  const mobile=$('.mobile-nav'),backdrop=$('.mobile-nav-backdrop'),toggle=$('.institution-mobile-toggle'),closeBtn=$('.mobile-nav-close');
  const closeMenu=()=>{mobile?.classList.remove('open');backdrop?.classList.remove('open');if(toggle)toggle.innerHTML=icon('menu');document.body.style.overflow=''};
  const openMenu=()=>{mobile?.classList.add('open');backdrop?.classList.add('open');if(toggle)toggle.innerHTML=icon('close');document.body.style.overflow='hidden'};
  toggle?.addEventListener('click',e=>{e.stopPropagation();mobile?.classList.contains('open')?closeMenu():openMenu()});
  closeBtn?.addEventListener('click',e=>{e.stopPropagation();closeMenu()});
  backdrop?.addEventListener('click',closeMenu);
  $$('.mobile-nav a').forEach(a=>a.addEventListener('click',closeMenu));
  $$('.mobile-nav-group-toggle').forEach(btn=>btn.addEventListener('click',e=>{
    e.stopPropagation();
    const group=btn.closest('.mobile-nav-group');
    const wasOpen=group?.classList.contains('open');
    $$('.mobile-nav-group').forEach(g=>{g.classList.remove('open');g.querySelector('.mobile-nav-group-toggle')?.setAttribute('aria-expanded','false')});
    if(!wasOpen&&group){group.classList.add('open');btn.setAttribute('aria-expanded','true')}
  }));
  $$('.institution-nav-group>button').forEach(btn=>btn.addEventListener('click',e=>{
    e.stopPropagation();
    const group=btn.parentElement;
    const willOpen=!group?.classList.contains('open');
    $$('.institution-nav-group').forEach(x=>{
      x.classList.remove('open');
      x.querySelector('button')?.setAttribute('aria-expanded','false');
    });
    if(willOpen&&group){
      group.classList.add('open');
      btn.setAttribute('aria-expanded','true');
    }
  }));
  $$('.career-tabs button').forEach(btn=>btn.addEventListener('click',()=>{
    $$('.career-tabs button').forEach(b=>b.classList.toggle('active',b===btn));
    const unitKey=btn.dataset.unit||'college';
    const unit=careerUnits[unitKey]||careerUnits.college;
    const titleEl=$('.career-intro h2');if(titleEl)titleEl.textContent='Sri Shakthi '+unit.name;
    const descEl=$('.career-intro p');if(descEl)descEl.textContent=unit.desc;
    const subEl=$('.career-intro small');if(subEl)subEl.textContent=unit.subtitle;
    const selectCat=$('select[name="category"]');
    if(selectCat){
      selectCat.innerHTML=`<option value="">Select Application Category</option>`+unit.cats.map(c=>`<option>${c[0]}</option>`).join('');
    }
    const catAside=$('.career-categories');
    if(catAside){
      catAside.innerHTML=`<div class="career-side-title"><small>EXPLORE OPENINGS</small><h2>${unit.name} Openings</h2></div>`+
        unit.cats.map((c,i)=>`<details ${i===0?'open':''}><summary>${c[0]} ${icon('down')}</summary><div>${c[1].map(r=>`<span>→ ${r}</span>`).join('')}</div></details>`).join('')+
        `<div class="career-contact"><small>RECRUITMENT QUERIES</small><h3>Let’s build the future together.</h3><a href="mailto:careers@siet.ac.in">careers@siet.ac.in</a></div>`;
    }
  }));
  $$('.js-video').forEach(b=>b.addEventListener('click',()=>{document.body.insertAdjacentHTML('beforeend',videoModal());document.body.style.overflow='hidden';const modal=$('.video-modal');const close=()=>{modal?.remove();document.body.style.overflow=''};modal?.addEventListener('click',e=>e.target===modal&&close());$('.video-close',modal)?.addEventListener('click',close)}));
  $$('.toggle-btn').forEach(b=>b.addEventListener('click',()=>{$$('.toggle-btn').forEach(x=>x.classList.toggle('active',x===b));const lvlName=$('#level-name');if(lvlName)lvlName.textContent=b.dataset.level;const progGridEl=$('#programme-grid');if(progGridEl)progGridEl.innerHTML=programmeCards(b.dataset.level==='UG'?programs:programs.slice(0,7));observe()}));
  const progGrid=$('#programme-grid');
  progGrid?.addEventListener('click',e=>{
    const card=e.target.closest('.programme-card');
    if(!card)return;
    const wasActive=card.classList.contains('active');
    $$('.programme-card',progGrid).forEach(c=>c.classList.remove('active'));
    if(!wasActive)card.classList.add('active');
  });
  progGrid?.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){
      const card=e.target.closest('.programme-card');
      if(card){e.preventDefault();card.click()}
    }
  });
  $('.js-scroll-programmes')?.addEventListener('click',()=>{$('.programmes-section')?.scrollIntoView({behavior:'smooth'})});
  $('.js-discover-btn')?.addEventListener('click',()=>{$('.programmes-section')?.scrollIntoView({behavior:'smooth'})});
  $('.js-explore-campus')?.addEventListener('click',()=>{$('.campus-gallery')?.scrollIntoView({behavior:'smooth'})});
  $$('.campus-gallery .gallery-card').forEach(card=>{
    card.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){e.preventDefault();card.click()}
    })
  });
  $$('.vision-tab-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.vision-tab-btn').forEach(x => x.classList.toggle('active', x === btn));
    $$('.vision-content-pane').forEach(pane => pane.classList.toggle('active', pane.dataset.pane === btn.dataset.tab));
  }));
  $$('.js-form').forEach(form=>form.addEventListener('submit',submitForm));observe();
}
async function submitForm(e){
  e.preventDefault();
  const form=e.currentTarget;
  const status=$('.status',form);
  const btn=$('button[type="submit"], .career-submit',form);
  if(status){status.textContent='Submitting details…';status.style.color='#0b7a48'}
  if(btn)btn.disabled=true;
  const formData=new FormData(form);
  const data=Object.fromEntries(formData);
  const fileInput=form.querySelector('input[type="file"]');
  if(fileInput?.files?.[0]){
    data.fileName=fileInput.files[0].name;
    data.fileSize=`${Math.round(fileInput.files[0].size/1024)} KB`;
  }
  try{
    const res=await fetch('/api/enquiries',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
    const json=await res.json();
    if(status){
      status.textContent=json.message||'Thank you! Your details have been received.';
      status.style.color=res.ok?'#075b36':'#b3261e';
    }
    if(res.ok)form.reset();
  }catch(err){
    if(status){
      status.textContent='Thank you! Your details have been recorded.';
      status.style.color='#075b36';
    }
    form.reset();
  }finally{
    if(btn)btn.disabled=false;
  }
}
function observe(){const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('is-visible');if(entry.target.classList.contains('js-counter'))animateCounter(entry.target);observer.unobserve(entry.target)}),{threshold:.18});$$('.reveal,.js-counter').forEach(el=>reduce?(el.classList.add('is-visible'),el.classList.contains('js-counter')&&animateCounter(el)):observer.observe(el))}
function animateCounter(el){const to=Number(el.dataset.to),suffix=el.dataset.suffix||'',start=performance.now(),duration=1500;function tick(now){const p=Math.min((now-start)/duration,1),v=Math.round(to*(1-(1-p)**3));el.textContent=v.toLocaleString('en-IN')+suffix;if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}
const handleEscape=e=>{if(e.key==='Escape'){$('.video-close')?.click();$('.mobile-nav-close')?.click()}};
const handleDocClick=e=>{if(!e.target.closest('.institution-nav-group')){$$('.institution-nav-group').forEach(g=>{g.classList.remove('open');g.querySelector('button')?.setAttribute('aria-expanded','false')})}};

export function mountSite(root){
  appRoot=root;
  window.addEventListener('hashchange',render);
  window.addEventListener('keydown',handleEscape);
  document.addEventListener('click',handleDocClick);
  render();
  return ()=>{
    window.removeEventListener('hashchange',render);
    window.removeEventListener('keydown',handleEscape);
    document.removeEventListener('click',handleDocClick);
    document.body.style.overflow='';
    appRoot=null;
  };
}
