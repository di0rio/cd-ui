"use client";

import { ClockIcon, MailIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/registry/cd/ui/button";
import { Field, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Form } from "@/registry/cd/ui/form";
import { Input } from "@/registry/cd/ui/input";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "@/registry/cd/ui/select";
import { Textarea } from "@/registry/cd/ui/textarea";

const topics = [
  { value: "sales", label: "Sales and pricing" },
  { value: "support", label: "Support" },
  { value: "partnerships", label: "Partnerships" },
  { value: "other", label: "Something else" },
];

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.email("Enter a valid email address."),
  topic: z.string(),
  message: z.string().trim().min(20, "Tell us a bit more (at least 20 characters)."),
});

const details = [
  { icon: <MailIcon aria-hidden="true" />, label: "hello@acme.com" },
  { icon: <ClockIcon aria-hidden="true" />, label: "We reply within one business day" },
  { icon: <MapPinIcon aria-hidden="true" />, label: "Lisbon, Portugal (remote-first)" },
];

/** Contact page: details on the left, a validated message form on the right with a sent confirmation. */
export function Contact01() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <section className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <h1 className="text-balance font-bold font-heading text-4xl leading-[1.05] tracking-[-0.03em]">Let&apos;s talk.</h1>
          <p className="mt-4 max-w-sm text-muted-foreground leading-relaxed">
            Questions about pricing, a feature or a partnership? Send us a note and a real person will get back to you.
          </p>
          <ul className="mt-8 flex flex-col gap-4 text-sm">
            {details.map((item) => (
              <li className="flex items-center gap-3" key={item.label}>
                <span className="grid size-8 place-items-center rounded-lg border bg-card [&_svg]:size-4">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border bg-card p-6 sm:p-8">
          {sent ? (
            <div aria-live="polite" className="flex min-h-72 flex-col items-center justify-center gap-3 text-center">
              <span className="grid size-12 place-items-center rounded-full bg-brand text-brand-contrast">
                <MailIcon aria-hidden="true" className="size-6" />
              </span>
              <p className="font-heading font-semibold text-xl">Message sent</p>
              <p className="max-w-xs text-muted-foreground text-sm">Thanks for reaching out. We will reply to your email soon.</p>
              <Button onClick={() => setSent(false)} size="sm" type="button" variant="outline">
                Send another
              </Button>
            </div>
          ) : (
            <Form
              onSubmit={async () => {
                setLoading(true);
                // Replace with your real request.
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setLoading(false);
                setSent(true);
              }}
              schema={schema}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="name">
                  <FieldLabel>Name</FieldLabel>
                  <Input autoComplete="name" />
                  <FieldError />
                </Field>
                <Field name="email">
                  <FieldLabel>Email</FieldLabel>
                  <Input autoComplete="email" inputMode="email" />
                  <FieldError />
                </Field>
              </div>
              <Field name="topic">
                <FieldLabel>Topic</FieldLabel>
                <Select defaultValue="sales" items={topics} name="topic">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectPopup>
                    {topics.map((topic) => (
                      <SelectItem key={topic.value} value={topic.value}>
                        {topic.label}
                      </SelectItem>
                    ))}
                  </SelectPopup>
                </Select>
              </Field>
              <Field name="message">
                <FieldLabel>Message</FieldLabel>
                <Textarea className="min-h-32" placeholder="How can we help?" />
                <FieldError />
              </Field>
              <Button loading={loading} size="lg" type="submit" variant="brand">
                Send message
              </Button>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
