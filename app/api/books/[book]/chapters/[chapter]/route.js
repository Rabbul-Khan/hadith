import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db = null;

export async function GET(req, res) {
  const totalUrl = req.url.split('/');
  const chapter = totalUrl[totalUrl.length - 1];
  const book = totalUrl[totalUrl.length - 3];

  if (!db) {
    db = await open({
      filename: './hadith.sqlite',
      driver: sqlite3.Database,
    });
  }

  const items = await db.all(
    'SELECT * FROM chapter WHERE number = ? AND book_name = ?',
    [chapter, book]
  );

  console.log(items);

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    status: 200,
  });
}
