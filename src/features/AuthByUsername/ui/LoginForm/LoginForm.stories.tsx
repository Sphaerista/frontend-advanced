import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import StoreDecorator from "shared/config/Decorators/StoreDecorator";

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

export const PrimaryIsLoading: Story = {
  args: {},
};
PrimaryIsLoading.decorators = [
  StoreDecorator({
    loginForm: { username: "aa", password: "1234", isLoading: true },
  }),
];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkWithError: Story = {
  args: {},
};
DarkWithError.decorators = [
  StoreDecorator({
    loginForm: { username: "aa", password: "1234", error: "Error" },
  }),
  ThemeDecorator(Theme.DARK),
];
