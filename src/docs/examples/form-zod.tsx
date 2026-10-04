"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/registry/cd/ui/button";
import { Checkbox } from "@/registry/cd/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Form } from "@/registry/cd/ui/form";
import { Input } from "@/registry/cd/ui/input";

const schema = z.object({
  name: z.string().trim().min(2, "enter at least 2 letters."),
  email: z.email("that email doesn't look valid."),
  password: z.string().min(8, "the password needs 8 characters or more."),
  terms: z.literal(true, "accept the terms to continue."),
});

export default function FormZod() {
  const [created, setCreated] = useState<string | null>(null);

  return (
    <Form
      className="w-full max-w-sm"
      onSubmit={async (values) => {
        // `values` is already validated and typed: { name: string; email: string; password: string; terms: true }
        await new Promise((r) => setTimeout(r, 800));
        setCreated(values.name);
      }}
      schema={schema}
    >
      <Field name="name">
        <FieldLabel>name</FieldLabel>
        <Input autoComplete="name" />
        <FieldError />
      </Field>
      <Field name="email">
        <FieldLabel>email</FieldLabel>
        <Input autoComplete="email" inputMode="email" />
        <FieldError />
      </Field>
      <Field name="password">
        <FieldLabel>password</FieldLabel>
        <Input autoComplete="new-password" type="password" />
        <FieldError />
      </Field>
      <Field name="terms">
        <FieldLabel className="flex items-center gap-2 font-normal">
          <Checkbox /> I accept the terms of use
        </FieldLabel>
        <FieldError />
      </Field>
      <Button type="submit" variant="brand">
        create account
      </Button>
      {created && (
        <p aria-live="polite" className="text-sm">
          account created, {created}!
        </p>
      )}
    </Form>
  );
}
