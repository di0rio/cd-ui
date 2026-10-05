"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

const logoVariants = cva("inline-flex shrink-0 items-center", {
  variants: {
    variant: {
      mark: "",
      wordmark: "gap-0 font-bold font-mono",
      prompt: "gap-1.5 font-bold font-mono",
    },
    size: { sm: "", md: "", lg: "" },
  },
  compoundVariants: [
    { variant: "mark", size: "sm", className: "size-5" },
    { variant: "mark", size: "md", className: "size-7" },
    { variant: "mark", size: "lg", className: "size-10" },
    { variant: ["wordmark", "prompt"], size: "sm", className: "text-sm" },
    { variant: ["wordmark", "prompt"], size: "md", className: "text-[17px]" },
    { variant: ["wordmark", "prompt"], size: "lg", className: "text-2xl" },
  ],
  defaultVariants: { variant: "wordmark", size: "md" },
});

export type LogoProps = useRender.ComponentProps<"span"> & VariantProps<typeof logoVariants>;

/** The "cd/ui" text, brand-colored slash included. */
function Wordmark(): React.ReactElement {
  return (
    <>
      cd<span className="text-brand-foreground">/</span>ui
    </>
  );
}

/** The `cd` glyph: the colors follow the theme (graphite on cream, cream on graphite). */
function Mark(): React.ReactElement {
  return (
    <svg aria-label="cd/ui" className="size-full" role="img" viewBox="0 0 256 256">
      <rect className="fill-foreground" height="256" rx="56" width="256" />
      <g transform="translate(128 132) scale(0.86) translate(-128 -122)">
        <path className="stroke-background" d="M208 66 C202 38 216 16 238 18 C254 20 252 40 238 42" fill="none" strokeLinecap="round" strokeWidth="11" />
        <g className="fill-foreground stroke-foreground" fillRule="evenodd" strokeLinejoin="round" strokeWidth="14">
          <path d="M106.8 139.1 A48 48 0 1 0 106.8 200.9 L84.6 182.2 A19 19 0 1 1 84.6 157.8 Z" />
          <path d="M126 170 a48 48 0 1 0 96 0 a48 48 0 1 0 -96 0 Z M155 170 a19 19 0 1 0 38 0 a19 19 0 1 0 -38 0 Z" />
          <path d="M208 58 H208 A14 14 0 0 1 222 72 V180 A14 14 0 0 1 208 194 H208 A14 14 0 0 1 194 180 V72 A14 14 0 0 1 208 58 Z" />
        </g>
        <g className="fill-background" fillRule="evenodd">
          <path d="M106.8 139.1 A48 48 0 1 0 106.8 200.9 L84.6 182.2 A19 19 0 1 1 84.6 157.8 Z" />
          <path d="M126 170 a48 48 0 1 0 96 0 a48 48 0 1 0 -96 0 Z M155 170 a19 19 0 1 0 38 0 a19 19 0 1 0 -38 0 Z" />
          <path d="M208 58 H208 A14 14 0 0 1 222 72 V180 A14 14 0 0 1 208 194 H208 A14 14 0 0 1 194 180 V72 A14 14 0 0 1 208 58 Z" />
        </g>
      </g>
    </svg>
  );
}

/**
 * The cd/ui logo. `mark` is the glyph, `wordmark` the text, `prompt` the terminal line with a blinking caret
 * (still, with reduced motion). `render` turns it into a link: `<Logo render={<a href="/" />} />`.
 * The mark is an image named "cd/ui"; the text variants are named by their own text.
 */
export function Logo({ className, variant = "wordmark", size, render, ...props }: LogoProps): React.ReactElement {
  const content =
    variant === "mark" ? (
      <Mark />
    ) : variant === "prompt" ? (
      <>
        <span aria-hidden="true" className="text-muted-foreground">
          ~/
        </span>
        <span className="text-foreground">
          <Wordmark />
        </span>
        <span aria-hidden="true" className="text-muted-foreground">
          $
        </span>
        <span aria-hidden="true" className="inline-block h-[1em] w-[0.5em] animate-caret bg-brand motion-reduce:animate-none" />
      </>
    ) : (
      <Wordmark />
    );
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        className: cn(logoVariants({ variant, size }), className),
        children: content,
      },
      props,
    ),
  });
}
