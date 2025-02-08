"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  path: string;
  icon: React.ReactNode;
  title: string;
}

const MenuLink = ({ item }: { item: MenuItem }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.path);

  return (
    <Link
      href={item.path}
      className={`${"flex items-center gap-[10px] p-5 font-semibold text-[18px] my-1 rounded-xl hover:bg-zinc-400 text-zinc-600 hover:text-gray-800"} ${
        isActive ? "bg-zinc-400" : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
