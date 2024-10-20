import { IComment } from "@/src/types";
import { Avatar } from "@nextui-org/avatar";
import { Card } from "@nextui-org/card";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/navigation";

import React from "react";

const CommentsSection = ({
  comments,
  authorId,
}: {
  comments: IComment[];
  authorId: string;
}) => {
  const router = useRouter();
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      {comments?.length > 0 ? (
        <div>
          {comments.map((comment: IComment, index: number) => (
            <div key={index}>
              <div className="flex  items-center">
                <Avatar
                  src={comment?.userId?.profilePhoto || "/default-avatar.png"}
                  size="sm"
                  className="mr-2 cursor-pointer"
                  onClick={() => router.push(`profile/${authorId}`)}
                  alt="User Avatar"
                />
                <Card className="mb-2 p-3 flex items-start">
                  <div>
                    <div
                      onClick={() => router.push(`profile/${authorId}`)}
                      className="font-bold hover:underline cursor-pointer"
                    >
                      {comment?.userId?.name}
                    </div>
                    <div>{comment?.content}</div>
                  </div>
                </Card>
              </div>
              <div className="flex gap-7 ml-12 mb-1">
                <h1>
                  {" "}
                  {formatDistanceToNow(new Date(comment?.createdAt), {
                    addSuffix: true,
                  })}
                </h1>
                <h1 className="cursor-pointer">Like</h1>
                <h1 className="cursor-pointer">Reply</h1>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No comments yet.</div>
      )}
    </div>
  );
};

export default CommentsSection;
