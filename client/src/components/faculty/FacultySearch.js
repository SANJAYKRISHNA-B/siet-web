/**
 * FacultySearch Component
 * Provides live search input with clear button and real-time count
 */

export function renderFacultySearch(totalCount) {
  return `
    <div class="faculty-search-container">
      <div class="faculty-search-box">
        <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          id="faculty-live-search" 
          class="faculty-search-input" 
          placeholder="Search by faculty name, qualification, specialization, or AU-FIN..." 
          aria-label="Search faculty directory"
          autocomplete="off"
        />
        <button type="button" id="faculty-search-clear" class="faculty-search-clear-btn" aria-label="Clear search" style="display: none;">
          ✕
        </button>
      </div>
      <div class="faculty-count-badge">
        Showing <span id="faculty-visible-count">${totalCount}</span> of <span id="faculty-total-count">${totalCount}</span> faculty members
      </div>
    </div>
  `;
}
