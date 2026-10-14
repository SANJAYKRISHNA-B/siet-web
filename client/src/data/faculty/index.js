import { cseFaculty } from './cse.js';
import { itFaculty } from './it.js';
import { aimlFaculty } from './aiml.js';
import { aidsFaculty } from './aids.js';
import { cyberFaculty } from './cyber-security.js';
import { eceFaculty } from './ece.js';
import { eeeFaculty } from './eee.js';
import { mechFaculty } from './mechanical.js';
import { civilFaculty } from './civil.js';
import { bmeFaculty } from './biomedical.js';
import { agriFaculty } from './agricultural.js';
import { biotechFaculty } from './biotechnology.js';
import { vlsiFaculty } from './vlsi.js';
import { foodFaculty } from './food-tech.js';

export const allFacultyByDept = {
  'Computer Science and Engineering': cseFaculty,
  'Computer Science and Engineering (Cyber Security)': cyberFaculty,
  'Information Technology': itFaculty,
  'Biotechnology': biotechFaculty,
  'Agricultural Engineering': agriFaculty,
  'Mechanical Engineering': mechFaculty,
  'Civil Engineering': civilFaculty,
  'Electrical and Electronics Engineering': eeeFaculty,
  'Electronics and Communication Engineering': eceFaculty,
  'VLSI Design': vlsiFaculty,
  'Biomedical Engineering': bmeFaculty,
  'Artificial Intelligence and Data Science': aidsFaculty,
  'Artificial Intelligence and Machine Learning': aimlFaculty,
  'Food Technology': foodFaculty
};

// Aliases mapping for flexible lookup
const deptAliases = {
  'cse': 'Computer Science and Engineering',
  'it': 'Information Technology',
  'aiml': 'Artificial Intelligence and Machine Learning',
  'ai & ml': 'Artificial Intelligence and Machine Learning',
  'aids': 'Artificial Intelligence and Data Science',
  'ai & ds': 'Artificial Intelligence and Data Science',
  'cyber': 'Computer Science and Engineering (Cyber Security)',
  'cyber security': 'Computer Science and Engineering (Cyber Security)',
  'cse (cyber security)': 'Computer Science and Engineering (Cyber Security)',
  'ece': 'Electronics and Communication Engineering',
  'eee': 'Electrical and Electronics Engineering',
  'mech': 'Mechanical Engineering',
  'civil': 'Civil Engineering',
  'bme': 'Biomedical Engineering',
  'agri': 'Agricultural Engineering',
  'biotech': 'Biotechnology',
  'vlsi': 'VLSI Design',
  'food': 'Food Technology',
  'food technology': 'Food Technology'
};

export function getFacultyByDepartment(deptName) {
  if (!deptName) return [];
  const clean = deptName.trim();
  if (allFacultyByDept[clean]) return allFacultyByDept[clean];
  
  const lower = clean.toLowerCase();
  for (const [key, val] of Object.entries(allFacultyByDept)) {
    if (key.toLowerCase() === lower || key.toLowerCase().includes(lower) || lower.includes(key.toLowerCase())) {
      return val;
    }
  }

  const mapped = deptAliases[lower];
  if (mapped && allFacultyByDept[mapped]) return allFacultyByDept[mapped];

  return [];
}

export function getFacultyById(id) {
  if (!id) return null;
  for (const list of Object.values(allFacultyByDept)) {
    const found = list.find(f => f.id === id);
    if (found) return found;
  }
  return null;
}
