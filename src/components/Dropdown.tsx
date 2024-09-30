"use client";

import { cn } from "@/utils/utilsClient";
import * as DropdownMenuRadix from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface DropdownProps {
  items: Item[];
  className?: string;
  itemsClassName?: string;
  onValueChange?: (value: string) => void;
  defaultLabel: string
}

function Dropdown({
  items,
  className,
  defaultLabel,
  itemsClassName,
  onValueChange,
}: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
  const selectedItem = items.find(({value})=>value === selectedValue)
  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>
        <button className={cn("group flex items-center gap-1", className)}>
          {selectedItem ? selectedItem.label : defaultLabel}
          <ChevronDown className="size-4 text-inherit group-data-[state=open]:rotate-180" />
        </button>
      </DropdownMenuRadix.Trigger>
      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content align="start" className={"shadow-soft select-none"}>
          <DropdownMenuRadix.RadioGroup
            value={selectedValue}
            onValueChange={(value) => {
              setSelectedValue(value);
              if (onValueChange !== undefined) onValueChange(value);
            }}
          >
            {items.map(({ value, label }) => (
              <DropdownMenuRadix.RadioItem
                key={value}
                value={value}
                className={cn(
                  "bg-white text-muted-400 hover:bg-background",
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
