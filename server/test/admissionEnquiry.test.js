import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cleanText, normalizeEmail, normalizeIndianMobile } from '../controllers/admissionEnquiryController.js';

test('normalizes supported Indian mobile number formats', () => {
  assert.equal(normalizeIndianMobile('9876543210'), '9876543210');
  assert.equal(normalizeIndianMobile('+91 98765 43210'), '9876543210');
  assert.equal(normalizeIndianMobile('91-98765-43210'), '9876543210');
});

test('rejects invalid Indian mobile numbers', () => {
  assert.equal(normalizeIndianMobile('1234567890'), null);
  assert.equal(normalizeIndianMobile('98765'), null);
  assert.equal(normalizeIndianMobile('not-a-phone'), null);
});

test('sanitizes text and validates email without changing valid values', () => {
  assert.equal(cleanText('  Sanjay\u0000  Kumar  '), 'Sanjay Kumar');
  assert.equal(normalizeEmail(' Student@Example.com '), 'student@example.com');
  assert.equal(normalizeEmail('invalid-email'), null);
});

test('MySQL migration defines persistent enquiry fields and string mobile storage', () => {
  const testDirectory = path.dirname(fileURLToPath(import.meta.url));
  const sql = fs.readFileSync(path.resolve(testDirectory, '../migrations/001_create_enquiry_tables.sql'), 'utf8');
  assert.match(sql, /CREATE TABLE IF NOT EXISTS admission_enquiries/i);
  assert.match(sql, /mobile_number VARCHAR\(20\) NOT NULL/i);
  assert.match(sql, /student_name VARCHAR\(150\) NOT NULL/i);
  assert.match(sql, /updated_at TIMESTAMP/i);
  assert.doesNotMatch(sql, /UNIQUE\s*\([^)]*mobile_number/i);
});
