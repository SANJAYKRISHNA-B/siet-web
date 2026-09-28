import { allDepartments } from './curriculumData.js';

export const careerUnits = {
  college: {
    name: 'Institute of Engineering and Technology',
    logo: '/brand/siet-logo.png',
    heading: 'Sri Shakthi Institute of Engineering and Technology',
    departments: [...allDepartments.map(d => d.name), 'Administration', 'Training and Placement', 'Physical Education', 'Library', 'IT Support', 'Other'],
    subtitle: 'Autonomous Institution · Affiliated to Anna University',
    desc: 'Aims to focus our attention towards research and industry need based education, we invite applications from the candidates who have a natural flair for research and would like to join our mission for the following positions.',
    cats: [
      ['Leadership Position', ['Principal', 'Director of Research']],
      ['College Teaching Positions', ['Professor', 'Associate Professor', 'Assistant Professor']],
      ['School Teaching Positions', ['English PGT', 'English TGT', 'Tamil TGT', 'Hindi TGT', 'French TGT', 'Maths PGT', 'Science PGT', 'Commerce PGT', 'Economics PGT'], 'CBSE school requires motivated teachers for the following positions.'],
      ['Food Testing Lab', ['Manager Operations (Authorized Signatory)', 'Manager Marketing', 'Marketing Executives', 'Food Analyst I', 'Food Analyst II', 'Lab Technician', 'Receptionist'], 'Invites applications for our newly established state-of-the-art food testing laboratory with imported equipment including ICP-OES, GC-MS, HPLC and FTIR. The lab is established at a cost of Rs. 3 crores, partly funded by the Ministry of Food Processing Industries, Government of India.'],
      ['Career Oriented Specialists', ['Quantitative Aptitude Trainer', 'Verbal Aptitude Trainer', 'BEC Certification Trainer', 'GATE Exam Trainer', 'IES Exam Trainer', 'GRE Exam Trainer', 'Bioinformatics Trainer', 'CAT Exam Trainer', 'C Trainer', 'Java Trainer', 'Machine Learning Trainer', 'LabVIEW Trainer', 'Entrepreneurship Lead', 'Embedded Trainer', 'VLSI Trainer'], 'We offer support for a diverse range of career opportunities, from placement and higher-education preparation to entrepreneurial venture launch. Applicants with 3+ years of experience in a coaching centre are preferred.'],
      ['Managerial Positions', ['Placement Officer', 'Placement Coordinator', 'Vigilance Officer', 'Operations and Infrastructure Lead', 'HR Manager', 'Admissions Manager', 'Social Media Manager', 'Brand Manager', 'Librarian']],
      ['Creative Positions', ['Graphic Designer', '2D & 3D Animator', 'Video Editor', 'Website Designer'], 'Join our creative team to develop original brand collateral, brochures, posters, event-promotion materials, websites and compelling videos.'],
      ['Sports Coach Positions', ['Cricket Coach', 'Tennis Coach', 'Hockey Coach', 'Football Coach', 'Volleyball Coach', 'Handball Coach', 'Swimming Coach (for Girls)', 'Kabaddi Coach', 'Gym Instructor', 'Yoga Trainer', 'Archery Coach'], 'We are looking for part-time and full-time coaches for the following sports.'],
      ['Special Positions', ['System Administration', 'Computer Lab Technicians', 'Tele Calling Executive']]
    ]
  },
  school: {
    name: 'CBSE Senior Secondary School',
    logo: '/brand/sri-shakthi-school-logo.webp',
    heading: 'Sri Shakthi International School',
    website: 'www.srishakthi.ac.in',
    websiteUrl: 'https://www.srishakthi.ac.in',
    departments: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Tamil', 'Hindi', 'Social Science', 'Primary Education', 'Kindergarten', 'Physical Education', 'Arts and Music', 'Administration', 'Other'],
    subtitle: 'Affiliated to CBSE, New Delhi',
    desc: 'Sri Shakthi International School is a premier residential institution built across a 25 eco-friendly acre campus located precisely between the two industrial districts of Coimbatore and Tiruppur. The school is home to a myriad number of flora and fauna. We are affiliated to CBSE and offer classes from Pre KG to Standard 12. We are committed to the cause of Powering the Youth to Empower the Nation.',
    cats: [
      ['School Leadership Positions', ['Principal / Vice Principal', 'Academic Coordinator', 'Section Head']],
      ['PGT & TGT Teachers', ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science']],
      ['Primary & Kindergarten', ['PRT Teachers', 'Montessori / Kindergarten Educators', 'Language Specialists']],
      ['Sports & Extracurricular', ['Physical Education Director', 'Art & Craft Teacher', 'Music & Dance Instructor']]
    ]
  },
  lab: {
    name: 'Food & Environmental Testing Laboratory',
    logo: '/brand/sri-shakthi-food-lab-logo.png',
    heading: 'Sri Shakthi Food Testing Laboratory',
    website: 'www.foodtestinglab.in',
    websiteUrl: 'https://www.foodtestinglab.in',
    departments: ['Food Testing', 'Chemical Analysis', 'Microbiology', 'Quality Assurance', 'Sample Management', 'Administration', 'Other'],
    subtitle: 'NABL Accredited Testing Facility',
    desc: 'Invites Applications for our newly established state of the art food testing laboratory with imported equipments like ICP-OES, GC-MS, HPLC, & FTIR. The Lab is established at a cost of Rs. 3 crores partly funded by Ministry of Food Processing Industries, Government of India.',
    cats: [
      ['Quality & Laboratory Management', ['Quality Manager', 'Technical Manager', 'NABL Coordinator']],
      ['Analytical Specialists', ['Senior Food Analyst', 'Chemical Analyst', 'Residue Analysis Specialist']],
      ['Microbiology Specialists', ['Senior Microbiologist', 'Microbiology Analyst']],
      ['Technical Support', ['Laboratory Technician', 'Sample Management Assistant']]
    ]
  }
};
