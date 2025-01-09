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
    const data = {
      email,
      password,
    };
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
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-20px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with Travel Guidance</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[35%]">
          <FXForm
            resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FXInput label="Email" name="email" type="email" />
            </div>
            <div className="py-3">
              <FXInput label="Password" name="password" type="password" />
            </div>
            <div className="">
              Forgot your password?{" "}
              <span className="cursor-pointer">
                <Link href={"/forgetPassword"}>Click here to reset it</Link>
              </span>
            </div>
            <Button
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FXForm>
          <div className="text-center">
            <p>
              Don&lsquo;t have account? <Link href={"/register"}>Register</Link>
            </p>
          </div>
          <div className="mt-5">
            <Button
              className="w-full my-2 bg-blue-500 text-white rounded-md"
              onClick={() => handleDemoLogin("mir@gmail.com", "123456")}
            >
              Login as Demo User
            </Button>
            <Button
              className="w-full my-2 bg-green-500 text-white rounded-md"
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
