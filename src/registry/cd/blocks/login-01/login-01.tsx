"use client";

import { useState } from "react";
import { z } from "zod";
import { AuthShell } from "@/registry/cd/ui/auth-shell";
import { Button } from "@/registry/cd/ui/button";
import { Checkbox } from "@/registry/cd/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Form } from "@/registry/cd/ui/form";
import { Input } from "@/registry/cd/ui/input";
import { PasswordInput } from "@/registry/cd/ui/password-input";

const schema = z.object({
  email: z.email("Enter a valid email address."),
  password: z.string().min(8, "Use at least 8 characters."),
  remember: z.boolean().optional(),
});

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .4 1 .4 2 .1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
    </svg>
  );
}

/** Simple sign-in card: email + password with Zod validation, a loading state and a social option. */
export function Login01() {
  const [loading, setLoading] = useState(false);
  const [signedIn, setSignedIn] = useState<string | null>(null);

  return (
    <AuthShell
      centered
      description="Sign in to your Acme account to continue."
      footer={
        <>
          New to Acme?{" "}
          <a className="font-medium text-foreground underline decoration-brand underline-offset-4" href="#signup">
            Create an account
          </a>
        </>
      }
      logo={
        <span className="grid size-10 -rotate-6 place-items-center rounded-xl border-2 border-foreground bg-brand font-bold font-heading text-brand-contrast shadow-[3px_3px_0_var(--foreground)]">
          A
        </span>
      }
      title="Welcome back"
    >
          <Button className="w-full" type="button" variant="outline">
            <GithubIcon aria-hidden="true" /> Continue with GitHub
          </Button>
          <div className="flex items-center gap-3 text-muted-foreground text-xs">
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
            or with email
            <span aria-hidden="true" className="h-px flex-1 bg-border" />
          </div>
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
            <Field name="remember">
              <FieldLabel className="flex items-center gap-2 font-normal">
                <Checkbox /> Keep me signed in
              </FieldLabel>
            </Field>
            <Button className="w-full" loading={loading} type="submit" variant="brand">
              Sign in
            </Button>
            <p aria-live="polite" className="-mt-2 min-h-5 text-center text-muted-foreground text-sm">
              {signedIn && `Signed in as ${signedIn}.`}
            </p>
          </Form>
    </AuthShell>
  );
}
