import { Logo } from "@/registry/cd/ui/logo";

export default function LogoDefault() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <Logo size="sm" variant="mark" />
        <Logo size="md" variant="mark" />
        <Logo size="lg" variant="mark" />
      </div>
      <Logo variant="wordmark" />
      <Logo variant="prompt" />
    </div>
  );
}
