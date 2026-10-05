import { Skeleton } from "@/registry/cd/ui/skeleton";

/** Shown inside the docs layout (sidebar stays) while a page loads; same column width as DocPage. */
export default function Loading() {
  return (
    <div className="flex gap-12">
      <div className="min-w-0 max-w-[760px] flex-1">
        <Skeleton className="h-[43px] w-2/3" />
        <Skeleton className="mt-3 h-6 w-full max-w-[600px]" />
        <Skeleton className="mt-14 h-7 w-1/3" />
        <Skeleton className="mt-6 h-4 w-full" />
        <Skeleton className="mt-3 h-4 w-11/12" />
        <Skeleton className="mt-3 h-4 w-4/5" />
        <Skeleton className="mt-8 h-64 w-full rounded-xl" />
      </div>
      <div className="hidden w-48 shrink-0 xl:block" />
    </div>
  );
}
