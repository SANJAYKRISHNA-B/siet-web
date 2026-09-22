import './env.js';
import mysql from 'mysql2/promise';

const requiredVariables = ['MYSQL_HOST', 'MYSQL_USER', 'MYSQL_DATABASE'];
const missingVariables = requiredVariables.filter(name => !process.env[name]);

export const pool = missingVariables.length ? null : mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: Number(process.env.MYSQL_CONNECTION_LIMIT || 10),
  queueLimit: 0,
  charset: 'utf8mb4',
  timezone: 'Z'
});

export function requireDatabase() {
  if (!pool) {
    const error = new Error(`MySQL is not configured. Missing: ${missingVariables.join(', ')}.`);
    error.status = 503;
    throw error;
  }
  return pool;
}

export async function connectDatabase() {
  if (!pool) {
    console.warn(`MySQL is not configured. Missing: ${missingVariables.join(', ')}.`);
    return false;
  }
  try {
    await pool.query('SELECT 1');
    console.log('MySQL connected');
    return true;
  } catch (error) {
    console.warn(`MySQL unavailable: ${error.message}`);
    return false;
  }
}
