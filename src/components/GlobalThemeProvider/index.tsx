import { theme, themes } from '@/constants/themes';
import { GlobalStore } from '@/store/types';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const GlobalThemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme: theme = useSelector((state: GlobalStore) => state.theme.theme);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default GlobalThemProvider;
