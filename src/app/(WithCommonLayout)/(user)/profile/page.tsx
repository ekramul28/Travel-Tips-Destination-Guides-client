import React from "react";
import Profile from "@/src/components/Ui/Profile/profile";
import { getUserByPost } from "@/src/services/post";
import { getSingleUser } from "@/src/services/user";
import { useUser } from "@/src/context/user.provider";
import { getCurrentUser } from "@/src/services/AuthService";

const ProfileMainPage = async () => {
  const user = await getCurrentUser();
  const userData = await getSingleUser(user?._id as string);

  const posts = await getUserByPost(user?._id as string);

  // Handle if no user data is available
  if (!userData || !userData.data) {
    return <div>No user data available.</div>;
  }

  const profileData = userData.data;
  const postsData = posts?.data || [];
  return (
    <div>
      <Profile profileData={profileData} postsData={postsData}></Profile>
    </div>
  );
};

export default ProfileMainPage;
