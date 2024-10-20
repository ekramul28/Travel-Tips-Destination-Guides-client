import SuggestedUser from "@/src/components/Ui/SuggestedUser/SuggestedUser";
import { getAllUser } from "@/src/services/user";
import React from "react";

const usersId = async () => {
  const allUser = await getAllUser();
  console.log("user", allUser);
  return (
    <div>
      <SuggestedUser users={allUser?.data} />
    </div>
  );
};

export default usersId;
