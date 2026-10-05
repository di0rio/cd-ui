const metadata = {
  title: { en: "Blocks", pt: "Blocos" },
  description: {
    en: "Ready-made login, hero, pricing and settings blocks built with cd/ui. Copy them into your project with the shadcn CLI.",
    pt: "Blocos prontos de login, hero, preços e configurações feitos com cd/ui. Copie pro seu projeto com o shadcn CLI.",
  },
};

const index = {
  badge: { en: "{count} blocks", pt: "{count} blocos" },
  title: { en: "Blocks. Whole screens, ready to ship.", pt: "Blocos. Telas inteiras, prontas pra usar." },
  lead: {
    en: "Logins, heroes, pricing, settings and more, composed from cd/ui components. Validated forms, loading states and light/dark included. Install one with a single command and make it yours.",
    pt: "Logins, heroes, preços, configurações e mais, montados com os componentes do cd/ui. Formulários validados, estados de carregamento e claro/escuro inclusos. Instale um com um comando e deixe com a sua cara.",
  },
  open: { en: "Open {name}", pt: "Abrir {name}" },
};

const categories = {
  auth: { en: "authentication", pt: "autenticação" },
  marketing: { en: "marketing", pt: "marketing" },
  app: { en: "application", pt: "aplicação" },
};

const detail = {
  back: { en: "all blocks", pt: "todos os blocos" },
  installTitle: { en: "Install", pt: "Instalação" },
  installIntro: {
    en: "Adds the block and every cd/ui component it uses to your project:",
    pt: "Adiciona o bloco e todos os componentes do cd/ui que ele usa ao seu projeto:",
  },
  previewTitle: { en: "Preview", pt: "Preview" },
  openFull: { en: "open full page", pt: "abrir em tela cheia" },
  fullHint: {
    en: "The preview follows your window width: use the size toggle or the full page view to check mobile layouts.",
    pt: "O preview segue a largura da janela: use o seletor de tamanho ou a tela cheia pra conferir o layout no celular.",
  },
  devices: { en: "Preview size", pt: "Tamanho do preview" },
  desktop: { en: "Desktop", pt: "Desktop" },
  tablet: { en: "Tablet", pt: "Tablet" },
  mobile: { en: "Mobile", pt: "Celular" },
  frame: { en: "Block preview", pt: "Preview do bloco" },
  pager: { en: "Other blocks", pt: "Outros blocos" },
  previous: { en: "previous", pt: "anterior" },
  next: { en: "next", pt: "próximo" },
};

const items = {
  login01: {
    title: { en: "Login 01", pt: "Login 01" },
    description: {
      en: "Simple sign-in card with email, password, social login and Zod validation.",
      pt: "Card de login simples com e-mail, senha, login social e validação com Zod.",
    },
  },
  login02: {
    title: { en: "Login 02", pt: "Login 02" },
    description: {
      en: "Split-screen sign-in with a brand panel and testimonial.",
      pt: "Login em tela dividida, com painel da marca e depoimento.",
    },
  },
  signup01: {
    title: { en: "Signup 01", pt: "Cadastro 01" },
    description: {
      en: "Account creation card with password confirmation and terms checkbox.",
      pt: "Card de criação de conta com confirmação de senha e aceite dos termos.",
    },
  },
  forgotPassword01: {
    title: { en: "Forgot password 01", pt: "Esqueci a senha 01" },
    description: {
      en: "Password reset request that swaps to a confirmation message.",
      pt: "Pedido de redefinição de senha que troca por uma mensagem de confirmação.",
    },
  },
  verify01: {
    title: { en: "Verify 01", pt: "Verificação 01" },
    description: {
      en: "One-time-code verification with auto-advancing digit boxes and resend countdown.",
      pt: "Verificação por código com caixas que avançam sozinhas e contagem pra reenviar.",
    },
  },
  hero01: {
    title: { en: "Hero 01", pt: "Hero 01" },
    description: {
      en: "Centered hero with announcement pill, calls to action and a product window.",
      pt: "Hero centralizado com aviso de novidade, chamadas pra ação e janela do produto.",
    },
  },
  hero02: {
    title: { en: "Hero 02", pt: "Hero 02" },
    description: {
      en: "Split hero with copy, stats and a layered product visual.",
      pt: "Hero dividido com texto, números e um visual do produto em camadas.",
    },
  },
  features01: {
    title: { en: "Features 01", pt: "Recursos 01" },
    description: {
      en: "Bento-style feature grid with two wide cards.",
      pt: "Grade de recursos em estilo bento, com dois cards largos.",
    },
  },
  pricing01: {
    title: { en: "Pricing 01", pt: "Preços 01" },
    description: {
      en: "Three pricing tiers with a monthly/yearly toggle.",
      pt: "Três planos de preço com alternância mensal/anual.",
    },
  },
  cta01: {
    title: { en: "CTA 01", pt: "CTA 01" },
    description: {
      en: "High-contrast closing call-to-action banner.",
      pt: "Banner final de chamada pra ação, em alto contraste.",
    },
  },
  faq01: {
    title: { en: "FAQ 01", pt: "FAQ 01" },
    description: { en: "Two-column FAQ with an accordion.", pt: "Perguntas frequentes em duas colunas, com accordion." },
  },
  footer01: {
    title: { en: "Footer 01", pt: "Rodapé 01" },
    description: {
      en: "Site footer with brand, status, link columns and legal row.",
      pt: "Rodapé com marca, status, colunas de links e linha legal.",
    },
  },
  settings01: {
    title: { en: "Settings 01", pt: "Configurações 01" },
    description: {
      en: "Profile settings form with Zod validation and notification switches.",
      pt: "Formulário de perfil com validação Zod e chaves de notificação.",
    },
  },
  contact01: {
    title: { en: "Contact 01", pt: "Contato 01" },
    description: {
      en: "Contact page with details and a validated message form.",
      pt: "Página de contato com informações e formulário de mensagem validado.",
    },
  },
  notFound01: {
    title: { en: "Not found 01", pt: "Não encontrado 01" },
    description: {
      en: "404 page with an oversized status code and two ways back.",
      pt: "Página 404 com código gigante e dois caminhos de volta.",
    },
  },
};

const translations = { metadata, index, categories, detail, items };

export default translations;
