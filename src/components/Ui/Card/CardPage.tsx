/* eslint-disable react/jsx-sort-props */
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

interface InstaCardProps {
  profileImage: string;
  username: string;
  location: string;
  postImage: string;
  likes: number;
  description: string;
  timeAgo: string;
}

const CardPage: React.FC<InstaCardProps> = ({
  profileImage,
  username,
  location,
  postImage,
  likes,
  description,
  timeAgo,
}) => {
  return (
    <Card className="p-2">
      {/* Header */}
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center">
          <Avatar size="lg" src={profileImage} />
          <div className="ml-4">
            <div className="font-bold">{username}</div>
            <div className="text-sm text-gray-500">{location}</div>
          </div>
        </div>
        <span>•••</span>
      </CardHeader>

      {/* Post Image */}
      <CardBody>
        <Image alt="Post" height={300} src={postImage} className="w-full" />
      </CardBody>

      {/* Actions */}
      <CardFooter className="flex justify-between px-4">
        <div className="flex gap-4">
          <FaHeart className="text-xl cursor-pointer text-gray-500" />
          <FaComment className="text-xl cursor-pointer text-gray-500" />
          <FaShare className="text-xl cursor-pointer text-gray-500" />
        </div>
      </CardFooter>

      {/* Likes */}
      <CardBody className="px-4 py-2">
        <strong>{likes} likes</strong>
      </CardBody>

      {/* Description */}
      <CardBody className="px-4">
        <strong>{username}</strong> {description}
      </CardBody>

      {/* Time Ago */}
      <CardFooter className="text-sm text-gray-500 px-4 py-2">
        {timeAgo}
      </CardFooter>
    </Card>
  );
};

export default CardPage;
