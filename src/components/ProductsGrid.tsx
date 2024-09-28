import { fetchSimulation } from "@/utils/utilsServer";
import React from "react";
import ProductCard from "./ProductCard";
import { paramsToUrlParams } from "@/utils/utilsServer";

interface ProductsGridProps {
  searchParams?: SearchParamsProps;
}

async function ProductsGrid({ searchParams = {} }: ProductsGridProps) {
  console.log("searchParams grid", searchParams);
  const params = paramsToUrlParams(searchParams);

  const urlWithParams = `/?${params.toString()}`;
  console.log("urlWithParams", urlWithParams);

  const products = await fetchSimulation(urlWithParams);
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
