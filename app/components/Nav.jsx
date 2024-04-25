import { PiBooksFill, PiPaperPlaneTilt, PiSquaresFour } from 'react-icons/pi';
import { GoBook, GoBookmark, GoHome } from 'react-icons/go';

const Nav = () => {
  return (
    <nav className="col-span-1 row-[span_2_/_span_-1] flex  justify-center items-center">
      <ul className="flex flex-col gap-10">
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
