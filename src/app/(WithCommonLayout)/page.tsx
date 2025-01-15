/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/src/schemas/logoin.schema";
import { useUserLogin } from "@/src/hooks/auth.hook";
import FXInput from "@/src/components/form/FXInput";
import FXForm from "@/src/components/form/FXForm";
import Loading from "@/src/components/Ui/Loading";
import { useUser } from "@/src/context/user.provider";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();

  const redirect = searchParams.get("redirect");

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const { setValue } = useForm<FieldValues>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    userLoading(true);
  };

  const handleDemoLogin = (email: string, password: string) => {
    const data = { email, password };
    handleUserLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/home");
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
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Welcome Back
          </h3>
          <p className="text-center text-gray-500 mb-6">
            Log in to your Travel Guidance account
          </p>
          <FXForm
            resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="space-y-4">
              <FXInput label="Email" name="email" type="email" />
              <FXInput label="Password" name="password" type="password" />
              <div className="text-right">
                <Link
                  href="/forgetPassword"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FXForm>
          <div className="text-center mt-4 text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-blue-500 hover:underline font-semibold"
            >
              Register
            </Link>
          </div>
          <div className="mt-6 space-y-2">
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
              onClick={() => handleDemoLogin("mir@gmail.com", "123456")}
            >
              Login as Demo User
            </Button>
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
              onClick={() =>
                handleDemoLogin("mdekramulhassan168@gmail.com", "Ekramul28@")
              }
            >
              Login as Demo Admin
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
