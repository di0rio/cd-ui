"use client";

import { ArrowLeftIcon, MailCheckIcon } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { AuthShell } from "@/registry/cd/ui/auth-shell";
import { Button } from "@/registry/cd/ui/button";
import { Field, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Form } from "@/registry/cd/ui/form";
import { Input } from "@/registry/cd/ui/input";

const schema = z.object({ email: z.email("Enter a valid email address.") });

/** Password reset request. After submitting, the card swaps to a confirmation with a "use another email" escape hatch. */
export function ForgotPassword01() {
  const [loading, setLoading] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  return (
    <AuthShell
      centered={!!sentTo}
      description={
        sentTo ? (
          <>
            We sent a reset link to <span className="font-medium text-foreground">{sentTo}</span>. It expires in 30 minutes.
          </>
        ) : (
          "Enter your email and we will send you a link to choose a new one."
        )
      }
      footer={
        <a className="inline-flex items-center justify-center gap-1.5 hover:text-foreground" href="#login">
          <ArrowLeftIcon aria-hidden="true" className="size-3.5" /> Back to sign in
        </a>
      }
      logo={
        sentTo && (
          <span className="grid size-12 place-items-center rounded-full bg-brand text-brand-contrast">
            <MailCheckIcon aria-hidden="true" className="size-6" />
          </span>
        )
      }
      title={sentTo ? "Check your inbox" : "Forgot your password?"}
    >
      {sentTo ? (
        <Button className="w-full" onClick={() => setSentTo(null)} type="button" variant="outline">
          Use a different email
        </Button>
      ) : (
        <Form
          onSubmit={async (values) => {
            setLoading(true);
            // Replace with your real request.
            await new Promise((resolve) => setTimeout(resolve, 900));
            setLoading(false);
            setSentTo(values.email);
          }}
          schema={schema}
        >
          <Field name="email">
            <FieldLabel>Email</FieldLabel>
            <Input autoComplete="email" inputMode="email" placeholder="you@company.com" />
            <FieldError />
          </Field>
          <Button className="w-full" loading={loading} type="submit" variant="brand">
            Send reset link
          </Button>
        </Form>
      )}
    </AuthShell>
  );
}
