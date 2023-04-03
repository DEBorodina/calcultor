import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Router } from '@/router/Router';
import Global from '@/styles/global';
import GlobalThemProvider from '@/components/GlobalThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <ErrorBoundary fallback={<h1>Something went wrong...</h1>}>
    <Provider store={store}>
      {' '}
      <GlobalThemProvider>
        <Global />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GlobalThemProvider>
    </Provider>
  </ErrorBoundary>
);
