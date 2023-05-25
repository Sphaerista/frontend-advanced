import type { Preview } from "@storybook/react";
import StyleDecorator from "../../src/shared/config/Decorators/StyleDecorator";
import ThemeDecorator from "../../src/shared/config/Decorators/ThemeDecorator";
import RouterDecorator from "../../src/shared/config/Decorators/RouterDecorator";
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
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
};

export default preview;
