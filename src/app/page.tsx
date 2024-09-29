import FilterAside from "@/components/FilterAside";
import Navbar from "@/components/Navbar";
import ProductCardSklt from "@/components/ProductCardSklt";
import ProductsGrid from "@/components/ProductsGrid";
import SearchBar from "@/components/SearchBar";
import { brands, categories } from "@/data";
import { Suspense } from "react";

interface HomeProps {
  searchParams?: SearchParamsProps;
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />
      <div className="max-w-screen-3xl mx-auto flex gap-11">
        {/* <FilterAside brands={brands} /> */}
        <main className="w-full px-4 md:w-auto">
          <SearchBar categories={categories} className="mb-6 max-w-none" />
          {/* <Suspense fallback={<ProductsGridSkeleton />}>
            <ProductsGrid searchParams={searchParams} />
          </Suspense> */}
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
