"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

type FieldValidator = (name: string, value: unknown) => string[] | null;

/**
 * Channel between `Form` and `Field`: the form (with a schema) hands out one validator per field name.
 * It lives here, not in the form, so those who only use `Field` do not load Zod.
 */
export const FieldValidationContext = React.createContext<FieldValidator | null>(null);

/**
 * Groups label, control, description and error with the right ids and `aria-*`.
 * Inside a `Form` with `schema`, just give the field a `name` and it validates itself.
 */
export function Field({ className, name, validate, ...props }: FieldPrimitive.Root.Props): React.ReactElement {
  const validateFromSchema = React.useContext(FieldValidationContext);
  return (
    <FieldPrimitive.Root
      className={cn("flex flex-col gap-1.5", className)}
      data-slot="field"
      name={name}
      validate={validate ?? (validateFromSchema && name ? (value) => validateFromSchema(name, value) : undefined)}
      {...props}
    />
  );
}

export function FieldLabel({ className, ...props }: FieldPrimitive.Label.Props): React.ReactElement {
  return (
    <FieldPrimitive.Label
      className={cn("font-medium text-sm data-disabled:opacity-50", className)}
      data-slot="field-label"
      {...props}
    />
  );
}

export function FieldDescription({ className, ...props }: FieldPrimitive.Description.Props): React.ReactElement {
  return (
    <FieldPrimitive.Description
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="field-description"
      {...props}
    />
  );
}

/** Error message. Without `match`, shows whatever the validation (HTML, `validate` or schema) returns. */
export function FieldError({ className, ...props }: FieldPrimitive.Error.Props): React.ReactElement {
  return (
    <FieldPrimitive.Error
      className={cn("text-destructive-foreground text-xs", className)}
      data-slot="field-error"
      {...props}
    />
  );
}
