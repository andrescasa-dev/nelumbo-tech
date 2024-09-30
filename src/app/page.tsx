import FilterDialog from "@/components/FilterDialog";
import Filters from "@/components/Filters";
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
    <main className="lx:md:gap-x-8 mx-auto grid max-w-screen-2xl grid-cols-1 gap-4 px-4 md:grid-cols-[300px_1fr] md:gap-x-6 md:gap-y-5">
    <aside className="hidden h-fit flex-col gap-5 bg-white py-6 shadow-soft md:row-span-2 md:flex">
      <Filters brands={brands} />
    </aside>
    <FilterDialog className="md:hidden" />
    <SearchBar categories={categories} className="md:max-w-[35.188rem]" />
    <Suspense fallback={<ProductsGridSkeleton />}>
      <ProductsGrid searchParams={searchParams} />
    </Suspense>
  </main>
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
