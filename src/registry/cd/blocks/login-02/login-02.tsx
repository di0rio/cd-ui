"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/registry/cd/ui/button";
import { Field, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Form } from "@/registry/cd/ui/form";
import { Input } from "@/registry/cd/ui/input";
import { PasswordInput } from "@/registry/cd/ui/password-input";

const schema = z.object({
  email: z.email("Enter a valid email address."),
  password: z.string().min(8, "Use at least 8 characters."),
});

/** Split-screen sign-in: form on one side, brand panel with a testimonial on the other (hidden on small screens). */
export function Login02() {
  const [loading, setLoading] = useState(false);
  const [signedIn, setSignedIn] = useState<string | null>(null);

  return (
    <div className="grid min-h-[680px] w-full lg:grid-cols-2">
      <div className="flex flex-col px-6 py-8 sm:px-12">
        <a className="inline-flex items-center gap-2 font-heading font-semibold" href="#home">
          <span className="grid size-8 place-items-center rounded-lg border-2 border-foreground bg-brand font-bold text-brand-contrast text-sm">A</span>
          Acme
        </a>
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-10">
          <h1 className="font-bold font-heading text-3xl tracking-[-0.02em]">Sign in</h1>
          <p className="mt-2 mb-8 text-muted-foreground">Pick up right where you left off.</p>
          <Form
            onSubmit={async (values) => {
              setLoading(true);
              setSignedIn(null);
              // Replace with your real request.
              await new Promise((resolve) => setTimeout(resolve, 900));
              setLoading(false);
              setSignedIn(values.email);
            }}
            schema={schema}
          >
            <Field name="email">
              <FieldLabel>Email</FieldLabel>
              <Input autoComplete="email" inputMode="email" placeholder="you@company.com" />
              <FieldError />
            </Field>
            <Field name="password">
              <div className="flex items-center justify-between gap-2">
                <FieldLabel>Password</FieldLabel>
                <a className="text-muted-foreground text-xs underline-offset-4 hover:text-foreground hover:underline" href="#forgot-password">
                  Forgot password?
                </a>
              </div>
              <PasswordInput autoComplete="current-password" />
              <FieldError />
            </Field>
            <Button className="w-full" loading={loading} size="lg" type="submit" variant="brand">
              Sign in
            </Button>
            <p aria-live="polite" className="-mt-2 min-h-5 text-center text-muted-foreground text-sm">
              {signedIn && `Signed in as ${signedIn}.`}
            </p>
          </Form>
          <p className="mt-6 text-muted-foreground text-sm">
            No account yet?{" "}
            <a className="font-medium text-foreground underline decoration-brand underline-offset-4" href="#signup">
              Create one
            </a>
          </p>
        </div>
        <p className="text-muted-foreground text-xs">© 2026 Acme, Inc.</p>
      </div>

      <div className="relative hidden overflow-hidden border-l bg-brand text-brand-contrast lg:block">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 [background-image:radial-gradient(var(--brand-contrast)_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div className="relative flex h-full flex-col justify-end gap-8 p-12">
          <p className="max-w-md text-balance font-bold font-heading text-4xl leading-[1.05] tracking-[-0.03em]">
            Ship the boring parts in an afternoon.
          </p>
          <figure className="-rotate-2 rounded-2xl border-[3px] border-foreground bg-white p-6 text-[#1c1c1c] shadow-[8px_8px_0_var(--foreground)]">
            <blockquote className="text-pretty text-lg leading-snug">
              “We replaced three internal tools with Acme and nobody asked where they went.”
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-sm">
              <span className="grid size-9 place-items-center rounded-full border-2 border-foreground bg-brand font-bold">MR</span>
              <span>
                <span className="block font-semibold">Maya Ramos</span>
                <span className="block text-[#686868]">Head of Operations, Northwind</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
