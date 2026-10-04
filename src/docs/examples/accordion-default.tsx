import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/registry/cd/ui/accordion";

const faqs = [
  { value: "install", question: "How do I install a component?", answer: "Run the shadcn CLI with the component URL. The file lands in your project and you own the code." },
  { value: "theme", question: "Can I change the colors?", answer: "Yes. Every color is a CSS variable in your globals.css, so you can swap the palette in one place." },
  { value: "motion", question: "Does it respect reduced motion?", answer: "Yes. Transitions and animations are turned off for people who prefer reduced motion." },
];

export default function AccordionDefault() {
  return (
    <Accordion className="w-full max-w-md" defaultValue={["install"]}>
      {faqs.map((f) => (
        <AccordionItem key={f.value} value={f.value}>
          <AccordionTrigger>{f.question}</AccordionTrigger>
          <AccordionPanel>{f.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
