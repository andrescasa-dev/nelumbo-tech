import { cn } from "@/utils/utilsClient";
import { Star } from "lucide-react";

interface StarRatingProps {
  rate: number;
  max?: number;
  size?: "sm" | "md";
  isInteractive?: boolean;
  onClick?: (rate: number) => void;
}

function StarRating({
  rate,
  max = 5,
  size = "md",
  isInteractive = false,
  onClick: handleClick,
}: StarRatingProps) {
  const Tag = isInteractive ? "button" : "span";

  return (
    <div className="flex">
      {Array.from({ length: max }, (_, i) => {
        const interactiveProps = isInteractive
          ? {
              onClick: () => {
                const newValue = rate - 1 === i ? i : i + 1;
                return handleClick && handleClick(newValue);
              },
            }
          : {};
        return (
          <Tag key={i} {...interactiveProps}>
            <span className="sr-only">
              {isInteractive
                ? `${i + 1} stars`
                : `Calificación: ${rate} de ${max} estrellas`}
            </span>
            {/*I can use index as a key because the same start doesn't change its position in the arr, so the index in this case is always the same for the stars*/}
            <Star
              aria-hidden={true}
              strokeWidth={1}
              className={cn("text-secondary-400", {
                "size-5": size == "sm",
                "size-[1.625rem]": size == "md",
                "fill-current": i < rate,
              })}
            />
          </Tag>
        );
      })}
    </div>
  );
}

export default StarRating;
