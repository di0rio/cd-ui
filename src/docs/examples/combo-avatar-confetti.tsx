"use client";

import { AvatarButton } from "@/registry/cd/ui/avatar-button";
import { Confetti } from "@/registry/cd/ui/confetti";

export default function ComboAvatarConfetti() {
  return (
    <div className="pt-4">
      <Confetti shapes={["star", "circle"]}>
        <AvatarButton blink fallback="CD" src="/avatar-cartoon.svg">
          Ship it
        </AvatarButton>
      </Confetti>
    </div>
  );
}
