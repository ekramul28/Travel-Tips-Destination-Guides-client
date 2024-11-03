"use server";
import React from "react";

import SuggestedUser from "@/src/components/Ui/SuggestedUser/SuggestedUser";
import { IUser } from "@/src/types";
import { getAllUser } from "@/src/services/user";

const usersId = async () => {
  const allUser = await getAllUser();
  // const allUser = { data: [] };

  return (
    <div>
      {allUser?.data?.map((user: IUser) => (
        <SuggestedUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default usersId;
