export type SiteConfig = typeof siteConfig;
import { FaSignOutAlt } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { AiOutlineDollarCircle, AiOutlineContacts } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
export const siteConfig = {
  name: "Travel Tips & Destination Guides",
  description:
    "travel stories, exchange valuable tips, and interact with fellow travellers.",
  navItems: [
    {
      label: "Home",
      href: "/home",
      icon: <FiHome size={30} />,
    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: <AiOutlineDollarCircle size={30} />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <AiOutlineContacts size={30} />,
    },
    {
      label: "About",
      href: "/about",
      icon: <CiCircleMore size={30} />,
    },
    {
      label: "Group",
      href: "/group",
      icon: <GrGroup size={24} />,
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
      icon: <FiHome size={30} />,
    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: <AiOutlineDollarCircle size={30} />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <AiOutlineContacts size={30} />,
    },
    {
      label: "About",
      href: "/about",
      icon: <CiCircleMore size={30} />,
    },
    {
      label: "Group",
      href: "/group",
      icon: <GrGroup size={30} />,
    },
    {
      label: "Logout",
      href: "/logout",
      icon: <FaSignOutAlt size={30} />,
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
