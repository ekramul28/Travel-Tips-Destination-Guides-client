import React from "react";

import { getPost } from "@/src/services/post";
import PostDetailsPage from "@/src/components/Ui/Post/postDeteils/postDetailsPage";
interface IProps {
  params: {
    id: string;
  };
}
const PostDetails = async ({ params: { id } }: IProps) => {
  const { data: post } = await getPost(id);

  return (
    <>
      <div className="container mx-auto p-6">
        <PostDetailsPage post={post} />
      </div>
    </>
  );
};

export default PostDetails;
