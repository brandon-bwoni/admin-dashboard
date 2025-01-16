"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${"flex items-center gap-[10px] p-5 font-semibold text-[18px] my-1 rounded-xl hover:bg-zinc-400 text-gray-600 hover:text-gray-800"} ${
        pathname === item.path && "bg-zinc-400"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
