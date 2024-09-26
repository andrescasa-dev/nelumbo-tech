import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const iconButtonVariants = cva("", {
  variants: {
    variant: {
      default:
        "h-fit w-fit bg-background rounded-full text-neutral-500 p-3 hover:bg-gray-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  children: ReactNode;
}

function IconButton({
  children,
  variant,
  className,
  ...delegate
}: ButtonProps) {
  return (
    <button
      className={cn(iconButtonVariants({ variant, className }))}
      {...delegate}
    >
      {children}
    </button>
  );
}

export default IconButton;
