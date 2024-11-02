/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
import React from "react";
import PhotoGrid from "../../profile/_components/Post";

import { getUserByPost } from "@/src/services/post";

const page = async ({ params }: any) => {
  const { id } = params;
  let postsData;

  if (id) {
    const posts = await getUserByPost(id as string);
    postsData = posts?.data || [];
  }

  return (
    <div className="mt-8">
      <h3 className="font-semibold text-gray-700 mb-3">All Posts</h3>
      {postsData && postsData.length > 0 ? (
        <PhotoGrid posts={postsData} userId={id} />
      ) : (
        <div>No posts available.</div>
      )}
    </div>
  );
};

export default page;
