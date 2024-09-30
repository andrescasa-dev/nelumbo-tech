"use client";

import { CheckedState } from "@radix-ui/react-checkbox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useId } from "react";
import Checkbox from "./Checkbox";

interface CheckBoxesFilterProps {
  items: Item[];
  paramName: string;
}

function CheckBoxesFilter({ items, paramName }: CheckBoxesFilterProps) {
  const componentAccId = useId();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleChecking = async (value: string, isChecked: CheckedState) => {
    const params = new URLSearchParams(searchParams);

    if (isChecked) {
      params.append(paramName, value);
    } else {
      params.delete(paramName, value);
    }

    router.push(`${pathname}?${params}`);
  };

  const handleChecked = (value: string) =>
    searchParams.getAll(paramName).includes(value);

  return (
    <ul className="flex flex-col gap-1">
      {items.map(({ label, value }) => (
        <li key={value} className="flex items-center gap-2.5">
          <Checkbox
            defaultChecked={handleChecked(value)}
            onCheckedChange={(isChecked) => handleChecking(value, isChecked)}
            id={`${componentAccId}-${value}`}
            aria-label="select"
          />
          <label
            className="cursor-pointer"
            htmlFor={`${componentAccId}-${value}`}
          >
            {label}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default CheckBoxesFilter;
