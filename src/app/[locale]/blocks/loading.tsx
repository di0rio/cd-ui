import { Skeleton } from "@/registry/cd/ui/skeleton";

/** Shown while a block page or the blocks index loads; same container as both pages. */
export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-14 lg:px-6">
      <Skeleton className="h-12 w-2/3 max-w-[760px]" />
      <Skeleton className="mt-5 h-6 w-full max-w-[620px]" />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static placeholders
          <Skeleton className="h-64 rounded-xl" key={i} />
        ))}
      </div>
    </div>
  );
}
