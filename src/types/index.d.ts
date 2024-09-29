type item = {
  label: string;
  value: string;
};

interface ImageProps {
  alt: string;
  src: string;
}

interface Quotas {
  week: number; // amount
  month: number; // amount
}

interface Product {
  brand: string;
  category: "cell-phones" | "tablets";
  id: string;
  image: ImageProps;
  title: string;
  rate: number; // from 0 to 5
  price: number;
  quotas: Quotas;
  discount?: number; // percentage
}

interface SearchParamsProps {
  [key: string]: string | string[] | undefined;
}
