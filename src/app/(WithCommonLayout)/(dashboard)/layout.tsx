import { ReactNode } from "react";
import NextLink from "next/link";

import Container from "@/src/components/Ui/Container";
import Sidebar from "@/src/components/Ui/Sidebar";
import { Logo } from "@/src/assets/icons";
import { DashboardNavbar } from "@/src/components/Ui/DashboardNav/DashboardNav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div className=" mx-auto container grid grid-cols-8">
        {/* Sidebar */}
        <div className=" h-screen col-span-2 ">
          <Sidebar />
        </div>

        {/* Main content area with margin */}
        <div className=" col-span-6">
          <DashboardNavbar />
          {children}
        </div>
      </div>
    </Container>
  );
}
