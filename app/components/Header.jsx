import { PiBooksFill, PiMagnifyingGlassBold } from 'react-icons/pi';

const Header = () => {
  return (
    <header className="flex items-center justify-between row-span-1 col-span-full">
      <div className="flex items-center gap-5">
        <PiBooksFill
          color="#2B9E76"
          size={45}
          className="p-2 border rounded-lg border-primary"
        />
        <div className="flex flex-col gap-1">
          <p className="font-bold">হাদিস সমূহ</p>
          <p className="text-sm text-text-light ">হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="relative">
          <PiMagnifyingGlassBold
            className="absolute top-4 left-5"
            color="#5C5C5C"
          />
          <input
            placeholder="Search Hadith"
            type="text"
            className="p-3 pl-12 outline outline-[#DEE1E5] rounded-lg focus:outline-primary"
          />
        </div>
        <button className="px-5 py-3 text-white rounded-lg bg-primary">
          সাপোর্ট করুন
        </button>
      </div>
    </header>
  );
};

export default Header;
