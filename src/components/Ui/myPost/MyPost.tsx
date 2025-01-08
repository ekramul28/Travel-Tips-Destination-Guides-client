import PhotoGrid from "@/src/app/(WithCommonLayout)/(dashboard)/(user)/dashboard/profile/_components/Post";
import { IPost } from "@/src/types";

const MyPost = ({ postsData }: { postsData: IPost[] }) => {
  return (
    <div>
      {/* User Posts Section */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-700 mb-3">All Posts</h3>
        {postsData && postsData.length > 0 ? (
          <PhotoGrid posts={postsData} />
        ) : (
          <div>No posts available.</div>
        )}
      </div>
    </div>
  );
};

export default MyPost;
