"use client";

import { Search } from "lucide-react";
import Dropdown from "./Dropdown";
import { cn } from "@/utils/utilsClient";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps {
  categories: Item[];
  className?: string;
}

function SearchBar({ categories, className }: SearchBarProps) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const handleDropdownClick = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value !== "all") {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    console.log(value);
    router.push(`${pathName}?${params}`);
  };

  return (
    <section
      className={cn("flex flex-col gap-4 sm:flex-row sm:gap-0", className)}
    >
      <div className="flex h-full grow items-center rounded-full border border-muted-300 bg-white px-5 py-4 sm:rounded-e-none">
        <Search strokeWidth={3} className="mr-3 size-4 text-muted-400" />
        <input
          className="inline-block h-full grow text-sm placeholder:text-muted-500"
          type="text"
          placeholder="Encuentra el producto que necesitas"
        />
      </div>
      <Dropdown
        itemsClassName=" w-[90vw] md:min-w-[174px] py-2.5 px-4"
        className="min-w-[194px] justify-center rounded-full bg-muted-400 px-5 py-4 text-sm text-white data-[state=open]:bg-[#EBEFF4] data-[state=open]:text-muted-500 sm:rounded-s-none"
        items={categories}
        onValueChange={handleDropdownClick}
      >
        Todas las Categorías
      </Dropdown>
    </section>
  );
}

export default SearchBar;
