import CardPage from "@/src/components/Ui/Card/CardPage";
import { getAllPost } from "@/src/services/post";
import { IPost } from "@/src/types";

const RecentPost = async () => {
  const { data: posts } = await getAllPost();

  return (
    <div>
      {posts.map((post: IPost) => (
        <CardPage key={post._id} post={post} />
      ))}
    </div>
  );
};

export default RecentPost;
