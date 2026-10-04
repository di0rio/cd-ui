import type { I18nUserConfig } from "better-intl";

export default {
  root: "./src",
  out: "./src/i18n/generated.ts",
  defaultLocale: "en",
  locales: ["en", "pt"],
  onMissing: "error",
  storage: { type: "cookie", key: "locale" },
} satisfies I18nUserConfig;
