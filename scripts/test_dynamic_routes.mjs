import { homePage } from '../client/src/pages/Home/HomePage.js';
import { internalPage } from '../client/src/pages/Campus/CampusPages.js';
import { departmentPage } from '../client/src/pages/Academics/DepartmentDetailPage.js';
import { getLabBySlug } from '../client/src/data/labData.js';
import { labDetailPage } from '../client/src/pages/Labs/LabDetailPage.js';

// Setup mock window/location/document
globalThis.window = { location: { hash: '#/', search: '', pathname: '/' } };
globalThis.location = globalThis.window.location;
globalThis.document = { body: { classList: { add() {}, remove() {}, contains() { return false; } } } };

const routes = [
  'privacy-policy',
  'terms',
  'sitemap',
  'special-labs',
  'placements/entrepreneurship',
  'department/computer-science-and-engineering',
  'department/cse-cyber-security',
  'department/agricultural-engineering',
  'department/cad-cam',
  'department/management-studies',
  'department/computer-applications',
  'labs/ai-lab',
  'labs/ar-vr-lab',
  'labs/cyber-cloud-lab',
  'labs/embedded-systems-lab',
  'labs/iot-lab',
  'labs/pcb-design-assembly-lab',
  'labs/robotics-automation-lab',
  'labs/vlsi-lab',
  'training',
  'research',
  'innovation',
  'centres-of-excellence',
  'alumni'
];

for (const r of routes) {
  try {
    let html;
    if (r.startsWith('department/')) {
      html = departmentPage(r.replace(/^department\//, ''));
    } else if (r.startsWith('labs/')) {
      html = labDetailPage(r.replace(/^labs\//, ''));
    } else {
      html = internalPage(r);
    }
    console.log(`PASS: ${r} -> ${html.length} chars`);
  } catch(e) {
    console.error(`FAIL: ${r} -> ${e.message}`);
  }
}
