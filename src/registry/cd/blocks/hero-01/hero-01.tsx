import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/registry/cd/ui/badge";
import { Button } from "@/registry/cd/ui/button";

const people = ["AL", "JK", "MR", "TS"];

/** Centered hero: announcement pill, headline with a marker highlight, two calls to action and a product window. */
export function Hero01() {
  return (
    <section className="relative w-full overflow-hidden px-4 pt-16 pb-12 sm:pt-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[420px] opacity-[0.14] [background-image:radial-gradient(var(--foreground)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,#000,transparent)]"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <a
          className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card py-1 pr-3 pl-1 text-sm transition-colors duration-150 hover:border-brand"
          href="#changelog"
        >
          <Badge variant="brand">New</Badge>
          Scheduled reports are here
          <ArrowRightIcon aria-hidden="true" className="size-3.5 text-muted-foreground" />
        </a>
        <h1 className="text-balance font-bold font-heading text-[44px] leading-[1.02] tracking-[-0.03em] sm:text-[68px]">
          Run your whole team from{" "}
          <span className="relative whitespace-nowrap">
            <span aria-hidden="true" className="absolute inset-x-[-0.1em] bottom-[0.06em] -z-10 h-[0.38em] -rotate-1 rounded-sm bg-brand" />
            one place.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground leading-relaxed">
          Plan work, ship faster and keep everyone in sync. Acme replaces the spreadsheets, threads and stand-ups with one calm workspace.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button nativeButton={false} render={<a href="#signup" />} size="lg" variant="brand">
            Start free <ArrowRightIcon aria-hidden="true" />
          </Button>
          <Button nativeButton={false} render={<a href="#demo" />} size="lg" variant="outline">
            Book a demo
          </Button>
        </div>
        <div className="mt-8 flex items-center gap-3 text-muted-foreground text-sm">
          <div aria-hidden="true" className="flex -space-x-2">
            {people.map((initials) => (
              <span
                className="grid size-7 place-items-center rounded-full border-2 border-background bg-accent font-medium text-[10px] text-foreground ring-1 ring-border"
                key={initials}
              >
                {initials}
              </span>
            ))}
          </div>
          Trusted by 4,000+ teams
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border bg-card shadow-[0_24px_60px_-30px_rgb(0_0_0/0.35)]">
        <div className="flex items-center gap-1.5 border-b px-4 py-3">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="ml-3 rounded-md bg-muted px-3 py-0.5 font-mono text-muted-foreground text-xs">app.acme.com/workspace</span>
        </div>
        <div className="grid min-h-64 gap-px bg-border sm:grid-cols-[180px_1fr]">
          <div className="hidden flex-col gap-2 bg-card p-4 sm:flex">
            {["Overview", "Projects", "Timeline", "Reports", "People"].map((item, i) => (
              <span className={i === 0 ? "rounded-md bg-accent px-2.5 py-1.5 font-medium text-sm" : "px-2.5 py-1.5 text-muted-foreground text-sm"} key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-4 bg-card p-5 sm:grid-cols-3">
            {[
              ["Active projects", "24"],
              ["On track", "91%"],
              ["Open tasks", "318"],
            ].map(([label, value]) => (
              <div className="rounded-xl border p-4 text-left" key={label}>
                <p className="text-muted-foreground text-xs">{label}</p>
                <p className="mt-1 font-bold font-heading text-3xl tabular-nums tracking-[-0.02em]">{value}</p>
              </div>
            ))}
            <div className="flex h-24 items-end gap-2 rounded-xl border p-4 sm:col-span-3">
              {[38, 52, 44, 68, 60, 82, 74, 96, 88, 100].map((h, i) => (
                <span className="flex-1 rounded-sm bg-brand" key={i} style={{ height: `${h}%`, opacity: 0.35 + h / 160 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
