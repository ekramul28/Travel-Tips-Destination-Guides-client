import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";

const CommentsSection = ({ postId }: { postId: string }) => {
  const [comments, setComments] = useState<string[]>([]); // List of comments
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment(""); // Clear input after adding
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      <div className="mb-4">
        <Input
          underlined
          fullWidth
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={handleAddComment} className="mt-2">
          Post Comment
        </Button>
      </div>

      {comments.length > 0 ? (
        <div>
          {comments.map((comment, index) => (
            <Card key={index} className="mb-2">
              <p>{comment}</p>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No comments yet.</p>
      )}
    </div>
  );
};

export default CommentsSection;
