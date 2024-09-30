import FilterAside from "@/components/FilterAside";
import FilterDialog from "@/components/FilterDialog";
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
      <main className="lx:md:gap-x-8 mx-auto grid max-w-screen-2xl grid-cols-1 gap-4 px-4 md:grid-cols-[300px_1fr] md:gap-x-6 md:gap-y-5">
        <FilterAside brands={brands} className="hidden md:row-span-2 md:flex" />
        <FilterDialog className="md:hidden" />
        <SearchBar categories={categories} className="md:max-w-[35.188rem]" />
        <Suspense fallback={<ProductsGridSkeleton />}>
          <ProductsGrid searchParams={searchParams} />
        </Suspense>
      </main>
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
