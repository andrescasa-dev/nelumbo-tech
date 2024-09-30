import BasicInfoSection from "@/components/ProductDetail/BasicInfoSection";

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
  const { title, rate, discount, price, description, paymentMethods, images } =
    productData;
  return (
    <div className="bg-background">
      <main className="px-main-layout mx-auto max-w-screen-xl">
        <BasicInfoSection
          images={images}
          paymentMethods={paymentMethods}
          description={description}
          title={title}
          rate={rate}
          discount={discount}
          price={price}
        />
      </main>
    </div>
  );
}

export default product;
