"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { buttonVariants } from "@/registry/cd/ui/button-variants";
import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from "@/registry/cd/ui/tooltip";

export type StepperLink = { href: string; title: string; label: string };

const stepClass = buttonVariants({ variant: "outline", size: "icon-sm" });

/**
 * Previous/next step between blocks: arrow keys navigate when focus is not in a field,
 * no modifier is pressed and no dialog is open.
 */
export function BlockStepper({
  label,
  next,
  position,
  previous,
}: {
  label: string;
  next: StepperLink | null;
  position: string;
  previous: StepperLink | null;
}) {
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) return;
      if (e.target instanceof Element && e.target.closest("input, textarea, select, [contenteditable]:not([contenteditable=false])")) return;
      if (document.querySelector("[role=dialog], [role=alertdialog]")) return;
      const target = e.key === "ArrowLeft" ? previous : next;
      if (target) router.push(target.href);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous, router]);

  return (
    <TooltipProvider>
      <nav aria-label={label} className="flex shrink-0 items-center gap-2">
        <Step Icon={ChevronLeftIcon} step={previous} />
        <span className="font-mono text-muted-foreground text-xs tabular-nums">{position}</span>
        <Step Icon={ChevronRightIcon} step={next} />
      </nav>
    </TooltipProvider>
  );
}

function Step({ Icon, step }: { Icon: typeof ChevronLeftIcon; step: StepperLink | null }) {
  const icon = <Icon aria-hidden="true" />;
  if (!step) {
    return (
      <span aria-disabled="true" className={`${stepClass} cursor-default opacity-50`}>
        {icon}
      </span>
    );
  }
  return (
    <Tooltip>
      <TooltipTrigger aria-label={step.label} render={<Link className={stepClass} href={step.href} />}>
        {icon}
      </TooltipTrigger>
      <TooltipPopup>{step.title}</TooltipPopup>
    </Tooltip>
  );
}
