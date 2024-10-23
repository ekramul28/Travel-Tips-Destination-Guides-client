import { useMutation } from "@tanstack/react-query";
import { paymentByArmPay } from "../services/payment";

type PaymentData = {
  totalPrice: number;
  userId: string;
};

export const useAmrPayment = () => {
  return useMutation<PaymentData, Error, PaymentData>({
    mutationKey: ["PAYMENT_POST"],
    mutationFn: async (postData) => await paymentByArmPay(postData),
  });
};
