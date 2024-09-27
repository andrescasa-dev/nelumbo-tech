import { cn } from "@/utils";
import { Star } from "lucide-react";

interface StarRatingProps {
  rate: number;
  max?: number;
  size?: "sm" | "md";
}

function StarRating({ rate, max = 5, size = "md" }: StarRatingProps) {
  return (
    <div
      className="flex"
      role="img"
      aria-label={`Calificación: ${rate} de ${max} estrellas`}
    >
      {Array.from({ length: max }, (_, i) => (
        <Star
          aria-hidden={true}
          strokeWidth={1}
          key={i}
          className={cn("text-secondary-400", {
            "size-5": size == "sm",
            "size-[1.625rem]": size == "md",
            "fill-current": i < rate,
          })}
        />
      ))}
    </div>
  );
}

export default StarRating;
