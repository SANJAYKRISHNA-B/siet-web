export function animateCounter(el, instant = false) {
  if (el.dataset.counted === 'true') return;
  el.dataset.counted = 'true';
  const to = Number(el.dataset.to);
  const suffix = el.dataset.suffix || '';
  if (instant) {
    el.textContent = to.toLocaleString('en-IN') + suffix;
    return;
  }
  const start = performance.now();
  const duration = 1650;
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const v = Math.round(to * (1 - (1 - p) ** 3));
    el.textContent = v.toLocaleString('en-IN') + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function observe() {
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    if (entry.target.classList.contains('js-counter')) animateCounter(entry.target, reduce);
    observer.unobserve(entry.target);
  }), { threshold: 0.01, rootMargin: '120px 0px 60px 0px' });

  const els = [...document.querySelectorAll('.reveal, .js-counter')];
  els.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (reduce || (rect.top < window.innerHeight + 100 && rect.bottom > -100)) {
      el.classList.add('is-visible');
      if (el.classList.contains('js-counter')) animateCounter(el, reduce);
    } else {
      observer.observe(el);
    }
  });
}
