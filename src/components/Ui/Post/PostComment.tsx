/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Avatar } from "@nextui-org/avatar";
import { Card } from "@nextui-org/card";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/navigation";
import React from "react";

import { IComment } from "@/src/types";

const CommentsSection = ({
  comments,
  authorId,
}: {
  comments: IComment[];
  authorId: string | undefined;
}) => {
  const router = useRouter();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      {comments?.length > 0 ? (
        <div>
          {[...comments].reverse().map((comment: IComment, index: number) => (
            <div key={index}>
              <div className="flex  items-center">
                <Avatar
                  alt="User Avatar"
                  className="mr-2 cursor-pointer"
                  size="sm"
                  src={comment?.userId?.profilePhoto || "/default-avatar.png"}
                  onClick={() => router.push(`/dashboard/profile/${authorId}`)}
                />
                <Card className="mb-2 p-3 flex items-start">
                  <div>
                    <div
                      className="font-bold hover:underline cursor-pointer"
                      onClick={() =>
                        router.push(`/dashboard/profile/${authorId}`)
                      }
                    >
                      {comment?.userId?.name}
                      {comment?.userId?.verified && (
                        <span
                          className="ml-2 text-green-500"
                          title="Verified User"
                        >
                          ✅
                        </span>
                      )}
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
