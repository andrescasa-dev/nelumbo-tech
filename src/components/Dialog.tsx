import React, { ReactNode } from "react";
import * as DialogRadix from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/utils/utilsClient";

interface DialogContentProps {
  children: ReactNode;
  hideClose?: boolean;
  className?: string;
  title: string;
  description: string;
}

export const DialogContent = ({
  children,
  hideClose,
  className,
  description,
  title,
  ...delegate
}: DialogContentProps) => (
  <DialogRadix.Portal>
    <DialogRadix.Overlay className="bg-[#4B566B] opacity-70 fixed inset-0" />
    <DialogRadix.Content
      aria-describedby={undefined}
      className={cn(
        "bg-white md:min-w-[38.313rem] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] focus:outline-none",
        className,
      )}
      {...delegate}
    >
      <DialogRadix.Title className="sr-only">{title}</DialogRadix.Title>
      <DialogRadix.Description className="sr-only">
        {description}
      </DialogRadix.Description>
      {children}
      <DialogRadix.Close className="absolute right-4 top-4" aria-label="Close">
        {!hideClose && <X className="size-8" />}
      </DialogRadix.Close>
    </DialogRadix.Content>
  </DialogRadix.Portal>
);

export const Dialog = DialogRadix.Root;
export const DialogTrigger = DialogRadix.Trigger;
