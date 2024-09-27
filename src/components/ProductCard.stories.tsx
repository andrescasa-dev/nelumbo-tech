import type { Meta, StoryObj } from "@storybook/react";

import ProductCard from "./ProductCard";

const meta = {
  component: ProductCard,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light-gray",
      values: [
        {
          name: "light-gray",
          value: "#EBEFF4",
        },
      ],
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithDiscount: Story = {
  args: {
    id: crypto.randomUUID(),
    image: {
      alt: "Samsung Galaxy A12",
      src: "/Samsung-2.webp",
    },
    price: 4100,
    quotas: {
      week: 10,
      month: 40,
    },
    rate: 3,
    title: "Samsung Galaxy A12",
    discount: 40,
  },
};

export const Default: Story = {
  args: {
    id: crypto.randomUUID(),
    image: {
      alt: "Samsung Galaxy A12",
      src: "/Samsung-2.webp",
    },
    price: 4100,
    quotas: {
      week: 10,
      month: 40,
    },
    rate: 3,
    title: "Samsung Galaxy A12",
  },
};
