import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const iconButtonVariants = cva(
  "h-fit w-fit bg-background rounded-full text-neutral-500 p-3 hover:bg-gray-300 hover:text-neutral-600",
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  children: ReactNode;
}

function IconButton({ children, className, ...delegate }: ButtonProps) {
  return (
    <button className={cn(iconButtonVariants(), className)} {...delegate}>
      {children}
    </button>
  );
}

export default IconButton;
