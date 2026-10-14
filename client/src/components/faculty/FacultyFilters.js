/**
 * FacultyFilters Component
 * Filter pills for designation + Toggle for Cards vs Table View
 */

export function renderFacultyFilters() {
  return `
    <div class="faculty-controls-bar">
      <div class="faculty-filter-pills" role="tablist" aria-label="Filter by designation">
        <button type="button" class="faculty-filter-pill is-active" data-filter="all">All Faculty</button>
        <button type="button" class="faculty-filter-pill" data-filter="head">Head of Department</button>
        <button type="button" class="faculty-filter-pill" data-filter="professor">Professors</button>
        <button type="button" class="faculty-filter-pill" data-filter="associate">Associate Professors</button>
        <button type="button" class="faculty-filter-pill" data-filter="assistant">Assistant Professors</button>
      </div>

      <div class="faculty-view-toggle-wrapper">
        <span class="view-toggle-label">View:</span>
        <div class="faculty-view-toggle">
          <button type="button" id="toggle-cards-view" class="view-toggle-btn is-active" title="Card Grid View" aria-label="Switch to card view">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Cards</span>
          </button>
          <button type="button" id="toggle-table-view" class="view-toggle-btn" title="Official Compliance Table View" aria-label="Switch to official table view">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <span>Table</span>
          </button>
        </div>
      </div>
    </div>
  `;
}
