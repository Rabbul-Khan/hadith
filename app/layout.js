import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hadis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-w-full grid grid-cols-[0.5fr_.5fr_.5fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_.5fr_.5fr] grid-rows-[5vh_auto] min-h-screen py-4 md:p-4 text-black bg-white gap-y-5 leading-8 prose prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl">
          <Header />
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
