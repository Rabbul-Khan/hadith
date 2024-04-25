'use client';

import { useEffect, useState } from 'react';

import BookChapter from './components/BookChapter';
import MainContent from './components/MainContent';
import RightAside from './components/RightAside';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState('');
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState('');
  const [hadiths, setHadiths] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/books', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      setBooks(data);

      if (data.length > 0) {
        setSelectedBook(data[0]);
        fetchChapters(data[0]);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const fetchChapters = async (selectedBook) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/books/${selectedBook.book_name}/chapters`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      setChapters(data);

      if (data.length > 0) {
        setSelectedChapter(data[0].chapter_id);
        fetchSections(data[0].book_name, data[0].chapter_id);
      }
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }
  };

  const fetchSections = async (selectedBook, selectedChapter) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/books/${selectedBook}/chapters/${selectedChapter}/sections`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      setSections(data);

      if (data.length > 0) {
        setSelectedSection(data[0].section_id);

        fetchHadiths(selectedBook, selectedChapter);
      }
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }
  };

  const fetchHadiths = async (selectedBook, selectedChapter) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/books/${selectedBook}/chapters/${selectedChapter}/sections/hadiths`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      setHadiths(data);
    } catch (error) {
      console.error('Error fetching chapters:', error);
    }
  };

  return (
    <div className="grid col-start-2 col-end-13 bg-[#F2F4F6] rounded-lg grid-cols-subgrid">
      <BookChapter books={books} chapters={chapters} />
      <MainContent
        chapters={chapters}
        sections={sections}
        hadiths={hadiths}
        selectedBook={selectedBook}
        selectedChapter={selectedChapter}
        selectedSection={selectedSection}
      />
      <RightAside />
    </div>
  );
}
