import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";
import { Country } from "entities/Country";
import avatar from "../../../../shared/ui/Avatar/1987Thomas_Sankara.jpg";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/LoginForm",
  component: ProfileCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      firstname: "aa",
      lastname: "kk",
      age: 12,
      country: Country.Belarus,
      avatar,
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const withError: Story = {
  args: {
    error: "true",
  },
};
