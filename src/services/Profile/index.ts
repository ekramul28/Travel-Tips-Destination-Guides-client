"use server";
import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const getMyProfile = async () => {
  try {
    const { data } = await axiosInstance.get("/profile");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateMyProfile = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.patch(
      "/profile/updateMyProfile",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create post");
  }
};
