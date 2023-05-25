import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import MainPage from "./MainPage";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof MainPage> = {
  title: "page/MainPage",
  component: MainPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
