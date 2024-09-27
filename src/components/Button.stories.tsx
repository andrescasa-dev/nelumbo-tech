import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

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
      options: ["big", "small"],
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

export const Small: Story = {
  args: {
    children: "Lo Quiero",
    variant: "primary",
    size: "small",
  },
};
