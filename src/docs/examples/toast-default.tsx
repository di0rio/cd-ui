"use client";

import { Button } from "@/registry/cd/ui/button";
import { ToastProvider, useToast } from "@/registry/cd/ui/toast";

function Buttons() {
  const toast = useToast();

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button onClick={() => toast.add({ title: "Changes saved", description: "Your profile is up to date.", type: "success" })} variant="outline">
        show toast
      </Button>
      <Button onClick={() => toast.add({ title: "Upload failed", description: "Check your connection and try again.", type: "error" })} variant="outline">
        show error
      </Button>
    </div>
  );
}

export default function ToastDefault() {
  return (
    <ToastProvider>
      <Buttons />
    </ToastProvider>
  );
}
