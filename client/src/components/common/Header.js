import { route } from '../../utils/router.js';
import { icon } from './SvgIcons.js';
import { pageGroups } from '../../data/navigationData.js';

const admissionNoticeItems = `<span class="home-notice-open"><b aria-hidden="true">⌁</b><strong>ADMISSIONS 2026–27 NOW OPEN</strong></span><i></i><span>Applications are invited for undergraduate and postgraduate engineering programmes</span><i></i><span>Begin your journey at Sri Shakthi</span><i></i><span>TNEA Counselling Code: 2727</span><i></i>`;
const announcementBar = () => `<div class="notice notice-home"><div class="home-notice-track"><div class="home-notice-group">${admissionNoticeItems}</div><div class="home-notice-group" aria-hidden="true">${admissionNoticeItems}</div></div></div>`;

export function header() {
  const currentRoute = route();
  const isHomeActive = !currentRoute || currentRoute === 'home';
  const isCoeActive = currentRoute === 'coe' || currentRoute === 'coe-portal' || currentRoute === 'examinations' || currentRoute === 'coe-result' || currentRoute === 'result' || currentRoute === 'coe-transcript' || currentRoute === 'transcript';
  const isPlacementActive = currentRoute === 'placements' || currentRoute === 'placement' || currentRoute.startsWith('placements') || currentRoute === 'entrepreneurship';
  const isApplyActive = currentRoute === 'apply' || currentRoute === 'admission-enquiry' || currentRoute === 'admission-referral' || currentRoute === 'referral';

  return `${announcementBar()}
<header class="institution-header-v4 exact-image-header" role="banner">
  <div class="institution-header-shell">
    <nav class="institution-navbar" aria-label="Main navigation">

      <!-- Mobile: Three-Line (Hamburger) Menu Button on the left top -->
      <button class="institution-mobile-toggle" aria-label="Open navigation menu" type="button" aria-expanded="false" aria-controls="mobile-nav-drawer">
        ${icon('menu')}
      </button>

      <!-- Institutional Branding: [ Logo ] [ SRI SHAKTHI / AUTONOMOUS INSTITUTION ] -->
      <a class="siet-inline-brand" href="#/" aria-label="Sri Shakthi Autonomous Institution">
        <img src="/brand/siet-logo.png" alt="Sri Shakthi Logo" class="siet-brand-logo">
        <div class="siet-brand-text">
          <span class="siet-brand-name">SRI SHAKTHI</span>
          <span class="siet-brand-sub">AUTONOMOUS INSTITUTION</span>
        </div>
      </a>

      <!-- Desktop Navigation Menu (Includes explicit 'Home' section) -->
      <div class="institution-menu">
        <a class="institution-nav-link ${isHomeActive ? 'is-active-nav' : ''}" href="#/">Home</a>
        ${pageGroups.map(g => {
          const isGroupActive = g.items.some(([s]) => s === currentRoute || (s === 'governance' && currentRoute === 'committees') || (s === 'ariia' && currentRoute === 'ariia-report') || (g.label === 'Accreditation' && currentRoute === 'accreditations'));
          return `${g.label === 'Accreditation' ? `<a class="institution-nav-link ${isCoeActive ? 'is-active-nav' : ''}" href="#/coe">COE</a>` : ''}${g.label === 'Explore' ? `<a class="institution-nav-link ${isPlacementActive ? 'is-active-nav' : ''}" href="#/placements">Placements</a>` : ''}<div class="institution-nav-group"><button type="button" class="${isGroupActive ? 'is-active-nav' : ''}" aria-expanded="false">${g.label}${icon('down')}</button><div>${g.items.map(([s, n]) => `<a href="#/${s}">${n}</a>`).join('')}</div></div>`;
        }).join('')}
        <a class="institution-nav-link ${currentRoute === 'careers' ? 'is-active-nav' : ''}" href="#/careers">Careers</a>
      </div>

      <!-- Desktop Apply Now CTA Button -->
      <a class="institution-nav-apply ${isApplyActive ? 'is-active-apply' : ''}" href="#/apply" aria-label="Apply Now for Admissions">
        Apply Now ${icon('arrow')}
      </a>

    </nav>
  </div>
</header>

<!-- Mobile Navigation Drawer Backdrop -->
<div class="mobile-nav-backdrop" id="mobile-nav-backdrop"></div>

<!-- Mobile Navigation Drawer (Three-Line Option with 'Home' page included) -->
<aside class="mobile-nav" id="mobile-nav-drawer" aria-label="Mobile Navigation">
  <div class="mobile-nav-header">
    <a href="#/" class="mobile-nav-brand" aria-label="Sri Shakthi Home">
      <img src="/brand/siet-logo.png" alt="Sri Shakthi Logo">
      <div>
        <strong>SRI SHAKTHI</strong>
        <small>AUTONOMOUS INSTITUTION</small>
      </div>
    </a>
    <button class="mobile-nav-close" aria-label="Close navigation menu" type="button">
      ${icon('close')}
    </button>
  </div>

  <div class="mobile-nav-body">
    <!-- Explicit Home Page Option inside the Mobile Three-Line Menu -->
    <a href="#/" class="mobile-nav-link mobile-nav-home ${isHomeActive ? 'is-active-nav' : ''}">
      ${icon('home')} Home
    </a>
    <div class="mobile-nav-accordion">
      ${pageGroups.map(g => `
        ${g.label === 'Accreditation' ? `<a class="mobile-nav-link ${isCoeActive ? 'is-active-nav' : ''}" href="#/coe">COE</a>` : ''}
        ${g.label === 'Explore' ? `<a class="mobile-nav-link ${isPlacementActive ? 'is-active-nav' : ''}" href="#/placements">Placements</a>` : ''}
        <div class="mobile-nav-group">
          <button type="button" class="mobile-nav-group-toggle" aria-expanded="false">
            <span>${g.label}</span>
            ${icon('down')}
          </button>
          <div class="mobile-nav-subitems">
            ${g.items.map(([s, n]) => `<a href="#/${s}" class="mobile-nav-sublink">${n}</a>`).join('')}
          </div>
        </div>
      `).join('')}
      <a class="mobile-nav-link ${currentRoute === 'careers' ? 'is-active-nav' : ''}" href="#/careers">Careers @ SIET</a>
    </div>
  </div>

  <div class="mobile-nav-footer">
    <a class="mobile-apply-link" href="#/apply" aria-label="Apply Now">
      Apply Now ${icon('arrow')}
    </a>
  </div>
</aside>`;
}

export function applyHeader() {
  return header();
}

