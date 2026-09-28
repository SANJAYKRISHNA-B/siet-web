import { applyHeader } from '../components/common/Header.js';
import { footer, bottomDecor } from '../components/common/Footer.js';

export function renderApplyLayout(content) {
  return applyHeader() + content + bottomDecor() + footer();
}
