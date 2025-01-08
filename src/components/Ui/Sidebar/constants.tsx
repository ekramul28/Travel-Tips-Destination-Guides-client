import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineBell,
} from "react-icons/ai";
import { MdOutlineSupport, MdOutlinePostAdd } from "react-icons/md";
import { FiUsers, FiSettings } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";

export const userLinks = [
  {
    href: "/dashboard",
    label: "Dashboard Home",
    icon: <AiOutlineHome size={24} />,
  },
  {
    href: "/dashboard/create-post",
    label: "Create Post",
    icon: <IoMdAddCircleOutline size={24} />,
  },
  {
    href: "/dashboard/profile",
    label: "Profile",
    icon: <AiOutlineUser size={24} />,
  },

  {
    href: "/dashboard/MyPost",
    label: "My Post",
    icon: <MdOutlinePostAdd size={24} />,
  },
  {
    href: "/dashboard/account-settings",
    label: "Account Settings",
    icon: <AiOutlineSetting size={24} />,
  },
  {
    href: "/dashboard/notifications",
    label: "Notifications",
    icon: <AiOutlineBell size={24} />,
  },
  {
    href: "/dashboard/support",
    label: "Help Center",
    icon: <MdOutlineSupport size={24} />,
  },
];

export const adminLinks = [
  { href: "/admin", label: "Admin Home", icon: <AiOutlineHome size={24} /> },
  { href: "/admin/allUser", label: "All Users", icon: <FiUsers size={24} /> },
  {
    href: "/admin/manage-services",
    label: "Manage Services",
    icon: <MdOutlinePostAdd size={24} />,
  },
  { href: "/admin/reports", label: "Reports", icon: <BsGraphUp size={24} /> },
  {
    href: "/admin/settings",
    label: "Admin Settings",
    icon: <FiSettings size={24} />,
  },
  {
    href: "/admin/support-requests",
    label: "Support Requests",
    icon: <MdOutlineSupport size={24} />,
  },
];
