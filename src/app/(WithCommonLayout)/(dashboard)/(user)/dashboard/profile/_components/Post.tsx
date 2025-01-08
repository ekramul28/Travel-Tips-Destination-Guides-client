import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

import { IPost } from "@/src/types";

// components/PhotoGrid.tsx
export default function PhotoGrid({
  posts,
  userId,
}: {
  posts: IPost[];
  userId?: string | undefined;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
      {posts?.map((post) => (
        <div key={post._id} className="relative">
          {userId === post?.authorId?._id ? (
            <div className="  flex justify-evenly">
              <Button>
                <FaEdit className="text-slate-400" />
              </Button>
              <Button>
                <FaTrash className="text-red-600" />
              </Button>
            </div>
          ) : null}
          <Link href={`/postDetails/${post?._id}`}>
            <Image
              alt={`Post ${post._id}`}
              className="w-full h-auto object-cover cursor-pointer"
              height={200}
              src={post?.images[1] || "/path/to/default/image.jpg"} // Fallback image
              width={400}
            />
          </Link>
          {/* Overlay on hover */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
            <span className="text-white text-lg">View</span>
          </div> */}
        </div>
      ))}
    </div>
  );
}
