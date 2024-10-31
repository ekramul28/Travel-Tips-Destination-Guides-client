"use server";
import SuggestedUser from "@/src/components/Ui/SuggestedUser/SuggestedUser";
import { getAllUser } from "@/src/services/user";
import { IUser } from "@/src/types";
import React from "react";

const usersId = async () => {
  const allUser = await getAllUser();
  return (
    <div>
      {allUser?.data?.map((user: IUser) => (
        <SuggestedUser user={user}></SuggestedUser>
      ))}
    </div>
  );
};

export default usersId;
