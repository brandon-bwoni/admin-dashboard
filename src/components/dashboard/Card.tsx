import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="w-[100%] flex gap-5 cursor-pointer  bg-gray-200 p-[20px] rounded-xl ">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span className="text-2xl font-semibold text-gray-800">
          Total Users
        </span>
        <span className="text-[24px] font-base">10.273</span>
        <span className="text-[14px] font-light">
          <span className="text-green-400">12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
