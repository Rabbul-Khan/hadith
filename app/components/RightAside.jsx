import Donate from './Donate';
import Settings from './Settings';

const RightAside = () => {
  return (
    <aside className="flex-col hidden col-start-9 col-end-13 gap-5 p-5 2xl:flex">
      <div className="flex flex-col gap-5 p-5 bg-white rounded-lg">
        <p className="text-2xl font-medium text-center ">সেটিংস</p>
        <Settings />
      </div>
      <Donate />
    </aside>
  );
};

export default RightAside;
