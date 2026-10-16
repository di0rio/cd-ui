"use client";

import { Button } from "@/registry/cd/ui/button";
import { confetti } from "@/registry/cd/ui/confetti";
import { ToastProvider, useToast } from "@/registry/cd/ui/toast";

function CelebrateButton() {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast.add({ title: "Level up!", description: "You reached level 8.", type: "success" });
        // The toast stack lives in the bottom-right corner: the burst starts there.
        confetti({ origin: { x: window.innerWidth - 140, y: window.innerHeight - 60 }, angle: 235, spread: 60 });
      }}
      variant="cartoon"
    >
      Level up
    </Button>
  );
}

export default function ComboCelebrateToast() {
  return (
    <ToastProvider>
      <CelebrateButton />
    </ToastProvider>
  );
}
