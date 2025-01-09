// RecentPost.jsx (or .tsx if using TypeScript)
import ClientRecentPosts from "./_components/ClientRecentPosts";

import { getAllPost } from "@/src/services/post";
import { IPost } from "@/src/types";

interface RecentPostProps {
  initialPosts: IPost[];
  postsPerPage: number;
}

const RecentPost = async () => {
  const postsPerPage = 2;

  // Fetch initial posts server-side
  const initialData = await getAllPost(1, postsPerPage);
  const initialPosts = initialData?.data || [];

  return (
    <div>
      {/* Pass the initial posts to a client component for pagination */}
      <ClientRecentPosts
        initialPosts={initialPosts}
        postsPerPage={postsPerPage}
      />
    </div>
  );
};

export default RecentPost;
