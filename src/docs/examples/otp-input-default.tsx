"use client";

import { useState } from "react";
import { OtpInput } from "@/registry/cd/ui/otp-input";

export default function OtpInputDefault() {
  const [code, setCode] = useState("");
  return (
    <div className="flex flex-col gap-3">
      <OtpInput onValueChange={setCode} value={code} />
      <p className="font-mono text-muted-foreground text-sm">{code.length === 6 ? `code: ${code}` : "type or paste 6 digits"}</p>
    </div>
  );
}
