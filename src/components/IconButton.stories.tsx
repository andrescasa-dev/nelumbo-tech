import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "./IconButton";
import { ShoppingCart } from "lucide-react";

const meta = {
  title: "primitives/IconButton",
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
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <ShoppingCart className="size-5" />,
  },
};
