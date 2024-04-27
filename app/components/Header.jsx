import { PiBooksFill, PiMagnifyingGlassBold } from 'react-icons/pi';

const Header = () => {
  return (
    <header className="flex items-center justify-between row-span-1 col-span-full">
      <div className="flex items-center gap-5 cursor-pointer">
        <PiBooksFill
          color="#2B9E76"
          size={45}
          className="p-2 border rounded-lg border-primary"
        />
        <div className="flex flex-col gap-1">
          <p className="text-2xl hidden sm:block md:hidden text-primary">
            আল হাদিস
          </p>
          <p className="hidden font-bold md:block">হাদিস সমূহ</p>
          <p className="hidden text-sm md:block text-text-light">
            হাদিস পড়ুন শিখুন এবং জানুন
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <PiMagnifyingGlassBold
          size={50}
          className="p-3 border rounded-lg lg:hidden bg-slate-200"
          color="#5C5C5C"
        />

        <div className="relative hidden lg:block">
          <PiMagnifyingGlassBold
            className="absolute top-5 left-5"
            color="#5C5C5C"
          />
          <input
            placeholder="Search Hadith"
            type="text"
            className="p-3 pl-12 outline outline-[#DEE1E5] rounded-lg focus:outline-primary"
          />
        </div>
        <button className="hidden sm:block px-5 py-3 text-white rounded-lg bg-primary">
          সাপোর্ট করুন
        </button>
      </div>
    </header>
  );
};

export default Header;
