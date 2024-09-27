import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";

const meta = {
  title: "primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["big"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Crea tu cuenta",
    variant: "primary",
    size: "big",
  },
};

export const Ghost: Story = {
  args: {
    children: "Crea tu cuenta",
    variant: "ghost",
    size: "big",
  },
};

export const Icon: Story = {
  args: {
    children: <ShoppingCart className="size-4" />,
    variant: "Icon",
    size: "big",
  },
};
