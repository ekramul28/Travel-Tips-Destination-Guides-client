"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { resetPasswordLinkApi } from "@/src/services/AuthService";

const ResetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setEmail(params.get("email"));
    setToken(params.get("token"));
  }, []);
  console.log(email, token);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");

      return;
    }

    try {
      const resetData = {
        token: token,
        email: email,
        newPassword: newPassword,
      };
      const data = await resetPasswordLinkApi(resetData);

      if (data?.success) {
        setSuccess(data?.message);
        toast.success(data?.message);
        router.push("/login"); // Redirect after 2 seconds
        setError("");
      } else {
        setError(data.message || "Password reset failed.");
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again.",
      );
      setSuccess("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">
          Reset Your Password
        </h2>

        {error && (
          <p className="mb-4 text-sm text-center text-red-500 bg-red-100 p-2 rounded">
            {error}
          </p>
        )}
        {success && (
          <p className="mb-4 text-sm text-center text-green-500 bg-green-100 p-2 rounded">
            {success}
          </p>
        )}

        <form
          className="flex flex-col space-y-4"
          onSubmit={handlePasswordReset}
        >
          <label className="flex flex-col">
            <span className="mb-1 text-gray-600">New Password</span>
            <input
              required
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-gray-600">Confirm Password</span>
            <input
              required
              className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          <button
            className="py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            type="submit"
          >
            Reset Password
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Remembered your password?{" "}
          <a className="text-blue-600 hover:underline" href="/login">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
