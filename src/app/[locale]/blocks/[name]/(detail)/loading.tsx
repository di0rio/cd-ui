import { Skeleton } from "@/registry/cd/ui/skeleton";

/** Shown inside the layout (sidebar stays) while a block loads. */
export default function Loading() {
  return (
    <>
      <Skeleton className="h-8 w-full" />
      <Skeleton className="mt-6 h-10 w-2/3 max-w-[760px]" />
      <Skeleton className="mt-8 h-64 w-full rounded-xl" />
    </>
  );
}
