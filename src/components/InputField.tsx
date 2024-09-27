import { cn } from "@/utils";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function InputField({ className, ...delegate }: InputFieldProps) {
  return (
    <input
      className={cn(
        "border border-[#B4B4B4] placeholder:text-[#B4B4B4] p-3 text-neutral-600 rounded-md",
        className,
      )}
      type="text"
      {...delegate}
    />
  );
}

export default InputField;
