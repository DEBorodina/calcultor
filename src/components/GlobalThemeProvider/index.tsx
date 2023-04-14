import { ThemeProvider } from 'styled-components';

import { theme, themes } from '@/constants/themes';
import { useTypedSelector } from '@/hooks/';

const GlobalThemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme: theme = useTypedSelector((state) => state.theme.theme);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default GlobalThemProvider;
