import { Navbar } from "@/src/components/Ui/navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
