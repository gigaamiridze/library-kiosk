import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserContextProvider, LibraryContextProvider } from './contexts';
import { theme } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <LibraryContextProvider>
            <App />
          </LibraryContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
