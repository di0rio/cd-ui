"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/registry/cd/ui/button";
import { Checkbox } from "@/registry/cd/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Form } from "@/registry/cd/ui/form";
import { Input } from "@/registry/cd/ui/input";

const schema = z.object({
  nome: z.string().trim().min(2, "escreve pelo menos 2 letras."),
  email: z.email("esse e-mail não parece válido."),
  senha: z.string().min(8, "a senha precisa de 8 caracteres ou mais."),
  termos: z.literal(true, "aceita os termos pra continuar."),
});

export default function FormZod() {
  const [created, setCreated] = useState<string | null>(null);

  return (
    <Form
      className="w-full max-w-sm"
      onSubmit={async (values) => {
        // `values` já vem validado e tipado: { nome: string; email: string; senha: string; termos: true }
        await new Promise((r) => setTimeout(r, 800));
        setCreated(values.nome);
      }}
      schema={schema}
    >
      <Field name="nome">
        <FieldLabel>nome</FieldLabel>
        <Input autoComplete="name" />
        <FieldError />
      </Field>
      <Field name="email">
        <FieldLabel>e-mail</FieldLabel>
        <Input autoComplete="email" inputMode="email" />
        <FieldError />
      </Field>
      <Field name="senha">
        <FieldLabel>senha</FieldLabel>
        <Input autoComplete="new-password" type="password" />
        <FieldError />
      </Field>
      <Field name="termos">
        <FieldLabel className="flex items-center gap-2 font-normal">
          <Checkbox /> aceito os termos de uso
        </FieldLabel>
        <FieldError />
      </Field>
      <Button type="submit" variant="brand">
        criar conta
      </Button>
      {created && (
        <p aria-live="polite" className="text-sm">
          conta criada, {created}!
        </p>
      )}
    </Form>
  );
}
