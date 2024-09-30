import { fetchSimulation, paramsToUrlParams } from "@/utils/utilsServer";
import ProductCard from "./ProductCard";

interface ProductsGridProps {
  searchParams?: SearchParamsProps;
}

async function ProductsGrid({ searchParams = {} }: ProductsGridProps) {
  const params = paramsToUrlParams(searchParams);
  const products = await fetchSimulation(`/?${params}`);

  return (
    <section className="grid grid-cols-1 justify-items-center gap-6 xs:grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] md:gap-2 xl:gap-6">
      <h2 className="sr-only">products</h2>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}

export default ProductsGrid;
