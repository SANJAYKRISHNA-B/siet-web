import { cpSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const clientDist = fileURLToPath(new URL('../dist/', import.meta.url));
const rootDist = fileURLToPath(new URL('../../dist/', import.meta.url));

rmSync(rootDist, { recursive: true, force: true });
cpSync(clientDist, rootDist, { recursive: true });

console.log('Mirrored client/dist to root dist for deployment.');
