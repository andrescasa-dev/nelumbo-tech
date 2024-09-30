"use client";
import { cn } from "@/utils/utilsClient";
import React, { PropsWithChildren, useState } from "react";

function SeeMoreText({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((prev) => !prev);
  return (
    <div>
      <p
        className={cn("overflow-hidden", { "h-[2ch]": !isOpen })}
        onClick={handleOpen}
      >
        {children}
      </p>
      <button onClick={handleOpen} className="italic text-primary-200">
        Ver más
      </button>
    </div>
  );
}

export default SeeMoreText;
