"use server";
import { cookies } from "next/headers";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";

export const getMyProfile = async () => {
  // Retrieve cookies from the request headers
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value; // Get the access token from cookies

  const fetchOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: ` ${accessToken}`, // Include the access token
    },
    next: {
      tags: ["profile"], // Tags for revalidation
    },
  };

  const res = await fetch(`${envConfig.baseApi}/profile`, fetchOption);

  if (!res.ok) {
    throw new Error("Failed to fetch profile data"); // Handle error response
  }

  return res.json();
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
