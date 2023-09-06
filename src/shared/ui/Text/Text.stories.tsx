import type { Meta, StoryObj } from "@storybook/react";
import { SizeText, Text, ThemeText } from "./Text";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};

export const SizeXL: Story = {
  args: {
    title: "Title",
    text: "Text",
    size: SizeText.XL,
  },
};

export const Error: Story = {
  args: {
    title: "Title",
    text: "Text",
    theme: ThemeText.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Title",
  },
};

export const onlyText: Story = {
  args: {
    text: "Text",
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark: Story = {
  args: {
    title: "Title",
    text: "Text",
    theme: ThemeText.ERROR,
  },
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark: Story = {
  args: {
    title: "Title",
  },
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark: Story = {
  args: {
    text: "Text",
  },
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
