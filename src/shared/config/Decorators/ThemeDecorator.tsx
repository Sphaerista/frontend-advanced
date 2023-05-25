import { Decorator } from "@storybook/react";
import { Theme, ThemeSBProvider } from "app/providers/ThemeProvider";

const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) =>
    (
      <ThemeSBProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeSBProvider>
    );

export default ThemeDecorator;
