"use server";
import axiosInstance from "@/src/lib/AxiosInstance";
import { IUser } from "@/src/types";

export const paymentByArmPay = async (paymentData: {
  totalPrice: number;
  user: IUser;
}) => {
  try {
    const { data } = await axiosInstance.post("/payment/amrPay", paymentData);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
