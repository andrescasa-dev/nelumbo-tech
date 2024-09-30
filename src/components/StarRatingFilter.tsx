"use client";

import { useEffect, useState } from "react";
import StarRating from "./StartRating";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function StarRatingFilter() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const route = useRouter();
  const [rating, setRating] = useState(
    searchParams.get("rating") === null
      ? 0
      : Number(searchParams.get("rating")),
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (rating !== 0) {
      params.set("rating", String(rating));
      route.push(`${pathName}?${params}`, { scroll: false });
    } else {
      const willRedirect = params.has("rating");
      params.delete("rating");
      if (willRedirect) route.push(`${pathName}?${params}`); //the willRedirect variables helps to not run into a rendering bucle
    }
  }, [rating, searchParams, route, pathName]);

  return (
    <StarRating
      isInteractive={true}
      rate={rating}
      onClick={(value) => setRating(value)}
    />
  );
}

export default StarRatingFilter;
