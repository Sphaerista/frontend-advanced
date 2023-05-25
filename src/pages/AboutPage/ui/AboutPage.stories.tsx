import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import AboutPage from "./AboutPage";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof AboutPage> = {
  title: "page/AboutPage",
  component: AboutPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
