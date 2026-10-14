import { getFacultyByDepartment, getFacultyById } from '../../data/faculty/index.js';
import { renderFacultySearch } from './FacultySearch.js';
import { renderFacultyFilters } from './FacultyFilters.js';
import { renderFacultyGrid } from './FacultyGrid.js';
import { renderFacultyModal } from './FacultyModal.js';

/**
 * Renders the complete Faculty Directory for a given department.
 */
export function renderFacultyDirectory(deptTitle, deptKey) {
  const facultyList = getFacultyByDepartment(deptTitle) || getFacultyByDepartment(deptKey) || [];
  const count = facultyList.length;

  // Build the official compliance table rows
  const defaultAvatar = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="60" height="75" viewBox="0 0 60 75" fill="#e8f5e9"><rect width="60" height="75" fill="#f0f7f2"/><circle cx="30" cy="25" r="14" fill="#167a39" opacity="0.3"/><path d="M10 68 C10 48, 50 48, 50 68 Z" fill="#167a39" opacity="0.3"/></svg>')}`;

  const tableRowsHtml = facultyList.map((f, idx) => {
    const photoSrc = f.photo || defaultAvatar;
    return `
      <tr class="faculty-table-row" data-id="${f.id}" data-designation="${f.designation.toLowerCase()}">
        <td class="center-align" style="font-weight: 600;">${idx + 1}</td>
        <td class="center-align">${f.auFin || '-'}</td>
        <td class="center-align">${f.aicteId || '-'}</td>
        <td>
          <strong>${f.name}</strong>
          <div style="font-size: 12px; color: #666; margin-top: 2px;">${f.qualification || ''}</div>
        </td>
        <td>
          <span class="table-desig-tag">${f.designation}</span>
        </td>
        <td>${f.department}</td>
        <td class="center-align faculty-photo-cell">
          <img 
            src="${photoSrc}" 
            alt="${f.name}" 
            class="faculty-passport-img" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='${defaultAvatar}';"
          />
        </td>
        <td class="center-align">
          <button type="button" class="table-view-btn" data-action="view-faculty-profile" data-faculty-id="${f.id}">
            View
          </button>
        </td>
      </tr>
    `;
  }).join('');

  return `
    <div class="siet-faculty-directory-wrapper" data-dept="${deptTitle}">
      <div class="faculty-directory-header">
        <div class="header-content">
          <span class="sub-badge">ACADEMIC DISTINCTION</span>
          <h2 class="directory-title">Faculty Directory &amp; Academic Profiles</h2>
          <p class="directory-intro">
            Meet the distinguished scholars, industry practitioners, and research mentors shaping future engineers and innovators at Sri Shakthi Institute of Engineering and Technology.
          </p>
        </div>
      </div>

      ${renderFacultySearch(count)}
      ${renderFacultyFilters()}

      <!-- Cards View -->
      <div id="faculty-view-cards-container" class="faculty-view-container is-active">
        ${renderFacultyGrid(facultyList)}
      </div>

      <!-- Official Compliance Table View -->
      <div id="faculty-view-table-container" class="faculty-view-container" style="display: none;">
        <div class="table-legend-banner">
          <span class="legend-icon">📋</span>
          <div>
            <strong>Anna University (AU-FIN) &amp; AICTE Official Faculty Roster</strong>
            <p>Official faculty roster maintaining statutory compliance under Anna University Chennai and AICTE norms.</p>
          </div>
        </div>
        <div class="dept-table-wrapper">
          <table class="dept-data-table faculty-profile-table">
            <thead>
              <tr>
                <th style="width: 55px;" class="center-align">S.No</th>
                <th style="width: 110px;" class="center-align">AU-FIN</th>
                <th style="width: 130px;" class="center-align">AICTE ID</th>
                <th>Faculty Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th style="width: 100px;" class="center-align">Photo<br><small style="font-size:11px; font-weight:normal;">(Passport)</small></th>
                <th style="width: 80px;" class="center-align">Profile</th>
              </tr>
            </thead>
            <tbody id="faculty-table-body">
              ${tableRowsHtml}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Modal Container -->
      <div id="faculty-modal-root"></div>
    </div>
  `;
}

/**
 * Binds interactive events for live search, filtering, view switching, and modals.
 */
export function bindFacultyDirectoryEvents($, $$) {
  const searchInput = $('#faculty-live-search');
  const clearBtn = $('#faculty-search-clear');
  const visibleCountEl = $('#faculty-visible-count');
  const totalCountEl = $('#faculty-total-count');
  const filterPills = $$('.faculty-filter-pill');
  const cardsGrid = $('#faculty-cards-grid');
  const noResultsEl = $('#faculty-no-results');
  const resetBtn = $('#faculty-reset-filter-btn');
  const modalRoot = $('#faculty-modal-root');

  const toggleCardsBtn = $('#toggle-cards-view');
  const toggleTableBtn = $('#toggle-table-view');
  const cardsContainer = $('#faculty-view-cards-container');
  const tableContainer = $('#faculty-view-table-container');

  if (!cardsContainer && !tableContainer) return;

  const PAGE_SIZE = 9;
  let visibleBatchLimit = PAGE_SIZE;
  let currentFilter = 'all';
  let currentQuery = '';

  const loadMoreWrapper = $('#faculty-load-more-wrapper');
  const loadMoreBtn = $('#faculty-load-more-btn');
  const loadMoreCount = $('#faculty-load-more-count');

  function applyFilters() {
    const cards = $$('.siet-faculty-card');
    const tableRows = $$('.faculty-table-row');
    const q = currentQuery.trim().toLowerCase();

    // 1. Identify matching cards
    const matchingCards = [];
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const desig = (card.getAttribute('data-designation') || '').toLowerCase();
      
      let matchesFilter = true;
      if (currentFilter === 'head') matchesFilter = desig.includes('head');
      else if (currentFilter === 'professor') matchesFilter = desig.includes('professor') && !desig.includes('associate') && !desig.includes('assistant');
      else if (currentFilter === 'associate') matchesFilter = desig.includes('associate');
      else if (currentFilter === 'assistant') matchesFilter = desig.includes('assistant');

      const matchesSearch = !q || text.includes(q);
      const isMatch = matchesFilter && matchesSearch;

      if (isMatch) {
        matchingCards.push(card);
      } else {
        card.style.display = 'none';
      }
    });

    // 2. Display cards up to visibleBatchLimit (9 by default in a 3x3 grid)
    let visibleCardsCount = 0;
    matchingCards.forEach((card, index) => {
      if (index < visibleBatchLimit) {
        card.style.display = 'flex';
        visibleCardsCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // 3. Update Load More button
    const remainingCards = matchingCards.length - visibleCardsCount;
    if (loadMoreWrapper) {
      if (remainingCards > 0) {
        loadMoreWrapper.style.display = 'flex';
        if (loadMoreCount) {
          loadMoreCount.textContent = `(+${remainingCards} remaining)`;
        }
      } else {
        loadMoreWrapper.style.display = 'none';
      }
    }

    // 4. Filter Table Rows (Table view shows all matching rows)
    let tableMatchCount = 0;
    tableRows.forEach(row => {
      const text = row.textContent.toLowerCase();
      const desig = (row.getAttribute('data-designation') || '').toLowerCase();

      let matchesFilter = true;
      if (currentFilter === 'head') matchesFilter = desig.includes('head');
      else if (currentFilter === 'professor') matchesFilter = desig.includes('professor') && !desig.includes('associate') && !desig.includes('assistant');
      else if (currentFilter === 'associate') matchesFilter = desig.includes('associate');
      else if (currentFilter === 'assistant') matchesFilter = desig.includes('assistant');

      const matchesSearch = !q || text.includes(q);
      const isVisible = matchesFilter && matchesSearch;
      row.style.display = isVisible ? '' : 'none';
      if (isVisible) tableMatchCount++;
    });

    const isTableView = tableContainer && tableContainer.style.display !== 'none';
    const displayCount = isTableView ? tableMatchCount : visibleCardsCount;
    const totalMatch = matchingCards.length;

    if (visibleCountEl) visibleCountEl.textContent = displayCount;
    if (totalCountEl) totalCountEl.textContent = totalMatch;
    if (noResultsEl) noResultsEl.style.display = (totalMatch === 0) ? 'block' : 'none';
    if (cardsGrid) cardsGrid.style.display = (totalMatch === 0) ? 'none' : 'grid';
  }

  // 1. Live Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value || '';
      visibleBatchLimit = PAGE_SIZE;
      if (clearBtn) clearBtn.style.display = currentQuery ? 'block' : 'none';
      applyFilters();
    });
  }

  // 2. Clear Button
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        currentQuery = '';
        visibleBatchLimit = PAGE_SIZE;
        clearBtn.style.display = 'none';
        applyFilters();
        searchInput.focus();
      }
    });
  }

  // 3. Reset Button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentFilter = 'all';
      currentQuery = '';
      visibleBatchLimit = PAGE_SIZE;
      if (searchInput) searchInput.value = '';
      if (clearBtn) clearBtn.style.display = 'none';
      filterPills.forEach(p => p.classList.toggle('is-active', p.getAttribute('data-filter') === 'all'));
      applyFilters();
    });
  }

  // 4. Filter Pills
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');
      currentFilter = pill.getAttribute('data-filter') || 'all';
      visibleBatchLimit = PAGE_SIZE;
      applyFilters();
    });
  });

  // 5. Load More Button
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      visibleBatchLimit += PAGE_SIZE;
      applyFilters();
    });
  }

  // 6. View Switcher (Cards vs Table)
  if (toggleCardsBtn && toggleTableBtn) {
    toggleCardsBtn.addEventListener('click', () => {
      toggleCardsBtn.classList.add('is-active');
      toggleTableBtn.classList.remove('is-active');
      if (cardsContainer) {
        cardsContainer.style.display = 'block';
        cardsContainer.classList.add('is-active');
      }
      if (tableContainer) {
        tableContainer.style.display = 'none';
        tableContainer.classList.remove('is-active');
      }
      applyFilters();
    });

    toggleTableBtn.addEventListener('click', () => {
      toggleTableBtn.classList.add('is-active');
      toggleCardsBtn.classList.remove('is-active');
      if (cardsContainer) {
        cardsContainer.style.display = 'none';
        cardsContainer.classList.remove('is-active');
      }
      if (tableContainer) {
        tableContainer.style.display = 'block';
        tableContainer.classList.add('is-active');
      }
      applyFilters();
    });
  }

  // Initial filter application to enforce 9 cards (3x3 grid) and Load More button
  applyFilters();

  // 6. Modal Profile View
  function openProfile(facultyId) {
    const faculty = getFacultyById(facultyId);
    if (!faculty || !modalRoot) return;

    modalRoot.innerHTML = renderFacultyModal(faculty);
    document.body.style.overflow = 'hidden';

    // Bind modal close buttons
    const closeBtn = $('#close-faculty-modal');
    const backBtn = $('#modal-back-btn');
    const backdrop = $('#faculty-profile-modal');

    const closeModal = () => {
      if (modalRoot) modalRoot.innerHTML = '';
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };

    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backBtn) backBtn.addEventListener('click', closeModal);
    if (backdrop) {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal();
      });
    }

    document.addEventListener('keydown', handleEsc);
  }

  // Delegate clicks on [data-action="view-faculty-profile"]
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action="view-faculty-profile"]');
    if (target) {
      e.preventDefault();
      const fid = target.getAttribute('data-faculty-id');
      if (fid) openProfile(fid);
    }
  });
}
