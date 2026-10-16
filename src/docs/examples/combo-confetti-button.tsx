"use client";

import { Button } from "@/registry/cd/ui/button";
import { Confetti } from "@/registry/cd/ui/confetti";

export default function ComboConfettiButton() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Confetti>
        <Button variant="cartoon">Cartoon button</Button>
      </Confetti>
      <Confetti count={30} on="pointerenter" spread={120}>
        <Button variant="outline">Burst on hover</Button>
      </Confetti>
    </div>
  );
}
