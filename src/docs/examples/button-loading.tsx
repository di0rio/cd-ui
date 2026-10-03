"use client";

import { useState } from "react";
import { Button } from "@/registry/cd/ui/button";

export default function ButtonLoading() {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      loading={loading}
      onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
      }}
      variant="brand"
    >
      publicar projeto
    </Button>
  );
}
