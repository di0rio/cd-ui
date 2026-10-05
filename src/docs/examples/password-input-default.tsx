import { Field, FieldDescription, FieldLabel } from "@/registry/cd/ui/field";
import { PasswordInput } from "@/registry/cd/ui/password-input";

export default function PasswordInputDefault() {
  return (
    <Field className="w-full max-w-sm" name="password">
      <FieldLabel>Password</FieldLabel>
      <PasswordInput autoComplete="new-password" placeholder="At least 8 characters" />
      <FieldDescription>Use the eye to check what you typed.</FieldDescription>
    </Field>
  );
}
