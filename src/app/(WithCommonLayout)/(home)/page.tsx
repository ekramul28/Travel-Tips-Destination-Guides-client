"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import {
  FaHome,
  FaSearch,
  FaHeart,
  FaUser,
  FaCompass,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
  const pathName = usePathname();
  const isActive = (path: string) => pathName === path;
  const links = [
    { href: "/", icon: FaHome, label: "Home" },
    { href: "/search", icon: FaSearch, label: "Search" },
    { href: "/explore", icon: FaCompass, label: "Create" },
    { href: "/notifications", icon: FaHeart, label: "Notifications" },
    { href: "/about", icon: FaInfoCircle, label: "About" },
    { href: "/contact", icon: FaEnvelope, label: "Contact" },
    { href: "/profile", icon: FaUser, label: "Profile" },
  ];

  return (
    <div className="fixed">
      <div className="flex flex-col  items-start ">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
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
