import { buttonVariants } from "@/components/Button";
import Price from "@/components/Price";
import ProductCarousel from "@/components/ProductCarousel";
import SeeMoreText from "@/components/SeeMoreText";
import StarRating from "@/components/StartRating";
import { cn } from "@/utils/utilsClient";
import { ArrowRight, ChevronRight, Shield } from "lucide-react";
import Link from "next/link";
import MasterCard from "../icons/MasterCard";
import Visa from "../icons/Visa";

interface BasicInfoSectionProps {
  images: ImageProps[];
  price: number;
  rate: number;
  title: string;
  description: string;
  discount: Discount;
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
            <h2 className="text-[2.5rem] text-foreground-400">{title}</h2>
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
        <div className="ml-auto">
          <section className="flex max-w-[26.346rem] gap-2 rounded-lg bg-gray-300 p-4 text-foreground-400">
            <Shield strokeWidth={3} className="size-8" />
            <div>
              <h2 className="font-bold">Compra segura con Macropay protect</h2>
              <p className="text-xs">
                Devolución gratis (30 días)/12 meses de garantía de fábrica.
              </p>
            </div>
          </section>
          <p className="ml-auto mt-2 w-fit text-sm text-red-500">
            La promoción vence en 24d 12h:43m
          </p>
        </div>

        <ul className="flex items-center justify-between gap-4 rounded-lg bg-white p-4 px-6 text-sm text-muted-500 shadow-soft">
          <li className="flex flex-col gap-2">
            <span className="flex aspect-square w-fit items-center justify-center rounded-full bg-muted-500 p-1 text-sm font-bold text-white">
              1
            </span>
            <p className="font-bold">Aplica a tu crédito</p>
          </li>
          <ChevronRight strokeWidth={3} className="size-8 text-secondary-400" />
          <li className="flex flex-col gap-2">
            <span className="flex aspect-square w-fit items-center justify-center rounded-full bg-muted-500 p-1 text-sm font-bold text-white">
              2
            </span>
            <p className="font-bold">Verifica tu compra</p>
          </li>
          <ChevronRight strokeWidth={3} className="size-8 text-secondary-400" />
          <li className="flex flex-col gap-2">
            <span className="flex aspect-square w-fit items-center justify-center rounded-full bg-muted-500 p-1 text-sm font-bold text-white">
              3
            </span>
            <p className="font-bold">Disfruta de tu celular</p>
          </li>
        </ul>

        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "primary", size: "mid" }),
            "-mt-5 mt-auto max-w-[21rem] justify-between self-end uppercase",
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
