import type { Meta, StoryObj } from "@storybook/react";
import ThemeDecorator from "shared/config/Decorators/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/Decorators/StoreDecorator";
import { Country } from "entities/Country";
import avatar from "../../../shared/ui/Avatar/1987Thomas_Sankara.jpg";

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
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        firstname: "aa",
        lastname: "kk",
        age: 12,
        country: Country.Belarus,
        avatar,
      },
    },
  }),
];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        firstname: "aa",
        lastname: "kk",
        age: 12,
        country: Country.Belarus,
        avatar,
      },
    },
  }),
];
