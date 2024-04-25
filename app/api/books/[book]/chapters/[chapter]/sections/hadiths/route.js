import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db = null;

export async function GET(req, res) {
  const totalUrl = req.url.split('/');

  const chapter = totalUrl[totalUrl.length - 3];
  const book = totalUrl[totalUrl.length - 5];

  if (!db) {
    db = await open({
      filename: './hadith.sqlite',
      driver: sqlite3.Database,
    });
  }

  const items = await db.all(
    'SELECT * FROM hadith WHERE chapter_id = ? AND book_name = ?',
    [chapter, book]
  );

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    status: 200,
  });
}
