"use client";

import { useEffect, useState } from "react";
import { AuthShell } from "@/registry/cd/ui/auth-shell";
import { Button } from "@/registry/cd/ui/button";
import { OtpInput } from "@/registry/cd/ui/otp-input";

const LENGTH = 6;
const COOLDOWN = 30;
// Demo only: the code that "works". Replace the check inside `verify` with your request.
const DEMO_CODE = "123456";

type Status = "idle" | "loading" | "error" | "success";

/** One-time-code verification: auto-advancing digit boxes, paste support, resend countdown. */
export function Verify01() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [seconds, setSeconds] = useState(COOLDOWN);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  const verify = async (value: string) => {
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus(value === DEMO_CODE ? "success" : "error");
  };

  return (
    <AuthShell
      centered
      description="Enter the 6-digit code we sent to you@company.com."
      footer={
        <div className="flex items-center justify-center gap-1">
          Didn&apos;t get it?
          <Button
            className="h-auto px-1 py-0.5 text-foreground"
            disabled={seconds > 0}
            onClick={() => {
              setSeconds(COOLDOWN);
              setCode("");
              setStatus("idle");
            }}
            size="sm"
            type="button"
            variant="link"
          >
            {seconds > 0 ? `Resend in ${seconds}s` : "Resend code"}
          </Button>
        </div>
      }
      title="Verify your email"
    >
      <OtpInput
        className="justify-center"
        disabled={status === "loading" || status === "success"}
        invalid={status === "error"}
        length={LENGTH}
        onValueChange={(value) => {
          setCode(value);
          if (status === "error") setStatus("idle");
        }}
        onValueComplete={verify}
        value={code}
      />
      <p aria-live="polite" className="min-h-5 text-center text-sm">
        {status === "error" && <span className="text-destructive-foreground">That code is not right. Try again.</span>}
        {status === "success" && <span className="font-medium">Email verified. You are all set.</span>}
        {status === "idle" && <span className="text-muted-foreground">Demo code: {DEMO_CODE}</span>}
        {status === "loading" && <span className="text-muted-foreground">Checking…</span>}
      </p>
      <Button
        className="w-full"
        disabled={status === "success" || code.length < LENGTH}
        loading={status === "loading"}
        onClick={() => verify(code)}
        type="button"
        variant="brand"
      >
        Verify
      </Button>
    </AuthShell>
  );
}
