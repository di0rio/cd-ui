import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/registry/cd/ui/accordion";

const faqs = [
  {
    q: "Is there a free plan?",
    a: "Yes. The Hobby plan is free forever and includes up to three projects. Upgrade only when you need more.",
  },
  {
    q: "Can I change plans later?",
    a: "Anytime. Upgrades apply immediately and downgrades take effect at the end of your billing period.",
  },
  {
    q: "How does billing work for teams?",
    a: "You pay per active seat. Add or remove people whenever you like and we prorate the difference automatically.",
  },
  {
    q: "Do you offer refunds?",
    a: "If Acme isn't a fit, email us within 30 days of your first payment and we'll refund it, no questions asked.",
  },
  {
    q: "Where is my data stored?",
    a: "In encrypted storage in the region you choose at sign-up. You can export everything as CSV or JSON at any time.",
  },
];

/** Two-column FAQ: heading and contact link on the left, an accordion on the right. */
export function Faq01() {
  return (
    <section className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="text-balance font-bold font-heading text-3xl tracking-[-0.02em] sm:text-4xl">Questions, answered.</h2>
          <p className="mt-3 text-muted-foreground">
            Can&apos;t find what you&apos;re after?{" "}
            <a className="font-medium text-foreground underline decoration-brand underline-offset-4" href="#contact">
              Talk to a human
            </a>
            .
          </p>
        </div>
        <Accordion className="rounded-xl border bg-card px-5" defaultValue={["free"]}>
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={i === 0 ? "free" : faq.q}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionPanel>{faq.a}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
