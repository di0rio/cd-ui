"use client";

import { ArrowLeftIcon, MailCheckIcon } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/registry/cd/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/cd/ui/card";
import { Field, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Form } from "@/registry/cd/ui/form";
import { Input } from "@/registry/cd/ui/input";

const schema = z.object({ email: z.email("Enter a valid email address.") });

/** Password reset request. After submitting, the card swaps to a confirmation with a "use another email" escape hatch. */
export function ForgotPassword01() {
  const [loading, setLoading] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  return (
    <div className="flex min-h-[560px] w-full items-center justify-center px-4 py-12">
      <Card className="w-full max-w-sm gap-6 p-6">
        {sentTo ? (
          <>
            <CardHeader className="items-center gap-3 text-center">
              <span className="grid size-12 place-items-center rounded-full bg-brand text-brand-contrast">
                <MailCheckIcon aria-hidden="true" className="size-6" />
              </span>
              <CardTitle className="text-xl">Check your inbox</CardTitle>
              <CardDescription aria-live="polite">
                We sent a reset link to <span className="font-medium text-foreground">{sentTo}</span>. It expires in 30 minutes.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button className="w-full" onClick={() => setSentTo(null)} type="button" variant="outline">
                Use a different email
              </Button>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader className="gap-1.5">
              <CardTitle className="text-xl">Forgot your password?</CardTitle>
              <CardDescription>Enter your email and we will send you a link to choose a new one.</CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </>
        )}
        <a className="-mt-2 inline-flex items-center justify-center gap-1.5 text-muted-foreground text-sm hover:text-foreground" href="#login">
          <ArrowLeftIcon aria-hidden="true" className="size-3.5" /> Back to sign in
        </a>
      </Card>
    </div>
  );
}
