export function route() {
  const raw = decodeURIComponent((location.hash || '').replace(/^[#/]+/, '')).replace(/\/$/, '');
  return raw.split('?')[0];
}

export function routeParams() {
  const raw = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  const qIndex = raw.indexOf('?');
  if (qIndex === -1) return new URLSearchParams();
  return new URLSearchParams(raw.slice(qIndex + 1));
}

export function navigateTo(path) {
  location.hash = path.startsWith('#') ? path : `#/${path.replace(/^\//, '')}`;
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
