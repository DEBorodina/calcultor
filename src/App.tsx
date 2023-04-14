import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalThemProvider from '@/components/GlobalThemeProvider';
import { Router } from '@/router/Router';
import Global from '@/styles/global';

import { persistor, store } from './store';

export const App = () => {
  return (
    <ErrorBoundary fallback={<h1>Something went wrong...</h1>}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalThemProvider>
            <Global />
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </GlobalThemProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};
