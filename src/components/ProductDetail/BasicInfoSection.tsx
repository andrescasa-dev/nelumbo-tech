import { buttonVariants } from "@/components/Button";
import Price from "@/components/Price";
import ProductCarousel from "@/components/ProductCarousel";
import SeeMoreText from "@/components/SeeMoreText";
import StarRating from "@/components/StartRating";
import { cn } from "@/utils/utilsClient";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MasterCard from "../icons/MasterCard";
import Visa from "../icons/Visa";

interface BasicInfoSectionProps {
  images: ImageProps[];
  price: number;
  rate: number;
  title: string;
  description: string;
  discount: number;
  paymentMethods: PaymentMethod[];
}

const paymentIcons = {
  visa: Visa,
  masterCard: MasterCard,
};

function BasicInfoSection({
  images,
  discount,
  rate,
  price,
  paymentMethods,
  title,
  description,
}: BasicInfoSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-x-12 md:grid-cols-[572px_1fr]">
      <ProductCarousel images={images} discount={discount} />

      {/*Basic info section*/}
      <section className="flex w-full flex-col gap-4 py-8">
        <div className="flex justify-between">
          <div className="flex flex-col gap-0">
            <h1 className="text-[2.5rem] text-foreground-400">{title}</h1>
            <StarRating rate={rate} size="md" />
          </div>
          <div className="flex flex-col gap-2">
            <Price discount={discount} price={price} />
            <ul className="flex flex-row-reverse gap-1">
              {paymentMethods.map(({ label, value }) => {
                const Icon = paymentIcons[value];
                return (
                  <li key={value}>
                    <Icon
                      className="h-8 w-8 fill-muted-400"
                      aria-label={label}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <SeeMoreText>{description}</SeeMoreText>
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "primary", size: "mid" }),
            "mt-auto max-w-[21rem] justify-between self-end uppercase",
          )}
        >
          Lo quiero a crédito
          <div className="rounded-full bg-primary-200 p-1">
            <ArrowRight className="size-6 text-secondary-400" strokeWidth={4} />
          </div>
        </Link>
      </section>
    </section>
  );
}

export default BasicInfoSection;
