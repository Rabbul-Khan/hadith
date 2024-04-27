const RightAside = () => {
  return (
    <aside className="flex-col hidden col-start-9 col-end-13 gap-5 p-5 2xl:flex">
      <div className="flex flex-col gap-5 p-5 bg-white rounded-lg">
        <p className="text-lg text-center ">সেটিংস</p>
        <div className="flex flex-col gap-2">
          <label htmlFor="font" className="text-sm font-bold">
            আরবি ফন্ট সিলেক্ট করুন
          </label>
          <select name="font" id="font" className="p-3 rounded-lg">
            <option value="KFGQ">KFGQ</option>
            <option value="Me Quran">Me Quran</option>
            <option value="Al Mushaf">Al Mushaf</option>
            <option value="Amiri">Amiri</option>
            <option value="Arial">Arial</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="arFontSize" className="text-sm font-bold">
            এরাবিক ফন্ট সাইজ
          </label>
          <input
            className="accent-primary"
            type="range"
            id="arFontSize"
            name="emFontSize"
            min="18"
            max="40"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tr_FontSize" className="text-sm font-bold">
            অনুবাদ ফন্ট সাইজ
          </label>
          <input
            className="accent-primary"
            type="range"
            id="tr_FontSize"
            name="tr_FontSize"
            min="18"
            max="40"
          ></input>
        </div>

        <div className="flex justify-between">
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer text-sm font-bold"
            htmlFor="flexSwitchCheckDefault"
          >
            নাইট মোড
          </label>
          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 p-5 rounded-lg bg-[#34AB82]">
        <p className="text-lg font-medium text-white">
          আপনিও সদাকায়ে জারিয়াতে অংশ নিন
        </p>
        <p className="text-sm font-light leading-8 text-white">
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে।
          আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের
          প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র
          কাছে কবুল হবে।
        </p>
        <button className="px-5 py-3 bg-white rounded-lg text-primary hover:shadow-lg ">
          সাপোর্ট করুন
        </button>
      </div>
    </aside>
  );
};

export default RightAside;
