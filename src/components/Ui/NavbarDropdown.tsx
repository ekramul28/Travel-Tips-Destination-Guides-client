"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";

import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";
import { protectedRoutes } from "@/src/constant";

export default function NavbarDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, setIsLoading: userLoading } = useUser();

  const handleLogout = () => {
    logout();
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="Profile"
          onClick={() => handleNavigation(`/dashboard/profile`)}
        >
          Profile
        </DropdownItem>
        <DropdownItem
          key="dashboard"
          onClick={() =>
            handleNavigation(
              `${user?.role === "ADMIN" ? "/admin" : "/dashboard"}`,
            )
          }
        >
          Dashboard
        </DropdownItem>
        <DropdownItem
          key="settings"
          onClick={() => handleNavigation("/dashboard/settings")}
        >
          Settings
        </DropdownItem>
        <DropdownItem
          key="create"
          onClick={() => handleNavigation("/dashboard/create-post")}
        >
          Create Post
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onClick={() => handleLogout()}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
