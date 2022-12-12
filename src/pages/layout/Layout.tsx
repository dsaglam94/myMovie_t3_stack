import type { ReactNode } from "react";
import React from "react";
import Navbar from "../../components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-auto min-h-screen max-w-[75rem] ">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
