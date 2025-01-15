"use server";
import React from "react";

import SuggestedUser from "@/src/components/Ui/SuggestedUser/SuggestedUser";
import { getAllUser } from "@/src/services/user";
import { IUser } from "@/src/types";

const usersId = async () => {
  const allUser = await getAllUser();

  return (
    <div className="mt-4 ">
      {allUser?.data?.map((user: IUser) => (
        <SuggestedUser key={user._id} user={user} />
      ))}
    </div>
  );
};

export default usersId;
