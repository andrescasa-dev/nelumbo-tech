import Image from "next/image";
import React from "react";
import IconButton from "./IconButton";
import { Heart } from "lucide-react";
import StarRating from "./StartRating";
import Button from "./Button";
import { formatPrice } from "@/utils/utilsClient";

function ProductCard({ image, title, rate, price, quotas, discount }: Product) {
  const discountedPrice = discount ? price - price * (discount / 100) : price;
  return (
    <article className="relative shadow-soft rounded-2xl w-fit overflow-hidden flex flex-col">
      <div className="relative bg-gradient-to-t from-[#f3f3f3] to-white to-[2%]">
        <IconButton variant="ghost" className="absolute right-2 top-2">
          <Heart aria-label="like" className="size-8" />
        </IconButton>
        <Image width={385} height={250} alt={image.alt} src={image.src} />
        {discount && (
          <span className="absolute bottom-2 left-3.5 bg-accent-400 aspect-square rounded-full p-2 text-white text-4xl font-bold text-center flex justify-center items-center">
            <span className="sr-only">descuento de:</span>
            {discount}%
          </span>
        )}
      </div>
      <section className="px-6 py-5 flex flex-col gap-3 bg-white grow">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-base font-semibold text-foreground-400 capitalize mt-2.5">
              {title}
            </h2>
            <StarRating size="md" rate={rate} />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[2.5rem] font-bold text-primary-200">
              {formatPrice(discountedPrice)}
            </span>
            {discount && (
              <span className="text-muted-400 font-semibold text-xl line-through -mt-2">
                <span className="sr-only">precio sin descuento: </span>
                {formatPrice(price)}
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-auto">
          <p className="text-muted-400 text-sm flex flex-col ">
            <span>{formatPrice(quotas.week)} p/semana</span>
            <span> o {formatPrice(quotas.month)} p/mes</span>
          </p>
          <Button variant="primary" size="small">
            Lo quiero
          </Button>
        </div>
      </section>
    </article>
  );
}

export default ProductCard;
