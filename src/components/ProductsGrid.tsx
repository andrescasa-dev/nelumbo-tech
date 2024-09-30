import {
  fetchProductsSimulation,
  paramsToUrlParams,
} from "@/utils/utilsServer";
import ProductCard from "./ProductCard";
import { Glasses } from "lucide-react";

interface ProductsGridProps {
  searchParams?: SearchParamsProps;
}

async function ProductsGrid({ searchParams = {} }: ProductsGridProps) {
  const params = paramsToUrlParams(searchParams);
  const products = await fetchProductsSimulation(`/?${params}`);

  return (
    <section className="min-h-[85svh]">
      <h2 className="sr-only">products</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 justify-items-center gap-6 xs:grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] md:gap-2 xl:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="grid place-items-center p-20">
          <Glasses className="size-16 text-primary-200" />
          <p className="grid place-items-center text-foreground-400">
            Parece que no hay productos con estos filtros
            <span className="font-semibold">¡Prueba con otros!</span>
          </p>
        </div>
      )}
    </section>
  );
}

export default ProductsGrid;
