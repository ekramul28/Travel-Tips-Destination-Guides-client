import { useMutation } from "@tanstack/react-query";
import { paymentByArmPay } from "../services/payment";
import { IUser } from "../types";

type PaymentData = {
  [x: string]: any;
  totalPrice: number;
  user: IUser;
};

export const useAmrPayment = () => {
  return useMutation<PaymentData, Error, PaymentData>({
    mutationKey: ["PAYMENT_POST"],
    mutationFn: async (postData) => await paymentByArmPay(postData),
  });
};
