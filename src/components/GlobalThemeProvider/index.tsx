import { theme, themes } from '@/constants/themes';
import {
  getFromLocalStoradge,
  setToLocalStoradge,
} from '@/utils/localStoradge';
import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

interface ThemeContextInterface {
  handleSetTheme: (theme: theme) => void;
  theme: theme;
}

export interface GlobalThemProviderProps {
  children: React.ReactNode;
}

const GlobalThemProvider: React.FC<GlobalThemProviderProps> = ({
  children,
}) => {
  const currentTheme: theme = getFromLocalStoradge('theme') || 'light';
  const [theme, setTheme] = useState<theme>(currentTheme);

  const handleSetTheme = (newTheme: theme): void => {
    setTheme(newTheme);
    setToLocalStoradge('theme', newTheme);
  };

  const context: ThemeContextInterface = {
    handleSetTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={context}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default GlobalThemProvider;
