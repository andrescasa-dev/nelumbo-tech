import { cn } from "@/utils/utilsClient";
import { ReactNode } from "react";

interface SectionProps {
  titleAs?: "h2" | "h3" | "h4";
  title: string;
  children: ReactNode;
  className?: string;
}

function Section({ titleAs, children, className, title }: SectionProps) {
  const TitleAs = titleAs || "h2";
  return (
    <section className={cn("flex flex-col gap-y-6", className)}>
      <TitleAs className="text-xl font-bold text-foreground-400">
        {title}
      </TitleAs>
      {children}
    </section>
  );
}

export default Section;
