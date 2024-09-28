import "server-only";

export const paramsToUrlParams = (searchParamObj: SearchParamsProps) => {
  const params = new URLSearchParams();

  Object.entries(searchParamObj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((val) => params.append(key, val));
    } else if (value) {
      params.append(key, value);
    }
  });
  return params;
};

import { products } from "@/data"; // assuming you import products from somewhere

export const fetchSimulation = async (endPoint: string) => {
  console.log("endPoint", endPoint);
  const url = new URL(`${process.env.BAKEND_URL}${endPoint}`);
  console.log("url", url);
  console.log("url", url.searchParams.toString());
  const selectedBrands = url.searchParams.getAll("brans");

  console.log("selectedBrands", selectedBrands);

  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      let result = products;

      if (selectedBrands.length > 0) {
        result = result.filter(({ brand }) => selectedBrands.includes(brand));
      }

      resolve(result);
    }, 2000);
  });
};
