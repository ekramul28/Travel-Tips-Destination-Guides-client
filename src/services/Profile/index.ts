import axiosInstance from "@/src/lib/AxiosInstance";

export const getMyProfile = async () => {
  try {
    const { data } = await axiosInstance.get("/profile");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
