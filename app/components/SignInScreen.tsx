"use client";
import { signIn } from "next-auth/react";

export const SignInScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold m-2">Welcome to Loyal</h1>
      <button
        className="text-gray-500 hover:text-gray-700"
        onClick={() => signIn("google")}
      >
        Sign in
      </button>
    </div>
  );
};
