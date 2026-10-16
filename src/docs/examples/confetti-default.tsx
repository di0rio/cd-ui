"use client";

import { Button } from "@/registry/cd/ui/button";
import { Confetti } from "@/registry/cd/ui/confetti";

export default function ConfettiDefault() {
  return (
    <Confetti>
      <Button variant="brand">Celebrate</Button>
    </Confetti>
  );
}
