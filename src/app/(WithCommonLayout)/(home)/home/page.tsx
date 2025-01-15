"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { RiAddCircleLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { AiOutlineContacts } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { TbBellRinging } from "react-icons/tb";

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
    { href: "/about", icon: CiCircleMore, label: "About" },
    { href: "/contact", icon: AiOutlineContacts, label: "Contact" },
  ];

  return (
    <div className="fixed">
      <div className="flex flex-col  items-start border-r-1 pr-14 ">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <div
              className={`flex gap-2   items-start mt-8 ${
                isActive(link.href) ? "text-gray-300" : "text-slate-700"
              }`}
            >
              <link.icon size={30} />
              <p className="text-2xl">{link.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
