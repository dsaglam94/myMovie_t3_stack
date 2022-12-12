import type { ReactNode } from "react";
import React from "react";
import Navbar from "../../components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-[75rem] ">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
