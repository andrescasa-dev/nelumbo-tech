import { fetchSimulation, paramsToUrlParams } from "@/utils/utilsServer";
import ProductCard from "./ProductCard";

interface ProductsGridProps {
  searchParams?: SearchParamsProps;
}

async function ProductsGrid({ searchParams = {} }: ProductsGridProps) {
  const params = paramsToUrlParams(searchParams);
  const products = await fetchSimulation(`/?${params}`);

  return (
    <section className="grid grid-cols-3 gap-12">
      <h2 className="sr-only">products</h2>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}

export default ProductsGrid;
