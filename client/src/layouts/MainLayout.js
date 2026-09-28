import { header } from '../components/common/Header.js';
import { footer, bottomDecor } from '../components/common/Footer.js';

export function renderMainLayout(content, currentRoute = '') {
  return header() + content + (currentRoute ? bottomDecor() : '') + footer();
}
