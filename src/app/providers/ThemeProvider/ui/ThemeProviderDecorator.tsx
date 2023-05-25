import { FC, useState, useMemo, ReactNode } from "react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeContext } from "../lib/ThemeContext";

interface ThemeSBProviderProps {
  children: ReactNode;
  initialTheme: Theme;
}

export const ThemeSBProvider: FC<ThemeSBProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
