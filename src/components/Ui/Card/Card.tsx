import React from "react";

import CardPage from "./CardPage";

const Card = () => {
  return (
    <div>
      <CardPage
        description="Enjoying the beautiful sunset by the beach!"
        likes={150}
        location="New York, USA"
        postImage="https://nextui.org/images/hero-card-complete.jpeg"
        profileImage="https://nextui.org/images/hero-card-complete.jpeg"
        timeAgo="2 hours ago"
        username="john_doe"
      />
    </div>
  );
};

export default Card;
