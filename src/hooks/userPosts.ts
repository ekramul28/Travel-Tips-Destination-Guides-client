/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useQuery } from "@tanstack/react-query";
import { getUserByPost } from "../services/post";

export const useGetUserPosts = (id: string) => {
  return useQuery({
    queryKey: ["USER_POST", id],
    queryFn: async () => getUserByPost(id),
  });
};
