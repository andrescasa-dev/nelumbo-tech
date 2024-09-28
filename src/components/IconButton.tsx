import { cn } from "@/utils/utilsClient";
import { cva, VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const iconButtonVariants = cva(
  "h-fit w-fit rounded-full p-3 disabled:opacity-60 disabled:text-neutral-400 hover:disabled:bg-transparent",
  {
    variants: {
      variant: {
        primary: "bg-none text-primary-200 hover:bg-blue-100",
        fulfill:
          "bg-white hover:bg-gray-300 hover:text-neutral-600 text-neutral-500",
        ghost:
          "bg-transparent hover:bg-gray-100 hover:bg-gray-100/60 text-neutral-500",
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
