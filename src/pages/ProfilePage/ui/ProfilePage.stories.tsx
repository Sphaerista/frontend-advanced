import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/Decorators/StoreDecorator";

const meta: Meta<typeof ProfilePage> = {
  title: "page/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
};
// Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
// Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
