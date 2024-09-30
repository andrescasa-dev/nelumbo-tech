// data generate with IA easily thanks to Type Scrypt

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
  },
  {
    id: "e1f2g3h4-5678-9101-1121-314151617181",
    images: [
      {
        src: "/tablet1.webp",
        alt: "Tablet Front",
      },
      {
        src: "/tablet1.webp",
        alt: "Tablet Back",
      },
      {
        src: "/tablet1.webp",
        alt: "Tablet Side",
      },
      {
        src: "/tablet1.webp",
        alt: "Tablet Display",
      },
    ],
    price: 3500,
    quotas: {
      week: 15,
      month: 60,
    },
    details: [
      { dataTitle: "Fabricante", dataValue: "TechCo" },
      { dataTitle: "Peso del producto", dataValue: "500 gr" },
      { dataTitle: "Dimensiones", dataValue: "9.7 x 6.5 x 0.3 pulgadas" },
      { dataTitle: "País de origen", dataValue: "Corea del Sur" },
      { dataTitle: "Número de modelo", dataValue: "TAB2021" },
      { dataTitle: "Color", dataValue: "Negro" },
      { dataTitle: "Material", dataValue: "Aluminio" },
      { dataTitle: "Cantidad de piezas", dataValue: 1 },
      {
        dataTitle: "Características especiales",
        dataValue: "Pantalla táctil, 64GB de almacenamiento",
      },
      {
        dataTitle: "Componentes incluidos",
        dataValue: "Tablet, Cargador USB-C, Manual de usuario",
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
    rate: 4,
    discount: 20,
    title: "TechCo Tablet Pro",
    description:
      "La TechCo Tablet Pro ofrece una experiencia de usuario fluida con su pantalla de alta resolución y almacenamiento expandible. Ideal para trabajo y entretenimiento.",
  },
];

export const products: Product[] = [
  {
    id: "4759e80a-0e26-4e5e-9ea7-184954dd695d",
    title: "Apple iPhone 12 Pro Max",
    category: "cell-phones",
    brand: "apple",
    image: {
      alt: "Apple iPhone 12 Pro Max",
      src: "/phone2.webp",
    },
    price: 2000,
    quotas: {
      week: 10,
      month: 40,
    },
    rate: 2,
    discount: 40,
  },
  {
    id: "a1b2c3d4-5678-9101-1121-314151617181",
    title: "Samsung Galaxy S21",
    category: "cell-phones",
    brand: "samsung",
    image: {
      alt: "Samsung Galaxy S21",
      src: "/Samsung-2.webp",
    },
    price: 5100,
    quotas: {
      week: 20,
      month: 80,
    },
    rate: 4,
    discount: 15,
  },
  {
    id: "b1c2d3e4-5678-9101-1121-314151617181",
    title: "Apple iPhone 13 Mini",
    category: "cell-phones",
    brand: "apple",
    image: {
      alt: "Apple iPhone 13 Mini",
      src: "/phone2.webp",
    },
    price: 6200,
    quotas: {
      week: 15,
      month: 60,
    },
    rate: 5,
    discount: 10,
  },
  {
    id: "c1d2e3f4-5678-9101-1121-314151617181",
    title: "Samsung Galaxy Note 20",
    category: "cell-phones",
    brand: "samsung",
    image: {
      alt: "Samsung Galaxy Note 20",
      src: "/Samsung-2.webp",
    },
    price: 7100,
    quotas: {
      week: 25,
      month: 100,
    },
    rate: 4,
    discount: 20,
  },
  {
    id: "d1e2f3g4-5678-9101-1121-314151617181",
    title: "Apple iPhone SE (2022)",
    category: "cell-phones",
    brand: "apple",
    image: {
      alt: "Apple iPhone SE (2022)",
      src: "/phone2.webp",
    },
    price: 8100,
    quotas: {
      week: 12,
      month: 48,
    },
    rate: 3,
    discount: 5,
  },
  {
    id: "e1f2g3h4-5678-9101-1121-314151617181",
    title: "Samsung Galaxy Tab S7",
    category: "tablets",
    brand: "samsung",
    image: {
      alt: "Samsung Galaxy Tab S7",
      src: "/tablet1.webp",
    },
    price: 2500,
    quotas: {
      week: 10,
      month: 40,
    },
    rate: 4,
    discount: 25,
  },
  {
    id: "f1g2h3i4-5678-9101-1121-314151617181",
    title: "Apple iPad Pro",
    category: "tablets",
    brand: "apple",
    image: {
      alt: "Apple iPad Pro",
      src: "/tablet2.webp",
    },
    price: 6000,
    quotas: {
      week: 18,
      month: 72,
    },
    rate: 5,
    discount: 12,
  },
  {
    id: "g1h2i3j4-5678-9101-1121-314151617181",
    title: "Samsung Galaxy Tab A7",
    category: "tablets",
    brand: "samsung",
    image: {
      alt: "Samsung Galaxy Tab A7",
      src: "/tablet1.webp",
    },
    price: 3200,
    quotas: {
      week: 8,
      month: 32,
    },
    rate: 3,
    discount: 18,
  },
  {
    id: "g1h2i3j4-4444-9101-1121-314151617181",
    title: "Samsung Galaxy Tab A7",
    category: "tablets",
    brand: "samsung",
    image: {
      alt: "Samsung Galaxy Tab A7",
      src: "/tablet1.webp",
    },
    price: 3200,
    quotas: {
      week: 8,
      month: 32,
    },
    rate: 3,
    discount: 18,
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
