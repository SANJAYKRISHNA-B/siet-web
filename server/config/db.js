import './env.js';
import mysql from 'mysql2/promise';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';

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

let sqliteInstance = null;

function getSqliteInstance() {
  if (sqliteInstance) return sqliteInstance;

  const currentDir = path.dirname(fileURLToPath(import.meta.url));
  const dataDir = path.resolve(currentDir, '../data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  const dbFile = path.join(dataDir, 'siet.sqlite');
  const sqlite = new DatabaseSync(dbFile);

  // Enable WAL mode and busy timeout to safely support concurrent readers and test processes
  try {
    sqlite.exec(`
      PRAGMA journal_mode = WAL;
      PRAGMA busy_timeout = 5000;
      PRAGMA synchronous = NORMAL;
    `);
  } catch {
    /* fallback to default pragma if not supported */
  }

  // Initialize tables if they do not exist
  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS admission_enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_name TEXT NOT NULL,
      mobile_number TEXT NOT NULL,
      email TEXT,
      course TEXT,
      department TEXT,
      city TEXT,
      source TEXT NOT NULL DEFAULT 'Website',
      remarks TEXT,
      consent INTEGER NOT NULL DEFAULT 1,
      status TEXT NOT NULL DEFAULT 'new',
      created_at DATETIME NOT NULL DEFAULT (datetime('now')),
      updated_at DATETIME NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS admission_enquiry_calls (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      admission_enquiry_id INTEGER NOT NULL,
      provider TEXT NOT NULL DEFAULT 'mock',
      provider_call_sid TEXT,
      student_number TEXT NOT NULL,
      counsellor_number TEXT NOT NULL,
      call_status TEXT NOT NULL DEFAULT 'queued',
      duration_seconds INTEGER DEFAULT 0,
      retry_count INTEGER DEFAULT 0,
      error_message TEXT,
      created_at DATETIME NOT NULL DEFAULT (datetime('now')),
      updated_at DATETIME NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (admission_enquiry_id) REFERENCES admission_enquiries(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS enquiries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      course TEXT NOT NULL,
      message TEXT,
      enquiry_type TEXT NOT NULL DEFAULT 'general',
      created_at DATETIME NOT NULL DEFAULT (datetime('now')),
      updated_at DATETIME NOT NULL DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_adm_mobile_created ON admission_enquiries(mobile_number, created_at);
    CREATE INDEX IF NOT EXISTS idx_adm_call_sid ON admission_enquiry_calls(provider_call_sid);
  `);

  async function retryOnLock(fn, maxRetries = 5, delayMs = 100) {
    let lastErr = null;
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        return fn();
      } catch (err) {
        lastErr = err;
        if (err?.errcode === 5 || err?.message?.includes('locked') || err?.message?.includes('busy')) {
          await new Promise(r => setTimeout(r, delayMs * (attempt + 1)));
          continue;
        }
        throw err;
      }
    }
    throw lastErr;
  }

  sqliteInstance = {
    execute: async (sql, params = []) => {
      // Normalize Date objects to SQLite datetime strings
      const normalizedParams = params.map(p => {
        if (p instanceof Date) {
          return p.toISOString().replace('T', ' ').substring(0, 19);
        }
        return p;
      });

      const isSelect = /^\s*SELECT/i.test(sql);
      const stmt = sqlite.prepare(sql);
      if (isSelect) {
        const rows = await retryOnLock(() => stmt.all(...normalizedParams));
        return [rows];
      } else {
        const info = await retryOnLock(() => stmt.run(...normalizedParams));
        return [{
          insertId: Number(info.lastInsertRowid),
          affectedRows: info.changes
        }];
      }
    },
    query: async (sql, params = []) => {
      const isSelect = /^\s*SELECT/i.test(sql);
      const stmt = sqlite.prepare(sql);
      if (isSelect) {
        const rows = await retryOnLock(() => stmt.all(...(params || [])));
        return [rows];
      }
      const info = await retryOnLock(() => stmt.run(...(params || [])));
      return [{ insertId: Number(info.lastInsertRowid), affectedRows: info.changes }];
    }
  };

  return sqliteInstance;
}

export function isSqliteFallback() {
  return !pool;
}

export function requireDatabase() {
  if (pool) return pool;
  return getSqliteInstance();
}

export async function connectDatabase() {
  if (pool) {
    try {
      await pool.query('SELECT 1');
      console.log('MySQL connected');
      return true;
    } catch (error) {
      console.warn(`MySQL unavailable (${error.message}). Falling back to local persistent SQLite.`);
      return true;
    }
  }
  // Initialize local SQLite
  try {
    getSqliteInstance();
    console.log('Using local persistent SQLite (₹0 Free Mode)');
    return true;
  } catch (err) {
    console.error('Failed to initialize local SQLite database:', err.message);
    return false;
  }
}
