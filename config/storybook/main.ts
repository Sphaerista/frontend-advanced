import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false, // 👈 disable the backgrounds addon
      },
    },
    "@storybook/addon-interactions",
    // 'storybook-addon-themes'
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config?.resolve?.modules?.push(path.resolve(__dirname, "../../src"));
    return config;
  },
};
export default config;
