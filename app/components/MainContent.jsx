import { PiBooksFill } from 'react-icons/pi';
import { LiaGreaterThanSolid } from 'react-icons/lia';

const MainContent = ({
  sections,
  chapters,
  hadiths,
  selectedBook,
  selectedChapter,
  selectedSection,
}) => {
  return (
    <main className="flex flex-col col-start-4 col-end-9 gap-5 p-5 m-5  rounded-lg h-[800px]  overflow-y-auto">
      <div className="flex items-center gap-1 pb-5 border-b border-gray-400">
        <PiBooksFill />
        <LiaGreaterThanSolid />
        <p className="capitalize ">{selectedBook}</p>
        <LiaGreaterThanSolid />
        <p>{selectedSection}</p>
      </div>

      <div>
        {chapters.map((chapter) => (
          <div key={chapter.id} className="flex flex-col gap-5 ">
            {sections.map((section) => (
              <div key={section.id} className="flex flex-col gap-3 ">
                <div className="p-5 bg-white rounded-lg">
                  <div className="pb-3 font-bold border-b border-gray-300">
                    {section.title}
                  </div>
                  <div>{section.preface}</div>
                </div>
                {hadiths
                  .filter(
                    (hadith) =>
                      selectedBook === hadith.book_name &&
                      selectedChapter === hadith.chapter_id &&
                      section.id === hadith.section_id
                  )
                  .map((hadith) => (
                    <div
                      key={hadith.id}
                      className="flex flex-col gap-3 p-5 bg-white rounded-lg"
                    >
                      <p>{hadith.ar}</p>
                      <p className="text-green-600 ">{hadith.narrator}</p>
                      <p>{hadith.bn}</p>
                      <p>হাদিসের মান : {hadith.grade}</p>
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
