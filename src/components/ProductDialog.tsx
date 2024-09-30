import { cn, formatPrice } from "@/utils/utilsClient";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { buttonVariants } from "./Button";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";
import Separator from "./Separator";

interface ProductDialogProps {
  className?: string;
  children: ReactNode;
  price: number;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  cartItems: number;
  totalToPay: number;
  quotas: Quotas;
  id: string
}

function ProductDialog({
  children,
  image,
  price,
  title,
  cartItems,
  totalToPay,
  quotas,
  id
}: ProductDialogProps) {
  const { src, alt } = image;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        title="Detalle del producto"
        description="Conoce detalles sobre este producto"
        className="h-[90vsh] w-[95vw] md:h-auto md:w-auto"
      >
        <div className="relative hidden md:block md:h-[20.961rem] w-full">
          <Image
            quality={30}
            aria-hidden={true}
            src="/happyPeople.webp"
            alt="Usuario feliz con un producto de MacroPay"
            fill
            className="bg-gray-300 object-cover"
            sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
          />
        </div>
        <section className="flex gap-1 px-11 py-7">
          <h2 className="sr-only">Descripción del producto</h2>
          <div className="relative aspect-square w-[162px] border-l border-muted-300 hidden md:block">
            <Image
              fill
              className="object-contain "
              sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
              src={src}
              alt={alt}
            />
          </div>

          <dl className="flex grow flex-col gap-1.5">
            <dt className="sr-only">precio</dt>
            <dd className="self-end text-lg font-semibold text-primary-200 hidden md:block">
              {formatPrice(price, 2)} x 1
            </dd>
            <dt className="sr-only">nombre del producto</dt>
            <dd className="max-w-[14.438rem] text-xl font-bold capitalize text-foreground-400">
              {title}
            </dd>
            <div className="flex gap-1 text-lg text-muted-400">
              <dt>Color seleccionado:</dt>
              <dd className="font-bold">Gris Ratón</dd>
            </div>
          </dl>
        </section>
        <Separator />
        <section className="flex justify-between px-11 py-6 text-lg font-semibold">
          <h2 className="sr-only">Carrito de compras</h2>
          <p className="flex text-muted-400">
            {cartItems} ítem(s) en tu carrito
          </p>
          <p className="flex gap-2 text-lg">
            <span className="flex text-muted-400">Subtotal:</span>
            <span className="text-primary-200">
              {formatPrice(totalToPay, 2)}
            </span>
          </p>
        </section>
        <Separator />
        <section className="flex flex-col items-center justify-center gap-5 px-11 pb-10 pt-7">
          <h2 className="sr-only">Pedir Producto</h2>
          <div className="relative rounded-full p-[1.625rem] shadow-soft before:absolute before:inset-2 before:rounded-full before:border before:border-secondary-400 before:content-['']">
            <Check
              aria-hidden={true}
              strokeWidth={5}
              className="size-9 text-primary-200"
            />
          </div>
          <p className="-mt-3 flex flex-col items-center text-lg text-center md:text-xl font-semibold text-foreground-400">
            Te vas a llevar este celular por solo
            <span className="text-2xl md:text-3xl font-bold">
              {formatPrice(quotas.week)} p&#x2f;semana!
            </span>
          </p>
          <Link
            href={`product/${id}`}
            className={cn(
              buttonVariants({ variant: "primary", size: "mid" }),
              "uppercase text-lg",
            )}
          >
            Comprar a cr&eacute;dito
          </Link>
          <p className="flex flex-col items-center gap-1">
            <span className="relative bg-white px-8 text-sm italic text-muted-400 before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-px before:w-[200%] before:-translate-x-1/2 before:bg-muted-300 before:content-['']">
              o puedes
            </span>
            <Link
              href={"#"}
              className="font-semibold text-primary-200 hover:text-black"
            >
              Comprar a contado
            </Link>
          </p>
        </section>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDialog;
