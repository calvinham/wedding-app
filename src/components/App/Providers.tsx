import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';

import store from '@/state/store';

import muiTheme from '@/lib/ui/muiTheme';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </BrowserRouter>
      </ReduxProvider>
    </>
  );
}
