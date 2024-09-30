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
    <DialogRadix.Overlay className="fixed inset-0 bg-muted-500/75" />
    <DialogRadix.Content
      aria-describedby={undefined}
      className={cn(
        "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white focus:outline-none md:min-w-[38.313rem]",
        className,
      )}
      {...delegate}
    >
      <DialogRadix.Title className="sr-only">{title}</DialogRadix.Title>
      <DialogRadix.Description className="sr-only">
        {description}
      </DialogRadix.Description>
      {children}
      <DialogRadix.Close className="absolute right-4 top-4 p-2 bg-white/80 rounded-full" aria-label="Close">
        {!hideClose && <X className="size-8" />}
      </DialogRadix.Close>
    </DialogRadix.Content>
  </DialogRadix.Portal>
);

export const Dialog = DialogRadix.Root;
export const DialogTrigger = DialogRadix.Trigger;
