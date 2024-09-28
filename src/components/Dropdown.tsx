import { cn } from "@/utils/utilsClient";
import * as DropdownMenuRadix from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DropdownProps {
  items: item[];
  className?: string;
  children: string;
  itemsClassName?: string;
}

function Dropdown({
  items,
  className,
  children,
  itemsClassName,
}: DropdownProps) {
  const [category, setCategory] = useState<string | undefined>(undefined);
  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>
        <button className={cn("flex gap-1 items-center group", className)}>
          {children}
          <ChevronDown className="size-4 text-inherit group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuRadix.Trigger>
      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content align="start" className={"shadow-soft"}>
          <DropdownMenuRadix.RadioGroup
            value={category}
            onValueChange={setCategory}
          >
            {items.map(({ value, label }) => (
              <DropdownMenuRadix.RadioItem
                key={value}
                value={value}
                className={cn(
                  "bg-white hover:bg-background text-muted-400",
                  itemsClassName,
                )}
              >
                {label}
              </DropdownMenuRadix.RadioItem>
            ))}
          </DropdownMenuRadix.RadioGroup>
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  );
}

export default Dropdown;
