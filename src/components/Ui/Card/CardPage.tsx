/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
"use client";
import { useState } from "react";
import { FaComment, FaShare, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { IComment, IPost } from "@/src/types";
import Link from "next/link";

const CardPage = ({ post }: { post: IPost }) => {
  const [upvoteCount, setUpvoteCount] = useState(post?.upvote || 0);
  const [downvoteCount, setDownvoteCount] = useState(post?.downvote || 0);
  // const [comments, setComments] = useState(post?.images || []);
  const [commentInput, setCommentInput] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleUpvote = () => {
    setUpvoteCount((prev) => prev + 1);
  };

  const handleDownvote = () => {
    setDownvoteCount((prev) => prev + 1);
  };

  // const handleAddComment = () => {
  //   if (commentInput.trim()) {
  //     setComments([
  //       ...comments,
  //       { author: post?.authorId?.name, text: commentInput },
  //     ]);
  //     setCommentInput(""); // Clear the input
  //   }
  // };

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
          <FaArrowUp
            className="text-xl cursor-pointer text-gray-500"
            onClick={handleUpvote}
          />
          <strong>{upvoteCount} Upvotes</strong> |{" "}
          <FaArrowDown
            className="text-xl cursor-pointer text-gray-500"
            onClick={handleDownvote}
          />
          <strong>{downvoteCount} Downvotes</strong>
        </div>
        <div className=" flex gap-4">
          <FaComment
            className="text-xl cursor-pointer text-gray-500"
            onClick={() => setShowComments(!showComments)}
          />
          <strong>{downvoteCount} Comment</strong>
          <FaShare className="text-xl cursor-pointer text-gray-500" />
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
          {/* {comments.map((comment: IComment, index: number) => (
            <div key={index} className="mb-2">
              <strong>{comment?.authorId?.name}</strong>: {comment.content}
            </div>
          ))} */}

          <div className="flex gap-2 mt-4">
            <input
              className="border p-2 w-full"
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Add a comment..."
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              // onClick={handleAddComment}
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
