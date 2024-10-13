/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";
import { useState, useEffect } from "react";
import { FaComment, FaShare, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { IPost, IComment } from "@/src/types";
import Link from "next/link";
import axios from "axios";
import { useUser } from "@/src/context/user.provider";
import { toast } from "sonner";
import { CreateVote, getVote } from "@/src/services/Vote";
import { useRouter } from "next/navigation";
import { CreateComment } from "@/src/services/comments";

const CardPage = ({ post }: { post: IPost }) => {
  const { user } = useUser();
  const [upvoteCount, setUpvoteCount] = useState<number>(0);
  const [downvoteCount, setDownvoteCount] = useState<number>(0);
  const [comments, setComments] = useState<IComment[]>(post?.comment || []);
  const [commentInput, setCommentInput] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [like, setLike] = useState(false);
  const [unLike, setUnLike] = useState(false);
  const [userVote, setUserVote] = useState<"upvote" | "downvote" | null>(null);
  const [loadingVote, setLoadingVote] = useState(false);
  const router = useRouter();
  // Set upvote count
  console.log("post", post);
  console.log("comment", comments);
  useEffect(() => {
    const upvotes = post?.vote?.filter((vot) => vot?.voteType === "upvote");
    setUpvoteCount(upvotes?.length); // Set the count of upvotes
    const allLike = upvotes?.some((vot) => vot?.userId === user?._id);
    setLike(allLike);
    console.log(allLike);
  }, [post.vote, user?._id]);
  // Set downvote count
  useEffect(() => {
    const downVotes = post?.vote?.filter((vot) => vot?.voteType === "downvote");
    setDownvoteCount(downVotes?.length); // Set the count of downvotes
    const unlike = downVotes?.some((vot) => vot?.userId === user?._id);
    setUnLike(unlike);
  }, [post.vote, user?._id]);

  const handleVote = async (type: "upvote" | "downvote") => {
    if (!user?._id) {
      toast.error("Please log in to vote.");
      router.push("/login");
      return;
    }

    if (loadingVote) return; // Prevent multiple clicks

    setLoadingVote(true); // Enable loading state

    const voteData = {
      userId: user._id,
      postId: post._id,
      voteType: type,
    };

    try {
      const res = await CreateVote(voteData);
      console.log("res", res);
      console.log("inside", res.message);
      if (res?.success) {
        const message = res.message || res.data.message;
        if (message === "Vote added") {
          if (type === "upvote") {
            setUpvoteCount(upvoteCount + 1);
            setLike(true);
          } else setDownvoteCount(downvoteCount + 1);
          setUserVote(type);

          toast.success("Vote added");
        } else if (message === "Vote removed") {
          if (type === "upvote") setUpvoteCount(upvoteCount - 1);
          else setDownvoteCount(downvoteCount - 1);
          setLike(false);
          setUnLike(false);
          setUserVote(null);
          toast.success("Vote removed!");
        } else if (message === "Vote updated") {
          if (type === "upvote") {
            setUpvoteCount(upvoteCount + 1);
            setDownvoteCount(downvoteCount - 1);
            setLike(true);
            setUnLike(false);
          } else {
            setDownvoteCount(downvoteCount + 1);
            setUpvoteCount(upvoteCount - 1);
            setUnLike(true);
            setLike(false);
          }
          setUserVote(type);
          toast.success("Vote updated!");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while voting.");
    } finally {
      setLoadingVote(false);
    }
  };

  const handleAddComment = async () => {
    if (!user?._id) {
      toast.error("Please log in to comment.");
      router.push("/login");
      return;
    }

    if (commentInput.trim()) {
      console.log(commentInput);
      const data = {
        userId: user._id,
        postId: post._id,
        content: commentInput,
      };
      try {
        const res = await CreateComment(data);
        console.log("comment", res);
        if (res.success) {
          setComments([...comments, res.data.comment]);
          setCommentInput("");
          toast.success("Comment added!");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while adding a comment.");
      }
    }
  };

  return (
    <Card className="p-2 my-4">
      {/* Header */}
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href={`profile/${post?.authorId?._id}`}>
            <Avatar size="lg" src={post?.authorId?.profilePhoto} />
          </Link>
          <div className="ml-4">
            <Link href={`profile/${post?.authorId?._id}`}>
              <div className="font-bold hover:underline">
                {post?.authorId?.name}
              </div>
            </Link>
            <div className="text-sm text-gray-500">{post?.location}</div>
          </div>
        </div>
        <span>•••</span>
      </CardHeader>

      {/* Post Image */}
      <CardBody className="cursor-pointer">
        <Link href={`postDetails/${post._id}`}>
          <Image alt="Post" height={300} width={"100%"} src={post?.images[0]} />
        </Link>
      </CardBody>

      {/* Actions */}
      <CardFooter className="flex justify-between items-center px-4">
        <div className="flex gap-4">
          <div className="flex items-center">
            <FaThumbsUp
              className={`text-xl cursor-pointer ${
                userVote === "downvote" ? "text-blue-500" : ""
              } ${like ? "text-blue-500" : "text-gray-500"}`}
              onClick={() => handleVote("upvote")}
              title={userVote === "upvote" ? "Remove Upvote" : "Upvote"}
            />
            <strong className="ml-1">{upvoteCount}</strong>
          </div>
          <div className="flex items-center">
            <FaThumbsDown
              className={`text-xl cursor-pointer ${
                userVote === "downvote" ? "text-red-500" : "text-gray-500"
              } ${unLike ? "text-red-500" : "text-gray-500"}`}
              onClick={() => handleVote("downvote")}
              title={userVote === "downvote" ? "Remove Downvote" : "Downvote"}
            />
            <strong className="ml-1">{downvoteCount}</strong>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center">
            <FaComment
              className="text-xl cursor-pointer text-gray-500"
              onClick={() => setShowComments(!showComments)}
              title="Comment"
            />
            <strong className="ml-1">
              {comments.length} Comment{comments.length !== 1 ? "s" : ""}
            </strong>
          </div>
          <div className="flex items-center">
            <FaShare
              className="text-xl cursor-pointer text-gray-500"
              title="Share"
            />
            {/* You can add share functionality here */}
          </div>
        </div>
      </CardFooter>

      {/* Description */}
      <CardBody className="px-4">
        <strong>{post?.title}</strong> {post?.description.slice(0, 100)}...{" "}
      </CardBody>

      {/* Comments Section */}
      {showComments && (
        <CardBody className="px-4">
          <div className="mb-2">
            <strong>Comments</strong>
          </div>
          {comments.map((comment: IComment, index: number) => (
            <div key={index} className="mb-2">
              <strong>{comment?.userId?.name}</strong>: {comment?.content}
            </div>
          ))}

          <div className="flex gap-2 mt-4">
            <input
              className="border p-2 w-full rounded-md"
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Add a comment..."
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={handleAddComment}
            >
              Comment
            </button>
          </div>
        </CardBody>
      )}
    </Card>
  );
};

export default CardPage;
