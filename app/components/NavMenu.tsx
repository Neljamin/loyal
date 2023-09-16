"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <img
          src={session?.user?.image ?? ""}
          alt={session?.user?.name ?? ""}
          className="inline-block h-6 w-6 rounded-full"
        />
        <button
          className="text-gray-500 hover:text-gray-700 ml-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }

  return null;
};

export const NavMenu = () => {
  return (
    <nav className="flex justify-between items-center h-10 px-4">
      <h1 className="text-2xl font-bold">Loyal</h1>
      <AuthButton />
    </nav>
  );
};
