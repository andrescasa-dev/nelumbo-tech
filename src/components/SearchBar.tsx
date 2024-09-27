import { Search } from "lucide-react";
import Dropdown from "./Dropdown";

function SearchBar({ categories }: { categories: item[] }) {
  return (
    <section className="flex h-11 items-center rounded-full max-w-[563px] border border-[#D8E0E9]">
      <div className="flex items-center grow h-full">
        <Search strokeWidth={3} className="size-4 text-[#7D879C] mx-3 " />
        <input
          className="placeholder:text-[#4B566B] grow text-sm h-full inline-block"
          type="text"
          placeholder="Encuentra el producto que necesitas"
        />
      </div>
      <Dropdown
        itemsClassName="min-w-[174px] py-2.5 px-4"
        className="min-w-[194px] bg-[#7D879C] py-3 px-5 rounded-e-full text-white text-sm data-[state=open]:bg-[#EBEFF4] data-[state=open]:text-[#4B566B]"
        items={categories}
      >
        Todas las Categorías
      </Dropdown>
    </section>
  );
}

export default SearchBar;
