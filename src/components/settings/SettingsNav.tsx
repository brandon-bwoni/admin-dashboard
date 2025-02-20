"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SettingsNav = () => {
  const pathname = usePathname();

  const basePath = "/dashboard/settings";

  const links = [
    {
      title: "General Settings",
      link: `${basePath}/general-settings`,
    },
    {
      title: "Integrations",
      link: `${basePath}/integrations`,
    },
    {
      title: "Notifications",
      link: `${basePath}/notifications`,
    },
    // {
    //   title: "User Management",
    //   link: `${basePath}/user-management`,
    // },
    {
      title: "Security & Privacy",
      link: `${basePath}/security-privacy`,
    },
    {
      title: "Shipping & Delivery",
      link: `${basePath}/shipping-delivery`,
    },
    {
      title: "Privacy & Compliance",
      link: `${basePath}/privacy-compliancy`,
    },
  ];

  return (
    <div>
      <ul className="flex flex-row gap-8 py-4">
        {links.map((link, index) => (
          <li
            key={index}
            className={`px-3 py-2 text-xs font-semibold bg-zinc-300 rounded-lg text-black hover:text-gray-800 hover:bg-zinc-400 ${
              pathname === link.link ? "bg-zinc-400 text-gray-800" : ""
            }`}
          >
            <Link href={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsNav;
