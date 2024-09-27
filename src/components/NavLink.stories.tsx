import type { Meta, StoryObj } from "@storybook/react";

import NavLink from "./NavLink";

const meta = {
  title: "primitives/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Motocicletas",
    href: "#",
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    href: "#",
    children: "Celulares",
    isActive: true,
  },
};
