import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./Dropdown";

const meta = {
  component: Dropdown,
  title: "Primitives/Dropdown",
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemsClassName: "min-w-[174px] py-2.5 px-4",
    className:
      "min-w-[194px] bg-muted-400 py-3 px-5 text-white text-sm data-[state=open]:bg-[#EBEFF4] data-[state=open]:text-muted-500",
    items: [
      { label: "Todas", value: "todas" },
      { label: "Celulares", value: "mobiles" },
      { label: "Tablets", value: "tablets" },
    ],
    defaultLabel: "todas las cetegorias",
  },
};
