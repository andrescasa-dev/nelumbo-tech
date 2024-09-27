import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const iconButtonVariants = cva(
  "h-fit w-fit rounded-full text-neutral-500 p-3",
  {
    variants: {
      variant: {
        fulfill: "bg-white hover:bg-gray-300 hover:text-neutral-600",
        ghost: "bg-transparent hover:bg-gray-100 hover:bg-gray-100/60",
      },
    },
    defaultVariants: {
      variant: "fulfill",
    },
  },
);

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
      className={cn(iconButtonVariants({ variant }), className)}
      {...delegate}
    >
      {children}
    </button>
  );
}

export default IconButton;
