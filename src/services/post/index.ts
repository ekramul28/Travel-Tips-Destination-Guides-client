"use server";

import { revalidateTag } from "next/cache";

import { getCurrentUser } from "../AuthService";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";

export const createPost = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("posts");

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create post");
  }
};

export const getAllPost = async (
  currentPage: Number,
  POSTS_PER_PAGE: Number,
) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(
    `${envConfig.baseApi}/post?page=${currentPage}&limit=${POSTS_PER_PAGE}`,
    fetchOptions,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
export const getPost = async (postId: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/post/${postId}`, fetchOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
export const getUserByPost = async (userId: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(
    `${envConfig.baseApi}/post/userPost/${userId}`,
    fetchOptions,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getMyPosts = async () => {
  const user = await getCurrentUser();

  const res = await axiosInstance.get(`/items?user=${user?._id}`);

  return res.data;
};
