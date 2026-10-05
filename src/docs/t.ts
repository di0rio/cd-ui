const guides = {
  intro: {
    title: { en: "Introduction", pt: "Introdução" },
    description: { en: "Get to know the library and the choices behind it.", pt: "Conheça a biblioteca e as escolhas por trás dela." },
  },
  installation: {
    title: { en: "Installation", pt: "Instalação" },
    description: { en: "From a ready project to your first component.", pt: "Do projeto pronto ao primeiro componente." },
  },
  theme: {
    title: { en: "Theme", pt: "Tema" },
    description: { en: "Colors, corners, and motion as CSS tokens.", pt: "Cores, cantos e movimento em tokens CSS." },
  },
  forms: {
    title: { en: "Forms with Zod", pt: "Formulários com Zod" },
    description: { en: "Connect Zod schemas to your form fields.", pt: "Conecte schemas Zod aos campos do formulário." },
  },
  performance: {
    title: { en: "Performance", pt: "Performance" },
    description: { en: "See how we measure the size of each component.", pt: "Veja como medimos o tamanho de cada componente." },
  },
};

const categories = {
  actions: { en: "Actions", pt: "Ações" },
  display: { en: "Display", pt: "Exibição" },
  feedback: { en: "Feedback", pt: "Feedback" },
  form: { en: "Form", pt: "Formulário" },
  overlay: { en: "Overlay", pt: "Sobreposição" },
  navigation: { en: "Navigation", pt: "Navegação" },
};

const catalog = {
  button: {
    en: "Button with variants, sizes, a loading state, and the option to render as a link.",
    pt: "Botão com variantes, tamanhos, estado de carregamento e opção de renderizar como link.",
  },
  badge: { en: "Compact badge to show a status, count, or category.", pt: "Selo compacto pra mostrar status, contagem ou categoria." },
  card: { en: "Group related content into a header, body, and footer.", pt: "Agrupe conteúdo relacionado em cabeçalho, corpo e rodapé." },
  kbd: { en: "Show a key or shortcut styled like a keycap.", pt: "Mostre uma tecla ou atalho com visual de tecla." },
  separator: { en: "Separate content with a horizontal or vertical line.", pt: "Separe conteúdo com uma linha horizontal ou vertical." },
  skeleton: { en: "Reserve space for content while it loads.", pt: "Reserve o espaço do conteúdo enquanto ele carrega." },
  spinner: { en: "Indicate loading with a CSS-animated SVG, no JavaScript.", pt: "Indique carregamento com um SVG animado por CSS, sem JavaScript." },
  input: { en: "Text field with visual states for focus, error, and disabled.", pt: "Campo de texto com estados visuais de foco, erro e desativado." },
  textarea: { en: "Long text field that grows with its content, no JavaScript.", pt: "Campo de texto longo que cresce com o conteúdo, sem JavaScript." },
  field: {
    en: "Connect label, control, help text, and error with ids and aria attributes.",
    pt: "Conecte label, campo, ajuda e erro com ids e atributos aria.",
  },
  form: {
    en: "Pass a Zod schema and validate fields without adding another form library.",
    pt: "Passe um schema do Zod e valide os campos sem adicionar outra biblioteca de formulário.",
  },
  checkbox: { en: "Checkbox with checked, unchecked, and indeterminate states.", pt: "Caixa de seleção com estados marcado, desmarcado e parcial." },
  switch: { en: "Toggle an option with immediate effect.", pt: "Alterne uma opção com resposta imediata." },
  select: { en: "Pick an option from a list that opens from the button.", pt: "Escolha uma opção numa lista que abre a partir do botão." },
  dialog: { en: "Modal window with managed focus that returns on close.", pt: "Janela modal com foco controlado e devolvido ao fechar." },
  tooltip: { en: "Show a short hint on hover or keyboard navigation.", pt: "Mostre uma dica curta ao passar o mouse ou navegar com teclado." },
  logo: { en: "The cd/ui mark, wordmark, and terminal prompt, in three sizes.", pt: "A marca, o wordmark e o prompt de terminal do cd/ui, em três tamanhos." },
  tabs: {
    en: "Switch content with tabs and an indicator that follows the selection.",
    pt: "Troque de conteúdo com abas e um indicador que acompanha a seleção.",
  },
  accordion: {
    en: "Stacked sections shown as a terminal prompt tree, with a smooth height animation.",
    pt: "Seções empilhadas em forma de árvore de prompt de terminal, com uma animação suave de altura.",
  },
  alert: {
    en: "A terminal-style log line for information, success, warnings, or errors.",
    pt: "Uma linha de log estilo terminal para informação, sucesso, aviso ou erro.",
  },
  "auth-shell": {
    en: "Centered card for sign-in, sign-up, reset, and verify screens.",
    pt: "Card centralizado para telas de login, cadastro, redefinição e verificação.",
  },
  "password-input": { en: "Password field with a show/hide toggle.", pt: "Campo de senha com botão de mostrar/ocultar." },
  "otp-input": {
    en: "One box per digit with auto-advance, backspace, and paste.",
    pt: "Uma caixa por dígito, com avanço automático, backspace e colagem.",
  },
  "pricing-toggle": {
    en: "Monthly/yearly switch with an optional saving badge.",
    pt: "Alternador mensal/anual com selo opcional de economia.",
  },
  avatar: {
    en: "A round profile picture with a fallback for when the image is missing.",
    pt: "Uma foto de perfil redonda com um substituto para quando a imagem não existe.",
  },
  "dropdown-menu": {
    en: "A menu of actions that opens from a button, with checkable items, radio groups, and submenus.",
    pt: "Um menu de ações que abre a partir de um botão, com itens marcáveis, grupos de rádio e submenus.",
  },
  popover: {
    en: "A floating panel anchored to a button that can hold interactive content.",
    pt: "Um painel flutuante ancorado num botão que pode ter conteúdo interativo.",
  },
  "radio-group": {
    en: "Pick exactly one option from a small set, with arrow-key navigation.",
    pt: "Escolha exatamente uma opção de um conjunto pequeno, com navegação pelas setas.",
  },
  slider: {
    en: "Pick a number or a range by dragging a thumb or using the arrow keys.",
    pt: "Escolha um número ou uma faixa arrastando o polegar ou usando as setas.",
  },
  progress: {
    en: "A bar that shows how far a task has come, or that it is still working.",
    pt: "Uma barra que mostra o quanto uma tarefa avançou, ou que ela ainda está em andamento.",
  },
  toast: {
    en: "Stacked notifications that dismiss themselves, with swipe and keyboard support.",
    pt: "Notificações empilhadas que somem sozinhas, com suporte a swipe e teclado.",
  },
  table: { en: "A styled native table for rows and columns of data.", pt: "Uma tabela nativa estilizada para linhas e colunas de dados." },
};

const content = {
  shared: {
    className: {
      en: "Extra classes, merged with `cn` (yours wins).",
      pt: "Classes extras, mescladas com `cn` (a sua vence).",
    },
    render: {
      en: "Swaps the rendered element while keeping behavior and style (e.g. become an `<a>` or a `<Link>`).",
      pt: "Troca o elemento renderizado mantendo comportamento e estilo (ex.: virar `<a>` ou `<Link>`).",
    },
    visualStyle: { en: "Visual style.", pt: "Estilo visual." },
    controlledOrInitial: { en: "Controlled or initial state.", pt: "Estado controlado ou inicial." },
    formSubmit: { en: "To submit in a form.", pt: "Para enviar em formulário." },
    formState: { en: "Disabled and required states.", pt: "Estados desativado e obrigatório." },
    root: { en: "Root.", pt: "Raiz." },
    validationMode: { en: "When to validate.", pt: "Quando validar." },
  },
  button: {
    ex: {
      default: { title: { en: "Variants", pt: "Variantes" } },
      sizes: {
        title: { en: "Sizes", pt: "Tamanhos" },
        description: { en: "Three heights and two square icon sizes.", pt: "Três alturas e dois tamanhos quadrados pra ícone." },
      },
      loading: {
        title: { en: "Loading", pt: "Carregando" },
        description: {
          en: "`loading` swaps the content for a spinner without changing the button width and blocks repeated clicks.",
          pt: "`loading` troca o conteúdo por um spinner sem mudar a largura do botão e bloqueia cliques repetidos.",
        },
      },
      key: {
        title: { en: "Keycap", pt: "Tecla" },
        description: {
          en: "The `key` variant looks like a keyboard key: the bottom edge is a shadow that disappears when pressed.",
          pt: "A variante `key` parece uma tecla de teclado: a borda de baixo é uma sombra que some ao pressionar.",
        },
      },
      link: {
        title: { en: "As a link", pt: "Como link" },
        description: {
          en: "With `render`, the button becomes an `<a>` (or Next's `<Link>`) with the same look.",
          pt: "Com `render`, o botão vira um `<a>` (ou `<Link>` do Next) com o mesmo visual.",
        },
      },
    },
    api: {
      Button: {
        description: {
          en: "Native button with variants. Accepts every prop of Base UI's `Button`.",
          pt: "Botão nativo com variantes. Aceita todas as props do `Button` do Base UI.",
        },
        props: {
          size: { en: "Height and spacing.", pt: "Altura e espaçamento." },
          loading: {
            en: "Shows the spinner, keeps the width, sets `aria-busy`, and blocks clicks (the button stays focusable).",
            pt: "Mostra o spinner, mantém a largura, marca `aria-busy` e bloqueia cliques (o botão continua focável).",
          },
          nativeButton: {
            en: "Pass `false` when using `render` with an element that isn't a `<button>`.",
            pt: "Passe `false` quando usar `render` com um elemento que não é `<button>`.",
          },
        },
      },
    },
    kb: { enter: { en: "Activates the button.", pt: "Ativa o botão." } },
    a11y: {
      iconOnly: { en: "Icon-only buttons need an `aria-label`.", pt: "Botões só com ícone precisam de `aria-label`." },
      loading: {
        en: "During `loading` the button stays focusable (`focusableWhenDisabled`), so focus doesn't jump elsewhere.",
        pt: "Durante `loading` o botão segue focável (`focusableWhenDisabled`), então o foco não pula pra outro lugar.",
      },
    },
  },
  badge: {
    ex: { default: { title: { en: "Variants", pt: "Variantes" } } },
    api: {
      Badge: {
        description: {
          en: "A styled `<span>`. Server component: sends no JS.",
          pt: "Um `<span>` estilizado. Componente de servidor: não envia JS.",
        },
      },
    },
  },
  card: {
    ex: { default: { title: { en: "Card with actions", pt: "Card com ações" } } },
    api: {
      Card: {
        description: {
          en: "Surface with a thin border and a slightly raised background. Server component.",
          pt: "Superfície com borda fina e fundo levemente elevado. Componente de servidor.",
        },
      },
      header: {
        description: {
          en: "Header, title (`<h3>`), and description.",
          pt: "Cabeçalho, título (`<h3>`) e descrição.",
        },
      },
      content: { description: { en: "Body and footer (row of actions).", pt: "Corpo e rodapé (linha de ações)." } },
    },
  },
  kbd: {
    ex: { default: { title: { en: "Shortcuts in text", pt: "Atalhos no texto" } } },
    api: {
      Kbd: {
        description: {
          en: "A `<kbd>` that looks like a key. Server component.",
          pt: "Um `<kbd>` com cara de tecla. Componente de servidor.",
        },
      },
    },
  },
  separator: {
    ex: { default: { title: { en: "Horizontal and vertical", pt: "Horizontal e vertical" } } },
    api: {
      Separator: {
        description: { en: "1px line. Server component.", pt: "Linha de 1px. Componente de servidor." },
        props: {
          orientation: { en: "Line direction.", pt: "Direção da linha." },
          decorative: {
            en: 'If `false`, it becomes `role="separator"` and is announced by screen readers.',
            pt: 'Se `false`, vira `role="separator"` e é anunciada por leitor de tela.',
          },
        },
      },
    },
  },
  skeleton: {
    ex: { default: { title: { en: "Loading list", pt: "Lista carregando" } } },
    api: {
      Skeleton: {
        description: {
          en: "Block with a slow pulse. Set the size with classes. Server component.",
          pt: "Bloco com pulso lento. Defina o tamanho com classes. Componente de servidor.",
        },
      },
    },
    a11y: {
      hidden: {
        en: "It is `aria-hidden`: announce the loading somewhere else (e.g. `aria-busy` on the container).",
        pt: "É `aria-hidden`: anuncie o carregamento em outro lugar (ex.: `aria-busy` no contêiner).",
      },
    },
  },
  spinner: {
    ex: { default: { title: { en: "Sizes and color", pt: "Tamanhos e cor" } } },
    api: {
      Spinner: {
        description: {
          en: "SVG spinning via CSS. Inherits the text color. Server component.",
          pt: "SVG girando via CSS. Herda a cor do texto. Componente de servidor.",
        },
        props: {
          label: { en: 'Announced text (`role="status"`).', pt: 'Texto anunciado (`role="status"`).' },
        },
      },
    },
  },
  input: {
    ex: { default: { title: { en: "States", pt: "Estados" } } },
    api: {
      Input: {
        description: {
          en: "Text field. Inside a `Field`, it gets its id, `aria-describedby`, and error state on its own.",
          pt: "Campo de texto. Dentro de um `Field`, recebe id, `aria-describedby` e estado de erro sozinho.",
        },
        props: {
          props: {
            en: "Everything from the native `<input>` and Base UI's `Input`.",
            pt: "Tudo do `<input>` nativo e do `Input` do Base UI.",
          },
        },
      },
    },
  },
  textarea: {
    ex: { default: { title: { en: "With label", pt: "Com label" } } },
    api: {
      Textarea: {
        description: {
          en: "`<textarea>` that grows with its content via `field-sizing: content` (no JS). Integrates with `Field`.",
          pt: "`<textarea>` que cresce com o conteúdo via `field-sizing: content` (sem JS). Integra com `Field`.",
        },
        props: { props: { en: "Everything from the native `<textarea>`.", pt: "Tudo do `<textarea>` nativo." } },
      },
    },
  },
  field: {
    ex: {
      default: {
        title: { en: "Native validation", pt: "Validação nativa" },
        description: {
          en: 'Without a schema, `Field` uses HTML validation (`required`, `type="email"`…).',
          pt: 'Sem schema, o `Field` usa a validação do HTML (`required`, `type="email"`…).',
        },
      },
    },
    api: {
      Field: {
        description: {
          en: "Groups the parts. Inside a `Form` with a `schema`, it validates by `name` with no configuration.",
          pt: "Agrupa as partes. Dentro de um `Form` com `schema`, valida pelo `name` sem configurar nada.",
        },
        props: {
          name: {
            en: "Field name. Links the value to the form and to the schema key.",
            pt: "Nome do campo. Liga o valor ao form e à chave do schema.",
          },
          validate: {
            en: "Custom validation. If provided, it takes priority over the schema.",
            pt: "Validação própria. Se passar, tem prioridade sobre o schema.",
          },
          validationModeDefault: { en: "inherits from Form", pt: "herda do Form" },
          disabledInvalid: { en: "States controlled from outside.", pt: "Estados controlados de fora." },
        },
      },
      FieldLabel: { description: { en: "`<label>` linked to the control.", pt: "`<label>` ligado ao controle." } },
      FieldDescription: {
        description: { en: "Help text, linked through `aria-describedby`.", pt: "Texto de ajuda, ligado por `aria-describedby`." },
      },
      FieldError: {
        description: {
          en: "Error message. Without `match`, it shows whatever the validation returns.",
          pt: "Mensagem de erro. Sem `match`, mostra o que a validação devolver.",
        },
        props: {
          match: {
            en: 'Shows only for one kind of error (e.g. `"valueMissing"`).',
            pt: 'Mostra só para um tipo de erro (ex.: `"valueMissing"`).',
          },
        },
      },
    },
    a11y: {
      error: {
        en: "The error is added to the control's `aria-describedby` and the field gets `aria-invalid`.",
        pt: "O erro entra em `aria-describedby` do controle e o campo recebe `aria-invalid`.",
      },
      label: {
        en: "The label is linked through `for`/`id` automatically.",
        pt: "O label é ligado por `for`/`id` automaticamente.",
      },
    },
  },
  form: {
    ex: {
      zod: {
        title: { en: "Sign-up with Zod", pt: "Cadastro com Zod" },
        description: {
          en: "Pass the schema and give the fields a `name`. Each field validates when you leave it; submit only happens when everything is valid.",
          pt: "Passe o schema e dê `name` aos campos. Cada campo valida ao sair dele; o envio só acontece com tudo válido.",
        },
      },
    },
    api: {
      Form: {
        description: {
          en: "`<form>` with schema validation. It uses only Zod's core (`zod/v4/core`), so it accepts schemas from `zod` and `zod/mini`.",
          pt: "`<form>` com validação por schema. Usa só o núcleo do Zod (`zod/v4/core`), então aceita schemas de `zod` e de `zod/mini`.",
        },
        props: {
          schema: {
            en: "Zod schema. Each `Field` with a `name` validates its own key.",
            pt: "Schema do Zod. Cada `Field` com `name` valida a própria chave.",
          },
          onSubmit: {
            en: "Only runs with valid data, already converted and typed.",
            pt: "Só roda com dados válidos, já convertidos e tipados.",
          },
          validationMode: { en: "When each field validates.", pt: "Quando cada campo valida." },
          errors: {
            en: "Errors coming from outside (e.g. a server response).",
            pt: "Erros vindos de fora (ex.: resposta do servidor).",
          },
        },
      },
    },
    a11y: {
      errors: {
        en: "Errors appear in each field's `FieldError` and are linked to the control through `aria-describedby`.",
        pt: "Erros aparecem no `FieldError` de cada campo e ficam ligados ao controle por `aria-describedby`.",
      },
      focus: {
        en: "On submit with errors, focus moves to the first invalid field (Base UI behavior).",
        pt: "Ao enviar com erro, o foco vai para o primeiro campo inválido (comportamento do Base UI).",
      },
      inputMode: {
        en: "With a schema, prefer `inputMode=\"email\"` over `type=\"email\"`: the native type makes the browser show its own message (in the system language) instead of the schema's.",
        pt: "Com schema, prefira `inputMode=\"email\"` a `type=\"email\"`: o tipo nativo faz o navegador mostrar a mensagem dele (no idioma do sistema) no lugar da do schema.",
      },
    },
  },
  checkbox: {
    ex: {
      default: { title: { en: "With label", pt: "Com label" } },
      indeterminate: {
        title: { en: "Indeterminate", pt: "Indeterminado" },
        description: {
          en: "A parent that reflects its children: checked, unchecked, or partial.",
          pt: "Um pai que reflete os filhos: marcado, desmarcado ou parcial.",
        },
      },
    },
    api: {
      Checkbox: {
        description: {
          en: "Checkbox. The check is an SVG stroke that draws itself in 160ms.",
          pt: "Caixa de seleção. O check é um traço SVG que se desenha em 160ms.",
        },
        props: {
          onCheckedChange: { en: "Called when checked or unchecked.", pt: "Chamado ao marcar ou desmarcar." },
          indeterminate: { en: 'Shows the "partial" dash.', pt: 'Mostra o traço de "parcial".' },
        },
      },
    },
    kb: { space: { en: "Checks or unchecks.", pt: "Marca ou desmarca." } },
  },
  switch: {
    ex: {
      default: { title: { en: "Settings", pt: "Configurações" } },
      row: {
        title: { en: "Setting row", pt: "Linha de configuração" },
        description: {
          en: "`SwitchRow` puts title, description, and switch in a `<label>`: the whole row is clickable and the title names the switch.",
          pt: "`SwitchRow` coloca título, descrição e interruptor num `<label>`: a linha inteira é clicável e o título dá nome ao interruptor.",
        },
      },
    },
    api: {
      SwitchRow: {
        description: {
          en: "Row with title, description, and a switch. `className` goes on the row; every other prop goes on the `Switch`. Has a focus ring on the row and a disabled state.",
          pt: "Linha com título, descrição e interruptor. `className` vai na linha; as demais props vão no `Switch`. Tem anel de foco na linha e estado desativado.",
        },
        props: {
          title: { en: "Main text of the row.", pt: "Texto principal da linha." },
          description: { en: "Secondary text, below the title.", pt: "Texto secundário, abaixo do título." },
        },
      },
      Switch: {
        description: {
          en: 'Toggle. Use it for immediate effect; for "apply later", prefer Checkbox.',
          pt: 'Interruptor. Use para efeito imediato; para "aplicar depois", prefira Checkbox.',
        },
        props: { onCheckedChange: { en: "Called when toggled.", pt: "Chamado ao alternar." } },
      },
    },
    kb: { toggle: { en: "Toggles.", pt: "Alterna." } },
  },
  select: {
    ex: {
      default: { title: { en: "With label", pt: "Com label" } },
      grouped: {
        title: { en: "Groups and a long list", pt: "Grupos e lista longa" },
        description: {
          en: "`SelectGroup`, `SelectGroupLabel`, and `SelectSeparator` organize the options. When the list is taller than the screen, it scrolls and arrows appear at the edges.",
          pt: "`SelectGroup`, `SelectGroupLabel` e `SelectSeparator` organizam as opções. Quando a lista é maior que a tela, ela rola e setas aparecem nas bordas.",
        },
      },
    },
    api: {
      Select: {
        description: {
          en: "Root. Pass `items` so the displayed value uses the right label before the list opens.",
          pt: "Raiz. Passe `items` para o valor exibido usar o rótulo certo antes da lista abrir.",
        },
        props: {
          items: { en: "List of options (used by `SelectValue`).", pt: "Lista de opções (usada pelo `SelectValue`)." },
          value: { en: "Controlled or initial value.", pt: "Valor controlado ou inicial." },
          onValueChange: { en: "Called when an option is chosen.", pt: "Chamado ao escolher." },
        },
      },
      trigger: {
        description: {
          en: "Button that opens the list and the text of the current value.",
          pt: "Botão que abre a lista e o texto do valor atual.",
        },
      },
      SelectPopup: {
        description: {
          en: "List. Opens below the trigger in 160ms, closes in 120ms, and scrolls with arrows when it is long.",
          pt: "Lista. Abre abaixo do gatilho em 160ms, fecha em 120ms e rola com setas quando é longa.",
        },
        props: {
          alignItemWithTrigger: {
            en: "Puts the chosen item over the trigger, as on macOS. Off by default: the list doesn't jump over the button.",
            pt: "Põe o item escolhido sobre o gatilho, como no macOS. Desligado por padrão: a lista não pula por cima do botão.",
          },
        },
      },
      group: {
        description: {
          en: "`SelectGroup` groups options, `SelectGroupLabel` names the group, and `SelectSeparator` draws a line between groups.",
          pt: "`SelectGroup` agrupa opções, `SelectGroupLabel` dá nome ao grupo e `SelectSeparator` desenha uma linha entre grupos.",
        },
      },
      SelectItem: {
        description: { en: "Option with a yellow check on the right when chosen.", pt: "Opção com check amarelo à direita quando escolhida." },
        props: { value: { en: "Option value.", pt: "Valor da opção." } },
      },
    },
    kb: {
      open: { en: "Opens the list.", pt: "Abre a lista." },
      navigate: { en: "Moves between options.", pt: "Navega entre opções." },
      choose: { en: "Chooses the option.", pt: "Escolhe a opção." },
      close: { en: "Closes without changing.", pt: "Fecha sem mudar." },
      letter: {
        en: "Jumps to the option that starts with the letter.",
        pt: "Pula para a opção que começa com a letra.",
      },
    },
  },
  dialog: {
    ex: { default: { title: { en: "Confirmation", pt: "Confirmação" } } },
    api: {
      Dialog: {
        description: { en: "Root.", pt: "Raiz." },
        props: { open: { en: "Open state control.", pt: "Controle de abertura." } },
      },
      trigger: {
        description: {
          en: "Open and close. Use `render` to use your own `Button`.",
          pt: "Abrem e fecham. Use `render` pra usar seu `Button`.",
        },
      },
      DialogPopup: {
        description: {
          en: "Centered window with a dimmed backdrop. Enters with a scale (160ms), leaves faster (120ms).",
          pt: "Janela centralizada com fundo escurecido. Entra em escala (160ms), sai mais rápido (120ms).",
        },
        props: {
          showClose: { en: "Shows the X in the corner.", pt: "Mostra o X no canto." },
          closeLabel: { en: "Label of the X for screen readers.", pt: "Rótulo do X para leitor de tela." },
          position: {
            en: "Where the window sits: centered, or anchored near the top (command palettes).",
            pt: "Onde a janela fica: no centro, ou ancorada perto do topo (paletas de comando).",
          },
          instant: {
            en: "Opens and closes without animation. Use it for dialogs opened by a keyboard shortcut.",
            pt: "Abre e fecha sem animação. Use em diálogos abertos por atalho de teclado.",
          },
        },
      },
      structure: {
        description: {
          en: "Content structure. Title and description are announced when it opens.",
          pt: "Estrutura do conteúdo. Título e descrição são anunciados ao abrir.",
        },
      },
    },
    kb: {
      esc: { en: "Closes and returns focus to the trigger.", pt: "Fecha e devolve o foco ao gatilho." },
      tab: { en: "Cycles only inside the window.", pt: "Circula só dentro da janela." },
    },
  },
  tooltip: {
    ex: {
      default: {
        title: { en: "Toolbar", pt: "Barra de ferramentas" },
        description: {
          en: "`Tip` is the shortcut. Move from one button to the next: with a `TooltipProvider`, after the first, tooltips appear instantly.",
          pt: "`Tip` é o atalho. Passe de um botão pro outro: com um `TooltipProvider`, depois do primeiro, os tooltips aparecem na hora.",
        },
      },
      parts: {
        title: { en: "Parts, sides, and arrow", pt: "Partes, lados e seta" },
        description: {
          en: "The parts give full control. `arrow` adds a pointer to the trigger.",
          pt: "As partes dão controle total. `arrow` adiciona uma seta apontando pro gatilho.",
        },
      },
    },
    api: {
      TooltipProvider: {
        description: {
          en: "Optional. Shares the delay between neighboring tooltips: after the first, the next ones open at once.",
          pt: "Opcional. Compartilha o atraso entre tooltips vizinhos: depois do primeiro, os próximos abrem na hora.",
        },
        props: {
          delay: { en: "Delay (ms) of the first tooltip.", pt: "Atraso (ms) do primeiro tooltip." },
          closeDelay: { en: "Delay (ms) before closing.", pt: "Atraso (ms) antes de fechar." },
        },
      },
      Tip: {
        description: {
          en: "Shortcut: wraps the trigger element and shows `content` in a tooltip. Same as `Tooltip` + `TooltipTrigger` + `TooltipPopup`; accepts `side`, `sideOffset`, and `arrow` too.",
          pt: "Atalho: envolve o elemento gatilho e mostra `content` num tooltip. Equivale a `Tooltip` + `TooltipTrigger` + `TooltipPopup`; aceita também `side`, `sideOffset` e `arrow`.",
        },
        props: {
          content: { en: "What the tooltip shows.", pt: "O que o tooltip mostra." },
          children: { en: "The trigger: a single element.", pt: "O gatilho: um único elemento." },
        },
      },
      root: { description: { en: "Root and trigger.", pt: "Raiz e gatilho." } },
      TooltipPopup: {
        description: {
          en: "Small bubble in the Material style. Grows from the trigger in 160ms; the following ones appear without animation.",
          pt: "Balão pequeno no estilo Material. Nasce do gatilho em 160ms; os seguintes aparecem sem animação.",
        },
        props: {
          side: { en: "Preferred side.", pt: "Lado preferido." },
          sideOffset: { en: "Distance from the trigger (px).", pt: "Distância do gatilho (px)." },
          arrow: { en: "Shows a pointer toward the trigger.", pt: "Mostra uma seta apontando pro gatilho." },
        },
      },
    },
    a11y: {
      focus: { en: "Also opens with keyboard focus.", pt: "Abre também com foco de teclado." },
      interactive: {
        en: "Don't put interactive content inside the tooltip: use a Popover.",
        pt: "Não coloque conteúdo interativo dentro do tooltip: use um Popover.",
      },
    },
  },
  tabs: {
    ex: { default: { title: { en: "Periods", pt: "Períodos" } } },
    api: {
      Tabs: {
        description: { en: "Root.", pt: "Raiz." },
        props: { value: { en: "Active tab.", pt: "Aba ativa." } },
      },
      TabsList: {
        description: {
          en: "List with the sliding indicator (160ms, strong ease-in-out).",
          pt: "Lista com o indicador que desliza (160ms, ease-in-out forte).",
        },
      },
      tab: {
        description: { en: "Tab and content, linked by `value`.", pt: "Aba e conteúdo, ligados pelo `value`." },
        props: { value: { en: "Tab identifier.", pt: "Identificador da aba." } },
      },
    },
    kb: {
      arrows: { en: "Moves between tabs.", pt: "Move entre abas." },
      homeEnd: { en: "First and last tab.", pt: "Primeira e última aba." },
    },
  },
  accordion: {
    ex: {
      default: { title: { en: "FAQ", pt: "Perguntas frequentes" } },
      chevron: { title: { en: "Chevron indicator", pt: "Indicador de chevron" } },
    },
    api: {
      Accordion: {
        description: {
          en: "Root. By default only one item stays open; pass `multiple` to allow several.",
          pt: "Raiz. Por padrão só um item fica aberto; passe `multiple` para permitir vários.",
        },
        props: {
          indicator: {
            en: "`\"prompt\"` shows a terminal `▸` marker and a brand rule beside the open panel. `\"chevron\"` is the classic chevron with hairlines.",
            pt: "`\"prompt\"` mostra um marcador `▸` de terminal e uma linha da cor da marca ao lado do painel aberto. `\"chevron\"` é o chevron clássico com linhas finas.",
          },
          value: { en: "Open items, as an array of item values. Controlled or initial.", pt: "Itens abertos, como array de valores dos itens. Controlado ou inicial." },
          multiple: { en: "Allows more than one item open at the same time.", pt: "Permite mais de um item aberto ao mesmo tempo." },
          onValueChange: { en: "Called when an item opens or closes.", pt: "Chamado ao abrir ou fechar um item." },
        },
      },
      AccordionItem: {
        description: { en: "One section, identified by `value`.", pt: "Uma seção, identificada pelo `value`." },
        props: { value: { en: "Item identifier.", pt: "Identificador do item." } },
      },
      AccordionTrigger: {
        description: {
          en: "Heading button. The `▸` marker turns 90° in 120ms (or the chevron 180° in 160ms) as the panel opens.",
          pt: "Botão do cabeçalho. O marcador `▸` gira 90° em 120ms (ou o chevron 180° em 160ms) enquanto o painel abre.",
        },
      },
      AccordionPanel: {
        description: {
          en: "Content. Animates its height and opacity in 160ms and is removed from the page while closed.",
          pt: "Conteúdo. Anima altura e opacidade em 160ms e sai da página enquanto fechado.",
        },
      },
    },
    kb: {
      toggle: { en: "Opens or closes the focused item.", pt: "Abre ou fecha o item em foco." },
      arrows: { en: "Moves focus between headings.", pt: "Move o foco entre os cabeçalhos." },
      homeEnd: { en: "Focuses the first or last heading.", pt: "Foca o primeiro ou o último cabeçalho." },
    },
    a11y: {
      structure: {
        en: "Each trigger sits inside a heading and is linked to its panel with `aria-expanded` and `aria-controls`.",
        pt: "Cada gatilho fica dentro de um título e é ligado ao painel com `aria-expanded` e `aria-controls`.",
      },
    },
  },
  alert: {
    ex: { default: { title: { en: "Variants", pt: "Variantes" } } },
    api: {
      Alert: {
        description: {
          en: "One log line: `[tag] time title - description`, with a colored rule on the left. An icon placed directly inside is allowed. Server component.",
          pt: "Uma linha de log: `[tag] hora título - descrição`, com uma linha colorida à esquerda. Um ícone colocado direto dentro é permitido. Componente de servidor.",
        },
        props: {
          variant: {
            en: "Level. `default`, `brand` and `destructive` still work as `info`, `warn` and `error`.",
            pt: "Nível. `default`, `brand` e `destructive` continuam funcionando como `info`, `warn` e `error`.",
          },
          tag: { en: "Text of the level chip. Defaults to the level name.", pt: "Texto do selo de nível. Por padrão, o nome do nível." },
          time: { en: "Optional timestamp shown after the tag.", pt: "Horário opcional mostrado depois do selo." },
        },
      },
      parts: {
        description: {
          en: "`AlertTitle` and `AlertDescription` share the line, joined by a dash. `AlertAction` pins a button or link to the right end.",
          pt: "`AlertTitle` e `AlertDescription` dividem a linha, unidos por um traço. `AlertAction` fixa um botão ou link na ponta direita.",
        },
      },
    },
    a11y: {
      role: {
        en: "`warn` and `error` use `role=\"alert\"`, announced right away. `info` and `success` use `role=\"status\"`, announced politely. Pass `role` to override.",
        pt: "`warn` e `error` usam `role=\"alert\"`, anunciado na hora. `info` e `success` usam `role=\"status\"`, anunciado com calma. Passe `role` para trocar.",
      },
    },
  },
  "password-input": {
    ex: { default: { title: { en: "With label", pt: "Com label" } } },
    api: {
      PasswordInput: {
        description: {
          en: "`Input` with an eye button that toggles between hiding and showing the text. Inside a `Field`, it keeps its label and error.",
          pt: "`Input` com um botão de olho que alterna entre esconder e mostrar o texto. Dentro de um `Field`, mantém label e erro.",
        },
        props: {
          showLabel: { en: "Accessible name of the button while the text is hidden.", pt: "Nome acessível do botão enquanto o texto está escondido." },
          hideLabel: { en: "Accessible name of the button while the text is visible.", pt: "Nome acessível do botão enquanto o texto está visível." },
          props: { en: "Everything from `Input`, except `type`.", pt: "Tudo do `Input`, exceto `type`." },
        },
      },
    },
    a11y: {
      toggle: {
        en: "The button is a real `<button>` with `aria-pressed` and a label that names the next action. Translate `showLabel` and `hideLabel` in other languages.",
        pt: "O botão é um `<button>` de verdade com `aria-pressed` e um rótulo que nomeia a próxima ação. Traduza `showLabel` e `hideLabel` em outros idiomas.",
      },
    },
  },
  "otp-input": {
    ex: { default: { title: { en: "Six digits", pt: "Seis dígitos" } } },
    api: {
      OtpInput: {
        description: {
          en: "One box per digit, built on Base UI's OTP Field. Numeric by default, with autofill from SMS (`autocomplete=\"one-time-code\"`).",
          pt: "Uma caixa por dígito, feito sobre o OTP Field do Base UI. Numérico por padrão, com preenchimento por SMS (`autocomplete=\"one-time-code\"`).",
        },
        props: {
          length: { en: "Number of boxes.", pt: "Número de caixas." },
          value: { en: "Code as a string. Controlled or initial.", pt: "Código como string. Controlado ou inicial." },
          onValueChange: { en: "Called on every change.", pt: "Chamado a cada mudança." },
          onValueComplete: { en: "Called when every box is filled.", pt: "Chamado quando todas as caixas estão preenchidas." },
          invalid: { en: "Paints the boxes with the error color.", pt: "Pinta as caixas com a cor de erro." },
        },
      },
    },
    kb: {
      type: { en: "Fills the box and moves to the next one.", pt: "Preenche a caixa e vai para a próxima." },
      backspace: { en: "Clears the box and goes back to the previous one.", pt: "Limpa a caixa e volta para a anterior." },
      arrows: { en: "Moves between boxes.", pt: "Move entre as caixas." },
      paste: { en: "Pasting a full code fills every box.", pt: "Colar um código completo preenche todas as caixas." },
    },
    a11y: {
      group: {
        en: "The boxes sit in a `role=\"group\"` labelled \"Verification code\" (change it with `aria-label`); each box after the first is named \"Digit N of 6\".",
        pt: "As caixas ficam em um `role=\"group\"` com o nome \"Verification code\" (mude com `aria-label`); cada caixa depois da primeira se chama \"Digit N of 6\".",
      },
    },
  },
  "auth-shell": {
    ex: { default: { title: { en: "Sign-in", pt: "Login" } } },
    api: {
      AuthShell: {
        description: {
          en: "Centered card with a header (logo, title, description), your form as children and a footer line. Server component. It has no logo of its own: pass yours.",
          pt: "Card centralizado com cabeçalho (logo, título, descrição), seu formulário como filhos e uma linha de rodapé. Componente de servidor. Não tem logo próprio: passe o seu.",
        },
        props: {
          logo: { en: "Mark shown above the title.", pt: "Marca mostrada acima do título." },
          title: { en: "Card title.", pt: "Título do card." },
          description: { en: "Line under the title.", pt: "Linha abaixo do título." },
          footer: { en: "Line under the card, such as a link to the other screen.", pt: "Linha abaixo do card, como um link para outra tela." },
          centered: { en: "Centers the header text.", pt: "Centraliza o texto do cabeçalho." },
          size: { en: "Card width: 384px (`sm`) or 448px (`md`).", pt: "Largura do card: 384px (`sm`) ou 448px (`md`)." },
        },
      },
    },
  },
  "pricing-toggle": {
    ex: { default: { title: { en: "Monthly and yearly", pt: "Mensal e anual" } } },
    api: {
      PricingToggle: {
        description: {
          en: "Switch between two billing periods, with an optional badge. Controlled: you keep `yearly` and compute the prices.",
          pt: "Alterna entre dois períodos de cobrança, com um selo opcional. Controlado: você guarda `yearly` e calcula os preços.",
        },
        props: {
          yearly: { en: "Whether yearly billing is selected.", pt: "Se a cobrança anual está selecionada." },
          onYearlyChange: { en: "Called when the switch flips.", pt: "Chamado quando o alternador muda." },
          badge: { en: "Content of the badge, such as \"Save 20%\".", pt: "Conteúdo do selo, como \"Save 20%\"." },
          monthlyLabel: { en: "Text of the monthly side.", pt: "Texto do lado mensal." },
          yearlyLabel: { en: "Text of the yearly side. It also names the switch.", pt: "Texto do lado anual. Também dá nome ao alternador." },
        },
      },
    },
    a11y: {
      switch: {
        en: "It is a `role=\"switch\"` named by `yearlyLabel`: on means yearly billing.",
        pt: "É um `role=\"switch\"` com o nome de `yearlyLabel`: ligado significa cobrança anual.",
      },
    },
  },
  avatar: {
    ex: { default: { title: { en: "Image and fallback", pt: "Imagem e substituto" } } },
    api: {
      Avatar: {
        description: {
          en: "Round container, 40px by default. Change the size with `className` (e.g. `size-12`).",
          pt: "Contêiner redondo, de 40px por padrão. Mude o tamanho com `className` (ex.: `size-12`).",
        },
      },
      AvatarImage: {
        description: {
          en: "The picture. It only shows after loading successfully.",
          pt: "A foto. Só aparece depois de carregar com sucesso.",
        },
      },
      AvatarFallback: {
        description: {
          en: "Shown while the image loads or if it fails (usually initials).",
          pt: "Aparece enquanto a imagem carrega ou se ela falhar (geralmente as iniciais).",
        },
        props: { delay: { en: "Wait (ms) before showing, to avoid a flash on fast loads.", pt: "Espera (ms) antes de aparecer, para evitar um piscar em carregamentos rápidos." } },
      },
    },
    a11y: {
      alt: {
        en: "Give `AvatarImage` an `alt` with the person's name, or an empty `alt` when the name is written next to it.",
        pt: "Dê ao `AvatarImage` um `alt` com o nome da pessoa, ou um `alt` vazio quando o nome já está escrito ao lado.",
      },
    },
  },
  "dropdown-menu": {
    ex: { default: { title: { en: "Actions menu", pt: "Menu de ações" } } },
    api: {
      DropdownMenu: {
        description: {
          en: "Root. Also used for each submenu, through `DropdownMenuSub`.",
          pt: "Raiz. Também serve para cada submenu, por meio do `DropdownMenuSub`.",
        },
        props: { open: { en: "Open state control.", pt: "Controle de abertura." } },
      },
      trigger: {
        description: {
          en: "Button that opens the menu. Use `render` to use your own `Button`.",
          pt: "Botão que abre o menu. Use `render` pra usar seu `Button`.",
        },
      },
      DropdownMenuPopup: {
        description: {
          en: "List of actions. Opens from the trigger in 160ms, closes in 120ms.",
          pt: "Lista de ações. Abre do gatilho em 160ms, fecha em 120ms.",
        },
        props: {
          side: { en: "Preferred side. Submenus open to the right on their own.", pt: "Lado preferido. Submenus abrem à direita sozinhos." },
          align: { en: "Alignment relative to the trigger.", pt: "Alinhamento em relação ao gatilho." },
          sideOffset: { en: "Distance from the trigger (px).", pt: "Distância do gatilho (px)." },
        },
      },
      DropdownMenuItem: {
        description: {
          en: "Action. The menu closes after it is chosen.",
          pt: "Ação. O menu fecha depois que ela é escolhida.",
        },
        props: {
          variant: { en: "Use `destructive` for dangerous actions.", pt: "Use `destructive` para ações perigosas." },
          onClick: { en: "Called when the item is chosen.", pt: "Chamado ao escolher o item." },
        },
      },
      checkable: {
        description: {
          en: "Items with a check. The checkbox item toggles on its own; radio items live inside a `DropdownMenuRadioGroup`.",
          pt: "Itens com check. O item checkbox alterna sozinho; os itens de rádio ficam dentro de um `DropdownMenuRadioGroup`.",
        },
      },
      structure: {
        description: {
          en: "Organize the list: `DropdownMenuGroup` with a `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuShortcut`, and `DropdownMenuSub` with `DropdownMenuSubTrigger`.",
          pt: "Organize a lista: `DropdownMenuGroup` com um `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuShortcut` e `DropdownMenuSub` com `DropdownMenuSubTrigger`.",
        },
      },
    },
    kb: {
      open: { en: "Opens the menu from the trigger.", pt: "Abre o menu a partir do gatilho." },
      navigate: { en: "Moves between items.", pt: "Navega entre itens." },
      choose: { en: "Chooses the item.", pt: "Escolhe o item." },
      sub: { en: "Opens and closes a submenu.", pt: "Abre e fecha um submenu." },
      close: { en: "Closes and returns focus to the trigger.", pt: "Fecha e devolve o foco ao gatilho." },
      letter: { en: "Jumps to the item that starts with the letter.", pt: "Pula para o item que começa com a letra." },
    },
    a11y: {
      shortcut: {
        en: "`DropdownMenuShortcut` only displays the hint. Wire up the real shortcut yourself.",
        pt: "`DropdownMenuShortcut` só mostra a dica. Ligue o atalho de verdade por conta própria.",
      },
    },
  },
  popover: {
    ex: { default: { title: { en: "With a form", pt: "Com formulário" } } },
    api: {
      Popover: {
        description: { en: "Root.", pt: "Raiz." },
        props: { open: { en: "Open state control.", pt: "Controle de abertura." } },
      },
      trigger: {
        description: {
          en: "Open and close. Use `render` to use your own `Button`.",
          pt: "Abrem e fecham. Use `render` pra usar seu `Button`.",
        },
      },
      PopoverPopup: {
        description: {
          en: "Panel that grows from the trigger in 160ms and closes in 120ms.",
          pt: "Painel que nasce do gatilho em 160ms e fecha em 120ms.",
        },
        props: {
          side: { en: "Preferred side.", pt: "Lado preferido." },
          align: { en: "Alignment relative to the trigger.", pt: "Alinhamento em relação ao gatilho." },
          sideOffset: { en: "Distance from the trigger (px).", pt: "Distância do gatilho (px)." },
        },
      },
      structure: {
        description: {
          en: "Title and description are linked to the panel for screen readers.",
          pt: "Título e descrição ficam ligados ao painel para leitores de tela.",
        },
      },
    },
    kb: {
      open: { en: "Opens or closes from the trigger.", pt: "Abre ou fecha a partir do gatilho." },
      esc: { en: "Closes and returns focus to the trigger.", pt: "Fecha e devolve o foco ao gatilho." },
      tab: { en: "Moves through the content of the panel.", pt: "Percorre o conteúdo do painel." },
    },
    a11y: {
      interactive: {
        en: "Unlike a Tooltip, a Popover can hold buttons and fields. Use `PopoverTitle` so the panel has a name.",
        pt: "Diferente do Tooltip, o Popover pode ter botões e campos. Use `PopoverTitle` para o painel ter um nome.",
      },
    },
  },
  "radio-group": {
    ex: { default: { title: { en: "Plans", pt: "Planos" } } },
    api: {
      RadioGroup: {
        description: {
          en: "Group of exclusive options. Give it a name with `aria-label` or a visible label.",
          pt: "Grupo de opções excludentes. Dê um nome com `aria-label` ou um label visível.",
        },
        props: {
          value: { en: "Controlled or initial value.", pt: "Valor controlado ou inicial." },
          onValueChange: { en: "Called when another option is chosen.", pt: "Chamado ao escolher outra opção." },
        },
      },
      Radio: {
        description: {
          en: "One option. The dot inside grows in 160ms when selected.",
          pt: "Uma opção. O ponto interno cresce em 160ms ao ser escolhida.",
        },
        props: { value: { en: "Option value.", pt: "Valor da opção." } },
      },
    },
    kb: {
      arrows: { en: "Moves the selection between options.", pt: "Move a seleção entre as opções." },
      tab: { en: "Enters and leaves the group.", pt: "Entra e sai do grupo." },
      space: { en: "Selects the focused option.", pt: "Escolhe a opção em foco." },
    },
    a11y: {
      label: {
        en: "Wrap each `Radio` in a `<label>` so its text is the accessible name and clicking the text selects it.",
        pt: "Envolva cada `Radio` num `<label>` para o texto ser o nome acessível e clicar nele escolher a opção.",
      },
    },
  },
  slider: {
    ex: { default: { title: { en: "Single value and range", pt: "Valor único e faixa" } } },
    api: {
      Slider: {
        description: {
          en: "A number renders one thumb; an array renders one thumb per value (a range).",
          pt: "Um número renderiza um polegar; um array renderiza um polegar por valor (uma faixa).",
        },
        props: {
          value: { en: "Controlled or initial value: a number or an array of numbers.", pt: "Valor controlado ou inicial: um número ou um array de números." },
          onValueChange: { en: "Called while dragging.", pt: "Chamado enquanto arrasta." },
          onValueCommitted: { en: "Called when you let go.", pt: "Chamado ao soltar." },
          range: { en: "Limits and step.", pt: "Limites e passo." },
          thumbLabel: {
            en: "Accessible name of each thumb. Use an array for a range.",
            pt: "Nome acessível de cada polegar. Use um array para uma faixa.",
          },
        },
      },
    },
    kb: {
      arrows: { en: "Changes the value by one step.", pt: "Muda o valor em um passo." },
      pageKeys: { en: "Changes the value by a larger step.", pt: "Muda o valor em um passo maior." },
      homeEnd: { en: "Jumps to the minimum or maximum.", pt: "Vai para o mínimo ou o máximo." },
    },
    a11y: {
      label: {
        en: "Each thumb needs an accessible name: use `thumbLabel` or a visible label.",
        pt: "Cada polegar precisa de um nome acessível: use `thumbLabel` ou um label visível.",
      },
    },
  },
  progress: {
    ex: { default: { title: { en: "Determinate and indeterminate", pt: "Determinado e indeterminado" } } },
    api: {
      Progress: {
        description: {
          en: "Bar from 0 to 100. The fill moves in 240ms. With a `null` value it becomes indeterminate.",
          pt: "Barra de 0 a 100. O preenchimento anda em 240ms. Com valor `null` ela fica indeterminada.",
        },
        props: {
          value: { en: "Current progress, or `null` when unknown.", pt: "Progresso atual, ou `null` quando não se sabe." },
          range: { en: "Limits of the scale.", pt: "Limites da escala." },
        },
      },
      parts: {
        description: {
          en: "`ProgressLabel` names the bar and `ProgressValue` shows the percentage.",
          pt: "`ProgressLabel` dá nome à barra e `ProgressValue` mostra a porcentagem.",
        },
      },
    },
    a11y: {
      role: {
        en: "It has `role=\"progressbar\"` with `aria-valuenow`. Always name it with `ProgressLabel` or `aria-label`.",
        pt: "Tem `role=\"progressbar\"` com `aria-valuenow`. Sempre dê um nome com `ProgressLabel` ou `aria-label`.",
      },
    },
  },
  toast: {
    ex: { default: { title: { en: "Success and error", pt: "Sucesso e erro" } } },
    api: {
      ToastProvider: {
        description: {
          en: "Wrap your app once. It renders the stack of notifications in the bottom-right corner.",
          pt: "Envolva o app uma vez. Ele renderiza a pilha de notificações no canto inferior direito.",
        },
        props: {
          timeout: { en: "Time (ms) before a toast dismisses itself. Use `0` to keep it.", pt: "Tempo (ms) até o toast sumir sozinho. Use `0` para mantê-lo." },
          limit: { en: "Maximum number of visible toasts.", pt: "Número máximo de toasts visíveis." },
          closeLabel: { en: "Label of the X for screen readers.", pt: "Rótulo do X para leitor de tela." },
        },
      },
      useToast: {
        description: {
          en: "Hook that returns the manager. Call `add({ title, description, type })` to show a toast; it also has `close` and `update`.",
          pt: "Hook que devolve o gerenciador. Chame `add({ title, description, type })` para mostrar um toast; ele também tem `close` e `update`.",
        },
        props: {
          content: { en: "Text shown in the toast.", pt: "Texto mostrado no toast." },
          type: { en: "Free text. `success` and `error` get a colored border.", pt: "Texto livre. `success` e `error` ganham uma borda colorida." },
        },
      },
      createToastManager: {
        description: {
          en: "Creates a manager you can use outside React (pass it to `ToastProvider` as `toastManager`).",
          pt: "Cria um gerenciador que funciona fora do React (passe ao `ToastProvider` como `toastManager`).",
        },
      },
    },
    kb: {
      f6: { en: "Moves focus to the toast area.", pt: "Move o foco para a área dos toasts." },
      tab: { en: "Moves between toasts and their close buttons.", pt: "Navega entre os toasts e seus botões de fechar." },
      activate: { en: "Dismisses the toast when its X is focused.", pt: "Fecha o toast quando o X dele está em foco." },
    },
    a11y: {
      live: {
        en: "Toasts are announced by screen readers without taking focus. Don't put the only copy of important information in a toast.",
        pt: "Toasts são anunciados por leitores de tela sem tirar o foco. Não deixe a única cópia de uma informação importante num toast.",
      },
      pause: {
        en: "The timer pauses on hover and while the window is out of focus, so there is time to read.",
        pt: "O tempo pausa ao passar o mouse e quando a janela perde o foco, para dar tempo de ler.",
      },
    },
  },
  logo: {
    ex: {
      default: {
        title: { en: "Mark, wordmark, and prompt", pt: "Marca, wordmark e prompt" },
        description: {
          en: "Three sizes (`sm`, `md`, `lg`). The mark follows the theme, and the prompt's caret stays still with reduced motion.",
          pt: "Três tamanhos (`sm`, `md`, `lg`). A marca acompanha o tema, e o cursor do prompt fica parado com movimento reduzido.",
        },
      },
      link: {
        title: { en: "As a link", pt: "Como link" },
        description: {
          en: "With `render`, the logo becomes an `<a>` (or Next's `<Link>`).",
          pt: "Com `render`, o logo vira um `<a>` (ou `<Link>` do Next).",
        },
      },
    },
    api: {
      Logo: {
        description: {
          en: "The cd/ui logo. Client component (uses `render`). The prompt variant's blink needs the theme CSS (`animate-caret`).",
          pt: "O logo do cd/ui. Componente de cliente (usa `render`). O piscar da variante prompt precisa do CSS do tema (`animate-caret`).",
        },
        props: {
          variant: { en: "Glyph, text, or terminal line.", pt: "Glifo, texto ou linha de terminal." },
          size: { en: "Size of the glyph or the text.", pt: "Tamanho do glifo ou do texto." },
        },
      },
    },
    a11y: {
      name: {
        en: "The mark is an image named \"cd/ui\"; the wordmark and prompt are named by their text. Inside an icon-only link, the mark names the link.",
        pt: "A marca é uma imagem chamada \"cd/ui\"; o wordmark e o prompt são nomeados pelo texto. Dentro de um link só com a marca, ela dá nome ao link.",
      },
    },
  },
  table: {
    ex: {
      default: { title: { en: "Invoices", pt: "Faturas" } },
      sticky: {
        title: { en: "Sticky header, compact, selected", pt: "Cabeçalho fixo, compacta, selecionada" },
        description: {
          en: "`stickyHeader` keeps the header while the rows scroll, `density` sets the row padding, and `data-state=\"selected\"` marks a row.",
          pt: "`stickyHeader` mantém o cabeçalho enquanto as linhas rolam, `density` define o espaçamento das linhas e `data-state=\"selected\"` marca uma linha.",
        },
      },
    },
    api: {
      Table: {
        description: {
          en: "`<table>` inside a container that scrolls sideways on small screens. Server component.",
          pt: "`<table>` dentro de um contêiner que rola para o lado em telas pequenas. Componente de servidor.",
        },
        props: {
          density: { en: "Row padding.", pt: "Espaçamento das linhas." },
          stickyHeader: {
            en: "Keeps the header visible while the rows scroll (the container gets a max height).",
            pt: "Mantém o cabeçalho visível enquanto as linhas rolam (o contêiner ganha altura máxima).",
          },
          ariaLabel: {
            en: "Names the scroll container as a region. It is keyboard-focusable either way, so you can scroll it with the arrow keys.",
            pt: "Dá nome ao contêiner de rolagem como região. Ele é focável por teclado de qualquer jeito, então dá pra rolar com as setas.",
          },
        },
      },
      sections: {
        description: {
          en: "`TableHeader`, `TableBody`, and `TableFooter` map to `<thead>`, `<tbody>`, and `<tfoot>`.",
          pt: "`TableHeader`, `TableBody` e `TableFooter` correspondem a `<thead>`, `<tbody>` e `<tfoot>`.",
        },
      },
      cells: {
        description: {
          en: "`TableRow`, `TableHead`, `TableCell`, and `TableCaption` map to `<tr>`, `<th>`, `<td>`, and `<caption>`.",
          pt: "`TableRow`, `TableHead`, `TableCell` e `TableCaption` correspondem a `<tr>`, `<th>`, `<td>` e `<caption>`.",
        },
        props: {
          numeric: {
            en: "On `TableHead` and `TableCell`: aligns right with equal-width digits.",
            pt: "Em `TableHead` e `TableCell`: alinha à direita com dígitos de largura igual.",
          },
        },
      },
    },
    a11y: {
      semantics: {
        en: "It keeps native table semantics. Use `TableHead` (`<th>`) for headers and `TableCaption` to name the table.",
        pt: "Mantém a semântica nativa de tabela. Use `TableHead` (`<th>`) nos cabeçalhos e `TableCaption` para dar nome à tabela.",
      },
    },
  },
};

const translations = { guides, categories, catalog, content };

export default translations;
