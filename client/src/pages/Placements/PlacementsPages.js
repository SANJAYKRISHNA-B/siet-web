import { placementsDashboardPage, initPlacementsDynamicKpi } from './PlacementsDashboardPage.js';
import { entrepreneurshipPage, initEntrepreneurshipEvents } from './EntrepreneurshipPage.js';

export function placementsPortalPage(route) {
  if (route === 'entrepreneurship' || route === 'career-support/entrepreneurship' || route === 'placements/entrepreneurship') {
    return entrepreneurshipPage();
  }
  return placementsDashboardPage(route);
}

export function bindPlacementEvents($, $$) {
  const r = (window.location.hash || '').replace(/^#\/?/, '');
  if (r === 'entrepreneurship' || r === 'career-support/entrepreneurship' || r === 'placements/entrepreneurship') {
    if (typeof initEntrepreneurshipEvents === 'function') initEntrepreneurshipEvents();
  } else {
    if (typeof initPlacementsDynamicKpi === 'function') initPlacementsDynamicKpi();
  }
}

export {
  placementsDashboardPage,
  entrepreneurshipPage,
  initPlacementsDynamicKpi,
  initEntrepreneurshipEvents
};
