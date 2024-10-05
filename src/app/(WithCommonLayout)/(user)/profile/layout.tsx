import { ReactNode } from "react";
import NextLink from "next/link";

import Container from "@/src/components/Ui/Container";
import Sidebar from "@/src/components/Ui/Sidebar";
import { Logo } from "@/src/assets/icons";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <NextLink className="flex justify-start items-center gap-1" href="/">
        <Logo />
        <p className="font-bold text-inherit">ACME</p>
      </NextLink>
      <div className="my-3 flex w-full gap-12">
        <div className="w-2/5">
          <Sidebar />
        </div>
        <div className="w-4/5 ">{children}</div>
      </div>
    </Container>
  );
}
