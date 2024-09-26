import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const button = cva("button", {
  variants: {
    intent: {
      primary: ["bg-blue-500"],
      secondary: ["bg-white"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  label: string;
}

function Button({ label, intent, size, className, ...delegate }: ButtonProps) {
  return (
    <button className={cn(button({ intent, size, className }))} {...delegate}>
      {label}
    </button>
  );
}

export default Button;
