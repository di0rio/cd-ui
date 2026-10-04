import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/registry/cd/ui/button";

/** Closing call to action: a themed card banner with a brand button and a sticker accent. */
export function Cta01() {
  return (
    <section className="w-full px-4 py-16 sm:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border bg-card px-6 py-14 text-foreground sm:px-14 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(var(--foreground)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <span className="absolute top-8 right-8 hidden rotate-6 rounded-2xl border-[3px] border-foreground bg-brand px-4 py-2 font-heading font-semibold text-brand-contrast text-sm shadow-[4px_4px_0_var(--foreground)] sm:block">
          14-day free trial
        </span>
        <div className="relative max-w-xl">
          <h2 className="text-balance font-bold font-heading text-3xl leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            Ready to give your team its time back?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Set up in minutes. No credit card, no sales call, no catch.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<a href="#signup" />} size="lg" variant="brand">
              Start free trial <ArrowRightIcon aria-hidden="true" />
            </Button>
            <Button nativeButton={false} render={<a href="#contact" />} size="lg" variant="outline">
              Talk to us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
