import type { Meta, StoryObj } from "@storybook/react";
import { Button, SizeButton, ThemeButton } from "./Button";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    children: "Text",
    disabled: true,
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
  },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkSizeL: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
  },
};
OutlineDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDarkSizeXL: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
  },
};
OutlineDarkSizeXL.decorators = [ThemeDecorator(Theme.DARK)];

export const backgroundInverted: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.BACKGROUND,
  },
};

export const Background: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: ">",
    theme: ThemeButton.OUTLINE,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ThemeButton.OUTLINE,
    square: true,
    size: SizeButton.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    theme: ThemeButton.OUTLINE,
    square: true,
    size: SizeButton.XL,
  },
};
