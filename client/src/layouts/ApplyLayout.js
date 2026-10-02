import { header } from '../components/common/Header.js';
import { footer, bottomDecor } from '../components/common/Footer.js';

export function renderApplyLayout(content) {
  return header() + content + bottomDecor() + footer();
}

