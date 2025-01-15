"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiAddCircleLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { CiCircleMore } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { TbBellRinging } from "react-icons/tb";
import { MdOutlineContacts } from "react-icons/md";

import { useUser } from "@/src/context/user.provider";

const Sidebar = () => {
  const pathName = usePathname();
  const { user } = useUser();

  const isActive = (path: string) => pathName === path;
  const links = [
    { href: "/", icon: FiHome, label: "Home" },
    {
      href: `${user && user.role === "ADMIN" ? "/admin" : "/dashboard"}`,
      icon: MdOutlineDashboard,
      label: "Dashboard",
    },
    {
      href: `/dashboard/create-post`,
      icon: RiAddCircleLine,
      label: "Create Post",
    },
    {
      href: `/dashboard/profile`,
      icon: CgProfile,
      label: "Profile",
    },
    { href: "/notifications", icon: TbBellRinging, label: "Notifications" },
    { href: "/contact", icon: MdOutlineContacts, label: "Contact" },
    { href: "/about", icon: CiCircleMore, label: "About" },
  ];

  return (
    <div className="fixed">
      <div className="flex flex-col  items-start border-r-1 pr-10 ">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <div
              className={`flex gap-3 items-center p-4 rounded-lg transition duration-300 ${
                isActive(link.href)
                  ? "bg-blue-500 text-white shadow-md"
                  : "w-[200px] text-slate-700 hover:bg-blue-100 hover:text-blue-600"
              }`}
            >
              <link.icon size={24} className="shrink-0" />
              <p className="text-lg font-medium">{link.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
