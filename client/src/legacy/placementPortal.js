// Training & Placement Cell Portal
// Sri Shakthi Institute of Engineering and Technology (Autonomous)
// Bespoke Executive Hero & Template + Full Rich Placement Suite from campus/Nithiya

import { entrepreneurshipPage, initEntrepreneurshipEvents } from './entrepreneurship.js';

const vmIcon = (name) => ({
  eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.2"/><path d="m15.5 8.5 5-5M16 3.5h4.5V8"/></svg>',
  spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>',
  compass: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.3 5.3-5.3 2.3 2.3-5.3 5.3-2.3Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>',
  education: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12.2V16c2.5 2.5 7.5 2.5 10 0v-3.8M21 10v6"/></svg>'
}[name] || '');

export const placementDataYears = {
  '2025 - 26': {
    placed: 663,
    companies: '213',
    highest: '₹33 LPA',
    average: '₹6.8 LPA',
    multiple: 185,
    rate: '98%',
    tags: {
      placed: '663 Campus Offers',
      companies: '213 Visited',
      highest: 'Trilogy · ₹33 LPA',
      average: 'Consistent Rise',
      multiple: 'Prime Platinum (10-33L)',
      rate: 'Eligible Cohort'
    }
  },
  '2024 - 25': {
    placed: 580,
    companies: '190+',
    highest: '₹22 LPA',
    average: '₹5.8 LPA',
    multiple: 145,
    rate: '95%',
    tags: {
      placed: '↑ 24% YoY',
      companies: 'Fortune 500s',
      highest: 'Super Dream',
      average: 'Steady Rise',
      multiple: 'Multi-Offers',
      rate: 'NBA Accredited'
    }
  },
  '2023 - 24': {
    placed: 460,
    companies: '165+',
    highest: '₹18 LPA',
    average: '₹5.2 LPA',
    multiple: 110,
    rate: '92%',
    tags: {
      placed: '↑ 18% YoY',
      companies: 'Global Recruits',
      highest: 'Tier-1 Marquee',
      average: 'Benchmark Level',
      multiple: 'Dual Offers',
      rate: 'Core Disciplines'
    }
  },
  '2022 - 23': {
    placed: 390,
    companies: '140+',
    highest: '₹14 LPA',
    average: '₹4.8 LPA',
    multiple: 85,
    rate: '90%',
    tags: {
      placed: 'Baseline Year',
      companies: 'MNC Ecosystem',
      highest: 'Product Startups',
      average: 'Competitive CTC',
      multiple: 'Single & Dual',
      rate: 'All Departments'
    }
  }
};

// All 43 Authentic Placement Superstars (Season 2025 - 2026 Official Banner Data)
export const allSuperstarsData = [
  // ── ₹33 LPA CLUB (Prime Platinum · Marquee Record) ──
  { name: 'Gowtham G', dept: 'Cyber Security (CYS)', company: 'Trilogy', ctc: '₹33 LPA', tier: '33', top: true, batch: 'Batch 2026', img: '/brand/achievers/gowtham-g.jpg' },
  { name: 'Siv Raam Krishnan K V', dept: 'AI & Data Science (AI DS)', company: 'Trilogy', ctc: '₹33 LPA', tier: '33', top: true, batch: 'Batch 2026', img: '/brand/achievers/siv-raam-krishnan-k-v.jpg' },

  // ── ₹22 LPA CLUB (Super Dream Offers · Increff) ──
  { name: 'Prakash Dass R', dept: 'AI & Machine Learning (AI ML)', company: 'Increff', ctc: '₹22 LPA', tier: '22', top: true, batch: 'Batch 2026', img: '/brand/achievers/prakash-dass-r.jpg' },
  { name: 'Dilip Kumar N', dept: 'Information Technology (IT)', company: 'Increff', ctc: '₹22 LPA', tier: '22', top: true, batch: 'Batch 2026', img: '/brand/achievers/dilip-kumar-n.jpg' },
  { name: 'Anupama R', dept: 'AI & Data Science (AI DS)', company: 'Increff', ctc: '₹22 LPA', tier: '22', top: true, batch: 'Batch 2026', img: '/brand/achievers/anupama-r.jpg' },
  { name: 'Dharaneesh B', dept: 'AI & Machine Learning (AI ML)', company: 'Increff', ctc: '₹22 LPA', tier: '22', top: true, batch: 'Batch 2026', img: '/brand/achievers/dharaneesh-b.jpg' },
  { name: 'Dinesh J', dept: 'AI & Machine Learning (AI ML)', company: 'Increff', ctc: '₹22 LPA', tier: '22', top: true, batch: 'Batch 2026', img: '/brand/achievers/dinesh-j.jpg' },

  // ── ₹13 LPA & ₹12 LPA CLUB (Product & Cloud Tier) ──
  { name: 'Seema Maglin S', dept: 'AI & Data Science (AI DS)', company: 'Presidio', ctc: '₹13 LPA', tier: '13-12', top: false, batch: 'Batch 2026', img: '/brand/achievers/seema-maglin-s.jpg' },
  { name: 'Dharun J', dept: 'Cyber Security (CYS)', company: 'Zenx AI', ctc: '₹12 LPA', tier: '13-12', top: false, batch: 'Batch 2026', img: '/brand/achievers/dharun-j.jpg' },
  { name: 'Mithun Raaj S', dept: 'Electronics & Comm. (ECE)', company: 'Hyperverge', ctc: '₹12 LPA', tier: '13-12', top: false, batch: 'Batch 2026', img: '/brand/achievers/mithun-raaj-s.jpg' },

  // ── ₹10 LPA CLUB (Tier-1 Tech Giants & Product Leaders) ──
  { name: 'Janarthanan A', dept: 'Electronics & Comm. (ECE)', company: 'TCS', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/janarthanan-a.jpg' },
  { name: 'Hiba Fathima N', dept: 'Computer Science (CSE)', company: 'TCS', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/hiba-fathima-n.jpg' },
  { name: 'Jefrin Peter M', dept: 'Cyber Security (CYS)', company: 'Tiger Analytics', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/jefrin-peter-m.jpg' },
  { name: 'Dhana Varshini S', dept: 'AI & Data Science (AI DS)', company: 'Tiger Analytics', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/dhana-varshini-s.jpg' },
  { name: 'Eshwar K', dept: 'AI & Data Science (AI DS)', company: 'Tiger Analytics', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/eshwar-k.jpg' },
  { name: 'Aswin Raj S', dept: 'AI & Data Science (AI DS)', company: 'Tiger Analytics', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/aswin-raj-s.jpg' },
  { name: 'Muthuraja M', dept: 'AI & Machine Learning (AI ML)', company: 'Tiger Analytics', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/muthuraja-m.jpg' },
  { name: 'Boopathi K', dept: 'Information Technology (IT)', company: 'Reltio', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/boopathi-k.jpg' },
  { name: 'Vishal S', dept: 'Cyber Security (CYS)', company: 'Reltio', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/vishal-s.jpg' },
  { name: 'Sangamithra G', dept: 'Biomedical Engg. (BME)', company: 'Reltio', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/sangamithra-g.jpg' },
  { name: 'Gowthama Raj K M', dept: 'Electronics & Comm. (ECE)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/gowthama-raj-k-m.jpg' },
  { name: 'Deepak Kumaran RM G', dept: 'AI & Machine Learning (AI ML)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/deepak-kumaran-rm-g.jpg' },
  { name: 'Mugesh Ram Sundar G S', dept: 'AI & Data Science (AI DS)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/mugesh-ram-sundar-g-s.jpg' },
  { name: 'Abishek S', dept: 'Information Technology (IT)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/abishek-s.jpg' },
  { name: 'Akilesh Prabhu S', dept: 'Information Technology (IT)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/akilesh-prabhu-s.jpg' },
  { name: 'Gowthaman N', dept: 'Information Technology (IT)', company: 'Mr. Cooper', ctc: '₹10 LPA', tier: '10', top: false, batch: 'Batch 2026', img: '/brand/achievers/gowthaman-n.jpg' },

  // ── ₹9 LPA CLUB (DeepTech, AI Labs & Global IT) ──
  { name: 'Mohammed Asan I', dept: 'Computer Science (CSE)', company: 'InCorp', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/mohammed-asan-i.jpg' },
  { name: 'Raja Imaya Bharathi J', dept: 'Information Technology (IT)', company: 'InCorp', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/raja-imaya-bharathi-j.jpg' },
  { name: 'Nithya Prakash M', dept: 'AI & Data Science (AI DS)', company: 'Aansena', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/nithya-prakash-m.jpg' },
  { name: 'Divya J', dept: 'AI & Data Science (AI DS)', company: 'CTS', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/divya-j.jpg' },
  { name: 'Rahul R N', dept: 'AI & Machine Learning (AI ML)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/rahul-r-n.jpg' },
  { name: 'Siddarth D', dept: 'Computer Science (CSE)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/siddarth-d.jpg' },
  { name: 'Suriyavel M', dept: 'Computer Science (CSE)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/suriyavel-m.jpg' },
  { name: 'Sailesh R', dept: 'Computer Science (CSE)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/sailesh-r.jpg' },
  { name: 'Sanjay J', dept: 'AI & Data Science (AI DS)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/sanjay-j.jpg' },
  { name: 'Gokul Sriram', dept: 'AI & Machine Learning (AI ML)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/gokul-sriram.jpg' },
  { name: 'Sai Subin', dept: 'Information Technology (IT)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/sai-subin.jpg' },
  { name: 'Naveen N', dept: 'Computer Science (CSE)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/naveen-n.jpg' },
  { name: 'Rahul Nisanth M', dept: 'Computer Science (CSE)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/rahul-nisanth-m.jpg' },
  { name: 'Soorya Akilesh C', dept: 'AI & Data Science (AI DS)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/soorya-akilesh-c.jpg' },
  { name: 'Arun Krishna S', dept: 'Cyber Security (CYS)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/arun-krishna-s.jpg' },
  { name: 'Nivash M', dept: 'Cyber Security (CYS)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/nivash-m.jpg' },
  { name: 'Afsal Ahamad', dept: 'AI & Machine Learning (AI ML)', company: 'Centillion Labs', ctc: '₹9 LPA', tier: '9', top: false, batch: 'Batch 2026', img: '/brand/achievers/afsal-ahamad.jpg' }
];

export const starAchievers = allSuperstarsData;

// All Top Recruiters (Comprehensive Single-Line Showcase)
export const allTopRecruiters = [
  { name: 'ZOHO', type: 'img', src: '/brand/placement-company-logo/line-2/zoho-logo.png', category: 'Product & SaaS' },
  { name: 'Infosys', type: 'svg', category: 'Technology Consulting' },
  { name: 'J.P.Morgan', type: 'custom', html: '<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="22" fill="#2d2926">J.P.Morgan</text>', category: 'Investment Bank' },
  { name: 'Amazon', type: 'svg', category: 'Cloud & Tech Giant' },
  { name: 'AUTODESK', type: 'custom', html: '<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="20" letter-spacing="1.5" fill="#0696d7">▲ AUTODESK</text>', category: '3D Design Tech' },
  { name: 'TCS', type: 'svg', category: 'Global IT Leader' },
  { name: 'Accenture', type: 'svg', category: 'Strategy & Consulting' },
  { name: 'JUSPAY', type: 'custom', html: '<circle cx="20" cy="16" r="7" fill="#0077ff"/><text x="62%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="21" letter-spacing="0.5" fill="#172a3a">JUSPAY</text>', category: 'FinTech Unicorn' },
  { name: 'Cognizant', type: 'img', src: '/brand/placement-company-logo/line-1/Cognizant-logo.png', category: 'Digital Solutions' },
  { name: 'Wipro', type: 'svg', category: 'Global IT Enterprise' },
  { name: 'ServiceNow', type: 'img', src: '/brand/placement-company-logo/line-2/servicenow-logo.png', category: 'Enterprise Cloud' },
  { name: 'ITC Limited', type: 'img', src: '/brand/placement-company-logo/line-2/ITC-limited-logo.png', category: 'Conglomerate & FMCG' },
  { name: 'Presidio', type: 'img', src: '/brand/placement-company-logo/line-2/Presido-logo.png', category: 'Cyber Security' },
  { name: 'Zentron Labs', type: 'img', src: '/brand/placement-company-logo/line-2/Zentron-labs-logo.png', category: 'Robotics & Vision' },
  { name: 'ConverSight', type: 'img', src: '/brand/placement-company-logo/line-1/Conver-sight-logo.png', category: 'AI & Analytics' },
  { name: 'Zynerd', type: 'img', src: '/brand/placement-company-logo/line-2/Zynerd-logo.png', category: 'EdTech Platform' },
  { name: 'Abluva', type: 'img', src: '/brand/placement-company-logo/line-1/Abluva-logo.png', category: 'Data Security AI' },
  { name: 'Vakilsearch', type: 'img', src: '/brand/placement-company-logo/line-1/Vakil-search-logo.png', category: 'LegalTech & FinTech' },
  { name: 'Conserve', type: 'img', src: '/brand/placement-company-logo/line-2/conserve-logo.png', category: 'Green Engineering' },
  { name: 'Nallas', type: 'img', src: '/brand/placement-company-logo/line-1/nallas-logo.png', category: 'Enterprise IT' },
  { name: 'Retail AI', type: 'img', src: '/brand/placement-company-logo/line-1/Retail-ai-logo.png', category: 'Autonomous Tech' },
  { name: 'nference', type: 'img', src: '/brand/placement-company-logo/line-1/nference-logo.png', category: 'BioMedical AI' }
];

function getRecruiterSvg(name) {
  if (name === 'Trilogy') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="19" letter-spacing="1.5" fill="#0d1b2a">▲ TRILOGY</text>`;
  }
  if (name === 'Increff') {
    return `<circle cx="16" cy="14" r="6" fill="#e63946"/><text x="16" y="17" text-anchor="middle" font-size="9" font-weight="900" fill="#fff">i</text><text x="64%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="17" fill="#e63946">INCREFF</text>`;
  }
  if (name === 'Presidio') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" letter-spacing="1" fill="#0077b6">PRESIDIO</text>`;
  }
  if (name === 'Zenx AI' || name === 'Hasura') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" fill="#3a0ca3">ZENX AI</text>`;
  }
  if (name === 'Hyperverge') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="16" letter-spacing="0.5" fill="#4361ee">HYPERVERGE</text>`;
  }
  if (name === 'Tiger Analytics') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="14.5" letter-spacing="0.5" fill="#d9480f">TIGER ANALYTICS</text>`;
  }
  if (name === 'Reltio') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" fill="#168aad">Reltio</text>`;
  }
  if (name === 'Mr. Cooper' || name === 'Cooper') {
    return `<text x="50%" y="42%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-size="9" fill="#005a39" font-weight="700">mr.</text><text x="50%" y="72%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="19" fill="#00b4d8">cooper</text>`;
  }
  if (name === 'InCorp') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" fill="#2b2d42">In.Corp</text>`;
  }
  if (name === 'Aansena') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="17" fill="#0077b6">AANSENA</text>`;
  }
  if (name === 'CTS' || name === 'Cognizant') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" fill="#003580">Cognizant</text>`;
  }
  if (name === 'Centillion Labs' || name === 'Centillion') {
    return `<rect x="10" y="6" width="16" height="16" rx="3" fill="#00854a"/><text x="64%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="14" fill="#003824">CENTILLION</text>`;
  }
  if (name === 'TCS') {
    return `<text x="50%" y="42%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="19" fill="#e61c24">tcs </text><text x="50%" y="78%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="10.5" fill="#1f4277">CONSULTANCY</text>`;
  }
  if (name === 'Infosys') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="23" fill="#007cc3">Infosys</text>`;
  }
  if (name === 'wipro') {
    return `<circle cx="22" cy="15" r="6" fill="#f3c515"/><circle cx="32" cy="15" r="4.2" fill="#e61c24"/><text x="64%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="22" fill="#341f97">wipro</text>`;
  }
  if (name === 'Amazon') {
    return `<text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="900" font-size="21" fill="#131921">amazon</text><path d="M 36 24 Q 68 33 100 24" stroke="#ff9900" stroke-width="2.5" fill="none" stroke-linecap="round"/>`;
  }
  if (name === 'Accenture') {
    return `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="18" fill="#a100ff">&gt;accenture</text>`;
  }
  return `<text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800" font-size="16" fill="#005a39">${name}</text>`;
}

function renderStudentCompanyBadge(name) {
  if (name === 'Centillion Labs' || name === 'Centillion') {
    return `<span class="siet-co-icon" style="display:inline-block;width:12px;height:12px;border-radius:3px;background:#00854a;flex-shrink:0;"></span><span class="siet-co-text" style="font-weight:800;font-size:13px;letter-spacing:0.04em;color:#003824;">CENTILLION</span>`;
  }
  if (name === 'Trilogy') {
    return `<span class="siet-co-icon" style="color:#0d1b2a;font-size:11px;line-height:1;margin-right:2px;">▲</span><span class="siet-co-text" style="font-weight:900;font-size:13.5px;letter-spacing:0.08em;color:#0d1b2a;">TRILOGY</span>`;
  }
  if (name === 'Increff') {
    return `<span class="siet-co-icon" style="display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:#e63946;color:#fff;font-size:9.5px;font-weight:900;line-height:1;flex-shrink:0;">i</span><span class="siet-co-text" style="font-weight:800;font-size:13.5px;letter-spacing:0.04em;color:#e63946;">INCREFF</span>`;
  }
  if (name === 'Tiger Analytics') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:12.5px;letter-spacing:0.04em;color:#d9480f;">TIGER ANALYTICS</span>`;
  }
  if (name === 'Hyperverge') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13px;letter-spacing:0.05em;color:#4361ee;">HYPERVERGE</span>`;
  }
  if (name === 'Presidio') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13.5px;letter-spacing:0.06em;color:#0077b6;">PRESIDIO</span>`;
  }
  if (name === 'Zenx AI' || name === 'Hasura') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13.5px;letter-spacing:0.05em;color:#3a0ca3;">ZENX AI</span>`;
  }
  if (name === 'Reltio') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:14px;letter-spacing:0.03em;color:#168aad;">Reltio</span>`;
  }
  if (name === 'Mr. Cooper' || name === 'Cooper') {
    return `<span class="siet-co-text" style="font-weight:900;font-size:13.5px;letter-spacing:0.02em;color:#00b4d8;">mr. cooper</span>`;
  }
  if (name === 'InCorp') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13px;color:#2b2d42;">In.Corp</span>`;
  }
  if (name === 'Aansena') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13px;color:#0077b6;">Aansena</span>`;
  }
  if (name === 'CTS' || name === 'Cognizant') {
    return `<span class="siet-co-text" style="font-weight:800;font-size:13px;color:#003580;">Cognizant</span>`;
  }
  if (name === 'TCS') {
    return `<span class="siet-co-text" style="font-weight:900;font-size:13px;color:#1f4277;">TCS</span>`;
  }
  return `<span class="siet-co-text" style="font-weight:800;font-size:13px;color:#005a39;">${name}</span>`;
}

function renderSuperstarCard(s) {
  let tierBadge = '';
  if (s.tier === '33') {
    tierBadge = '<span class="siet-sp-tier-pill is-33">Highest Record</span>';
  } else if (s.tier === '22') {
    tierBadge = '<span class="siet-sp-tier-pill is-22">Super Dream</span>';
  } else if (s.tier === '13-12') {
    tierBadge = '<span class="siet-sp-tier-pill is-12">Product Tier</span>';
  } else if (s.tier === '10') {
    tierBadge = '<span class="siet-sp-tier-pill is-10">Prime Platinum</span>';
  } else {
    tierBadge = '<span class="siet-sp-tier-pill is-9">DeepTech Tier</span>';
  }

  const ribbonClass = s.top ? 'is-marquee' : (s.tier === '22' ? 'is-superdream' : '');

  return `
    <div class="siet-sp-card ${s.top ? 'is-top' : ''}" data-tier="${s.tier}">
      <div class="siet-sp-ctc-wrap">
        <div class="siet-sp-ctc-top-row">
          <span class="siet-sp-ctc-lbl">${s.top ? 'MARQUEE RECORD' : (s.tier === '22' ? 'SUPER DREAM' : 'ANNUAL PACKAGE')}</span>
          ${tierBadge}
        </div>
        <div class="siet-sp-ctc-ribbon ${ribbonClass}">${s.ctc}</div>
      </div>
      <div style="width: 100%; height: 180px; margin: 16px 0; border-radius: 8px; overflow: hidden; background: #eef5f0; box-shadow: inset 0 2px 8px rgba(0,0,0,0.05);">
        <img src="${s.img}" alt="${s.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 10%; display: block;" loading="lazy">
      </div>
      <div style="text-align: center; margin-bottom: 16px;">
        <h3 class="siet-sp-name" style="margin:0; font-size: 18px; font-weight: 800; color: #003d29; line-height: 1.2;">${s.name}</h3>
        <p class="siet-sp-dept" style="margin:6px 0 0; font-size: 13px; color: #355343; font-weight: 600;">${s.dept}</p>
      </div>
      <div class="siet-sp-company-box">
        ${renderStudentCompanyBadge(s.company)}
      </div>
      <span class="siet-sp-batch">${s.batch}</span>
    </div>
  `;
}

function renderRecruiterCard(r) {
  let logoContent = '';
  if (r.type === 'img') {
    logoContent = `<img src="${r.src}" alt="${r.name} logo" loading="lazy">`;
  } else if (r.type === 'custom') {
    logoContent = `<svg viewBox="0 0 140 32" xmlns="http://www.w3.org/2000/svg">${r.html}</svg>`;
  } else {
    logoContent = `<svg viewBox="0 0 130 32" xmlns="http://www.w3.org/2000/svg">${getRecruiterSvg(r.name)}</svg>`;
  }
  return `
    <div class="siet-tr-logo-card" title="${r.name} · ${r.category}">
      <span class="siet-tr-cat-tag">${r.category}</span>
      <div class="siet-tr-logo-inner">
        ${logoContent}
      </div>
      <div class="siet-tr-hover-bar">
        <span class="siet-tr-dot"></span>
        <span class="siet-tr-co-name">${r.name}</span>
      </div>
    </div>
  `;
}

function getSuperstarMarqueeHtml(filter = 'all') {
  const filtered = (filter === 'all')
    ? allSuperstarsData
    : allSuperstarsData.filter(s => s.tier === filter);

  let baseList = [...filtered];
  while (baseList.length < 10) {
    baseList = baseList.concat(filtered);
  }
  const doubleList = baseList.concat(baseList);
  return doubleList.map(renderSuperstarCard).join('');
}

export const placementRecordSheets = [
  {
    title: 'Sheet 1: Prime Platinum & High Diamond Offers (₹10 – ₹33 LPA)',
    desc: 'Contains S.No 1 to 62: Gowtham G (Trilogy ₹33L), Siv Raam Krishnan (Trilogy ₹33L), Increff (₹22L · 5 Offers), Presidio, Zenx AI, Hyperverge, TCS, Aivar Innovation, Mr. Cooper, Reltio, Linarc, Centillion Labs, AboveCloud9.ai, etc.',
    src: '/brand/placement-records/sheet-1-prime-offers-10-33-lpa.jpg'
  },
  {
    title: 'Sheet 2: Dazzling Diamond & Precious Pearl (₹6 – ₹10 LPA & ₹4 – ₹6 LPA)',
    desc: 'Contains S.No 63 to 125 & 126 to 189: Rently, Vymo, Adaya.ai, Kovai.co, TCS, Grootan Tech, Centillion Labs, Tarka Labs, Abluva, Innoventees, Digiledge, Zoho, Ge Ram Soft Tech, InCorp India, Vendasta, Appviewx, Ziffity, Movidu, etc.',
    src: '/brand/placement-records/sheet-2-diamond-offers-6-10-lpa.jpg'
  },
  {
    title: 'Sheet 3: Precious Pearl Offers Part 1 (₹4 – ₹6 LPA · 226 Offers)',
    desc: 'Contains S.No 126 to 253: Zoho, Responsive.io, Sekel, Intimetec, Sedin Tech, Profitstory.ai, Divum, Visai Labs, Bluebird, Livetag Tech, Arcadia, Novintix, Suntec, Wiemera, Dalmia Cements, Ajira, Izeon, Pentl.ai, Softcell, etc.',
    src: '/brand/placement-records/sheet-3-pearl-offers-part-1.jpg'
  },
  {
    title: 'Sheet 4: Precious Pearl Offers Part 2 (₹4 – ₹6 LPA · 226 Offers)',
    desc: 'Contains S.No 380 to 507: Jeyam Auto, Popular Systems, Benco Thermal, Aggregate Intelligence, PRS Semiconductor, Brysa, Freedom Software, Tihan IIT, Vinpro Tech, Hirotec, Bull Machines, Middel East Fuji, Swish, Gomathy Engg, Crux Medical, LECS, etc.',
    src: '/brand/placement-records/sheet-4-pearl-offers-part-2.jpg'
  },
  {
    title: 'Sheet 5: Recruiter Summary & Multi-Offer Tiers (213 Companies Visited)',
    desc: 'Contains S.No 444 to 507 & Grand Totals: Addictronz, G5 Switchgear, Zealev, Genn Automation, Levim Biotech, Hiox Software, Mindnotix, RND Soft, Adz4Need, Webnox, Virtual Tech Gurus, Sacra, Sartorius, MyLapay, Ecometrix, Flowtrack, NCR Alteos, etc.',
    src: '/brand/placement-records/sheet-5-recruitment-records-213-companies.jpg'
  }
];

let activeRecordSheetIdx = 0;

function switchPlacementRecordSheet(idx) {
  idx = (idx + placementRecordSheets.length) % placementRecordSheets.length;
  activeRecordSheetIdx = idx;
  const sheet = placementRecordSheets[idx];

  const modal = document.getElementById('siet-records-modal');
  if (!modal) return;

  const titleEl = document.getElementById('siet-modal-sheet-title');
  const descEl = document.getElementById('siet-modal-sheet-desc');
  const imgEl = document.getElementById('siet-modal-active-img');
  const newtabEl = document.getElementById('siet-modal-open-newtab');
  const counterEl = document.getElementById('siet-modal-sheet-counter');

  if (titleEl) titleEl.textContent = sheet.title;
  if (descEl) descEl.textContent = sheet.desc;
  if (imgEl) {
    imgEl.style.opacity = '0.35';
    imgEl.src = sheet.src;
    imgEl.onload = () => { imgEl.style.opacity = '1'; };
  }
  if (newtabEl) newtabEl.href = sheet.src;
  if (counterEl) counterEl.textContent = `Sheet ${idx + 1} of ${placementRecordSheets.length}`;

  document.querySelectorAll('.siet-records-modal-tab').forEach((tab, i) => {
    tab.classList.toggle('is-active', i === idx);
  });
}

let currentSuperstarFilter = 'all';

function updateSuperstarsMarquee(tier) {
  currentSuperstarFilter = tier || 'all';
  const track = document.getElementById('siet-sp-cards-track');
  if (track) {
    track.innerHTML = getSuperstarMarqueeHtml(currentSuperstarFilter);
    track.style.animation = 'none';
    track.offsetHeight; /* trigger reflow */
    track.style.animation = 'sietSuperstarsMarquee 60s linear infinite';
  }
}

function higherEducationPage() {
  return `
    <main class="siet-vm-page">
      <section class="siet-vm-hero">
        <div class="siet-vm-hero-grid"></div>
        <div class="siet-vm-hero-orb orb-one"></div>
        <div class="siet-vm-hero-orb orb-two"></div>
        <div class="siet-vm-shell siet-vm-hero-content reveal">
          <p class="siet-vm-kicker"><i></i> HIGHER EDUCATION</p>
          <h1>Higher Education <em>&amp; Admissions</em></h1>
          <p class="siet-vm-intro">Guiding graduates towards post-graduate admissions at premier international universities and Indian institutes.</p>
        </div>
      </section>

      <div class="siet-sp-lower-shell">
        <div class="siet-tmpl-sub-grid">
          <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
            <div class="siet-vm-card-pattern"></div>
            <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('education')}</span><span class="siet-vm-card-number">01 / ENTRANCE</span></div>
            <div class="siet-vm-card-copy"><p class="siet-vm-card-label">IN-HOUSE COACHING</p><h2>GATE, GRE, CAT &amp; IELTS</h2><p>Structured preparation integrated into student schedules with faculty mentors and external trainers for national and global exams.</p></div>
            <div class="siet-vm-card-footer"><span>Comprehensive Exam Training</span><i></i></div>
          </article>
          <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
            <div class="siet-vm-mission-lines"></div>
            <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('target')}</span><span class="siet-vm-card-number">02 / PREMIER INSTITUTES</span></div>
            <div class="siet-vm-card-copy"><p class="siet-vm-card-label">INDIAN EXCELLENCE</p><h2>IISc, IITs, NITs &amp; IIMs</h2><p>Our students consistently qualify GATE and CAT to enter M.Tech, MS, and MBA programs at IISc Bangalore, IIT Madras, and top NITs.</p></div>
            <div class="siet-vm-card-footer"><span>National Top-Rankers</span><i></i></div>
          </article>

          <!-- INTERNATIONAL EDUCATION CARDS -->
          <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
            <div class="siet-vm-card-pattern"></div>
            <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">03 / USA</span></div>
            <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>United States</h2><p>Counselling provided for post graduate courses in Ivy League &amp; Top Tech Institutes.</p></div>
            <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
          </article>

          <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
            <div class="siet-vm-mission-lines"></div>
            <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">04 / UK</span></div>
            <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>United Kingdom</h2><p>Counselling provided for post graduate courses in Russell Group Universities.</p></div>
            <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
          </article>

          <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
            <div class="siet-vm-card-pattern"></div>
            <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">05 / CANADA</span></div>
            <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>Canada</h2><p>Counselling provided for post graduate courses in Leading Research Academies.</p></div>
            <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
          </article>

          <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
            <div class="siet-vm-mission-lines"></div>
            <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">06 / AUSTRALIA</span></div>
            <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>Australia</h2><p>Counselling provided for post graduate courses in Group of Eight (Go8) Universities.</p></div>
            <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
          </article>

          <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
            <div class="siet-vm-card-pattern"></div>
            <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('compass')}</span><span class="siet-vm-card-number">07 / GERMANY</span></div>
            <div class="siet-vm-card-copy"><p class="siet-vm-card-label">POST GRADUATE COURSES</p><h2>Germany</h2><p>Counselling provided for post graduate courses in TU9 Engineering Excellence institutes.</p></div>
            <div class="siet-vm-card-footer"><span>Global Exposure</span><i></i></div>
          </article>
        </div>
      </div>
    </main>
  `;
}

function governmentServicesPage() {
  return `
    <main class="siet-vm-page">
      <section class="siet-vm-hero">
        <div class="siet-vm-hero-grid"></div>
        <div class="siet-vm-hero-orb orb-one"></div>
        <div class="siet-vm-hero-orb orb-two"></div>
        <div class="siet-vm-shell siet-vm-hero-content reveal">
          <p class="siet-vm-kicker"><i></i> GOVERNMENT SERVICES</p>
          <h1>Civil Services <em>&amp; Public Sector</em></h1>
          <p class="siet-vm-intro">Mentoring disciplined graduates for careers in Indian administrative services, defense research, and public enterprises.</p>
        </div>
      </section>

      <!-- ALS IAS COACHING SECTION -->
      <section class="siet-he-intl-section reveal" style="background:#fff; border-bottom:1px solid #eef5f0; padding:60px 20px;">
        <div class="siet-he-intl-container" style="max-width: 1000px; text-align: center; margin: 0 auto;">
          <h2 class="siet-he-quote-text" style="color:#138a36; margin-bottom:40px; font-size:22px; font-weight:800; text-transform:uppercase; letter-spacing:0.5px;">
            COACHING FOR CIVIL SERVICES EXAMINATIONS PROVIDED IN PARTNERSHIP WITH ALS
          </h2>
          
          <div style="background:#fff; border-radius:12px; box-shadow: 0 10px 40px rgba(0,0,0,0.1); overflow:hidden; border:2px solid #e5001a;">
            <div style="background:#e5001a; color:#fff; padding:12px 24px; text-align:left; font-weight:bold; font-size:18px;">
              Top IAS Coaching in Delhi
            </div>
            <div style="display:flex; align-items:center; padding:30px; flex-wrap:wrap; gap:20px;">
              <div style="flex:1; min-width:150px; border-right:2px solid #eee; padding-right:20px; text-align:center;">
                <span style="display:block; color:#0033a0; font-size:24px; font-weight:bold; font-style:italic;">Rank</span>
                <span style="display:block; font-size:80px; font-weight:900; line-height:1; color:#0033a0; text-shadow:2px 2px 0px #fff, 4px 4px 0px rgba(0,51,160,0.1);">5</span>
              </div>
              <div style="flex:3; min-width:300px; padding:0 30px; text-align:center;">
                <div style="background:#e5001a; display:inline-block; padding:20px 40px;">
                  <span style="display:block; font-family:Georgia, serif; font-size:80px; color:#fff; font-weight:bold; line-height:1;">ALS</span>
                  <span style="display:block; color:#fff; font-size:16px; margin-top:10px; border-top:1px solid rgba(255,255,255,0.5); padding-top:10px;">Training Steel pillars For the Nation</span>
                </div>
              </div>
              <div style="flex:2; min-width:200px; text-align:left; padding-left:20px;">
                <span style="display:block; color:#0033a0; font-size:24px; font-weight:bold; margin-bottom:8px;">ALS IAS Academy</span>
                <a href="http://www.alsias.net" target="_blank" rel="noopener" style="color:#0033a0; font-size:18px; font-weight:bold; text-decoration:none;">www.alsias.net</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="siet-sp-lower-shell">
        <div class="siet-tmpl-sub-grid">
          <article class="siet-vm-card siet-vm-card-vision reveal" style="min-height:240px;padding:22px;">
            <div class="siet-vm-card-pattern"></div>
            <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('target')}</span><span class="siet-vm-card-number">01 / ACADEMY</span></div>
            <div class="siet-vm-card-copy"><p class="siet-vm-card-label">CIVIL SERVICES WING</p><h2>Sri Shakthi IAS Academy</h2><p>Foundation batches for UPSC Civil Services, TNPSC Group 1 &amp; 2, with regular mock test series and guest lectures by serving officers.</p></div>
            <div class="siet-vm-card-footer"><span>Officers in the Making</span><i></i></div>
          </article>
          <article class="siet-vm-card siet-vm-card-mission reveal" style="min-height:240px;padding:22px;">
            <div class="siet-vm-mission-lines"></div>
            <div class="siet-vm-card-top"><span class="siet-vm-card-icon">${vmIcon('education')}</span><span class="siet-vm-card-number">02 / ENGINEERING</span></div>
            <div class="siet-vm-card-copy"><p class="siet-vm-card-label">TECHNICAL SERVICES</p><h2>Indian Engineering Services (IES)</h2><p>Intensive coaching in core engineering disciplines for UPSC ESE, preparing graduates for central government engineering executive roles.</p></div>
            <div class="siet-vm-card-footer"><span>Technical Civil Services</span><i></i></div>
          </article>
        </div>
      </div>
    </main>
  `;
}

// ── Main Exported Page Function ──
export function placementsPortalPage(route) {
  const activeRoute = route || 'placements';
  const isEnt = activeRoute.includes('entrepreneurship');
  const isHigh = activeRoute.includes('higher-education');
  const isGov = activeRoute.includes('government-services');

  // Subpage: Entrepreneurship
  if (isEnt) {
    return entrepreneurshipPage();
  }

  // Subpage: Higher Education
  if (isHigh) {
    return higherEducationPage();
  }

  // Subpage: Government Services
  if (isGov) {
    return governmentServicesPage();
  }

  // Top Recruiters Marquee Cards (Single Continuous Line)
  const marqueeSingleHtml = allTopRecruiters.map(renderRecruiterCard).join('');

  // Year Tabs
  const tabsHtml = Object.keys(placementDataYears).map((year, i) => `
    <button type="button" class="siet-tmpl-ytab ${i === 0 ? 'is-active' : ''}" data-year="${year}">
      ${i === 0 ? '<span class="siet-tmpl-ytab-dot"></span>' : ''}
      ${year}
    </button>
  `).join('');

  // Superstars Running Single Slide Marquee HTML
  const initialSuperstarsMarqueeHtml = getSuperstarMarqueeHtml('all');

  return `
    <main class="siet-pe-page">

      <!-- ══════════════════════════════════════════════════════════
           EXECUTIVE HERO HEADER (Kept Exactly as Screenshot & COE Template)
           ══════════════════════════════════════════════════════════ -->
      <section class="coe-exec-hero placement-exec-hero">
        <div class="coe-exec-hero-glow" aria-hidden="true"></div>
        <div class="coe-exec-hero-pattern" aria-hidden="true"></div>
        
        <div class="coe-exec-shell">
          <!-- Top Metadata & Navigation Bar -->
          <div class="coe-exec-topbar">
            <nav class="coe-exec-breadcrumbs" aria-label="Breadcrumb">
              <a href="#/">Home</a>
              <span class="sep">/</span>
              <span class="cur">Placements</span>
            </nav>
            
            <div class="coe-exec-status-group">
              <span class="coe-status-pill">
                <span class="status-pulse"></span>
                <span>CORPORATE RELATIONS &amp; RECRUITMENT CELL</span>
              </span>
              <span class="coe-status-tag">BATCH 2025–2026</span>
            </div>
          </div>

          <!-- Main Executive Presentation Banner -->
          <div class="coe-exec-main">
            <div class="coe-exec-content-col">
              <div class="coe-exec-kicker-row">
                <span class="coe-kicker-gold">CENTRE FOR CAREER DEVELOPMENT</span>
                <span class="coe-kicker-div">•</span>
                <span class="coe-kicker-sub">INDUSTRY-ALIGNED IMMERSION</span>
              </div>

              <h1 class="coe-exec-title">Training &amp; Placement Cell</h1>
              <p class="coe-exec-institution">Sri Shakthi Institute of Engineering and Technology</p>
              <p class="coe-exec-accreditation">
                <span>Autonomous Institution Affiliated to Anna University, Chennai</span>
                <span class="dot">•</span>
                <span>Approved by AICTE, New Delhi</span>
                <span class="dot">•</span>
                <span class="naac-highlight">NAAC 'A' Grade</span>
                <span class="dot">•</span>
                <span>NBA Accredited Programmes</span>
              </p>

              <div class="coe-exec-quote-card">
                <p>
                  "Empowering young innovators with industry-aligned skillsets, hands-on experiential learning, and premier career opportunities across global technology leaders, multinationals, and Fortune 500 enterprises."
                </p>
              </div>

              <!-- Executive Placement Pillar Chips -->
              <div class="coe-exec-pillars-row">
                <div class="coe-pillar-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  <span><b>Highest CTC:</b> ₹33 LPA Top Offer</span>
                </div>
                <div class="coe-pillar-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <span><b>Recruiters:</b> 213+ Global Partners</span>
                </div>
                <div class="coe-pillar-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                  <span><b>Tiers:</b> ₹10 LPA+, ₹6 LPA+, ₹4 LPA+, ₹3 LPA+</span>
                </div>
                <div class="coe-pillar-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  <span><b>Sectors:</b> Product, IT, AI &amp; Core</span>
                </div>
                <div class="coe-pillar-chip">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span><b>Placement Rate:</b> 98% Consistent Record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Placement Sub-sections Quick Nav Strip -->
      <nav class="siet-sp-quick-nav-strip" aria-label="Placement Divisions" style="background:#002216; border-bottom:1.5px solid rgba(243,197,21,0.3); padding:10px 16px;">
        <div style="max-width:1240px; margin:0 auto; display:flex; gap:10px; overflow-x:auto; -webkit-overflow-scrolling:touch; align-items:center;">
          <a href="#/placements" class="siet-sp-nav-pill is-active" style="background:#f3c515; color:#00281b; font-weight:800; font-size:13px; padding:6px 16px; border-radius:20px; text-decoration:none; white-space:nowrap; display:inline-flex; align-items:center; gap:6px;">
            <span>★</span> Job Placements
          </a>
          <a href="#/placements/entrepreneurship" class="siet-sp-nav-pill" style="background:rgba(255,255,255,0.08); color:#e0ebe3; font-weight:700; font-size:13px; padding:6px 16px; border-radius:20px; text-decoration:none; white-space:nowrap; border:1px solid rgba(255,255,255,0.15);">
            Entrepreneurship (E-Cell / EDC)
          </a>
          <a href="#/placements/higher-education" class="siet-sp-nav-pill" style="background:rgba(255,255,255,0.08); color:#e0ebe3; font-weight:700; font-size:13px; padding:6px 16px; border-radius:20px; text-decoration:none; white-space:nowrap; border:1px solid rgba(255,255,255,0.15);">
            Higher Education &amp; Admissions
          </a>
          <a href="#/placements/government-services" class="siet-sp-nav-pill" style="background:rgba(255,255,255,0.08); color:#e0ebe3; font-weight:700; font-size:13px; padding:6px 16px; border-radius:20px; text-decoration:none; white-space:nowrap; border:1px solid rgba(255,255,255,0.15);">
            Civil &amp; Government Services
          </a>
        </div>
      </nav>

      <!-- ══════════════════════════════════════════════════════════
           1. SUPERSTARS OF PLACEMENT SEASON 2025 - 2026 (Official Banner Data)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-sp-section">
        <div class="siet-sp-shell">

          <!-- 1. SUPERSTARS RUNNING SHOWCASE (Single Continuous Slide) -->
          <div class="siet-sp-gallery-controls">
            <div class="siet-sp-gallery-title-group">
              <span class="siet-sp-gallery-kicker"><i></i> INDIVIDUAL STUDENT RECRUITMENT RECORDS</span>
              <h2 class="siet-sp-gallery-title">Meet Our <em>43 Placement Superstars</em></h2>
            </div>
            <div class="siet-sp-filter-tabs" id="siet-sp-tier-filters">
              <button type="button" class="siet-sp-filter-tab is-active" data-tier="all">
                <span class="siet-sp-ftab-dot"></span> All Superstars (43)
              </button>
              <button type="button" class="siet-sp-filter-tab" data-tier="33">₹33 LPA · Trilogy (2)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="22">₹22 LPA · Increff (5)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="13-12">₹13–12 LPA (3)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="10">₹10 LPA (16)</button>
              <button type="button" class="siet-sp-filter-tab" data-tier="9">₹9 LPA (17)</button>
            </div>
          </div>

          <!-- Single Slide Running Track (Continuous Marquee with Image Hover & Pause) -->
          <div class="siet-sp-marquee-wrapper" id="siet-sp-marquee-wrapper">
            <div class="siet-sp-marquee-track" id="siet-sp-cards-track">
              ${initialSuperstarsMarqueeHtml}
            </div>
          </div>

          <!-- Official Placement Key Metrics Grid (Matching Home/About Stat Grid) -->
          <div class="siet-sp-stats-wrapper" id="siet-kpi-interactive-area">
            <div class="siet-sp-stats-grid">
              
              <!-- 01. Campus Offers -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="offers" data-filter="all" title="Click to view all campus offers" tabindex="0">
                <span class="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><rect x="3" y="12" width="4.5" height="9" rx="1.2"/><rect x="9.75" y="7" width="4.5" height="14" rx="1.2"/><rect x="16.5" y="3" width="4.5" height="18" rx="1.2"/></svg>
                </span>
                <h3><span class="js-counter" data-to="663" data-suffix="+">0+</span></h3>
                <p>Campus Offers</p>
                <span class="stat-subtitle">Class of 2026 Cohort</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 02. Recruiting Companies -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="companies" data-filter="all" title="Click to inspect recruiter partnerships" tabindex="0">
                <span class="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                </span>
                <h3><span class="js-counter" data-to="213" data-suffix="+">0+</span></h3>
                <p>Recruiting Companies</p>
                <span class="stat-subtitle">Tier-1 &amp; Core Partners</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 03. Highest CTC -->
              <article class="siet-sp-stat-box js-kpi-card is-highlight" data-kpi="highest" data-filter="33" title="Click to filter ₹33 LPA superstars" tabindex="0">
                <span class="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 4h-2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v2a4 4 0 0 0 4 4h.6A6 6 0 0 0 11 16.9V19H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.1a6 6 0 0 0 4.4-3.9H18a4 4 0 0 0 4-4V7a3 3 0 0 0-3-3zM4 9V7a1 1 0 0 1 1-1h2v4.8A2 2 0 0 1 4 9zm16 0a2 2 0 0 1-3 1.8V6h2a1 1 0 0 1 1 1z"/></svg>
                </span>
                <h3 class="highlight-val"><span class="js-counter" data-prefix="₹" data-to="33" data-suffix=" LPA">₹0 LPA</span></h3>
                <p>Highest CTC (Trilogy)</p>
                <span class="stat-subtitle">Marquee Peak Package</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 04. Prime Platinum -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="platinum" data-filter="22" title="Click to filter ₹10–33 LPA offers" tabindex="0">
                <span class="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M3 18.5h18v2.5H3zm2.5-4L2 6.5l5.5 3 4.5-6.5 4.5 6.5 5.5-3-3.5 8h-13z"/></svg>
                </span>
                <h3><span class="js-counter" data-to="26">0</span></h3>
                <p>Prime Platinum</p>
                <span class="stat-subtitle">₹10 – ₹33 LPA Super Dream</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 05. Dazzling Diamond -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="diamond" data-filter="10" title="Click to filter ₹6–10 LPA offers" tabindex="0">
                <span class="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </span>
                <h3><span class="js-counter" data-to="98">0</span></h3>
                <p>Dazzling Diamond</p>
                <span class="stat-subtitle">₹6 – ₹10 LPA Product Tier</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

              <!-- 06. Precious Pearl -->
              <article class="siet-sp-stat-box js-kpi-card" data-kpi="pearl" data-filter="9" title="Click to filter ₹4–6 LPA offers" tabindex="0">
                <span class="stat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </span>
                <h3><span class="js-counter" data-to="272">0</span></h3>
                <p>Precious Pearl</p>
                <span class="stat-subtitle">₹4 – ₹6 LPA Core IT Tier</span>
                <span class="stat-bottom-line" aria-hidden="true"></span>
              </article>

            </div>
            <div class="bottom-gold-line" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════════
           2. YEAR-WISE HIGHLIGHTS & GROWTH RECORD (Clean Light Theme)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-yw-section">
        <div class="siet-sp-lower-shell">
          <!-- Section Header -->
          <div class="siet-vm-section-intro reveal" style="text-align:center;max-width:800px;margin:0 auto 36px;">
            <p style="color:#00854a;font-weight:800;letter-spacing:0.18em;margin-bottom:8px;font-size:12px;">ANNUAL PLACEMENT RECORD</p>
            <h2 style="font:800 clamp(28px,3.2vw,44px)/1.15 'Plus Jakarta Sans',sans-serif;color:#00281b;letter-spacing:-0.03em;margin:0 0 10px;">Year-Wise <em style="font-family:'Playfair Display',Georgia,serif;font-weight:600;font-style:italic;color:#00854a;">Highlights &amp; Growth</em></h2>
            <span style="font-size:15px;color:#507060;line-height:1.6;font-weight:500;">Consistent multi-year placement performance, expanding top-tier recruiter partnerships, and escalating package milestones.</span>
          </div>

          <div class="siet-vm-card-grid siet-yw-vm-grid">

            <!-- Card 1: Cohort Performance Highlights -->
            <article class="siet-vm-card siet-vm-card-vision siet-yw-card-audit reveal">
              <div class="siet-vm-card-pattern"></div>
              <div class="siet-vm-card-top">
                <span class="siet-vm-card-icon">${vmIcon('eye')}</span>
                <div class="siet-yw-card-top-right">
                  <span class="siet-tmpl-verified-tag">✓ NIRF &amp; NBA Verified</span>
                  <span class="siet-vm-card-number">01 / HIGHLIGHTS</span>
                </div>
              </div>
              <div class="siet-vm-card-copy siet-yw-copy">
                <p class="siet-vm-card-label">COHORT PERFORMANCE AUDIT</p>
                <h2>Validated Campus <em>Milestones.</em></h2>
                <p class="siet-yw-card-desc">Annual audited metrics verified by the Training &amp; Placement Cell across all eligible departments.</p>

                <!-- Year Tabs -->
                <div class="siet-tmpl-year-tabs">
                  ${tabsHtml}
                </div>

                <!-- 6-Metric Stat Tiles Grid -->
                <div class="siet-tmpl-stats-grid">
                  <!-- Item 1: Students Placed / Total Offers -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-placed">663 Campus Offers</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Total Campus Offers</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-placed">663</span>
                    </div>
                  </div>

                  <!-- Item 2: Companies Visited -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-gold" id="tmpl-tag-companies">213 Visited</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Companies Visited</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-companies">213</span>
                    </div>
                  </div>

                  <!-- Item 3: Highest Package -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 4h-2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v2a4 4 0 0 0 4 4h.6A6 6 0 0 0 11 16.9V19H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.1a6 6 0 0 0 4.4-3.9H18a4 4 0 0 0 4-4V7a3 3 0 0 0-3-3zM4 9V7a1 1 0 0 1 1-1h2v4.8A2 2 0 0 1 4 9zm16 0a2 2 0 0 1-3 1.8V6h2a1 1 0 0 1 1 1z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-gold" id="tmpl-tag-highest">Trilogy · ₹33 LPA</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Highest CTC</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-highest">₹33 LPA</span>
                    </div>
                  </div>

                  <!-- Item 4: Prime Offers -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 18.5h18v2.5H3zm2.5-4L2 6.5l5.5 3 4.5-6.5 4.5 6.5 5.5-3-3.5 8h-13z"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-average">Prime (10-33L)</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Prime Platinum</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-average">26</span>
                    </div>
                  </div>

                  <!-- Item 5: Diamond Offers -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-multiple">Diamond (6-10L)</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Dazzling Diamond</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-multiple">98</span>
                    </div>
                  </div>

                  <!-- Item 6: Placement Rate -->
                  <div class="siet-tmpl-stat-card">
                    <div class="siet-tmpl-sc-header">
                      <div class="siet-tmpl-sitem-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                      </div>
                      <span class="siet-tmpl-trend-pill is-green" id="tmpl-tag-rate">Eligible Cohort</span>
                    </div>
                    <div class="siet-tmpl-sc-content">
                      <span class="siet-tmpl-sitem-lbl">Placement Rate</span>
                      <span class="siet-tmpl-sitem-val" id="tmpl-val-rate">98%</span>
                    </div>
                  </div>
                </div>

                <!-- Action Button -->
                <div class="siet-yw-action-box">
                  <button type="button" class="siet-tmpl-btn-primary js-open-records-sheet" data-sheet="0">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    <span>View Full Placement Records →</span>
                  </button>
                </div>
              </div>
              <div class="siet-vm-card-footer">
                <span>Verified by the Office of Training &amp; Placements.</span>
                <i></i>
              </div>
            </article>

            <!-- Card 2: Placement Growth Chart -->
            <article class="siet-vm-card siet-vm-card-mission siet-yw-card-chart reveal">
              <div class="siet-vm-mission-lines"></div>
              <div class="siet-vm-card-top">
                <span class="siet-vm-card-icon">${vmIcon('spark')}</span>
                <span class="siet-vm-card-number">02 / TRAJECTORY</span>
              </div>
              <div class="siet-vm-card-copy siet-yw-copy">
                <p class="siet-vm-card-label">INSTITUTIONAL METRIC ASCENT</p>
                <h2 style="color:#ffffff;">Placement Growth <em>&amp; Trajectory.</em></h2>
                <p class="siet-yw-card-desc" style="color:rgba(255,255,255,0.85);">Visual trendline demonstrating consistent upward trajectory in campus offers, company partnerships, and top package tiers over 4 academic cycles.</p>

                <!-- Chart Legend -->
                <div class="siet-chart-legend">
                  <div class="siet-cleg-item">
                    <span class="siet-cleg-dot" style="background:#00d676;"></span>
                    <span class="siet-cleg-lbl">Total Offers</span>
                  </div>
                  <div class="siet-cleg-item">
                    <span class="siet-cleg-dot" style="background:#f3c515;"></span>
                    <span class="siet-cleg-lbl">Companies Visited</span>
                  </div>
                  <div class="siet-cleg-item">
                    <span class="siet-cleg-dot" style="background:#ffffff; border:1px solid #00b364;"></span>
                    <span class="siet-cleg-lbl">Trajectory Spline</span>
                  </div>
                </div>

                <!-- High-Resolution SVG Growth Chart -->
                <div class="siet-chart-box siet-yw-chart-box">
                  <svg viewBox="0 0 500 220" class="siet-chart-svg" preserveAspectRatio="xMidYMid meet" aria-label="Placement Growth Chart">
                    <defs>
                      <linearGradient id="chartSplineGradDark" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="#34d399"/>
                        <stop offset="60%" stop-color="#10b981"/>
                        <stop offset="100%" stop-color="#f3c515"/>
                      </linearGradient>
                      <linearGradient id="sietBarGreenGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#10b981"/>
                        <stop offset="100%" stop-color="#047857"/>
                      </linearGradient>
                      <linearGradient id="sietBarActiveGreenGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#34d399"/>
                        <stop offset="100%" stop-color="#059669"/>
                      </linearGradient>
                      <linearGradient id="sietBarGoldGradDark" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#fde047"/>
                        <stop offset="100%" stop-color="#d97706"/>
                      </linearGradient>
                      <filter id="sietGlowDark" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#10b981" flood-opacity="0.45"/>
                      </filter>
                      <filter id="sietSplineGlowDark" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#f3c515" flood-opacity="0.4"/>
                      </filter>
                    </defs>

                    <!-- Baseline Axis -->
                    <line x1="30" y1="175" x2="475" y2="175" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>

                    <!-- ── YEAR 1: 2022 - 23 (Center x = 81) ── -->
                    <g class="siet-chart-col-group" data-year="2022 - 23" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="35" y="15" width="92" height="185" rx="8" fill="rgba(255,255,255,0.03)"/>
                      <!-- Student Bar: 390 -->
                      <rect x="49" y="100" width="26" height="75" fill="url(#sietBarGreenGradDark)" rx="4" class="siet-cbar-student"/>
                      <!-- Company Bar: 140 -->
                      <rect x="81" y="146" width="26" height="29" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="62" y="93" font-size="10" fill="#a7f3d0" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">390</text>
                      <text x="94" y="140" font-size="9.5" fill="#fde047" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">140</text>
                      <!-- Year Label -->
                      <text x="78" y="196" font-size="10.5" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2022 - 23</text>
                    </g>

                    <!-- ── YEAR 2: 2023 - 24 (Center x = 186) ── -->
                    <g class="siet-chart-col-group" data-year="2023 - 24" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="140" y="15" width="92" height="185" rx="8" fill="rgba(255,255,255,0.03)"/>
                      <!-- Student Bar: 460 -->
                      <rect x="154" y="85" width="26" height="90" fill="url(#sietBarGreenGradDark)" rx="4" class="siet-cbar-student"/>
                      <!-- Company Bar: 165 -->
                      <rect x="186" y="139" width="26" height="36" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="167" y="78" font-size="10" fill="#a7f3d0" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">460</text>
                      <text x="199" y="133" font-size="9.5" fill="#fde047" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">165</text>
                      <!-- Year Label -->
                      <text x="183" y="196" font-size="10.5" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2023 - 24</text>
                    </g>

                    <!-- ── YEAR 3: 2024 - 25 (Center x = 291) ── -->
                    <g class="siet-chart-col-group" data-year="2024 - 25" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="264" y="15" width="92" height="185" rx="8" fill="rgba(255,255,255,0.03)"/>
                      <!-- Student Bar: 580 -->
                      <rect x="278" y="62" width="26" height="113" fill="url(#sietBarGreenGradDark)" rx="4" class="siet-cbar-student"/>
                      <!-- Company Bar: 190 -->
                      <rect x="310" y="132" width="26" height="43" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="291" y="54" font-size="10" fill="#a7f3d0" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">580</text>
                      <text x="323" y="126" font-size="9.5" fill="#fde047" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">190</text>
                      <!-- Year Label -->
                      <text x="307" y="196" font-size="10.5" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="700">2024 - 25</text>
                    </g>

                    <!-- ── YEAR 4: 2025 - 26 (Center x = 415) ACTIVE/CURRENT ── -->
                    <g class="siet-chart-col-group is-active" data-year="2025 - 26" cursor="pointer">
                      <rect class="siet-chart-col-bg" x="369" y="15" width="92" height="185" rx="8" fill="rgba(255,255,255,0.12)" stroke="rgba(243,197,21,0.5)" stroke-width="1.5"/>
                      <!-- Student Bar: 663 -->
                      <rect x="383" y="38" width="26" height="137" fill="url(#sietBarActiveGreenGradDark)" rx="4" filter="url(#sietGlowDark)" class="siet-cbar-student"/>
                      <!-- Company Bar: 213 -->
                      <rect x="415" y="126" width="26" height="49" fill="url(#sietBarGoldGradDark)" rx="4" class="siet-cbar-company"/>
                      <!-- Val Labels -->
                      <text x="396" y="30" font-size="11" fill="#ffffff" text-anchor="middle" font-weight="900" font-family="'Plus Jakarta Sans',sans-serif">663</text>
                      <text x="428" y="120" font-size="10" fill="#f3c515" text-anchor="middle" font-weight="800" font-family="'Plus Jakarta Sans',sans-serif">213</text>
                      <!-- Year Label -->
                      <text x="412" y="196" font-size="11" fill="#ffffff" text-anchor="middle" font-family="'Plus Jakarta Sans',sans-serif" font-weight="800">2025 - 26 ★</text>
                    </g>

                    <!-- ── Growth Spline Connecting Placement Peaks ── -->
                    <path d="M 81 100 C 133 94, 134 85, 186 85 C 238 85, 239 62, 291 62 C 343 62, 344 38, 396 38" fill="none" stroke="url(#chartSplineGradDark)" stroke-width="3.5" stroke-linecap="round" filter="url(#sietSplineGlowDark)"/>

                    <!-- Spline Vertex Dots -->
                    <circle cx="81" cy="100" r="4.5" fill="#ffffff" stroke="#00b364" stroke-width="2.5"/>
                    <circle cx="186" cy="85" r="4.5" fill="#ffffff" stroke="#00b364" stroke-width="2.5"/>
                    <circle cx="291" cy="62" r="4.5" fill="#ffffff" stroke="#00b364" stroke-width="2.5"/>
                    <circle cx="396" cy="38" r="6.5" fill="#f3c515" stroke="#ffffff" stroke-width="2.5"/>
                  </svg>
                </div>

                <!-- Bottom Highlights Strip -->
                <div class="siet-chart-kpi-ribbon siet-yw-kpi-ribbon">
                  <div class="siet-chart-kpi-chip">
                    <span class="siet-chart-kpi-dot" style="background:#55eb99;"></span>
                    <span class="siet-chart-kpi-lbl">Highest CTC:</span>
                    <strong class="siet-chart-kpi-val">₹33 LPA</strong>
                  </div>
                  <div class="siet-chart-kpi-chip">
                    <span class="siet-chart-kpi-dot" style="background:#f3c515;"></span>
                    <span class="siet-chart-kpi-lbl">Recruiter Partners:</span>
                    <strong class="siet-chart-kpi-val">213 Visited</strong>
                  </div>
                  <div class="siet-chart-kpi-chip">
                    <span class="siet-chart-kpi-dot" style="background:#69f0ae;"></span>
                    <span class="siet-chart-kpi-lbl">Total Campus Offers:</span>
                    <strong class="siet-chart-kpi-val">663 Offers</strong>
                  </div>
                </div>
              </div>
              <div class="siet-vm-card-footer">
                <span>Escalating multi-year institutional recruitment milestones.</span>
                <i></i>
              </div>
            </article>

          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════════
           3. TOP RECRUITERS & INDUSTRY PARTNERS (Interactive Showcase)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-tr-section">
        <div class="siet-tr-shell">
          <!-- Header -->
          <div class="siet-tr-header-box">
            <div class="siet-tr-kicker"><i></i> VALUED CORPORATE NETWORK</div>
            <h2 class="siet-tr-title">Top <em>Recruiters &amp; Industry Partners</em></h2>
            <p class="siet-tr-subtitle">Over 213+ multinational corporations, product engineering giants, and global IT consulting firms recruit every year from Sri Shakthi.</p>
          </div>

          <!-- Institutional Milestone Strip -->
          <div class="siet-tr-stats-bar">
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">213</span>
              <span class="siet-tr-sbar-lbl">Recruiter Partners</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">15+</span>
              <span class="siet-tr-sbar-lbl">Fortune 500 MNCs</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">₹33 LPA</span>
              <span class="siet-tr-sbar-lbl">Marquee CTC</span>
            </div>
            <div class="siet-tr-sbar-sep"></div>
            <div class="siet-tr-sbar-item">
              <span class="siet-tr-sbar-num">663</span>
              <span class="siet-tr-sbar-lbl">Campus Offers</span>
            </div>
          </div>

          <!-- Single Marquee Track with Hover Pause & Card Lift -->
          <div class="siet-tr-marquee-container">
            <div class="siet-tr-marquee-wrap" aria-label="Top Placement Recruiters Showcase">
              <div class="siet-tr-track">
                ${marqueeSingleHtml}
                ${marqueeSingleHtml}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════════
           4. THE PLACEMENT JOURNEY (Structured Career Roadmap)
           ══════════════════════════════════════════════════════════ -->
      <section class="siet-pj-section" style="background:#f8fbf8; padding:64px 20px 72px; width:100%; box-sizing:border-box;">
        <div class="siet-pj-shell" style="max-width:1240px; margin:0 auto; box-sizing:border-box;">
          <div class="siet-pj-header" style="text-align:center; max-width:780px; margin:0 auto 40px;">
            <span class="siet-pj-kicker" style="color:#00854a; font-family:'Plus Jakarta Sans',sans-serif; font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; margin-bottom:8px; display:inline-block;">CAREER DEVELOPMENT ROADMAP</span>
            <h2 class="siet-pj-title" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:clamp(26px, 2.5vw, 36px); font-weight:800; color:#00281b; margin:0 0 12px; letter-spacing:-0.02em; line-height:1.25;">The Placement <em style="font-family:'Playfair Display',Georgia,serif; font-style:italic; font-weight:600; color:#00854a;">Journey</em></h2>
            <p class="siet-pj-desc" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:15px; line-height:1.65; color:#475569; margin:0 auto;">A structured, continuous 4-year training and mentorship programme that guides each student from foundational problem solving to corporate placement success.</p>
          </div>

          <!-- 6 Steps Interactive Pathway: 3 in First Line, 3 in Second Line -->
          <div class="siet-pj-grid siet-pj-steps-grid" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:24px; margin-bottom:36px; width:100%; box-sizing:border-box;">
            
            <!-- 01: Training & Skills -->
            <div class="siet-pj-card" style="position:relative; background:#ffffff; border:1.5px solid #dce8e0; border-top:4px solid #005a36; border-radius:16px; padding:30px 22px 24px; display:flex; flex-direction:column; align-items:center; text-align:center; box-shadow:0 4px 18px rgba(0,40,27,0.05); box-sizing:border-box;">
              <span class="siet-pj-step-num" style="position:absolute; top:14px; right:16px; font-family:'Plus Jakarta Sans',sans-serif; font-weight:800; font-size:11.5px; color:#005a36; background:#eef6f0; padding:3px 9px; border-radius:12px; border:1px solid #d2ebd9;">01</span>
              <div class="siet-pj-icon" style="width:52px; height:52px; border-radius:50%; background:#f1f8ee; border:1.5px solid #00854a; color:#005a36; display:grid; place-items:center; margin-bottom:16px;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 class="siet-pj-card-title" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:18px; font-weight:800; color:#00281b; margin:0 0 10px; line-height:1.3;">Training &amp; Skills</h3>
              <p class="siet-pj-card-desc" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:13.5px; color:#334155; line-height:1.55; margin:0 0 18px; flex:1; font-weight:500;">Domain foundations, core engineering concepts &amp; hands-on technical labs.</p>
              <span class="siet-pj-pill" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:11.5px; font-weight:800; padding:6px 14px; border-radius:20px; background:#eef6f0; color:#005a36; border:1px solid #d2ebd9; display:inline-block;">Semester 3–4</span>
            </div>

            <!-- 02: Aptitude Prep -->
            <div class="siet-pj-card" style="position:relative; background:#ffffff; border:1.5px solid #dce8e0; border-top:4px solid #005a36; border-radius:16px; padding:30px 22px 24px; display:flex; flex-direction:column; align-items:center; text-align:center; box-shadow:0 4px 18px rgba(0,40,27,0.05); box-sizing:border-box;">
              <span class="siet-pj-step-num" style="position:absolute; top:14px; right:16px; font-family:'Plus Jakarta Sans',sans-serif; font-weight:800; font-size:11.5px; color:#005a36; background:#eef6f0; padding:3px 9px; border-radius:12px; border:1px solid #d2ebd9;">02</span>
              <div class="siet-pj-icon" style="width:52px; height:52px; border-radius:50%; background:#f1f8ee; border:1.5px solid #00854a; color:#005a36; display:grid; place-items:center; margin-bottom:16px;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
              </div>
              <h3 class="siet-pj-card-title" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:18px; font-weight:800; color:#00281b; margin:0 0 10px; line-height:1.3;">Aptitude Prep</h3>
              <p class="siet-pj-card-desc" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:13.5px; color:#334155; line-height:1.55; margin:0 0 18px; flex:1; font-weight:500;">Quantitative problem solving, logical reasoning &amp; soft skills mastery.</p>
              <span class="siet-pj-pill" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:11.5px; font-weight:800; padding:6px 14px; border-radius:20px; background:#eef6f0; color:#005a36; border:1px solid #d2ebd9; display:inline-block;">Semester 5</span>
            </div>

            <!-- 03: Technical Mastery -->
            <div class="siet-pj-card" style="position:relative; background:#ffffff; border:1.5px solid #dce8e0; border-top:4px solid #005a36; border-radius:16px; padding:30px 22px 24px; display:flex; flex-direction:column; align-items:center; text-align:center; box-shadow:0 4px 18px rgba(0,40,27,0.05); box-sizing:border-box;">
              <span class="siet-pj-step-num" style="position:absolute; top:14px; right:16px; font-family:'Plus Jakarta Sans',sans-serif; font-weight:800; font-size:11.5px; color:#005a36; background:#eef6f0; padding:3px 9px; border-radius:12px; border:1px solid #d2ebd9;">03</span>
              <div class="siet-pj-icon" style="width:52px; height:52px; border-radius:50%; background:#f1f8ee; border:1.5px solid #00854a; color:#005a36; display:grid; place-items:center; margin-bottom:16px;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
              </div>
              <h3 class="siet-pj-card-title" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:18px; font-weight:800; color:#00281b; margin:0 0 10px; line-height:1.3;">Technical Mastery</h3>
              <p class="siet-pj-card-desc" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:13.5px; color:#334155; line-height:1.55; margin:0 0 18px; flex:1; font-weight:500;">Advanced algorithms, system design, coding sprints &amp; project bootcamps.</p>
              <span class="siet-pj-pill" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:11.5px; font-weight:800; padding:6px 14px; border-radius:20px; background:#eef6f0; color:#005a36; border:1px solid #d2ebd9; display:inline-block;">Semester 6</span>
            </div>

            <!-- 04: Mock Interviews -->
            <div class="siet-pj-card" style="position:relative; background:#ffffff; border:1.5px solid #dce8e0; border-top:4px solid #005a36; border-radius:16px; padding:30px 22px 24px; display:flex; flex-direction:column; align-items:center; text-align:center; box-shadow:0 4px 18px rgba(0,40,27,0.05); box-sizing:border-box;">
              <span class="siet-pj-step-num" style="position:absolute; top:14px; right:16px; font-family:'Plus Jakarta Sans',sans-serif; font-weight:800; font-size:11.5px; color:#005a36; background:#eef6f0; padding:3px 9px; border-radius:12px; border:1px solid #d2ebd9;">04</span>
              <div class="siet-pj-icon" style="width:52px; height:52px; border-radius:50%; background:#f1f8ee; border:1.5px solid #00854a; color:#005a36; display:grid; place-items:center; margin-bottom:16px;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              </div>
              <h3 class="siet-pj-card-title" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:18px; font-weight:800; color:#00281b; margin:0 0 10px; line-height:1.3;">Mock Interviews</h3>
              <p class="siet-pj-card-desc" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:13.5px; color:#334155; line-height:1.55; margin:0 0 18px; flex:1; font-weight:500;">Simulated technical panels, HR rounds and individual feedback from industry leaders.</p>
              <span class="siet-pj-pill" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:11.5px; font-weight:800; padding:6px 14px; border-radius:20px; background:#eef6f0; color:#005a36; border:1px solid #d2ebd9; display:inline-block;">Semester 6–7</span>
            </div>

            <!-- 05: Company Drives -->
            <div class="siet-pj-card" style="position:relative; background:#ffffff; border:1.5px solid #dce8e0; border-top:4px solid #005a36; border-radius:16px; padding:30px 22px 24px; display:flex; flex-direction:column; align-items:center; text-align:center; box-shadow:0 4px 18px rgba(0,40,27,0.05); box-sizing:border-box;">
              <span class="siet-pj-step-num" style="position:absolute; top:14px; right:16px; font-family:'Plus Jakarta Sans',sans-serif; font-weight:800; font-size:11.5px; color:#005a36; background:#eef6f0; padding:3px 9px; border-radius:12px; border:1px solid #d2ebd9;">05</span>
              <div class="siet-pj-icon" style="width:52px; height:52px; border-radius:50%; background:#f1f8ee; border:1.5px solid #00854a; color:#005a36; display:grid; place-items:center; margin-bottom:16px;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
              </div>
              <h3 class="siet-pj-card-title" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:18px; font-weight:800; color:#00281b; margin:0 0 10px; line-height:1.3;">Company Drives</h3>
              <p class="siet-pj-card-desc" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:13.5px; color:#334155; line-height:1.55; margin:0 0 18px; flex:1; font-weight:500;">On-campus recruitment drives by Fortune 500 &amp; top product tech companies.</p>
              <span class="siet-pj-pill" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:11.5px; font-weight:800; padding:6px 14px; border-radius:20px; background:#eef6f0; color:#005a36; border:1px solid #d2ebd9; display:inline-block;">Semester 7</span>
            </div>

            <!-- 06: Career Success -->
            <div class="siet-pj-card is-final" style="position:relative; background:linear-gradient(180deg, #ffffff 0%, #fffdf4 100%); border:2px solid #f3c515; border-top:4px solid #f3c515; border-radius:16px; padding:30px 22px 24px; display:flex; flex-direction:column; align-items:center; text-align:center; box-shadow:0 6px 20px rgba(243,197,21,0.18); box-sizing:border-box;">
              <span class="siet-pj-step-num" style="position:absolute; top:14px; right:16px; font-family:'Plus Jakarta Sans',sans-serif; font-weight:800; font-size:11.5px; color:#00281b; background:#fef08a; padding:3px 9px; border-radius:12px; border:1px solid #fde047;">06</span>
              <div class="siet-pj-icon" style="width:52px; height:52px; border-radius:50%; background:#f3c515; border:1.5px solid #e0b40b; color:#00281b; display:grid; place-items:center; margin-bottom:16px;">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
              </div>
              <h3 class="siet-pj-card-title" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:18px; font-weight:800; color:#00281b; margin:0 0 10px; line-height:1.3;">Career Success</h3>
              <p class="siet-pj-card-desc" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:13.5px; color:#334155; line-height:1.55; margin:0 0 18px; flex:1; font-weight:500;">Offer rollouts, marquee salary packages &amp; global career journeys launched.</p>
              <span class="siet-pj-pill" style="font-family:'Plus Jakarta Sans',sans-serif; font-size:11.5px; font-weight:800; padding:6px 14px; border-radius:20px; background:#f3c515; color:#00281b; border:1px solid #f3c515; display:inline-block;">Offer Rolled Out</span>
            </div>

          </div>

          <!-- Bottom Action Buttons -->
          <div class="siet-pj-actions" style="display:flex; align-items:center; justify-content:center; gap:16px; margin-top:10px;">
            <a href="mailto:placements@siet.ac.in" class="siet-tmpl-btn-outline">Contact Placement Cell</a>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════════════
           5. INTERACTIVE MODAL FOR ALL 5 PLACEMENT RECORD SHEETS
           ══════════════════════════════════════════════════════════ -->
      <div class="siet-records-modal" id="siet-records-modal" style="display:none;" role="dialog" aria-modal="true">
        <div class="siet-records-modal-backdrop js-close-records-modal"></div>
        <div class="siet-records-modal-dialog">
          <div class="siet-records-modal-header">
            <div class="siet-records-modal-title-box">
              <span class="siet-records-modal-sub">SRI SHAKTHI INSTITUTE OF ENGINEERING &amp; TECHNOLOGY (TNEA CODE 2727)</span>
              <h3 id="siet-modal-sheet-title">Sheet 1: Prime Platinum &amp; High Diamond Offers (₹10 – ₹33 LPA)</h3>
            </div>
            <div class="siet-records-modal-actions">
              <a href="/brand/placement-records/sheet-1-prime-offers-10-33-lpa.jpg" id="siet-modal-open-newtab" target="_blank" rel="noopener noreferrer" class="siet-records-modal-action-btn" title="Open full-resolution image in new tab">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                <span>Full Resolution</span>
              </a>
              <button type="button" class="siet-records-modal-close js-close-records-modal" aria-label="Close modal">✕</button>
            </div>
          </div>

          <!-- Sheet Switcher Tabs -->
          <div class="siet-records-modal-nav">
            <button type="button" class="siet-records-modal-tab is-active" data-sheet-idx="0">Sheet 1 (₹10–33L)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="1">Sheet 2 (₹6–10L)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="2">Sheet 3 (₹4–6L Pt.1)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="3">Sheet 4 (₹4–6L Pt.2)</button>
            <button type="button" class="siet-records-modal-tab" data-sheet-idx="4">Sheet 5 (213 Companies)</button>
          </div>

          <!-- Modal Image Body with Prev/Next Controls -->
          <div class="siet-records-modal-body">
            <button type="button" class="siet-records-nav-btn is-prev" id="siet-modal-prev-btn" aria-label="Previous Sheet">‹</button>
            <div class="siet-records-img-container">
              <img id="siet-modal-active-img" src="/brand/placement-records/sheet-1-prime-offers-10-33-lpa.jpg" alt="Official Placement Record Sheet">
            </div>
            <button type="button" class="siet-records-nav-btn is-next" id="siet-modal-next-btn" aria-label="Next Sheet">›</button>
          </div>

          <!-- Modal Footer Meta -->
          <div class="siet-records-modal-footer">
            <p id="siet-modal-sheet-desc">Contains S.No 1 to 62: Gowtham G (Trilogy ₹33L), Siv Raam Krishnan (Trilogy ₹33L), Increff (₹22L · 5 Offers), Presidio, Zenx AI, Hyperverge, TCS, Aivar Innovation, Mr. Cooper, Reltio, Linarc, Centillion Labs, etc.</p>
            <span class="siet-records-counter" id="siet-modal-sheet-counter">Sheet 1 of 5</span>
          </div>
        </div>
      </div>
    </main>
  `;
}

// ── Bind Interactive Events ──
let placementEventsBound = false;

export function bindPlacementEvents($, $$) {
  // If on entrepreneurship page, initialize its events
  if (window.location.hash.includes('entrepreneurship')) {
    initEntrepreneurshipEvents();
  }

  // Animate dynamic KPIs when in viewport
  const kpiEl = document.getElementById('siet-kpi-interactive-area');
  if (kpiEl) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.js-counter').forEach(el => {
            if (el.dataset.counted === 'true') return;
            el.dataset.counted = 'true';
            const to = Number(el.dataset.to) || 0;
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            const start = performance.now();
            const duration = 1650;
            function tick(now) {
              const p = Math.min((now - start) / duration, 1);
              const v = Math.round(to * (1 - Math.pow(1 - p, 3)));
              el.textContent = prefix + v.toLocaleString('en-IN') + suffix;
              if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });
    observer.observe(kpiEl);
  }

  if (placementEventsBound) return;
  placementEventsBound = true;

  document.addEventListener('click', (e) => {
    // Placement Stat Card Click Handler (filters superstars marquee)
    const kpiCard = e.target.closest('.js-kpi-card');
    if (kpiCard) {
      const filterTier = kpiCard.dataset.filter;

      document.querySelectorAll('.js-kpi-card').forEach(c => c.classList.remove('is-active'));
      kpiCard.classList.add('is-active');

      if (filterTier) {
        if (filterTier === 'all') {
          const allTab = document.querySelector('.siet-sp-filter-tab[data-tier="all"]');
          if (allTab) allTab.click();
        } else {
          const matchingTab = document.querySelector(`.siet-sp-filter-tab[data-tier="${filterTier}"]`);
          if (matchingTab) {
            matchingTab.click();
          } else {
            updateSuperstarsMarquee(filterTier);
          }
        }
      }
      return;
    }

    // Open Placement Record Sheet Modal
    const openSheetBtn = e.target.closest('.js-open-records-sheet');
    if (openSheetBtn) {
      const sheetIdx = parseInt(openSheetBtn.dataset.sheet || '0', 10);
      const modal = document.getElementById('siet-records-modal');
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        switchPlacementRecordSheet(sheetIdx);
      }
      return;
    }

    // Close Placement Record Sheet Modal
    if (e.target.closest('.js-close-records-modal')) {
      const modal = document.getElementById('siet-records-modal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
      return;
    }

    // Switch Sheet via Tabs
    const modalTab = e.target.closest('.siet-records-modal-tab');
    if (modalTab) {
      const idx = parseInt(modalTab.dataset.sheetIdx || '0', 10);
      switchPlacementRecordSheet(idx);
      return;
    }

    // Prev / Next Buttons
    if (e.target.closest('#siet-modal-prev-btn')) {
      switchPlacementRecordSheet(activeRecordSheetIdx - 1);
      return;
    }
    if (e.target.closest('#siet-modal-next-btn')) {
      switchPlacementRecordSheet(activeRecordSheetIdx + 1);
      return;
    }

    // Superstar Tier Filter Tabs
    const ftab = e.target.closest('.siet-sp-filter-tab');
    if (ftab) {
      const tier = ftab.dataset.tier;
      if (!tier) return;
      document.querySelectorAll('.siet-sp-filter-tab').forEach(t => {
        const isMatch = t.dataset.tier === tier;
        t.classList.toggle('is-active', isMatch);
        if (isMatch) {
          if (!t.querySelector('.siet-sp-ftab-dot')) {
            t.insertAdjacentHTML('afterbegin', '<span class="siet-sp-ftab-dot"></span> ');
          }
        } else {
          const dot = t.querySelector('.siet-sp-ftab-dot');
          if (dot) dot.remove();
        }
      });
      updateSuperstarsMarquee(tier);
      return;
    }

    // Year tabs & Graph column clicks
    const yearTarget = e.target.closest('.siet-tmpl-ytab') || e.target.closest('.siet-chart-col-group');
    if (yearTarget) {
      const year = yearTarget.dataset.year;
      if (!year) return;

      // Update Year Tabs
      document.querySelectorAll('.siet-tmpl-ytab').forEach(t => {
        const isMatch = t.dataset.year === year;
        t.classList.toggle('is-active', isMatch);
        t.innerHTML = isMatch ? '<span class="siet-tmpl-ytab-dot"></span> ' + t.dataset.year : t.dataset.year;
      });

      // Update Chart Column highlight
      document.querySelectorAll('.siet-chart-col-group').forEach(cg => {
        const isMatch = cg.dataset.year === year;
        cg.classList.toggle('is-active', isMatch);
        const colBg = cg.querySelector('.siet-chart-col-bg');
        if (colBg) {
          colBg.setAttribute('fill', isMatch ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.03)');
          colBg.setAttribute('stroke', isMatch ? 'rgba(243,197,21,0.5)' : 'none');
        }
      });

      // Update Stats & Tag badges with brief pulse animation
      const data = placementDataYears[year];
      if (data) {
        const statsGrid = document.querySelector('.siet-tmpl-stats-grid');
        if (statsGrid) {
          statsGrid.style.opacity = '0.4';
          statsGrid.style.transform = 'translateY(3px)';
          setTimeout(() => {
            const valPlaced = document.getElementById('tmpl-val-placed');
            const valCompanies = document.getElementById('tmpl-val-companies');
            const valHighest = document.getElementById('tmpl-val-highest');
            const valAvg = document.getElementById('tmpl-val-average');
            const valMult = document.getElementById('tmpl-val-multiple');
            const valRate = document.getElementById('tmpl-val-rate');

            const tagPlaced = document.getElementById('tmpl-tag-placed');
            const tagCompanies = document.getElementById('tmpl-tag-companies');
            const tagHighest = document.getElementById('tmpl-tag-highest');
            const tagAvg = document.getElementById('tmpl-tag-average');
            const tagMult = document.getElementById('tmpl-tag-multiple');
            const tagRate = document.getElementById('tmpl-tag-rate');

            if (valPlaced) valPlaced.textContent = data.placed;
            if (valCompanies) valCompanies.textContent = data.companies;
            if (valHighest) valHighest.textContent = data.highest;
            if (valAvg) valAvg.textContent = data.average;
            if (valMult) valMult.textContent = data.multiple;
            if (valRate) valRate.textContent = data.rate;

            if (tagPlaced && data.tags) tagPlaced.textContent = data.tags.placed;
            if (tagCompanies && data.tags) tagCompanies.textContent = data.tags.companies;
            if (tagHighest && data.tags) tagHighest.textContent = data.tags.highest;
            if (tagAvg && data.tags) tagAvg.textContent = data.tags.average;
            if (tagMult && data.tags) tagMult.textContent = data.tags.multiple;
            if (tagRate && data.tags) tagRate.textContent = data.tags.rate;

            statsGrid.style.opacity = '1';
            statsGrid.style.transform = 'translateY(0)';
          }, 120);
        }
      }
      return;
    }
  });

  // Keyboard navigation for modal
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('siet-records-modal');
    if (!modal || modal.style.display === 'none') return;
    if (e.key === 'Escape') {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
      switchPlacementRecordSheet(activeRecordSheetIdx - 1);
    } else if (e.key === 'ArrowRight') {
      switchPlacementRecordSheet(activeRecordSheetIdx + 1);
    }
  });
}
