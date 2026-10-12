import fs from 'node:fs';
import path from 'node:path';

function findHrefs(dir) {
  let results = new Set();
  const files = fs.readdirSync(dir, { recursive: true });
  for (const f of files) {
    if (f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.html')) {
      const p = path.join(dir, f);
      if (fs.statSync(p).isFile()) {
        const content = fs.readFileSync(p, 'utf8');
        const matches = content.matchAll(/href=["']#\/([^"'#?]+)/g);
        for (const m of matches) {
          results.add(m[1]);
        }
      }
    }
  }
  return [...results];
}

const hrefs = findHrefs('client/src');
console.log('Found', hrefs.length, 'unique hash routes in client/src:');
console.log(JSON.stringify(hrefs.sort(), null, 2));
