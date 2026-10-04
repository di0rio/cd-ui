const layout = {
  gettingStarted: { en: "getting started", pt: "começando" },
  navigation: { en: "navigation", pt: "navegação" },
};

const intro = {
  description: {
    en: "React components built with Base UI and Tailwind CSS v4. Accessible by default, measured at build time, and installed as code in your project.",
    pt: "Componentes React com Base UI e Tailwind CSS v4. Acessíveis por padrão, medidos no build e instalados como código no seu projeto.",
  },
  toc: {
    what: { en: "What it is", pt: "O que é" },
    principles: { en: "Principles", pt: "Princípios" },
    when: { en: "When to use", pt: "Quando usar" },
  },
  whatTitle: { en: "What it is", pt: "O que é" },
  what: {
    before: {
      en: "cd/ui is a collection of components you install with the shadcn CLI. Instead of pulling in another dependency, you get each file directly in ",
      pt: "O cd/ui é uma coleção de componentes que você instala pelo shadcn CLI. Em vez de puxar outra dependência, você recebe cada arquivo direto em ",
    },
    middle: {
      en: " and can edit the code whenever you want. ",
      pt: " e pode editar o código quando quiser. O ",
    },
    after: {
      en: " handles focus and keyboard behavior. cd/ui brings the styles and attention to size and motion.",
      pt: " cuida dos comportamentos de foco e teclado. O cd/ui entra com estilos e atenção a tamanho e movimento.",
    },
  },
  principlesTitle: { en: "Principles", pt: "Princípios" },
  principles: {
    weight: {
      title: { en: "Weight measured at build time", pt: "Peso medido no build" },
      text: {
        en: "The build bundles each component and measures the result in gzip. The average is {avg}; the largest is {max}.",
        pt: "O build empacota cada componente e mede o resultado em gzip. A média é {avg}; o maior tem {max}.",
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
    en: "Use it when you want to start with ready-made components without giving up control. It works in Next.js projects and other React apps with Tailwind CSS v4, especially when JavaScript size matters and you want to edit the code.",
    pt: "Use quando quiser começar com componentes prontos sem abrir mão do controle. Funciona em projetos Next.js e em outros apps React com Tailwind CSS v4, especialmente quando o tamanho do JavaScript importa e você quer editar o código.",
  },
  start: { en: "Want to get started? ", pt: "Quer começar? " },
  startLink: { en: "see how to install →", pt: "veja como instalar →" },
};

const installation = {
  description: {
    en: "Prepare your project, install the theme, and add your first components in three steps.",
    pt: "Prepare o projeto, instale o tema e adicione seus primeiros componentes em três passos.",
  },
  toc: {
    requirements: { en: "Requirements", pt: "Requisitos" },
    shadcn: { en: "1. shadcn CLI", pt: "1. shadcn CLI" },
    theme: { en: "2. Theme", pt: "2. Tema" },
    components: { en: "3. Components", pt: "3. Componentes" },
    namespace: { en: "Namespace shortcut", pt: "Atalho com namespace" },
  },
  requirements: { en: "Requirements", pt: "Requisitos" },
  react: { en: "React 19 and Tailwind CSS v4.", pt: "React 19 e Tailwind CSS v4." },
  alias: {
    en: "An import alias configured (`@/*`), like the Next.js default.",
    pt: "Um alias de importação configurado (`@/*`), como o padrão do Next.js.",
  },
  shadcnTitle: { en: "1. Prepare your project with the shadcn CLI", pt: "1. Prepare o projeto com o shadcn CLI" },
  shadcn: {
    en: "This command creates components.json, the cn utility, and the theme variables in your CSS. Skip this step if you already use shadcn.",
    pt: "Esse comando cria o components.json, o utilitário cn e as variáveis de tema no CSS. Pule esta etapa se já usa shadcn.",
  },
  themeTitle: { en: "2. Install the theme", pt: "2. Instalar o tema" },
  theme: {
    en: "Add the cd/ui tokens to your globals.css: cream, graphite, and yellow colors, radii, and animation curves.",
    pt: "Adicione os tokens do cd/ui ao seu globals.css: cores creme, grafite e amarelo, raios e curvas de animação.",
  },
  componentsTitle: { en: "3. Add components", pt: "3. Adicionar componentes" },
  components: {
    en: "Add one component or several at once. The CLI also installs dependencies such as Base UI and Zod when needed.",
    pt: "Adicione um componente ou vários de uma vez. O CLI também instala dependências como Base UI e Zod quando necessário.",
  },
  namespaceTitle: { en: "Namespace shortcut", pt: "Atalho com namespace" },
  namespace: {
    en: "Want to shorten the next commands? Register cd/ui once in components.json:",
    pt: "Quer encurtar os próximos comandos? Registre o cd/ui uma vez no components.json:",
  },
};

const theme = {
  description: {
    en: "Colors, radii, and animation curves come from CSS tokens. Adjust the values in your globals.css and give the theme a new look.",
    pt: "Cores, raios e curvas de animação vêm de tokens CSS. Ajuste os valores no seu globals.css e dê outra cara ao tema.",
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
  motionTitle: { en: "Motion", pt: "Movimento" },
  motion: {
    en: "Two curves set the rhythm of interactions: `ease-out` for entrances and responses and `ease-in-out` for elements that move. Durations stay between 100 and 250ms.",
    pt: "Duas curvas dão ritmo às interações: `ease-out` para entradas e respostas e `ease-in-out` para elementos que se deslocam. Durações ficam entre 100 e 250ms.",
  },
  motionCode: {
    en: "--ease-out: cubic-bezier(0.23, 1, 0.32, 1);     /* entrances, clicks, opening popups */\n--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1); /* tabs indicator, switch */",
    pt: "--ease-out: cubic-bezier(0.23, 1, 0.32, 1);     /* entradas, cliques, abrir popups */\n--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1); /* indicador de abas, switch */",
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
  firstTime: { en: "first time? install the theme first: see ", pt: "primeira vez? instale o tema antes: veja " },
  firstTimeLink: { en: "installation", pt: "instalação" },
  installDeps: { en: "install the dependencies:", pt: "instale as dependências:" },
  copyFile: { en: "copy the file into your project:", pt: "copie o arquivo pro seu projeto:" },
  other: { en: "Other components", pt: "Outros componentes" },
  previous: { en: "previous", pt: "anterior" },
  next: { en: "next", pt: "próximo" },
};

const translations = { layout, intro, installation, theme, forms, performance, component };

export default translations;
