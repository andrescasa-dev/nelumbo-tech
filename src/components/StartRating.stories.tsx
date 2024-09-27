import type { Meta, StoryObj } from "@storybook/react";

import StartRating from "./StartRating";

const meta = {
  title: "primitives/StartRating",
  component: StartRating,
} satisfies Meta<typeof StartRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rate: 3,
  },
};

export const Small: Story = {
  args: {
    rate: 2,
    size: "sm",
  },
};
