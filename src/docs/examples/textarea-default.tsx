import { Field, FieldDescription, FieldLabel } from "@/registry/cd/ui/field";
import { Textarea } from "@/registry/cd/ui/textarea";

export default function TextareaDefault() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>message</FieldLabel>
      <Textarea placeholder="tell us what you need…" />
      <FieldDescription>the field grows on its own as you type.</FieldDescription>
    </Field>
  );
}
