import { Field, FieldDescription, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Input } from "@/registry/cd/ui/input";

export default function FieldDefault() {
  return (
    <Field className="w-full max-w-xs" validationMode="onBlur">
      <FieldLabel>e-mail</FieldLabel>
      <Input placeholder="voce@exemplo.com" required type="email" />
      <FieldDescription>só pra te responder, nada de spam.</FieldDescription>
      <FieldError match="typeMismatch">esse e-mail não parece válido.</FieldError>
    </Field>
  );
}
