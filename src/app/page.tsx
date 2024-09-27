import FilterAside from "@/components/FilterAside";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

const products: Product[] = [
  {
    id: crypto.randomUUID(),
    image: {
      alt: "Samsung Galaxy A12",
      src: "/Samsung-2.webp",
    },
    price: 4100,
    quotas: {
      week: 10,
      month: 40,
    },
    rate: 3,
    title: "Samsung Galaxy A12",
  },
];

export default function Home() {
  return (
    <div className="bg-background min-h-svh">
      <Navbar />
      <FilterAside />
      <main className="grid grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </main>
    </div>
  );
}
