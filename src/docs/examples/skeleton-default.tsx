import { Skeleton } from "@/registry/cd/ui/skeleton";

export default function SkeletonDefault() {
  return (
    <div className="flex w-full max-w-xs items-center gap-3">
      <Skeleton className="size-11 rounded-xl" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-3.5 w-3/4" />
        <Skeleton className="h-3.5 w-1/2" />
      </div>
    </div>
  );
}
