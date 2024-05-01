const Donate = () => {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-lg bg-[#34AB82]">
      <p className="text-xl font-semibold text-white">
        আপনিও সদাকায়ে জারিয়াতে অংশ নিন
      </p>
      <p className="font-light leading-8 text-white">
        আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে।
        আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের
        প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র
        কাছে কবুল হবে।
      </p>
      <button className="px-5 py-3 bg-white rounded-lg text-primary hover:shadow-lg ">
        সাপোর্ট করুন
      </button>
    </div>
  );
};

export default Donate;
