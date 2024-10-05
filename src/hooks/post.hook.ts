/* eslint-disable import/order */
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { createPost, getPost } from "../services/post";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),

    onSuccess: () => {
      toast.success("Post created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetPost = (id: string) => {
  return useQuery({
    queryKey: ["USER", id],
    queryFn: () => getPost(id),
  });
};
