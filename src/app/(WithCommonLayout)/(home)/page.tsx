"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaHome,
  FaHeart,
  FaUser,
  FaCompass,
  FaInfoCircle,
  FaEnvelope,
  FaTachometerAlt,
} from "react-icons/fa";

import { useUser } from "@/src/context/user.provider";

const Sidebar = () => {
  const pathName = usePathname();
  const { user } = useUser();

  const isActive = (path: string) => pathName === path;
  const links = [
    { href: "/", icon: FaHome, label: "Home" },
    {
      href: `${user && user.role === "ADMIN" ? "/admin" : "/dashboard"}`,
      icon: FaTachometerAlt,
      label: "Dashboard",
    },
    {
      href: `/dashboard/create-post`,
      icon: FaCompass,
      label: "Create Post",
    },
    {
      href: `/dashboard/profile`,
      icon: FaUser,
      label: "Profile",
    },
    { href: "/notifications", icon: FaHeart, label: "Notifications" },
    { href: "/about", icon: FaInfoCircle, label: "About" },
    { href: "/contact", icon: FaEnvelope, label: "Contact" },
  ];

  return (
    <div className="fixed">
      <div className="flex flex-col  items-start ">
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
