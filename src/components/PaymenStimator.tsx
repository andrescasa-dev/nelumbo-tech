"use client"

import { cn, formatPrice } from "@/utils/utilsClient";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./Button";
import HappyFace from "./icons/HappyFace";
import Slider from "./Slider";

function PaymenStimator({price, className}: {price: number, className: string}) {
  const [percentage, setPercentage] = useState(15)
  const firstPay = Math.round(price * percentage / 100); //in percentage
  const weeklyPayments = Math.round(price / 24);

  return (
    <article className={cn("flex max-w-[23.438rem] flex-col gap-2 gap-y-6 rounded-xl bg-white px-10 py-12 text-foreground-400 shadow-soft", className)}>
      <header className="flex flex-col items-center gap-2">
        <HappyFace className="size-20 fill-primary-200" />
        <h2 className="text-2xl font-bold">¿Te falta una lanita?</h2>
      </header>
      <div className="flex flex-col justify-center gap-y-5">
        <div className="flex flex-col">
          <span className="mx-auto text-lg uppercase">
            Enganche: {formatPrice(firstPay, 2)}
          </span>
          <span className="mx-auto text-lg uppercase">
            Pago Semanal: {formatPrice(weeklyPayments, 2)}
          </span>
        </div>

        <div>
          <Slider value={percentage} onValueChange={setPercentage} />
        

        <p className="mt-2">Enganche</p>
        </div>

        
      </div>
      <footer>
        <Link
          href="#"
          className={cn(
            buttonVariants({ variant: "primary", size: "mid" }),
            "justify-center",
          )}
        >
          Aplicar Ahora
        </Link>
        <p className="text-xs text-[#B4B4B4] mt-1">*Hasta $2,000 de manera fácil, rápida y confiable</p>
      </footer>
    </article>
  );
}

export default PaymenStimator;
