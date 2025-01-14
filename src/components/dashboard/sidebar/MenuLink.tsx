"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${"flex items-center gap-[10px] p-[20px] my-[5px] rounded-xl hover:bg-slate-700 "} ${
        pathname === item.path && "active:bg-slate-700"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
