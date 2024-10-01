import { ReactNode } from "react";

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
      <div className="flex justify-center ">
        <div className="w-1/4 hidden md:block">{children}</div>
        <div className="w-2/4">{recentPosts}</div>
        <div className="w-1/4 hidden md:block">{usersId}</div>
      </div>
    </>
  );
}
