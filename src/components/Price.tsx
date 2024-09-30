import { formatPrice } from "@/utils/utilsClient";
import React from "react";

interface PriceProps {
  discount: number | undefined;
  price: number;
}

function Price({ price, discount }: PriceProps) {
  const discountedPrice = discount ? price - price * (discount / 100) : price;
  return (
    <div className="flex flex-col items-end">
      <span className="text-[2rem] font-bold text-primary-200 sm:text-[2.5rem]">
        {formatPrice(discountedPrice)}
      </span>
      {discount && (
        <span className="-mt-2 text-xl font-semibold text-muted-400 line-through">
          <span className="sr-only">precio sin descuento: </span>
          {formatPrice(price)}
        </span>
      )}
    </div>
  );
}

export default Price;
