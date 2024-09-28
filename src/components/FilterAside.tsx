"use client";

import { CheckedState } from "@radix-ui/react-checkbox";
import { useCallback, useId } from "react";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import ScrollArea from "./ScrollArea";
import Separator from "./Separator";
import StarRating from "./StartRating";
import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

interface FilterAsideProps {
  brands: string[];
}

function FilterAside({ brands }: FilterAsideProps) {
  const componentAccId = useId();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pushQueryString = useCallback(
    (name: string, value: string, searchParams: ReadonlyURLSearchParams) => {
      const params = new URLSearchParams(searchParams.toString());

      const prevValues = params.get(name)?.split(",") ?? [];
      const values = [...prevValues, value].join(",");

      params.set(name, values);

      return params.toString();
    },
    [],
  );

  const removeQueryString = useCallback(
    (name: string, value: string, searchParams: ReadonlyURLSearchParams) => {
      const params = new URLSearchParams(searchParams.toString());
      const prevValues = params.get(name)?.split(",") ?? [];
      const values = prevValues.filter((val) => val !== value).join(",");

      if (values === "") {
        params.delete(name);
      } else {
        params.set(name, values);
      }

      return params.toString();
    },
    [],
  );

  const handleBrandChecking = (brand: string, isChecked: CheckedState) => {
    const params = isChecked
      ? pushQueryString("brand", brand, searchParams)
      : removeQueryString("brand", brand, searchParams);

    router.push(`${pathname}?${params}`);
  };

  return (
    <aside className="w-[21.938rem] shadow-soft flex flex-col gap-5 py-6 bg-white h-fit">
      <section className="px-6">
        <h3 className="mb-2 text-primary-500 font-bold">Marcas</h3>
        <ScrollArea className="h-[12.063rem] px-6">
          <ul className="flex flex-col gap-1">
            {brands.map((brand) => (
              <li key={brand} className="flex gap-2.5 items-center">
                <Checkbox
                  value={brand}
                  onCheckedChange={(isChecked) =>
                    handleBrandChecking(brand, isChecked)
                  }
                  id={`${componentAccId}-${brand}`}
                  aria-label="select"
                />
                <label
                  className="cursor-pointer"
                  htmlFor={`${componentAccId}-${brand}`}
                >
                  {brand}
                </label>
              </li>
            ))}
          </ul>
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
