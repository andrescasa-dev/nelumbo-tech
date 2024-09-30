import { formatPrice } from "@/utils/utilsClient";
import Button from "./Button";
import Price from "./Price";
import ProductDialog from "./ProductDialog";
import ProductPreview from "./ProductPreview";
import StarRating from "./StartRating";

function ProductCard({ image, title, rate, price, quotas, discount }: Product) {
  return (
    <article className="relative flex w-full max-w-[22rem] flex-col overflow-hidden rounded-2xl shadow-soft">
      <ProductPreview
        width={244}
        height={333}
        image={image}
        discount={discount}
      />
      <section className="flex grow flex-col gap-3 bg-white px-6 py-5">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="mt-2.5 text-base font-semibold capitalize text-foreground-400">
              {title}
            </h2>
            <StarRating size="md" rate={rate} />
          </div>
          <Price discount={discount} price={price} />
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
