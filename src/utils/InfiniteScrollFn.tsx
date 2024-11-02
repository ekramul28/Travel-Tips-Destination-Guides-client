import React, { ReactNode } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { IPost } from "../types";
import SkeletonCardLoadingPage from "../app/(WithCommonLayout)/(home)/@recentPosts/loading";

const InfiniteScrollFn = ({
  children,
  post,
  fetchData,
  hasMore,
}: {
  children: ReactNode;
  post: IPost[];
  fetchData: any;
  hasMore: boolean;
}) => {
  return (
    <div>
      <InfiniteScroll
        dataLength={post.length} // This is important field to render the next data
        hasMore={hasMore} // Consider making this dynamic based on your data
        loader={<SkeletonCardLoadingPage />}
        next={fetchData}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // Below props only if you need pull down functionality
      >
        {children}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollFn;
