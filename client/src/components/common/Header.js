import { route } from '../../utils/router.js';
import { icon } from './SvgIcons.js';
import { pageGroups } from '../../data/navigationData.js';

const admissionNoticeItems = `<span class="home-notice-open"><b aria-hidden="true">⌁</b><strong>2026–27 NOW OPEN</strong></span><i></i><span>Applications are invited for undergraduate and postgraduate engineering programmes</span><i></i><span>Begin your journey at Sri Shakthi</span><i></i><span>TNEA Counselling Code: 2727</span><i></i>`;
const announcementBar = () => `<div class="notice notice-home"><div class="home-notice-track"><div class="home-notice-group">${admissionNoticeItems}</div><div class="home-notice-group" aria-hidden="true">${admissionNoticeItems}</div></div></div>`;

export function header() {
  const currentRoute = route();
  const isCoeActive = currentRoute === 'coe' || currentRoute === 'coe-portal' || currentRoute === 'examinations' || currentRoute === 'coe-result' || currentRoute === 'result' || currentRoute === 'coe-transcript' || currentRoute === 'transcript';
  const isPlacementActive = currentRoute === 'placements' || currentRoute === 'placement' || currentRoute.startsWith('placements') || currentRoute === 'entrepreneurship';
  const notice = announcementBar();

  return `${notice}
<header class="institution-header-v4 exact-image-header premium-header"><div class="institution-header-shell">
  <nav class="institution-navbar" aria-label="Main navigation">

    <!-- Brand identity embedded in the left of the navbar -->
    <a class="siet-inline-brand" href="#/" aria-label="Sri Shakthi Institute of Engineering and Technology home">
      <span class="siet-inline-brand-logo-wrap">
        <img src="/brand/siet-logo.png" alt="Sri Shakthi" class="siet-inline-brand-logo">
      </span>
      <div class="siet-inline-brand-text">
        <span class="siet-inline-brand-name">SRI SHAKTHI</span>
        <span class="siet-inline-brand-sub">INSTITUTE OF ENGINEERING AND TECHNOLOGY</span>
        <span class="siet-inline-brand-motto">Learn <em>|</em> Innovate <em>|</em> Excel</span>
      </div>
    </a>

    <button class="institution-mobile-toggle" aria-label="Open navigation menu" type="button">${icon('menu')}</button>
    <a class="institution-mobile-logo" href="#/" aria-label="Sri Shakthi Home"><img src="/brand/siet-logo.png" alt="Sri Shakthi" class="mobile-logo-img"><span class="mobile-logo-text"><b>SRI SHAKTHI</b><small>Autonomous Institution</small></span></a>
    <a class="institution-home" href="#/" aria-label="Home">${icon('home')}</a>
    <div class="institution-menu">${pageGroups.map(g => {
  const isGroupActive = g.items.some(([s]) => s === currentRoute || (s === 'governance' && currentRoute === 'committees') || (s === 'ariia' && currentRoute === 'ariia-report') || (g.label === 'Accreditation' && currentRoute === 'accreditations'));
  return `${g.label === 'Accreditation' ? `<a class="institution-nav-link ${isCoeActive ? 'is-active-nav' : ''}" href="#/coe">COE</a>` : ''}${g.label === 'Explore' ? `<a class="institution-nav-link ${isPlacementActive ? 'is-active-nav' : ''}" href="#/placements">Placements</a>` : ''}<div class="institution-nav-group"><button type="button" class="${isGroupActive ? 'is-active-nav' : ''}">${g.label}${icon('down')}</button><div>${g.items.map(([s, n]) => `<a href="#/${s}">${n}</a>`).join('')}</div></div>`;
}).join('')}<a class="institution-nav-link" href="#/careers">Careers</a></div>
    <button class="home-header-search" type="button" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg></button>
    <a class="institution-nav-apply" href="#/apply">Apply Now ${icon('arrow')}</a>

  </nav>
</div></header>
<div class="mobile-nav-backdrop"></div>
<aside class="mobile-nav" aria-label="Mobile Navigation"><div class="mobile-nav-header"><a href="#/" class="mobile-nav-brand"><img src="/brand/siet-logo.png" alt="Sri Shakthi"><div><strong>SRI SHAKTHI</strong><small>Autonomous Institution</small></div></a><button class="mobile-nav-close" aria-label="Close menu">${icon('close')}</button></div><div class="mobile-nav-body"><a href="#/" class="mobile-nav-link mobile-nav-home">${icon('home')} Home</a><div class="mobile-nav-accordion">${pageGroups.map(g => `${g.label === 'Accreditation' ? `<a class="mobile-nav-link ${isCoeActive ? 'is-active-nav' : ''}" href="#/coe">COE</a>` : ''}${g.label === 'Explore' ? `<a class="mobile-nav-link ${isPlacementActive ? 'is-active-nav' : ''}" href="#/placements">Placements</a>` : ''}<div class="mobile-nav-group"><button type="button" class="mobile-nav-group-toggle" aria-expanded="false"><span>${g.label}</span>${icon('down')}</button><div class="mobile-nav-subitems">${g.items.map(([s, n]) => `<a href="#/${s}" class="mobile-nav-sublink">${n}</a>`).join('')}</div></div>`).join('')}<a class="mobile-nav-link" href="#/careers">Careers @ SIET</a></div></div><div class="mobile-nav-footer"><a class="mobile-apply-link" href="#/apply">Apply Now ${icon('arrow')}</a></div></aside>`;
}

export function applyHeader() {
  return `${announcementBar()}<header class="institution-header-v4 exact-image-header premium-header apply-portal-header"><div class="institution-header-shell"><nav class="institution-navbar"><a class="siet-inline-brand" href="#/"><span class="siet-inline-brand-logo-wrap"><img src="/brand/siet-logo.png" alt="Sri Shakthi" class="siet-inline-brand-logo"></span><div class="siet-inline-brand-text"><span class="siet-inline-brand-name">SRI SHAKTHI</span><span class="siet-inline-brand-sub">INSTITUTE OF ENGINEERING AND TECHNOLOGY</span><span class="siet-inline-brand-motto">Learn <em>|</em> Innovate <em>|</em> Excel</span></div></a><a class="institution-nav-apply" href="#/">← Back to Home</a></nav></div></header>`;
}
