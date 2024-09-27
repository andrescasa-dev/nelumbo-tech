import type { Meta, StoryObj } from "@storybook/react";

import InputField from "./InputField";

const meta = {
  component: InputField,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "100",
  },
};
