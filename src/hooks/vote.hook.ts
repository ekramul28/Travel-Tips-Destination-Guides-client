import { useMutation } from "@tanstack/react-query";
import { CreateVote } from "../services/Vote";

export const useVoteCreate = (voteData) => {
  return useMutation<any, Error>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (voteData) => await CreateVote(voteData),
  });
};
