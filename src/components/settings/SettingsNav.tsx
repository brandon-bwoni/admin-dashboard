"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SettingsNav = () => {
  const pathname = usePathname();

  const links = [
    {
      title: "General Settings",
      link: `${pathname}/general-settings`,
    },
    {
      title: "Integrations",
      link: `${pathname}/integrations`,
    },
    {
      title: "Notifications",
      link: `${pathname}/notifications`,
    },
    {
      title: "User Management",
      link: `${pathname}/user-management`,
    },
    {
      title: "Security",
      link: `${pathname}/security-privacy`,
    },
    {
      title: "Shipping & Delivery",
      link: `${pathname}/shipping-delivery`,
    },
    {
      title: "Privacy & Compliance",
      link: `${pathname}/privacy-compliancy`,
    },
  ];

  return (
    <div>
      <ul className="flex flex-row gap-4 py-4">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className={`px-3 py-2 text-xs font-semibold bg-zinc-300 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-zinc-400 ${
                pathname === link.link ? "bg-zinc-400 text-gray-800" : ""
              }`}
            >
              <Link href={link.link}>{link.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SettingsNav;
