import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db = null;

export async function GET(req, res) {
  //const { book } = req.query;

  const totalUrl = req.url.split('/');
  const book = totalUrl[totalUrl.length - 1];

  if (!db) {
    console.log(req);
    db = await open({
      filename: './hadith.sqlite',
      driver: sqlite3.Database,
    });
  }

  const items = await db.all('SELECT * FROM books WHERE book_name = ?', book);

  //const items = await db.all('SELECT * FROM books');

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    status: 200,
  });
}
