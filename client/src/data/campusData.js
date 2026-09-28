import { pageGroups } from './navigationData.js';
import { icon, deptIcon, vmIcon } from '../components/common/SvgIcons.js';
import { ugPrograms, pgPrograms } from './programmesData.js';

const counter = (to, suffix = '') => `<span class="js-counter" data-to="${to}" data-suffix="${suffix}">0${suffix}</span>`;

export const internalPageData = {
  'campus-life': {
    category: 'Campus Experience',
    breadcrumbs: ['Campus', 'Campus Life'],
    heroPills: [
      { icon: 'leaf', label: '45-Acre Eco Campus' },
      { icon: 'users', label: 'Multicultural Community' },
      { icon: 'masks', label: 'Cultural Traditions & Fests' },
      { icon: 'heart', label: 'Student Wellness & Care' }
    ],
    title: 'Student Life & Campus Community',
    subtitle: 'A vibrant 45-acre eco-friendly smart campus empowering holistic leadership, cultural dynamism, and engineering breakthroughs.',
    overviewLead: 'At Sri Shakthi, campus life is an enriching journey that extends far beyond lecture halls and laboratories. Our vibrant 45-acre eco-friendly campus in Coimbatore fosters a multidisciplinary environment where academic rigor meets cultural creativity, active student societies, holistic wellness, and strong community bonds.',
    featuredImage: '/brand/campus-life/student-life.png',
    featuredBadge: '45-Acre Green Campus',
    featuredStat: '5,000+ Engaged Learners',
    pillars: [
      { icon: 'users', tag: 'VIBRANT COMMUNITY', title: 'Multicultural Student Life', desc: 'Welcoming learners from across India, creating an open, inclusive atmosphere for personal expression, peer mentorship, cultural exchange, and lifelong camaraderie.' },
      { icon: 'leaf', tag: 'SUSTAINABLE LIVING', title: '45-Acre Eco-Conscious Campus', desc: 'Designed with extensive botanical gardens, solar energy installations, rainwater harvesting lakes, and pedestrian-first walkways promoting wellness and environmental mindfulness.' },
      { icon: 'masks', tag: 'SIGNATURE CELEBRATIONS', title: 'Landmark Fests & Cultural Traditions', desc: 'Celebrated annual carnivals like DHRUVA, traditional Pongal Vizha, open amphitheater music concerts, and theatrical arts that energize collegiate life throughout the year.' },
      { icon: 'heart', tag: 'STUDENT WELLNESS', title: 'Holistic Well-being & Social Spaces', desc: 'Green shaded study courtyards, community lounges, healthy multi-cuisine cafeterias, and dedicated counseling mentoring networks supporting student health.' }
    ],
    gallery: [
      { img: '/brand/campus-arch.jpg', title: 'Green Campus Avenues & Courtyards', caption: 'Lush, landscaped pedestrian walkways and open-air botanical garden study zones.' },
      { img: '/brand/campus-life/cultural.png', title: 'Cultural Celebrations & Traditions', caption: 'Annual DHRUVA carnival, traditional Pongal Vizha, and collegiate arts festivals.' },
      { img: '/brand/campus-life/learning-growth.png', title: 'Collaborative Learning Commons', caption: 'Interactive peer-study circles and multidisciplinary innovation huddles.' },
      { img: '/brand/events/event-sangamam-hd.jpg', title: 'Signature Arts & Stage Extravaganza', caption: 'Live musical performances, choreography competitions, and celebrity concerts.' }
    ],
    metrics: [
      { val: '45', suffix: '+', label: 'Acres of Green Campus' },
      { val: '5000', suffix: '+', label: 'Vibrant Student Community' },
      { val: '100', suffix: '+', label: 'Annual Campus Events' },
      { val: '100', suffix: '%', label: 'Ragging-Free Safe Haven' }
    ],
    highlights: [
      { title: 'Annual Cultural Festival - DHRUVA', desc: 'Inter-college mega celebration featuring music, choreography, drama, fashion, and national celebrity performances.' },
      { title: 'Student Leadership Council', desc: 'Elected student body representing learner interests, organizing outreach, and spearheading peer mentorship programs.' },
      { title: 'Multi-Cuisine Food Courts', desc: 'Hygienic cafeterias serving fresh South Indian, North Indian, and continental options with strict quality monitoring.' },
      { title: 'Campus Security & Surveillance', desc: 'Round-the-clock security personnel, 250+ CCTV cameras, and biometric access points guaranteeing 100% safety.' }
    ],
    faqs: [
      { q: 'What is the daily schedule like on campus?', a: 'Academic sessions typically run from 8:45 AM to 4:45 PM, followed by club activities, sports practices, and library study hours until 7:30 PM.' },
      { q: 'Are there mentorship programs for freshers?', a: 'Yes, every first-year student is assigned a senior student mentor and a dedicated faculty counselor for personalized guidance throughout their journey.' }
    ],
    ctaTitle: 'Ready to Experience Life at Sri Shakthi?',
    ctaSubtitle: 'Schedule a guided campus tour or connect with our student ambassadors today.'
  },
  'facilities': {
    category: 'Infrastructure',
    breadcrumbs: ['Campus', 'Facilities'],
    heroPills: [
      { icon: 'tech', label: '50+ Specialized Labs' },
      { icon: 'wifi', label: '1 Gbps Dedicated Fiber' },
      { icon: 'grad', label: '1,500+ Compute Nodes' },
      { icon: 'sun', label: '100% Green Energy' }
    ],
    title: 'Modern Facilities & Advanced Labs',
    subtitle: 'Engineered for high-impact hands-on learning with next-gen labs, smart seminar halls, and high-speed campus fiber connectivity.',
    overviewLead: 'Sri Shakthi provides cutting-edge research facilities, world-class compute centers, and collaborative academic infrastructure that prepare aspiring engineers for modern industry environments and global breakthroughs.',
    featuredImage: '/brand/techpark-hd.jpg',
    featuredBadge: 'Next-Gen Research Labs',
    featuredStat: '1 Gbps High-Speed Net',
    pillars: [
      { icon: 'tech', tag: 'HIGH PERFORMANCE', title: 'High-Performance Computing & AI', desc: 'Dedicated GPU clusters for AI/ML training, computer vision models, data analytics, and enterprise database simulations.' },
      { icon: 'grad', tag: 'INTERACTIVE', title: 'Digital Smart Classrooms', desc: 'Acoustically tuned lecture halls equipped with interactive smart panels, hybrid streaming, and ergonomic seating.' },
      { icon: 'cube', tag: 'R&D HUBS', title: 'Central Research Facility', desc: 'Precision analytical instruments, embedded hardware analyzers, RF testbeds, and rapid 3D prototyping suites.' },
      { icon: 'masks', tag: 'AUDITORIUMS', title: 'Convention & Seminar Halls', desc: 'Fully air-conditioned 1,200-capacity auditorium and tiered symposium chambers for global conferences.' }
    ],
    gallery: [
      { img: '/brand/special-labs/lab-ai-hd.jpg', title: 'High-Performance AI & Deep Learning Studio', caption: 'High-compute workstations configured for machine learning and AI research.' },
      { img: '/brand/special-labs/lab-robotics-hd.jpg', title: 'Advanced Robotics & Automation Suite', caption: 'Industrial robotic arms, mechatronics stations, and autonomous kits.' },
      { img: '/brand/special-labs/lab-iot-hd.jpg', title: 'IoT & Embedded Systems Sandbox', caption: 'Sensors, microcontrollers, and wireless development testbeds.' },
      { img: '/brand/special-labs/lab-cyber-cloud-hd.jpg', title: 'Cyber Security & Cloud Datacenter', caption: 'Enterprise virtualization racks, ethical hacking sandbox, and network simulators.' }
    ],
    metrics: [
      { val: '50', suffix: '+', label: 'Specialized Tech Labs' },
      { val: '1', suffix: ' Gbps', label: 'High-Speed Fiber Net' },
      { val: '1500', suffix: '+', label: 'Modern Compute Nodes' },
      { val: '100', suffix: '%', label: 'Power Backup & Solar' }
    ],
    highlights: [
      { title: 'Industry-Sponsored Centers of Excellence', desc: 'Collaborative labs supported by leading tech giants for direct real-world skill development.' },
      { title: 'Campus-wide Gigabit Wi-Fi', desc: 'Seamless high-throughput wireless coverage spanning hostels, classrooms, courtyards, and cafeterias.' },
      { title: 'Green Energy Infrastructure', desc: 'Rooftop solar installations delivering sustainable power to labs and central computing infrastructure.' },
      { title: '24/7 ATM & Banking Services', desc: 'On-campus nationalized bank branch and multiple 24-hour ATM kiosks for student convenience.' }
    ],
    faqs: [
      { q: 'Can students access labs after regular college hours?', a: 'Yes, project teams and research students have special access permissions for specialized labs up to 8:00 PM with faculty approval.' },
      { q: 'Is high-speed internet available in hostel rooms?', a: 'Yes, both Wi-Fi access points and Ethernet ports are available throughout residential blocks.' }
    ],
    ctaTitle: 'Explore Our Advanced Research Facilities',
    ctaSubtitle: 'Take a virtual tour or visit our research incubators and centers of excellence.'
  },
  'hostel': {
    category: 'Student Living',
    breadcrumbs: ['Campus', 'Hostels'],
    heroPills: [
      { icon: 'home', label: '2,500+ Bed Capacity' },
      { icon: 'shield', label: '24/7 Warden & Security' },
      { icon: 'cup', label: 'Nutritious Dining' },
      { icon: 'leaf', label: 'Green Surroundings' }
    ],
    title: 'Hostel Accommodation & Student Residences',
    subtitle: 'Secure, clean, and comfortable residential blocks providing a serene study atmosphere, nutritious dining, and round-the-clock security.',
    overviewLead: 'Our campus hostels are a genuine home away from home. Designed for safety, camaraderie, and peaceful study, residences feature spacious rooms, modern hygienic dining halls, dedicated recreation corners, and 24/7 healthcare support.',
    featuredImage: '/brand/campus-life/hostel-room.jpg',
    featuredBadge: 'Separate Boys & Girls Blocks',
    featuredStat: '2,500+ Resident Scholars',
    pillars: [
      { icon: 'home', tag: 'COMFORT', title: 'Furnished Living Quarters', desc: 'Spacious 2, 3, and 4-sharing rooms equipped with ergonomic study desks, wardrobes, and private balconies.' },
      { icon: 'cup', tag: 'NUTRITION', title: 'Hygienic Dining Halls', desc: 'FSSAI-certified central kitchens serving balanced, appetizing vegetarian and non-vegetarian menus.' },
      { icon: 'book', tag: 'ACADEMICS', title: 'Resident Study Lounges', desc: 'Quiet late-night study halls, TV lounges, indoor table tennis, and chess recreation spaces.' },
      { icon: 'shield', tag: 'SECURITY', title: 'Safety & Health Protocol', desc: 'Round-the-clock resident wardens, female security staff for girls blocks, and on-call medical doctors.' }
    ],
    gallery: [
      { img: '/brand/campus-life/hostel-dining.jpg', title: 'FSSAI-Certified Steam Dining Hall', caption: 'Hygienic stainless-steel mechanized dining facility serving four balanced, nutritious meals daily.' },
      { img: '/brand/library-interior.jpg', title: 'Resident Study Lounge & Quiet Pods', caption: 'Air-conditioned late-night reading spaces equipped with Wi-Fi and individual charging stations.' },
      { img: '/brand/campus-arch.jpg', title: 'Lush Residential Courtyard', caption: 'Quiet landscaped inner quadrangle providing a safe, green study and leisure ambiance.' },
      { img: '/brand/campus-life/sports-gym.jpg', title: 'Resident Fitness & Conditioning Gym', caption: 'Dedicated morning and late-evening fitness gym exclusively accessible to hostel boarders.' }
    ],
    metrics: [
      { val: '2500', suffix: '+', label: 'Resident Capacity' },
      { val: '4', suffix: ' Times', label: 'Nutritious Meals Daily' },
      { val: '24', suffix: '/7', label: 'Security & Wardens' },
      { val: '100', suffix: '%', label: 'Solar Water Heating' }
    ],
    highlights: [
      { title: 'RO Purified Drinking Water', desc: 'Multi-stage reverse osmosis water purifiers with chiller units installed on every floor.' },
      { title: 'Commercial Laundry Services', desc: 'Fast, automated laundry and iron facilities available within the residential complex.' },
      { title: 'High-Speed Wi-Fi Connectivity', desc: 'Dedicated hostel network routers ensuring uninterrupted project research and streaming.' },
      { title: 'Fitness Gym in Residence', desc: 'Modern fitness equipment and yoga spaces exclusively accessible to resident boarders.' }
    ],
    faqs: [
      { q: 'What is the procedure to apply for hostel accommodation?', a: 'Students can opt for hostel residency during the admission counseling process. Room allotment is processed on a first-come, first-served basis.' },
      { q: 'What are the hostel in-time rules?', a: 'All students are required to report to their respective blocks by 7:30 PM. Outings require parental authorization via our digital parent portal.' }
    ],
    ctaTitle: 'Apply for Residential Accommodation',
    ctaSubtitle: 'Secure your comfortable stay at Sri Shakthi residences with world-class facilities and caring wardens.'
  },
  'transport': {
    category: 'Logistics & Safety',
    breadcrumbs: ['Campus', 'Transport'],
    heroPills: [
      { icon: 'bus', label: '60+ Modern Bus Fleet' },
      { icon: 'compass', label: '50+ Commute Routes' },
      { icon: 'shield', label: 'GPS Real-Time Tracking' },
      { icon: 'check', label: 'Certified Drivers' }
    ],
    title: 'Comprehensive Transport Network',
    subtitle: 'Connecting students and faculty across Coimbatore, Tirupur, Pollachi, and Palakkad with 60+ modern GPS-tracked buses.',
    overviewLead: 'Sri Shakthi operates one of the most comprehensive collegiate bus transit networks in Western Tamil Nadu. Our fleet of 60+ GPS-tracked vehicles ensures punctual, comfortable, and safe daily transportation for thousands of day scholars.',
    featuredImage: '/brand/campus-life/transport-fleet.jpg',
    featuredBadge: '60+ GPS Bus Fleet',
    featuredStat: '50+ Daily Routes',
    pillars: [
      { icon: 'clock', tag: 'PUNCTUALITY', title: 'Punctual Daily Service', desc: 'Strictly scheduled morning arrivals and evening departures synchronized with academic timetables.' },
      { icon: 'compass', tag: 'TELEMATICS', title: 'Real-Time GPS Tracking', desc: 'Mobile tracking app allowing students and parents to view bus coordinates and stop arrival times.' },
      { icon: 'shield', tag: 'SAFETY', title: 'Rigorous Safety Compliance', desc: 'Speed governors, emergency exits, first-aid kits, and regular RTO fitness inspections on every vehicle.' },
      { icon: 'pin', tag: 'COVERAGE', title: 'Broad Regional Coverage', desc: 'Key stops across Coimbatore city, Annur, Avinashi, Palladam, Tirupur, and neighboring arterial corridors.' }
    ],
    gallery: [
      { img: '/brand/campus-life/transport-route-map.svg', title: '5-Zone Transit Route Network', caption: 'Connecting 50+ commuter corridors across Coimbatore, Tirupur, Erode, and Pollachi.' },
      { img: '/brand/campus-life/transport-telematics.svg', title: 'Live GPS Telematics & Speed Governors', caption: 'Real-time route telemetry and instant bus arrival notifications on the parent mobile app.' },
      { img: '/brand/departments-campus.jpg', title: 'Dedicated Campus Transit Corridors', caption: 'Wide, tree-lined vehicular avenues separated from pedestrian walkways for student safety.' },
      { img: '/brand/campus-life/transport-terminal.svg', title: 'Central Boarding Depot & Inspection Bay', caption: 'Covered passenger staging platforms with strict bi-annual RTO vehicular fitness checks.' }
    ],
    metrics: [
      { val: '60', suffix: '+', label: 'GPS-Tracked Buses' },
      { val: '50', suffix: '+', label: 'Daily Commute Routes' },
      { val: '4000', suffix: '+', label: 'Students Commuting Daily' },
      { val: '100', suffix: '%', label: 'Certified Drivers' }
    ],
    highlights: [
      { title: 'Dedicated Special Buses for Evening Labs', desc: 'Special transport runs for students participating in late lab hours, sports practice, or library study.' },
      { title: 'Experienced Driver Workforce', desc: 'Drivers undergo bi-annual defensive driving refresher workshops and comprehensive health checkups.' },
      { title: 'Contactless Bus Passes', desc: 'Digital QR-enabled smart cards allowing swift boarding without physical ticket hassles.' },
      { title: 'Emergency Roadside Assistance', desc: 'Dedicated maintenance van and backup fleet on standby across all major commute sectors.' }
    ],
    faqs: [
      { q: 'How can I register for the college bus facility?', a: 'Transport registration opens at the start of each semester via the Student Portal or at the Transport Office counter in Admin Block.' },
      { q: 'Can day-scholars change their bus stop mid-year?', a: 'Yes, stop change requests can be submitted to the Transport Coordinator with appropriate route seat verification.' }
    ],
    ctaTitle: 'Find Your Bus Route & Commute Timetable',
    ctaSubtitle: 'Download the route map and get in touch with our transport cell for route allocations.'
  },
  'sports': {
    category: 'Athletics & Fitness',
    breadcrumbs: ['Campus', 'Sports & Athletics'],
    heroPills: [
      { icon: 'trophy', label: 'Championship Winning Teams' },
      { icon: 'runner', label: '400m Athletic Track' },
      { icon: 'medal', label: 'Sports Scholarships' },
      { icon: 'shield', label: 'Certified Coaches' }
    ],
    title: 'Sports, Physical Fitness & Games',
    subtitle: 'Nurturing champions and promoting physical fitness with Olympic-standard tracks, multi-sport courts, and professional coaching.',
    overviewLead: 'Physical fitness and team sports form a cornerstone of character development at Sri Shakthi. From zonal championships to all-India inter-university trophies, our athletes consistently bring pride to the institution.',
    featuredImage: '/brand/campus-life/sports-athletics.jpg',
    featuredBadge: 'Championship Sports Arenas',
    featuredStat: '15+ Sports Disciplines',
    pillars: [
      { icon: 'runner', tag: 'OUTDOOR ARENA', title: 'Multi-Sport Outdoor Arena', desc: 'Regulation cricket pitch, standard football ground, 400m athletic track, and synthetic basketball courts.' },
      { icon: 'trophy', tag: 'INDOORS', title: 'Indoor Sports Complex', desc: 'Multi-court badminton stadium with wooden flooring, table tennis arena, and chess training center.' },
      { icon: 'cube', tag: 'CONDITIONING', title: 'Modern Conditioning Gym', desc: 'Heavy resistance machines, cardio treadmills, cross-trainers, and qualified strength coaches.' },
      { icon: 'medal', tag: 'SPONSORSHIP', title: 'Tournament Sponsorship', desc: 'Full institutional travel, accommodation, and kit support for university, zonal, and national championships.' }
    ],
    gallery: [
      { img: '/brand/campus-life/sports-badminton.jpg', title: 'Air-Cooled Indoor Badminton Stadium', caption: '4 international BWF-standard wooden courts with anti-glare overhead high-bay lighting.' },
      { img: '/brand/campus-life/sports-basketball.jpg', title: 'Championship Basketball & Volleyball Courts', caption: 'Multiple acrylic hard-court surfaces with high-intensity LED floodlighting.' },
      { img: '/brand/campus-life/sports-gym.jpg', title: 'High-Performance Conditioning Gym', caption: 'Commercial power racks, Olympic barbells, cardio treadmills, and dedicated trainers.' },
      { img: '/brand/campus-life/sports-team.png', title: 'Varsity Championship Trophy Squads', caption: 'Our victorious university championship teams across cricket, athletics, and basketball.' }
    ],
    metrics: [
      { val: '10', suffix: '+', label: 'Acres Sports Arena' },
      { val: '45', suffix: '+', label: 'State & Zonal Trophies' },
      { val: '15', suffix: '+', label: 'Sport Disciplines' },
      { val: '100', suffix: '%', label: 'Merit Fee Waivers' }
    ],
    highlights: [
      { title: 'Annual Inter-College Sports Fest', desc: 'Welcomes 80+ collegiate teams from across southern states for high-stakes athletic showdowns.' },
      { title: 'Special Sports Quota & Fee Concessions', desc: 'Generous tuition fee waivers and sports kits awarded to state and national level medalists.' },
      { title: 'Floodlit Evening Sports Facilities', desc: 'Modern LED floodlighting enabling extended practice matches after regular classroom hours.' },
      { title: 'Physiotherapy & Sports Rehab', desc: 'Immediate medical assistance and injury rehabilitation support for competing athletes.' }
    ],
    faqs: [
      { q: 'Are beginner coaching classes available for students?', a: 'Yes, our Department of Physical Education conducts beginner sessions in badminton, cricket, volleyball, and yoga every morning and evening.' },
      { q: 'What sports quota scholarships are offered?', a: 'Students representing state or national tournaments receive up to 100% tuition and hostel fee waivers based on performance.' }
    ],
    ctaTitle: 'Join the Champion Sri Shakthi Sports Squad',
    ctaSubtitle: 'Connect with our physical directors to attend trials and varsity team selections.'
  },
  'clubs': {
    category: 'Co-Curriculars',
    breadcrumbs: ['Campus', 'Student Clubs'],
    heroPills: [
      { icon: 'code', label: '26+ Student Clubs' },
      { icon: 'masks', label: '1,800+ Active Members' },
      { icon: 'globe', label: 'National Chapters' },
      { icon: 'star', label: 'Annual Club Grants' }
    ],
    title: 'Student Clubs & Technical Societies',
    subtitle: 'Over 26 student-governed technical, cultural, social, and literary clubs providing platforms to lead, code, create, and inspire.',
    overviewLead: 'Clubs at Sri Shakthi are vibrant launchpads where students turn passions into projects, discover collaborative leadership, organize nationwide hackathons, and forge lifelong creative connections.',
    featuredImage: '/brand/campus-life/clubs.png',
    featuredBadge: '26+ Student-Run Clubs',
    featuredStat: '1,800+ Active Members',
    pillars: [
      { icon: 'code', tag: 'INNOVATION', title: 'Technical Innovations Clubs', desc: 'Coding clubs, AI research circles, IEEE student branch, robotics consortium, and web development guilds.' },
      { icon: 'masks', tag: 'PERFORMING ARTS', title: 'Cultural & Performing Arts', desc: 'Music bands, Western & classical dance troupes, street theatre societies, and fine art communities.' },
      { icon: 'book', tag: 'DISCOURSE', title: 'Literary & Public Speaking', desc: 'Debate society, Model United Nations (MUN) delegation, English quiz club, and Tamil Mandram.' },
      { icon: 'leaf', tag: 'COMMUNITY', title: 'Social Outreach & Green Clubs', desc: 'Rotaract Club, Eco-warriors initiative, community health drives, and village educational programs.' }
    ],
    gallery: [
      { img: '/brand/campus-life/innovation.png', title: 'Hackathons & Coding Competitions', caption: 'Overnight hackathons, coding sprints, and competitive programming challenges.' },
      { img: '/brand/campus-life/cultural.png', title: 'Music & Performing Arts Ensemble', caption: 'College orchestra and dance troupes performing live on festival stages.' },
      { img: '/brand/events/featured-technovate-hd.jpg', title: 'National Tech Symposium & Project Expo', caption: 'Annual student engineering showcase with live hardware and software innovations.' },
      { img: '/brand/campus-life/learning-growth.png', title: 'Peer Mentorship & Leadership Seminars', caption: 'Peer-to-peer technical learning seminars, design bootcamps, and guest tech talks.' }
    ],
    metrics: [
      { val: '26', suffix: '+', label: 'Active Student Clubs' },
      { val: '1800', suffix: '+', label: 'Student Members' },
      { val: '75', suffix: '+', label: 'Workshops & Hackathons' },
      { val: '12', suffix: '+', label: 'National Chapters' }
    ],
    highlights: [
      { title: 'Annual Club Recruitment Expo', desc: 'Freshers get direct hands-on demonstrations from every club at the beginning of the academic year.' },
      { title: 'Student Club Funding & Grants', desc: 'The college allocates dedicated annual innovation budgets to fund student projects and external competitions.' },
      { title: 'Global Society Affiliations', desc: 'Active affiliations with IEEE, ACM, CSI, IETE, SAE India, and Indian Society for Technical Education.' },
      { title: 'Leadership Certification', desc: 'Club office bearers receive formal leadership certificates and credits toward their co-curricular honors.' }
    ],
    faqs: [
      { q: 'How many clubs can a student join?', a: 'Students are encouraged to join up to two clubs (one technical and one cultural or social) to maintain academic-life balance.' },
      { q: 'Can students start a new club?', a: 'Yes, any group of 15+ students with a designated faculty mentor can submit a charter proposal to the Student Affairs Council.' }
    ],
    ctaTitle: 'Ignite Your Passion with Sri Shakthi Clubs',
    ctaSubtitle: 'Explore our clubs directory or register online for the upcoming Club Induction Week.'
  },
  'ncc': {
    category: 'National Service',
    breadcrumbs: ['Campus', 'NCC & NSS'],
    heroPills: [
      { icon: 'shield', label: 'NCC Army Wing' },
      { icon: 'star', label: 'NSS Community Unit' },
      { icon: 'medal', label: 'B & C Certification' },
      { icon: 'runner', label: 'Direct SSB Mentorship' }
    ],
    title: 'National Cadet Corps (NCC) & NSS Units',
    subtitle: 'Fostering patriotism, unwavering discipline, leadership acumen, and selfless community service among youth.',
    overviewLead: 'Our NCC and NSS detachments instill the highest standards of integrity, resilience, and nation-building. Under expert military instructors and dedicated officers, cadets undergo comprehensive training and lead impactful societal service missions.',
    featuredImage: '/brand/campus-life/ncc-cadets.jpg',
    featuredBadge: 'Army Wing & NSS Unit',
    featuredStat: '100% C-Cert Pass Rate',
    pillars: [
      { icon: 'shield', tag: 'DISCIPLINE', title: 'NCC Military Training', desc: 'Drill training, weapon handling, map reading, obstacle courses, and firing range certifications.' },
      { icon: 'star', tag: 'CAMPS', title: 'National Integration Camps', desc: 'Selection to Republic Day Parade (RDC), Thal Sainik Camp (TSC), and National Youth Festivals.' },
      { icon: 'leaf', tag: 'COMMUNITY', title: 'NSS Community Outreach', desc: 'Adopting local villages for sanitation awareness, literacy drives, and environmental conservation.' },
      { icon: 'compass', tag: 'CAREERS', title: 'Armed Forces Mentorship', desc: 'Direct guidance from defense veterans for CDS, AFCAT, and SSB interview preparation.' }
    ],
    gallery: [
      { img: '/brand/events/event-sports-meet-hd.jpg', title: 'Ceremonial March Past & Guard of Honor', caption: 'Impeccable squad drill and saluting guard presented during institutional ceremonies.' },
      { img: '/brand/campus-life/ncc-obstacle-course.svg', title: 'Obstacle Training & Weapon Drills', caption: 'Cadets undergoing rigorous obstacle course training, firing range, and map reading.' },
      { img: '/brand/campus-life/nss-community-drive.svg', title: 'NSS Community Health & Literacy Drive', caption: 'Student volunteers conducting rural health surveys, sanitation education, and medical camps.' },
      { img: '/brand/departments-campus.jpg', title: 'Green Belt Plantation & Conservation', caption: 'Cadets and NSS volunteers planting native trees and championing environmental conservation.' }
    ],
    metrics: [
      { val: '160', suffix: '+', label: 'Enrolled Cadets & Volunteers' },
      { val: '100', suffix: '%', label: 'C-Certificate Pass Rate' },
      { val: '12', suffix: '+', label: 'Rural Service Camps' },
      { val: '15', suffix: '+', label: 'Blood Donation Drives' }
    ],
    highlights: [
      { title: 'Defense Services SSB Guidance', desc: 'Dedicated training sessions that have helped our cadets secure direct commissions into the Indian Armed Forces.' },
      { title: 'Special Camps & Treks', desc: 'Annual trekking expeditions, leadership camps, and disaster management rescue training modules.' },
      { title: 'Extensive Blood Donation Camps', desc: 'Over 500 units of blood collected annually in collaboration with government hospital blood banks.' },
      { title: 'College Tree Plantation Mission', desc: 'Over 2,000 saplings planted in and around neighboring villages by our active NSS volunteers.' }
    ],
    faqs: [
      { q: 'What are the career benefits of obtaining an NCC C-Certificate?', a: 'NCC "C" Certificate holders with high grades receive exemptions from written tests for defense officer selection exams like CDS and direct SSB calls.' },
      { q: 'Can both boys and girls enroll in NCC?', a: 'Yes! Both boys and girls can enroll in our mixed-cadre Army wings with equal training and leadership opportunities.' }
    ],
    ctaTitle: 'Step Up to Serve the Nation',
    ctaSubtitle: 'Join our prestigious NCC Army Wing or NSS volunteer force at the start of the academic term.'
  },
  'academics': {
    category: 'Academics',
    breadcrumbs: ['Academics', 'Overview'],
    heroPills: [
      { icon: 'grad', label: 'Autonomous Curriculum' },
      { icon: 'tech', label: '14+ UG Disciplines' },
      { icon: 'star', label: 'NBA Accredited' },
      { icon: 'check', label: 'Choice-Based Credits' }
    ],
    title: 'Academic Framework & Learning Model',
    subtitle: 'Autonomous curriculum aligned with Industry 4.0, fostering experiential mastery, research-driven innovation, and global career readiness.',
    overviewLead: 'Sri Shakthi combines autonomous academic freedom with strict academic excellence. Our curriculum offers choice-based credit systems, specialized minor tracks, experiential laboratory projects, and mentorship from distinguished faculty.',
    featuredImage: '/brand/curriculum-hero.jpg',
    featuredBadge: 'Autonomous Anna Univ Affiliated',
    featuredStat: '14 UG & 7 PG Programs',
    pillars: [
      { icon: 'book', tag: 'FLEXIBILITY', title: 'Choice Based Credit System (CBCS)', desc: 'Flexibility to choose cross-disciplinary electives, minor specializations, and honors degrees.' },
      { icon: 'tech', tag: 'EXPERIENTIAL', title: 'Project-Based Learning', desc: 'Hands-on capstone projects every semester addressing real industrial and societal challenges.' },
      { icon: 'star', tag: 'SCHOLARSHIP', title: 'Distinguished Faculty', desc: 'Accomplished professors with doctoral credentials, patents, and high-impact peer-reviewed publications.' },
      { icon: 'medal', tag: 'GLOBAL CREDENTIALS', title: 'Global Skill Certifications', desc: 'Integrated AWS, Cisco, RedHat, and NVIDIA deep learning certifications embedded in the course.' }
    ],
    gallery: [
      { img: '/brand/curriculum-hero.jpg', title: 'Interactive Lecture Environment', caption: 'Technology-enabled classrooms supporting active group discussions and presentations.' },
      { img: '/brand/library-study-hall.jpg', title: 'Central Knowledge Repository', caption: 'Over 50,000 volumes, international journals, and digital research access.' },
      { img: '/brand/special-labs/lab-ai-hd.jpg', title: 'Supercomputing AI Lab', caption: 'Dedicated NVIDIA GPU workstations for artificial intelligence projects.' },
      { img: '/brand/techpark-hd.jpg', title: 'Modern Engineering Campus', caption: 'Interconnected academic complexes designed for focused technical exploration.' }
    ],
    metrics: [
      { val: '14', suffix: '+', label: 'Academic Programs' },
      { val: '1:15', suffix: '', label: 'Faculty to Student Ratio' },
      { val: '85', suffix: '%+', label: 'Distinction & First Class' },
      { val: '45', suffix: '+', label: 'Curriculum Partners' }
    ],
    highlights: [
      { title: 'Industry Co-Designed Syllabi', desc: 'Curriculum curated in partnership with tech leaders to reflect today’s real workforce demands.' },
      { title: 'Mandatory Industrial Internships', desc: 'Students gain 8-12 weeks of immersive industrial experience before their final year.' },
      { title: 'Research Incubation Center', desc: 'Seed funding and patent filing assistance provided for student-led patentable innovations.' },
      { title: 'Honors and Minor Degree Tracks', desc: 'Earn a specialized minor in Artificial Intelligence, FinTech, or Cyber Security alongside your core B.E.' }
    ],
    faqs: [
      { q: 'Is Sri Shakthi an autonomous institution?', a: 'Yes, Sri Shakthi operates as an autonomous institution affiliated with Anna University, Chennai, with curriculum freedom approved by UGC.' },
      { q: 'What is the evaluation pattern?', a: 'Assessment is balanced between Continuous Internal Evaluation (40%) and End Semester Examinations (60%) emphasizing practical competence.' }
    ],
    ctaTitle: 'Explore Our Academic Programs',
    ctaSubtitle: 'Discover our departments, course syllabi, and undergraduate engineering offerings.'
  },
  'scholarships': {
    category: 'Admissions & Aid',
    breadcrumbs: ['Admissions', 'Scholarships'],
    heroPills: [
      { icon: 'medal', label: '₹2.5 Cr+ Annual Aid' },
      { icon: 'star', label: 'Merit Fee Waivers' },
      { icon: 'trophy', label: 'Sports Quota Grants' },
      { icon: 'leaf', label: 'First Gen Graduate Aid' }
    ],
    title: 'Scholarships & Institutional Financial Aid',
    subtitle: 'Over ₹2.5 Crores awarded annually in merit, sports, rural student, and government scholarships ensuring no bright mind is left behind.',
    overviewLead: 'Sri Shakthi believes that financial constraints should never stand in the way of academic ambition. Through our comprehensive institutional trust funds and government welfare schemes, over 1,200 scholars receive fee waivers annually.',
    featuredImage: '/brand/campus-life/learning-growth.png',
    featuredBadge: '₹2.5 Cr+ Annual Aid Disbursed',
    featuredStat: '1,200+ Scholars Supported',
    pillars: [
      { icon: 'star', tag: 'MERIT AWARDS', title: 'Academic Merit Scholarships', desc: 'Up to 100% tuition waiver for high scorers in HSC board exams and top Anna University counseling ranks.' },
      { icon: 'trophy', tag: 'ATHLETICS', title: 'Sports Quota Grants', desc: 'Complete tuition and residential concessions for state and national sports medalists and athletes.' },
      { icon: 'grad', tag: 'FIRST GENERATION', title: 'First Generation Graduate Aid', desc: 'Government-supported fee concessions for students who are the first in their families to attend college.' },
      { icon: 'leaf', tag: 'NEED-BASED', title: 'Economic Need Assistance', desc: 'Need-based institutional trust stipends ensuring underprivileged students complete their degrees uninterrupted.' }
    ],
    gallery: [
      { img: '/brand/curriculum-hero.jpg', title: 'Merit Felicitation Ceremony', caption: 'Recognition ceremony for institutional academic scholarship recipients.' },
      { img: '/brand/campus-life/student-life.png', title: 'Bright Minds on Campus', caption: 'A collaborative, inclusive learning environment for aspiring engineers.' },
      { img: '/brand/campus-life/sports-team.png', title: 'Sports Quota Awardees', caption: 'Athletes receiving special equipment, training grants, and academic support.' },
      { img: '/brand/events/featured-technovate-hd.jpg', title: 'Academic Excellence Honors', caption: 'Top rankers honored with certificate of honors and research grants.' }
    ],
    metrics: [
      { val: '2.5', suffix: ' Cr+', label: 'Annual Scholarship Fund' },
      { val: '1200', suffix: '+', label: 'Students Benefiting' },
      { val: '100', suffix: '%', label: 'Max Tuition Fee Waiver' },
      { val: '5', suffix: '+', label: 'Scholarship Categories' }
    ],
    highlights: [
      { title: 'Cut-off Based Tuition Waivers', desc: 'HSC cut-offs above 190 receive 100% tuition concession; 180-189 receive 50% concession.' },
      { title: 'Single Window Verification', desc: 'Streamlined desk in the Admissions Office assists students in applying for central & state post-matric schemes.' },
      { title: 'Alumni Endowed Scholarships', desc: 'Distinguished alumni contribute annual financial support to deserving final-year research projects.' },
      { title: 'Zero Hassle Renewal', desc: 'Scholarships remain renewed across all four years upon maintaining good academic standing.' }
    ],
    faqs: [
      { q: 'How can I apply for merit scholarship during admission?', a: 'Present your 12th standard mark sheets during admission counseling. Eligibility will be calculated and granted directly.' },
      { q: 'Can government scholarship and college fee concessions be combined?', a: 'Students can claim eligible government welfare schemes along with institutional support subject to statutory guidelines.' }
    ],
    ctaTitle: 'Check Your Scholarship Eligibility',
    ctaSubtitle: 'Use our scholarship calculator or contact our financial aid counselors for immediate guidance.'
  },
  'eligibility': {
    category: 'Admissions',
    breadcrumbs: ['Admissions', 'Eligibility Criteria'],
    heroPills: [
      { icon: 'check', label: 'TNEA Code: 2764' },
      { icon: 'grad', label: 'HSC PCM Pathways' },
      { icon: 'tech', label: 'Lateral Entry Available' },
      { icon: 'shield', label: 'AICTE & Anna Univ' }
    ],
    title: 'Eligibility Criteria & Entry Requirements',
    subtitle: 'Comprehensive criteria for B.E. / B.Tech first year admissions, lateral entry, and postgraduate engineering programs.',
    overviewLead: 'Sri Shakthi admits students through Tamil Nadu Engineering Admissions (TNEA Single Window Counselling - College Code 2764) as well as through institutional Merit Management Quota in compliance with Anna University norms.',
    featuredImage: '/brand/campus-arch.jpg',
    featuredBadge: 'TNEA Counseling Code: 2764',
    featuredStat: 'Anna Univ & AICTE Approved',
    pillars: [
      { icon: 'grad', tag: 'UNDERGRADUATE', title: 'First Year B.E. / B.Tech', desc: 'Passed 10+2 with Physics, Chemistry, and Mathematics as mandatory subjects with requisite minimum pass marks.' },
      { icon: 'tech', tag: 'LATERAL ENTRY', title: 'Lateral Entry (2nd Year)', desc: 'Passed 3-year diploma in engineering/technology or B.Sc. with mathematics with minimum 45% (40% for reserved).' },
      { icon: 'star', tag: 'POSTGRADUATE', title: 'Postgraduate (M.E. / MBA)', desc: 'Recognized bachelor degree in relevant engineering branch or discipline with valid TANCET / GATE score.' },
      { icon: 'globe', tag: 'INTERNATIONAL', title: 'International & NRI Quota', desc: 'Equivalent 10+2 qualification certified by AIU with physics, chemistry, and mathematics background.' }
    ],
    gallery: [
      { img: '/brand/techpark-hd.jpg', title: 'Admissions & Counseling Center', caption: 'Dedicated counseling desk for student enrollment and document verification.' },
      { img: '/brand/departments-campus.jpg', title: 'Main Administration Block', caption: 'Central institutional administrative chambers and registrar desk.' },
      { img: '/brand/curriculum-hero.jpg', title: 'Classroom Experience', caption: 'Modern multimedia lecture theaters engineered for collaborative learning.' },
      { img: '/brand/campus-life/student-life.png', title: 'Student Life Overview', caption: 'Vibrant student community welcoming candidates from all over India.' }
    ],
    metrics: [
      { val: '45', suffix: '%+', label: 'Min PCM Aggregate for Gen' },
      { val: '40', suffix: '%+', label: 'Reserved Categories Min' },
      { val: '3', suffix: ' Yrs', label: 'Diploma for Lateral Entry' },
      { val: '2764', suffix: '', label: 'TNEA Counseling Code' }
    ],
    highlights: [
      { title: 'TNEA Counseling Code: 2764', desc: 'Use college code 2764 during government single window counseling rounds.' },
      { title: 'Document Verification Desk', desc: 'Original certificates, community certificates, and transfer certificates verified swiftly on counseling day.' },
      { title: 'Direct Management Admissions', desc: 'Deserving candidates can apply through the institutional merit ranking quota by registering online.' },
      { title: 'Career Guidance Sessions', desc: 'Free one-on-one branch selection counseling with senior professors to help pick the right career path.' }
    ],
    faqs: [
      { q: 'What is the age limit for admission?', a: 'No upper age limit is stipulated by the Directorate of Technical Education, Tamil Nadu for undergraduate engineering admissions.' },
      { q: 'Can other-state students apply for admission?', a: 'Yes, students from any state in India can apply through management quota or national admission pools.' }
    ],
    ctaTitle: 'Ready to Apply for the 2026-27 Session?',
    ctaSubtitle: 'Register online now or visit our admission cell for counseling and seat reservation.'
  },
  'fees': {
    category: 'Admissions & Finance',
    breadcrumbs: ['Admissions', 'Fee Structure'],
    heroPills: [
      { icon: 'shield', label: 'Govt. Regulated Fees' },
      { icon: 'check', label: 'No Capitation / Donation' },
      { icon: 'card', label: 'Installment Options' },
      { icon: 'home', label: 'Bank Loan Assistance' }
    ],
    title: 'Fee Structure & Transparent Policies',
    subtitle: 'Affordable, government-regulated fee schedules with convenient installment options and zero hidden charges.',
    overviewLead: 'Sri Shakthi maintains a transparent fee structure aligned strictly with the Fee Fixation Committee of the Government of Tamil Nadu. We offer flexible payment plans, rapid bank loan processing letters, and direct merit fee concessions.',
    featuredImage: '/brand/hero-techpark-latest.png',
    featuredBadge: 'Affordable & Transparent',
    featuredStat: 'Easy Installment Facilities',
    pillars: [
      { icon: 'shield', tag: 'DOTE APPROVED', title: 'Regulated Tuition Schedules', desc: 'Tuition fees adhere strictly to the Fee Fixation Committee set by the Government of Tamil Nadu.' },
      { icon: 'home', tag: 'FINANCIAL AID', title: 'Bank Loan Assistance', desc: 'Official bona fide and fee projection letters provided promptly for swift education loan approvals.' },
      { icon: 'card', tag: 'DIGITAL', title: 'Digital Payment Gateway', desc: 'Pay securely online via UPI, NetBanking, RTGS/NEFT, or credit/debit cards with instant PDF receipts.' },
      { icon: 'cube', tag: 'MODULAR', title: 'Modular Amenities Options', desc: 'Hostel, mess, and bus services are billed independently based on individual student requirements.' }
    ],
    gallery: [
      { img: '/brand/techpark-hd.jpg', title: 'Accounts & Finance Wing', caption: 'Streamlined finance office with digital billing and loan verification desks.' },
      { img: '/brand/campus-arch.jpg', title: 'Main Institutional Complex', caption: 'Administrative center handling student accounts and scholarships.' },
      { img: '/brand/campus-life/learning-growth.png', title: 'Student Service Center', caption: 'Guidance and advisory support for scholarship and installment approvals.' },
      { img: '/brand/campus-life/student-life.png', title: 'Campus Amenities', caption: 'Transparent amenities fees covering campus high-speed Wi-Fi and facilities.' }
    ],
    metrics: [
      { val: '100', suffix: '%', label: 'Receipt-Backed Payments' },
      { val: '0', suffix: '%', label: 'Hidden Maintenance Fees' },
      { val: 'Multiple', suffix: '', label: 'Installment Options' },
      { val: 'Tie-ups', suffix: '', label: 'National Bank Loans' }
    ],
    highlights: [
      { title: 'Approved Tuition Structure', desc: 'Standard Government counseling tuition as per Tamil Nadu norms for accredited autonomous colleges.' },
      { title: 'Zero Donation Policy', desc: 'Admissions are conducted strictly on merit without any capitation fees or hidden levies.' },
      { title: 'Education Loan Help Desk', desc: 'On-campus liaison team coordinates with SBI, Canara Bank, and Indian Bank for rapid education loan processing.' },
      { title: 'Transparent Fee Breakdown', desc: 'Detailed breakdown covering tuition, university exam fees, lab consumables, and library access.' }
    ],
    faqs: [
      { q: 'Can semester fees be paid in installments?', a: 'Yes, parents can request installment options by submitting a written request to the Finance Officer.' },
      { q: 'Which banks provide educational loans for Sri Shakthi?', a: 'All public and private scheduled banks recognize Sri Shakthi for educational loans under the Vidya Lakshmi scheme.' }
    ],
    ctaTitle: 'Get the Detailed Fee Breakdown',
    ctaSubtitle: 'Download our comprehensive fee handbook or discuss payment options with our admissions office.'
  }
};

export function getInternalPageMeta(route, data) {
  if (internalPageData[route]) {
    return internalPageData[route];
  }
  let cat = 'Explore';
  for (const g of pageGroups) {
    if (g.items.some(([slug]) => slug === route)) {
      cat = g.label;
      break;
    }
  }
  return {
    category: cat,
    breadcrumbs: [cat, data[0]],
    heroPills: [
      { icon: 'leaf', label: 'Autonomous Institution' },
      { icon: 'grad', label: 'Anna University Affiliated' },
      { icon: 'crown', label: "NAAC 'A+' Grade" },
      { icon: 'star', label: 'NBA Accredited UG Programmes' }
    ],
    title: data[0],
    subtitle: data[1],
    overviewLead: data[2] || `Sri Shakthi Institute of Engineering and Technology provides outcome-driven education, advanced laboratory infrastructure, and comprehensive student support to ensure continuous excellence in ${data[0].toLowerCase()}.`,
    featuredImage: '/brand/campus-arch.jpg',
    featuredBadge: 'Autonomous & NAAC A+',
    featuredStat: 'Outcome-Driven Excellence',
    pillars: [
      { icon: 'star', tag: 'EXCELLENCE', title: 'Autonomous Academic Rigour', desc: 'Industry-aligned curriculum and hands-on laboratory experiences tailored to meet modern global engineering demands.' },
      { icon: 'connect', tag: 'ENGAGEMENT', title: 'Practical & Applied Focus', desc: 'Real-world project work, domain certifications, and multidisciplinary lab environments fostering high-impact skills.' },
      { icon: 'leaf', tag: 'ENVIRONMENT', title: '45-Acre Sustainable Campus', desc: 'Green spaces, modern amenities, high-speed digital networks, and welcoming student living communities.' },
      { icon: 'target', tag: 'OUTCOMES', title: 'Career & Industry Readiness', desc: 'Systematic technical training, entrepreneurship incubation, and proven placement tracks with leading global recruiters.' }
    ],
    gallery: [
      { img: '/brand/techpark-hd.jpg', title: 'Campus Academic Complex', caption: 'Modern academic architecture and advanced learning spaces.' },
      { img: '/brand/campus-arch.jpg', title: 'Green Campus Grounds', caption: 'Lush 45-acre eco-friendly campus environment.' },
      { img: '/brand/curriculum-hero.jpg', title: 'Interactive Learning Spaces', caption: 'Multimedia-enabled classrooms and seminar halls.' },
      { img: '/brand/campus-life/student-life.png', title: 'Student Community', caption: 'Active peer collaboration and collegiate life.' }
    ],
    metrics: [
      { val: '100', suffix: '%', label: 'Dedicated Faculty' },
      { val: '45', suffix: '+', label: 'Green Campus Acres' },
      { val: '30', suffix: '+', label: 'Advanced Laboratories' },
      { val: '100', suffix: '%', label: 'Outcome-Based Learning' }
    ],
    highlights: [
      { title: 'Autonomous Innovation Framework', desc: 'Curricula continuously updated in collaboration with industry advisory councils.' },
      { title: 'Holistic Student Experience', desc: 'Co-curricular sports, cultural societies, and technical clubs developing well-rounded engineers.' },
      { title: 'Global Mentorship & Industry Alliances', desc: 'Strategic partnerships with top tier technology firms for hands-on skill development.' },
      { title: 'State-of-the-Art Physical Infrastructure', desc: 'High-speed campus-wide fiber internet, air-conditioned auditoriums, and smart seminar halls.' }
    ],
    faqs: [
      { q: `How can I get more information about ${data[0]}?`, a: 'You can contact the Sri Shakthi Admissions & Academic Office through the enquiry form or call +91 73737 44444.' },
      { q: 'Are campus tours available for prospective students?', a: 'Yes, parents and students are welcome to visit our Chinniyampalayam campus Monday through Saturday for personalized guided tours.' }
    ],
    ctaTitle: `Ready to Experience ${data[0]} at Sri Shakthi?`,
    ctaSubtitle: 'Explore admission pathways, merit scholarships, and autonomous engineering curriculum designed for real-world impact.'
  };
}

export const campusMarqueeItems = [
  { img: '/brand/techpark-hd.jpg', tag: 'Academic Hub', title: 'Tech Park Towers', desc: 'Flagship smart computing labs and department studios.' },
  { img: '/brand/campus-life/student-life.png', tag: 'Student Life', title: 'Campus Commons & Courtyards', desc: 'Lively community lounges and collaborative student spaces.' },
  { img: '/brand/campus-life/sports-athletics.jpg', tag: 'Athletics', title: '400m Olympic Athletic Track', desc: 'Regulation synthetic track and sports arena for varsity sprinters.' },
  { img: '/brand/campus-life/transport-fleet.jpg', tag: 'Transit Fleet', title: '60+ College Buses', desc: 'GPS-tracked transit connecting Coimbatore, Tirupur & Palakkad.' },
  { img: '/brand/campus-life/clubs.png', tag: 'Student Guilds', title: '26+ Co-Curricular Clubs', desc: 'Technical hackathons, fine arts, drama, and literary societies.' },
  { img: '/brand/campus-life/ncc-cadets.jpg', tag: 'National Service', title: 'NCC Cadets & Guard of Honor', desc: 'Elite military discipline, obstacle drills, and community service.' },
  { img: '/brand/special-labs/lab-ai-hd.jpg', tag: 'Advanced Labs', title: 'Artificial Intelligence Studio', desc: 'High-compute GPU workstations for machine learning and computer vision.' },
  { img: '/brand/library-study-hall.jpg', tag: 'Knowledge Hub', title: 'Central Knowledge Library', desc: '50,000+ volumes, air-conditioned reading halls, and IEEE databases.' },
  { img: '/brand/campus-life/hostel-room.jpg', tag: 'Residences', title: 'Modern Student Hostels', desc: 'Comfortable furnished rooms with nutritious dining & 24/7 security.' },
  { img: '/brand/campus-life/cultural.png', tag: 'Festivals', title: 'Dhruva Mega Cultural Showcase', desc: 'Annual arts, choreography, and musical celebration.' },
  { img: '/brand/campus-life/sports-badminton.jpg', tag: 'Indoor Sports', title: 'Indoor Badminton Arena', desc: '4 international BWF wooden courts with overhead sports lighting.' },
  { img: '/brand/campus-life/sports-basketball.jpg', tag: 'Floodlit Arena', title: 'Championship Basketball Courts', desc: 'Synthetic acrylic outdoor courts with high-intensity LED floodlights.' },
  { img: '/brand/events/event-sangamam-hd.jpg', tag: 'Traditions', title: 'Sangamam Cultural Festival', desc: 'Celebrated cultural extravaganza with live music and theater ensembles.' },
  { img: '/brand/special-labs/lab-robotics-hd.jpg', tag: 'Robotics Suite', title: 'Industrial Robotics & Automation', desc: '6-axis articulated arms, mechatronics stations, and autonomous kits.' },
];

export function renderSubdivisionUniqueContent(route) {
  if (route === 'campus-life') {
    return `
      <!-- UNIQUE: Campus Life Daily Schedule & Signature Traditions -->
      <div class="template-section-block subdivision-feature-block subdivision-campus-life">
        <div class="section-tag-pill">
          <span class="tag-dot"></span>
          <span>DAY IN THE LIFE AT SRI SHAKTHI</span>
        </div>
        <h3 class="section-subheading">From Morning Immersion to Evening Sparks</h3>
        <div class="campus-life-timeline-grid">
          <div class="cl-time-card">
            <div class="cl-time-badge">08:30 AM</div>
            <div class="cl-time-media">
              <img src="/brand/techpark-hd.jpg" alt="Morning Tech Park" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="cl-time-tag">SMART CAMPUS</span>
            </div>
            <div class="cl-time-content">
              <h4>Morning Immersion &amp; Smart Labs</h4>
              <p>Acoustically treated smart lecture chambers, industry-collaborated software studios, and active hands-on coding sessions begin with high energy.</p>
            </div>
          </div>
          <div class="cl-time-card">
            <div class="cl-time-badge">12:45 PM</div>
            <div class="cl-time-media">
              <img src="/brand/campus-life/hostel-dining.jpg" alt="Courtyard & Food Court" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="cl-time-tag">COMMUNITY LIVING</span>
            </div>
            <div class="cl-time-content">
              <h4>Courtyard &amp; Food Court Connect</h4>
              <p>Lively social hubs where peer groups gather, share nutritious meals, debate ideas, and unwind in open-air landscaped spaces.</p>
            </div>
          </div>
          <div class="cl-time-card">
            <div class="cl-time-badge">03:30 PM</div>
            <div class="cl-time-media">
              <img src="/brand/special-labs/lab-ai-hd.jpg" alt="Maker Labs & AI" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="cl-time-tag">INNOVATION</span>
            </div>
            <div class="cl-time-content">
              <h4>24/7 Maker Spaces &amp; Hack Studios</h4>
              <p>Multidisciplinary hackathons, AI prototyping, robotics testing, and hardware experimentation with direct mentor guidance.</p>
            </div>
          </div>
          <div class="cl-time-card">
            <div class="cl-time-badge">05:15 PM</div>
            <div class="cl-time-media">
              <img src="/brand/campus-life/sports-basketball.jpg" alt="Athletics & Sunset Fest" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="cl-time-tag">RECREATION</span>
            </div>
            <div class="cl-time-content">
              <h4>Sunset Athletics &amp; Cultural Jam</h4>
              <p>Track sprints, badminton matches, music ensemble jams, and open amphitheater cultural practice as the sun sets over the horizon.</p>
            </div>
          </div>
        </div>

        <div class="campus-traditions-banner">
          <div class="ctb-inner">
            <div class="ctb-header">
              <span class="ctb-kicker">CAMPUS TRADITIONS</span>
              <h4>Signature Annual Celebrations</h4>
              <p>Four cornerstones that define the Shakthian experience throughout the collegiate calendar.</p>
            </div>
            <div class="ctb-grid">
              <div class="ctb-item">
                <span class="ctb-badge">SOUTH INDIA'S BIGGEST</span>
                <h5>DHRUVA Cultural Fest</h5>
                <p>3-day intercollegiate cultural carnival attracting 15,000+ attendees with national celebrity concerts and choreography battles.</p>
              </div>
              <div class="ctb-item">
                <span class="ctb-badge">48-HOUR CODEFEST</span>
                <h5>Shakthi Hack-a-Thon</h5>
                <p>National maker marathon with real corporate problem statements, mentorship from Silicon Valley engineers, and seed funding.</p>
              </div>
              <div class="ctb-item">
                <span class="ctb-badge">HERITAGE &amp; COMMUNITY</span>
                <h5>Pongal Vizha &amp; Ethnic Day</h5>
                <p>Traditional bullock cart procession, organic sugarcane feast, folk arts, and community celebrations honoring Tamil heritage.</p>
              </div>
              <div class="ctb-item">
                <span class="ctb-badge">GLOBAL TECH EXHIBIT</span>
                <h5>Shakthi Innovation Expo</h5>
                <p>Annual engineering showcase where student prototypes are presented to venture capitalists, defense leaders, and industry CXOs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (route === 'facilities') {
    return `
      <!-- UNIQUE: World-Class Specialized Labs & Facilities Directory with Category Filtering -->
      <div class="template-section-block subdivision-feature-block subdivision-facilities">
        <div class="section-tag-pill">
          <span class="tag-dot"></span>
          <span>INFRASTRUCTURE &amp; R&amp;D DIRECTORY</span>
        </div>
        <h3 class="section-subheading">World-Class Specialized Spaces &amp; Centers</h3>

        <!-- Interactive Category Switcher -->
        <div class="interactive-filter-strip facility-filter-tabs">
          <button type="button" class="interactive-filter-pill facility-filter-pill is-active" data-facility-cat="all">
            All Spaces (6 Hubs)
          </button>
          <button type="button" class="interactive-filter-pill facility-filter-pill" data-facility-cat="ai">
            AI &amp; Compute
          </button>
          <button type="button" class="interactive-filter-pill facility-filter-pill" data-facility-cat="robotics">
            Robotics &amp; Hardware
          </button>
          <button type="button" class="interactive-filter-pill facility-filter-pill" data-facility-cat="library">
            Library &amp; Auditoriums
          </button>
          <button type="button" class="interactive-filter-pill facility-filter-pill" data-facility-cat="green">
            Green Eco Campus
          </button>
        </div>

        <div class="facilities-interactive-grid">
          <div class="facility-showcase-card" data-facility-cat="ai">
            <div class="fsc-media">
              <img src="/brand/special-labs/lab-ai-hd.jpg" alt="Artificial Intelligence Lab" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="fsc-badge">NVIDIA GPU CLUSTER</span>
            </div>
            <div class="fsc-content">
              <h4>High Performance AI &amp; Deep Learning Lab</h4>
              <p>Dedicated compute workstations powered by multi-GPU nodes for neural network training, computer vision models, and LLM fine-tuning.</p>
              <div class="fsc-specs-row">
                <span class="fsc-spec">⚡ 100 TFLOPS Compute</span>
                <span class="fsc-spec">🧠 PyTorch &amp; TensorFlow</span>
                <span class="fsc-spec">🖥️ Dual 4K Displays</span>
              </div>
            </div>
          </div>

          <div class="facility-showcase-card" data-facility-cat="robotics">
            <div class="fsc-media">
              <img src="/brand/special-labs/lab-robotics-hd.jpg" alt="Robotics & Automation Suite" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="fsc-badge">INDUSTRIAL MECHATRONICS</span>
            </div>
            <div class="fsc-content">
              <h4>Advanced Robotics &amp; Autonomous Systems Lab</h4>
              <p>Equipped with 6-axis industrial articulated robot arms, pneumatic logic systems, machine vision sorting units, and autonomous mobile robots.</p>
              <div class="fsc-specs-row">
                <span class="fsc-spec">🤖 6-DOF Robot Arms</span>
                <span class="fsc-spec">⚙️ Siemens PLCs</span>
                <span class="fsc-spec">👁️ Machine Vision</span>
              </div>
            </div>
          </div>

          <div class="facility-showcase-card" data-facility-cat="robotics">
            <div class="fsc-media">
              <img src="/brand/special-labs/lab-iot-hd.jpg" alt="IoT & Embedded Sandbox" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="fsc-badge">HARDWARE SANDBOX</span>
            </div>
            <div class="fsc-content">
              <h4>IoT, Sensors &amp; Embedded Systems Sandbox</h4>
              <p>Prototyping suite loaded with FPGA test benches, high-speed mixed signal oscilloscopes, LoRaWAN wireless gateways, and ARM Cortex modules.</p>
              <div class="fsc-specs-row">
                <span class="fsc-spec">📡 LoRa &amp; Zigbee Mesh</span>
                <span class="fsc-spec">🔬 Keysight Analyzers</span>
                <span class="fsc-spec">🔌 SMD Rework Stations</span>
              </div>
            </div>
          </div>

          <div class="facility-showcase-card" data-facility-cat="library">
            <div class="fsc-media">
              <img src="/brand/library-study-hall.jpg" alt="Central Digital Library" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="fsc-badge">KNOWLEDGE COMMONS</span>
            </div>
            <div class="fsc-content">
              <h4>Central Digital Library &amp; Quiet Pods</h4>
              <p>Spanning 30,000 sq.ft. with 75,000+ volumes, IEEE Xplore, ScienceDirect digital subscriptions, and sound-dampened individual research pods.</p>
              <div class="fsc-specs-row">
                <span class="fsc-spec">📚 75,000+ Volumes</span>
                <span class="fsc-spec">🌐 IEEE &amp; Springer DL</span>
                <span class="fsc-spec">❄️ Central Air-Cooled</span>
              </div>
            </div>
          </div>

          <div class="facility-showcase-card" data-facility-cat="library">
            <div class="fsc-media">
              <img src="/brand/events/event-industry-connect-hd.jpg" alt="Convention Center & Auditoriums" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="fsc-badge">1,200 SEAT AUDITORIUM</span>
            </div>
            <div class="fsc-content">
              <h4>Convention Center &amp; Smart Auditoriums</h4>
              <p>Fully air-conditioned 1,200-capacity Grand Auditorium and tiered multimedia symposium halls engineered for international summits.</p>
              <div class="fsc-specs-row">
                <span class="fsc-spec">🎭 1,200 Seater</span>
                <span class="fsc-spec">🔊 Dolby Digital Acoustics</span>
                <span class="fsc-spec">🎥 4K Live Broadcast</span>
              </div>
            </div>
          </div>

          <div class="facility-showcase-card" data-facility-cat="green">
            <div class="fsc-media">
              <img src="/brand/departments-campus.jpg" alt="Green Energy Microgrid" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="fsc-badge">100% ECO CAMPUS</span>
            </div>
            <div class="fsc-content">
              <h4>Solar Microgrid &amp; Sustainable Infrastructure</h4>
              <p>500 kW rooftop solar installations, integrated rain-harvesting lakes, 100% zero-discharge STP water recycling, and lush green biodiversity paths.</p>
              <div class="fsc-specs-row">
                <span class="fsc-spec">☀️ 500 kW Clean Solar</span>
                <span class="fsc-spec">💧 Zero-Discharge STP</span>
                <span class="fsc-spec">🌿 45-Acre Green Cover</span>
              </div>
            </div>
          </div>
        </div>

        <div class="facility-access-banner" style="margin-top:30px; background:#f4f9f5; border:1px solid #c8e4d2; border-radius:12px; padding:20px 24px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px;">
          <div>
            <strong style="color:#004b2c; font-size:15px; display:block; margin-bottom:4px;">Research Lab Open Access Policy</strong>
            <span style="color:#4a6b57; font-size:13.5px;">Advanced computing and prototype fabrication labs remain open until 08:30 PM for student researchers with valid institutional ID and project registration.</span>
          </div>
          <a href="#/curriculum" class="siet-tmpl-btn-outline" style="white-space:nowrap; padding:8px 18px; font-size:13px;">View Curriculum &amp; Labs →</a>
        </div>
      </div>
    `;
  }

  if (route === 'hostel') {
    return `
      <!-- UNIQUE: Residential Quarters & Dining Experience -->
      <div class="template-section-block subdivision-feature-block subdivision-hostel">
        <div class="section-tag-pill">
          <span class="tag-dot"></span>
          <span>RESIDENTIAL LIVING EXPERIENCE</span>
        </div>
        <h3 class="section-subheading">A Welcoming, Secure Home Away From Home</h3>
        <div class="hostel-experience-grid">
          <div class="hostel-block-card">
            <div class="hbc-header">
              <span class="hbc-badge">RESIDENCES</span>
              <h4>Boys &amp; Girls Separate Residence Blocks</h4>
            </div>
            <div class="hbc-features-list">
              <div class="hbc-feature-item">
                <span class="hbc-icon">🛏️</span>
                <div>
                  <strong>Spacious Room Options</strong>
                  <p>2-sharing, 3-sharing, and 4-sharing rooms equipped with personal ergonomic desks, wardrobes, and private balconies.</p>
                </div>
              </div>
              <div class="hbc-feature-item">
                <span class="hbc-icon">📶</span>
                <div>
                  <strong>High-Speed Wi-Fi &amp; Solar Hot Water</strong>
                  <p>24/7 campus-wide Wi-Fi routers on every corridor, complemented by centralized solar water heating systems.</p>
                </div>
              </div>
              <div class="hbc-feature-item">
                <span class="hbc-icon">🧺</span>
                <div>
                  <strong>Automated Laundry &amp; Housekeeping</strong>
                  <p>On-campus commercial laundromat services and dedicated daily sanitation teams maintaining top cleanliness standards.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="hostel-block-card">
            <div class="hbc-header">
              <span class="hbc-badge">DINING &amp; NUTRITION</span>
              <h4>FSSAI Certified Multi-Cuisine Mess</h4>
            </div>
            <div class="hbc-features-list">
              <div class="hbc-feature-item">
                <span class="hbc-icon">🍲</span>
                <div>
                  <strong>4 Balanced Meals Every Day</strong>
                  <p>Healthy breakfast, authentic South &amp; North Indian lunch, hot evening snacks with tea/coffee, and nutritious dinner.</p>
                </div>
              </div>
              <div class="hbc-feature-item">
                <span class="hbc-icon">🥗</span>
                <div>
                  <strong>Strict Hygiene &amp; Steam Cooking</strong>
                  <p>Stainless steel mechanized steam cooking kettles, RO water purification, and regular dietary quality inspections.</p>
                </div>
              </div>
              <div class="hbc-feature-item">
                <span class="hbc-icon">🎉</span>
                <div>
                  <strong>Special Feast &amp; Festive Nights</strong>
                  <p>Monthly grand hostel feasts, ice cream socials, festival banquets, and customized options for dietary preferences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hostel-amenities-strip">
          <div class="ha-item">
            <span class="ha-emoji">🩺</span>
            <b>24/7 Medical Care</b>
            <span>On-campus resident doctor &amp; 24-hr ambulance on standby</span>
          </div>
          <div class="ha-item">
            <span class="ha-emoji">🛡️</span>
            <b>Biometric Security</b>
            <span>Strict turnstile access, female wardens &amp; CCTV coverage</span>
          </div>
          <div class="ha-item">
            <span class="ha-emoji">🏋️</span>
            <b>Hostel Fitness Gym</b>
            <span>Exclusive resident strength &amp; yoga studio open early morning &amp; night</span>
          </div>
          <div class="ha-item">
            <span class="ha-emoji">📖</span>
            <b>Late-Night Study Commons</b>
            <span>Air-conditioned study lounges open past midnight during exams</span>
          </div>
        </div>

        <!-- NEW: Interactive 7-Day Revolving Dining Menu Preview -->
        <div class="hostel-menu-showcase" style="margin-top:36px; background:#ffffff; border:1px solid #dce8e0; border-radius:16px; padding:28px 24px; box-shadow:0 4px 18px rgba(0,40,27,0.04);">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px; margin-bottom:20px;">
            <div>
              <span style="font-size:11px; font-weight:800; letter-spacing:0.12em; color:#007a40; text-transform:uppercase; display:block; margin-bottom:4px;">NUTRITION &amp; TASTE</span>
              <h4 style="font-size:20px; font-weight:800; color:#002b1d; margin:0 0 6px;">7-Day Revolving Dining Menu Preview</h4>
              <p style="font-size:13.5px; color:#4a6556; margin:0;">Cooked in 100% steam mechanized kitchens with certified RO mineral water.</p>
            </div>
            <div class="hostel-menu-day-tabs" style="display:flex; gap:6px; flex-wrap:wrap;">
              <button type="button" class="hostel-menu-day-btn is-active" data-day="mon">Mon</button>
              <button type="button" class="hostel-menu-day-btn" data-day="tue">Tue</button>
              <button type="button" class="hostel-menu-day-btn" data-day="wed">Wed</button>
              <button type="button" class="hostel-menu-day-btn" data-day="thu">Thu</button>
              <button type="button" class="hostel-menu-day-btn" data-day="fri">Fri</button>
              <button type="button" class="hostel-menu-day-btn" data-day="sat">Sat</button>
              <button type="button" class="hostel-menu-day-btn" data-day="sun">Sun</button>
            </div>
          </div>

          <div class="hostel-menu-panes-wrap">
            <div class="hostel-menu-pane is-active" data-day="mon">
              <div class="hostel-menu-grid">
                <div class="hm-slot"><span class="hm-time">BREAKFAST · 07:30 - 08:45 AM</span><h5>Hot Idli &amp; Medu Vada</h5><p>Madurai sambar, fresh coconut chutney, tomato kara chutney, tea &amp; filter coffee.</p></div>
                <div class="hm-slot"><span class="hm-time">LUNCH · 12:30 - 02:00 PM</span><h5>Chettinad Veg Meals</h5><p>Steamed Ponni rice, drumstick sambar, pepper rasam, cabbage kootu, curd, appalam.</p></div>
                <div class="hm-slot"><span class="hm-time">EVENING SNACKS · 04:30 - 05:30 PM</span><h5>Crispy Onion Pakoda</h5><p>Fresh ginger cardamom tea, coffee, banana, roasted peanuts.</p></div>
                <div class="hm-slot"><span class="hm-time">DINNER · 07:30 - 09:00 PM</span><h5>Phulka &amp; Paneer Butter Masala</h5><p>Fresh wheat chapatis, vegetable fried rice, tomato soup, curd, fresh fruits.</p></div>
              </div>
            </div>

            <div class="hostel-menu-pane" data-day="tue">
              <div class="hostel-menu-grid">
                <div class="hm-slot"><span class="hm-time">BREAKFAST · 07:30 - 08:45 AM</span><h5>Ven Pongal &amp; Crispy Vada</h5><p>Ghee ven pongal with cashew, tiffin sambar, coriander chutney, coffee/tea.</p></div>
                <div class="hm-slot"><span class="hm-time">LUNCH · 12:30 - 02:00 PM</span><h5>Homestyle South &amp; North Spread</h5><p>Steamed rice, poori, potato peas masala, mor kulambu, beans poriyal, curd.</p></div>
                <div class="hm-slot"><span class="hm-time">EVENING SNACKS · 04:30 - 05:30 PM</span><h5>Masala Sundal</h5><p>Boiled nutritious white peas sundal, filter coffee, milk, biscuits.</p></div>
                <div class="hm-slot"><span class="hm-time">DINNER · 07:30 - 09:00 PM</span><h5>Vegetable Biryani &amp; Raita</h5><p>Fragrant jeera samba biryani, onion cucumber raita, chapati with dal tadka, gulab jamun.</p></div>
              </div>
            </div>

            <div class="hostel-menu-pane" data-day="wed">
              <div class="hostel-menu-grid">
                <div class="hm-slot"><span class="hm-time">BREAKFAST · 07:30 - 08:45 AM</span><h5>Crispy Ghee Roast Dosa</h5><p>Golden roast dosas, potato sagu, red chilli chutney, mint chutney, tea/coffee.</p></div>
                <div class="hm-slot"><span class="hm-time">LUNCH · 12:30 - 02:00 PM</span><h5>Traditional Thali Special</h5><p>Steamed rice, keerai kootu, garlic pepper rasam, ladyfinger fry, buttermilk, pickle.</p></div>
                <div class="hm-slot"><span class="hm-time">EVENING SNACKS · 04:30 - 05:30 PM</span><h5>Vegetable Cutlet</h5><p>Crispy breaded veggie cutlets, green mint dip, hot masala chai.</p></div>
                <div class="hm-slot"><span class="hm-time">DINNER · 07:30 - 09:00 PM</span><h5>Parotta &amp; Veg Salna / Chana Masala</h5><p>Layered soft parottas, flavorful spicy salna, curd rice, pomegranate seeds.</p></div>
              </div>
            </div>

            <div class="hostel-menu-pane" data-day="thu">
              <div class="hostel-menu-grid">
                <div class="hm-slot"><span class="hm-time">BREAKFAST · 07:30 - 08:45 AM</span><h5>Rava Kichadi &amp; Poori Masala</h5><p>Fluffy wheat pooris, aloo bhaji, vegetable rava kichadi, coconut chutney, tea/coffee.</p></div>
                <div class="hm-slot"><span class="hm-time">LUNCH · 12:30 - 02:00 PM</span><h5>Bisibelebath &amp; Boondi</h5><p>Traditional Mysore bisibelebath with ghee, potato chips, curd rice, carrot kosumalli.</p></div>
                <div class="hm-slot"><span class="hm-time">EVENING SNACKS · 04:30 - 05:30 PM</span><h5>Sweet Corn Sundal</h5><p>Steamed butter sweet corn, hot South Indian filter coffee, tea.</p></div>
                <div class="hm-slot"><span class="hm-time">DINNER · 07:30 - 09:00 PM</span><h5>Idiyappam &amp; Veg Kurma / Chapati</h5><p>Soft steamed rice string hoppers, rich coconut milk veg kurma, hot chapatis, milk.</p></div>
              </div>
            </div>

            <div class="hostel-menu-pane" data-day="fri">
              <div class="hostel-menu-grid">
                <div class="hm-slot"><span class="hm-time">BREAKFAST · 07:30 - 08:45 AM</span><h5>Semiya Upma &amp; Chutney / Idli</h5><p>Vegetable vermicelli upma, steamed idli, tomato onion chutney, tea/coffee.</p></div>
                <div class="hm-slot"><span class="hm-time">LUNCH · 12:30 - 02:00 PM</span><h5>Friday Special Sambhar Sadham</h5><p>Steamed rice, Kovilpatti sambar, vazhakkai varuval, jeera rasam, sweet payasam, curd.</p></div>
                <div class="hm-slot"><span class="hm-time">EVENING SNACKS · 04:30 - 05:30 PM</span><h5>Mirchi / Banana Bajji</h5><p>Crispy hot bajjis with peanut chutney, masala chai, green tea.</p></div>
                <div class="hm-slot"><span class="hm-time">DINNER · 07:30 - 09:00 PM</span><h5>Soft Phulkas &amp; Kadai Paneer</h5><p>Tawa phulkas, kadai paneer gravy, Kashmiri pulao, curd, fresh cut fruits.</p></div>
              </div>
            </div>

            <div class="hostel-menu-pane" data-day="sat">
              <div class="hostel-menu-grid">
                <div class="hm-slot"><span class="hm-time">BREAKFAST · 07:30 - 08:45 AM</span><h5>Ragi Dosa &amp; Podi Idli</h5><p>Nutritious ragi dosas, gun powder tossed mini idlis, ginger chutney, tea/coffee.</p></div>
                <div class="hm-slot"><span class="hm-time">LUNCH · 12:30 - 02:00 PM</span><h5>Variety Rice Feast</h5><p>Lemon rice, tamarind puliyodharai, curd rice, fried potato roast, appalam.</p></div>
                <div class="hm-slot"><span class="hm-time">EVENING SNACKS · 04:30 - 05:30 PM</span><h5>Veg Puff / Samosa</h5><p>Flaky oven-fresh vegetable puffs with sweet spicy chutney, filter coffee.</p></div>
                <div class="hm-slot"><span class="hm-time">DINNER · 07:30 - 09:00 PM</span><h5>Naan &amp; Dal Makhani</h5><p>Butter naan, slow-cooked dal makhani, jeera rice, onion salad, ice cream cup.</p></div>
              </div>
            </div>

            <div class="hostel-menu-pane" data-day="sun">
              <div class="hostel-menu-grid">
                <div class="hm-slot"><span class="hm-time">BREAKFAST · 08:00 - 09:30 AM</span><h5>Sunday Grand Breakfast</h5><p>Poori masala, mini masala dosas, filter coffee, fresh watermelon juice.</p></div>
                <div class="hm-slot"><span class="hm-time">LUNCH · 12:30 - 02:30 PM</span><h5>Weekend Grand Banquet</h5><p>Hyderabadi Dum Biryani, paneer tikka / egg curry, onion raita, sweet rasgulla, curd.</p></div>
                <div class="hm-slot"><span class="hm-time">EVENING SNACKS · 04:30 - 05:30 PM</span><h5>Mysore Bonda</h5><p>Crispy golden urad bondas, coconut chutney, hot masala chai.</p></div>
                <div class="hm-slot"><span class="hm-time">DINNER · 07:30 - 09:00 PM</span><h5>Light Continental Dinner</h5><p>Veg noodles, vegetable manchurian gravy, soft chapatis, fresh warm milk.</p></div>
              </div>
            </div>
          </div>
        </div>

        <!-- NEW: Room Specifications Table -->
        <div class="hostel-rooms-spec-block" style="margin-top:30px;">
          <h4 style="font-size:18px; font-weight:800; color:#002b1d; margin:0 0 14px;">Resident Room Accommodations</h4>
          <div class="hostel-rooms-table-wrap" style="overflow-x:auto;">
            <table class="hostel-rooms-table" style="width:100%; border-collapse:collapse; background:#ffffff; border:1px solid #dce8e0; border-radius:12px; font-size:13.5px;">
              <thead>
                <tr style="background:#f1f8f3; color:#004b2c; font-weight:800; text-align:left; border-bottom:2px solid #cbe3d3;">
                  <th style="padding:14px 16px;">Room Category</th>
                  <th style="padding:14px 16px;">Occupancy</th>
                  <th style="padding:14px 16px;">Key Inclusions</th>
                  <th style="padding:14px 16px;">Amenities</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid #edf4ef;">
                  <td style="padding:14px 16px; font-weight:800; color:#00281b;">Deluxe Double (AC / Non-AC)</td>
                  <td style="padding:14px 16px;"><span class="room-pill">2 Sharing</span></td>
                  <td style="padding:14px 16px;">Attached western bathroom, individual teakwood study tables &amp; ergonomic chairs, full-height wardrobes.</td>
                  <td style="padding:14px 16px; color:#007a40; font-weight:700;">Solar hot water, high-speed Wi-Fi, balcony view</td>
                </tr>
                <tr style="border-bottom:1px solid #edf4ef;">
                  <td style="padding:14px 16px; font-weight:800; color:#00281b;">Classic Triple</td>
                  <td style="padding:14px 16px;"><span class="room-pill">3 Sharing</span></td>
                  <td style="padding:14px 16px;">Spacious airy layout, private book cubbies, personal pin-up notice boards, bright natural daylight.</td>
                  <td style="padding:14px 16px; color:#007a40; font-weight:700;">Corridor water coolers, daily housekeeping</td>
                </tr>
                <tr>
                  <td style="padding:14px 16px; font-weight:800; color:#00281b;">Executive Single (Scholars)</td>
                  <td style="padding:14px 16px;"><span class="room-pill">Single</span></td>
                  <td style="padding:14px 16px;">Reserved for postgraduate scholars &amp; final year students; quiet study ambiance and extra power points.</td>
                  <td style="padding:14px 16px; color:#007a40; font-weight:700;">Personal LAN port, laundry express priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  if (route === 'transport') {
    return `
      <!-- UNIQUE: Comprehensive Bus Routes Network & Telematics -->
      <div class="template-section-block subdivision-feature-block subdivision-transport">
        <div class="section-tag-pill">
          <span class="tag-dot"></span>
          <span>REGIONAL TRANSIT NETWORK</span>
        </div>
        <h3 class="section-subheading">Connected Across Western Tamil Nadu (60+ Bus Routes)</h3>

        <!-- Interactive Boarding Stop Search Box -->
        <div class="transport-search-bar-wrap" style="margin:24px 0 32px; background:#ffffff; border:1.5px solid #00854a; border-radius:14px; padding:16px 20px; box-shadow:0 6px 22px rgba(0,133,74,0.08); display:flex; align-items:center; gap:14px; flex-wrap:wrap;">
          <div style="font-size:22px; line-height:1; color:#00854a;">🔍</div>
          <div style="flex:1; min-width:260px;">
            <label for="transport-stop-search" style="display:block; font-size:11.5px; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; color:#005a36; margin-bottom:4px;">Live Boarding Point Quick Search</label>
            <input type="text" id="transport-stop-search" placeholder="Type your area or bus stop (e.g., Gandhipuram, Avinashi, Pollachi, Tirupur, Singanallur, Hope College, Saravanampatti...)" style="width:100%; border:none; outline:none; font-family:'Plus Jakarta Sans',sans-serif; font-size:14.5px; color:#0f2b1d; background:transparent;">
          </div>
          <span id="stop-search-count" style="font-size:12px; font-weight:700; color:#005a36; background:#eef8f1; padding:6px 12px; border-radius:20px; border:1px solid #cbe9d4; display:none;"></span>
        </div>

        <div class="transport-routes-grid">
          <div class="route-zone-card" data-zone="1">
            <div class="rzc-top">
              <span class="rzc-code">ZONE 01</span>
              <span class="rzc-badge">METRO CORRIDOR</span>
            </div>
            <h4>Coimbatore City Central</h4>
            <p class="rzc-lead">Direct express connectivity via arterial avenues</p>
            <div class="rzc-stops">
              <span class="stop-chip">Gandhipuram</span>
              <span class="stop-chip">Peelamedu</span>
              <span class="stop-chip">Singanallur</span>
              <span class="stop-chip">Hope College</span>
              <span class="stop-chip">RS Puram</span>
              <span class="stop-chip">Ukkadam</span>
              <span class="stop-chip">Ramanathapuram</span>
            </div>
          </div>

          <div class="route-zone-card" data-zone="2">
            <div class="rzc-top">
              <span class="rzc-code">ZONE 02</span>
              <span class="rzc-badge">HIGHWAY EXPRESS</span>
            </div>
            <h4>Tirupur &amp; Avinashi Sector</h4>
            <p class="rzc-lead">High-frequency service linking the textile capital</p>
            <div class="rzc-stops">
              <span class="stop-chip">Tirupur Old Stand</span>
              <span class="stop-chip">New Bus Stand</span>
              <span class="stop-chip">Avinashi Town</span>
              <span class="stop-chip">Mangalam</span>
              <span class="stop-chip">Thekkalur</span>
              <span class="stop-chip">Perumanallur</span>
            </div>
          </div>

          <div class="route-zone-card" data-zone="3">
            <div class="rzc-top">
              <span class="rzc-code">ZONE 03</span>
              <span class="rzc-badge">SOUTH SECTOR</span>
            </div>
            <h4>Pollachi &amp; Kinathukadavu Belt</h4>
            <p class="rzc-lead">Punctual transit connecting the southern perimeter</p>
            <div class="rzc-stops">
              <span class="stop-chip">Pollachi Central</span>
              <span class="stop-chip">Achipatti</span>
              <span class="stop-chip">Kinathukadavu</span>
              <span class="stop-chip">Othakkalmandapam</span>
              <span class="stop-chip">Eachanari</span>
              <span class="stop-chip">Malumichampatti</span>
            </div>
          </div>

          <div class="route-zone-card" data-zone="4">
            <div class="rzc-top">
              <span class="rzc-code">ZONE 04</span>
              <span class="rzc-badge">EAST CORRIDOR</span>
            </div>
            <h4>Erode, Perundurai &amp; Bhavani</h4>
            <p class="rzc-lead">Convenient travel along National Highway 544</p>
            <div class="rzc-stops">
              <span class="stop-chip">Perundurai Bus Stand</span>
              <span class="stop-chip">Vijayamangalam</span>
              <span class="stop-chip">Chengapalli</span>
              <span class="stop-chip">Kaniyur Toll</span>
              <span class="stop-chip">Neelambur</span>
            </div>
          </div>

          <div class="route-zone-card" data-zone="5">
            <div class="rzc-top">
              <span class="rzc-code">ZONE 05</span>
              <span class="rzc-badge">NORTH CORRIDOR</span>
            </div>
            <h4>Mettupalayam, Karamadai &amp; Annur</h4>
            <p class="rzc-lead">Smooth transit along Northern highway routes</p>
            <div class="rzc-stops">
              <span class="stop-chip">Mettupalayam</span>
              <span class="stop-chip">Karamadai</span>
              <span class="stop-chip">Thudiyalur</span>
              <span class="stop-chip">Saravanampatti</span>
              <span class="stop-chip">Annur Junction</span>
              <span class="stop-chip">Kovilpalayam</span>
            </div>
          </div>

          <div class="route-telematics-card">
            <span class="rtc-kicker">SAFETY &amp; TELEMATICS</span>
            <h4>Live Fleet Standards</h4>
            <ul class="rtc-list">
              <li><span>📡</span> Real-time GPS tracking accessible via Student &amp; Parent mobile app</li>
              <li><span>⏱️</span> Digital speed governors strictly calibrated at &le; 50 km/h</li>
              <li><span>🦺</span> Certified commercial bus captains with bi-annual defensive training</li>
              <li><span>🧯</span> Speed alert systems, emergency egress doors &amp; fully stocked first aid</li>
            </ul>
          </div>
        </div>

        <!-- NEW: Timetable & Pass Desk info -->
        <div class="transport-timings-card" style="margin-top:28px; background:#f4f9f5; border:1px solid #cce5d5; border-radius:14px; padding:22px 24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
          <div>
            <span style="font-size:11px; font-weight:800; color:#007a40; text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:4px;">DAILY SCHEDULE &amp; TRANSIT DESK</span>
            <strong style="color:#003822; font-size:16px; display:block; margin-bottom:4px;">Morning Campus Arrival: 08:15 AM &bull; Evening Departures: 04:45 PM &amp; 06:15 PM (Late Lab Scholars)</strong>
            <p style="margin:0; font-size:13px; color:#406250;">For new bus pass requests, route changes, or transport concessions, visit the Transport Control Desk in Main Block Room 104.</p>
          </div>
          <a href="tel:04222369900" class="siet-tmpl-btn-outline" style="padding:10px 20px; font-size:13px; white-space:nowrap;">Call Transport Helpdesk</a>
        </div>
      </div>
    `;
  }

  if (route === 'sports') {
    return `
      <!-- UNIQUE: Championship Arenas & Athletic Merit Scholarships -->
      <div class="template-section-block subdivision-feature-block subdivision-sports">
        <div class="section-tag-pill">
          <span class="tag-dot"></span>
          <span>CHAMPIONSHIP SPORTS ARENAS</span>
        </div>
        <h3 class="section-subheading">World-Class Athletic Arenas &amp; Training Complexes</h3>

        <!-- Interactive Category Switcher -->
        <div class="interactive-filter-strip sports-filter-tabs">
          <button type="button" class="interactive-filter-pill sports-filter-pill is-active" data-sport-cat="all">
            All Arenas (4 Complexes)
          </button>
          <button type="button" class="interactive-filter-pill sports-filter-pill" data-sport-cat="outdoor">
            Outdoor Arenas
          </button>
          <button type="button" class="interactive-filter-pill sports-filter-pill" data-sport-cat="indoor">
            Indoor Complex
          </button>
          <button type="button" class="interactive-filter-pill sports-filter-pill" data-sport-cat="gym">
            Strength &amp; Conditioning
          </button>
        </div>

        <div class="sports-arenas-grid">
          <div class="sport-arena-card" data-sport-cat="outdoor">
            <div class="sac-media">
              <img src="/brand/campus-life/sports-athletics.jpg" alt="Olympic 400m Athletic Track" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="sac-badge">TRACK &amp; FIELD</span>
            </div>
            <div class="sac-content">
              <h4>400-Meter Olympic Track &amp; Cricket Turf</h4>
              <p>Synthetic 8-lane running track for sprinters and distance runners, paired with a lush, regulation cricket oval and pavilion grandstands.</p>
            </div>
          </div>

          <div class="sport-arena-card" data-sport-cat="indoor">
            <div class="sac-media">
              <img src="/brand/campus-life/sports-badminton.jpg" alt="Indoor Badminton Complex" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="sac-badge">AIR-COOLED INDOOR</span>
            </div>
            <div class="sac-content">
              <h4>Air-Cooled Indoor Badminton Complex</h4>
              <p>4 international BWF-standard wooden courts with anti-glare overhead lighting, player warm-up lounges, and spectator stands.</p>
            </div>
          </div>

          <div class="sport-arena-card" data-sport-cat="outdoor">
            <div class="sac-media">
              <img src="/brand/campus-life/sports-basketball.jpg" alt="Basketball & Volleyball Arenas" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="sac-badge">FLOODLIT ARENAS</span>
            </div>
            <div class="sac-content">
              <h4>Championship Basketball &amp; Volleyball Courts</h4>
              <p>Multiple acrylic hard-court basketball surfaces and clay volleyball courts outfitted with high-intensity LED floodlighting for evening leagues.</p>
            </div>
          </div>

          <div class="sport-arena-card" data-sport-cat="gym">
            <div class="sac-media">
              <img src="/brand/campus-life/sports-gym.jpg" alt="Gymnasium & Conditioning" loading="lazy" onerror="this.src='/brand/campus-arch.jpg'">
              <span class="sac-badge">STRENGTH &amp; CONDITIONING</span>
            </div>
            <div class="sac-content">
              <h4>High-Performance Strength &amp; Cardio Gym</h4>
              <p>Commercial-grade power racks, Olympic barbells, pneumatic cables, cardio treadmills, and specialized physical conditioning coaches.</p>
            </div>
          </div>
        </div>

        <div class="sports-scholarships-box">
          <div class="ssb-badge">ATHLETIC MERIT SCHOLARSHIPS</div>
          <h4>Up to 100% Sports Fee Waivers</h4>
          <p>Sri Shakthi takes tremendous pride in supporting student athletes who have represented district, state, or national levels with full tuition and residential sponsorships, sports kits, travel allowances, and flexible academic examination windows.</p>
          <div class="ssb-badges-row">
            <span>🏆 100% Free Tuition for National Medalists</span>
            <span>🥇 50% Tuition Waiver for State Winners</span>
            <span>🎖️ Free Travel, Kit &amp; Tournament Sponsorship</span>
            <span>🩺 Resident Sports Physiotherapist Support</span>
          </div>
        </div>

        <!-- NEW: Recent Championships & Honors Strip -->
        <div class="sports-trophies-strip" style="margin-top:30px; background:#ffffff; border:1px solid #dce8e0; border-radius:14px; padding:24px; box-shadow:0 4px 16px rgba(0,40,27,0.04);">
          <span style="font-size:11px; font-weight:800; color:#007a40; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;">TOURNAMENT EXCELLENCE</span>
          <h4 style="font-size:18px; font-weight:800; color:#002b1d; margin:0 0 16px;">Varsity Honors &amp; State Championship Trophies</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:14px;">
            <div style="background:#f7fbf8; border:1px solid #d6ebd9; border-radius:10px; padding:14px 16px;">
              <span style="font-size:20px; display:block; margin-bottom:4px;">🏏</span>
              <strong style="font-size:14px; color:#003822; display:block;">Anna University Zonal Cricket</strong>
              <span style="font-size:12.5px; color:#4a6b57;">Champions for 4 Consecutive Seasons</span>
            </div>
            <div style="background:#f7fbf8; border:1px solid #d6ebd9; border-radius:10px; padding:14px 16px;">
              <span style="font-size:20px; display:block; margin-bottom:4px;">🏸</span>
              <strong style="font-size:14px; color:#003822; display:block;">Inter-Collegiate Badminton</strong>
              <span style="font-size:12.5px; color:#4a6b57;">State Gold Medals (Men &amp; Women)</span>
            </div>
            <div style="background:#f7fbf8; border:1px solid #d6ebd9; border-radius:10px; padding:14px 16px;">
              <span style="font-size:20px; display:block; margin-bottom:4px;">🏃</span>
              <strong style="font-size:14px; color:#003822; display:block;">CM Trophy Athletics Meet</strong>
              <span style="font-size:12.5px; color:#4a6b57;">Multiple Medals in 100m, 400m &amp; Relays</span>
            </div>
            <div style="background:#f7fbf8; border:1px solid #d6ebd9; border-radius:10px; padding:14px 16px;">
              <span style="font-size:20px; display:block; margin-bottom:4px;">🏀</span>
              <strong style="font-size:14px; color:#003822; display:block;">South India Basketball Cup</strong>
              <span style="font-size:12.5px; color:#4a6b57;">Silver Finalists &amp; Best Fair Play Trophy</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (route === 'clubs') {
    return `
      <!-- UNIQUE: 26+ Student Societies Directory with Interactive Category Filter -->
      <div class="template-section-block subdivision-feature-block subdivision-clubs">
        <div class="section-tag-pill">
          <span class="tag-dot"></span>
          <span>STUDENT SOCIETIES &amp; CHAPTERS</span>
        </div>
        <h3 class="section-subheading">26+ Student-Led Societies: Code, Create, &amp; Lead</h3>

        <!-- Interactive Category Switcher -->
        <div class="interactive-filter-strip club-filter-tabs">
          <button type="button" class="interactive-filter-pill club-filter-pill is-active" data-club-cat="all">
            All Societies (26+)
          </button>
          <button type="button" class="interactive-filter-pill club-filter-pill" data-club-cat="tech">
            Technical &amp; Coding
          </button>
          <button type="button" class="interactive-filter-pill club-filter-pill" data-club-cat="arts">
            Arts &amp; Expression
          </button>
          <button type="button" class="interactive-filter-pill club-filter-pill" data-club-cat="impact">
            Social &amp; Outreach
          </button>
        </div>

        <div class="clubs-directory-grid">
          <div class="club-cat-card" data-club-cat="tech">
            <div class="ccc-header">
              <span class="ccc-tag">TECHNICAL &amp; CODING</span>
              <h4>Innovation &amp; Engineering Guilds</h4>
            </div>
            <div class="ccc-list">
              <div class="ccc-item">
                <b>Google Developer Student Club (GDSC)</b>
                <p>Android, Flutter, Cloud, and Machine Learning solution challenges with Google developer experts.</p>
              </div>
              <div class="ccc-item">
                <b>IEEE Student Branch</b>
                <p>International research publication mentoring, technical symposiums, and student branch congresses.</p>
              </div>
              <div class="ccc-item">
                <b>Shakthi Coding &amp; Algorithmic Guild</b>
                <p>Competitive programming, LeetCode sprints, CodeChef rankings, and overnight hackathons.</p>
              </div>
              <div class="ccc-item">
                <b>Robotics &amp; Drone Mechatronics Society</b>
                <p>Building autonomous drones, line-following bots, battle bots, and rover prototypes for national championships.</p>
              </div>
            </div>
          </div>

          <div class="club-cat-card" data-club-cat="arts">
            <div class="ccc-header">
              <span class="ccc-tag">ARTS &amp; EXPRESSION</span>
              <h4>Cultural &amp; Performing Arts</h4>
            </div>
            <div class="ccc-list">
              <div class="ccc-item">
                <b>Shakthi Rhythms (College Music Band)</b>
                <p>Acoustic and rock bands headlining major cultural events, inter-collegiate battles, and studio recordings.</p>
              </div>
              <div class="ccc-item">
                <b>Natya Dance Troupe</b>
                <p>Award-winning classical, contemporary, and Western hip-hop crews competing across national collegiate fests.</p>
              </div>
              <div class="ccc-item">
                <b>Dramatics &amp; Street Play Society</b>
                <p>Theatrical productions, mime, short film direction, and street plays raising awareness on societal issues.</p>
              </div>
              <div class="ccc-item">
                <b>Fine Arts &amp; Visual Media Club</b>
                <p>Canvas painting, digital illustration, photography exhibitions, and visual design workshops.</p>
              </div>
            </div>
          </div>

          <div class="club-cat-card" data-club-cat="impact">
            <div class="ccc-header">
              <span class="ccc-tag">LEADERSHIP &amp; IMPACT</span>
              <h4>Social, Literary &amp; Outreach</h4>
            </div>
            <div class="ccc-list">
              <div class="ccc-item">
                <b>Rotaract Club of Sri Shakthi</b>
                <p>Youth community service chapter driving blood drives, rural literacy, and environmental welfare projects.</p>
              </div>
              <div class="ccc-item">
                <b>Toastmasters &amp; Debate Forum</b>
                <p>Model United Nations (MUN), parliamentary debates, impromptu public speaking, and confidence workshops.</p>
              </div>
              <div class="ccc-item">
                <b>Tamil Mandram (தமிழ் மன்றம்)</b>
                <p>Celebrating classical and modern Tamil literature, debate forums (பட்டிமன்றம்), and cultural preservation.</p>
              </div>
              <div class="ccc-item">
                <b>Eco-Warriors Environmental Club</b>
                <p>Rooftop gardening, campus organic composting, plastic-free campaigns, and lake conservation.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="club-perks-banner">
          <div class="cpb-badge">WHY JOIN A CLUB?</div>
          <h4>Turning Ideas into Impactful Portfolios</h4>
          <p>Every active club member receives access to project funding grants up to ₹50,000 from the college, direct mentorship from senior alumni, and formal credits on their Co-Curricular Transcript.</p>
        </div>
      </div>
    `;
  }

  if (route === 'ncc') {
    return `
      <!-- UNIQUE: NCC Military Cadre & NSS Community Service -->
      <div class="template-section-block subdivision-feature-block subdivision-ncc">
        <div class="section-tag-pill">
          <span class="tag-dot"></span>
          <span>DUTY &bull; DISCIPLINE &bull; NATION FIRST</span>
        </div>
        <h3 class="section-subheading">National Cadet Corps (NCC 4 TN BN) &amp; NSS Units</h3>
        <div class="ncc-wings-grid">
          <div class="ncc-wing-card">
            <div class="nwc-badge">4(TN) BN NCC ARMY WING</div>
            <h4>NCC Military Cadre &amp; Leadership Training</h4>
            <p class="nwc-lead">Building character, courage, and camaraderie under the motto "Unity and Discipline".</p>
            <div class="nwc-points">
              <div class="nwc-point">
                <span class="nwc-bullet">🎖️</span>
                <div>
                  <b>B &amp; C Certificate Examination Hub</b>
                  <p>Rigorous 3-year military syllabus leading to coveted B &amp; C certificates that offer direct entry quotas into the Indian Armed Forces.</p>
                </div>
              </div>
              <div class="nwc-point">
                <span class="nwc-bullet">🎯</span>
                <div>
                  <b>Weapons, Firing &amp; Obstacle Drills</b>
                  <p>Hands-on weapon disassembly and firing range practice at army ranges, map reading, and battle tactics.</p>
                </div>
              </div>
              <div class="nwc-point">
                <span class="nwc-bullet">🇮🇳</span>
                <div>
                  <b>National Camp Deputations (RDC &amp; TSC)</b>
                  <p>Cadets consistently selected for the prestigious Republic Day Parade (RDC) at Kartavya Path, New Delhi, and Thal Sainik Camp.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="ncc-wing-card">
            <div class="nwc-badge">NATIONAL SERVICE SCHEME</div>
            <h4>NSS Community Service &amp; Rural Empowerment</h4>
            <p class="nwc-lead">Living by the noble creed "Not Me, But You" through grassroots societal transformation.</p>
            <div class="nwc-points">
              <div class="nwc-point">
                <span class="nwc-bullet">❤️</span>
                <div>
                  <b>Annual Mega Blood Donation Camps</b>
                  <p>Mobilizing 500+ voluntary blood units every year for Coimbatore Government Hospital and regional pediatric units.</p>
                </div>
              </div>
              <div class="nwc-point">
                <span class="nwc-bullet">🏡</span>
                <div>
                  <b>Adopted Villages Transformation Mission</b>
                  <p>Intensive 7-day annual special residential camps conducting health surveys, drinking water chlorination, and solar lighting.</p>
                </div>
              </div>
              <div class="nwc-point">
                <span class="nwc-bullet">🌱</span>
                <div>
                  <b>Green Belt Ecological Drives</b>
                  <p>Planting over 1,000 indigenous trees annually and educating agricultural communities on organic soil preservation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ncc-ssb-strip">
          <div class="nss-badge">DEFENSE CAREERS WING</div>
          <h4>Dedicated SSB Interview &amp; CDS Coaching Cell</h4>
          <p>Guided by defense veterans, our training cell provides psychological testing prep, group discussion drills, and obstacle ground simulations that have successfully commissioned numerous Sri Shakthi graduates into the Indian Army, Air Force, and Navy.</p>
        </div>
      </div>
    `;
  }

  return '';
}
