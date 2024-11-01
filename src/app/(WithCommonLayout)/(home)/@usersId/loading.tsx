import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      <div className="flex items-center">
        <Skeleton className="rounded-full">
          <Avatar size="sm" />
        </Skeleton>
        <div className="my-4 ml-3">
          <Skeleton className="w-32 h-6 rounded-lg mb-2 bg-default-300" />
          <Skeleton className="w-24 h-4 rounded-lg bg-default-200" />
        </div>
        <Skeleton className="w-16 h-8 rounded-lg ml-4" />
      </div>
    </div>
  );
};

export default loading;
