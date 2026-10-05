"use client";

import { Form as FormPrimitive } from "@base-ui/react/form";
import * as React from "react";
import { type $ZodObject, flattenError, type output, safeParse } from "zod/v4/core";
import { cn } from "@/registry/cd/lib/utils";
import { FieldValidationContext } from "@/registry/cd/ui/field";

/*
 * Zod validation without loading all of Zod: only the core functions (`zod/v4/core`).
 * Works with `zod` and `zod/mini` schemas (the lightest).
 */

export type FormProps<S extends $ZodObject> = Omit<FormPrimitive.Props, "onSubmit" | "onFormSubmit"> & {
  /** Zod schema. Each `Field` with a `name` validates its own piece; submit validates everything. */
  schema?: S;
  /** Called only with valid data, already parsed and typed by the schema. */
  onSubmit?: (values: output<S>) => void | Promise<void>;
};

/**
 * Form. With `schema`, validation is automatic: each field validates when you leave it
 * (`validationMode="onBlur"`) and `onSubmit` only runs when everything is valid, receiving the typed data.
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
