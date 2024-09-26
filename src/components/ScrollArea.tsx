import { cn } from "@/utils";
import * as ScrollAreaRadix from "@radix-ui/react-scroll-area";
import { PropsWithChildren } from "react";

interface ScrollAreaProps extends PropsWithChildren {
  className?: string;
}

const scrollbarClasses = cn("flex select-none touch-none p-0.5 bg-[#D8E0E9]");

const thumbClasses = cn(
  "flex-1 bg-[#4B566B] rounded-[10px] relative",
  "before:content-[''] before:absolute before:top-1/2",
  "before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
  "before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]",
);

function ScrollArea({ children, className }: ScrollAreaProps) {
  return (
    <ScrollAreaRadix.Root className={cn("overflow-hidden", className)}>
      <ScrollAreaRadix.Viewport className="w-full h-full">
        {children}
      </ScrollAreaRadix.Viewport>

      {/* Vertical Scrollbar */}
      <ScrollAreaRadix.Scrollbar
        orientation="vertical"
        className={cn(scrollbarClasses, "data-[orientation=vertical]:w-2.5")}
      >
        <ScrollAreaRadix.Thumb className={thumbClasses} />
      </ScrollAreaRadix.Scrollbar>

      {/* Horizontal Scrollbar */}
      <ScrollAreaRadix.Scrollbar
        orientation="horizontal"
        className={cn(
          scrollbarClasses,
          "data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5",
        )}
      >
        <ScrollAreaRadix.Thumb className={thumbClasses} />
      </ScrollAreaRadix.Scrollbar>

      {/* Corner to cover both scrollbar intersections */}
      <ScrollAreaRadix.Corner />
    </ScrollAreaRadix.Root>
  );
}

export default ScrollArea;
