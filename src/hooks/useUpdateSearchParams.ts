"use client";

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

function useUpdateSearchParams() {
  const searchParams = useSearchParams();

  const pushQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.append(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const removeQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name, value);
      return params.toString();
    },
    [searchParams],
  );
  return { pushQueryString, removeQueryString };
}

export default useUpdateSearchParams;
