/* eslint-disable padding-line-between-statements */
"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
export type voteType = {
  userId: string;
  postId: string;
  voteType: string;
};
export const CreateVote = async (VoteData: voteType) => {
  try {
    const { data } = await axiosInstance.post("/vote", VoteData);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getVote = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/vote/${id}`);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
// export const getSingleUser = async (id: string) => {
//   try {
//     const { data } = await axiosInstance.get(`/user/${id}`);
//     return data;
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };
