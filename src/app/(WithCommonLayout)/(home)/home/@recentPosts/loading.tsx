import { Avatar } from "@nextui-org/avatar";
import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

const SkeletonCardLoadingPage = () => {
  return (
    <div>
      <Card className="p-2 m-4" radius="lg">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Skeleton className="rounded-full">
              <Avatar size="sm" />
            </Skeleton>
            <div className="my-4">
              <Skeleton className="w-32 h-6 rounded-lg mb-2 bg-default-300" />
              <Skeleton className="w-24 h-4 rounded-lg bg-default-200" />
            </div>
          </div>
          <Skeleton className="w-16 h-4 rounded-lg bg-default-200" />
          <span className="text-gray-500">•••</span>
        </div>

        {/* Post Image Skeleton */}
        <div className="cursor-pointer">
          <Skeleton className="rounded-lg">
            <div className=" w-[100%] h-[300px] rounded-lg bg-default-300" />
          </Skeleton>
        </div>

        {/* Actions Skeleton */}
        <div className="flex justify-between px-4 py-2">
          <div className="flex gap-4">
            <Skeleton className="w-8 h-6 rounded-lg" />
            <Skeleton className="w-8 h-6 rounded-lg" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="w-24 h-6 rounded-lg" />
            <Skeleton className="w-8 h-6  rounded-lg" />
          </div>
        </div>

        {/* Description Skeleton */}
        <div className="px-4 py-2">
          <Skeleton className="w-3/5 h-6 mb-2 rounded-lg" />
          <Skeleton className="w-4/5 h-6 rounded-lg" />
        </div>
      </Card>
      <Card className="p-2 m-4" radius="lg">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Skeleton className="rounded-full">
              <Avatar size="sm" />
            </Skeleton>
            <div className="my-4">
              <Skeleton className="w-32 h-6 rounded-lg mb-2 bg-default-300" />
              <Skeleton className="w-24 h-4 rounded-lg bg-default-200" />
            </div>
          </div>
          <Skeleton className="w-16 h-4 rounded-lg bg-default-200" />
          <span className="text-gray-500">•••</span>
        </div>

        {/* Post Image Skeleton */}
        <div className="cursor-pointer">
          <Skeleton className="rounded-lg">
            <div className=" w-[100%] h-[300px] rounded-lg bg-default-300" />
          </Skeleton>
        </div>

        {/* Actions Skeleton */}
        <div className="flex justify-between px-4 py-2">
          <div className="flex gap-4">
            <Skeleton className="w-8 h-6 rounded-lg" />
            <Skeleton className="w-8 h-6 rounded-lg" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="w-24 h-6 rounded-lg" />
            <Skeleton className="w-8 h-6  rounded-lg" />
          </div>
        </div>

        {/* Description Skeleton */}
        <div className="px-4 py-2">
          <Skeleton className="w-3/5 h-6 mb-2 rounded-lg" />
          <Skeleton className="w-4/5 h-6 rounded-lg" />
        </div>
      </Card>
      <Card className="p-2 m-4" radius="lg">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Skeleton className="rounded-full">
              <Avatar size="sm" />
            </Skeleton>
            <div className="my-4">
              <Skeleton className="w-32 h-6 rounded-lg mb-2 bg-default-300" />
              <Skeleton className="w-24 h-4 rounded-lg bg-default-200" />
            </div>
          </div>
          <Skeleton className="w-16 h-4 rounded-lg bg-default-200" />
          <span className="text-gray-500">•••</span>
        </div>

        {/* Post Image Skeleton */}
        <div className="cursor-pointer">
          <Skeleton className="rounded-lg">
            <div className=" w-[100%] h-[300px] rounded-lg bg-default-300" />
          </Skeleton>
        </div>

        {/* Actions Skeleton */}
        <div className="flex justify-between px-4 py-2">
          <div className="flex gap-4">
            <Skeleton className="w-8 h-6 rounded-lg" />
            <Skeleton className="w-8 h-6 rounded-lg" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="w-24 h-6 rounded-lg" />
            <Skeleton className="w-8 h-6  rounded-lg" />
          </div>
        </div>

        {/* Description Skeleton */}
        <div className="px-4 py-2">
          <Skeleton className="w-3/5 h-6 mb-2 rounded-lg" />
          <Skeleton className="w-4/5 h-6 rounded-lg" />
        </div>
      </Card>
    </div>
  );
};

export default SkeletonCardLoadingPage;
