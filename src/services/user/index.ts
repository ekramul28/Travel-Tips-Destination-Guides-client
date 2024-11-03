/* eslint-disable padding-line-between-statements */
"use server";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";

// export const getAllUser = async () => {
//   try {
//     const { data } = await axiosInstance.get("/user");

//     return data;
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };

export const getAllUser = async () => {
  try {
    const response = await fetch(`${envConfig.baseApi}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
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
