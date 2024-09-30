export const productsFullData: ProductFullData[] = [
  {
    id: "4759e80a-0e26-4e5e-9ea7-184954dd695d",    
    images: [
      {
        src: "/Samsung-2.webp",
        alt: "some alt",
      },
      {
        src: "/Samsung-2.webp",
        alt: "some alt",
      },
      {
        src: "/Samsung-2.webp",
        alt: "some alt",
      },
      {
        src: "/Samsung-2.webp",
        alt: "some alt",
      },
    ],
    price: 2000,
    quotas: {
      week: 10,
      month: 40,
    },
    details: [
      { dataTitle: "Fabricante", dataValue: "Sample" },
      { dataTitle: "Peso del producto", dataValue: "50 gr" },
      { dataTitle: "Dimensiones", dataValue: "11 x 10 x 0.4 pulgadas" },
      { dataTitle: "País de origen", dataValue: "China" },
      { dataTitle: "Número de modelo", dataValue: "134687" },
      { dataTitle: "Color", dataValue: "Plata" },
      { dataTitle: "Material", dataValue: "Silicona plástica" },
      { dataTitle: "Cantidad de piezas", dataValue: 4 },
      {
        dataTitle: "Características especiales",
        dataValue: "Resistente al agua",
      },
      {
        dataTitle: "Componentes incluidos",
        dataValue: "Audífonos, Cargador y Manual de usuario",
      },
    ],
    paymentMethods: [
      {
        label: "Visa",
        value: "visa" as const,
      },
      {
        label: "MasterCard",
        value: "masterCard" as const,
      },
    ],
    rate: 2,
    discount: 40,
    title: "Samsung Galaxy A12",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  }
]

export const products: Product[] = [
  {
    id: "4759e80a-0e26-4e5e-9ea7-184954dd695d",
    category: "cell-phones",
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
    rate: 2,
    discount: 40,
    title: "Samsung Galaxy A12",
  },
  {
    id: crypto.randomUUID(),
    category: "cell-phones",
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
     discount: 40,
  },
  {
    id: crypto.randomUUID(),
    category: "cell-phones",
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
    rate: 4,
    title: "apple",
     discount: 40,
  },
  {
    id: crypto.randomUUID(),
    category: "cell-phones",
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
    rate: 5,
    title: "apple",
     discount: 40,
  },
  {
    id: crypto.randomUUID(),
    category: "cell-phones",
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
    rate: 6,
    title: "apple",
     discount: 40,
  },
  {
    id: crypto.randomUUID(),
    category: "tablets",
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
    rate: 2,
    discount: 40,
    title: "Samsung Galaxy A12",
  },
  {
    id: crypto.randomUUID(),
    category: "tablets",
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
     discount: 40,
  },
  {
    id: crypto.randomUUID(),
    category: "tablets",
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
    rate: 4,
    title: "apple",
     discount: 40,
  },
];

export const categories = [
  { label: "Todas", value: "all" },
  { label: "Celulares", value: "cell-phones" },
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
