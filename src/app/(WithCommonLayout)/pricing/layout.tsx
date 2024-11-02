import React, { ReactNode } from "react";

import Container from "@/src/components/Ui/Container";
import { Navbar } from "@/src/components/Ui/navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default layout;
