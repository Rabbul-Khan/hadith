import { PiBooksFill, PiPaperPlaneTilt, PiSquaresFour } from 'react-icons/pi';
import { GoBook, GoBookmark, GoHome } from 'react-icons/go';

const Nav = () => {
  return (
    <nav className="md:col-span-1 md:static fixed bottom-0 md:row-[span_2_/_span_-1] flex justify-center items-center pr-3 xl:pr-0 bg-white w-full p-2 shadow-inner ">
      <ul className="flex gap-10 md:flex-col">
        <li>
          <GoHome
            size={50}
            //color="gray"
            className="p-2 rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary"
          />
        </li>
        <li>
          <PiBooksFill
            size={50}
            className="p-2 text-white rounded-md cursor-pointer bg-primary "
          />
        </li>
        <li>
          <GoBook
            size={50}
            className="p-2 rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary"
          />
        </li>
        <li>
          <GoBookmark
            size={50}
            className="p-2 rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary"
          />
        </li>
        <li>
          <PiSquaresFour
            size={50}
            className="p-2 rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary"
          />
        </li>
        <li>
          <PiPaperPlaneTilt
            size={50}
            className="p-2 rounded-md cursor-pointer text-text-light hover:bg-gray-200 hover:text-primary"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
