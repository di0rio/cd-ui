"use client";

import { useEffect, useState } from "react";
import { Progress, ProgressLabel, ProgressValue } from "@/registry/cd/ui/progress";

export default function ProgressDefault() {
  const [value, setValue] = useState(20);

  useEffect(() => {
    const id = setInterval(() => setValue((v) => (v >= 100 ? 0 : Math.min(100, v + 10))), 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <Progress value={value}>
        <div className="flex items-center justify-between">
          <ProgressLabel>Uploading</ProgressLabel>
          <ProgressValue />
        </div>
      </Progress>
      <Progress aria-label="Loading" value={null} />
    </div>
  );
}
