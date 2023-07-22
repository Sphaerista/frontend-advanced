import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof ProfilePage> = {
  title: "page/MainPage",
  component: ProfilePage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
