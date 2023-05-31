import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      "asset main.9e4ea0e053a76390b01a.hot-update.json 28 bytes [emitted][immutable] [hmr] Entrypoint main 4.15 MiB =main.6a2efda5bbf211b31ab0.js 4.14 MiBmain.9e4ea0e053a76390b01a.hot-update.js 10.1 KiB",
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      "asset main.9e4ea0e053a76390b01a.hot-update.json 28 bytes [emitted][immutable] [hmr] Entrypoint main 4.15 MiB =main.6a2efda5bbf211b31ab0.js 4.14 MiBmain.9e4ea0e053a76390b01a.hot-update.js 10.1 KiB",
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
