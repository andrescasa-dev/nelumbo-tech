"use client";

import Image from "next/image";
import React, { useState } from "react";
import ProductPreview from "./ProductPreview";

interface ProductCarouselProps {
  images: ImageProps[];
  discount: Discount;
}

function ProductCarousel({ images, discount }: ProductCarouselProps) {
  const [imgSelected, setImgSelected] = useState<number>(0);

  const handleClick = (index: number) => {
    setImgSelected(index);
  };

  return (
    <section className="flex w-fit flex-col gap-6 justify-self-center md:w-full md:flex-row">
      <ProductPreview
        width={344}
        height={468}
        discount={discount}
        image={images[imgSelected]}
        className="h-fit rounded-2xl md:order-1"
      />
      <div className="grid h-full grid-cols-4 grid-rows-[max-content_max-content] gap-6 md:grid-cols-1">
        {images.map(({ src, alt }, i) => (
          <button
            type="button"
            onClick={() => handleClick(i)}
            key={i}
            className="border-muted-30 relative aspect-square h-[7rem] grow overflow-hidden rounded-lg border shadow-soft"
          >
            <Image src={src} alt={alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProductCarousel;
