import PaymenStimator from "@/components/PaymenStimator";
import BasicInfoSection from "@/components/ProductDetail/BasicInfoSection";
import ProductsGrid from "@/components/ProductsGrid";
import ProductsGridSkeleton from "@/components/ProductsSkl";
import Section from "@/components/Section";
import { fetchOneProductSimulation } from "@/utils/utilsServer";

import Image from "next/image";
import { Suspense } from "react";

async function product({ params }: { params: { id: string } }) {
  const productData = await fetchOneProductSimulation(params.id);
  if (!productData) {
    return <p>Parece que este producto no existe, intenta con otro!</p>;
  }

  const {
    title,
    rate,
    discount,
    price,
    description,
    paymentMethods,
    images,
    details,
  } = productData;

  return (
    <main className="mx-auto flex max-w-screen-xl flex-col gap-y-16 px-main-layout">
      <h1 className="sr-only">{title}</h1>
      <BasicInfoSection
        images={images}
        paymentMethods={paymentMethods}
        description={description}
        title={title}
        rate={rate}
        discount={discount}
        price={price}
      />

      {/*Detailed info */}
      <Section title="Información Detallada del Producto">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* grid of images*/}
          <div className="mx-auto grid w-1/2 grid-cols-[auto_auto] gap-4">
            {images.map(({ alt, src }, i) => {
              return (
                <div className="rounded-xl bg-white p-8" key={i}>
                  <Image alt={alt} src={src} width={270} height={367.3} />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-11">
            {/* table of details */}
            <div className="flex flex-col gap-4 text-base text-foreground-400 md:text-xl">
              {/* table header */}
              <div className="flex">
                <span className="border-b-2 border-primary-200 px-6 py-2 font-bold">
                  Otras Especificaciones
                </span>
                <span className="grow border-b-2 border-muted-400 px-6 py-2">
                  Reviews (3)
                </span>
              </div>

              {/* table content */}
              <dl className="flex flex-col gap-y-1">
                {details.map((item, index) => (
                  <div className="flex gap-2" key={index}>
                    <dt className="w-1/2">{item.dataTitle}:</dt>
                    <dd className="w-1/2 font-bold">{item.dataValue}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <PaymenStimator className="mx-auto" price={price} />
          </div>
        </div>
      </Section>

      <Section title="Productos Relacionados">
        <Suspense fallback={<ProductsGridSkeleton />}>
          <ProductsGrid searchParams={{ related: "4" }} />
        </Suspense>
      </Section>
    </main>
  );
}

export default product;
