import { formatPrice } from "@/utils/utilsClient";
import { Heart } from "lucide-react";
import Image from "next/image";
import Button from "./Button";
import IconButton from "./IconButton";
import ProductDialog from "./ProductDialog";
import StarRating from "./StartRating";

function ProductCard({ image, title, rate, price, quotas, discount }: Product) {
  const discountedPrice = discount ? price - price * (discount / 100) : price;
  return (
    <article className="relative flex w-fit flex-col overflow-hidden rounded-2xl shadow-soft">
      <div className="relative flex items-center justify-center bg-gradient-to-t from-[#f3f3f3] to-white to-[2%] p-10">
        <IconButton variant="ghost" className="absolute right-2 top-2">
          <Heart aria-label="like" className="size-8" />
        </IconButton>
        <Image width={244} height={333} alt={image.alt} src={image.src} />
        {discount && (
          <span className="absolute bottom-2 left-3.5 flex aspect-square items-center justify-center rounded-full bg-accent-400 p-2 text-center text-4xl font-bold text-white">
            <span className="sr-only">descuento de:</span>
            {discount}%
          </span>
        )}
      </div>
      <section className="flex grow flex-col gap-3 bg-white px-6 py-5">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="mt-2.5 text-base font-semibold capitalize text-foreground-400">
              {title}
            </h2>
            <StarRating size="md" rate={rate} />
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[2.5rem] font-bold text-primary-200">
              {formatPrice(discountedPrice)}
            </span>
            {discount && (
              <span className="-mt-2 text-xl font-semibold text-muted-400 line-through">
                <span className="sr-only">precio sin descuento: </span>
                {formatPrice(price)}
              </span>
            )}
          </div>
        </div>
        <div className="mt-auto flex justify-between">
          <p className="flex flex-col text-sm text-muted-400">
            <span>{formatPrice(quotas.week)} p/semana</span>
            <span> o {formatPrice(quotas.month)} p/mes</span>
          </p>
          <ProductDialog
            image={image}
            title={title}
            price={price}
            totalToPay={price}
            cartItems={1}
            quotas={quotas}
          >
            <Button variant="primary" size="small">
              Lo quiero
            </Button>
          </ProductDialog>
        </div>
      </section>
    </article>
  );
}

export default ProductCard;
