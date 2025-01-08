import { ReactNode } from "react";

import Container from "@/src/components/Ui/Container";
import { Navbar } from "@/src/components/Ui/navbar";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Container>
        {/* <div className="md:hidden "> */}
        <Navbar />
        {/* </div> */}

        <div>{children}</div>
      </Container>
    </>
  );
}
