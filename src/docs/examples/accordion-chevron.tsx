import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/registry/cd/ui/accordion";

export default function AccordionChevron() {
  return (
    <Accordion className="w-full max-w-md" defaultValue={["install"]} indicator="chevron">
      <AccordionItem value="install">
        <AccordionTrigger>How do I install a component?</AccordionTrigger>
        <AccordionPanel>Run the shadcn CLI with the component URL. The file lands in your project and you own the code.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="theme">
        <AccordionTrigger>Can I change the colors?</AccordionTrigger>
        <AccordionPanel>Yes. Every color is a CSS variable in your globals.css, so you can swap the palette in one place.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
