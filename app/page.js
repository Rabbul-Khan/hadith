'use client';

import { useEffect, useState } from 'react';

import Header from './components/Header';
import Nav from './components/Nav';
import BookChapter from './components/BookChapter';
import MainContent from './components/MainContent';
import RightAside from './components/RightAside';
import BookChapterResponsive from './components/BookChapterResponsive';
import RightAsideResponsive from './components/RightAsideResponsive';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState({});
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState({});
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState({});
  const [hadiths, setHadiths] = useState([]);

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [bookChapterIsOpen, setBookChapterIsOpen] = useState(false);

  const [showBooks, setShowBooks] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch('/books.json');
    const data = await response.json();
    setBooks(data);
    setSelectedBook(data[0]);
    fetchChapters();
  };

  const fetchChapters = async () => {
    const response = await fetch('/chapter.json');
    const data = await response.json();
    setChapters(data);
    setSelectedChapter(data[0]);
    fetchSections();
  };

  const fetchSections = async () => {
    const response = await fetch('/section.json');
    const data = await response.json();
    setSections(data);
    setSelectedSection(data[0]);
    fetchHadiths();
  };

  const fetchHadiths = async () => {
    const response = await fetch('/hadith.json');
    const data = await response.json();
    setHadiths(data);
  };

  return (
    <div
      className={`min-w-full grid grid-cols-[0.5fr_.5fr_.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_.5fr_.5fr] grid-rows-[5vh_auto] min-h-screen py-4  md:p-4 xl:pl-0 text-black bg-white gap-y-5 leading-8 prose prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl`}
    >
      <Header
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
        bookChapterIsOpen={bookChapterIsOpen}
      />

      <Nav sidebarIsOpen={sidebarIsOpen} />

      <BookChapterResponsive
        bookChapterIsOpen={bookChapterIsOpen}
        showBooks={showBooks}
        setShowBooks={setShowBooks}
        books={books}
        chapters={chapters}
        setBookChapterIsOpen={setBookChapterIsOpen}
      />

      <RightAsideResponsive
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />

      <div
        className={`grid col-start-1 md:col-start-2 col-end-13 bg-[#F2F4F6] rounded-lg md:grid-cols-subgrid ${
          sidebarIsOpen ? 'filter blur-md cursor-pointer select-none ' : ''
        } ${
          bookChapterIsOpen ? 'filter blur-md cursor-pointer select-none ' : ''
        }`}
        onClick={() => {
          setSidebarIsOpen(false);
        }}
      >
        <div className="hidden col-start-1 col-end-4 xl:block">
          <BookChapter
            books={books}
            chapters={chapters}
            showBooks={showBooks}
            setShowBooks={setShowBooks}
          />
        </div>
        <MainContent
          chapters={chapters}
          sections={sections}
          hadiths={hadiths}
          selectedBook={selectedBook}
          selectedChapter={selectedChapter}
          selectedSection={selectedSection}
          bookChapterIsOpen={bookChapterIsOpen}
          setBookChapterIsOpen={setBookChapterIsOpen}
        />
        <RightAside />
      </div>
    </div>
  );
}
