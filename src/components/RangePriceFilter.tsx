"use client";

import { FormEventHandler, useEffect, useState } from "react";
import InputField from "./InputField";
import IconButton from "./IconButton";
import { ArrowRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function RangePriceFilter() {
  const route = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [fromPrice, setFromPrice] = useState<string>("");
  const [toPrice, setToPrice] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (fromPrice) newParams.set("fromPrice", fromPrice);
    if (toPrice) newParams.set("toPrice", toPrice);
    route.replace(`${pathname}?${newParams}`);
  };

  useEffect(() => {
    // remove price params when the user empty one or the other input
    const newParams = new URLSearchParams(searchParams);
    if (fromPrice === "") {
      newParams.delete("fromPrice");
    }

    if (toPrice === "") {
      newParams.delete("toPrice");
    }

    route.replace(`${pathname}?${newParams}`);
  }, [fromPrice, toPrice, searchParams, pathname, route]);

  return (
    <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
      <InputField
        value={fromPrice}
        onChange={(e) => setFromPrice(e.target.value)}
        placeholder="100"
        className="w-full"
      />
      <span aria-hidden="true" className="text-[#B4B4B4]">
        {"-"}
      </span>
      <InputField
        value={toPrice}
        onChange={(e) => setToPrice(e.target.value)}
        placeholder="5,000"
        className="w-full"
      />
      <IconButton
        variant="primary"
        type="submit"
        disabled={fromPrice === "" && toPrice === ""}
      >
        <ArrowRight className="size-6" strokeWidth={3} />
      </IconButton>
    </form>
  );
}

export default RangePriceFilter;
