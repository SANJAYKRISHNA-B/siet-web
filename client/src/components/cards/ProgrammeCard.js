import { deptIcon } from '../common/SvgIcons.js';

export function programmeCards(list) {
  return list.map(([n, d, ic]) => `
    <div class="programme-card-v2 reveal" role="button" tabindex="0" data-course="${n}">
      <div class="prog-icon-wrap">${deptIcon(ic)}</div>
      <div class="prog-info">
        <h4>${n}</h4>
        <p>${d}</p>
      </div>
      <span class="prog-arrow-circle" aria-hidden="true">→</span>
    </div>
  `).join('');
}
