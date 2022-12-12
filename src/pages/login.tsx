import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/legacy/image";
import { FaDiscord } from "react-icons/fa";
import { CiPizza } from "react-icons/ci";

const Login = () => {
  return (
    <main className="relative flex h-screen w-screen items-center justify-center">
      <Image
        className="absolute h-full w-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/b8fd0ac0-fd6b-49d6-9d9c-4e7e2bd47a1a/TR-en-20220516-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="myMovie background"
        layout="fill"
        objectFit="cover"
      />
      <div className="fixed top-0 left-0 min-h-screen w-full bg-black/50 " />
      <div className="relative flex flex-col items-center justify-center gap-10 bg-black/50 p-10 text-white">
        <div className="flex items-center gap-2">
          <h1>Log into your account to see movies.</h1>
          <CiPizza size={30} />
        </div>
        <button
          onClick={() => signIn()}
          className="flex items-center gap-3 rounded-md bg-purple-600 px-4 py-2 text-white hover:opacity-90"
        >
          <FaDiscord size={30} /> Log in with Discord
        </button>
      </div>
    </main>
  );
};

export default Login;
