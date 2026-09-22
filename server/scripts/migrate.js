import '../config/env.js';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mysql from 'mysql2/promise';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const sql = await fs.readFile(path.resolve(scriptDirectory, '../migrations/001_create_enquiry_tables.sql'), 'utf8');
const requiredVariables = ['MYSQL_HOST', 'MYSQL_USER', 'MYSQL_DATABASE'];
const missingVariables = requiredVariables.filter(name => !process.env[name]);
if (missingVariables.length) {
  throw new Error(`Cannot run migrations. Missing environment variables: ${missingVariables.join(', ')}`);
}

const connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE,
  charset: 'utf8mb4',
  multipleStatements: true
});

try {
  await connection.query(sql);
  console.log('MySQL enquiry migrations completed.');
} finally {
  await connection.end();
}
