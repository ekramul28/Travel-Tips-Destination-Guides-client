import { ReactNode } from "react";

import Container from "@/src/components/Ui/Container";
import { Navbar } from "@/src/components/Ui/navbar";

export default function layout({
  children,
  recentPosts,
  usersId,
}: {
  children: ReactNode;
  recentPosts: ReactNode;
  usersId: ReactNode;
}) {
  return (
    <>
      <Container>
        <Navbar />
        <div className="lg:flex justify-center  mt-2">
          <div className="md:w-1/4 hidden md:block">{children}</div>
          <div className="md:w-2/4 ">{recentPosts}</div>
          <div className="md:w-1/4 hidden md:block">{usersId}</div>
        </div>
      </Container>
    </>
  );
}
