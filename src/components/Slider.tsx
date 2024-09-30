import { cn } from "@/utils/utilsClient";
import * as SliderRadix from "@radix-ui/react-slider";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface SliderProps {
  value: number;
  className?: string;
  onValueChange: (value: number) => void;
}

function Slider({ value, onValueChange, className }: SliderProps) {
  return (
    <SliderRadix.Root
      max={100}
      step={1}
      onValueChange={([value]) => onValueChange(value)}
      className={cn(
        "relative flex h-5 w-full select-none items-center rounded-full border border-primary-200",
        className,
      )}
    >
      <SliderRadix.Track className="relative h-full grow rounded-full">
        <SliderRadix.Range className="absolute h-full rounded-full bg-primary-200" />
      </SliderRadix.Track>
      <SliderRadix.Thumb
        className="flex flex-nowrap items-center rounded-full bg-white px-1 shadow-md focus:outline-none"
        aria-label="First Payment"
      >
        <ArrowBigLeft className="mr-0.5 inline-block size-3 fill-primary-200 text-primary-200" />
        {value}%
        <ArrowBigRight className="ml-0.5 inline-block size-3 fill-primary-200 text-primary-200" />
      </SliderRadix.Thumb>
    </SliderRadix.Root>
  );
}

export default Slider;
