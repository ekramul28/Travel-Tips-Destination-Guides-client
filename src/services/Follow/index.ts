"use server";

import { revalidateTag } from "next/cache";

import axiosInstance from "@/src/lib/AxiosInstance";
type TFollow = {
  userId: string | undefined;
  followId: string;
};
export const CreateFollow = async (flowerData: TFollow) => {
  try {
    const { data } = await axiosInstance.post("/user/follow", flowerData);

    revalidateTag("user");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const unFollow = async (flowerData: TFollow) => {
  try {
    const { data } = await axiosInstance.post("/user/unFollow", flowerData);

    revalidateTag("user");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
