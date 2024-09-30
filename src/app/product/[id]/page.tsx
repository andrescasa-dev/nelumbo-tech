import PaymenStimator from "@/components/PaymenStimator";
import BasicInfoSection from "@/components/ProductDetail/BasicInfoSection";
import Image from "next/image";

const productData = {
  id: crypto.randomUUID(),
  category: "cell-phones",
  brand: "samsung",
  images: [
    {
      src: "/Samsung-2.webp",
      alt: "some alt",
    },
    {
      src: "/Samsung-2.webp",
      alt: "some alt",
    },
    {
      src: "/Samsung-2.webp",
      alt: "some alt",
    },
    {
      src: "/Samsung-2.webp",
      alt: "some alt",
    },
  ],
  price: 2000,
  quotas: {
    week: 10,
    month: 40,
  },
  details: [
    { dataTitle: "Fabricante", dataValue: "Sample" },
    { dataTitle: "Peso del producto", dataValue: "50 gr" },
    { dataTitle: "Dimensiones", dataValue: "11 x 10 x 0.4 pulgadas" },
    { dataTitle: "País de origen", dataValue: "China" },
    { dataTitle: "Número de modelo", dataValue: "134687" },
    { dataTitle: "Color", dataValue: "Plata" },
    { dataTitle: "Material", dataValue: "Silicona plástica" },
    { dataTitle: "Cantidad de piezas", dataValue: 4 },
    {
      dataTitle: "Características especiales",
      dataValue: "Resistente al agua",
    },
    {
      dataTitle: "Componentes incluidos",
      dataValue: "Audífonos, Cargador y Manual de usuario",
    },
  ],
  paymentMethods: [
    {
      label: "Visa",
      value: "visa" as const,
    },
    {
      label: "MasterCard",
      value: "masterCard" as const,
    },
  ],
  rate: 2,
  discount: 40,
  title: "Samsung Galaxy A12",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
};

function product({ params }: { params: { id: string } }) {
  console.log(params);
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
    <div className="bg-background">
      <main className="px-main-layout mx-auto flex max-w-screen-xl flex-col gap-10">
        <BasicInfoSection
          images={images}
          paymentMethods={paymentMethods}
          description={description}
          title={title}
          rate={rate}
          discount={discount}
          price={price}
        />
        <section className="flex flex-col gap-y-6">
          <h2 className="text-xl font-bold text-foreground-400">
            Información Detallada del Producto
          </h2>
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
              <div className="flex flex-col gap-4 text-xl text-foreground-400">
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
              <PaymenStimator className="ml-auto" price={price} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default product;
