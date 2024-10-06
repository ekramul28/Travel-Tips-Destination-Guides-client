import { IPost } from "@/src/types";
import { Image } from "@nextui-org/image";
import Link from "next/link";

// components/PhotoGrid.tsx
export default function PhotoGrid({ posts }: { posts: IPost[] }) {
  // Sample data for posts

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4">
      {posts?.map((post) => (
        <div key={post._id} className="relative">
          <Link href={`/postDetails/${post?._id}`}>
            <Image
              alt={`Post ${post._id}`}
              className="w-full h-auto object-cover grid-cols-3"
              src={post?.images[1]}
              width={400}
              height={200}
            />
          </Link>
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">View</span>
          </div>
        </div>
      ))}
    </div>
  );
}
