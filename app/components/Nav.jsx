import { PiBooksFill, PiPaperPlaneTilt, PiSquaresFour } from 'react-icons/pi';
import { GoBook, GoBookmark, GoHome } from 'react-icons/go';

const Nav = () => {
  return (
    <nav className="col-span-1 row-[span_2_/_span_-1] flex  justify-center items-center">
      <ul className="flex flex-col gap-10">
        <li>
          <GoHome
            size={50}
            color="gray"
            className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          />
        </li>
        <li>
          <PiBooksFill
            size={50}
            color="gray"
            className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          />
        </li>
        <li>
          <GoBook
            size={50}
            color="gray"
            className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          />
        </li>
        <li>
          <GoBookmark
            size={50}
            color="gray"
            className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          />
        </li>
        <li>
          <PiSquaresFour
            size={50}
            color="gray"
            className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          />
        </li>
        <li>
          <PiPaperPlaneTilt
            size={50}
            color="gray"
            className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
