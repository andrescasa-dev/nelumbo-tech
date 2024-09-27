import React, { useId } from "react";
import Checkbox from "./Checkbox";
import ScrollArea from "./ScrollArea";
import InputField from "./InputField";
import StarRating from "./StartRating";
import Separator from "./Separator";

const brands = [
  "Apple",
  "Samsung",
  "Huawei",
  "Xiaomi",
  "Oppo",
  "Sony",
  "OnePlus",
  "Google",
  "Nokia",
  "Motorola",
  "LG",
];

function FilterAside() {
  const componentAccId = useId();
  return (
    <aside className="w-[21.938rem] shadow-soft flex flex-col gap-5 py-6">
      {/* brands */}
      <section className="px-6">
        <h3 className="mb-2 text-primary-500 font-bold">Marcas</h3>
        <ScrollArea className="h-[12.063rem] px-6">
          <ul className="flex flex-col gap-1">
            {brands.map((brand) => (
              <li key={brand} className="flex gap-2.5 items-center">
                <Checkbox
                  id={`${componentAccId}-${brand}`}
                  aria-label="select"
                />
                <label htmlFor={`${componentAccId}-${brand}`}>{brand}</label>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </section>

      <Separator />
      {/* price */}
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
      {/* rating */}
      <section className="px-6">
        <h3 className="mb-2 text-primary-500 font-bold">Reviews</h3>
        <StarRating rate={4} />
      </section>
    </aside>
  );
}

export default FilterAside;
