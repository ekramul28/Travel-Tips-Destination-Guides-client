export type SiteConfig = typeof siteConfig;
import { FaSignOutAlt } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlinePayment } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";

export const siteConfig = {
  name: "Travel Tips & Destination Guides",
  description:
    "travel stories, exchange valuable tips, and interact with fellow travellers.",
  navItems: [
    {
      label: "Home",
      href: "/home",
      icon: <FiHome size={24} />,
    },

    {
      label: "Contact",
      href: "/contact",
      icon: <RiContactsBook2Line size={24} />,
    },
    {
      label: "Group",
      href: "/group",
      icon: <HiOutlineUserGroup size={24} />,
    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: <MdOutlinePayment size={24} />,
    },
    {
      label: "About",
      href: "/about",
      icon: <CiCircleMore size={24} />,
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
      icon: <FiHome size={24} />,
    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: <AiOutlineDollarCircle size={24} />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <RiContactsBook2Line size={24} />,
    },
    {
      label: "About",
      href: "/about",
      icon: <CiCircleMore size={24} />,
    },
    {
      label: "Group",
      href: "/group",
      icon: <GrGroup size={24} />,
    },
    {
      label: "Dashboard",
      href: "/dashboard",

      icon: <MdOutlineDashboard size={24} />,
    },

    {
      label: "Logout",
      href: "/logout",
      icon: <FaSignOutAlt size={24} />,
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
