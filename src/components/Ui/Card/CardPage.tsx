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
import { CreateVote } from "@/src/services/Vote";

const CardPage = ({ post }: { post: IPost }) => {
  const { user } = useUser();
  const [upvoteCount, setUpvoteCount] = useState(post?.upvote || 0);
  const [downvoteCount, setDownvoteCount] = useState(post?.downvote || 0);
  const [comments, setComments] = useState<IComment[]>(post?.comment || []);
  const [commentInput, setCommentInput] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [userVote, setUserVote] = useState<"upvote" | "downvote" | null>(null);
  const [loadingVote, setLoadingVote] = useState(false);

  // Fetch the current user's vote for this post when component mounts
  useEffect(() => {
    const fetchUserVote = async () => {
      if (user?._id) {
        try {
          const res = await axios.get(`/api/userVote?postId=${post._id}`);
          if (res.data.voteType) {
            setUserVote(res.data.voteType);
          } else {
            setUserVote(null);
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to fetch your vote.");
        }
      }
    };

    fetchUserVote();
  }, [user, post._id]);

  // Fetch comments when comments section is opened
  useEffect(() => {
    const fetchComments = async () => {
      if (showComments) {
        try {
          const res = await axios.get(`/api/fetchComments?postId=${post._id}`);
          if (res.status === 200) {
            setComments(res.data.comments);
          }
        } catch (error) {
          console.error(error);
          toast.error("Failed to fetch comments.");
        }
      }
    };

    fetchComments();
  }, [showComments, post._id]);

  const handleVote = async (type: "upvote" | "downvote") => {
    if (!user?._id) {
      toast.error("Please log in to vote.");
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
      console.log("inside", res.message);
      if (res?.success) {
        const message = res.message || res.data.message;
        if (message === "Vote added!") {
          if (type === "upvote") setUpvoteCount(upvoteCount + 1);
          else setDownvoteCount(downvoteCount + 1);
          setUserVote(type);
          toast.success("Vote added!");
        } else if (message === "Vote removed") {
          if (type === "upvote") setUpvoteCount(upvoteCount - 1);
          else setDownvoteCount(downvoteCount - 1);
          setUserVote(null);
          toast.success("Vote removed!");
        } else if (message === "Vote updated") {
          if (type === "upvote") {
            setUpvoteCount(upvoteCount + 1);
            setDownvoteCount(downvoteCount - 1);
          } else {
            setDownvoteCount(downvoteCount + 1);
            setUpvoteCount(upvoteCount - 1);
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
      return;
    }

    if (commentInput.trim()) {
      try {
        const res = await axios.post("/api/comments", {
          postId: post._id,
          text: commentInput,
        });

        if (res.status === 201) {
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
          <FaThumbsUp
            className={`text-xl cursor-pointer ${
              userVote === "upvote" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => handleVote("upvote")}
            title={userVote === "upvote" ? "Remove Upvote" : "Upvote"}
          />
          <strong>{upvoteCount} Upvotes</strong> |{" "}
          <FaThumbsDown
            className={`text-xl cursor-pointer ${
              userVote === "downvote" ? "text-red-500" : "text-gray-500"
            }`}
            onClick={() => handleVote("downvote")}
            title={userVote === "downvote" ? "Remove Downvote" : "Downvote"}
          />
          <strong>{downvoteCount} Downvotes</strong>
        </div>
        <div className="flex gap-4">
          <FaComment
            className="text-xl cursor-pointer text-gray-500"
            onClick={() => setShowComments(!showComments)}
            title="Comment"
          />
          <strong>
            {comments.length} Comment{comments.length !== 1 ? "s" : ""}
          </strong>
          <FaShare
            className="text-xl cursor-pointer text-gray-500"
            title="Share"
          />
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
              <strong>{comment?.authorId?.name}</strong>: {comment.text}
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
