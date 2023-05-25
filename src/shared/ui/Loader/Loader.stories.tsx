import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
// import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";

const meta: Meta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {},
};
Secondary.decorators = [ThemeDecorator(Theme.DARK)];
