import { cn } from "@/utils/utilsClient";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

export const buttonVariants = cva("rounded-lg", {
  variants: {
    variant: {
      primary:
        "bg-secondary-400 text-primary-200 font-medium text-xl capitalize hover:text-secondary-400 hover:bg-primary-200",
      ghost:
        "text-secondary-400 font-medium text-xl capitalize hover:bg-primary-300 ",
    },
    size: {
      big: "px-7 py-6",
      mid: "py-5 px-11",
      small: "px-5 py-2.5  font-semibold",
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
