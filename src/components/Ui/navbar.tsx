"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useRouter } from "next/navigation";

import LandingSearch from "../modules/home/Landing";
import Filtering from "../modules/found-items/Filtering";

import NavbarDropdown from "./NavbarDropdown";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/Ui/theme-switch";
import { Logo } from "@/src/assets/icons";
import { useUser } from "@/src/context/user.provider";

export const Navbar = () => {
  const { user } = useUser();

  const router = useRouter();

  return (
    <>
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
          {/* Replace <li> with a div or span for the brand */}
          <NavbarBrand className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/home"
            >
              <Logo />
              <p className="font-bold text-inherit">ACME</p>
            </NextLink>
          </NavbarBrand>
          <LandingSearch />
        </NavbarContent>

        <NavbarContent>
          <NavbarBrand className="hidden  md:flex gap-6 justify-center ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium ",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.icon}
                </NextLink>
              </NavbarItem>
            ))}
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <ThemeSwitch />

          <NavbarItem className="hidden md:flex">
            {user?.email ? (
              <NavbarItem className="hidden sm:flex gap-2">
                <NavbarDropdown />
              </NavbarItem>
            ) : (
              <NavbarItem className="hidden sm:flex gap-2">
                <Button onClick={() => router.push("/login")}>Login</Button>
              </NavbarItem>
            )}
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <LandingSearch />
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.icon}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
      <NextUINavbar className="top-14">
        <Filtering />
      </NextUINavbar>
    </>
  );
};
