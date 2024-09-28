"use client";

import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { CheckedState } from "@radix-ui/react-checkbox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useId } from "react";
import Checkbox from "./Checkbox";

interface CheckBoxesFilterProps {
  items: item[];
  paramName: string;
}

function CheckBoxesFilter({ items, paramName }: CheckBoxesFilterProps) {
  const componentAccId = useId();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { pushQueryString, removeQueryString } = useUpdateSearchParams();

  const handleChecking = (value: string, isChecked: CheckedState) => {
    const params = isChecked
      ? pushQueryString(paramName, value)
      : removeQueryString(paramName, value);

    router.push(`${pathname}?${params}`);
  };

  const handleCheck = (value: string) =>
    searchParams.getAll(paramName).includes(value);

  return (
    <ul className="flex flex-col gap-1">
      {items.map(({ label, value }) => (
        <li key={value} className="flex gap-2.5 items-center">
          <Checkbox
            checked={handleCheck(value)}
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
