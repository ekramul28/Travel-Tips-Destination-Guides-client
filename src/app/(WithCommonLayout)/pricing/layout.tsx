import Container from "@/src/components/Ui/Container";
import { Navbar } from "@/src/components/Ui/navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default layout;
