"use server";
import axiosInstance from "@/src/lib/AxiosInstance";

export const paymentByArmPay = async (paymentData) => {
  try {
    const { data } = await axiosInstance.post("/payment/amrPay", paymentData);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
