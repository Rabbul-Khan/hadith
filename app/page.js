'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="min-w-full  grid grid-cols-12 grid-rows-[5vh_auto] min-h-screen p-2 text-black bg-white ">
      <header className="flex justify-between row-span-1 outline-dotted col-span-full">
        <div className="flex">
          <div>Icon</div>
          <div>
            <div>সূচিপত্র</div>
            <div>হাদিস পড়ুন শিখুন এবং জানুন</div>
          </div>
        </div>
        <div>
          <input placeholder="Search Hadith" />
          <button>Night Mode</button>
        </div>
      </header>

      <nav className="col-span-1 row-[span_2_/_span_-1] outline-dashed flex outline-red-500 justify-center items-center">
        <ul>
          <li>Home</li>
          <li>Books</li>
          <li>Chapter</li>
          <li>Bookmarks</li>
          <li>Menu</li>
          <li>Share</li>
          <button>Donate</button>
        </ul>
      </nav>

      <div className="grid col-start-2 col-end-13 bg-gray-200 grid-cols-subgrid">
        <aside className="flex flex-col col-start-1 col-end-4 p-5 outline-dotted outline-yellow-500">
          <div className="flex">
            <p>বই</p>
            <p>অধ্যায়</p>
          </div>
          <input placeholder="Search For Filter" />
          <div>
            {books.map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.id}</p>
              </div>
            ))}
          </div>
        </aside>
        <main className="col-start-4 col-end-9 p-5 outline-lime-500 outline">
          Main
        </main>
        <aside className="flex flex-col col-start-9 col-end-13 p-5 outline-dotted outline-yellow-500">
          Settings
        </aside>
      </div>
    </div>
  );
}
