"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
type TFollow = {
  userId: string;
  followId: string;
};
export const CreateFollow = async (flowerData: TFollow) => {
  try {
    const { data } = await axiosInstance.post("/user/follow", flowerData);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const unFollow = async (flowerData: TFollow) => {
  try {
    const { data } = await axiosInstance.post("/user/unFollow", flowerData);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
