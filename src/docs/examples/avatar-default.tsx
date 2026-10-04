import { Avatar, AvatarFallback, AvatarImage } from "@/registry/cd/ui/avatar";

export default function AvatarDefault() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage alt="di0rio" src="https://github.com/di0rio.png" />
        <AvatarFallback>DI</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage alt="" src="/missing-image.png" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className="size-8">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
}
