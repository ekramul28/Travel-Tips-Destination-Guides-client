/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";

import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

import { IUser } from "@/src/types";
import { CreateFollow, unFollow } from "@/src/services/Follow";
import { useUser } from "@/src/context/user.provider";

const SuggestedUser = ({ user }: { user: IUser }) => {
  const router = useRouter();

  const { user: currentUser } = useUser();

  const [isFollowing, setIsFollowing] = useState(false);
  const [loadingFollow, setLoadingFollow] = useState(false);

  useEffect(() => {
    if (currentUser && user?.following?.includes(currentUser?._id as never)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [currentUser, user]);

  const handleFollow = async () => {
    if (!user?._id) {
      toast.error("Please log in to follow.");
      router.push("/login");
      return;
    }

    try {
      const res = await CreateFollow({
        userId: currentUser?._id,
        followId: user._id,
      });

      if (res.success) {
        setIsFollowing(true);
        toast.success("Followed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while following.");
    }
  };

  const handleUnFollow = async () => {
    if (!user?._id) {
      toast.error("Please log in to unfollow.");
      router.push("/login");
      return;
    }

    try {
      const res = await unFollow({
        userId: currentUser?._id,
        followId: user._id,
      });

      if (res.success) {
        setIsFollowing(false);
        toast.success("Unfollowed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while unfollowing.");
    }
  };

  return (
    <div className="p-4 flex items-center gap-4 border rounded-lg bg-white shadow-sm">
      <Avatar
        alt="User Avatar"
        className="cursor-pointer"
        size="lg"
        src={user?.profilePhoto || "/default-avatar.png"}
        onClick={() => router.push(`/dashboard/profile/${user?._id}`)}
      />
      <div className="flex-1">
        <div
          className="font-bold hover:underline cursor-pointer"
          onClick={() => router.push(`/dashboard/profile/${user?._id}`)}
        >
          {user?.name}
          {user?.verified && (
            <span className="ml-2 text-blue-500" title="Verified User">
              ✅
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500">Suggested for you</p>
      </div>
      {currentUser?._id === user?._id ? (
        <Button size="sm" disabled>
          Its You
        </Button>
      ) : currentUser ? (
        isFollowing ? (
          <Button
            size="sm"
            className="bg-gray-200 text-black hover:bg-gray-300"
            onClick={handleUnFollow}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            size="sm"
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={handleFollow}
          >
            Follow
          </Button>
        )
      ) : (
        <Button
          size="sm"
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default SuggestedUser;
