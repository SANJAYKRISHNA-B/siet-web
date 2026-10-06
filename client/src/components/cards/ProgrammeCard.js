import { deptIcon } from '../common/SvgIcons.js';
import { slugify } from '../../utils/dom.js';

const DEPT_SLUG_MAP = {
  'CSE (Cyber Security)': 'cse-cyber-security',
  'M.E. CAD / CAM': 'cad-cam',
  'M.E. Computer Science and Engineering': 'computer-science-and-engineering',
  'M.E. Embedded Systems': 'embedded-system-technologies',
  'M.E. Structural Engineering': 'structural-engineering',
  'M.E. VLSI Design': 'vlsi-design',
  'Master of Business Administration (MBA)': 'management-studies',
  'Master of Computer Applications (MCA)': 'computer-applications'
};

export function getDeptSlug(name) {
  return DEPT_SLUG_MAP[name] || slugify(name);
}

export function programmeCards(list) {
  return list.map(([n, d, ic]) => {
    const slug = getDeptSlug(n);
    return `
    <a href="#/department/${slug}" class="programme-card-v2 reveal" data-course="${n}" data-slug="${slug}">
      <div class="prog-icon-wrap">${deptIcon(ic)}</div>
      <div class="prog-info">
        <h4>${n}</h4>
        <p>${d}</p>
      </div>
      <span class="prog-arrow-circle" aria-hidden="true">→</span>
    </a>
  `;
  }).join('');
}
