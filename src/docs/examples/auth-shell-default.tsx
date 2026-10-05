import { AuthShell } from "@/registry/cd/ui/auth-shell";
import { Button } from "@/registry/cd/ui/button";
import { Input } from "@/registry/cd/ui/input";

export default function AuthShellDefault() {
  return (
    <AuthShell
      centered
      className="min-h-0 py-0"
      description="Sign in to continue."
      footer={
        <>
          New here?{" "}
          <a className="font-medium text-foreground underline decoration-brand underline-offset-4" href="#signup">
            Create an account
          </a>
        </>
      }
      logo={<span className="grid size-10 place-items-center rounded-xl bg-brand font-bold font-heading text-brand-contrast">A</span>}
      title="Welcome back"
    >
      <Input aria-label="Email" placeholder="you@company.com" />
      <Button variant="brand">Sign in</Button>
    </AuthShell>
  );
}
