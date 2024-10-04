/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useQuery } from "@tanstack/react-query";
import { getSingleUser } from "../services/user";

export const useGetSingleUser = (id: string) => {
  return useQuery({
    queryKey: ["USER", id],
    queryFn: async () => getSingleUser(id),
  });
};
