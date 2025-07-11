
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import path from 'path';
import { Database } from 'sqlite';

const dbPath  = path.resolve(process.cwd(), 'carlistings.db');

let dbConnection: Database | null = null;

export async function openDB() {
  if (dbConnection) return dbConnection;
  
  dbConnection = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
  
  // Enable foreign keys
  await dbConnection.exec('PRAGMA foreign_keys = ON');
  
  return dbConnection;
}