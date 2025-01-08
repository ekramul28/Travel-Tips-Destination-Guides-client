/* eslint-disable react/self-closing-comp */
/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
import MyPost from "@/src/components/Ui/myPost/MyPost";
import { getUserByPost } from "@/src/services/post";
import { getMyProfile } from "@/src/services/Profile";
import React from "react";

const page = async () => {
  const { data: profileData } = await getMyProfile();
  const posts = await getUserByPost(profileData?._id as string);
  const postsData = posts?.data || [];
  return (
    <div>
      <MyPost postsData={postsData}></MyPost>
    </div>
  );
};

export default page;
