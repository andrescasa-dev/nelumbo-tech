import type { Meta, StoryObj } from "@storybook/react";

import ProductDialog from "./ProductDialog";
import Button from "./Button";

const meta = {
  component: ProductDialog,
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
} satisfies Meta<typeof ProductDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Button variant="primary" size="small">
        Lo quiero
      </Button>
    ),
    image: {
      alt: "Samsung Galaxy A12",
      src: "/Samsung-2.webp",
    },
    price: 2000,
    title: "Samsung Galaxy A12",
  },
};
