import {
  PiBooksFill,
  PiOctagonBold,
  PiCopySimple,
  PiBookmarkSimple,
  PiShareNetwork,
  PiSquareFill,
} from 'react-icons/pi';
import { BiErrorAlt } from 'react-icons/bi';
import { RiDirectionLine } from 'react-icons/ri';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { GoBook } from 'react-icons/go';
import { IoMenu } from 'react-icons/io5';
import { inter } from '../fonts';

const MainContent = ({
  sections,
  chapters,
  hadiths,
  selectedBook,
  selectedSection,
  setBookChapterIsOpen,
}) => {
  return (
    <main className="flex flex-col col-end-13 gap-5 p-5 overflow-y-auto rounded-lg h-[800px] md:col-start-1 xl:col-start-4 2xl:col-end-9">
      <div
        className="flex items-center gap-2 p-3 bg-white rounded-lg cursor-pointer xl:hidden"
        onClick={() => setBookChapterIsOpen(true)}
      >
        <IoMenu className="text-2xl" />
        <p className="text-lg font-bold">{selectedBook.title}</p>
      </div>
      <div className="hidden p-3 bg-white rounded-lg xl:block">
        <div
          className={`flex items-center gap-1 pb-3 border-b border-gray-400 text-slate-500 ${inter.className}`}
        >
          <PiBooksFill size={20} className="cursor-pointer" />
          <LiaGreaterThanSolid size={12} />
          <p className="capitalize cursor-pointer">{selectedBook.book_name}</p>
          <LiaGreaterThanSolid size={12} />
          <p className="cursor-pointer">{selectedSection.section_id}</p>
        </div>
        <div className="flex items-center justify-between pt-5 cursor-pointer">
          <div className="flex items-center gap-3">
            <PiBooksFill color="#2B9E76" size={50} />
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold lg:text-2xl ">
                {selectedBook.title}
              </p>
              <p className="text-sm font-semibold text-text-light ">
                সর্বমোট হাদিস: {selectedBook.number_of_hadis}
              </p>
            </div>
          </div>
          <p className="text-lg font-semibold md:text-2xl">
            {selectedBook.title_ar}
          </p>
        </div>
      </div>

      <div>
        {chapters.map((chapter) => (
          <div key={chapter.id} className="flex flex-col gap-5 ">
            <div className="flex items-center p-3 bg-white rounded-lg md:p-5">
              <div className="relative flex items-center ">
                <div className="absolute font-medium text-white top-2 left-5 ">
                  {chapter.id}
                </div>
                <PiSquareFill size={50} className="inline text-primary" />
                <span className="pl-2 text-lg lg:text-xl">{chapter.title}</span>
              </div>
            </div>
            {sections.map((section) => (
              <div key={section.id} className="flex flex-col gap-3">
                <div className="p-5 leading-8 tracking-wider bg-white rounded-lg lg:text-lg">
                  <div className="pb-3 mb-3 font-semibold border-b border-gray-300 ">
                    <GoBook
                      size={35}
                      className="inline mr-2 text-lg text-primary "
                    />
                    {section.number}

                    <p className="pt-3 text-lg lg:text-xl">{section.title}</p>
                  </div>

                  <div className="">{section.preface}</div>
                </div>

                {hadiths.map((hadith) => {
                  if (hadith.section_id === section.id) {
                    return (
                      <div
                        key={hadith.hadith_id}
                        className="flex flex-col gap-3 p-5 bg-white rounded-lg"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 font-bold ">
                            <PiOctagonBold
                              className=" text-primary"
                              size={30}
                            />
                            <span className="inline text-primary">
                              {hadith.hadith_id}
                            </span>
                          </div>

                          <span className="px-2 py-1 ml-2 text-white rounded-lg cursor-pointer bg-primary md:hidden">
                            {hadith.grade}
                          </span>
                        </div>
                        <p
                          lang="ar"
                          dir="rtl"
                          className="text-2xl leading-[50px] lg:leading-[60px] tracking-wide text-right "
                        >
                          {hadith.ar}
                        </p>
                        <p className="text-lg font-semibold text-green-600">
                          {hadith.narrator}
                        </p>
                        <p className="text-lg font-semibold leading-8 tracking-wider pb-7">
                          {hadith.bn}
                        </p>
                        {hadith.note && (
                          <p className="p-3 rounded-lg mb-9 bg-slate-100">
                            {hadith.note}
                          </p>
                        )}
                        <div className="flex justify-center md:justify-between">
                          <p className="hidden font-semibold md:block">
                            হাদিসের মান :
                            <span className="px-3 py-2 ml-2 text-white rounded-lg cursor-pointer bg-primary">
                              {hadith.grade}
                            </span>
                          </p>

                          <div className="flex gap-10 text-slate-500">
                            <PiCopySimple
                              size={25}
                              className="cursor-pointer"
                            />
                            <PiBookmarkSimple
                              size={25}
                              className="cursor-pointer"
                            />
                            <PiShareNetwork
                              size={25}
                              className="cursor-pointer"
                            />
                            <BiErrorAlt size={25} className="cursor-pointer" />
                            <RiDirectionLine
                              size={25}
                              className="cursor-pointer "
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
