import Link from "next/link";
import { ReactNode } from "react";

type LinkItem = {
  href: string;
  label: string;
  icon: ReactNode; // Add the icon property to the type
};

export const SidebarOptions = ({ links }: { links: LinkItem[] }) => {
  return (
    <div className="flex flex-col gap-1">
      {links.map((link) => (
        <Link
          key={link.href}
          className="flex items-center gap-3 block w-full rounded-md px-3 py-2 hover:bg-default-200"
          href={link.href}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </div>
  );
};
