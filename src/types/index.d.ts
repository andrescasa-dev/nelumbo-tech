type Item = {
  label: string;
  value: string;
};

interface ImageProps {
  alt: string;
  src: string;
}

interface Quotas {
  week: number;
  month: number;
}

type Discount = number | undefined;

interface DataItem {
  dataTitle: string;
  dataValue: string | number;
}

interface PaymentMethod {
  label: string;
  value: "visa" | "masterCard";
}

interface Product {
  brand: string;
  category: "cell-phones" | "tablets";
  id: string;
  image: ImageProps;
  title: string;
  rate: number;
  price: number;
  quotas: Quotas;
  discount: Discount;
}

interface ProductFullData {
  id: string;
  images: ImageProps[];
  price: number;
  quotas: Quotas;
  details: DataItem[];
  paymentMethods: PaymentMethod[];
  rate: number;
  discount: Discount;
  title: string;
  description: string;
}

interface SearchParamsProps {
  [key: string]: string | string[] | undefined;
}
