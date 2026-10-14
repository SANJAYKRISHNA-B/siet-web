import { deptIcon } from '../components/common/SvgIcons.js';

export const ugPrograms = [
  ['Agricultural Engineering', 'Sustainable solutions for a better tomorrow', 'agri'],
  ['Artificial Intelligence and Data Science', 'From data to real-world impact', 'aids'],
  ['Artificial Intelligence and Machine Learning', 'Building intelligent systems', 'aiml'],
  ['Biomedical Engineering', 'Technology for healthier lives', 'biomed'],
  ['Biotechnology', 'Innovating for a brighter future', 'biotech'],
  ['Civil Engineering', 'Building resilient infrastructure', 'civil'],
  ['Computer Science and Engineering', 'Driving the digital transformation', 'cse'],
  ['CSE (Cyber Security)', 'Securing the digital tomorrow', 'cyber'],
  ['Electrical and Electronics', 'Powering the future', 'eee'],
  ['Electronics and Communication', 'Connecting ideas to possibilities', 'ece'],
  ['Food Technology', 'Innovating for healthy tomorrow', 'food'],
  ['Information Technology', 'Shaping a smarter world', 'it'],
  ['Mechanical Engineering', 'Engineering what moves the world', 'mech'],
  ['VLSI Design', 'Designing the next generation', 'vlsi']
];

export const pgPrograms = [
  ['M.E. CAD / CAM', 'Automated digital manufacturing & robotics', 'mech'],
  ['M.E. Computer Science and Engineering', 'Advanced computing and machine intelligence', 'cse'],
  ['M.E. Embedded Systems', 'Smart edge devices & connected IoT', 'aiml'],
  ['M.E. Structural Engineering', 'Resilient modern infrastructure design', 'civil'],
  ['M.E. VLSI Design', 'Next-generation semiconductor architectures', 'vlsi'],
  ['Master of Business Administration (MBA)', 'Strategic leadership & global enterprise management', 'aids'],
  ['Master of Computer Applications (MCA)', 'Enterprise software architecture & development', 'it']
];

export const programs = ugPrograms;

export const ugProgramsDetailed = [
  { code: 'AGRI', degree: 'B.Tech', name: 'Agricultural Engineering', fullName: 'B.Tech - Agricultural Engineering', desc: 'Smart farming, precision irrigation, agro-machinery automation and sustainable food systems.', duration: '4 Years', intake: '60', img: '/assets/images/category/cat1.jpg', deptSlug: 'agricultural-engineering', tags: ['Autonomous R2025', 'Intake: 60', 'Agro-Robotics', 'TNAU Collab'] },
  { code: 'AI and DS', degree: 'B.Tech', name: 'Artificial Intelligence and Data Science', fullName: 'B.Tech - Artificial Intelligence and Data Science', desc: 'Mathematical foundations, predictive modeling, big data analytics, neural computing and data engineering.', duration: '4 Years', intake: '120', img: '/assets/images/course/3.jpg', deptSlug: 'artificial-intelligence-and-data-science', tags: ['Autonomous R2025', 'Intake: 120', 'Big Data', 'Deep Learning'] },
  { code: 'AI and ML', degree: 'B.Tech', name: 'Artificial Intelligence and Machine Learning', fullName: 'B.Tech - Artificial Intelligence and Machine Learning', desc: 'Deep learning architectures, computer vision, generative AI algorithms, NLP and intelligent robotics.', duration: '4 Years', intake: '60', img: '/assets/images/category/cat5.jpg', deptSlug: 'artificial-intelligence-and-machine-learning', tags: ['Autonomous R2025', 'Intake: 60', 'Generative AI', 'Robotics CoE'] },
  { code: 'BME', degree: 'B.E', name: 'Biomedical Engineering', fullName: 'B.E - Biomedical Engineering', desc: 'Medical instrumentation, physiological monitoring, biomaterials, diagnostic imaging and assistive healthcare robotics.', duration: '4 Years', intake: '60', img: '/assets/images/category/cat2.jpg', deptSlug: 'biomedical-engineering', tags: ['Autonomous R2025', 'Intake: 60', 'Medical Devices', 'Healthcare AI'] },
  { code: 'BIOTECH', degree: 'B.Tech', name: 'Biotechnology', fullName: 'B.Tech - Biotechnology', desc: 'Molecular science, bioprocessing, genetic engineering, industrial microbiology, downstream separation and bioinformatics.', duration: '4 Years', intake: '60', img: '/assets/images/category/cat3.jpg', deptSlug: 'biotechnology', tags: ['Autonomous R2025', 'Intake: 60', 'Bioprocessing', 'Genomics Lab'] },
  { code: 'CIVIL', degree: 'B.E', name: 'Civil Engineering', fullName: 'B.E - Civil Engineering', desc: 'Smart structural analysis, geotechnical design, green building technology, BIM and environmental hydraulics.', duration: '4 Years', intake: '60', img: '/assets/images/category/cat4.jpg', deptSlug: 'civil-engineering', tags: ['Autonomous R2025', 'Intake: 60', 'Smart Structures', 'BIM Architecture'] },
  { code: 'CSE', degree: 'B.E', name: 'Computer Science and Engineering', fullName: 'B.E - Computer Science and Engineering', desc: 'Established 2006 • NBA Tier-I Accredited • Core computing foundations, intelligent algorithms, cloud computing, data structures and enterprise systems.', duration: '4 Years', intake: '240', img: '/assets/images/category/cat5.jpg', deptSlug: 'computer-science-and-engineering', tags: ['Autonomous R2025', 'Intake: 240', 'NBA Tier-I', 'Cloud & AI CoE'] },
  { code: 'CYBER', degree: 'B.E', name: 'Computer Science and Engineering ( Cyber Security )', fullName: 'B.E - Computer Science and Engineering ( Cyber Security )', desc: 'Established 2022 • Digital forensics, ethical hacking, cryptographic protocols, cloud security frameworks and SOC threat intelligence.', duration: '4 Years', intake: '120', img: '/assets/images/course/3.jpg', deptSlug: 'cse-cyber-security', tags: ['Autonomous R2025', 'Intake: 120', 'Ethical Hacking', 'SOC & Forensics'] },
  { code: 'EEE', degree: 'B.E', name: 'Electrical and Electronics Engineering', fullName: 'B.E - Electrical and Electronics Engineering', desc: 'Power systems, smart grid architectures, electric mobility, renewable energy conversion and industrial drives.', duration: '4 Years', intake: '60', img: '/assets/images/category/cat6.jpg', deptSlug: 'electrical-and-electronics', tags: ['Autonomous R2025', 'Intake: 60', 'Electric Mobility', 'Smart Grids'] },
  { code: 'ECE', degree: 'B.E', name: 'Electronics and Communication Engineering', fullName: 'B.E - Electronics and Communication Engineering', desc: '5G RF communications, embedded IoT systems, digital signal processing, microelectronics and modern telecommunication.', duration: '4 Years', intake: '180', img: '/assets/images/category/cat7.jpg', deptSlug: 'electronics-and-communication', tags: ['Autonomous R2025', 'Intake: 180', '5G RF & IoT', 'Signal Processing'] },
  { code: 'FOOD', degree: 'B.Tech', name: 'Food Technology', fullName: 'B.Tech - Food Technology', desc: 'Food preservation, dairy processing, industrial packaging, safety certifications and precision nutrition formulation.', duration: '4 Years', intake: '60', img: '/assets/images/category/cat8.jpg', deptSlug: 'food-technology', tags: ['Autonomous R2025', 'Intake: 60', 'Food Processing', 'Quality Systems'] },
  { code: 'IT', degree: 'B.Tech', name: 'Information Technology', fullName: 'B.Tech - Information Technology', desc: 'Full-stack software engineering, cloud networking, DevOps automation, enterprise database systems and cyber infrastructure.', duration: '4 Years', intake: '120', img: '/assets/images/course/3.jpg', deptSlug: 'information-technology', tags: ['Autonomous R2025', 'Intake: 120', 'Full Stack DevOps', 'Cyber Infra'] },
  { code: 'MECH', degree: 'B.E', name: 'Mechanical Engineering', fullName: 'B.E - Mechanical Engineering', desc: 'Computational mechanics, thermodynamics, additive manufacturing, automotive engineering and advanced robotics.', duration: '4 Years', intake: '60', img: '/assets/images/course/6.jpg', deptSlug: 'mechanical-engineering', tags: ['Autonomous R2025', 'Intake: 60', 'Robotics & CNC', 'CAD / CAM CoE'] },
  { code: 'VLSI', degree: 'B.E', name: 'Electronics Engineering (VLSI Design and Technology)', fullName: 'B.E - Electronics Engineering (VLSI Design and Technology)', desc: 'Semiconductor design, CMOS digital/analog ICs, FPGA synthesis, physical design verification and System-on-Chip (SoC).', duration: '4 Years', intake: '60', img: '/assets/images/category/cat7.jpg', deptSlug: 'vlsi-design', tags: ['Autonomous R2025', 'Intake: 60', 'Semiconductor ICs', 'SoC Design'] }
];

export const pgProgramsDetailed = [
  { code: 'M-CSE', degree: 'M.E', name: 'Computer Science and Engineering', fullName: 'M.E - Computer Science and Engineering', desc: 'Advanced algorithms, machine learning research, distributed cloud systems and high-performance computing.', duration: '2 Years', intake: '18', img: '/assets/images/category/cat5.jpg', deptSlug: 'computer-science-and-engineering', tags: ['Autonomous R2025', 'Intake: 18', 'Distributed Cloud', 'Research Lab'] },
  { code: 'M-VLSI', degree: 'M.E', name: 'VLSI Design', fullName: 'M.E - VLSI Design', desc: 'Advanced semiconductor microelectronics, ASIC design flows, physical synthesis, low-power VLSI and SoC testing.', duration: '2 Years', intake: '18', img: '/assets/images/category/cat7.jpg', deptSlug: 'vlsi-design', tags: ['Autonomous R2025', 'Intake: 18', 'ASIC Microelectronics', 'FPGA Synthesis'] },
  { code: 'M-CAD', degree: 'M.E', name: 'CAD/CAM', fullName: 'M.E - CAD/CAM', desc: 'Advanced computer-aided design, generative modeling, CNC automation, finite element simulation and precision tooling.', duration: '2 Years', intake: '18', img: '/assets/images/course/6.jpg', deptSlug: 'mechanical-engineering', tags: ['Autonomous R2025', 'Intake: 18', 'Generative Design', 'CNC Automation'] },
  { code: 'M-EMB', degree: 'M.E', name: 'Embedded System Technologies', fullName: 'M.E - Embedded System Technologies', desc: 'Real-time operating systems (RTOS), IoT architectures, ARM microcontrollers, automotive electronics and firmware engineering.', duration: '2 Years', intake: '18', img: '/assets/images/category/cat6.jpg', deptSlug: 'electrical-and-electronics', tags: ['Autonomous R2025', 'Intake: 18', 'RTOS & ARM', 'IoT Architectures'] },
  { code: 'M-STR', degree: 'M.E', name: 'Structural Engineering', fullName: 'M.E - Structural Engineering', desc: 'Advanced earthquake-resistant design, prestressed concrete, smart materials, tall structures and structural health monitoring.', duration: '2 Years', intake: '18', img: '/assets/images/category/cat4.jpg', deptSlug: 'civil-engineering', tags: ['Autonomous R2025', 'Intake: 18', 'Earthquake Design', 'Tall Structures'] },
  { code: 'M-FOOD', degree: 'M.Tech', name: 'Food Technology', fullName: 'M.Tech - Food Technology', desc: 'Advanced food processing technologies, biopolymers, food biotechnology, functional food development and global quality systems.', duration: '2 Years', intake: '18', img: '/assets/images/category/cat8.jpg', deptSlug: 'food-technology', tags: ['Autonomous R2025', 'Intake: 18', 'Advanced Biopolymers', 'Global Quality'] },
  { code: 'M-FARM', degree: 'M.Tech', name: 'Farm Machinery', fullName: 'M.Tech - Farm Machinery', desc: 'Advanced agricultural power machinery, precision agro-robotics, bio-energy engineering and automated harvesting systems.', duration: '2 Years', intake: '18', img: '/assets/images/category/cat1.jpg', deptSlug: 'agricultural-engineering', tags: ['Autonomous R2025', 'Intake: 18', 'Precision Machinery', 'Bio-Energy'] }
];

export const bottomBannerHtml = `<div class="programme-bottom-banner reveal"><div class="bottom-banner-cap">${deptIcon('grad')}</div><div class="bottom-banner-text"><h4>Choose a programme.</h4><p>Shape a better tomorrow.</p></div><div class="bottom-banner-line"></div></div>`;
