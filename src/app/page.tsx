import FilterAside from "@/components/FilterAside";
import Navbar from "@/components/Navbar";
import ProductCardSklt from "@/components/ProductCardSklt";
import ProductsGrid from "@/components/ProductsGrid";
import SearchBar from "@/components/SearchBar";
import { brands, categories } from "@/data";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-background min-h-svh">
      <Navbar />
      <div className="flex gap-11 max-w-screen-3xl mx-auto">
        <FilterAside brands={brands} />
        <main>
          <SearchBar categories={categories} className="mb-6" />
          <Suspense fallback={<ProductsGridSkeleton />}>
            <ProductsGrid />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

function ProductsGridSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-12">
      <ProductCardSklt />
      <ProductCardSklt />
      <ProductCardSklt />
      <ProductCardSklt />
      <ProductCardSklt />
    </div>
  );
}
