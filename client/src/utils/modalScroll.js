export function lockModalScroll() {
  document.documentElement.classList.add('modal-open');
  document.body.classList.add('modal-open');
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

export function unlockModalScroll() {
  document.documentElement.classList.remove('modal-open');
  document.body.classList.remove('modal-open');
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}

export function attachModalScrollTrap(modalEl) {
  if (!modalEl || modalEl.dataset.scrollTrapAttached) return;
  modalEl.dataset.scrollTrapAttached = 'true';

  modalEl.addEventListener('wheel', (e) => {
    const box = modalEl.querySelector('.siet-lib-modal-box');
    if (!box || !box.contains(e.target) || e.target === modalEl) {
      e.preventDefault();
      return;
    }

    const canScroll = box.scrollHeight > box.clientHeight + 1;
    if (!canScroll) {
      e.preventDefault();
      return;
    }

    const delta = e.deltaY;
    const atTop = box.scrollTop <= 0 && delta < 0;
    const atBottom = box.scrollTop + box.clientHeight >= box.scrollHeight - 1 && delta > 0;
    if (atTop || atBottom) {
      e.preventDefault();
    }
  }, { passive: false });

  modalEl.addEventListener('touchmove', (e) => {
    const box = modalEl.querySelector('.siet-lib-modal-box');
    if (!box || !box.contains(e.target) || e.target === modalEl) {
      e.preventDefault();
    }
  }, { passive: false });
}
