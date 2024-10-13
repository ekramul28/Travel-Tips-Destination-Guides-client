"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const CreateFollow = async () => {
  try {
    const { data } = await axiosInstance.post("/follow");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
