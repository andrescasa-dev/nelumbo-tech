import "server-only";
import { products } from "@/data";

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

export const fetchSimulation = async (endPoint: string) => {
  const url = new URL(endPoint, process.env.BAKEND_URL);
  const selectedBrands = url.searchParams.getAll("brand");

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
