import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "widget/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
