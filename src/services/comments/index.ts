"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const CreateComment = async (CommentData) => {
  try {
    const { data } = await axiosInstance.post("/comment", CommentData);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
