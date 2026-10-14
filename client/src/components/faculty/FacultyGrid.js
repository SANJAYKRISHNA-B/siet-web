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
    <div class="faculty-load-more-wrapper" id="faculty-load-more-wrapper" style="display: none;">
      <button type="button" class="faculty-load-more-btn" id="faculty-load-more-btn" aria-label="Load more faculty members">
        <span>Load More Faculty</span>
        <span class="load-more-count" id="faculty-load-more-count"></span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </div>
    <div class="faculty-no-results" id="faculty-no-results" style="display: none;">
      <div class="no-results-icon">🔍</div>
      <h3>No matching faculty found</h3>
      <p>Try refining your search keyword or clearing the filters.</p>
      <button type="button" class="button button-outline button-sm" id="faculty-reset-filter-btn">Reset Search & Filters</button>
    </div>
  `;
}
