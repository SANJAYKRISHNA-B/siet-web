import { renderFacultyCard } from './FacultyCard.js';

/**
 * FacultyGrid Component
 * Renders the responsive grid container of cards with an empty state
 */

export function renderFacultyGrid(facultyList) {
  if (!facultyList || !facultyList.length) {
    return `
      <div class="faculty-empty-state">
        <div class="empty-icon">👥</div>
        <h3>Faculty Directory Updating</h3>
        <p>Faculty details for this department are being synchronized with official institution records.</p>
      </div>
    `;
  }

  const cardsHtml = facultyList.map(f => renderFacultyCard(f)).join('');

  return `
    <div class="faculty-cards-grid" id="faculty-cards-grid">
      ${cardsHtml}
    </div>
    <div class="faculty-pagination-wrapper" id="faculty-pagination-wrapper" style="display: none;" role="navigation" aria-label="Faculty directory pagination"></div>
    <div class="faculty-no-results" id="faculty-no-results" style="display: none;">
      <div class="no-results-icon">🔍</div>
      <h3>No matching faculty found</h3>
      <p>Try refining your search keyword or clearing the filters.</p>
      <button type="button" class="button button-outline button-sm" id="faculty-reset-filter-btn">Reset Search & Filters</button>
    </div>
  `;
}
