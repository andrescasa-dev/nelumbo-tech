"use client";

import { Search } from "lucide-react";
import Dropdown from "./Dropdown";
import { cn } from "@/utils/utilsClient";

interface SearchBarProps {
  categories: item[];
  className?: string;
}

function SearchBar({ categories, className }: SearchBarProps) {
  return (
    <section
      className={cn(
        "flex h-11 items-center rounded-full max-w-[563px] border border-muted-300 bg-white",
        className,
      )}
    >
      <div className="flex items-center grow h-full">
        <Search strokeWidth={3} className="size-4 text-muted-400 mx-3 " />
        <input
          className="placeholder:text-muted-500 grow text-sm h-full inline-block min-w-[20.4rem]"
          type="text"
          placeholder="Encuentra el producto que necesitas"
        />
      </div>
      <Dropdown
        itemsClassName="min-w-[174px] py-2.5 px-4"
        className="min-w-[194px] bg-muted-400 py-3 px-5 rounded-e-full text-white text-sm data-[state=open]:bg-[#EBEFF4] data-[state=open]:text-muted-500"
        items={categories}
      >
        Todas las Categorías
      </Dropdown>
    </section>
  );
}

export default SearchBar;
