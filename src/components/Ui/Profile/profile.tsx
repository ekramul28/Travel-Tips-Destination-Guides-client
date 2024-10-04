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
const Profile = ({ profileData }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Avatar
            alt="Profile Image"
            className="border-4 border-gray-200 w-[200px] h-[200px]"
            size="lg"
            src={profileData?.profilePhoto || "https://via.placeholder.com/150"}
          />
          <div>
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold">{profileData?.name}</h2>
              <Button color="primary" size="sm" onClick={handleFollowToggle}>
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
              <Button color="secondary" size="sm">
                Message
              </Button>

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
        <div className="flex space-x-4 mt-2">
          {/* Example Highlight */}
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <Avatar
                size="lg"
                src={`https://via.placeholder.com/100?text=H${index + 1}`}
              />
              <span className="text-xs mt-1">Highlight {index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Posts Section */}
      <div className="mt-8">
        {postsData && postsData?.data?.length > 0 ? (
          <PhotoGrid posts={postsData.data} />
        ) : (
          <div>No posts available.</div>
        )}
      </div>
    </div>
  );
};

export default Profile;