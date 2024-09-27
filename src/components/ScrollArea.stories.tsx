import type { Meta, StoryObj } from "@storybook/react";

import ScrollArea from "./ScrollArea";

const meta = {
  title: "primitives/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "size-[100px]",
    children: (
      <div className="flex flex-col">
        <span>text</span>
        <span>text</span>
        <span>text</span>
        <span>text</span>
        <span>text</span>
      </div>
    ),
  },
};
