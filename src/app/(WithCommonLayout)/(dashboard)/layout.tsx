import { ReactNode } from "react";
import NextLink from "next/link";

import Container from "@/src/components/Ui/Container";
import Sidebar from "@/src/components/Ui/Sidebar";
import { Logo } from "@/src/assets/icons";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className="flex gap-12">
        {/* Sidebar */}
        <div className="w-1/4 fixed top-0 left-0 h-screen p-4 bg-white shadow-md ">
          <NextLink
            className="flex justify-start items-center gap-1 mb-4"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
          <Sidebar />
        </div>

        {/* Main content area with margin */}
        <div className="w-3/4 ml-[25%] p-4">{children}</div>
      </div>
    </Container>
  );
}
