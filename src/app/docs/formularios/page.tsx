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
        description="Passe um schema Zod pro Form e conecte cada campo pela prop name. Valide ao sair do campo e receba dados tipados no envio."
        title="Formulários com Zod"
      />

      <H2 id="exemplo">Exemplo</H2>
      <P>Teste o fluxo: envie o formulário vazio, saia de um campo inválido e corrija o valor.</P>
      <Preview Component={FormZod} file="form-zod" />

      <H2 id="como-funciona">Como funciona</H2>
      <ol className="flex list-decimal flex-col gap-2 pl-5 leading-7 marker:text-muted-foreground">
        <li>
          O <code className="font-mono text-sm">Form</code> recebe o schema e prepara a validação dos campos.
        </li>
        <li>
          Cada <code className="font-mono text-sm">Field</code> com <code className="font-mono text-sm">name</code> valida a própria
          chave do schema quando você sai do campo. Mude esse momento com <code className="font-mono text-sm">validationMode</code>.
        </li>
        <li>
          No envio, o schema inteiro é validado. Se houver erro, ele aparece no <code className="font-mono text-sm">FieldError</code>
          correspondente e o foco vai pro primeiro campo inválido. Se estiver tudo certo, <code className="font-mono text-sm">onSubmit</code> recebe os dados
          convertidos e tipados pelo schema.
        </li>
      </ol>
      <Code
        code={`const schema = z.object({\n  email: z.email("e-mail inválido"),\n  idade: z.coerce.number().min(18, "precisa ter 18+"),\n})\n\n<Form schema={schema} onSubmit={(values) => {\n  values.idade // number, não string\n}}>\n  <Field name="email">…</Field>\n  <Field name="idade">…</Field>\n</Form>`}
      />

      <P>
        Dica: com schema, prefira <code className="font-mono text-sm">inputMode=&quot;email&quot;</code> em vez de{" "}
        <code className="font-mono text-sm">type=&quot;email&quot;</code>. O teclado do celular continua igual; a mensagem de erro vem
        do schema, não do navegador.
      </P>

      <H2 id="zod-mini">Ainda mais leve com zod/mini</H2>
      <P>
        O Form importa só o núcleo do Zod (<code className="font-mono text-sm">zod/v4/core</code>), então também aceita schemas
        de <code className="font-mono text-sm">zod/mini</code>. Com ele, o bundle fica mais enxuto.
      </P>
      <Code
        code={`import * as z from "zod/mini"\n\nconst schema = z.object({\n  email: z.email("e-mail inválido"),\n  senha: z.string().check(z.minLength(8, "mínimo 8 caracteres")),\n})`}
      />

      <H2 id="erros-do-servidor">Erros do servidor</H2>
      <P>Quando o back-end encontrar um erro, como um e-mail já cadastrado, passe a mensagem pela prop errors:</P>
      <Code code={`const [errors, setErrors] = useState({})\n\n<Form schema={schema} errors={errors} onSubmit={async (values) => {\n  const res = await signup(values)\n  if (!res.ok) setErrors({ email: "esse e-mail já tem conta." })\n}}>`} />

      <H2 id="instalar">Instalar</H2>
      <Install urls={[`${siteUrl}/r/form.json`, `${siteUrl}/r/input.json`]} />
    </DocPage>
  );
}
