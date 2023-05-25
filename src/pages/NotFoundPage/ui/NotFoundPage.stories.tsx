import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import { NotFoundPage } from "./NotFoundPage";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof NotFoundPage> = {
  title: "page/NotFoundPage",
  component: NotFoundPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
