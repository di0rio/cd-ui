"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/registry/cd/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/cd/ui/card";
import { Input } from "@/registry/cd/ui/input";

const LENGTH = 6;
const COOLDOWN = 30;
// Demo only: the code that "works". Replace the check inside `verify` with your request.
const DEMO_CODE = "123456";

type Status = "idle" | "loading" | "error" | "success";

/** One-time-code verification: auto-advancing digit boxes, paste support, resend countdown. */
export function Verify01() {
  const [digits, setDigits] = useState<string[]>(Array(LENGTH).fill(""));
  const [status, setStatus] = useState<Status>("idle");
  const [seconds, setSeconds] = useState(COOLDOWN);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  const verify = async (code: string) => {
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus(code === DEMO_CODE ? "success" : "error");
  };

  const update = (next: string[]) => {
    setDigits(next);
    if (status === "error") setStatus("idle");
    const code = next.join("");
    if (code.length === LENGTH) void verify(code);
  };

  const onChange = (index: number, raw: string) => {
    const value = raw.replace(/\D/g, "");
    if (!value) return;
    const next = [...digits];
    // Typing over a filled box or pasting several digits spreads them across the following boxes.
    value
      .slice(0, LENGTH - index)
      .split("")
      .forEach((digit, i) => {
        next[index + i] = digit;
      });
    update(next);
    refs.current[Math.min(index + value.length, LENGTH - 1)]?.focus();
  };

  const onKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      event.preventDefault();
      const next = [...digits];
      if (next[index]) next[index] = "";
      else if (index > 0) {
        next[index - 1] = "";
        refs.current[index - 1]?.focus();
      }
      update(next);
    } else if (event.key === "ArrowLeft") refs.current[index - 1]?.focus();
    else if (event.key === "ArrowRight") refs.current[index + 1]?.focus();
  };

  const reset = () => {
    setDigits(Array(LENGTH).fill(""));
    setStatus("idle");
    refs.current[0]?.focus();
  };

  return (
    <div className="flex min-h-[560px] w-full items-center justify-center px-4 py-12">
      <Card className="w-full max-w-sm gap-6 p-6">
        <CardHeader className="gap-1.5 text-center">
          <CardTitle className="text-xl">Verify your email</CardTitle>
          <CardDescription>Enter the 6-digit code we sent to you@company.com.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div aria-label="Verification code" className="flex justify-center gap-2" role="group">
            {digits.map((digit, index) => (
              <Input
                aria-invalid={status === "error" || undefined}
                aria-label={`Digit ${index + 1} of ${LENGTH}`}
                autoComplete={index === 0 ? "one-time-code" : "off"}
                className="h-12 w-11 px-0 text-center font-heading text-xl aria-invalid:border-destructive"
                disabled={status === "loading" || status === "success"}
                inputMode="numeric"
                key={index}
                onChange={(event) => onChange(index, event.target.value)}
                onFocus={(event) => event.target.select()}
                onKeyDown={(event) => onKeyDown(index, event)}
                ref={(node) => {
                  refs.current[index] = node;
                }}
                value={digit}
              />
            ))}
          </div>
          <p aria-live="polite" className="min-h-5 text-center text-sm">
            {status === "error" && <span className="text-destructive-foreground">That code is not right. Try again.</span>}
            {status === "success" && <span className="font-medium">Email verified. You are all set.</span>}
            {status === "idle" && <span className="text-muted-foreground">Demo code: {DEMO_CODE}</span>}
            {status === "loading" && <span className="text-muted-foreground">Checking…</span>}
          </p>
          <Button
            className="w-full"
            disabled={status === "success" || digits.join("").length < LENGTH}
            loading={status === "loading"}
            onClick={() => verify(digits.join(""))}
            type="button"
            variant="brand"
          >
            Verify
          </Button>
        </CardContent>
        <div className="-mt-2 flex items-center justify-center gap-1 text-muted-foreground text-sm">
          Didn&apos;t get it?
          <Button
            className="h-auto px-1 py-0.5 text-foreground"
            disabled={seconds > 0}
            onClick={() => {
              setSeconds(COOLDOWN);
              reset();
            }}
            size="sm"
            type="button"
            variant="link"
          >
            {seconds > 0 ? `Resend in ${seconds}s` : "Resend code"}
          </Button>
        </div>
      </Card>
    </div>
  );
}
