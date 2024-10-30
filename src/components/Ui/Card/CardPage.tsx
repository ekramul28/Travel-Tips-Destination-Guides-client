/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";
import { useState, useEffect } from "react";
import { FaComment, FaShare, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { IPost, IComment, IUser, IVote } from "@/src/types";
import Link from "next/link";
import { useUser } from "@/src/context/user.provider";
import { toast } from "sonner";
import { CreateVote, getVote } from "@/src/services/Vote";
import { useRouter } from "next/navigation";
import { CreateComment } from "@/src/services/comments";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { CreateFollow, unFollow } from "@/src/services/Follow";
import { formatDistanceToNow } from "date-fns";
import CommentsSection from "../Post/PostComment";
import { Chip } from "@nextui-org/chip";

const CardPage = ({ post }: { post: IPost }) => {
  const { user } = useUser();
  const [upvoteCount, setUpvoteCount] = useState<number>(0);
  const [downvoteCount, setDownvoteCount] = useState<number>(0);
  const [comments, setComments] = useState<IComment[]>(post?.comment || []);
  const [commentInput, setCommentInput] = useState("");
  const [like, setLike] = useState(false);
  const [unLike, setUnLike] = useState(false);
  const [userVote, setUserVote] = useState<"upvote" | "downvote" | null>(null);
  const [loadingVote, setLoadingVote] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const upvotes =
      post?.vote?.filter((vot) => vot.voteType === "upvote") || [];
    const downVotes =
      post?.vote?.filter((vot) => vot.voteType === "downvote") || [];

    // Set counts
    setUpvoteCount(upvotes.length);
    setDownvoteCount(downVotes.length);

    // Check if user has liked or disliked
    const allLike = upvotes.some((vot) => vot.userId === user?._id);
    const unlike = downVotes.some((vot) => vot.userId === user?._id);

    setLike(allLike);
    setUnLike(unlike);
  }, [post?.vote, user?._id]);

  const handleVote = async (type: "upvote" | "downvote") => {
    if (!user?._id) {
      toast.error("Please log in to vote.");
      router.push("/login");
      return;
    }
    if (type === "upvote") {
      setLike(true);
    }
    if (type === "downvote") {
      setUnLike(true);
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
        console.log(res);
        console.log(res.data.result);
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

  const handleFollow = async () => {
    if (!user?._id) {
      toast.error("Please log in to follow.");
      router.push("/login");
      return;
    }

    try {
      const res = await CreateFollow({
        userId: post.authorId._id,
        followId: user?._id,
      });
      if (res.success) {
        toast.success("follow  added!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding a comment.");
    }
  };
  const handleUnFollow = async () => {
    if (!user?._id) {
      toast.error("Please log in to UnFollow.");
      router.push("/login");
      return;
    }

    try {
      const res = await unFollow({
        userId: post.authorId._id,
        followId: user?._id,
      });
      if (res.success) {
        toast.success("UnFollow  added!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding a comment.");
    }
  };

  return (
    <Card className="p-2 m-4">
      {/* Header */}
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href={`profile/${post?.authorId?._id}`}>
            <Avatar size="lg" src={post?.authorId?.profilePhoto} />
          </Link>

          <div className="ml-4">
            <Link href={`profile/${post?.authorId?._id}`}>
              <div className="font-bold hover:underline flex items-center">
                {post?.authorId?.name}
                {post?.authorId?.verified && (
                  <span className="ml-2 text-green-500" title="Verified User">
                    ✅
                  </span>
                )}
              </div>
            </Link>
            <div className="text-sm text-gray-500">{post?.location}</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {post?.premium === "true" && (
            <div>
              <Chip color="warning">Premium</Chip>
            </div>
          )}

          <p>
            {formatDistanceToNow(new Date(post?.createdAt), {
              addSuffix: true,
            })}
          </p>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <span className="hover:cursor-pointer">•••</span>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem onClick={handleFollow}>
              <div className="flex items-center">
                <span>Follow</span>
              </div>
            </DropdownItem>
            <DropdownItem onClick={handleUnFollow}>
              <div className="flex items-center">
                <span>Unfollow</span>
              </div>
            </DropdownItem>
            <DropdownItem>
              <div className="flex items-center">
                <span>Report</span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>

      {/* Post Image */}
      <CardBody className="cursor-pointer">
        {post?.premium === "true" ? (
          user ? (
            user?.verified ? (
              <Link href={`postDetails/${post._id}`}>
                <Image
                  alt="Post"
                  height={300}
                  width={"100%"}
                  src={post?.images[0]}
                />
              </Link>
            ) : (
              <Link href={`/pricing`}>
                <Image
                  alt="Post"
                  height={300}
                  width={"100%"}
                  src={post?.images[0]}
                />
              </Link>
            )
          ) : (
            <Link href={`/login`}>
              <Image
                alt="Post"
                height={300}
                width={"100%"}
                src={post?.images[0]}
              />
            </Link>
          )
        ) : (
          <Link href={`postDetails/${post._id}`}>
            <Image
              alt="Post"
              height={300}
              width={"100%"}
              src={post?.images[0]}
            />
          </Link>
        )}
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
          <div
            className="flex items-center"
            onClick={() => router.push(`postDetails/${post._id}`)}
          >
            <FaComment
              className="text-xl cursor-pointer text-gray-500"
              title="Comment"
            />
            <strong className="ml-1 cursor-pointer hover:underline">
              {comments.length} Comments
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
        <strong className="uppercase">{post?.title}</strong>{" "}
        {post?.description.slice(0, 100)}...{" "}
      </CardBody>

      {/* Comments Section */}
      <CardBody>
        <CommentsSection
          authorId={post?.authorId?._id}
          comments={comments.slice(-1)}
        ></CommentsSection>
      </CardBody>
      {
        <CardBody className="px-4">
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
      }
    </Card>
  );
};

export default CardPage;
