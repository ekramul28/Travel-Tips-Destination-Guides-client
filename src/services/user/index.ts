/* eslint-disable padding-line-between-statements */
"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const getAllUser = async () => {
  try {
    const { data } = await axiosInstance.get("/user");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getSingleUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/user/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
