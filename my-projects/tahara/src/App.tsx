import HomePage from './Components/HomePage/HomePage';
import { ThemeProvider, createTheme } from '@mui/material';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';

const Theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: "Heebo, sans-serif",
  }
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={Theme}>
        <HomePage LastEvent="Period" />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;