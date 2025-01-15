/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import registerValidationSchema from "@/src/schemas/register.schema";
import Loading from "@/src/components/Ui/Loading";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const {
    mutate: handleUserRegistration,
    isPending,
    isSuccess,
  } = useUserRegistration();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    handleUserRegistration(userData);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/login");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <Loading />
        </div>
      )}
      <div className="flex h-screen">
        {/* Right Section */}
        <div className="flex w-full  items-center justify-center p-6 bg-white">
          <div className="w-full max-w-md">
            <h3 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
              Create an Account
            </h3>
            <p className="text-center text-gray-600 mb-8">
              Start your journey with us today!
            </p>
            <FXForm
              resolver={zodResolver(registerValidationSchema)}
              onSubmit={onSubmit}
            >
              <div className="space-y-4">
                <FXInput label="Name" name="name" size="sm" />
                <FXInput label="Email" name="email" size="sm" />
                <FXInput label="Mobile Number" name="mobileNumber" size="sm" />
                <FXInput
                  label="Password"
                  name="password"
                  type="password"
                  size="sm"
                />
              </div>

              <Button
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-semibold transition duration-200"
                size="lg"
                type="submit"
              >
                Register
              </Button>
            </FXForm>
            <div className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-500 hover:underline font-semibold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
