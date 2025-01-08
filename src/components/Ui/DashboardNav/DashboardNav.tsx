/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import { Logo } from "@/src/assets/icons";
import { Link } from "@nextui-org/link";
import { logout } from "@/src/services/AuthService";
import { protectedRoutes } from "@/src/constant";

export const DashboardNavbar = () => {
  const { user } = useUser();

  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <NextUINavbar maxWidth="full" className="bg-gray-200" position="sticky">
      {/* Left Content */}
      <NavbarContent className="basis-1/4" justify="start">
        <NavbarBrand>
          <Link className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent className="basis-1/4" justify="end">
        {user?.email ? (
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                src={user?.profilePhoto || "/default-avatar.png"}
                className="cursor-pointer object-cover"
                size="sm"
              />
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem
                key="profile"
                onClick={() => router.push("/dashboard/profile")}
              >
                Profile
              </DropdownItem>
              <DropdownItem
                key="settings"
                onClick={() => router.push("/dashboard/account-settings")}
              >
                Account Settings
              </DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Button onClick={() => router.push("/login")}>Login</Button>
        )}
      </NavbarContent>
    </NextUINavbar>
  );
};
