/* eslint-disable import/order */
import Container from "@/src/components/Ui/Container";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};

export default layout;
