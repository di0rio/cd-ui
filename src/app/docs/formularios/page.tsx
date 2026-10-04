import type { Metadata } from "next";
import { Code } from "@/components/docs/code";
import { DocHeader, DocPage, H2, P, Rich } from "@/components/docs/doc-page";
import { Install } from "@/components/docs/install";
import { Preview } from "@/components/docs/preview";
import FormZod from "@/docs/examples/form-zod";
import { setLocale, t, translations } from "@/i18n/generated";
import { siteUrl } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = translations[await setLocale()].docs.guides.forms;
  return { title, description };
}

export default function Forms() {
  const page = t.app.docs.forms;
  return (
    <DocPage
      toc={[
        { id: "exemplo", title: page.toc.example },
        { id: "como-funciona", title: page.toc.how },
        { id: "zod-mini", title: page.toc.mini },
        { id: "erros-do-servidor", title: page.toc.errors },
        { id: "instalar", title: page.toc.install },
      ]}
    >
      <DocHeader description={page.description} title={t.docs.guides.forms.title} />

      <H2 id="exemplo">{page.exampleTitle}</H2>
      <P>{page.example}</P>
      <Preview Component={FormZod} file="form-zod" />

      <H2 id="como-funciona">{page.howTitle}</H2>
      <ol className="flex list-decimal flex-col gap-2 pl-5 leading-7 marker:text-muted-foreground">
        <li>
          <Rich text={page.how.one} />
        </li>
        <li>
          <Rich text={page.how.two} />
        </li>
        <li>
          <Rich text={page.how.three} />
        </li>
      </ol>
      <Code
        code={`const schema = z.object({
  email: z.email("invalid email"),
  idade: z.coerce.number().min(18, "precisa ter 18+"),
})

<Form schema={schema} onSubmit={(values) => {
  values.idade // ${page.schemaComment}
}}>
  <Field name="email">…</Field>
  <Field name="idade">…</Field>
</Form>`}
      />

      <P>
        <Rich text={page.tip} />
      </P>

      <H2 id="zod-mini">{page.miniTitle}</H2>
      <P>
        <Rich text={page.mini} />
      </P>
      <Code
        code={`import * as z from "zod/mini"\n\nconst schema = z.object({\n  email: z.email("invalid email"),\n  password: z.string().check(z.minLength(8, "minimum 8 characters")),\n})`}
      />

      <H2 id="erros-do-servidor">{page.errorsTitle}</H2>
      <P>{page.errors}</P>
      <Code code={`const [errors, setErrors] = useState({})\n\n<Form schema={schema} errors={errors} onSubmit={async (values) => {\n  const res = await signup(values)\n  if (!res.ok) setErrors({ email: "that email already has an account." })\n}}>`} />

      <H2 id="instalar">{page.installTitle}</H2>
      <Install urls={[`${siteUrl}/r/form.json`, `${siteUrl}/r/input.json`]} />
    </DocPage>
  );
}
