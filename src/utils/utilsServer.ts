import "server-only";
import { products } from "@/data";

export const paramsToUrlParams = (searchParams: SearchParamsProps) => {
  const params = new URLSearchParams();
  // since a param could have an array of string and URLSearchParams constructor do not support params as arrays, it is needed to iterate for each array param an append each of its values manually
  Object.entries(searchParams).forEach(([paramName, value]) => {
    if (Array.isArray(value)) {
      value.forEach((subValue) => params.append(paramName, subValue));
    } else if (value !== undefined) {
      params.append(paramName, value);
    }
  });

  return params;
};

export const fetchSimulation = async (endPoint: string) => {
  const url = new URL(endPoint, process.env.BAKEND_URL);
  const selectedBrands = url.searchParams.getAll("brand");
  const fromPrice = Number(url.searchParams.get("fromPrice"));
  const toPrice = Number(url.searchParams.get("toPrice"));

  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      let result = products;

      result = result.filter(({ brand, price }) => {
        let doesSatisfy = price >= fromPrice;

        if (!!toPrice) {
          doesSatisfy = doesSatisfy && price <= toPrice;
        }

        if (selectedBrands.length > 0) {
          doesSatisfy = doesSatisfy && selectedBrands.includes(brand);
        }
        return doesSatisfy;
      });

      resolve(result);
    }, 300);
  });
};
