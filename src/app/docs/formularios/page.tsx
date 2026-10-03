import type { Metadata } from "next";
import { Code } from "@/components/docs/code";
import { DocHeader, DocPage, H2, P } from "@/components/docs/doc-page";
import { Install } from "@/components/docs/install";
import { Preview } from "@/components/docs/preview";
import FormZod from "@/docs/examples/form-zod";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = { title: "Formulários com Zod" };

export default function Forms() {
  return (
    <DocPage
      toc={[
        { id: "exemplo", title: "Exemplo" },
        { id: "como-funciona", title: "Como funciona" },
        { id: "zod-mini", title: "Ainda mais leve com zod/mini" },
        { id: "erros-do-servidor", title: "Erros do servidor" },
        { id: "instalar", title: "Instalar" },
      ]}
    >
      <DocHeader
        description="Passe um schema do Zod pro Form e dê name aos campos. Validação por campo, envio tipado e mensagens no lugar certo, sem biblioteca de formulário."
        title="Formulários com Zod"
      />

      <H2 id="exemplo">Exemplo</H2>
      <P>Tente enviar vazio, sair de um campo com valor inválido e depois corrigir.</P>
      <Preview Component={FormZod} file="form-zod" />

      <H2 id="como-funciona">Como funciona</H2>
      <ol className="flex list-decimal flex-col gap-2 pl-5 leading-7 marker:text-muted-foreground">
        <li>
          O <code className="font-mono text-sm">Form</code> recebe o schema e entrega um validador pros campos.
        </li>
        <li>
          Cada <code className="font-mono text-sm">Field</code> com <code className="font-mono text-sm">name</code> valida a própria
          chave do schema quando você sai dele (dá pra trocar com <code className="font-mono text-sm">validationMode</code>).
        </li>
        <li>
          No envio, o schema inteiro roda. Se falhar, os erros vão pro <code className="font-mono text-sm">FieldError</code> de cada
          campo e o foco vai pro primeiro inválido. Se passar, <code className="font-mono text-sm">onSubmit</code> recebe os dados já
          convertidos e com o tipo do schema.
        </li>
      </ol>
      <Code
        code={`const schema = z.object({\n  email: z.email("e-mail inválido"),\n  idade: z.coerce.number().min(18, "precisa ter 18+"),\n})\n\n<Form schema={schema} onSubmit={(values) => {\n  values.idade // number, não string\n}}>\n  <Field name="email">…</Field>\n  <Field name="idade">…</Field>\n</Form>`}
      />

      <P>
        Dica: com schema, use <code className="font-mono text-sm">inputMode=&quot;email&quot;</code> em vez de{" "}
        <code className="font-mono text-sm">type=&quot;email&quot;</code>. O teclado do celular é o mesmo, e a mensagem que aparece é a
        do seu schema, não a do navegador.
      </P>

      <H2 id="zod-mini">Ainda mais leve com zod/mini</H2>
      <P>
        O Form só importa o núcleo do Zod (<code className="font-mono text-sm">zod/v4/core</code>), então funciona igual com schemas
        do <code className="font-mono text-sm">zod/mini</code>, que deixa o seu bundle bem menor.
      </P>
      <Code
        code={`import * as z from "zod/mini"\n\nconst schema = z.object({\n  email: z.email("e-mail inválido"),\n  senha: z.string().check(z.minLength(8, "mínimo 8 caracteres")),\n})`}
      />

      <H2 id="erros-do-servidor">Erros do servidor</H2>
      <P>Quando a validação acontece no back-end (e-mail já cadastrado, por ex.), passe os erros pela prop errors:</P>
      <Code code={`const [errors, setErrors] = useState({})\n\n<Form schema={schema} errors={errors} onSubmit={async (values) => {\n  const res = await signup(values)\n  if (!res.ok) setErrors({ email: "esse e-mail já tem conta." })\n}}>`} />

      <H2 id="instalar">Instalar</H2>
      <Install urls={[`${siteUrl}/r/form.json`, `${siteUrl}/r/input.json`]} />
    </DocPage>
  );
}
