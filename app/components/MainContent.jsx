import {
  PiBooksFill,
  PiOctagonBold,
  PiCopySimple,
  PiBookmarkSimple,
  PiShareNetwork,
  PiHexagonFill,
  PiSquareFill,
} from 'react-icons/pi';
import { BiErrorAlt } from 'react-icons/bi';
import { RiDirectionLine } from 'react-icons/ri';
import { LiaGreaterThanSolid } from 'react-icons/lia';
import { GoBook } from 'react-icons/go';

const MainContent = ({
  sections,
  chapters,
  hadiths,
  selectedBook,
  selectedChapter,
  selectedSection,
}) => {
  return (
    <main className="flex flex-col col-start-4 col-end-9 gap-5 p-5 rounded-lg h-[800px]  overflow-y-auto">
      <div className="p-3 bg-white rounded-lg">
        <div className="flex items-center gap-1 pb-3 border-b border-gray-400 text-slate-500 ">
          <PiBooksFill size={20} />
          <LiaGreaterThanSolid size={12} />
          <p className="capitalize">{selectedBook.book_name}</p>
          <LiaGreaterThanSolid size={12} />
          <p>{selectedSection}</p>
        </div>
        <div className="flex items-center justify-between pt-5 cursor-pointer">
          <div className="flex items-center gap-3">
            <PiBooksFill color="#2B9E76" size={50} />
            <div className="flex flex-col gap-1">
              <p className="text-xl font-medium ">{selectedBook.title}</p>
              <p className="text-sm font-medium text-text-light ">
                সর্বমোট হাদিস: {selectedBook.number_of_hadis}
              </p>
            </div>
          </div>
          <p className="text-2xl">{selectedBook.title_ar}</p>
        </div>
      </div>

      <div>
        {chapters.map((chapter) => (
          <div key={chapter.id} className="flex flex-col gap-5 ">
            {sections.map((section) => (
              <div key={section.id} className="flex flex-col gap-3 ">
                <div className="flex items-center p-5 bg-white rounded-lg">
                  <div className="relative">
                    <div className="absolute font-medium text-white top-2 left-5 ">
                      {chapter.id}
                    </div>
                    <PiSquareFill size={50} className="inline text-primary" />
                    <span className="pl-2 text-xl">{chapter.title}</span>
                  </div>
                </div>
                <div className="p-5 bg-white rounded-lg">
                  <div className="pb-3 mb-3 font-bold border-b border-gray-300">
                    <GoBook size={25} className="inline mr-2 text-primary" />
                    {section.title}
                  </div>
                  <div>{section.preface}</div>
                </div>

                {hadiths
                  .filter(
                    (hadith) =>
                      selectedBook.book_name === hadith.book_name &&
                      selectedChapter === hadith.chapter_id &&
                      section.id === hadith.section_id
                  )
                  .map((hadith) => (
                    <div
                      key={hadith.id}
                      className="flex flex-col gap-3 p-5 bg-white rounded-lg"
                    >
                      <div className="flex items-center gap-2 font-bold ">
                        <PiOctagonBold className=" text-primary" size={30} />
                        <span className="inline text-primary">
                          {hadith.hadith_id}
                        </span>
                      </div>
                      <p lang="ar" dir="rtl" className="text-2xl leading-10">
                        {hadith.ar}
                      </p>
                      <p className="text-green-600">{hadith.narrator}</p>
                      <p>{hadith.bn}</p>
                      <div className="flex justify-between">
                        <p>
                          হাদিসের মান :
                          <span className="px-3 py-2 ml-2 text-white rounded-lg cursor-pointer bg-primary">
                            {hadith.grade}
                          </span>
                        </p>
                        <div className="flex gap-6 text-slate-500">
                          <PiCopySimple size={25} className="cursor-pointer " />
                          <PiBookmarkSimple
                            size={25}
                            className="cursor-pointer "
                          />
                          <PiShareNetwork
                            size={25}
                            className="cursor-pointer "
                          />
                          <BiErrorAlt size={25} className="cursor-pointer " />
                          <RiDirectionLine
                            size={25}
                            className="cursor-pointer "
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
