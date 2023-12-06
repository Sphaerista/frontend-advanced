import type { Preview } from "@storybook/react";
import StyleDecorator from "../../src/shared/config/Decorators/StyleDecorator";
import ThemeDecorator from "../../src/shared/config/Decorators/ThemeDecorator";
import RouterDecorator from "../../src/shared/config/Decorators/RouterDecorator";
import StoreDecorator from "../../src/shared/config/Decorators/StoreDecorator";
import SuspenseDecorator from "../../src/shared/config/Decorators/SuspenseDecorator";
// import TranslationDecorator from "../../src/shared/config/Decorators/TranslationDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider/lib/ThemeContext";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
    themes: {
      default: "light",
      list: [
        { name: "light", class: Theme.LIGHT, color: "#fff" },
        { name: "dark", class: Theme.DARK, color: "#000" },
        { name: "lgbt", class: Theme.LGBT, color: "#3b5998" },
      ],
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
    StoreDecorator({
      loginForm: {
        username: "aa",
        password: "1234",
      },
    }),
    // TranslationDecorator,
  ],
};

export default preview;
