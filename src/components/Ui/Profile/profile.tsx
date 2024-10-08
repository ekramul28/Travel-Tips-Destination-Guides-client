/* eslint-disable import/order */
"use client";

import { FaEllipsisH } from "react-icons/fa"; // React Icons for the Ellipsis (Options) Icon
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useState } from "react";
import PhotoGrid from "@/src/app/(WithCommonLayout)/(user)/profile/_components/Post";
import { IPost, IUser } from "@/src/types";
import EditProfileModal from "./EditProfile";
import { useDisclosure } from "@nextui-org/modal";
import { useUser } from "@/src/context/user.provider";
import Link from "next/link";
const Profile = ({
  profileData,
  postsData,
}: {
  profileData: IUser;
  postsData: IPost[];
}) => {
  console.log("inside profile", profileData);
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [onUpdate, setOnUpdate] = useState(false);
  const handelModal = () => {
    setIsModalOpen(true);
  };
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { user } = useUser();
  console.log(user);
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="md:flex items-center md:space-x-6 ">
          <div className="flex items-center justify-center mb-4">
            <Avatar
              alt="Profile Image"
              className="border-4  border-gray-200 w-[200px] h-[200px]"
              size="lg"
              src={
                profileData?.profilePhoto || "https://via.placeholder.com/150"
              }
            />
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold">{profileData?.name}</h2>
              <Button color="primary" size="sm" onClick={handleFollowToggle}>
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
              {profileData._id === user?._id ? (
                <Button color="secondary" onPress={onOpen}>
                  Edit
                </Button>
              ) : (
                ""
              )}

              {/* Dropdown for Profile Options */}
              <Dropdown>
                <DropdownTrigger>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full">
                    <FaEllipsisH className="h-6 w-6 text-gray-600" />
                  </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Options">
                  <DropdownItem key="report">Report</DropdownItem>
                  <DropdownItem key="block">Block</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            {/* Follower/Following Counts */}
            <div className="mt-4 flex space-x-6 text-sm">
              <div>
                <span className="font-bold">{profileData.postsCount || 0}</span>{" "}
                posts
              </div>
              <div>
                <span className="font-bold">{profileData?.flower || 0}</span>{" "}
                followers
              </div>
            </div>

            {/* Bio Section */}
            <div className="mt-4">
              <h1 className="font-bold">{profileData?.name}</h1>
              <h1 className="text-sm">
                {profileData?.bio || "No bio available."}
              </h1>
              <h1 className="text-sm text-blue-500">
                {profileData.website || "https://yourwebsite.com"}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Stories/Highlights Section */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-700">Highlights</h3>
        <div className="flex   space-x-4 mt-2">
          {/* Example Highlight */}
          {postsData?.slice(0, 6).map((post, index) => (
            <div key={index} className="flex flex-col  items-center">
              <Link href={`/postDetails/${post._id}`}>
                <Avatar size="lg" src={post?.images[2]} />
              </Link>
              <span className="text-xs mt-1">Highlight {index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Posts Section */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-700 mb-3">All Post</h3>
        {postsData && postsData?.length > 0 ? (
          <PhotoGrid posts={postsData} />
        ) : (
          <div>No posts available.</div>
        )}
      </div>

      <EditProfileModal
        isOpen={isOpen}
        user={profileData}
        onClose={onClose}
        onOpenChange={onOpenChange}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default Profile;
