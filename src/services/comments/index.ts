"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
type CommentDataType = {
  postId: string;
  userId: string;
  content: string;
};
export const CreateComment = async (CommentData: CommentDataType) => {
  try {
    const { data } = await axiosInstance.post("/comment", CommentData);
    revalidateTag("posts");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// export const CreateComment = async (CommentData) => {
//   // Retrieve cookies from the request headers
//   const cookieStore = cookies();
//   const accessToken = cookieStore.get("accessToken")?.value; // Get the access token from cookies

//   const fetchOption = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: ` ${accessToken}`, // Include the access token with 'Bearer' prefix
//     },
//     body: JSON.stringify(CommentData), // Add CommentData to the request body as JSON
//     next: {
//       tags: ["posts"], // Tags for revalidation
//     },
//   };

//   try {
//     const response = await fetch(`${envConfig.baseApi}/comment`, fetchOption); // Replace with your actual API endpoint
//     if (!response.ok) {
//       throw new Error("Failed to create comment");
//     }
//     return await response.json(); // Return the response data if needed
//   } catch (error) {
//     console.error("Error creating comment:", error);
//     throw error;
//   }
// };
