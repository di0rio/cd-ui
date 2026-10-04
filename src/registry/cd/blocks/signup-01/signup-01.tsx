"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/registry/cd/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/cd/ui/card";
import { Checkbox } from "@/registry/cd/ui/checkbox";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Form } from "@/registry/cd/ui/form";
import { Input } from "@/registry/cd/ui/input";

const schema = z
  .object({
    firstName: z.string().trim().min(1, "Required."),
    lastName: z.string().trim().min(1, "Required."),
    email: z.email("Enter a valid email address."),
    password: z.string().min(8, "Use at least 8 characters."),
    confirm: z.string().min(1, "Confirm your password."),
    terms: z.literal(true, "Accept the terms to continue."),
  })
  // Cross-field rule: runs on submit and lands on the "confirm" field.
  .refine((values) => values.password === values.confirm, { message: "Passwords don't match.", path: ["confirm"] });

/** Account creation card: two-column name, password confirmation, terms checkbox and a loading submit. */
export function Signup01() {
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState<string | null>(null);

  return (
    <div className="flex min-h-[760px] w-full items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md gap-6 p-6">
        <CardHeader className="gap-1.5">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>Free for 14 days. No credit card required.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form
            onSubmit={async (values) => {
              setLoading(true);
              setCreated(null);
              // Replace with your real request.
              await new Promise((resolve) => setTimeout(resolve, 1000));
              setLoading(false);
              setCreated(values.firstName);
            }}
            schema={schema}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="firstName">
                <FieldLabel>First name</FieldLabel>
                <Input autoComplete="given-name" />
                <FieldError />
              </Field>
              <Field name="lastName">
                <FieldLabel>Last name</FieldLabel>
                <Input autoComplete="family-name" />
                <FieldError />
              </Field>
            </div>
            <Field name="email">
              <FieldLabel>Work email</FieldLabel>
              <Input autoComplete="email" inputMode="email" placeholder="you@company.com" />
              <FieldError />
            </Field>
            <Field name="password">
              <FieldLabel>Password</FieldLabel>
              <Input autoComplete="new-password" type="password" />
              <FieldDescription>At least 8 characters.</FieldDescription>
              <FieldError />
            </Field>
            <Field name="confirm">
              <FieldLabel>Confirm password</FieldLabel>
              <Input autoComplete="new-password" type="password" />
              <FieldError />
            </Field>
            <Field name="terms">
              <FieldLabel className="flex items-center gap-2 font-normal">
                <Checkbox /> I agree to the Terms and Privacy Policy
              </FieldLabel>
              <FieldError />
            </Field>
            <Button className="w-full" loading={loading} size="lg" type="submit" variant="brand">
              Create account
            </Button>
            <p aria-live="polite" className="-mt-2 min-h-5 text-center text-muted-foreground text-sm">
              {created && `Welcome aboard, ${created}! Check your inbox to verify your email.`}
            </p>
          </Form>
        </CardContent>
        <p className="-mt-2 text-center text-muted-foreground text-sm">
          Already have an account?{" "}
          <a className="font-medium text-foreground underline decoration-brand underline-offset-4" href="#login">
            Sign in
          </a>
        </p>
      </Card>
    </div>
  );
}
