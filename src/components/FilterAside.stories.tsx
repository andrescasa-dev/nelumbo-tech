import type { Meta, StoryObj } from "@storybook/react";

import FilterAside from "./FilterAside";

const meta = {
  component: FilterAside,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FilterAside>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
