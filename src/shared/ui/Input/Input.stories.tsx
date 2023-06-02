import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: "Text",
    value: "text",
  },
};

export const Dark: Story = {
  args: {
    placeholder: "Text",
    value: "text",
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
