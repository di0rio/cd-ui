import type { ComponentType } from "react";
import BadgeDefault from "@/docs/examples/badge-default";
import ButtonDefault from "@/docs/examples/button-default";
import ButtonLink from "@/docs/examples/button-link";
import ButtonLoading from "@/docs/examples/button-loading";
import ButtonSizes from "@/docs/examples/button-sizes";
import CardDefault from "@/docs/examples/card-default";
import CheckboxDefault from "@/docs/examples/checkbox-default";
import CheckboxIndeterminate from "@/docs/examples/checkbox-indeterminate";
import DialogDefault from "@/docs/examples/dialog-default";
import FieldDefault from "@/docs/examples/field-default";
import FormZod from "@/docs/examples/form-zod";
import InputDefault from "@/docs/examples/input-default";
import KbdDefault from "@/docs/examples/kbd-default";
import SelectDefault from "@/docs/examples/select-default";
import SeparatorDefault from "@/docs/examples/separator-default";
import SkeletonDefault from "@/docs/examples/skeleton-default";
import SpinnerDefault from "@/docs/examples/spinner-default";
import SwitchDefault from "@/docs/examples/switch-default";
import TabsDefault from "@/docs/examples/tabs-default";
import TextareaDefault from "@/docs/examples/textarea-default";
import TooltipDefault from "@/docs/examples/tooltip-default";

export type Prop = { name: string; type: string; default?: string; description: string };
export type ApiPart = { name: string; description: string; base?: string; props: Prop[] };
export type Example = { file: string; title: string; description?: string; Component: ComponentType };
export type KeyRow = { keys: string[]; description: string };

export type ComponentDoc = {
  /** O primeiro exemplo é o preview do topo; os outros viram a seção "Exemplos". */
  examples: Example[];
  usage: string;
  api: ApiPart[];
  keyboard?: KeyRow[];
  accessibility?: string[];
};

const className: Prop = { name: "className", type: "string", description: "Classes extras, mescladas com `cn` (a sua vence)." };
const render: Prop = {
  name: "render",
  type: "ReactElement | (props) => ReactElement",
  description: "Troca o elemento renderizado mantendo comportamento e estilo (ex.: virar `<a>` ou `<Link>`).",
};

export const content: Record<string, ComponentDoc> = {
  button: {
    examples: [
      { file: "button-default", title: "Variantes", Component: ButtonDefault },
      { file: "button-sizes", title: "Tamanhos", description: "Três alturas e dois tamanhos quadrados pra ícone.", Component: ButtonSizes },
      {
        file: "button-loading",
        title: "Carregando",
        description: "`loading` troca o conteúdo por um spinner sem mudar a largura do botão e bloqueia cliques repetidos.",
        Component: ButtonLoading,
      },
      { file: "button-link", title: "Como link", description: "Com `render`, o botão vira um `<a>` (ou `<Link>` do Next) com o mesmo visual.", Component: ButtonLink },
    ],
    usage: `import { Button } from "@/components/ui/button"\n\n<Button variant="brand">começar</Button>`,
    api: [
      {
        name: "Button",
        base: "Button",
        description: "Botão nativo com variantes. Aceita todas as props do `Button` do Base UI.",
        props: [
          { name: "variant", type: '"default" | "brand" | "outline" | "ghost" | "link" | "destructive"', default: '"default"', description: "Estilo visual." },
          { name: "size", type: '"sm" | "md" | "lg" | "icon" | "icon-sm"', default: '"md"', description: "Altura e espaçamento." },
          { name: "loading", type: "boolean", default: "false", description: "Mostra o spinner, mantém a largura, marca `aria-busy` e bloqueia cliques (o botão continua focável)." },
          { name: "nativeButton", type: "boolean", default: "true", description: "Passe `false` quando usar `render` com um elemento que não é `<button>`." },
          render,
          className,
        ],
      },
    ],
    keyboard: [{ keys: ["Enter", "Space"], description: "Ativa o botão." }],
    accessibility: [
      "Botões só com ícone precisam de `aria-label`.",
      "Durante `loading` o botão segue focável (`focusableWhenDisabled`), então o foco não pula pra outro lugar.",
    ],
  },
  badge: {
    examples: [{ file: "badge-default", title: "Variantes", Component: BadgeDefault }],
    usage: `import { Badge } from "@/components/ui/badge"\n\n<Badge variant="brand">novo</Badge>`,
    api: [
      {
        name: "Badge",
        description: "Um `<span>` estilizado. Componente de servidor: não envia JS.",
        props: [
          { name: "variant", type: '"default" | "brand" | "outline" | "muted" | "destructive"', default: '"default"', description: "Estilo visual." },
          className,
        ],
      },
    ],
  },
  card: {
    examples: [{ file: "card-default", title: "Card com ações", Component: CardDefault }],
    usage: `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"\n\n<Card>\n  <CardHeader>\n    <CardTitle>título</CardTitle>\n  </CardHeader>\n  <CardContent>conteúdo</CardContent>\n</Card>`,
    api: [
      { name: "Card", description: "Superfície com borda fina e fundo levemente elevado. Componente de servidor.", props: [className] },
      { name: "CardHeader · CardTitle · CardDescription", description: "Cabeçalho, título (`<h3>`) e descrição.", props: [className] },
      { name: "CardContent · CardFooter", description: "Corpo e rodapé (linha de ações).", props: [className] },
    ],
  },
  kbd: {
    examples: [{ file: "kbd-default", title: "Atalhos no texto", Component: KbdDefault }],
    usage: `import { Kbd } from "@/components/ui/kbd"\n\n<Kbd>Ctrl</Kbd> <Kbd>K</Kbd>`,
    api: [{ name: "Kbd", description: "Um `<kbd>` com cara de tecla. Componente de servidor.", props: [className] }],
  },
  separator: {
    examples: [{ file: "separator-default", title: "Horizontal e vertical", Component: SeparatorDefault }],
    usage: `import { Separator } from "@/components/ui/separator"\n\n<Separator />`,
    api: [
      {
        name: "Separator",
        description: "Linha de 1px. Componente de servidor.",
        props: [
          { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Direção da linha." },
          { name: "decorative", type: "boolean", default: "true", description: "Se `false`, vira `role=\"separator\"` e é anunciada por leitor de tela." },
          className,
        ],
      },
    ],
  },
  skeleton: {
    examples: [{ file: "skeleton-default", title: "Lista carregando", Component: SkeletonDefault }],
    usage: `import { Skeleton } from "@/components/ui/skeleton"\n\n<Skeleton className="h-4 w-40" />`,
    api: [{ name: "Skeleton", description: "Bloco com pulso lento. Defina o tamanho com classes. Componente de servidor.", props: [className] }],
    accessibility: ["É `aria-hidden`: anuncie o carregamento em outro lugar (ex.: `aria-busy` no contêiner)."],
  },
  spinner: {
    examples: [{ file: "spinner-default", title: "Tamanhos e cor", Component: SpinnerDefault }],
    usage: `import { Spinner } from "@/components/ui/spinner"\n\n<Spinner />`,
    api: [
      {
        name: "Spinner",
        description: "SVG girando via CSS. Herda a cor do texto. Componente de servidor.",
        props: [{ name: "label", type: "string", default: '"Carregando"', description: "Texto anunciado (`role=\"status\"`)." }, className],
      },
    ],
  },
  input: {
    examples: [{ file: "input-default", title: "Estados", Component: InputDefault }],
    usage: `import { Input } from "@/components/ui/input"\n\n<Input placeholder="seu nome" />`,
    api: [
      {
        name: "Input",
        base: "Input",
        description: "Campo de texto. Dentro de um `Field`, recebe id, `aria-describedby` e estado de erro sozinho.",
        props: [{ name: "...props", type: "Input.Props", description: "Tudo do `<input>` nativo e do `Input` do Base UI." }, className],
      },
    ],
  },
  textarea: {
    examples: [{ file: "textarea-default", title: "Com label", Component: TextareaDefault }],
    usage: `import { Textarea } from "@/components/ui/textarea"\n\n<Textarea placeholder="mensagem" />`,
    api: [
      {
        name: "Textarea",
        base: "Field.Control",
        description: "`<textarea>` que cresce com o conteúdo via `field-sizing: content` (sem JS). Integra com `Field`.",
        props: [{ name: "...props", type: 'ComponentProps<"textarea">', description: "Tudo do `<textarea>` nativo." }, className],
      },
    ],
  },
  field: {
    examples: [{ file: "field-default", title: "Validação nativa", description: "Sem schema, o `Field` usa a validação do HTML (`required`, `type=\"email\"`…).", Component: FieldDefault }],
    usage: `import { Field, FieldError, FieldLabel } from "@/components/ui/field"\nimport { Input } from "@/components/ui/input"\n\n<Field name="email">\n  <FieldLabel>e-mail</FieldLabel>\n  <Input type="email" />\n  <FieldError />\n</Field>`,
    api: [
      {
        name: "Field",
        base: "Field.Root",
        description: "Agrupa as partes. Dentro de um `Form` com `schema`, valida pelo `name` sem configurar nada.",
        props: [
          { name: "name", type: "string", description: "Nome do campo. Liga o valor ao form e à chave do schema." },
          { name: "validate", type: "(value) => string | string[] | null", description: "Validação própria. Se passar, tem prioridade sobre o schema." },
          { name: "validationMode", type: '"onSubmit" | "onBlur" | "onChange"', default: "herda do Form", description: "Quando validar." },
          { name: "disabled · invalid", type: "boolean", description: "Estados controlados de fora." },
          className,
        ],
      },
      { name: "FieldLabel", base: "Field.Label", description: "`<label>` ligado ao controle.", props: [className] },
      { name: "FieldDescription", base: "Field.Description", description: "Texto de ajuda, ligado por `aria-describedby`.", props: [className] },
      {
        name: "FieldError",
        base: "Field.Error",
        description: "Mensagem de erro. Sem `match`, mostra o que a validação devolver.",
        props: [{ name: "match", type: "keyof ValidityState | boolean", description: "Mostra só para um tipo de erro (ex.: `\"valueMissing\"`)." }, className],
      },
    ],
    accessibility: ["O erro entra em `aria-describedby` do controle e o campo recebe `aria-invalid`.", "O label é ligado por `for`/`id` automaticamente."],
  },
  form: {
    examples: [
      {
        file: "form-zod",
        title: "Cadastro com Zod",
        description: "Passe o schema e dê `name` aos campos. Cada campo valida ao sair dele; o envio só acontece com tudo válido.",
        Component: FormZod,
      },
    ],
    usage: `import { z } from "zod"\nimport { Form } from "@/components/ui/form"\nimport { Field, FieldError, FieldLabel } from "@/components/ui/field"\nimport { Input } from "@/components/ui/input"\n\nconst schema = z.object({ email: z.email("e-mail inválido") })\n\n<Form schema={schema} onSubmit={(values) => save(values)}>\n  <Field name="email">\n    <FieldLabel>e-mail</FieldLabel>\n    <Input inputMode="email" />\n    <FieldError />\n  </Field>\n</Form>`,
    api: [
      {
        name: "Form",
        base: "Form",
        description: "`<form>` com validação por schema. Usa só o núcleo do Zod (`zod/v4/core`), então aceita schemas de `zod` e de `zod/mini`.",
        props: [
          { name: "schema", type: "ZodObject", description: "Schema do Zod. Cada `Field` com `name` valida a própria chave." },
          { name: "onSubmit", type: "(values: z.output<schema>) => void | Promise<void>", description: "Só roda com dados válidos, já convertidos e tipados." },
          { name: "validationMode", type: '"onSubmit" | "onBlur" | "onChange"', default: '"onBlur"', description: "Quando cada campo valida." },
          { name: "errors", type: "Record<string, string | string[]>", description: "Erros vindos de fora (ex.: resposta do servidor)." },
          className,
        ],
      },
    ],
    accessibility: [
      "Erros aparecem no `FieldError` de cada campo e ficam ligados ao controle por `aria-describedby`.",
      "Ao enviar com erro, o foco vai para o primeiro campo inválido (comportamento do Base UI).",
      "Com schema, prefira `inputMode=\"email\"` a `type=\"email\"`: o tipo nativo faz o navegador mostrar a mensagem dele (no idioma do sistema) no lugar da do schema.",
    ],
  },
  checkbox: {
    examples: [
      { file: "checkbox-default", title: "Com label", Component: CheckboxDefault },
      { file: "checkbox-indeterminate", title: "Indeterminado", description: "Um pai que reflete os filhos: marcado, desmarcado ou parcial.", Component: CheckboxIndeterminate },
    ],
    usage: `import { Checkbox } from "@/components/ui/checkbox"\n\n<label className="flex items-center gap-2">\n  <Checkbox /> aceito os termos\n</label>`,
    api: [
      {
        name: "Checkbox",
        base: "Checkbox.Root",
        description: "Caixa de seleção. O check é um traço SVG que se desenha em 150ms.",
        props: [
          { name: "checked · defaultChecked", type: "boolean", description: "Estado controlado ou inicial." },
          { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Chamado ao marcar ou desmarcar." },
          { name: "indeterminate", type: "boolean", default: "false", description: "Mostra o traço de \"parcial\"." },
          { name: "name · value", type: "string", description: "Para enviar em formulário." },
          className,
        ],
      },
    ],
    keyboard: [{ keys: ["Space"], description: "Marca ou desmarca." }],
  },
  switch: {
    examples: [{ file: "switch-default", title: "Configurações", Component: SwitchDefault }],
    usage: `import { Switch } from "@/components/ui/switch"\n\n<Switch defaultChecked />`,
    api: [
      {
        name: "Switch",
        base: "Switch.Root",
        description: "Interruptor. Use para efeito imediato; para \"aplicar depois\", prefira Checkbox.",
        props: [
          { name: "checked · defaultChecked", type: "boolean", description: "Estado controlado ou inicial." },
          { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Chamado ao alternar." },
          className,
        ],
      },
    ],
    keyboard: [{ keys: ["Space", "Enter"], description: "Alterna." }],
  },
  select: {
    examples: [{ file: "select-default", title: "Com label", Component: SelectDefault }],
    usage: `import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "@/components/ui/select"\n\n<Select items={items} defaultValue="next">\n  <SelectTrigger><SelectValue /></SelectTrigger>\n  <SelectPopup>\n    {items.map((i) => <SelectItem key={i.value} value={i.value}>{i.label}</SelectItem>)}\n  </SelectPopup>\n</Select>`,
    api: [
      {
        name: "Select",
        base: "Select.Root",
        description: "Raiz. Passe `items` para o valor exibido usar o rótulo certo antes da lista abrir.",
        props: [
          { name: "items", type: "{ value, label }[]", description: "Lista de opções (usada pelo `SelectValue`)." },
          { name: "value · defaultValue", type: "string", description: "Valor controlado ou inicial." },
          { name: "onValueChange", type: "(value) => void", description: "Chamado ao escolher." },
          { name: "name", type: "string", description: "Para enviar em formulário." },
        ],
      },
      { name: "SelectTrigger · SelectValue", base: "Select.Trigger · Select.Value", description: "Botão que abre a lista e o texto do valor atual.", props: [className] },
      { name: "SelectPopup", base: "Select.Popup", description: "Lista. Abre do gatilho em 150ms, fecha em 100ms.", props: [className] },
      { name: "SelectItem", base: "Select.Item", description: "Opção com check amarelo quando escolhida.", props: [{ name: "value", type: "string", description: "Valor da opção." }, className] },
    ],
    keyboard: [
      { keys: ["Space", "Enter", "↓"], description: "Abre a lista." },
      { keys: ["↑", "↓"], description: "Navega entre opções." },
      { keys: ["Enter"], description: "Escolhe a opção." },
      { keys: ["Esc"], description: "Fecha sem mudar." },
      { keys: ["A–Z"], description: "Pula para a opção que começa com a letra." },
    ],
  },
  dialog: {
    examples: [{ file: "dialog-default", title: "Confirmação", Component: DialogDefault }],
    usage: `import { Dialog, DialogPopup, DialogTitle, DialogTrigger } from "@/components/ui/dialog"\n\n<Dialog>\n  <DialogTrigger render={<Button />}>abrir</DialogTrigger>\n  <DialogPopup>\n    <DialogTitle>título</DialogTitle>\n  </DialogPopup>\n</Dialog>`,
    api: [
      { name: "Dialog", base: "Dialog.Root", description: "Raiz.", props: [{ name: "open · defaultOpen · onOpenChange", type: "boolean / (open) => void", description: "Controle de abertura." }] },
      { name: "DialogTrigger · DialogClose", base: "Dialog.Trigger · Dialog.Close", description: "Abrem e fecham. Use `render` pra usar seu `Button`.", props: [render] },
      {
        name: "DialogPopup",
        base: "Dialog.Popup",
        description: "Janela centralizada com fundo escurecido. Entra em escala (200ms), sai mais rápido (150ms).",
        props: [
          { name: "showClose", type: "boolean", default: "true", description: "Mostra o X no canto." },
          { name: "closeLabel", type: "string", default: '"Close"', description: "Rótulo do X para leitor de tela." },
          className,
        ],
      },
      { name: "DialogHeader · DialogTitle · DialogDescription · DialogFooter", description: "Estrutura do conteúdo. Título e descrição são anunciados ao abrir.", props: [className] },
    ],
    keyboard: [
      { keys: ["Esc"], description: "Fecha e devolve o foco ao gatilho." },
      { keys: ["Tab"], description: "Circula só dentro da janela." },
    ],
  },
  tooltip: {
    examples: [{ file: "tooltip-default", title: "Barra de ferramentas", description: "Passe de um botão pro outro: depois do primeiro, os tooltips aparecem na hora.", Component: TooltipDefault }],
    usage: `import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"\n\n<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger render={<Button />}>?</TooltipTrigger>\n    <TooltipPopup>ajuda</TooltipPopup>\n  </Tooltip>\n</TooltipProvider>`,
    api: [
      { name: "TooltipProvider", base: "Tooltip.Provider", description: "Compartilha o atraso entre tooltips vizinhos.", props: [{ name: "delay", type: "number", default: "400", description: "Atraso (ms) do primeiro tooltip." }] },
      { name: "Tooltip · TooltipTrigger", base: "Tooltip.Root · Tooltip.Trigger", description: "Raiz e gatilho.", props: [render] },
      {
        name: "TooltipPopup",
        base: "Tooltip.Popup",
        description: "Balão. Nasce do gatilho em 125ms; os seguintes aparecem sem animação.",
        props: [
          { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: "Lado preferido." },
          { name: "sideOffset", type: "number", default: "6", description: "Distância do gatilho (px)." },
          className,
        ],
      },
    ],
    accessibility: ["Abre também com foco de teclado.", "Não coloque conteúdo interativo dentro do tooltip: use um Popover."],
  },
  tabs: {
    examples: [{ file: "tabs-default", title: "Períodos", Component: TabsDefault }],
    usage: `import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"\n\n<Tabs defaultValue="a">\n  <TabsList>\n    <TabsTab value="a">A</TabsTab>\n    <TabsTab value="b">B</TabsTab>\n  </TabsList>\n  <TabsPanel value="a">…</TabsPanel>\n</Tabs>`,
    api: [
      { name: "Tabs", base: "Tabs.Root", description: "Raiz.", props: [{ name: "value · defaultValue · onValueChange", type: "any", description: "Aba ativa." }, className] },
      { name: "TabsList", base: "Tabs.List", description: "Lista com o indicador que desliza (250ms, ease-in-out forte).", props: [className] },
      { name: "TabsTab · TabsPanel", base: "Tabs.Tab · Tabs.Panel", description: "Aba e conteúdo, ligados pelo `value`.", props: [{ name: "value", type: "any", description: "Identificador da aba." }, className] },
    ],
    keyboard: [
      { keys: ["←", "→"], description: "Move entre abas." },
      { keys: ["Home", "End"], description: "Primeira e última aba." },
    ],
  },
};
