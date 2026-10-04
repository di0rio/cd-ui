import { ArrowLeftIcon, SearchIcon } from "lucide-react";
import { Button } from "@/registry/cd/ui/button";

/** 404 page: an oversized, tilted status code with two ways back. Works as `not-found.tsx` content. */
export function NotFound01() {
  return (
    <section className="flex min-h-[560px] w-full flex-col items-center justify-center px-4 py-16 text-center">
      <div className="relative">
        <p aria-hidden="true" className="select-none font-bold font-heading text-[120px] text-foreground/10 leading-none tracking-[-0.06em] sm:text-[200px]">
          404
        </p>
        <span className="absolute inset-0 m-auto h-fit w-fit -rotate-6 rounded-2xl border-[3px] border-black bg-brand px-5 py-2 font-heading font-semibold text-brand-contrast text-xl shadow-[5px_5px_0_#000] sm:text-3xl">
          Page not found
        </span>
      </div>
      <h1 className="sr-only">404, page not found</h1>
      <p className="mt-6 max-w-sm text-pretty text-muted-foreground">
        The page you&apos;re looking for moved, was deleted, or never existed. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button nativeButton={false} render={<a href="#home" />} variant="brand">
          <ArrowLeftIcon aria-hidden="true" /> Back to home
        </Button>
        <Button nativeButton={false} render={<a href="#search" />} variant="outline">
          <SearchIcon aria-hidden="true" /> Search the docs
        </Button>
      </div>
    </section>
  );
}
