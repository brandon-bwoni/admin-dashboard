import Image from "next/image";
import { MdPlayCircle, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="sticky h-full w-[240px]">
      {/* Item-1 */}
      <div className="bg bg-gradient-to-t from-zinc-300 to-slate-100 shadow-lg  rounded-2xl">
        <div className="absolute right-0 bottom-0 w-[50%] h-[50%]">
          <Image
            src="/astronaut.png"
            alt=""
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <span className="font-bold text-center pt-3 text-black text-lg">
            Available now
          </span>
          <h3 className="font-medium text-[12px] text-black px-4">
            How to use the new version of the admin dashboard
          </h3>
          <span className="text-gray-500 font-medium text-[12px] px-4">
            Takes 4 minutes to learn
          </span>
          <p className="text-gray-500 text-[14px] px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            dolor in est suscipit fermentum sit amet a lorem.
          </p>
          <div className="px-4 py-4">
            <button className="flex w-16 items-center px-3 py-2 gap-1 min-w-max bg-indigo-400/50 hover:bg-indigo-400 hover:text-gray-100 rounded-xl text-sm font-medium text-black">
              <MdPlayCircle className="h-6 w-6" />
              Watch
            </button>
          </div>
        </div>
      </div>

      {/* Item-2 */}
      <div className="bg bg-gradient-to-t from-zinc-300 to-slate-100 mt-4 bg-gray-300 rounded-2xl shadow-lg">
        <div className="flex flex-col gap-4 ">
          <span className="font-bold text-center pt-3 text-black text-lg">
            Coming soon
          </span>
          <h3 className="font-medium text-[12px] text-black px-4">
            New server actions are available, partial pre-rendering in coming
            upi
          </h3>
          <span className="font-medium text-[12px] text-black px-4">
            Save your productivity
          </span>
          <p className="text-gray-500 text-[14px] px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            dolor in est suscipit fermentum sit amet a lorem.
          </p>
          <div className="py-4 px-4">
            <button className="flex w-16 items-center px-3 py-2 gap-1 min-w-max bg-indigo-400/50 hover:bg-indigo-400 hover:text-gray-100 rounded-xl text-sm font-medium text-black">
              <MdReadMore className="w-6 h-6" />
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* Item-3 */}
      <div className="bg-gradient-to-t from-zinc-300 to-slate-100 mt-4 rounded-2xl shadow-lg">
        <div className="flex flex-col gap-4 ">
          <span className="font-bold text-center pt-3 text-black text-lg">
            Coming soon
          </span>
          <h3 className="font-medium text-[12px] text-black px-4">
            New server actions are available, partial pre-rendering in coming
            upi
          </h3>
          <span className="font-medium text-[12px] text-black px-4">
            Save your productivity
          </span>
          <p className="text-gray-500 text-[14px] px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            dolor in est suscipit fermentum sit amet a lorem.
          </p>
          <div className="py-4 px-4">
            <button className="flex w-16 items-center px-3 py-2 gap-1 min-w-max bg-indigo-400/50 hover:bg-indigo-400 hover:text-gray-100 rounded-xl text-sm font-medium text-black">
              <MdReadMore className="w-6 h-6" />
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
