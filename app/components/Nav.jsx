import { PiBooksFill, PiPaperPlaneTilt, PiSquaresFour } from 'react-icons/pi';
import { GoBook, GoBookmark, GoHome } from 'react-icons/go';

const Nav = () => {
  return (
    <nav className="md:col-span-1 md:static fixed bottom-0 md:row-[span_2_/_span_-1] flex justify-center items-center md:pr-3 xl:pr-0 bg-white w-full p-2 shadow-inner ">
      <ul className="flex gap-5 sm:gap-10 md:flex-col ">
        <li>
          <GoHome className="p-2 rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary md:text-5xl text-4xl   " />
        </li>
        <li>
          <PiBooksFill className="p-2 md:text-5xl text-white rounded-md cursor-pointer bg-primary text-4xl  " />
        </li>
        <li>
          <GoBook className="p-2 md:text-5xl rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary text-4xl " />
        </li>
        <li>
          <GoBookmark className="p-2 md:text-5xl rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary text-4xl " />
        </li>
        <li>
          <PiSquaresFour className="p-2 md:text-5xl rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary text-4xl " />
        </li>
        <li>
          <PiPaperPlaneTilt className="p-2 md:text-5xl rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary text-4xl " />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
