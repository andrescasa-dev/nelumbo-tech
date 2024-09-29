import { cn, formatPrice } from "@/utils/utilsClient";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ReactNode } from "react";
import Separator from "./Separator";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./Button";
import { Check } from "lucide-react";

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
}

function ProductDialog({
  children,
  image,
  price,
  title,
  cartItems,
  totalToPay,
  quotas,
}: ProductDialogProps) {
  const { src, alt } = image;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-[#4B566B] opacity-70 fixed inset-0" />
        <Dialog.Content
          aria-describedby={undefined}
          className="bg-white min-w-[38.313rem] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] focus:outline-none"
        >
          <VisuallyHidden asChild>
            <Dialog.Title>Detalle del producto</Dialog.Title>
          </VisuallyHidden>
          <div className="relative w-full h-[20.961rem]">
            <Image
              quality={30}
              aria-hidden={true}
              src="/happyPeople.webp"
              alt="Usuario feliz con un producto de MacroPay"
              fill
              className="object-cover bg-gray-300"
              sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
            />
          </div>
          <section className="flex py-7 px-11 gap-1">
            <h2 className="sr-only">Descripción del producto</h2>
            <div className="aspect-square w-[162px] relative border-l border-muted-300 ">
              <Image
                fill
                className="object-contain"
                sizes="(max-width: 768px) 20vw, (max-width: 1200px) 20vw, 20vw"
                src={src}
                alt={alt}
              />
            </div>

            <dl className="flex flex-col grow gap-1.5">
              <dt className="sr-only">precio</dt>
              <dd className="self-end text-primary-200 font-semibold text-lg">
                {formatPrice(price, 2)} x 1
              </dd>
              <dt className="sr-only">nombre del producto</dt>
              <dd className="text-foreground-400 font-bold text-xl capitalize max-w-[14.438rem]">
                {title}
              </dd>
              <div className="flex text-muted-400 text-lg gap-1">
                <dt>Color seleccionado:</dt>
                <dd className="font-bold">Gris Ratón</dd>
              </div>
            </dl>
          </section>
          <Separator />
          <section className="flex justify-between py-6 px-11 font-semibold text-lg">
            <h2 className="sr-only">Carrito de compras</h2>
            <p className="flex text-muted-400">
              {cartItems} ítem(s) en tu carrito
            </p>
            <p className="text-lg flex gap-2">
              <span className="flex text-muted-400 ">Subtotal:</span>
              <span className="text-primary-200 ">
                {formatPrice(totalToPay, 2)}
              </span>
            </p>
          </section>
          <Separator />
          <section className="pt-7 pb-10 px-11 flex flex-col gap-5 justify-center items-center">
            <h2 className="sr-only">Pedir Producto</h2>
            <div className="p-[1.625rem] shadow-soft rounded-full relative before:absolute before:content-[''] before:inset-2 before:rounded-full before:border before:border-secondary-400">
              <Check
                aria-hidden={true}
                strokeWidth={5}
                className="size-9 text-primary-200"
              />
            </div>
            <p className="text-foreground-400 font-semibold text-xl flex flex-col items-center -mt-3">
              Te vas a llevar este celular por solo
              <span className="font-bold text-3xl">
                {formatPrice(quotas.week)} p&#x2f;semana!
              </span>
            </p>
            <Link
              href={"#"}
              className={cn(
                buttonVariants({ variant: "primary", size: "mid" }),
                "uppercase ",
              )}
            >
              Comprar a cr&eacute;dito
            </Link>
            <p className="flex flex-col gap-1 items-center">
              <span className="text-sm text-muted-400 italic bg-white px-8 relative before:absolute before:-z-10 before:content-[''] before:w-[200%] before:-translate-x-1/2 before:left-1/2  before:top-1/2 before:h-px before:bg-muted-300">
                o puedes
              </span>
              <Link
                href={"#"}
                className="text-primary-200 font-semibold hover:text-black"
              >
                Comprar a contado
              </Link>
            </p>
          </section>
          <VisuallyHidden asChild>
            <Dialog.Description>some desc</Dialog.Description>
          </VisuallyHidden>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default ProductDialog;
