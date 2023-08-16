import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import { Sidebar } from "./Sidebar";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/Decorators/StoreDecorator";

const meta: Meta<typeof Sidebar> = {
  title: "widget/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {},
};
Light.decorators = [
  StoreDecorator({
    user: { authData: {} },
  }),
];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: {} },
  }),
];

export const NoAuth: Story = {
  args: {},
};
NoAuth.decorators = [
  StoreDecorator({
    user: {},
  }),
];
