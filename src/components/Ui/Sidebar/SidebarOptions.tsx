"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Use usePathname to get the current path
import { ReactNode } from "react";

type LinkItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

export const SidebarOptions = ({ links }: { links: LinkItem[] }) => {
  const pathname = usePathname(); // Get the current path using usePathname

  return (
    <div className="flex flex-col gap-1">
      {links.map((link) => {
        const isActive = pathname === link.href; // Check if the link is the active route

        return (
          <Link
            key={link.href}
            className={`flex items-center gap-3 block w-full rounded-md px-3 py-2 ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-default-200"
            }`} // Apply different styles for active link
            href={link.href}
          >
            {link.icon}
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};
