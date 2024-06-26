import { PiMagnifyingGlassBold, PiHexagonFill } from 'react-icons/pi';
import { inter } from '../fonts';

const BookChapter = ({ books, chapters, showBooks, setShowBooks }) => {
  return (
    <aside className="flex flex-col gap-5 pb-5 m-5 mr-0 bg-white rounded-lg">
      <div className="flex border-b border-gray-300 cursor-pointer">
        <p
          className={`w-1/2 py-3 text-xl text-center  rounded-tl-lg  ${
            showBooks ? 'bg-primary text-white' : 'bg-white text-black'
          }`}
          onClick={() => setShowBooks(true)}
        >
          বই
        </p>
        <p
          className={`w-1/2 py-3 text-xl text-center  rounded-tr-lg   ${
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
            className={`w-full p-3 pl-12 bg-[#F2F4F6] rounded-lg focus:outline focus:outline-2 focus:outline-primary ${inter.className}`}
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
                  <div className="absolute font-bold text-white top-2 left-5 ">
                    {item.abvr_code}
                  </div>
                  <PiHexagonFill size={50} className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-semibold">{item.title}</p>
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
                  <p className="text-lg font-semibold">{item.title}</p>
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
  );
};

export default BookChapter;
