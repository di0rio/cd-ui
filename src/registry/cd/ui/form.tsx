"use client";

import { Form as FormPrimitive } from "@base-ui/react/form";
import * as React from "react";
import { type $ZodObject, flattenError, type output, safeParse } from "zod/v4/core";
import { cn } from "@/registry/cd/lib/utils";
import { FieldValidationContext } from "@/registry/cd/ui/field";

/*
 * Validação com Zod sem carregar o Zod inteiro: só as funções do núcleo (`zod/v4/core`).
 * Funciona com schemas de `zod` e de `zod/mini` (o mais leve).
 */

export type FormProps<S extends $ZodObject> = Omit<FormPrimitive.Props, "onSubmit" | "onFormSubmit"> & {
  /** Schema do Zod. Cada `Field` com `name` valida o próprio pedaço; o envio valida tudo. */
  schema?: S;
  /** Chamado só com dados válidos, já convertidos e tipados pelo schema. */
  onSubmit?: (values: output<S>) => void | Promise<void>;
};

/**
 * Formulário. Com `schema`, a validação é automática: cada campo valida ao sair dele
 * (`validationMode="onBlur"`) e o `onSubmit` só roda com tudo válido, recebendo os dados tipados.
 */
export function Form<S extends $ZodObject>({
  schema,
  onSubmit,
  validationMode = "onBlur",
  className,
  ...props
}: FormProps<S>): React.ReactElement {
  const [errors, setErrors] = React.useState<Record<string, string[]>>({});

  const validateField = React.useMemo(() => {
    if (!schema) return null;
    return (name: string, value: unknown) => {
      const field = schema._zod.def.shape[name];
      if (!field) return null;
      const result = safeParse(field, value);
      return result.success ? null : result.error.issues.map((issue) => issue.message);
    };
  }, [schema]);

  return (
    <FieldValidationContext value={validateField}>
      <FormPrimitive
        className={cn("flex w-full flex-col gap-5", className)}
        data-slot="form"
        errors={errors}
        noValidate
        onFormSubmit={async (values) => {
          if (!schema) return onSubmit?.(values as output<S>);
          const result = safeParse(schema, values);
          if (!result.success) {
            setErrors(flattenError(result.error).fieldErrors as Record<string, string[]>);
            return;
          }
          setErrors({});
          await onSubmit?.(result.data);
        }}
        validationMode={validationMode}
        {...props}
      />
    </FieldValidationContext>
  );
}
