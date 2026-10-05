const layout = {
  gettingStarted: { en: "getting started", pt: "começando" },
  navigation: { en: "navigation", pt: "navegação" },
};

const intro = {
  description: {
    en: "Accessible React components built with Base UI and Tailwind CSS v4. Install with the shadcn CLI, then edit the source right in your project.",
    pt: "Componentes acessíveis com Base UI e Tailwind CSS v4. Instale pelo shadcn CLI e edite o código direto no seu projeto.",
  },
  toc: {
    what: { en: "What it is", pt: "O que é" },
    principles: { en: "Principles", pt: "Princípios" },
    when: { en: "When to use", pt: "Quando usar" },
  },
  whatTitle: { en: "What it is", pt: "O que é" },
  what: {
    before: {
      en: "Install cd/ui components with the shadcn CLI. The files land right in ",
      pt: "Instale os componentes do cd/ui pelo shadcn CLI. Os arquivos vão direto pra ",
    },
    middle: {
      en: " and stay yours to edit. ",
      pt: " e ficam no seu projeto pra você editar. O ",
    },
    after: {
      en: " handles focus and keyboard behavior. cd/ui adds the styling, with bundle size and motion in mind.",
      pt: " cuida do foco e do teclado. O cd/ui traz os estilos e deixa tamanho e movimento no radar.",
    },
  },
  principlesTitle: { en: "Principles", pt: "Princípios" },
  principles: {
    weight: {
      title: { en: "Weight measured at build time", pt: "Peso medido no build" },
      text: {
        en: "We bundle each component and measure its gzip size at build time. Average: {avg}. Largest: {max}.",
        pt: "Cada componente é empacotado e medido em gzip no build. Média: {avg}. Maior: {max}.",
      },
    },
    server: {
      title: { en: "Server by default", pt: "Servidor por padrão" },
      text: {
        en: "{server} of {count} components run as React Server Components and send no JavaScript to the browser.",
        pt: "{server} dos {count} componentes rodam como React Server Components e não enviam JavaScript pro navegador.",
      },
    },
    a11y: {
      title: { en: "Accessibility from the ground up", pt: "Acessibilidade desde a base" },
      text: {
        en: "Base UI handles focus, keyboard, and aria attribute behavior. You compose these patterns without starting from scratch.",
        pt: "O Base UI cuida dos comportamentos de foco, teclado e atributos aria. Você compõe esses padrões sem começar do zero.",
      },
    },
    simple: {
      title: { en: "Start without ceremony", pt: "Comece sem cerimônia" },
      text: {
        en: "Each component has one import and a lean API. In Form, pass a Zod schema and connect the fields by name.",
        pt: "Cada componente tem uma importação e uma API enxuta. No Form, passe um schema Zod e conecte os campos pelo name.",
      },
    },
    motion: {
      title: { en: "Motion in moderation", pt: "Movimento na medida" },
      text: {
        en: "Short animations built with transform and opacity. Every component respects prefers-reduced-motion.",
        pt: "Animações curtas, feitas com transform e opacity. Todos os componentes respeitam prefers-reduced-motion.",
      },
    },
    code: {
      title: { en: "The code stays with you", pt: "O código fica com você" },
      text: {
        en: "The shadcn CLI copies each file into your project. Want to change a detail? Open the component and edit it directly.",
        pt: "O shadcn CLI copia cada arquivo pro seu projeto. Quer mudar um detalhe? Abra o componente e edite direto.",
      },
    },
  },
  whenTitle: { en: "When to use", pt: "Quando usar" },
  when: {
    en: "Use cd/ui when you want a head start without giving up control. It works with Next.js and other React apps on Tailwind CSS v4. Install only what you need, then change the source however you like.",
    pt: "Use o cd/ui pra começar com componentes prontos sem abrir mão do controle. Funciona com Next.js e outros apps React com Tailwind CSS v4. Instale só o que precisa e ajuste o código à vontade.",
  },
  start: { en: "Want to get started? ", pt: "Quer começar? " },
  startLink: { en: "see how to install →", pt: "veja como instalar →" },
};

const installation = {
  description: {
    en: "Go from a fresh project to every component with one file and one command.",
    pt: "Do projeto limpo a todos os componentes com um arquivo e um comando.",
  },
  toc: {
    requirements: { en: "Requirements", pt: "Requisitos" },
    config: { en: "1. components.json", pt: "1. components.json" },
    all: { en: "2. Install everything", pt: "2. Instalar tudo" },
    blocks: { en: "Blocks", pt: "Blocos" },
    single: { en: "Single components", pt: "Componentes avulsos" },
    namespace: { en: "Namespace shortcut", pt: "Atalho com namespace" },
  },
  requirements: { en: "Requirements", pt: "Requisitos" },
  react: { en: "React 19 and Tailwind CSS v4.", pt: "React 19 e Tailwind CSS v4." },
  alias: {
    en: "An import alias configured (`@/*`), like the Next.js default.",
    pt: "Um alias de importação configurado (`@/*`), como o padrão do Next.js.",
  },
  configTitle: { en: "1. Create components.json", pt: "1. Crie o components.json" },
  config: {
    en: "Create this file at the root of your project and point `css` to your global stylesheet. You do not need to run `shadcn init`: it would install shadcn's default tokens, which cd/ui replaces with its own theme.",
    pt: "Crie este arquivo na raiz do projeto e aponte `css` para o seu estilo global. Não precisa rodar `shadcn init`: ele instalaria os tokens padrão do shadcn, que o cd/ui troca pelo próprio tema.",
  },
  allTitle: { en: "2. Install the theme and every component", pt: "2. Instale o tema e todos os componentes" },
  all: {
    en: "One command adds the theme, the `cn` utility, and every component, with their dependencies such as Base UI and Zod. Nothing from shadcn's defaults and no tw-animate.",
    pt: "Um comando adiciona o tema, o utilitário `cn` e todos os componentes, com as dependências como Base UI e Zod. Nada dos padrões do shadcn e sem tw-animate.",
  },
  blocksTitle: { en: "Blocks (optional)", pt: "Blocos (opcional)" },
  blocks: {
    en: "Ready-made sections such as hero, pricing, and footer, all in one item:",
    pt: "Seções prontas como hero, preços e rodapé, todas em um item:",
  },
  singleTitle: { en: "Single components", pt: "Componentes avulsos" },
  single: {
    en: "Prefer to start small? Add only what you need by URL. The theme comes first on a new project:",
    pt: "Prefere começar pequeno? Adicione só o que precisa pela URL. Em projeto novo, o tema vem primeiro:",
  },
  namespaceTitle: { en: "Namespace shortcut", pt: "Atalho com namespace" },
  namespace: {
    en: "Want shorter install commands? Add cd/ui to components.json once:",
    pt: "Quer encurtar os próximos comandos? Registre o cd/ui uma vez no components.json:",
  },
};

const theme = {
  description: {
    en: "Colors, radii, durations, and animation curves come from CSS tokens. Adjust the values in your globals.css and give the theme a new look.",
    pt: "Cores, raios, durações e curvas de animação vêm de tokens CSS. Ajuste os valores no seu globals.css e dê outra cara ao tema.",
  },
  toc: {
    colors: { en: "Colors", pt: "Cores" },
    radii: { en: "Radii", pt: "Raios" },
    motion: { en: "Motion", pt: "Movimento" },
    customize: { en: "Customize", pt: "Personalizar" },
  },
  colorsTitle: { en: "Colors", pt: "Cores" },
  colors: {
    en: "Switch the theme with the button at the top and watch the values change. Components use these tokens instead of fixed colors.",
    pt: "Troque o tema no botão do topo e veja os valores mudarem. Os componentes usam esses tokens em vez de cores fixas.",
  },
  swatches: {
    background: { en: "background", pt: "fundo" },
    card: { en: "surface", pt: "superfície" },
    foreground: { en: "text", pt: "texto" },
    mutedForeground: { en: "secondary text", pt: "texto secundário" },
    brand: { en: "accent", pt: "destaque" },
    brandForeground: { en: "accent text", pt: "destaque em texto" },
    border: { en: "border", pt: "borda" },
    destructive: { en: "danger", pt: "perigo" },
  },
  yellow: {
    en: "Yellow works as a signal: it shows up in details like focus, check, an enabled switch, and the primary button, without taking over the whole screen.",
    pt: "O amarelo funciona como um sinal: aparece em detalhes como foco, check, switch ligado e botão principal, sem tomar a tela toda.",
  },
  radiiTitle: { en: "Radii", pt: "Raios" },
  radii: {
    en: "`--radius` (0.75rem) is the base. The scale derives from it: `xs` 4px, `sm` 6px, `md` 9px, `lg` 12px, `xl` 18px, `2xl` 24px. Change `--radius` and every size follows.",
    pt: "`--radius` (0.75rem) é a base. A escala deriva dela: `xs` 4px, `sm` 6px, `md` 9px, `lg` 12px, `xl` 18px, `2xl` 24px. Mudou o `--radius`, todos os tamanhos acompanham.",
  },
  radiiControls: {
    en: "Buttons and fields have their own tokens, `--radius-button` and `--radius-field`, both defaulting to `var(--radius)`. Override one to round only buttons (or only fields) without touching the rest:",
    pt: "Botões e campos têm tokens próprios, `--radius-button` e `--radius-field`, os dois com padrão `var(--radius)`. Sobrescreva um para arredondar só os botões (ou só os campos) sem mexer no resto:",
  },
  radiiDefault: { en: "default", pt: "padrão" },
  radiiButtonOnly: { en: "pill button", pt: "botão pílula" },
  radiiFieldOnly: { en: "square field", pt: "campo reto" },
  radiiCode: {
    en: ":root {\n  --radius-button: 9999px; /* pill buttons */\n  --radius-field: 0;       /* square input, textarea, select */\n}",
    pt: ":root {\n  --radius-button: 9999px; /* botões em pílula */\n  --radius-field: 0;       /* input, textarea e select retos */\n}",
  },
  motionTitle: { en: "Motion", pt: "Movimento" },
  motion: {
    en: "One set of tokens drives every transition. Two curves set the rhythm: `ease-out` for entrances and responses, `ease-in-out` for elements that move. Durations go from 80 to 240ms.",
    pt: "Um único conjunto de tokens controla todas as transições. Duas curvas dão o ritmo: `ease-out` para entradas e respostas, `ease-in-out` para elementos que se deslocam. As durações vão de 80 a 240ms.",
  },
  motionTable: {
    token: { en: "Token", pt: "Token" },
    value: { en: "Value", pt: "Valor" },
    use: { en: "Used by", pt: "Usado por" },
    instant: { en: "Button press feedback.", pt: "Feedback do clique no botão." },
    fast: { en: "Popups and dialogs closing.", pt: "Fechamento de popups e dialogs." },
    base: {
      en: "Color and state changes: inputs, checkbox, switch, tabs, accordion chevron.",
      pt: "Mudanças de cor e estado: input, checkbox, switch, abas, seta do accordion.",
    },
    slow: { en: "Accordion height, progress, toast.", pt: "Altura do accordion, progress, toast." },
    easeOut: { en: "Entrances, clicks, opening popups.", pt: "Entradas, cliques, abrir popups." },
    easeInOut: { en: "Tabs indicator, switch.", pt: "Indicador de abas, switch." },
    scaleEnter: {
      en: "Starting scale of popups (dialog, dropdown, popover, select, tooltip).",
      pt: "Escala inicial dos popups (dialog, dropdown, popover, select, tooltip).",
    },
  },
  motionOverrideTitle: { en: "Override", pt: "Sobrescrever" },
  motionGlobal: {
    en: "Redefine a token in `:root` to retune every component at once:",
    pt: "Redefina um token no `:root` para ajustar todos os componentes de uma vez:",
  },
  motionGlobalCode: {
    en: ":root {\n  --cd-duration-base: 200ms;\n  --cd-ease-out: cubic-bezier(0.16, 1, 0.3, 1);\n}",
    pt: ":root {\n  --cd-duration-base: 200ms;\n  --cd-ease-out: cubic-bezier(0.16, 1, 0.3, 1);\n}",
  },
  motionLocal: {
    en: "For a single component, set the token through a Tailwind arbitrary property in its `className`:",
    pt: "Para um único componente, defina o token por uma propriedade arbitrária do Tailwind no `className`:",
  },
  motionLocalCode: {
    en: '<Switch className="[--cd-duration-base:300ms]" />',
    pt: '<Switch className="[--cd-duration-base:300ms]" />',
  },
  motionReduced: {
    en: "With `prefers-reduced-motion: reduce`, one block in globals.css sets every duration to 0.01ms and `--cd-scale-enter` to 1. It sets the same tokens, so keep it after your overrides.",
    pt: "Com `prefers-reduced-motion: reduce`, um bloco no globals.css zera todas as durações (0.01ms) e põe `--cd-scale-enter` em 1. Ele mexe nos mesmos tokens, então mantenha-o depois dos seus overrides.",
  },
  customizeTitle: { en: "Customize", pt: "Personalizar" },
  customize: {
    en: "Want a different palette? Change the values in your globals.css. Here, the yellow accent turns green:",
    pt: "Quer outra paleta? Troque os valores no seu globals.css. Aqui, o destaque amarelo vira verde:",
  },
};

const forms = {
  description: {
    en: "Pass a Zod schema to Form and connect each field through the name prop. Validate when leaving a field and get typed data on submit.",
    pt: "Passe um schema Zod pro Form e conecte cada campo pela prop name. Valide ao sair do campo e receba dados tipados no envio.",
  },
  toc: {
    example: { en: "Example", pt: "Exemplo" },
    how: { en: "How it works", pt: "Como funciona" },
    mini: { en: "Even lighter with zod/mini", pt: "Ainda mais leve com zod/mini" },
    errors: { en: "Server errors", pt: "Erros do servidor" },
    install: { en: "Install", pt: "Instalar" },
  },
  exampleTitle: { en: "Example", pt: "Exemplo" },
  example: {
    en: "Try the flow: submit the empty form, leave an invalid field, and fix the value.",
    pt: "Teste o fluxo: envie o formulário vazio, saia de um campo inválido e corrija o valor.",
  },
  howTitle: { en: "How it works", pt: "Como funciona" },
  how: {
    one: {
      en: "The `Form` receives the schema and prepares field validation.",
      pt: "O `Form` recebe o schema e prepara a validação dos campos.",
    },
    two: {
      en: "Each `Field` with a `name` validates its own schema key when you leave the field. Change that timing with `validationMode`.",
      pt: "Cada `Field` com `name` valida a própria chave do schema quando você sai do campo. Mude esse momento com `validationMode`.",
    },
    three: {
      en: "On submit, the whole schema is validated. If there is an error, it appears in the matching `FieldError` and focus moves to the first invalid field. If everything is valid, `onSubmit` receives the data converted and typed by the schema.",
      pt: "No envio, o schema inteiro é validado. Se houver erro, ele aparece no `FieldError` correspondente e o foco vai pro primeiro campo inválido. Se estiver tudo certo, `onSubmit` recebe os dados convertidos e tipados pelo schema.",
    },
  },
  schemaComment: { en: "number, not string", pt: "number, não string" },
  tip: {
    en: 'Tip: with a schema, prefer `inputMode="email"` over `type="email"`. The mobile keyboard stays the same; the error message comes from the schema, not the browser.',
    pt: 'Dica: com schema, prefira `inputMode="email"` em vez de `type="email"`. O teclado do celular continua igual; a mensagem de erro vem do schema, não do navegador.',
  },
  miniTitle: { en: "Even lighter with zod/mini", pt: "Ainda mais leve com zod/mini" },
  mini: {
    en: "Form imports only the core of Zod (`zod/v4/core`), so it also accepts schemas from `zod/mini`. With it, the bundle gets leaner.",
    pt: "O Form importa só o núcleo do Zod (`zod/v4/core`), então também aceita schemas de `zod/mini`. Com ele, o bundle fica mais enxuto.",
  },
  errorsTitle: { en: "Server errors", pt: "Erros do servidor" },
  errors: {
    en: "When the back end finds an error, such as an email that is already registered, pass the message through the errors prop:",
    pt: "Quando o back-end encontrar um erro, como um e-mail já cadastrado, passe a mensagem pela prop errors:",
  },
  installTitle: { en: "Install", pt: "Instalar" },
};

const performance = {
  description: {
    en: "See how much each component weighs in gzip. The measurement counts cd/ui code and leaves external libraries out.",
    pt: "Veja quanto pesa cada componente em gzip. A medida conta o código do cd/ui e deixa as bibliotecas externas de fora.",
  },
  toc: {
    numbers: { en: "The numbers", pt: "Os números" },
    light: { en: "How it stays light", pt: "Como fica leve" },
    method: { en: "How we measure", pt: "Como medimos" },
  },
  stats: {
    avg: { en: "average per component", pt: "média por componente" },
    noJs: { en: "no browser JS", pt: "sem JS no navegador" },
    max: { en: "largest component", pt: "maior componente" },
  },
  numbersTitle: { en: "The numbers", pt: "Os números" },
  client: { en: "client", pt: "client" },
  server: { en: "server", pt: "servidor" },
  lightTitle: { en: "How it stays light", pt: "Como fica leve" },
  techniques: {
    server: {
      title: { en: "Server by default", pt: "Servidor por padrão" },
      text: {
        en: 'Stateless components don\'t need "use client": they run on the server and send no JS to the browser.',
        pt: 'Componentes sem estado não precisam de "use client": rodam no servidor e não enviam JS ao navegador.',
      },
    },
    imports: {
      title: { en: "Lean imports", pt: "Imports enxutos" },
      text: {
        en: "Each component imports only the Base UI module it uses, such as @base-ui/react/dialog.",
        pt: "Cada componente importa só o módulo do Base UI que usa, como @base-ui/react/dialog.",
      },
    },
    css: {
      title: { en: "CSS where it's enough", pt: "CSS onde basta" },
      text: {
        en: "Animations, Textarea growth, Spinner, and Skeleton use CSS, with no extra JavaScript.",
        pt: "Animações, crescimento do Textarea, Spinner e Skeleton usam CSS, sem JavaScript extra.",
      },
    },
    zod: {
      title: { en: "Zod through the core", pt: "Zod pelo núcleo" },
      text: {
        en: "Form uses zod/v4/core and accepts zod/mini schemas without pulling in the full API.",
        pt: "O Form usa zod/v4/core e aceita schemas de zod/mini sem puxar a API completa.",
      },
    },
    motion: {
      title: { en: "Light motion", pt: "Movimento leve" },
      text: {
        en: "Animations use transform and opacity to avoid recalculating layout.",
        pt: "As animações usam transform e opacity para evitar recalcular o layout.",
      },
    },
    measured: {
      title: { en: "Measured at build time", pt: "Medido no build" },
      text: {
        en: "esbuild bundles each component and gzip measures the result. No guessing.",
        pt: "O esbuild empacota cada componente e o gzip mede o resultado. Nada de chute.",
      },
    },
  },
  methodTitle: { en: "How we measure", pt: "Como medimos" },
  method: {
    en: "The scripts/metrics.mjs script bundles each component with esbuild, as minified ESM, and measures the result in gzip level 9. React, Base UI, Zod, lucide, and class utilities are left out. This way, the number shows the cost of cd/ui itself; external libraries are shared in your project's bundle.",
    pt: "O script scripts/metrics.mjs empacota cada componente com esbuild, em ESM minificado, e mede o resultado em gzip nível 9. React, Base UI, Zod, lucide e utilitários de classe ficam de fora. Assim, o número mostra o custo do próprio cd/ui; as bibliotecas externas são compartilhadas no bundle do seu projeto.",
  },
};

const component = {
  breadcrumb: { en: "components", pt: "componentes" },
  runsOnServer: { en: "runs on the server · 0 JS", pt: "roda no servidor · 0 JS" },
  toc: {
    installation: { en: "Installation", pt: "Instalação" },
    usage: { en: "Usage", pt: "Uso" },
    examples: { en: "Examples", pt: "Exemplos" },
    keyboard: { en: "Keyboard", pt: "Teclado" },
    accessibility: { en: "Accessibility", pt: "Acessibilidade" },
  },
  installMethod: { en: "Install method", pt: "Forma de instalar" },
  manual: { en: "manual", pt: "manual" },
  firstTime: { en: "first time? set up components.json and the theme first: see ", pt: "primeira vez? configure o components.json e o tema antes: veja " },
  firstTimeLink: { en: "installation", pt: "instalação" },
  installDeps: { en: "install the dependencies:", pt: "instale as dependências:" },
  copyFile: { en: "copy the file into your project:", pt: "copie o arquivo pro seu projeto:" },
  other: { en: "Other components", pt: "Outros componentes" },
  previous: { en: "previous", pt: "anterior" },
  next: { en: "next", pt: "próximo" },
};

const translations = { layout, intro, installation, theme, forms, performance, component };

export default translations;
