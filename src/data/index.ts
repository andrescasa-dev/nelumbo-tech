export const products: Product[] = [
  {
    id: crypto.randomUUID(),
    brand: "samsung",
    image: {
      alt: "Samsung Galaxy A12",
      src: "/Samsung-2.webp",
    },
    price: 2000,
    quotas: {
      week: 10,
      month: 40,
    },
    rate: 3,
    discount: 40,
    title: "Samsung Galaxy A12",
  },
  {
    id: crypto.randomUUID(),
    brand: "apple",
    image: {
      alt: "apple",
      src: "/Samsung-2.webp",
    },
    price: 5100,
    quotas: {
      week: 10,
      month: 40,
    },
    rate: 3,
    title: "apple",
  },
  {
    id: crypto.randomUUID(),
    brand: "apple",
    image: {
      alt: "apple",
      src: "/Samsung-2.webp",
    },
    price: 6200,
    quotas: {
      week: 10,
      month: 40,
    },
    rate: 3,
    title: "apple",
  },
  {
    id: crypto.randomUUID(),
    brand: "apple",
    image: {
      alt: "apple",
      src: "/Samsung-2.webp",
    },
    price: 7100,
    quotas: {
      week: 10,
      month: 40,
    },
    rate: 3,
    title: "apple",
  },
  {
    id: crypto.randomUUID(),
    brand: "apple",
    image: {
      alt: "apple",
      src: "/Samsung-2.webp",
    },
    price: 8100,
    quotas: {
      week: 10,
      month: 40,
    },
    rate: 3,
    title: "apple",
  },
];

export const categories = [
  { label: "Todas", value: "todas" },
  { label: "Celulares", value: "mobiles" },
  { label: "Tablets", value: "tablets" },
];

export const brands = [
  { label: "Apple", value: "apple" },
  { label: "Samsung", value: "samsung" },
  { label: "Huawei", value: "huawei" },
  { label: "Xiaomi", value: "xiaomi" },
  { label: "Oppo", value: "oppo" },
  { label: "Sony", value: "sony" },
  { label: "OnePlus", value: "onePlus" },
  { label: "Google", value: "google" },
  { label: "Nokia", value: "nokia" },
  { label: "Motorola", value: "motorola" },
  { label: "LG", value: "lg" },
];
