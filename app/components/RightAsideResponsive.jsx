import { RxCross2 } from 'react-icons/rx';
import Settings from './Settings';
import Donate from './Donate';

const RightAsideResponsive = ({ sidebarIsOpen, setSidebarIsOpen }) => {
  return (
    <div
      className={`flex flex-col z-10 fixed top-0 right-0 h-full bg-white w-full sm:w-1/2 lg:w-1/3 lg:max-w-[25rem] shadow-2xl px-5 py-7 gap-10 transition-all duration-500 ${
        sidebarIsOpen ? 'translate-x-0' : 'translate-x-full'
      } `}
    >
      <div className="flex justify-between ">
        <p className="text-2xl text-medium">সেটিংস</p>
        <button
          className=" text-text-light"
          onClick={() => {
            setSidebarIsOpen(false);
          }}
        >
          <RxCross2 className="text-2xl" />
        </button>
      </div>

      <Settings />
      <Donate />
    </div>
  );
};

export default RightAsideResponsive;
