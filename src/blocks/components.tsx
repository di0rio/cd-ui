import type { ComponentType } from "react";
import { Contact01 } from "@/registry/cd/blocks/contact-01/contact-01";
import { Cta01 } from "@/registry/cd/blocks/cta-01/cta-01";
import { Faq01 } from "@/registry/cd/blocks/faq-01/faq-01";
import { Features01 } from "@/registry/cd/blocks/features-01/features-01";
import { Footer01 } from "@/registry/cd/blocks/footer-01/footer-01";
import { ForgotPassword01 } from "@/registry/cd/blocks/forgot-password-01/forgot-password-01";
import { Hero01 } from "@/registry/cd/blocks/hero-01/hero-01";
import { Hero02 } from "@/registry/cd/blocks/hero-02/hero-02";
import { Login01 } from "@/registry/cd/blocks/login-01/login-01";
import { Login02 } from "@/registry/cd/blocks/login-02/login-02";
import { NotFound01 } from "@/registry/cd/blocks/not-found-01/not-found-01";
import { Pricing01 } from "@/registry/cd/blocks/pricing-01/pricing-01";
import { Settings01 } from "@/registry/cd/blocks/settings-01/settings-01";
import { Signup01 } from "@/registry/cd/blocks/signup-01/signup-01";
import { Verify01 } from "@/registry/cd/blocks/verify-01/verify-01";

/** Separado do catálogo pra quem só precisa de nomes (header, busca) não puxar os blocos. */
export const blockComponents: Record<string, ComponentType> = {
  "login-01": Login01,
  "login-02": Login02,
  "signup-01": Signup01,
  "forgot-password-01": ForgotPassword01,
  "verify-01": Verify01,
  "hero-01": Hero01,
  "hero-02": Hero02,
  "features-01": Features01,
  "pricing-01": Pricing01,
  "cta-01": Cta01,
  "faq-01": Faq01,
  "footer-01": Footer01,
  "settings-01": Settings01,
  "contact-01": Contact01,
  "not-found-01": NotFound01,
};
