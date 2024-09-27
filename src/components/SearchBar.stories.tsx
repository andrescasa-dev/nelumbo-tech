import type { Meta, StoryObj } from "@storybook/react";

import SearchBar from "./SearchBar";

const meta = {
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categories: [
      { label: "Todas", value: "todas" },
      { label: "Celulares", value: "mobiles" },
      { label: "Tablets", value: "tablets" },
    ],
  },
};
