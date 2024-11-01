import { useMutation } from "@tanstack/react-query";
import { searchItems } from "../services/Search";

export const useSearchPost = () => {
  return useMutation({
    mutationKey: ["SEARCH_ITEMS"],
    mutationFn: async (searchTerm: string) => await searchItems(searchTerm),
  });
};
