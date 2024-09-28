import type { Meta, StoryObj } from "@storybook/react";

import ProductCardSklt from "./ProductCardSklt";

const meta = {
  component: ProductCardSklt,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProductCardSklt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
