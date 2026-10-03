import { $, $$ } from './utils/dom.js';
import { route, routeParams } from './utils/router.js';
import { lockModalScroll, unlockModalScroll, attachModalScrollTrap } from './utils/modalScroll.js';
import { setupLevelSync } from './utils/formSubmit.js';

import { renderMainLayout } from './layouts/MainLayout.js';
import { renderApplyLayout } from './layouts/ApplyLayout.js';
import { icon } from './components/common/SvgIcons.js';
import { videoModal, placementDetailsModal } from './components/common/Modals.js';
import { programmeCards } from './components/cards/ProgrammeCard.js';

import { homePage } from './pages/Home/HomePage.js';
import {
  visionPage,
  chairmanPage,
  principalPage,
  coreBeliefsPage,
  coreValuesPage,
  philosophyPage,
  programOutcomesPage
} from './pages/About/AboutPages.js';

import { programmesPage } from './pages/Academics/ProgrammesPage.js';
import { departmentsPage } from './pages/Academics/DepartmentsPage.js';
import { departmentPage } from './pages/Academics/DepartmentDetailPage.js';
import { curriculumPage, getCurrModalData } from './pages/Academics/CurriculumPage.js';
import { academicCalendarPage } from './pages/Academics/AcademicCalendarPage.js';
import { academicOverviewPage } from './pages/Academics/AcademicOverviewPage.js';
import { libraryPage } from './pages/Academics/LibraryPage.js';

import { internalPage } from './pages/Campus/CampusPages.js';
import { applyPortalPage } from './pages/Admissions/ApplyPortalPage.js';
import { careersPage } from './pages/Careers/CareersPage.js';
import { contactPage } from './pages/Contact/ContactPage.js';

import { coePortalPage, bindCoeEvents } from './pages/COE/CoePages.js';
import {
  governancePage,
  mandatoryDisclosurePage,
  statutoryDeclarationPage,
  nirfPage,
  naacPage,
  nbaPage,
  iqacPage,
  ariiaPage,
  accreditationsOverviewPage,
  bindGovernanceEvents
} from './pages/Accreditation/AccreditationPages.js';
import { placementsPortalPage, bindPlacementEvents } from './pages/Placements/PlacementsPages.js';

import { careerUnits } from './data/careerData.js';
import { careerFormFields, bindCareerForm } from './pages/Careers/careerForm.js';
import { allDepartments, getDeptCurriculum } from './data/curriculumData.js';
import { ugPrograms, pgPrograms, ugProgramsDetailed, pgProgramsDetailed, bottomBannerHtml } from './data/programmesData.js';
import { placementTierData } from './data/placementData.js';
import { libModalData } from './data/libraryData.js';
import { titleCase } from './utils/dom.js';

let appRoot;
let currActiveDept = 'agri';

function render() {
  unlockModalScroll();
  if (!appRoot) return;
  const r = route();
  if (r === 'academics') {
    location.replace('#/curriculum');
    return;
  }
  const isApply = (r === 'apply' || r === 'admission-enquiry' || r === 'admission-referral' || r === 'referral');

  if (isApply) {
    const isReferral = (r === 'admission-referral' || r === 'referral' || routeParams().get('tab') === 'referral');
    const activeTab = isReferral ? 'referral' : 'enquiry';
    appRoot.innerHTML = renderApplyLayout(applyPortalPage(activeTab));
    document.title = isReferral
      ? 'Admission Referral | Sri Shakthi Institute of Engineering & Technology'
      : 'Apply for Sri Shakthi | SIET';
    bind();
    scrollTo(0, 0);
    return;
  }

  let content = !r ? homePage() :
    r === 'vision-mission' || r === 'about' ? visionPage() :
    r === 'core-beliefs' ? coreBeliefsPage() :
    r === 'program-outcomes' ? programOutcomesPage() :
    r === 'core-values' ? coreValuesPage() :
    r === 'philosophy' ? philosophyPage() :
    r === 'chairman' ? chairmanPage() :
    r === 'principal' ? principalPage() :
    r === 'programmes' ? programmesPage() :
    r === 'departments' ? departmentsPage() :
    r === 'careers' ? careersPage() :
    r === 'library' ? libraryPage() :
    r === 'contact' ? contactPage() :
    r === 'curriculum' ? curriculumPage() :
    r === 'academic-calendar' ? academicCalendarPage() :
    r === 'academics' ? academicOverviewPage() :
    r === 'coe' || r === 'coe-portal' || r === 'examinations' ? coePortalPage(routeParams().get('tab') || 'about') :
    r === 'coe-downloads' || r === 'downloads' || r === 'download' || r === 'forms' ? coePortalPage('forms') :
    r === 'coe-regulations' || r === 'regulations' ? coePortalPage('regulations') :
    r === 'coe-result' || r === 'result' ? coePortalPage('results') :
    r === 'coe-transcript' || r === 'transcript' ? coePortalPage('transcripts') :
    r === 'governance' || r === 'committees' ? governancePage(routeParams().get('tab') || 'all') :
    r === 'mandatory-disclosure' || r === 'disclosure' ? mandatoryDisclosurePage() :
    r === 'statutory-declaration' || r === 'rti' ? statutoryDeclarationPage() :
    r === 'nirf' ? nirfPage() :
    r === 'naac' ? naacPage() :
    r === 'nba' ? nbaPage() :
    r === 'iqac' ? iqacPage() :
    r === 'ariia' || r === 'ariia-report' ? ariiaPage() :
    r === 'accreditations' || r === 'accreditation' || r === 'approvals' ? accreditationsOverviewPage() :
    r === 'placements' || r === 'placement' || r.startsWith('placements/') || r === 'entrepreneurship' || r === 'career-support/entrepreneurship' ? placementsPortalPage(r) :
    internalPage(r);

  appRoot.innerHTML = renderMainLayout(content, r);
  document.title = `${r ? titleCase(r.replaceAll('-', ' ')) : 'Sri Shakthi'} | SIET`;
  bind();
  scrollTo(0, 0);
}

function bindCampusEvents($, $$) {
  // 1. Transport Stop Live Search
  const stopSearch = $('#transport-stop-search');
  if (stopSearch) {
    const handleSearch = (e) => {
      const q = (e.target.value || '').trim().toLowerCase();
      const chips = $$('.stop-chip');
      const cards = $$('.route-zone-card');
      const countEl = $('#stop-search-count');
      let matchCount = 0;

      if (!q) {
        chips.forEach(c => c.classList.remove('stop-highlight'));
        cards.forEach(card => {
          card.style.opacity = '1';
          card.classList.remove('has-matching-stop');
        });
        if (countEl) countEl.style.display = 'none';
        return;
      }

      chips.forEach(chip => {
        const text = (chip.textContent || '').toLowerCase();
        const isMatch = text.includes(q);
        chip.classList.toggle('stop-highlight', isMatch);
        if (isMatch) matchCount++;
      });

      cards.forEach(card => {
        const hasMatch = card.querySelectorAll('.stop-chip.stop-highlight').length > 0;
        card.style.opacity = hasMatch ? '1' : '0.35';
        card.classList.toggle('has-matching-stop', hasMatch);
      });

      if (countEl) {
        countEl.style.display = 'inline-block';
        countEl.textContent = matchCount > 0 ? `Found ${matchCount} matching stop${matchCount > 1 ? 's' : ''}` : 'No matching stops found';
      }
    };
    stopSearch.addEventListener('input', handleSearch);
  }

  // 2. Student Clubs Category Filter
  $$('.club-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.club-filter-pill').forEach(b => b.classList.toggle('is-active', b === btn));
      const cat = btn.dataset.clubCat;
      $$('.club-cat-card').forEach(card => {
        if (cat === 'all' || card.dataset.clubCat === cat) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Hostel Dining Menu Day Switcher
  $$('.hostel-menu-day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.hostel-menu-day-btn').forEach(b => b.classList.toggle('is-active', b === btn));
      const day = btn.dataset.day;
      $$('.hostel-menu-pane').forEach(pane => {
        pane.classList.toggle('is-active', pane.dataset.day === day);
      });
    });
  });

  // 4. Sports Arenas Category Filter
  $$('.sports-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.sports-filter-pill').forEach(b => b.classList.toggle('is-active', b === btn));
      const cat = btn.dataset.sportCat;
      $$('.sport-arena-card').forEach(card => {
        if (cat === 'all' || card.dataset.sportCat === cat) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Facilities Category Filter
  $$('.facility-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.facility-filter-pill').forEach(b => b.classList.toggle('is-active', b === btn));
      const cat = btn.dataset.facilityCat;
      $$('.facility-showcase-card').forEach(card => {
        if (cat === 'all' || card.dataset.facilityCat === cat) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function bind() {
  if (route() === 'academics') {
    document.title = "Academic Overview | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'coe' || route() === 'coe-portal' || route() === 'examinations') {
    document.title = "Office of the Controller of Examinations | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'coe-result' || route() === 'result') {
    document.title = "Autonomous Examination Results Portal | Office of the COE | SIET";
  }
  if (route() === 'coe-transcript' || route() === 'transcript') {
    document.title = "Official Academic Transcripts | Office of the COE | SIET";
  }
  if (route() === 'governance' || route() === 'committees') {
    document.title = "Governance & Statutory Committees | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'mandatory-disclosure' || route() === 'disclosure') {
    document.title = "AICTE Mandatory Disclosure | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'statutory-declaration' || route() === 'rti') {
    document.title = "Statutory Declaration (RTI Act) | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'nirf') {
    document.title = "NIRF Institutional Submissions | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'naac') {
    document.title = "NAAC Grade ‘A’ Accreditation | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'nba') {
    document.title = "NBA Tier-I Accredited Programmes | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'iqac') {
    document.title = "Internal Quality Assurance Cell (IQAC) | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'ariia' || route() === 'ariia-report') {
    document.title = "ARIIA Ranking & Innovation Cell | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'accreditations' || route() === 'accreditation' || route() === 'approvals') {
    document.title = "Approvals & Accreditations | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'placements' || route() === 'placement' || route()?.startsWith('placements') || route() === 'entrepreneurship') {
    if (route()?.includes('entrepreneurship')) {
      document.title = "Entrepreneurship Development Cell (EDC / E-Cell) | SIET";
    } else if (route()?.includes('higher-education')) {
      document.title = "Higher Education & Admissions | SIET";
    } else if (route()?.includes('government-services')) {
      document.title = "Civil Services & Public Sector Coaching | SIET";
    } else {
      document.title = "Training & Placement Cell | Sri Shakthi Institute of Engineering & Technology";
    }
  }
  bindCoeEvents($, $$);
  bindPlacementEvents($, $$);
  bindGovernanceEvents($, $$);
  bindCampusEvents($, $$);
  if (route() === 'chairman') {
    $('.siet-cd-kicker')?.replaceChildren("THE CHAIRMAN'S DESK");
    document.title = "The Chairman's Desk | SIET";
  }
  if (route() === 'principal') {
    document.title = "From the Principal | SIET";
  }
  if (route() === 'core-beliefs') {
    document.title = "Core Beliefs | SIET";
  }
  if (route() === 'library') {
    document.title = "Central Library | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'curriculum') {
    const dept = getDeptCurriculum(currActiveDept);
    document.title = `${dept.degree} ${dept.name} Curriculum | Sri Shakthi Institute of Engineering & Technology`;
  }
  if (route() === 'academic-calendar') {
    document.title = "Academic Calendar | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'departments') {
    document.title = "Departments | Sri Shakthi Institute of Engineering & Technology";
  }
  if (route() === 'programmes') {
    document.title = "UG & PG Programmes | Sri Shakthi Institute of Engineering & Technology";
  }

  // Apply Portal tab switching
  $$('.apply-portal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.portalTab;
      if (!tab) return;
      $$('.apply-portal-tab-btn').forEach(b => {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      const enquiryPane = $('#apply-pane-enquiry');
      const referralPane = $('#apply-pane-referral');
      if (enquiryPane && referralPane) {
        enquiryPane.classList.toggle('is-active', tab === 'enquiry');
        referralPane.classList.toggle('is-active', tab === 'referral');
      }
      const titleEl = $('#apply-hud-title');
      const breadcrumbEl = $('#apply-hud-breadcrumb');
      if (titleEl) {
        titleEl.innerHTML = tab === 'referral' ? 'Student Admission <em>Referral</em>' : 'Apply for <em>Sri Shakthi</em>';
      }
      if (breadcrumbEl) {
        breadcrumbEl.textContent = tab === 'referral' ? 'Referral' : 'Apply';
      }
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', tab === 'referral' ? '#/admission-referral' : '#/apply');
      }
      document.title = tab === 'referral'
        ? 'Admission Referral | Sri Shakthi Institute of Engineering & Technology'
        : 'Apply for Sri Shakthi | SIET';
    });
  });

  // Quick query chips interaction
  $$('.quick-chip-btn').forEach(chip => {
    chip.addEventListener('click', () => {
      const topic = chip.dataset.topic;
      const textarea = $('#enquiry-message-area');
      if (!textarea || !topic) return;
      chip.classList.toggle('is-selected');
      const isSelected = chip.classList.contains('is-selected');
      if (isSelected) {
        if (!textarea.value.includes(topic)) {
          textarea.value = textarea.value.trim() 
            ? `${textarea.value.trim()}\n• ${topic}` 
            : `Please provide details regarding:\n• ${topic}`;
        }
      } else {
        textarea.value = textarea.value.replace(`\n• ${topic}`, '').replace(`• ${topic}`, '').replace('Please provide details regarding:\n', '').trim();
      }
      textarea.dispatchEvent(new Event('input'));
    });
  });

  // Filter tabs on Programmes page
  $$('.siet-prog-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      $$('.siet-prog-filter-btn').forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('is-active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      const ugSec = $('#ug-programmes-section');
      const pgSec = $('#pg-programmes-section');
      if (filter === 'all') {
        if (ugSec) ugSec.style.display = '';
        if (pgSec) pgSec.style.display = '';
      } else if (filter === 'ug') {
        if (ugSec) ugSec.style.display = '';
        if (pgSec) pgSec.style.display = 'none';
      } else if (filter === 'pg') {
        if (ugSec) ugSec.style.display = 'none';
        if (pgSec) pgSec.style.display = '';
      }
    });
  });

  // Filter tabs on Departments page
  $$('.depts-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.deptFilter;
      $$('.depts-filter-btn').forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('is-active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      const ugSec = $('#ug-depts-section');
      const pgSec = $('#pg-depts-section');
      if (filter === 'all') {
        if (ugSec) ugSec.style.display = '';
        if (pgSec) pgSec.style.display = '';
      } else if (filter === 'ug') {
        if (ugSec) ugSec.style.display = '';
        if (pgSec) pgSec.style.display = 'none';
      } else if (filter === 'pg') {
        if (ugSec) ugSec.style.display = 'none';
        if (pgSec) pgSec.style.display = '';
      }
    });
  });

  // Sync Course Level with Preferred Department in Enquiry and Referral forms
  const setupLevelSync = (levelSelector, courseSelector) => {
    const levelEl = $(levelSelector);
    const courseEl = $(courseSelector);
    if (!levelEl || !courseEl) return;
    levelEl.addEventListener('change', () => {
      const val = levelEl.value;
      const currentVal = courseEl.value;
      if (val === 'UG') {
        courseEl.innerHTML = `<option value="">Select Preferred Department</option>${ugProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}`;
      } else if (val === 'PG') {
        courseEl.innerHTML = `<option value="">Select Preferred Department</option>${pgProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}`;
      } else {
        courseEl.innerHTML = `
          <option value="">Select Preferred Department</option>
          <optgroup label="Undergraduate (UG) Programmes">
            ${ugProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
          </optgroup>
          <optgroup label="Postgraduate (PG) Programmes">
            ${pgProgramsDetailed.map(p => `<option value="${p.fullName}">${p.fullName}</option>`).join('')}
          </optgroup>
        `;
      }
      if ([...courseEl.options].some(o => o.value === currentVal)) {
        courseEl.value = currentVal;
      }
    });
  };
  setupLevelSync('select[name="level"]', 'select[name="course"]');
  setupLevelSync('select[name="candidate_level"]', 'select[name="candidate_course"]');

  // Library modal triggers
  $$('.js-lib-modal-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const modal = $('.js-lib-modal');
      const titleEl = $('.js-lib-modal-title');
      const bodyEl = $('.js-lib-modal-body');
      if (!modal || !titleEl || !bodyEl) return;
      const data = libModalData[target] || { title: 'Library Information', content: '<p>Details will be updated shortly.</p>' };
      titleEl.textContent = data.title;
      bodyEl.innerHTML = data.content;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      lockModalScroll();
      attachModalScrollTrap(modal);
    });
  });

  $('.js-lib-modal-close')?.addEventListener('click', () => {
    const modal = $('.js-lib-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      unlockModalScroll();
    }
  });

  $('.js-lib-modal')?.addEventListener('click', e => {
    if (e.target.classList.contains('js-lib-modal')) {
      e.target.classList.remove('open');
      e.target.setAttribute('aria-hidden', 'true');
      unlockModalScroll();
    }
  });

  // Library search submission handler
  $('.js-lib-search')?.addEventListener('submit', e => {
    e.preventDefault();
    const input = $('.js-lib-search-input');
    const query = (input?.value || '').trim();
    const modal = $('.js-lib-modal');
    const titleEl = $('.js-lib-modal-title');
    const bodyEl = $('.js-lib-modal-body');
    if (!modal || !titleEl || !bodyEl) return;
    titleEl.textContent = query ? `Search Results: "${query}"` : 'Library Catalogue Search';
    bodyEl.innerHTML = `
      <p>Searching Central Library OPAC &amp; digital collections for <b>${query || 'all subjects'}</b>:</p>
      <h4>Matching Records &amp; Availability:</h4>
      <ul>
        <li><span class="siet-lib-resource-badge">Print Volume</span> <b>Artificial Intelligence: A Modern Approach</b> — <i>Available (Shelf 4B, 3 copies)</i></li>
        <li><span class="siet-lib-resource-badge">E-Journal</span> <b>IEEE Transactions on Pattern Analysis and Machine Intelligence</b> — <i>Full-text Online</i></li>
        <li><span class="siet-lib-resource-badge">Research Project</span> <b>Smart Agro-Robotics &amp; Drone Systems (2025-26)</b> — <i>Reference Section R-08</i></li>
        <li><span class="siet-lib-resource-badge">Textbook</span> <b>Data Structures and Algorithm Analysis in C++ (Mark Allen Weiss)</b> — <i>Available (Shelf 2A)</i></li>
      </ul>
      <p style="margin-top:14px;color:#537563;font-size:13px">Present your institutional Smart ID card at the circulation counter to reserve or issue physical books.</p>
    `;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    lockModalScroll();
    attachModalScrollTrap(modal);
  });

  // Department switcher helper
  const updateActiveDept = (deptId) => {
    const dept = getDeptCurriculum(deptId, currActiveRegulation);
    if (!dept) return;
    currActiveDept = dept.id;

    $$('.curr-dept-tab').forEach(tab => {
      const isSelected = tab.dataset.dept === dept.id;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    const titleEl = $('#curr-dept-title');
    const descEl = $('#curr-dept-desc');
    if (titleEl) titleEl.textContent = `${dept.degree} ${dept.name}`;
    if (descEl) descEl.textContent = dept.desc;

    const tableArea = $('#curr-table-area');
    if (tableArea) {
      tableArea.innerHTML = renderCurriculumTable(currActiveDept, currActiveSem, currActiveRegulation);
    }

    document.title = `${dept.degree} ${dept.name} Curriculum | SIET`;
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#/curriculum?dept=${dept.id}&regulation=${currActiveRegulation}`);
    }
  };

  $$('.curr-dept-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const deptId = tab.dataset.dept;
      if (deptId) updateActiveDept(deptId);
    });
  });

  const updateActiveSem = (semNum) => {
    const sem = Math.max(1, Math.min(8, Number(semNum) || 1));
    currActiveSem = sem;

    $$('.curr-sem-tab').forEach(tab => {
      const isSelected = Number(tab.dataset.sem) === sem;
      tab.classList.toggle('is-active', isSelected);
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    });

    const tableArea = $('#curr-table-area');
    if (tableArea) {
      tableArea.innerHTML = renderCurriculumTable(currActiveDept, currActiveSem, currActiveRegulation);
    }
  };

  $$('.curr-sem-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const sem = Number(tab.dataset.sem);
      if (sem) updateActiveSem(sem);
    });
  });

  $$('.curr-regulation-btn').forEach(button => {
    button.addEventListener('click', () => {
      const regulation = button.dataset.regulation;
      if (!['r2021', 'r2025'].includes(regulation) || regulation === currActiveRegulation) return;
      currActiveRegulation = regulation;

      $$('.curr-regulation-btn').forEach(item => {
        const isSelected = item.dataset.regulation === regulation;
        item.classList.toggle('is-active', isSelected);
        item.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      });

      const dept = getDeptCurriculum(currActiveDept, currActiveRegulation);
      const descEl = $('#curr-dept-desc');
      const tableArea = $('#curr-table-area');
      if (descEl) descEl.textContent = dept.desc;
      if (tableArea) {
        tableArea.classList.remove('is-switching');
        void tableArea.offsetWidth;
        tableArea.classList.add('is-switching');
        tableArea.innerHTML = renderCurriculumTable(currActiveDept, currActiveSem, currActiveRegulation);
      }
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', `#/curriculum?dept=${currActiveDept}&regulation=${currActiveRegulation}`);
      }
    });
  });

  $$('.js-curr-modal-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      const modal = $('.js-curr-modal');
      const titleEl = $('.js-curr-modal-title');
      const bodyEl = $('.js-curr-modal-body');
      if (!modal || !titleEl || !bodyEl) return;
      const data = getCurrModalData(target, currActiveDept);
      titleEl.textContent = data.title;
      bodyEl.innerHTML = data.content;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      lockModalScroll();
      attachModalScrollTrap(modal);
    });
  });

  $('.js-curr-modal-close')?.addEventListener('click', () => {
    const modal = $('.js-curr-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      unlockModalScroll();
    }
  });

  $('.js-curr-modal')?.addEventListener('click', e => {
    const tabBtn = e.target.closest('.js-reg-tab-btn');
    if (tabBtn) {
      const target = tabBtn.dataset.target;
      const titleEl = $('.js-curr-modal-title');
      const bodyEl = $('.js-curr-modal-body');
      if (titleEl && bodyEl && target) {
        const data = getCurrModalData(target, currActiveDept);
        titleEl.textContent = data.title;
        bodyEl.innerHTML = data.content;
      }
      return;
    }
    if (e.target.classList.contains('js-curr-modal')) {
      e.target.classList.remove('open');
      e.target.setAttribute('aria-hidden', 'true');
      unlockModalScroll();
    }
  });


  const mobile = $('.mobile-nav'), backdrop = $('.mobile-nav-backdrop'), toggle = $('.institution-mobile-toggle'), closeBtn = $('.mobile-nav-close');
  const syncHeaderScroll = () => $('.premium-header')?.classList.toggle('is-scrolled', window.scrollY > 36);
  syncHeaderScroll();
  if (!window.__sietHeaderScrollBound) {
    window.addEventListener('scroll', syncHeaderScroll, { passive: true });
    window.__sietHeaderScrollBound = true;
  }
  const closeMenu = () => {
    mobile?.classList.remove('open');
    backdrop?.classList.remove('open');
    if (toggle) {
      toggle.innerHTML = icon('menu');
      toggle.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  };
  const openMenu = () => {
    mobile?.classList.add('open');
    backdrop?.classList.add('open');
    if (toggle) {
      toggle.innerHTML = icon('close');
      toggle.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  };
  toggle?.addEventListener('click', e => { e.stopPropagation(); mobile?.classList.contains('open') ? closeMenu() : openMenu(); });
  closeBtn?.addEventListener('click', e => { e.stopPropagation(); closeMenu(); });
  backdrop?.addEventListener('click', closeMenu);
  $$('.mobile-nav a').forEach(a => a.addEventListener('click', closeMenu));
  $$('.mobile-nav-group-toggle').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const group = btn.closest('.mobile-nav-group');
    const wasOpen = group?.classList.contains('open');
    $$('.mobile-nav-group').forEach(g => { g.classList.remove('open'); g.querySelector('.mobile-nav-group-toggle')?.setAttribute('aria-expanded', 'false') });
    if (!wasOpen && group) { group.classList.add('open'); btn.setAttribute('aria-expanded', 'true') }
  }));
  let navCloseTimer = null;
  const closeAllNavGroups = () => {
    if (navCloseTimer) {
      clearTimeout(navCloseTimer);
      navCloseTimer = null;
    }
    $$('.institution-nav-group').forEach(x => {
      x.classList.remove('open');
      x.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  };

  const openNavGroup = (group) => {
    if (navCloseTimer) {
      clearTimeout(navCloseTimer);
      navCloseTimer = null;
    }
    $$('.institution-nav-group').forEach(x => {
      if (x !== group) {
        x.classList.remove('open');
        x.querySelector('button')?.setAttribute('aria-expanded', 'false');
      }
    });
    if (group) {
      group.classList.add('open');
      group.querySelector('button')?.setAttribute('aria-expanded', 'true');
    }
  };

  $$('.institution-nav-group').forEach(group => {
    const btn = group.querySelector('button');

    group.addEventListener('mouseenter', () => {
      openNavGroup(group);
    });

    group.addEventListener('mouseleave', () => {
      if (navCloseTimer) clearTimeout(navCloseTimer);
      navCloseTimer = setTimeout(() => {
        group.classList.remove('open');
        btn?.setAttribute('aria-expanded', 'false');
      }, 140);
    });

    btn?.addEventListener('click', e => {
      e.stopPropagation();
      const isCurrentlyOpen = group.classList.contains('open');
      if (navCloseTimer) clearTimeout(navCloseTimer);
      if (isCurrentlyOpen) {
        group.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        openNavGroup(group);
      }
    });

    group.addEventListener('focusin', () => {
      openNavGroup(group);
    });

    group.addEventListener('focusout', e => {
      if (!group.contains(e.relatedTarget)) {
        group.classList.remove('open');
        btn?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  $$('.institution-nav-link, .institution-home, .institution-nav-apply, .institution-mobile-logo, .siet-header-image').forEach(item => {
    item.addEventListener('mouseenter', () => {
      closeAllNavGroups();
    });
  });

  $('.institution-navbar')?.addEventListener('mouseleave', () => {
    if (navCloseTimer) clearTimeout(navCloseTimer);
    navCloseTimer = setTimeout(() => {
      closeAllNavGroups();
    }, 140);
  });

  $$('.institution-nav-group>div a').forEach(link => {
    link.addEventListener('click', () => {
      closeAllNavGroups();
    });
  });
  const careerForm = $('.career-form');
  const updateCareerUnit = unitKey => {
    const unit = careerUnits[unitKey];
    if (!unit || !careerForm) return;
    const careerButtons = $$('.career-tabs button');
    careerButtons.forEach(button => {
      const active = button.dataset.unit === unitKey;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    $('.career-toggle')?.style.setProperty('--career-index', careerButtons.findIndex(button => button.dataset.unit === unitKey));
    $('.career-intro h2').textContent = unit.heading;
    $('.career-intro p').textContent = unit.desc;
    const logo = $('.career-intro img');
    logo.src = unit.logo;
    logo.alt = unit.heading + ' banner';
    careerForm.elements.institution.value = unitKey;
    careerForm.elements.category.innerHTML = '<option value="">Select a Category</option>' + unit.cats.map(c => `<option>${c[0]}</option>`).join('');
    for (const name of ['position', 'department']) {
      const control = careerForm.elements[name];
      control.innerHTML = `<option value="">Select a ${name === 'position' ? 'Position' : 'Department'}</option>`;
      control.disabled = true;
    }
    $('.career-categories').innerHTML = `<div class="career-side-title"><small>EXPLORE OPENINGS</small><h2>Application Categories</h2></div>` +
      unit.cats.map((c, i) => `<details ${i === 0 ? 'open' : ''}><summary>${c[0]} ${icon('down')}</summary><div>${c[2] ? `<p>${c[2]}</p>` : ''}${c[1].map(r => `<span>⇒ ${r}</span>`).join('')}</div></details>`).join('') +
      `<div class="career-contact"><small>CONTACT FOR QUERIES</small><h3>Let’s build the future together.</h3><a href="tel:04222369900">0422-2369900 (Ext 103)</a><a href="mailto:careers@siet.ac.in">careers@siet.ac.in</a></div>`;
  };
  $$('.career-tabs button').forEach(button => button.addEventListener('click', () => {
    if (careerForm?.elements.institution.value !== button.dataset.unit) updateCareerUnit(button.dataset.unit);
  }));
  $('.career-categories')?.addEventListener('toggle', event => {
    const openedCategory = event.target;
    if (!(openedCategory instanceof HTMLDetailsElement) || !openedCategory.open) return;
    $$('.career-categories details').forEach(category => {
      if (category !== openedCategory) category.open = false;
    });
  }, true);
  bindCareerForm(careerForm, careerUnits, updateCareerUnit);
  if (careerForm) updateCareerUnit('college');
  $$('.js-video').forEach(b => b.addEventListener('click', () => { document.body.insertAdjacentHTML('beforeend', videoModal()); document.body.style.overflow = 'hidden'; const modal = $('.video-modal'); const close = () => { modal?.remove(); document.body.style.overflow = '' }; modal?.addEventListener('click', e => e.target === modal && close()); $('.video-close', modal)?.addEventListener('click', close) }));
  $$('.toggle-btn').forEach(b => b.addEventListener('click', () => {
    $$('.toggle-btn').forEach(x => x.classList.toggle('active', x === b));
    const isUG = b.dataset.level === 'UG';
    const progGridEl = $('#programme-grid');
    if (progGridEl) {
      progGridEl.innerHTML = programmeCards(isUG ? ugPrograms : pgPrograms) + (isUG ? bottomBannerHtml : '');
    }
    const countBadge = $('#prog-count-badge');
    const levelBadge = $('#prog-level-badge');
    if (countBadge) countBadge.textContent = isUG ? '14+' : '7+';
    if (levelBadge) levelBadge.textContent = isUG ? 'UG Programmes' : 'PG Programmes';
    observe();
  }));
  const progGrid = $('#programme-grid');
  progGrid?.addEventListener('click', e => {
    const card = e.target.closest('.programme-card-v2, .programme-card');
    if (!card) return;
    const course = card.dataset.course;
    location.hash = '#/admission-enquiry';
  });
  progGrid?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.programme-card-v2, .programme-card');
      if (card) { e.preventDefault(); card.click() }
    }
  });
  // Open Placement Modal helper
  function openPlacementModal(tierKey = '10') {
    const existing = $('.placement-modal');
    if (existing) existing.remove();
    document.body.insertAdjacentHTML('beforeend', placementDetailsModal(tierKey));
    document.body.style.overflow = 'hidden';
    const modal = $('.placement-modal');
    if (!modal) return;

    const closeModal = () => {
      modal.classList.add('closing');
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = '';
      }, 180);
    };

    $('.placement-modal-close', modal)?.addEventListener('click', closeModal);
    $('.js-close-pm', modal)?.addEventListener('click', closeModal);
    $('.placement-modal-backdrop', modal)?.addEventListener('click', closeModal);

    // Tab switching inside modal
    $$('.pm-tab-btn', modal).forEach(btn => {
      btn.addEventListener('click', () => {
        const nextTier = btn.dataset.tier;
        if (nextTier) openPlacementModal(nextTier);
      });
    });
  }

  // Placement Stat Cards Interactivity
  $$('.ps-stat-card').forEach(card => {
    card.addEventListener('click', () => {
      const tier = card.dataset.tier || '10';
      openPlacementModal(tier);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const tier = card.dataset.tier || '10';
        openPlacementModal(tier);
      }
    });
    // Hover highlight effect on marquee logos
    card.addEventListener('mouseenter', () => {
      const tierKey = card.dataset.tier;
      const companies = placementTierData[tierKey]?.companies || [];
      const lowerNames = companies.map(c => c.toLowerCase().replace(/[^a-z0-9]/g, ''));
      $$('.placement-marquee-item').forEach(item => {
        const logoName = (item.dataset.logo || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const isMatch = lowerNames.some(c => logoName.includes(c) || c.includes(logoName));
        item.classList.toggle('highlighted-by-card', isMatch);
      });
    });
    card.addEventListener('mouseleave', () => {
      $$('.placement-marquee-item').forEach(item => item.classList.remove('highlighted-by-card'));
    });
  });

  // Explore Placements CTA
  $('.js-explore-placements')?.addEventListener('click', () => {
    const section = $('#placement-highlights') || $('.placement-right-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
      $$('.ps-stat-card').forEach(c => {
        c.classList.add('pulse-highlight');
        setTimeout(() => c.classList.remove('pulse-highlight'), 1600);
      });
    }
  });

  $('.js-scroll-programmes')?.addEventListener('click', () => { $('.programmes-section')?.scrollIntoView({ behavior: 'smooth' }) });
  $('.js-discover-btn')?.addEventListener('click', () => { $('.programmes-section')?.scrollIntoView({ behavior: 'smooth' }) });
  $('.js-explore-campus')?.addEventListener('click', () => { $('.campus-gallery')?.scrollIntoView({ behavior: 'smooth' }) });
  $$('.campus-gallery .gallery-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click() }
    })
  });
  $$('.vision-tab-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.vision-tab-btn').forEach(x => x.classList.toggle('active', x === btn));
    $$('.vision-content-pane').forEach(pane => pane.classList.toggle('active', pane.dataset.pane === btn.dataset.tab));
  }));
  $$('.lab-pill-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.lab-pill-btn').forEach(x => x.classList.toggle('active', x === btn));
    const cat = btn.dataset.cat;
    $$('.lab-card').forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.style.display = '';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
      }
    });
  }));
  $$('.lab-card').forEach(card => {
    card.addEventListener('click', () => { location.hash = '#/centres-of-excellence'; });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); location.hash = '#/centres-of-excellence'; }
    });
  });
  $('.labs-nav-arrows .prev-btn')?.addEventListener('click', () => {
    const active = $('.lab-pill-btn.active');
    const pills = $$('.lab-pill-btn');
    const idx = pills.indexOf(active);
    const prev = pills[(idx - 1 + pills.length) % pills.length];
    prev?.click();
  });
  $('.labs-nav-arrows .next-btn')?.addEventListener('click', () => {
    const active = $('.lab-pill-btn.active');
    const pills = $$('.lab-pill-btn');
    const idx = pills.indexOf(active);
    const next = pills[(idx + 1) % pills.length];
    next?.click();
  });
  $$('.event-filter-pill').forEach(btn => btn.addEventListener('click', () => {
    $$('.event-filter-pill').forEach(x => x.classList.toggle('active', x === btn));
    const cat = btn.dataset.cat;
    $$('.event-item-card').forEach(card => {
      const cats = (card.dataset.cat || '').split(' ');
      if (cat === 'all' || cats.includes(cat)) {
        card.style.display = '';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
      }
    });
  }));
  $$('.event-item-card').forEach(card => {
    card.addEventListener('click', () => { location.hash = '#/campus-life'; });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); location.hash = '#/campus-life'; }
    });
  });
  const featuredSlides = [
    {
      title: 'TechNovate 2026',
      tag: 'TECHNICAL SYMPOSIUM',
      desc: 'A platform to ideate, innovate and build solutions for a better tomorrow. Join us for a day of learning, networking and inspiration.',
      date: '28 Aug 2026',
      loc: 'Main Auditorium',
      time: '09:00 AM - 05:00 PM',
      bg: '/brand/events/featured-technovate-hd.jpg'
    },
    {
      title: 'Hack-A-Shakthi 2026',
      tag: 'NATIONAL HACKATHON',
      desc: '36 hours of continuous coding, product design, and real-world industrial challenges with mentorship from top tech leaders.',
      date: '14 Sep 2026',
      loc: 'Innovation Centre & Techpark',
      time: '08:30 AM - 08:30 PM',
      bg: '/brand/techpark-hd.jpg'
    },
    {
      title: 'Sangamam Gala Night',
      tag: 'CULTURAL EXTRAVAGANZA',
      desc: 'An electrifying evening of classical dance, fusion music, dramatic arts, and celebration of intercultural heritage.',
      date: '16 Sep 2026',
      loc: 'Open Air Theatre',
      time: '05:00 PM - 10:30 PM',
      bg: '/brand/events/event-sangamam-hd.jpg'
    }
  ];
  let featIdx = 0;
  const updateFeatSlide = () => {
    const card = $('.events-featured-card');
    if (!card) return;
    const s = featuredSlides[featIdx];
    const bg = $('.featured-bg-photo', card);
    const title = $('.featured-title', card);
    const tag = $('.featured-sub-tag', card);
    const desc = $('.featured-summary', card);
    const counter = $('.featured-counter', card);
    const rows = $$('.featured-meta-row span:last-child', card);
    if (bg) bg.style.backgroundImage = `url('${s.bg}')`;
    if (title) title.textContent = s.title;
    if (tag) tag.textContent = s.tag;
    if (desc) desc.textContent = s.desc;
    if (counter) counter.textContent = `0${featIdx + 1} / 03`;
    if (rows[0]) rows[0].textContent = s.date;
    if (rows[1]) rows[1].textContent = s.loc;
    if (rows[2]) rows[2].textContent = s.time;
  };
  $('.prev-feat')?.addEventListener('click', (e) => {
    e.stopPropagation();
    featIdx = (featIdx - 1 + featuredSlides.length) % featuredSlides.length;
    updateFeatSlide();
  });
  $('.next-feat')?.addEventListener('click', (e) => {
    e.stopPropagation();
    featIdx = (featIdx + 1) % featuredSlides.length;
    updateFeatSlide();
  });

  $$('.department-detail-nav button').forEach(button => button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.section);
    if (!target) return;
    $$('.department-detail-nav button').forEach(item => item.classList.toggle('active', item === button));
    $$('.department-copy').forEach(section => section.classList.toggle('is-open', section === target));
  }));

  // Referral form: Toggle Register Number for Current Student
  const relationSelect = $('select[name="referrer_relation"]');
  const regNoWrapper = $('#referrer-reg-no-wrapper');
  const regNoInput = $('#referrer_reg_no');
  if (relationSelect && regNoWrapper && regNoInput) {
    const handleRelationChange = () => {
      const isCurrentStudent = relationSelect.value === 'Current Student';
      if (isCurrentStudent) {
        regNoWrapper.style.display = 'block';
        regNoInput.required = true;
        regNoInput.disabled = false;
      } else {
        regNoWrapper.style.display = 'none';
        regNoInput.required = false;
        regNoInput.disabled = true;
        regNoInput.value = '';
      }
    };
    relationSelect.addEventListener('change', handleRelationChange);
    relationSelect.addEventListener('input', handleRelationChange);
    const form = relationSelect.closest('form');
    form?.addEventListener('reset', () => setTimeout(handleRelationChange, 0));
    handleRelationChange();
  }

  $$('.js-form').forEach(form => form.addEventListener('submit', submitForm)); observe(); requestAnimationFrame(observe); setTimeout(observe, 100);
}
async function submitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  if (form.dataset.submitting === 'true') return;
  const status = $('.status', form);
  const btn = $('button[type="submit"], .career-submit', form);
  const originalButtonContent = btn?.innerHTML;
  const isAdmissionEnquiry = form.dataset.formType === 'admission-enquiry';
  form.dataset.submitting = 'true';
  if (status) { status.textContent = isAdmissionEnquiry ? 'Saving…' : 'Submitting details…'; status.style.color = '#0b7a48' }
  if (btn) { btn.disabled = true; btn.textContent = isAdmissionEnquiry ? 'Saving…' : 'Submitting…'; }
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  if (!data.name && data.referrer_name) data.name = `${data.referrer_name} (Ref for: ${data.candidate_name || 'Candidate'})`;
  if (!data.email && (data.referrer_email || data.candidate_email)) data.email = data.referrer_email || data.candidate_email;
  if (!data.phone && (data.referrer_phone || data.candidate_phone)) data.phone = data.referrer_phone || data.candidate_phone;
  if (!data.course && data.candidate_course) data.course = data.candidate_course;
  const fileInput = form.querySelector('input[type="file"]');
  if (fileInput?.files?.[0]) {
    data.fileName = fileInput.files[0].name;
    data.fileSize = `${Math.round(fileInput.files[0].size / 1024)} KB`;
  }
  try {
    const endpoint = form.dataset.apiEndpoint || '/api/enquiries';
    const payload = isAdmissionEnquiry ? {
      studentName: data.name,
      mobileNumber: data.phone,
      email: data.email,
      course: data.level,
      department: data.course,
      city: data.city || '',
      source: 'Website',
      remarks: data.message
    } : data;
    const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const json = await res.json().catch(() => ({ message: 'The server returned an invalid response.' }));
    if (status) {
      status.textContent = json.message || (res.ok ? 'Admission enquiry saved successfully' : 'Unable to save your enquiry.');
      status.style.color = res.ok ? '#075b36' : '#b3261e';
    }
    if (res.ok) form.reset();
  } catch (err) {
    if (status) {
      status.textContent = 'Unable to save your enquiry. Please check your connection and try again.';
      status.style.color = '#b3261e';
    }
  } finally {
    form.dataset.submitting = 'false';
    if (btn) { btn.disabled = false; btn.innerHTML = originalButtonContent || 'Submit'; }
  }
}
function observe() { const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches; const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; entry.target.classList.add('is-visible'); if (entry.target.classList.contains('js-counter')) animateCounter(entry.target, reduce); observer.unobserve(entry.target) }), { threshold: .01, rootMargin: '120px 0px 60px 0px' }); $$('.reveal,.js-counter').forEach(el => { const rect = el.getBoundingClientRect(); if (reduce || (rect.top < window.innerHeight + 100 && rect.bottom > -100)) { el.classList.add('is-visible'); if (el.classList.contains('js-counter')) animateCounter(el, reduce); } else { observer.observe(el); } }); }
function animateCounter(el, instant = false) { if (el.dataset.counted === 'true') return; el.dataset.counted = 'true'; const to = Number(el.dataset.to), suffix = el.dataset.suffix || ''; if (instant) { el.textContent = to.toLocaleString('en-IN') + suffix; return; } const start = performance.now(), duration = 1650; function tick(now) { const p = Math.min((now - start) / duration, 1), v = Math.round(to * (1 - (1 - p) ** 3)); el.textContent = v.toLocaleString('en-IN') + suffix; if (p < 1) requestAnimationFrame(tick) } requestAnimationFrame(tick) }
const handleEscape = e => {
  if (e.key === 'Escape') {
    $('.video-close')?.click();
    $('.mobile-nav-close')?.click();
    $('.placement-modal-close')?.click();
    $('.js-lib-modal-close')?.click();
    $('.js-curr-modal-close')?.click();
    unlockModalScroll();
    $$('.institution-nav-group').forEach(g => {
      g.classList.remove('open');
      g.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  }
};
const handleDocClick = e => {
  if (!e.target.closest('.institution-nav-group>button')) {
    $$('.institution-nav-group').forEach(g => {
      g.classList.remove('open');
      g.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });
  }
};

export function mountSite(root) {
  appRoot = root;
  window.addEventListener('hashchange', render);
  window.addEventListener('keydown', handleEscape);
  document.addEventListener('click', handleDocClick);
  render();
  return () => {
    window.removeEventListener('hashchange', render);
    window.removeEventListener('keydown', handleEscape);
    document.removeEventListener('click', handleDocClick);
    unlockModalScroll();
    appRoot = null;
  };
}
