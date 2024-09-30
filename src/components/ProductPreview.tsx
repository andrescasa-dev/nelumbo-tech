import { Heart } from "lucide-react";
import Image from "next/image";
import IconButton from "./IconButton";
import { cn } from "@/utils/utilsClient";

interface ProductPreviewProps {
  image: ImageProps;
  discount: number | undefined;
  className?: string;
  width: number;
  height: number;
}

function ProductPreview({
  image,
  discount,
  className,
  width,
  height,
}: ProductPreviewProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-gradient-to-t from-[#f3f3f3] to-white to-[2%] p-10",
        className,
      )}
    >
      <IconButton variant="ghost" className="absolute right-2 top-2">
        <Heart aria-label="like" className="size-8" />
      </IconButton>
      <Image width={width} height={height} alt={image.alt} src={image.src} />
      {discount && (
        <span className="absolute bottom-2 left-3.5 flex aspect-square items-center justify-center rounded-full bg-accent-400 p-2 text-center text-4xl font-bold text-white">
          <span className="sr-only">descuento de:</span>
          {discount}%
        </span>
      )}
    </div>
  );
}

export default ProductPreview;
