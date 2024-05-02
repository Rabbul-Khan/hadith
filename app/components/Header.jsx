'use client';

import { PiBooksFill, PiMagnifyingGlassBold } from 'react-icons/pi';
import { FaHandHoldingHeart } from 'react-icons/fa6';
import { IoIosSettings } from 'react-icons/io';

import { inter } from '../fonts';

const Header = ({ setSidebarIsOpen, sidebarIsOpen, bookChapterIsOpen }) => {
  return (
    <header
      className={`flex items-center justify-between row-span-1 p-5 md:p-0 col-span-full xl:pl-5 ${
        sidebarIsOpen ? 'filter blur-md select-none cursor-pointer' : ''
      }
      ${bookChapterIsOpen ? 'filter blur-md select-none cursor-pointer' : ''}
        `}
    >
      <div className="flex items-center gap-5 cursor-pointer">
        <PiBooksFill className="p-1 lg:p-2 text-4xl sm:text-[2.8rem] border rounded-lg text-primary border-primary" />
        <div className="flex flex-col">
          <p className="hidden text-3xl sm:block lg:hidden text-primary">
            আল হাদিস
          </p>
          <p className="hidden text-xl font-bold lg:block">হাদিস সমূহ</p>
          <p className="hidden text-sm lg:block text-text-light">
            হাদিস পড়ুন শিখুন এবং জানুন
          </p>
        </div>
      </div>
      <div className="flex gap-5 lg:gap-20">
        <PiMagnifyingGlassBold className="p-2 border text-4xl sm:text-[2.8rem] rounded-lg lg:hidden bg-slate-200 text-[#5C5C5C]" />

        <div className="relative hidden lg:block">
          <PiMagnifyingGlassBold className="absolute top-5 left-5 text-[#5C5C5C] " />
          <input
            placeholder="Search Hadith"
            type="text"
            className={`${inter.className} p-3 pl-12 outline outline-2  outline-[#DEE1E5] rounded-lg focus:outline-primary`}
          />
        </div>
        <button
          className="2xl:hidden"
          onClick={() => {
            setSidebarIsOpen(true);
          }}
        >
          <IoIosSettings className="p-2 text-4xl sm:text-[2.8rem] text-white rounded-lg bg-primary" />
        </button>
        <button className="items-center hidden gap-2 px-5 py-3 text-white rounded-lg 2xl:flex bg-primary">
          <span className="font-medium tracking-wider ">সাপোর্ট করুন</span>

          <FaHandHoldingHeart className="inline text-xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
