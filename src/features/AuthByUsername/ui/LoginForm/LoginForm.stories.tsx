import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";

const meta: Meta<typeof LoginForm> = {
  title: "feature/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
