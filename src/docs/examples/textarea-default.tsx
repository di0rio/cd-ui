import { Field, FieldDescription, FieldLabel } from "@/registry/cd/ui/field";
import { Textarea } from "@/registry/cd/ui/textarea";

export default function TextareaDefault() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel>mensagem</FieldLabel>
      <Textarea placeholder="conta o que você precisa…" />
      <FieldDescription>o campo cresce sozinho conforme você escreve.</FieldDescription>
    </Field>
  );
}
