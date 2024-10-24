"use client";

import { FaEllipsisH } from "react-icons/fa";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useEffect, useState } from "react";
import PhotoGrid from "@/src/app/(WithCommonLayout)/(user)/profile/_components/Post";
import { IPost, IUser } from "@/src/types";
import EditProfileModal from "./EditProfile";
import { useDisclosure } from "@nextui-org/modal";
import { useUser } from "@/src/context/user.provider";
import Link from "next/link";
import { CreateFollow, unFollow } from "@/src/services/Follow";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Profile = ({
  profileData,
  postsData,
}: {
  profileData: IUser;
  postsData: IPost[];
}) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user } = useUser();
  const lengthPost = postsData?.length;
  const [followers, setFollowers] = useState(
    profileData?.followers?.length || 0,
  );
  const [following, setFollowing] = useState(
    profileData?.following?.length || 0,
  );
  const [isFollowing, setIsFollowing] = useState(false);
  const [loadingFollow, setLoadingFollow] = useState(false);
  const [error, setError] = useState<string | null>(null);
  console.log("data", profileData);
  useEffect(() => {
    if (user && profileData?.following.includes(user!._id)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [profileData, user]);

  const handleFollow = async () => {
    if (!user?._id) {
      toast.error("Please log in to follow.");
      router.push("/login");
      return;
    }

    try {
      const res = await CreateFollow({
        userId: profileData._id,
        followId: user?._id,
      });
      if (res.success) {
        setIsFollowing(true);
        setFollowers(profileData?.followers?.length + 1);
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
        userId: profileData._id,
        followId: user?._id,
      });
      if (res.success) {
        setIsFollowing(false);
        setFollowers(profileData?.followers?.length - 1);
        toast.success("UnFollow  added!");
      }
    } catch (error) {
      console.error(error);

      toast.error("An error occurred while adding a UnFollow.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="md:flex items-center md:space-x-6 ">
          <div className="flex items-center justify-center mb-4">
            <Avatar
              alt="Profile Image"
              className="border-4 border-gray-200 w-[200px] h-[200px]"
              size="lg"
              src={
                profileData?.profilePhoto || "https://via.placeholder.com/150"
              }
            />
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold">{profileData?.name}</h2>
              {isFollowing ? (
                <Button
                  color="primary"
                  size="sm"
                  onClick={handleUnFollow}
                  isLoading={loadingFollow}
                  disabled={loadingFollow}
                >
                  UNFollow
                </Button>
              ) : (
                <Button
                  color="primary"
                  size="sm"
                  onClick={handleFollow}
                  isLoading={loadingFollow}
                  disabled={loadingFollow}
                >
                  Follow
                </Button>
              )}

              {profileData._id === user?._id && (
                <Button color="secondary" onPress={onOpen}>
                  Edit
                </Button>
              )}

              {/* Dropdown for Profile Options */}
              <Dropdown>
                <DropdownTrigger>
                  <button
                    className="flex items-center justify-center w-8 h-8 rounded-full"
                    aria-label="Profile options"
                  >
                    <FaEllipsisH className="h-6 w-6 text-gray-600" />
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Options">
                  <DropdownItem key="report">Report</DropdownItem>
                  <DropdownItem key="block">Block</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* Display Error Message */}
            {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}

            {/* Follower/Following Counts */}
            <div className="mt-4 flex space-x-6 text-sm">
              <div>
                <span className="font-bold">{lengthPost || 0}</span> posts
              </div>
              <div>
                <span className="font-bold">{followers}</span> followers
              </div>
              <div>
                <span className="font-bold">{following}</span> following
              </div>
            </div>

            {/* Bio Section */}
            <div className="mt-4">
              <h1 className="font-bold">{profileData?.name}</h1>
              <p className="text-sm">
                {profileData?.bio || "No bio available."}
              </p>
              {profileData?.website && (
                <a
                  href={
                    profileData.website.startsWith("http")
                      ? profileData.website
                      : `https://${profileData.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500"
                >
                  {profileData.website}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stories/Highlights Section */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-700">Highlights</h3>
        <div className="flex space-x-4 mt-2">
          {/* Example Highlight */}
          {postsData?.slice(0, 6).map((post, index) => (
            <div key={post._id} className="flex flex-col items-center">
              <Link href={`/postDetails/${post._id}`}>
                <Avatar
                  size="lg"
                  src={post?.images[0] || "https://via.placeholder.com/150"}
                  className="cursor-pointer"
                />
              </Link>
              <span className="text-xs mt-1">Highlight {index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Posts Section */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-700 mb-3">All Posts</h3>
        {postsData && postsData.length > 0 ? (
          <PhotoGrid posts={postsData} />
        ) : (
          <div>No posts available.</div>
        )}
      </div>

      {/* Edit Profile Modal */}
      {profileData._id === user?._id && (
        <EditProfileModal
          isOpen={isOpen}
          user={profileData}
          onClose={onClose}
          onUpdate={onOpen}
        />
      )}
    </div>
  );
};

export default Profile;
