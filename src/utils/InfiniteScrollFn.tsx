import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollFn = ({ children, post, fetchData, hasMore }) => {
  return (
    <div>
      <InfiniteScroll
        dataLength={post.length} // This is important field to render the next data
        next={fetchData}
        hasMore={hasMore} // Consider making this dynamic based on your data
        loader={<h4>Loading...</h4>}
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
