import { AvatarButton } from "@/registry/cd/ui/avatar-button";

export default function AvatarButtonDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
      <AvatarButton fallback="CD" src="/avatar-cartoon.svg">
        Say hi
      </AvatarButton>
      <AvatarButton blink fallback="CD" size="lg" src="/avatar-cartoon.svg">
        Blinking
      </AvatarButton>
      <AvatarButton fallback="CD" size="sm" src="/avatar-cartoon.svg" variant="outline">
        Plain style
      </AvatarButton>
    </div>
  );
}
