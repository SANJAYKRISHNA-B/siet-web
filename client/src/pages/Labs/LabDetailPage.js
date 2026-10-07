// Master Lab Detail Page Assembler — Streamlined, Essential Information Only

import { getLabBySlug, labsList } from '../../data/labData.js';
import { renderLabHero } from './components/LabHero.js';
import { renderLabOverview } from './components/LabOverview.js';
import { renderLabEquipment } from './components/LabEquipment.js';
import { renderLabProjects } from './components/LabProjects.js';
import { renderLabContact } from './components/LabContact.js';
import { renderLabPagination } from './components/LabPagination.js';

export function labDetailPage(slugOrLab) {
  const lab = typeof slugOrLab === 'object' && slugOrLab !== null
    ? slugOrLab
    : getLabBySlug(slugOrLab) || labsList[0];

  if (!lab) {
    return `
      <main class="lab-not-found-page">
        <div class="lab-shell">
          <div class="not-found-box reveal">
            <h1>Laboratory Not Found</h1>
            <p>The requested specialized laboratory profile does not exist.</p>
            <a href="#/labs" class="lab-btn lab-btn-primary">View All Laboratories →</a>
          </div>
        </div>
      </main>
    `;
  }

  return `
    <main class="lab-detail-page lab-page-${lab.slug}" style="--lab-accent: ${lab.accentColor};">
      ${renderLabHero(lab)}
      ${renderLabOverview(lab)}
      ${renderLabEquipment(lab)}
      ${renderLabProjects(lab)}
      ${renderLabContact(lab)}
      ${renderLabPagination(lab)}
    </main>
  `;
}
