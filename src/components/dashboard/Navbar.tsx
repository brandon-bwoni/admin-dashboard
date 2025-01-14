"use client";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-row items-center justify-between mt-1 bg-gray-300 text-gray-500 px-3 rounded-xl py-2 shadow-lg">
      <div className="text-gray-500 font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex p-2 ">
        <div className="flex items-center gap-2 border border-gray-500 p-[10px] rounded-full">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none active:outline-none text-gray-300"
          />
          <div className="flex gap-5">
            <MdOutlineChat size={20} className="text-gray-500" />
            <MdNotifications size={20} className="text-gray-500" />
            <MdPublic size={20} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
