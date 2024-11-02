import React, { ReactNode, Suspense } from "react";

import { Navbar } from "@/src/components/Ui/navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Suspense>{children}</Suspense>
    </div>
  );
};

export default layout;
