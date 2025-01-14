"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between mt-[30px] text-gray-500">
      <div className="text-gray-300 font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex-1 bg-gray-300 p-[30px] min-h-[100vh]">
        <div className="flex items-center gap-[10px] bg-gray-800 p-[10px] rounded-xl">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-gray-300"
          />
          <div className={styles.icons}>
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
