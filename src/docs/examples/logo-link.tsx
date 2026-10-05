import { Logo } from "@/registry/cd/ui/logo";

export default function LogoLink() {
  return (
    <div className="flex items-center gap-6">
      <Logo render={<a href="https://github.com/di0rio" rel="noopener noreferrer" target="_blank" />} variant="mark" />
      <Logo render={<a href="https://github.com/di0rio" rel="noopener noreferrer" target="_blank" />} variant="wordmark" />
    </div>
  );
}
