import React from "react";

import { getUserByPost } from "@/src/services/post";
import { getMyProfile } from "@/src/services/Profile";
import Profile from "@/src/components/Ui/Profile/profile";

const ProfileMainPage = async () => {
  const { data: profileData } = await getMyProfile();
  const posts = await getUserByPost(profileData?._id as string);
  const postsData = posts?.data || [];

  return (
    <div>
      <Profile postsData={postsData} profileData={profileData} />
    </div>
  );
};

export default ProfileMainPage;
