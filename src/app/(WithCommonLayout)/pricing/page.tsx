"use client";
import React from "react";
import { toast } from "sonner";

import { useUser } from "@/src/context/user.provider";
import { useAmrPayment } from "@/src/hooks/payment.hook";
import { IUser } from "@/src/types";

const Pricing = () => {
  const { mutate: executePayment, isPending } = useAmrPayment();
  const { user } = useUser();

  if (!user) {
    toast.error("Login first");
  }

  const handlePayment = async () => {
    const data = {
      totalPrice: 1000,
      user: user as IUser,
    };

    try {
      executePayment(data, {
        onSuccess: (result) => {
          window.location.href = result?.data?.payment_url;
        },
        onError: (error) => {
          console.error("Payment failed", error);
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid gap-4 justify-center items-center md:gap-8">
        <div className="rounded-2xl w-[400px] md:w-[600px] border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Pro
              <span className="sr-only">Plan</span>
            </h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                1000৳
              </strong>
              <span className="text-sm font-medium text-gray-700">
                /LifeTime
              </span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {/* Feature List */}
            <li className="flex items-center gap-1">
              <svg
                className="size-5 text-indigo-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-gray-700">Premium content access</span>
            </li>
            {/* Add additional features here */}
          </ul>

          <button
            className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
            onClick={handlePayment}
          >
            {isPending ? "Loading...." : "Get Started"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
