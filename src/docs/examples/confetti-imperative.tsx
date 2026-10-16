"use client";

import { Button } from "@/registry/cd/ui/button";
import { confetti } from "@/registry/cd/ui/confetti";

export default function ConfettiImperative() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button onClick={() => confetti()} variant="outline">
        From the center
      </Button>
      <Button onClick={(e) => confetti({ origin: e.currentTarget, count: 90, spread: 360, shapes: ["star", "circle"] })} variant="outline">
        Stars all around
      </Button>
      <Button onClick={(e) => confetti({ origin: e.currentTarget, spread: 40, power: 1300, colors: ["#e11d48", "#f59e0b"] })} variant="outline">
        Narrow and fast
      </Button>
    </div>
  );
}
