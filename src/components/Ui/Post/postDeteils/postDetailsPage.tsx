/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
"use client";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"; // React Icons
import { format, formatDistanceToNow } from "date-fns"; // For formatting dates
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { Badge } from "@nextui-org/badge";
import { IComment, IPost } from "@/src/types";
import CommentsSection from "../PostComment";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CreateComment } from "@/src/services/comments";
import { useUser } from "@/src/context/user.provider";
const PostDetailsPage = ({ post }: { post: IPost }) => {
  const router = useRouter();
  const { user } = useUser();
  const [comments, setComments] = useState<IComment[]>(post?.comment || []);

  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = async () => {
    if (!user?._id) {
      toast.error("Please log in to comment.");
      router.push("/login");
      return;
    }

    if (commentInput.trim()) {
      console.log(commentInput);
      const data = {
        userId: user?._id,
        postId: post._id,
        content: commentInput,
      };
      try {
        const res = await CreateComment(data);
        if (res.success) {
          setComments([...comments, res.data.result]);
          setCommentInput("");

          toast.success("Comment added!");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while adding a comment.");
      }
    }
  };

  const {
    title,
    description,
    images,
    city,
    status,
    location,

    createdAt,
    updatedAt,
  } = post;

  return (
    <div>
      <Card className="shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {images.map((image, index) => (
            <Image
              key={index}
              alt={`${title} image ${index + 1}`}
              className="rounded-lg"
              height="100%"
              src={image}
              width="100%"
            />
          ))}
        </div>

        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm">
              <strong>Location:</strong> {city}, {location}
            </p>
            <p className="text-sm">
              <strong>Status:</strong>{" "}
              {status === "ACTIVE" ? (
                <Badge color="success">Available</Badge>
              ) : (
                <Badge color="warning">Unavailable</Badge>
              )}
            </p>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <div>
            <p>
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </p>
          </div>
          <p>
            <strong>Created At:</strong>{" "}
            {format(new Date(createdAt), "MMMM dd, yyyy HH:mm")}
          </p>
          <p>
            <strong>Last Updated:</strong>{" "}
            {format(new Date(updatedAt), "MMMM dd, yyyy HH:mm")}
          </p>
        </div>
      </Card>
      {/* comment section  */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Comments</h2>

        <div className="mb-4">
          <Input
            placeholder="Add a comment..."
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <Button onClick={handleAddComment} className="mt-2">
            Post Comment
          </Button>
        </div>
        <CommentsSection authorId={post?.authorId?._id} comments={comments} />
      </div>
    </div>
  );
};

export default PostDetailsPage;
