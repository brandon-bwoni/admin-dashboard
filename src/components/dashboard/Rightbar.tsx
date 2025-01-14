import Image from "next/image";
import { MdPlayCircle, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="static">
      {/* Item-1 */}
      <div className="bg bg-gradient-to-t from gray-700 to gray-800">
        <div className="absolute right-0 bottom-0 w-[50%] h-[50%]">
          <Image
            src="/astronaut.png"
            alt=""
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold">Available now</span>
          <h3 className="font-medium text-[12px] text-gray-400">
            How to use the new version of the admin dashboard
          </h3>
          <span className="text-gray-400 font-medium text-[12px]">
            Takes 4 minutes to learn
          </span>
          <p className="text-gray-300 text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            dolor in est suscipit fermentum sit amet a lorem.
          </p>
          <button className="flex items-center p-[10px] gap-[10px] min-w-max bg-indigo-400/60">
            <MdPlayCircle />
            Watch
          </button>
        </div>
      </div>

      {/* Item-2 */}
      <div className="bg bg-gradient-to-t from gray-700 to gray-800">
        <div className="flex flex-col gap-6">
          <span className="font-extrabold">Coming soon</span>
          <h3 className="font-medium text-[12px]">
            New server actions are available, partial pre-rendering in coming
            upi
          </h3>
          <span className="font-medium text-[12px]">
            Save your productivity
          </span>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            dolor in est suscipit fermentum sit amet a lorem.
          </p>
          <button className="flex items-center p-[10px] gap-[10px] min-w-max bg-indigo-400/60">
            <MdReadMore />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
