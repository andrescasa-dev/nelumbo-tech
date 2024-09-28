"use client";

import CheckBoxesFilter from "./CheckBoxesFilter";
import InputField from "./InputField";
import ScrollArea from "./ScrollArea";
import Separator from "./Separator";
import StarRating from "./StartRating";

interface FilterAsideProps {
  brands: item[];
}

function FilterAside({ brands }: FilterAsideProps) {
  return (
    <aside className="w-[21.938rem] shadow-soft flex flex-col gap-5 py-6 bg-white h-fit">
      <section className="px-6">
        <h3 className="mb-2 text-primary-500 font-bold">Marcas</h3>
        <ScrollArea className="h-[12.063rem] px-6">
          <CheckBoxesFilter items={brands} paramName={"brand"} />
        </ScrollArea>
      </section>

      <Separator />
      <section className="px-6">
        <h3 className="mb-2 text-primary-500 font-bold">Precio</h3>
        <div className="flex gap-2 items-center">
          <InputField placeholder="100" className="w-full" />
          <span aria-hidden="true" className="text-[#B4B4B4]">
            {"-"}
          </span>
          <InputField placeholder="5,000" className="w-full" />
        </div>
      </section>

      <Separator />
      <section className="px-6">
        <h3 className="mb-2 text-primary-500 font-bold">Reviews</h3>
        <StarRating rate={4} />
      </section>
    </aside>
  );
}

export default FilterAside;
