"use client";
import { IUser } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";

const SuggestedUser = ({ users }: { users: IUser[] }) => {
  const router = useRouter();
  return (
    <div className="p-4">
      {users?.map((user: IUser, index: number) => (
        <div key={index}>
          <div className="flex  items-center">
            <Avatar
              src={user?.profilePhoto || "/default-avatar.png"}
              size="sm"
              className="mr-2 cursor-pointer"
              onClick={() => router.push(`profile/${user._id}`)}
              alt="User Avatar"
            />
            <div className="mb-2 p-3 flex items-start">
              <div>
                <div
                  onClick={() => router.push(`profile/${user._id}`)}
                  className="font-bold hover:underline cursor-pointer"
                >
                  {user?.name}
                </div>
                <p>Suggested for You</p>
              </div>
            </div>
            <Button>Follow</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedUser;
