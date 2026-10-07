// Lab Pagination & Sibling Navigator Component

import { getNextLab, getPrevLab } from '../../../data/labData.js';

export function renderLabPagination(lab) {
  const prev = getPrevLab(lab.slug);
  const next = getNextLab(lab.slug);

  return `
    <nav class="lab-pagination-nav" aria-label="Laboratory Pagination">
      <div class="lab-shell">
        <div class="lab-pagination-grid">
          
          <!-- Previous Lab Link -->
          <a href="#/labs/${prev.slug}" class="pagination-card prev-card" aria-label="Previous Lab: ${prev.name}">
            <span class="pagination-sub">← PREVIOUS LABORATORY</span>
            <div class="pagination-main">
              <span class="pagination-num">${prev.id}</span>
              <strong class="pagination-title">${prev.name}</strong>
            </div>
            <span class="pagination-desc">${prev.shortDesc}</span>
          </a>

          <!-- Directory Link -->
          <div class="pagination-center">
            <a href="#/labs" class="all-labs-pill-btn">
              <span class="pill-grid-icon" aria-hidden="true">▦</span>
              <span>All 8 Laboratories</span>
            </a>
          </div>

          <!-- Next Lab Link -->
          <a href="#/labs/${next.slug}" class="pagination-card next-card" aria-label="Next Lab: ${next.name}">
            <span class="pagination-sub">NEXT LABORATORY →</span>
            <div class="pagination-main">
              <strong class="pagination-title">${next.name}</strong>
              <span class="pagination-num">${next.id}</span>
            </div>
            <span class="pagination-desc">${next.shortDesc}</span>
          </a>

        </div>
      </div>
    </nav>
  `;
}
