import { Field, FieldDescription, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Input } from "@/registry/cd/ui/input";

export default function FieldDefault() {
  return (
    <Field className="w-full max-w-xs" validationMode="onBlur">
      <FieldLabel>email</FieldLabel>
      <Input placeholder="you@example.com" required type="email" />
      <FieldDescription>only to reply to you, no spam.</FieldDescription>
      <FieldError match="typeMismatch">that email is not valid.</FieldError>
    </Field>
  );
}
