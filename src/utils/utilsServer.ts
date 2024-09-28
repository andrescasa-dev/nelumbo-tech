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
  console.log("fs endPoint", endPoint);
  const url = new URL(endPoint, process.env.BAKEND_URL);
  console.log("fs url", url);
  console.log("fs searchParams", url.searchParams.toString());
  const selectedBrands = url.searchParams.getAll("brand");

  console.log("fs selectedBrands", selectedBrands);

  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      let result = products;

      if (selectedBrands.length > 0) {
        result = result.filter(({ brand }) => selectedBrands.includes(brand));
      }

      resolve(result);
    }, 300);
  });
};
