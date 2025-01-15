"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Image } from "@nextui-org/image";

import { SidebarOptions } from "./SidebarOptions";
import { adminLinks, userLinks } from "./constants";

import { useUser } from "@/src/context/user.provider";

const Sidebar = () => {
  const { user } = useUser();

  return (
    <div className="h-screen   lg:w-64  fixed bg-slate-200  top-0 ">
      <div className="rounded-xl bg-default-100 p-2 h-[calc(100vh)]">
        <div className="h-[50px] w-[50px] rounded-md flex justify-end items-end">
          <Image
            src={user?.profilePhoto || "https://via.placeholder.com/150"}
          />
        </div>
        <div className="my-3">
          <h1 className="text-2xl font-semibold">{user?.name}</h1>
          <p className="break-words text-sm">{user?.email}</p>
        </div>
        <Button
          as={Link}
          className="mt-2 w-full rounded-md"
          href={"/dashboard/create-post"}
        >
          Create a post
        </Button>
        <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2 ">
          <SidebarOptions
            links={user?.role === "USER" ? userLinks : adminLinks}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
