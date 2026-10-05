import type { ComponentType } from "react";
import AccordionDefault from "@/docs/examples/accordion-default";
import AlertDefault from "@/docs/examples/alert-default";
import AvatarDefault from "@/docs/examples/avatar-default";
import DropdownMenuDefault from "@/docs/examples/dropdown-menu-default";
import PopoverDefault from "@/docs/examples/popover-default";
import ProgressDefault from "@/docs/examples/progress-default";
import RadioGroupDefault from "@/docs/examples/radio-group-default";
import SliderDefault from "@/docs/examples/slider-default";
import TableDefault from "@/docs/examples/table-default";
import ToastDefault from "@/docs/examples/toast-default";
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
import { t } from "@/i18n/generated";
import type { Dict } from "@/lib/dict";

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

/**
 * Os textos vêm do `t` (src/docs/t.ts), que depende do idioma da requisição:
 * por isso o conteúdo é montado por função, durante a renderização, e não num módulo estático.
 */
export function getContent(tr: Dict = t): Record<string, ComponentDoc> {
  const c = tr.docs.content;
  const className: Prop = { name: "className", type: "string", description: c.shared.className };
  const render: Prop = { name: "render", type: "ReactElement | (props) => ReactElement", description: c.shared.render };
  const validationMode = (def: string, description: string): Prop => ({
    name: "validationMode",
    type: '"onSubmit" | "onBlur" | "onChange"',
    default: def,
    description,
  });

  return {
    button: {
      examples: [
        { file: "button-default", title: c.button.ex.default.title, Component: ButtonDefault },
        { file: "button-sizes", title: c.button.ex.sizes.title, description: c.button.ex.sizes.description, Component: ButtonSizes },
        { file: "button-loading", title: c.button.ex.loading.title, description: c.button.ex.loading.description, Component: ButtonLoading },
        { file: "button-link", title: c.button.ex.link.title, description: c.button.ex.link.description, Component: ButtonLink },
      ],
      usage: `import { Button } from "@/components/ui/button"\n\n<Button variant="brand">get started</Button>`,
      api: [
        {
          name: "Button",
          base: "Button",
          description: c.button.api.Button.description,
          props: [
            { name: "variant", type: '"default" | "brand" | "outline" | "ghost" | "link" | "destructive"', default: '"default"', description: c.shared.visualStyle },
            { name: "size", type: '"sm" | "md" | "lg" | "icon" | "icon-sm"', default: '"md"', description: c.button.api.Button.props.size },
            { name: "loading", type: "boolean", default: "false", description: c.button.api.Button.props.loading },
            { name: "nativeButton", type: "boolean", default: "true", description: c.button.api.Button.props.nativeButton },
            render,
            className,
          ],
        },
      ],
      keyboard: [{ keys: ["Enter", "Space"], description: c.button.kb.enter }],
      accessibility: [c.button.a11y.iconOnly, c.button.a11y.loading],
    },
    badge: {
      examples: [{ file: "badge-default", title: c.badge.ex.default.title, Component: BadgeDefault }],
      usage: `import { Badge } from "@/components/ui/badge"\n\n<Badge variant="brand">new</Badge>`,
      api: [
        {
          name: "Badge",
          description: c.badge.api.Badge.description,
          props: [
            { name: "variant", type: '"default" | "brand" | "outline" | "muted" | "destructive"', default: '"default"', description: c.shared.visualStyle },
            className,
          ],
        },
      ],
    },
    card: {
      examples: [{ file: "card-default", title: c.card.ex.default.title, Component: CardDefault }],
      usage: `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"\n\n<Card>\n  <CardHeader>\n    <CardTitle>title</CardTitle>\n  </CardHeader>\n  <CardContent>content</CardContent>\n</Card>`,
      api: [
        { name: "Card", description: c.card.api.Card.description, props: [className] },
        { name: "CardHeader · CardTitle · CardDescription", description: c.card.api.header.description, props: [className] },
        { name: "CardContent · CardFooter", description: c.card.api.content.description, props: [className] },
      ],
    },
    kbd: {
      examples: [{ file: "kbd-default", title: c.kbd.ex.default.title, Component: KbdDefault }],
      usage: `import { Kbd } from "@/components/ui/kbd"\n\n<Kbd>Ctrl</Kbd> <Kbd>K</Kbd>`,
      api: [{ name: "Kbd", description: c.kbd.api.Kbd.description, props: [className] }],
    },
    separator: {
      examples: [{ file: "separator-default", title: c.separator.ex.default.title, Component: SeparatorDefault }],
      usage: `import { Separator } from "@/components/ui/separator"\n\n<Separator />`,
      api: [
        {
          name: "Separator",
          description: c.separator.api.Separator.description,
          props: [
            { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: c.separator.api.Separator.props.orientation },
            { name: "decorative", type: "boolean", default: "true", description: c.separator.api.Separator.props.decorative },
            className,
          ],
        },
      ],
    },
    skeleton: {
      examples: [{ file: "skeleton-default", title: c.skeleton.ex.default.title, Component: SkeletonDefault }],
      usage: `import { Skeleton } from "@/components/ui/skeleton"\n\n<Skeleton className="h-4 w-40" />`,
      api: [{ name: "Skeleton", description: c.skeleton.api.Skeleton.description, props: [className] }],
      accessibility: [c.skeleton.a11y.hidden],
    },
    spinner: {
      examples: [{ file: "spinner-default", title: c.spinner.ex.default.title, Component: SpinnerDefault }],
      usage: `import { Spinner } from "@/components/ui/spinner"\n\n<Spinner />`,
      api: [
        {
          name: "Spinner",
          description: c.spinner.api.Spinner.description,
          props: [{ name: "label", type: "string", default: '"Loading"', description: c.spinner.api.Spinner.props.label }, className],
        },
      ],
    },
    input: {
      examples: [{ file: "input-default", title: c.input.ex.default.title, Component: InputDefault }],
      usage: `import { Input } from "@/components/ui/input"\n\n<Input placeholder="your name" />`,
      api: [
        {
          name: "Input",
          base: "Input",
          description: c.input.api.Input.description,
          props: [{ name: "...props", type: "Input.Props", description: c.input.api.Input.props.props }, className],
        },
      ],
    },
    textarea: {
      examples: [{ file: "textarea-default", title: c.textarea.ex.default.title, Component: TextareaDefault }],
      usage: `import { Textarea } from "@/components/ui/textarea"\n\n<Textarea placeholder="message" />`,
      api: [
        {
          name: "Textarea",
          base: "Field.Control",
          description: c.textarea.api.Textarea.description,
          props: [{ name: "...props", type: 'ComponentProps<"textarea">', description: c.textarea.api.Textarea.props.props }, className],
        },
      ],
    },
    field: {
      examples: [{ file: "field-default", title: c.field.ex.default.title, description: c.field.ex.default.description, Component: FieldDefault }],
      usage: `import { Field, FieldError, FieldLabel } from "@/components/ui/field"\nimport { Input } from "@/components/ui/input"\n\n<Field name="email">\n  <FieldLabel>email</FieldLabel>\n  <Input type="email" />\n  <FieldError />\n</Field>`,
      api: [
        {
          name: "Field",
          base: "Field.Root",
          description: c.field.api.Field.description,
          props: [
            { name: "name", type: "string", description: c.field.api.Field.props.name },
            { name: "validate", type: "(value) => string | string[] | null", description: c.field.api.Field.props.validate },
            validationMode(c.field.api.Field.props.validationModeDefault, c.shared.validationMode),
            { name: "disabled · invalid", type: "boolean", description: c.field.api.Field.props.disabledInvalid },
            className,
          ],
        },
        { name: "FieldLabel", base: "Field.Label", description: c.field.api.FieldLabel.description, props: [className] },
        { name: "FieldDescription", base: "Field.Description", description: c.field.api.FieldDescription.description, props: [className] },
        {
          name: "FieldError",
          base: "Field.Error",
          description: c.field.api.FieldError.description,
          props: [{ name: "match", type: "keyof ValidityState | boolean", description: c.field.api.FieldError.props.match }, className],
        },
      ],
      accessibility: [c.field.a11y.error, c.field.a11y.label],
    },
    form: {
      examples: [{ file: "form-zod", title: c.form.ex.zod.title, description: c.form.ex.zod.description, Component: FormZod }],
      usage: `import { z } from "zod"\nimport { Form } from "@/components/ui/form"\nimport { Field, FieldError, FieldLabel } from "@/components/ui/field"\nimport { Input } from "@/components/ui/input"\n\nconst schema = z.object({ email: z.email("invalid email") })\n\n<Form schema={schema} onSubmit={(values) => save(values)}>\n  <Field name="email">\n    <FieldLabel>email</FieldLabel>\n    <Input inputMode="email" />\n    <FieldError />\n  </Field>\n</Form>`,
      api: [
        {
          name: "Form",
          base: "Form",
          description: c.form.api.Form.description,
          props: [
            { name: "schema", type: "ZodObject", description: c.form.api.Form.props.schema },
            { name: "onSubmit", type: "(values: z.output<schema>) => void | Promise<void>", description: c.form.api.Form.props.onSubmit },
            validationMode('"onBlur"', c.form.api.Form.props.validationMode),
            { name: "errors", type: "Record<string, string | string[]>", description: c.form.api.Form.props.errors },
            className,
          ],
        },
      ],
      accessibility: [c.form.a11y.errors, c.form.a11y.focus, c.form.a11y.inputMode],
    },
    checkbox: {
      examples: [
        { file: "checkbox-default", title: c.checkbox.ex.default.title, Component: CheckboxDefault },
        { file: "checkbox-indeterminate", title: c.checkbox.ex.indeterminate.title, description: c.checkbox.ex.indeterminate.description, Component: CheckboxIndeterminate },
      ],
      usage: `import { Checkbox } from "@/components/ui/checkbox"\n\n<label className="flex items-center gap-2">\n  <Checkbox /> I accept the terms\n</label>`,
      api: [
        {
          name: "Checkbox",
          base: "Checkbox.Root",
          description: c.checkbox.api.Checkbox.description,
          props: [
            { name: "checked · defaultChecked", type: "boolean", description: c.shared.controlledOrInitial },
            { name: "onCheckedChange", type: "(checked: boolean) => void", description: c.checkbox.api.Checkbox.props.onCheckedChange },
            { name: "indeterminate", type: "boolean", default: "false", description: c.checkbox.api.Checkbox.props.indeterminate },
            { name: "name · value", type: "string", description: c.shared.formSubmit },
            className,
          ],
        },
      ],
      keyboard: [{ keys: ["Space"], description: c.checkbox.kb.space }],
    },
    switch: {
      examples: [{ file: "switch-default", title: c.switch.ex.default.title, Component: SwitchDefault }],
      usage: `import { Switch } from "@/components/ui/switch"\n\n<Switch defaultChecked />`,
      api: [
        {
          name: "Switch",
          base: "Switch.Root",
          description: c.switch.api.Switch.description,
          props: [
            { name: "checked · defaultChecked", type: "boolean", description: c.shared.controlledOrInitial },
            { name: "onCheckedChange", type: "(checked: boolean) => void", description: c.switch.api.Switch.props.onCheckedChange },
            className,
          ],
        },
      ],
      keyboard: [{ keys: ["Space", "Enter"], description: c.switch.kb.toggle }],
    },
    select: {
      examples: [{ file: "select-default", title: c.select.ex.default.title, Component: SelectDefault }],
      usage: `import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "@/components/ui/select"\n\n<Select items={items} defaultValue="next">\n  <SelectTrigger><SelectValue /></SelectTrigger>\n  <SelectPopup>\n    {items.map((i) => <SelectItem key={i.value} value={i.value}>{i.label}</SelectItem>)}\n  </SelectPopup>\n</Select>`,
      api: [
        {
          name: "Select",
          base: "Select.Root",
          description: c.select.api.Select.description,
          props: [
            { name: "items", type: "{ value, label }[]", description: c.select.api.Select.props.items },
            { name: "value · defaultValue", type: "string", description: c.select.api.Select.props.value },
            { name: "onValueChange", type: "(value) => void", description: c.select.api.Select.props.onValueChange },
            { name: "name", type: "string", description: c.shared.formSubmit },
          ],
        },
        { name: "SelectTrigger · SelectValue", base: "Select.Trigger · Select.Value", description: c.select.api.trigger.description, props: [className] },
        { name: "SelectPopup", base: "Select.Popup", description: c.select.api.SelectPopup.description, props: [className] },
        {
          name: "SelectItem",
          base: "Select.Item",
          description: c.select.api.SelectItem.description,
          props: [{ name: "value", type: "string", description: c.select.api.SelectItem.props.value }, className],
        },
      ],
      keyboard: [
        { keys: ["Space", "Enter", "↓"], description: c.select.kb.open },
        { keys: ["↑", "↓"], description: c.select.kb.navigate },
        { keys: ["Enter"], description: c.select.kb.choose },
        { keys: ["Esc"], description: c.select.kb.close },
        { keys: ["A-Z"], description: c.select.kb.letter },
      ],
    },
    dialog: {
      examples: [{ file: "dialog-default", title: c.dialog.ex.default.title, Component: DialogDefault }],
      usage: `import { Dialog, DialogPopup, DialogTitle, DialogTrigger } from "@/components/ui/dialog"\n\n<Dialog>\n  <DialogTrigger render={<Button />}>open</DialogTrigger>\n  <DialogPopup>\n    <DialogTitle>title</DialogTitle>\n  </DialogPopup>\n</Dialog>`,
      api: [
        {
          name: "Dialog",
          base: "Dialog.Root",
          description: c.dialog.api.Dialog.description,
          props: [{ name: "open · defaultOpen · onOpenChange", type: "boolean / (open) => void", description: c.dialog.api.Dialog.props.open }],
        },
        { name: "DialogTrigger · DialogClose", base: "Dialog.Trigger · Dialog.Close", description: c.dialog.api.trigger.description, props: [render] },
        {
          name: "DialogPopup",
          base: "Dialog.Popup",
          description: c.dialog.api.DialogPopup.description,
          props: [
            { name: "showClose", type: "boolean", default: "true", description: c.dialog.api.DialogPopup.props.showClose },
            { name: "closeLabel", type: "string", default: '"Close"', description: c.dialog.api.DialogPopup.props.closeLabel },
            { name: "position", type: '"center" | "top"', default: '"center"', description: c.dialog.api.DialogPopup.props.position },
            { name: "instant", type: "boolean", default: "false", description: c.dialog.api.DialogPopup.props.instant },
            className,
          ],
        },
        { name: "DialogHeader · DialogTitle · DialogDescription · DialogFooter", description: c.dialog.api.structure.description, props: [className] },
      ],
      keyboard: [
        { keys: ["Esc"], description: c.dialog.kb.esc },
        { keys: ["Tab"], description: c.dialog.kb.tab },
      ],
    },
    tooltip: {
      examples: [{ file: "tooltip-default", title: c.tooltip.ex.default.title, description: c.tooltip.ex.default.description, Component: TooltipDefault }],
      usage: `import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"\n\n<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger aria-label="Help" onClick={openHelp} render={<Button />}>?</TooltipTrigger>\n    <TooltipPopup>help</TooltipPopup>\n  </Tooltip>\n</TooltipProvider>`,
      api: [
        {
          name: "TooltipProvider",
          base: "Tooltip.Provider",
          description: c.tooltip.api.TooltipProvider.description,
          props: [{ name: "delay", type: "number", default: "400", description: c.tooltip.api.TooltipProvider.props.delay }],
        },
        { name: "Tooltip · TooltipTrigger", base: "Tooltip.Root · Tooltip.Trigger", description: c.tooltip.api.root.description, props: [render] },
        {
          name: "TooltipPopup",
          base: "Tooltip.Popup",
          description: c.tooltip.api.TooltipPopup.description,
          props: [
            { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: c.tooltip.api.TooltipPopup.props.side },
            { name: "sideOffset", type: "number", default: "6", description: c.tooltip.api.TooltipPopup.props.sideOffset },
            className,
          ],
        },
      ],
      accessibility: [c.tooltip.a11y.focus, c.tooltip.a11y.interactive],
    },
    tabs: {
      examples: [{ file: "tabs-default", title: c.tabs.ex.default.title, Component: TabsDefault }],
      usage: `import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"\n\n<Tabs defaultValue="a">\n  <TabsList>\n    <TabsTab value="a">A</TabsTab>\n    <TabsTab value="b">B</TabsTab>\n  </TabsList>\n  <TabsPanel value="a">…</TabsPanel>\n</Tabs>`,
      api: [
        {
          name: "Tabs",
          base: "Tabs.Root",
          description: c.tabs.api.Tabs.description,
          props: [{ name: "value · defaultValue · onValueChange", type: "any", description: c.tabs.api.Tabs.props.value }, className],
        },
        { name: "TabsList", base: "Tabs.List", description: c.tabs.api.TabsList.description, props: [className] },
        {
          name: "TabsTab · TabsPanel",
          base: "Tabs.Tab · Tabs.Panel",
          description: c.tabs.api.tab.description,
          props: [{ name: "value", type: "any", description: c.tabs.api.tab.props.value }, className],
        },
      ],
      keyboard: [
        { keys: ["←", "→"], description: c.tabs.kb.arrows },
        { keys: ["Home", "End"], description: c.tabs.kb.homeEnd },
      ],
    },
    accordion: {
      examples: [{ file: "accordion-default", title: c.accordion.ex.default.title, Component: AccordionDefault }],
      usage: `import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger } from "@/components/ui/accordion"\n\n<Accordion defaultValue={["a"]}>\n  <AccordionItem value="a">\n    <AccordionTrigger>Question</AccordionTrigger>\n    <AccordionPanel>Answer</AccordionPanel>\n  </AccordionItem>\n</Accordion>`,
      api: [
        {
          name: "Accordion",
          base: "Accordion.Root",
          description: c.accordion.api.Accordion.description,
          props: [
            { name: "value · defaultValue", type: "string[]", description: c.accordion.api.Accordion.props.value },
            { name: "multiple", type: "boolean", default: "false", description: c.accordion.api.Accordion.props.multiple },
            { name: "onValueChange", type: "(value: string[]) => void", description: c.accordion.api.Accordion.props.onValueChange },
            className,
          ],
        },
        {
          name: "AccordionItem",
          base: "Accordion.Item",
          description: c.accordion.api.AccordionItem.description,
          props: [{ name: "value", type: "string", description: c.accordion.api.AccordionItem.props.value }, className],
        },
        { name: "AccordionTrigger", base: "Accordion.Trigger", description: c.accordion.api.AccordionTrigger.description, props: [className] },
        { name: "AccordionPanel", base: "Accordion.Panel", description: c.accordion.api.AccordionPanel.description, props: [className] },
      ],
      keyboard: [
        { keys: ["Enter", "Space"], description: c.accordion.kb.toggle },
        { keys: ["↑", "↓"], description: c.accordion.kb.arrows },
        { keys: ["Home", "End"], description: c.accordion.kb.homeEnd },
      ],
      accessibility: [c.accordion.a11y.structure],
    },
    alert: {
      examples: [{ file: "alert-default", title: c.alert.ex.default.title, Component: AlertDefault }],
      usage: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"\n\n<Alert variant="brand">\n  <AlertTitle>Heads up</AlertTitle>\n  <AlertDescription>Something worth knowing.</AlertDescription>\n</Alert>`,
      api: [
        {
          name: "Alert",
          description: c.alert.api.Alert.description,
          props: [
            { name: "variant", type: '"default" | "brand" | "destructive"', default: '"default"', description: c.shared.visualStyle },
            className,
          ],
        },
        { name: "AlertTitle · AlertDescription", description: c.alert.api.parts.description, props: [className] },
      ],
      accessibility: [c.alert.a11y.role],
    },
    avatar: {
      examples: [{ file: "avatar-default", title: c.avatar.ex.default.title, Component: AvatarDefault }],
      usage: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"\n\n<Avatar>\n  <AvatarImage alt="Ada Lovelace" src="/ada.png" />\n  <AvatarFallback>AL</AvatarFallback>\n</Avatar>`,
      api: [
        { name: "Avatar", base: "Avatar.Root", description: c.avatar.api.Avatar.description, props: [className] },
        { name: "AvatarImage", base: "Avatar.Image", description: c.avatar.api.AvatarImage.description, props: [{ name: "alt", type: "string", description: c.avatar.a11y.alt }, className] },
        {
          name: "AvatarFallback",
          base: "Avatar.Fallback",
          description: c.avatar.api.AvatarFallback.description,
          props: [{ name: "delay", type: "number", description: c.avatar.api.AvatarFallback.props.delay }, className],
        },
      ],
      accessibility: [c.avatar.a11y.alt],
    },
    "dropdown-menu": {
      examples: [{ file: "dropdown-menu-default", title: c["dropdown-menu"].ex.default.title, Component: DropdownMenuDefault }],
      usage: `import { DropdownMenu, DropdownMenuItem, DropdownMenuPopup, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"\n\n<DropdownMenu>\n  <DropdownMenuTrigger render={<Button />}>Options</DropdownMenuTrigger>\n  <DropdownMenuPopup>\n    <DropdownMenuItem onClick={rename}>Rename</DropdownMenuItem>\n    <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>\n  </DropdownMenuPopup>\n</DropdownMenu>`,
      api: [
        {
          name: "DropdownMenu",
          base: "Menu.Root",
          description: c["dropdown-menu"].api.DropdownMenu.description,
          props: [{ name: "open · defaultOpen · onOpenChange", type: "boolean / (open) => void", description: c["dropdown-menu"].api.DropdownMenu.props.open }],
        },
        { name: "DropdownMenuTrigger", base: "Menu.Trigger", description: c["dropdown-menu"].api.trigger.description, props: [render] },
        {
          name: "DropdownMenuPopup",
          base: "Menu.Popup",
          description: c["dropdown-menu"].api.DropdownMenuPopup.description,
          props: [
            { name: "side", type: '"top" | "bottom" | "left" | "right"', description: c["dropdown-menu"].api.DropdownMenuPopup.props.side },
            { name: "align", type: '"start" | "center" | "end"', description: c["dropdown-menu"].api.DropdownMenuPopup.props.align },
            { name: "sideOffset", type: "number", default: "6", description: c["dropdown-menu"].api.DropdownMenuPopup.props.sideOffset },
            className,
          ],
        },
        {
          name: "DropdownMenuItem",
          base: "Menu.Item",
          description: c["dropdown-menu"].api.DropdownMenuItem.description,
          props: [
            { name: "variant", type: '"default" | "destructive"', default: '"default"', description: c["dropdown-menu"].api.DropdownMenuItem.props.variant },
            { name: "onClick", type: "() => void", description: c["dropdown-menu"].api.DropdownMenuItem.props.onClick },
            className,
          ],
        },
        {
          name: "DropdownMenuCheckboxItem · DropdownMenuRadioGroup · DropdownMenuRadioItem",
          base: "Menu.CheckboxItem · Menu.RadioGroup · Menu.RadioItem",
          description: c["dropdown-menu"].api.checkable.description,
          props: [
            { name: "checked · onCheckedChange", type: "boolean / (checked) => void", description: c.shared.controlledOrInitial },
            { name: "value · onValueChange", type: "string / (value) => void", description: c.shared.controlledOrInitial },
          ],
        },
        {
          name: "DropdownMenuGroup · DropdownMenuLabel · DropdownMenuSeparator · DropdownMenuShortcut · DropdownMenuSub · DropdownMenuSubTrigger",
          description: c["dropdown-menu"].api.structure.description,
          props: [className],
        },
      ],
      keyboard: [
        { keys: ["Enter", "Space", "↓"], description: c["dropdown-menu"].kb.open },
        { keys: ["↑", "↓"], description: c["dropdown-menu"].kb.navigate },
        { keys: ["Enter", "Space"], description: c["dropdown-menu"].kb.choose },
        { keys: ["→", "←"], description: c["dropdown-menu"].kb.sub },
        { keys: ["Esc"], description: c["dropdown-menu"].kb.close },
        { keys: ["A-Z"], description: c["dropdown-menu"].kb.letter },
      ],
      accessibility: [c["dropdown-menu"].a11y.shortcut],
    },
    popover: {
      examples: [{ file: "popover-default", title: c.popover.ex.default.title, Component: PopoverDefault }],
      usage: `import { Popover, PopoverDescription, PopoverPopup, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"\n\n<Popover>\n  <PopoverTrigger render={<Button />}>Open</PopoverTrigger>\n  <PopoverPopup>\n    <PopoverTitle>Title</PopoverTitle>\n    <PopoverDescription>Description</PopoverDescription>\n  </PopoverPopup>\n</Popover>`,
      api: [
        {
          name: "Popover",
          base: "Popover.Root",
          description: c.popover.api.Popover.description,
          props: [{ name: "open · defaultOpen · onOpenChange", type: "boolean / (open) => void", description: c.popover.api.Popover.props.open }],
        },
        { name: "PopoverTrigger · PopoverClose", base: "Popover.Trigger · Popover.Close", description: c.popover.api.trigger.description, props: [render] },
        {
          name: "PopoverPopup",
          base: "Popover.Popup",
          description: c.popover.api.PopoverPopup.description,
          props: [
            { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"bottom"', description: c.popover.api.PopoverPopup.props.side },
            { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: c.popover.api.PopoverPopup.props.align },
            { name: "sideOffset", type: "number", default: "8", description: c.popover.api.PopoverPopup.props.sideOffset },
            className,
          ],
        },
        { name: "PopoverTitle · PopoverDescription", base: "Popover.Title · Popover.Description", description: c.popover.api.structure.description, props: [className] },
      ],
      keyboard: [
        { keys: ["Enter", "Space"], description: c.popover.kb.open },
        { keys: ["Esc"], description: c.popover.kb.esc },
        { keys: ["Tab"], description: c.popover.kb.tab },
      ],
      accessibility: [c.popover.a11y.interactive],
    },
    "radio-group": {
      examples: [{ file: "radio-group-default", title: c["radio-group"].ex.default.title, Component: RadioGroupDefault }],
      usage: `import { Radio, RadioGroup } from "@/components/ui/radio-group"\n\n<RadioGroup aria-label="Plan" defaultValue="pro">\n  <label className="flex items-center gap-2">\n    <Radio value="free" /> Free\n  </label>\n  <label className="flex items-center gap-2">\n    <Radio value="pro" /> Pro\n  </label>\n</RadioGroup>`,
      api: [
        {
          name: "RadioGroup",
          base: "RadioGroup",
          description: c["radio-group"].api.RadioGroup.description,
          props: [
            { name: "value · defaultValue", type: "string", description: c["radio-group"].api.RadioGroup.props.value },
            { name: "onValueChange", type: "(value) => void", description: c["radio-group"].api.RadioGroup.props.onValueChange },
            { name: "name", type: "string", description: c.shared.formSubmit },
            { name: "disabled · required", type: "boolean", description: c.shared.formState },
            className,
          ],
        },
        {
          name: "Radio",
          base: "Radio.Root",
          description: c["radio-group"].api.Radio.description,
          props: [{ name: "value", type: "string", description: c["radio-group"].api.Radio.props.value }, className],
        },
      ],
      keyboard: [
        { keys: ["↑", "↓", "←", "→"], description: c["radio-group"].kb.arrows },
        { keys: ["Tab"], description: c["radio-group"].kb.tab },
        { keys: ["Space"], description: c["radio-group"].kb.space },
      ],
      accessibility: [c["radio-group"].a11y.label],
    },
    slider: {
      examples: [{ file: "slider-default", title: c.slider.ex.default.title, Component: SliderDefault }],
      usage: `import { Slider } from "@/components/ui/slider"\n\n<Slider defaultValue={40} thumbLabel="Volume" />\n<Slider defaultValue={[20, 70]} thumbLabel={["Min", "Max"]} />`,
      api: [
        {
          name: "Slider",
          base: "Slider.Root",
          description: c.slider.api.Slider.description,
          props: [
            { name: "value · defaultValue", type: "number | number[]", description: c.slider.api.Slider.props.value },
            { name: "onValueChange", type: "(value) => void", description: c.slider.api.Slider.props.onValueChange },
            { name: "onValueCommitted", type: "(value) => void", description: c.slider.api.Slider.props.onValueCommitted },
            { name: "min · max · step", type: "number", default: "0 · 100 · 1", description: c.slider.api.Slider.props.range },
            { name: "thumbLabel", type: "string | string[]", description: c.slider.api.Slider.props.thumbLabel },
            { name: "name · disabled", type: "string / boolean", description: c.shared.formState },
            className,
          ],
        },
      ],
      keyboard: [
        { keys: ["←", "→", "↑", "↓"], description: c.slider.kb.arrows },
        { keys: ["PageUp", "PageDown"], description: c.slider.kb.pageKeys },
        { keys: ["Home", "End"], description: c.slider.kb.homeEnd },
      ],
      accessibility: [c.slider.a11y.label],
    },
    progress: {
      examples: [{ file: "progress-default", title: c.progress.ex.default.title, Component: ProgressDefault }],
      usage: `import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"\n\n<Progress value={60}>\n  <ProgressLabel>Uploading</ProgressLabel>\n  <ProgressValue />\n</Progress>`,
      api: [
        {
          name: "Progress",
          base: "Progress.Root",
          description: c.progress.api.Progress.description,
          props: [
            { name: "value", type: "number | null", description: c.progress.api.Progress.props.value },
            { name: "min · max", type: "number", default: "0 · 100", description: c.progress.api.Progress.props.range },
            className,
          ],
        },
        { name: "ProgressLabel · ProgressValue", base: "Progress.Label · Progress.Value", description: c.progress.api.parts.description, props: [className] },
      ],
      accessibility: [c.progress.a11y.role],
    },
    toast: {
      examples: [{ file: "toast-default", title: c.toast.ex.default.title, Component: ToastDefault }],
      usage: `import { ToastProvider, useToast } from "@/components/ui/toast"\n\n// once, at the root of your app\n<ToastProvider>{children}</ToastProvider>\n\n// anywhere below it\nconst toast = useToast()\ntoast.add({ title: "Saved", description: "Your changes are live.", type: "success" })`,
      api: [
        {
          name: "ToastProvider",
          base: "Toast.Provider",
          description: c.toast.api.ToastProvider.description,
          props: [
            { name: "timeout", type: "number", default: "5000", description: c.toast.api.ToastProvider.props.timeout },
            { name: "limit", type: "number", default: "3", description: c.toast.api.ToastProvider.props.limit },
            { name: "closeLabel", type: "string", default: '"Close"', description: c.toast.api.ToastProvider.props.closeLabel },
          ],
        },
        {
          name: "useToast",
          base: "Toast.useToastManager",
          description: c.toast.api.useToast.description,
          props: [
            { name: "title · description", type: "ReactNode", description: c.toast.api.useToast.props.content },
            { name: "type", type: "string", description: c.toast.api.useToast.props.type },
          ],
        },
        { name: "createToastManager", base: "Toast.createToastManager", description: c.toast.api.createToastManager.description, props: [] },
      ],
      keyboard: [
        { keys: ["F6"], description: c.toast.kb.f6 },
        { keys: ["Tab"], description: c.toast.kb.tab },
        { keys: ["Enter", "Space"], description: c.toast.kb.activate },
      ],
      accessibility: [c.toast.a11y.live, c.toast.a11y.pause],
    },
    table: {
      examples: [{ file: "table-default", title: c.table.ex.default.title, Component: TableDefault }],
      usage: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"\n\n<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Name</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Ada</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`,
      api: [
        { name: "Table", description: c.table.api.Table.description, props: [className] },
        { name: "TableHeader · TableBody · TableFooter", description: c.table.api.sections.description, props: [className] },
        { name: "TableRow · TableHead · TableCell · TableCaption", description: c.table.api.cells.description, props: [className] },
      ],
      accessibility: [c.table.a11y.semantics],
    },
  };
}
