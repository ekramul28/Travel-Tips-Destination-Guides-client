// ClientRecentPosts.jsx (or .tsx if using TypeScript)
"use client";

import React, { useState } from "react";

import InfiniteScrollFn from "@/src/utils/InfiniteScrollFn";
import CardPage from "@/src/components/Ui/Card/CardPage";
import { getAllPost } from "@/src/services/post";
import { IPost } from "@/src/types";

interface ClientRecentPostsProps {
  initialPosts: IPost[];
  postsPerPage: number;
}

const ClientRecentPosts = ({
  initialPosts,
  postsPerPage,
}: ClientRecentPostsProps) => {
  const [posts, setPosts] = useState<IPost[]>(initialPosts);
  const [hasMore, setHasMore] = useState<boolean>(
    initialPosts.length >= postsPerPage,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Function to fetch more posts
  const fetchMoreData = async () => {
    try {
      const nextPage = currentPage + 1;
      const { data: morePosts } = await getAllPost(nextPage, postsPerPage);

      setPosts((prevPosts) => [...prevPosts, ...morePosts]);
      setCurrentPage(nextPage);

      if (morePosts.length < postsPerPage) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
      setHasMore(false);
    }
  };

  return (
    <InfiniteScrollFn fetchData={fetchMoreData} hasMore={hasMore} post={posts}>
      {posts.map((post: IPost) => (
        <CardPage key={post._id} post={post} />
      ))}
    </InfiniteScrollFn>
  );
};

export default ClientRecentPosts;
