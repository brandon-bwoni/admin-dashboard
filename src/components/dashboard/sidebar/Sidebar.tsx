import Image from "next/image";
import MenuLink from "./MenuLink";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="bg-zinc-300 pt-8 px-4 shadow-xl pb-6">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src="/noavatar.png"
          alt=""
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-lg text-slate-800">John Doe</span>
        <span className="text-[12px] text-slate-500 font-medium">
          {" "}
          Administrator
        </span>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li className="font-bold text-base" key={cat.title}>
            <span className="font-bold text-[14px] text-slate-700 text my-[10px]">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className="flex items-center p-[20px] my-[5px] gap-[10px] cursor-pointer rounded-xl bg-stone-700 border-none text-white w-[100%] hover:bg-orange-950">
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
