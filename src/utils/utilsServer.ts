import "server-only";
import { products, productsFullData } from "@/data";
import { resolve } from "path";

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

export const fetchProductsSimulation = async (endPoint: string) => {
  const url = new URL(endPoint, process.env.BAKEND_URL);
  const selectedBrands = url.searchParams.getAll("brand");
  const fromPrice = url.searchParams.get("fromPrice");
  const toPrice = url.searchParams.get("toPrice");
  const targetRating = url.searchParams.get("rating");
  const targetCategory = url.searchParams.get("category");

  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      let result = products;
      result = result.filter(({ brand, price, rate, category }) => {
        let doesSatisfy = true;
        if (fromPrice) {
          doesSatisfy = price >= Number(fromPrice);
        }
        if (toPrice) {
          doesSatisfy = doesSatisfy && price <= Number(toPrice);
        }
        if (targetRating) {
          doesSatisfy = doesSatisfy && rate === Number(targetRating);
        }
        if (selectedBrands.length > 0) {
          doesSatisfy = doesSatisfy && selectedBrands.includes(brand);
        }
        if (targetCategory) {
          doesSatisfy = doesSatisfy && targetCategory === category;
        }
        return doesSatisfy;
      });

      resolve(result);
    }, 300);
  });
};

export const fetchOneProductSimulation = (targetId: string)=>{
  return new Promise<ProductFullData | undefined>((resolve)=>{
    setTimeout(()=>{
      const item = productsFullData.find(({id})=> targetId === id)
      resolve(item)
    }, 300)
  })
}
