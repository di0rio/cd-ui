"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/registry/cd/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/cd/ui/card";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/registry/cd/ui/field";
import { Form } from "@/registry/cd/ui/form";
import { Input } from "@/registry/cd/ui/input";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "@/registry/cd/ui/select";
import { Switch } from "@/registry/cd/ui/switch";
import { Textarea } from "@/registry/cd/ui/textarea";

const timezones = [
  { value: "utc", label: "UTC" },
  { value: "america/new_york", label: "New York (GMT-5)" },
  { value: "europe/london", label: "London (GMT+0)" },
  { value: "asia/tokyo", label: "Tokyo (GMT+9)" },
];

const schema = z.object({
  name: z.string().trim().min(2, "Enter at least 2 characters."),
  username: z
    .string()
    .min(3, "Use at least 3 characters.")
    .regex(/^[a-z0-9_-]+$/, "Lowercase letters, numbers, - and _ only."),
  email: z.email("Enter a valid email address."),
  bio: z.string().max(160, "Keep it under 160 characters."),
  timezone: z.string(),
});

const notifications = [
  { id: "product", title: "Product updates", text: "News about new features and improvements.", on: true },
  { id: "mentions", title: "Mentions and replies", text: "Get an email when someone mentions you.", on: true },
  { id: "digest", title: "Weekly digest", text: "A summary of what happened in your workspace.", on: false },
];

/** Profile settings: Zod-validated form (text, textarea, select) plus notification switches. */
export function Settings01() {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-12">
      <h1 className="font-bold font-heading text-2xl tracking-[-0.02em]">Settings</h1>
      <p className="mt-1 mb-8 text-muted-foreground text-sm">Manage your profile and how Acme keeps in touch.</p>

      <Form
        className="gap-6"
        onSubmit={async () => {
          setLoading(true);
          setSaved(false);
          // Replace with your real request.
          await new Promise((resolve) => setTimeout(resolve, 900));
          setLoading(false);
          setSaved(true);
        }}
        onChange={() => setSaved(false)}
        schema={schema}
      >
        <Card className="gap-6 p-6">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>This is how others see you on Acme.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-full border-2 border-foreground bg-brand font-bold font-heading text-brand-contrast text-lg">
                JD
              </span>
              <Button size="sm" type="button" variant="outline">
                Change photo
              </Button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name">
                <FieldLabel>Full name</FieldLabel>
                <Input autoComplete="name" defaultValue="Jane Doe" />
                <FieldError />
              </Field>
              <Field name="username">
                <FieldLabel>Username</FieldLabel>
                <Input autoComplete="username" defaultValue="janedoe" />
                <FieldError />
              </Field>
            </div>
            <Field name="email">
              <FieldLabel>Email</FieldLabel>
              <Input autoComplete="email" defaultValue="jane@company.com" inputMode="email" />
              <FieldError />
            </Field>
            <Field name="bio">
              <FieldLabel>Bio</FieldLabel>
              <Textarea defaultValue="Product designer who writes a little code." />
              <FieldDescription>Up to 160 characters.</FieldDescription>
              <FieldError />
            </Field>
            <Field name="timezone">
              <FieldLabel>Time zone</FieldLabel>
              <Select defaultValue="utc" items={timezones} name="timezone">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectPopup>
                  {timezones.map((zone) => (
                    <SelectItem key={zone.value} value={zone.value}>
                      {zone.label}
                    </SelectItem>
                  ))}
                </SelectPopup>
              </Select>
            </Field>
          </CardContent>
        </Card>

        <Card className="gap-2 p-6">
          <CardHeader className="mb-3">
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Choose what lands in your inbox.</CardDescription>
          </CardHeader>
          <CardContent className="divide-y">
            {notifications.map((item) => (
              <div className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0" key={item.id}>
                <div>
                  <p className="font-medium" id={`${item.id}-label`}>
                    {item.title}
                  </p>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
                <Switch aria-labelledby={`${item.id}-label`} defaultChecked={item.on} />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="flex items-center justify-end gap-3">
          <p aria-live="polite" className="text-muted-foreground text-sm">
            {saved && "Changes saved."}
          </p>
          <Button loading={loading} type="submit" variant="brand">
            Save changes
          </Button>
        </div>
      </Form>
    </div>
  );
}
