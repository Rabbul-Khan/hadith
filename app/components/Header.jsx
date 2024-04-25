import { PiBooksFill } from 'react-icons/pi';

const Header = () => {
  return (
    <header className="flex justify-between row-span-1 col-span-full">
      <div className="flex items-center gap-5">
        <PiBooksFill
          color="green"
          size={40}
          className="p-2 border-2 border-green-400 rounded-md "
        />
        <div>
          <p className="font-bold ">সূচিপত্র</p>
          <p className="text-xs ">হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>
      <div>
        <input placeholder="Search Hadith" />
        <button>Night Mode</button>
      </div>
    </header>
  );
};

export default Header;
