import React from "react";

import Profile from "@/src/components/Ui/Profile/profile";
import { getMyProfile } from "@/src/services/Profile";

const MyProfile = async () => {
  const data = await getMyProfile();
  const profileData = data?.data;
  const postsData = {};
  console.log("hava", data);
  return (
    <div>
      <Profile postsData={postsData} profileData={profileData} />
    </div>
  );
};

export default MyProfile;
