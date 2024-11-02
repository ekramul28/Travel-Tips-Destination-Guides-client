import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { revalidateTag } from "next/cache";

import { updateMyProfile } from "../services/Profile"; // Ensure this is correctly imported

export const useUpdateProfile = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["UPDATE_PROFILE"], // Ensure this key makes sense for your use case
    mutationFn: async (updateData) => await updateMyProfile(updateData),

    onSuccess: () => {
      toast.success("Profile updated successfully!");
      revalidateTag("profile");
    },
    onError: (error) => {
      // Safely access error message or provide a fallback
      const errorMessage =
        error.message || "An error occurred while updating the profile.";

      toast.error(errorMessage);
      console.log(errorMessage);
    },
  });
};
