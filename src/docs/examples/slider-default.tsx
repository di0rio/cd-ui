import { Slider } from "@/registry/cd/ui/slider";

export default function SliderDefault() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <Slider defaultValue={40} thumbLabel="Volume" />
      <Slider defaultValue={[20, 70]} thumbLabel={["Minimum price", "Maximum price"]} />
      <Slider defaultValue={60} disabled thumbLabel="Disabled" />
    </div>
  );
}
