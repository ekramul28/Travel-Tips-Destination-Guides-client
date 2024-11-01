import { getUserByPost } from "@/src/services/post";
import { useParams } from "next/navigation";
import React from "react";
import PhotoGrid from "../../profile/_components/Post";

const page = async () => {
  const { id } = useParams();
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
