import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '@/router/Router';
import Global from '@/styles/global';
import GlobalThemProvider from '@/components/GlobalThemeProvider';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <GlobalThemProvider>
    <Global />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </GlobalThemProvider>
);
