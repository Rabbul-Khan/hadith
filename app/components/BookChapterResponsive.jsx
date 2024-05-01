import { RxCross2 } from 'react-icons/rx';
import { PiMagnifyingGlassBold, PiHexagonFill } from 'react-icons/pi';

import { inter } from '../fonts';

const BookChapterResponsive = ({
  bookChapterIsOpen,
  showBooks,
  setShowBooks,
  books,
  chapters,
  setBookChapterIsOpen,
}) => {
  return (
    <div
      className={`flex flex-col z-10 fixed top-0 left-0 h-full bg-white w-full sm:w-1/2 lg:w-1/3 lg:max-w-[25rem] shadow-2xl pt-7 gap-7 transition-all duration-500 xl:hidden ${
        bookChapterIsOpen ? 'translate-x-0' : 'translate-x-[-100%]'
      }`}
    >
      <div className="flex justify-between px-5 ">
        <p className="text-2xl ">ক্যাটাগরি</p>
        <button
          className=" text-text-light"
          onClick={() => {
            setBookChapterIsOpen(false);
          }}
        >
          <RxCross2
            className="text-2xl"
            onClick={() => setBookChapterIsOpen(false)}
          />
        </button>
      </div>

      <aside className="flex flex-col gap-5 bg-white ">
        <div className="flex border-gray-300 cursor-pointer border-y">
          <p
            className={`w-1/2 py-3 text-xl text-center ${
              showBooks ? 'bg-primary text-white' : 'bg-white text-black'
            }`}
            onClick={() => setShowBooks(true)}
          >
            বই
          </p>
          <p
            className={`w-1/2 py-3 text-xl text-center ${
              !showBooks ? 'bg-primary text-white' : 'bg-white text-black'
            }`}
            onClick={() => setShowBooks(false)}
          >
            অধ্যায়
          </p>
        </div>
        <div className="flex flex-col gap-5 px-5 ">
          <div className="relative ">
            <PiMagnifyingGlassBold className="absolute top-5 left-5 text-slate-500 " />

            <input
              placeholder="Search For Filter"
              className={`w-full p-3 pl-12 bg-[#F2F4F6] rounded-lg focus:outline focus:outline-2 focus:outline-primary ${inter.className} `}
            />
          </div>

          {showBooks ? (
            <div>
              {books.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 px-3 py-6 bg-[#EBFCF6] rounded-lg cursor-pointer"
                >
                  <div className="relative">
                    <div className="absolute font-bold text-white top-2 left-5">
                      {item.abvr_code}
                    </div>
                    <PiHexagonFill size={50} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold tracking-wider">{item.title}</p>
                    <p className="text-sm text-slate-500 ">
                      সর্বমোট হাদিস -{item.number_of_hadis}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {chapters.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 px-3 py-6 bg-[#EBFCF6] rounded-lg cursor-pointer"
                >
                  <div className="relative">
                    <div className="absolute font-bold text-white top-2 left-5 ">
                      {item.chapter_id}
                    </div>
                    <PiHexagonFill size={50} className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold tracking-wider">{item.title}</p>
                    <p className="text-sm text-slate-500">
                      হাদিসের রেঞ্জ: {item.hadis_range}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default BookChapterResponsive;
