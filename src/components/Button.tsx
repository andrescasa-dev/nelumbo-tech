import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      primary:
        "bg-secondary-400 text-primary-200 font-medium text-xl capitalize hover:bg-secondary-500",
      ghost:
        "text-secondary-400 font-medium text-xl capitalize hover:bg-primary-300",
      Icon: "bg-background rounded-full",
    },
    size: {
      big: ["px-[1.87em] py-[1.43em] rounded-lg"],
      icon: ["p-1"],
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "big",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

function Button({
  children,
  variant,
  size,
  className,
  ...delegate
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...delegate}
    >
      {children}
    </button>
  );
}

export default Button;
