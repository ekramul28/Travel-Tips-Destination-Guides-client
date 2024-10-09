// RecentPost.jsx
"use client";
import React, { useState, useEffect } from "react";
import CardPage from "@/src/components/Ui/Card/CardPage";
import { getAllPost } from "@/src/services/post";
import { IPost } from "@/src/types";
import InfiniteScrollFn from "@/src/utils/InfiniteScrollFn";

const RecentPost = () => {
  // State to hold posts
  const [posts, setPosts] = useState<IPost[]>([]);
  // State to track if more posts are available
  const [hasMore, setHasMore] = useState<boolean>(true);
  // State to keep track of the current page for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Number of posts to fetch per page
  const POSTS_PER_PAGE = 2;

  // Fetch initial posts when component mounts
  useEffect(() => {
    fetchInitialPosts();
  }, []);

  // Function to fetch initial posts
  const fetchInitialPosts = async () => {
    try {
      const { data: initialPosts } = await getAllPost(
        currentPage,
        POSTS_PER_PAGE,
      );
      setPosts(initialPosts);
      // If the number of posts fetched is less than POSTS_PER_PAGE, no more posts are available
      if (initialPosts.length < POSTS_PER_PAGE) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching initial posts:", error);
    }
  };

  // Function to fetch more posts
  const fetchMoreData = async () => {
    try {
      const nextPage = currentPage + 1;
      const { data: morePosts } = await getAllPost(nextPage, POSTS_PER_PAGE);

      // Append the new posts to the existing posts
      setPosts((prevPosts) => [...prevPosts, ...morePosts]);
      setCurrentPage(nextPage);

      // If fewer posts are returned than requested, assume no more posts
      if (morePosts.length < POSTS_PER_PAGE) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
      // Optionally, you can set hasMore to false or handle the error as needed
      setHasMore(false);
    }
  };

  return (
    <div>
      <InfiniteScrollFn
        fetchData={fetchMoreData}
        post={posts}
        hasMore={hasMore}
      >
        {posts.map((post: IPost) => (
          <CardPage key={post._id} post={post} />
        ))}
      </InfiniteScrollFn>
    </div>
  );
};

export default RecentPost;
