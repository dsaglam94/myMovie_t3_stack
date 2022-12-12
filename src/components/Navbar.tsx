import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { CiPizza } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="w-full bg-gray-700 p-4">
      <nav className="flex w-full items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <CiPizza size={25} />
            <p>myMovie</p>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/account">
            <div>Account</div>
          </Link>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
