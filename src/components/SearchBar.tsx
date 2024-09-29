"use client";

import { Search } from "lucide-react";
import Dropdown from "./Dropdown";
import { cn } from "@/utils/utilsClient";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchBarProps {
  categories: item[];
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
      className={cn(
        "flex items-center rounded-full max-w-[563px] border border-muted-300 bg-white pl-5",
        className,
      )}
    >
      <div className="flex items-center grow h-full">
        <Search strokeWidth={3} className="size-4 text-muted-400 mr-3 " />
        <input
          className="placeholder:text-muted-500 grow text-sm h-full inline-block min-w-[20.4rem]"
          type="text"
          placeholder="Encuentra el producto que necesitas"
        />
      </div>
      <Dropdown
        itemsClassName="min-w-[174px] py-2.5 px-4"
        className="min-w-[194px] bg-muted-400 py-4 px-5 rounded-e-full text-white text-sm data-[state=open]:bg-[#EBEFF4] data-[state=open]:text-muted-500"
        items={categories}
        onValueChange={handleDropdownClick}
      >
        Todas las Categorías
      </Dropdown>
    </section>
  );
}

export default SearchBar;
