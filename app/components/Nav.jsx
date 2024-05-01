import { PiBooksFill, PiPaperPlaneTilt, PiSquaresFour } from 'react-icons/pi';
import { GoBook, GoBookmark, GoHome } from 'react-icons/go';

const Nav = ({ sidebarIsOpen }) => {
  return (
    <nav
      className={`md:col-span-1 md:static fixed bottom-0 md:row-[span_2_/_span_-1] flex justify-center items-center md:pr-3 xl:pr-0 bg-white w-full  shadow-inner  ${
        sidebarIsOpen ? 'filter blur-md cursor-pointer select-none' : ''
      }`}
    >
      <ul className="flex gap-5 sm:gap-10 md:flex-col ">
        <li>
          <GoHome className="p-2 text-4xl rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary md:text-5xl " />
        </li>
        <li>
          <PiBooksFill className="p-2 text-4xl text-white rounded-md cursor-pointer md:text-5xl bg-primary " />
        </li>
        <li>
          <GoBook className="p-2 text-4xl rounded-md cursor-pointer md:text-5xl text-text-light hover:bg-gray-200 hover:text-primary " />
        </li>
        <li>
          <GoBookmark className="p-2 text-4xl rounded-md cursor-pointer md:text-5xl text-text-light hover:bg-gray-200 hover:text-primary " />
        </li>
        <li>
          <PiSquaresFour className="p-2 text-4xl rounded-md cursor-pointer md:text-5xl text-text-light hover:bg-gray-200 hover:text-primary " />
        </li>
        <li>
          <PiPaperPlaneTilt className="p-2 text-4xl rounded-md cursor-pointer md:text-5xl text-text-light hover:bg-gray-200 hover:text-primary " />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
