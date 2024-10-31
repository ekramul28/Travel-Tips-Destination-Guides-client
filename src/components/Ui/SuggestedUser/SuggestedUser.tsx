"use client";
import { useUser } from "@/src/context/user.provider";
import { CreateFollow, unFollow } from "@/src/services/Follow";
import { IUser } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const SuggestedUser = ({ user }: { user: IUser }) => {
  const router = useRouter();
  console.log("data", user);
  const { user: currentUser } = useUser();
  console.log("data2", currentUser);

  const [isFollowing, setIsFollowing] = useState(false);
  const [loadingFollow, setLoadingFollow] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        toast.success("follow  added!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding a Follow.");
    }
  };
  const handleUnFollow = async () => {
    if (!user?._id) {
      toast.error("Please log in to UnFollow.");
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
        toast.success("UnFollow  added!");
      }
    } catch (error) {
      console.error(error);

      toast.error("An error occurred while adding a UnFollow.");
    }
  };

  return (
    <div className="p-4">
      <div>
        <div className="flex  items-center">
          <Avatar
            src={user?.profilePhoto || "/default-avatar.png"}
            size="sm"
            className="mr-2 cursor-pointer"
            onClick={() => router.push(`profile/${user?._id}`)}
            alt="User Avatar"
          />
          <div className="mb-2 p-3 flex items-start">
            <div>
              <div
                onClick={() => router.push(`profile/${user?._id}`)}
                className="font-bold hover:underline cursor-pointer"
              >
                {user?.name}
                {user?.verified && (
                  <span className="ml-2 text-green-500" title="Verified User">
                    ✅
                  </span>
                )}
              </div>
              <p>Suggested for You</p>
            </div>
          </div>

          {currentUser?._id === user?._id ? (
            <Button>Its You</Button>
          ) : currentUser ? (
            isFollowing ? (
              <Button
                className="bg-green-500 text-white"
                onClick={handleUnFollow}
              >
                UnFollow
              </Button>
            ) : (
              <Button onClick={handleFollow}>Follow</Button>
            )
          ) : (
            <Button onClick={() => router.push("/login")}>Login</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuggestedUser;
