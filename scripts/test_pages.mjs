// Test script to verify all page generators produce clean HTML without throwing
import { homePage } from '../client/src/pages/Home/HomePage.js';
import { 
  visionPage, coreBeliefsPage, programOutcomesPage, coreValuesPage, 
  philosophyPage, chairmanPage, principalPage 
} from '../client/src/pages/About/AboutPages.js';
import { programmesPage } from '../client/src/pages/Academics/ProgrammesPage.js';
import { departmentsPage } from '../client/src/pages/Academics/DepartmentsPage.js';
import { departmentPage } from '../client/src/pages/Academics/DepartmentDetailPage.js';
import { curriculumPage } from '../client/src/pages/Academics/CurriculumPage.js';
import { academicCalendarPage } from '../client/src/pages/Academics/AcademicCalendarPage.js';
import { academicOverviewPage } from '../client/src/pages/Academics/AcademicOverviewPage.js';
import { libraryPage } from '../client/src/pages/Academics/LibraryPage.js';
import { internalPage } from '../client/src/pages/Campus/CampusPages.js';
import { applyPortalPage } from '../client/src/pages/Admissions/ApplyPortalPage.js';
import { careersPage } from '../client/src/pages/Careers/CareersPage.js';
import { contactPage } from '../client/src/pages/Contact/ContactPage.js';
import { coePortalPage } from '../client/src/pages/COE/CoePages.js';
import { 
  naacPage, nbaPage, nirfPage, iqacPage, ariiaPage, 
  mandatoryDisclosurePage, statutoryDeclarationPage, governancePage, 
  accreditationsOverviewPage 
} from '../client/src/pages/Accreditation/AccreditationPages.js';
import { placementsPortalPage } from '../client/src/pages/Placements/PlacementsPages.js';
import { labsPage } from '../client/src/pages/Labs/LabsPage.js';
import { aiLabPage } from '../client/src/pages/Labs/AILab.js';
import { cyberCloudLabPage } from '../client/src/pages/Labs/CyberCloudLab.js';
import { vlsiLabPage } from '../client/src/pages/Labs/VLSILab.js';
import { embeddedSystemsLabPage } from '../client/src/pages/Labs/EmbeddedSystemsLab.js';
import { iotLabPage } from '../client/src/pages/Labs/IoTLab.js';
import { arVrLabPage } from '../client/src/pages/Labs/ARVRLab.js';
import { pcbDesignAssemblyLabPage } from '../client/src/pages/Labs/PCBDesignAssemblyLab.js';
import { roboticsAutomationLabPage } from '../client/src/pages/Labs/RoboticsAutomationLab.js';
import { renderMainLayout } from '../client/src/layouts/MainLayout.js';
import { renderApplyLayout } from '../client/src/layouts/ApplyLayout.js';

// Mock browser globals for SSR-like test execution
globalThis.window = {
  location: { hash: '#/', search: '', pathname: '/' }
};
globalThis.location = globalThis.window.location;
globalThis.document = {
  body: { classList: { add() {}, remove() {}, contains() { return false; } } }
};

const pagesToTest = [
  { name: 'Home Page', fn: () => homePage(), layout: 'main' },
  { name: 'Vision & Mission', fn: () => visionPage(), layout: 'main' },
  { name: 'Core Beliefs', fn: () => coreBeliefsPage(), layout: 'main' },
  { name: 'Program Outcomes', fn: () => programOutcomesPage(), layout: 'main' },
  { name: 'Core Values', fn: () => coreValuesPage(), layout: 'main' },
  { name: 'Philosophy', fn: () => philosophyPage(), layout: 'main' },
  { name: 'Chairman Message', fn: () => chairmanPage(), layout: 'main' },
  { name: 'Principal Message', fn: () => principalPage(), layout: 'main' },
  { name: 'Programmes Page', fn: () => programmesPage(), layout: 'main' },
  { name: 'Departments Page', fn: () => departmentsPage(), layout: 'main' },
  { name: 'Dept Detail (CSE)', fn: () => departmentPage('Computer Science & Engineering'), layout: 'main' },
  { name: 'Dept Detail (AI&DS)', fn: () => departmentPage('Artificial Intelligence and Data Science'), layout: 'main' },
  { name: 'Curriculum Page', fn: () => curriculumPage(), layout: 'main' },
  { name: 'Academic Calendar', fn: () => academicCalendarPage(), layout: 'main' },
  { name: 'Academic Overview', fn: () => academicOverviewPage(), layout: 'main' },
  { name: 'Library Page', fn: () => libraryPage(), layout: 'main' },
  { name: 'Campus Life', fn: () => internalPage('campus-life'), layout: 'main' },
  { name: 'Facilities', fn: () => internalPage('facilities'), layout: 'main' },
  { name: 'Hostel', fn: () => internalPage('hostel'), layout: 'main' },
  { name: 'Transport', fn: () => internalPage('transport'), layout: 'main' },
  { name: 'Sports', fn: () => internalPage('sports'), layout: 'main' },
  { name: 'Clubs', fn: () => internalPage('clubs'), layout: 'main' },
  { name: 'NCC', fn: () => internalPage('ncc'), layout: 'main' },
  { name: 'Apply Portal (Enquiry)', fn: () => applyPortalPage('enquiry'), layout: 'apply' },
  { name: 'Apply Portal (Referral)', fn: () => applyPortalPage('referral'), layout: 'apply' },
  { name: 'Careers Page', fn: () => careersPage(), layout: 'main' },
  { name: 'Contact Page', fn: () => contactPage(), layout: 'main' },
  { name: 'COE Portal (About)', fn: () => coePortalPage('about'), layout: 'main' },
  { name: 'COE Portal (Forms)', fn: () => coePortalPage('forms'), layout: 'main' },
  { name: 'COE Portal (Regulations)', fn: () => coePortalPage('regulations'), layout: 'main' },
  { name: 'NAAC Page', fn: () => naacPage(), layout: 'main' },
  { name: 'NBA Page', fn: () => nbaPage(), layout: 'main' },
  { name: 'NIRF Page', fn: () => nirfPage(), layout: 'main' },
  { name: 'IQAC Page', fn: () => iqacPage(), layout: 'main' },
  { name: 'ARIIA Page', fn: () => ariiaPage(), layout: 'main' },
  { name: 'Mandatory Disclosure', fn: () => mandatoryDisclosurePage(), layout: 'main' },
  { name: 'Statutory Declaration', fn: () => statutoryDeclarationPage(), layout: 'main' },
  { name: 'Governance Page', fn: () => governancePage('all'), layout: 'main' },
  { name: 'Accreditation Overview', fn: () => accreditationsOverviewPage(), layout: 'main' },
  { name: 'Placements Portal', fn: () => placementsPortalPage('placements'), layout: 'main' },
  { name: 'Entrepreneurship Portal', fn: () => placementsPortalPage('entrepreneurship'), layout: 'main' },
  { name: 'Labs Directory Page', fn: () => labsPage(), layout: 'main' },
  { name: '01 AI Lab Page', fn: () => aiLabPage(), layout: 'main' },
  { name: '02 Cyber & Cloud Lab Page', fn: () => cyberCloudLabPage(), layout: 'main' },
  { name: '03 VLSI Lab Page', fn: () => vlsiLabPage(), layout: 'main' },
  { name: '04 Embedded Systems Lab Page', fn: () => embeddedSystemsLabPage(), layout: 'main' },
  { name: '05 IoT Lab Page', fn: () => iotLabPage(), layout: 'main' },
  { name: '06 AR & VR Lab Page', fn: () => arVrLabPage(), layout: 'main' },
  { name: '07 PCB Design Lab Page', fn: () => pcbDesignAssemblyLabPage(), layout: 'main' },
  { name: '08 Robotics Lab Page', fn: () => roboticsAutomationLabPage(), layout: 'main' }
];

let passed = 0;
let failed = 0;

for (const p of pagesToTest) {
  try {
    const html = p.fn();
    if (typeof html !== 'string' || html.length < 50) {
      throw new Error(`Output too short or not string (got ${typeof html}, len=${html?.length})`);
    }

    let fullHtml = '';
    if (p.layout === 'apply') {
      fullHtml = renderApplyLayout(html);
    } else {
      fullHtml = renderMainLayout(html, 'test');
    }

    if (!fullHtml.includes('institution-header') && !fullHtml.includes('apply-portal-header')) {
      throw new Error('Missing header in layout');
    }
    if (!fullHtml.includes('site-footer') && !fullHtml.includes('apply-card')) {
      throw new Error('Missing footer in layout');
    }

    // Check for accidental 'undefined' output in the HTML
    const undefinedMatches = (fullHtml.match(/>undefined<|="undefined"/g) || []).length;
    if (undefinedMatches > 0) {
      console.warn(`[WARN] ${p.name} contains ${undefinedMatches} instances of literal 'undefined' in markup`);
    }

    console.log(`✔ [PASS] ${p.name.padEnd(30)} -> ${html.length.toString().padStart(6)} chars (Full: ${fullHtml.length})`);
    passed++;
  } catch (err) {
    console.error(`✖ [FAIL] ${p.name}:`, err.message);
    failed++;
  }
}

console.log(`\n========================================`);
console.log(`Results: ${passed} PASSED, ${failed} FAILED across ${pagesToTest.length} pages.`);
console.log(`========================================`);

if (failed > 0) process.exit(1);
