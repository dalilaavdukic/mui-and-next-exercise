import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Provider as ReduxProvider } from 'react-redux';
import defaultTheme from '../config/defaultTheme';
import customTheme from '../config/customTheme';
import createEmotionCache from '../config/createEmotionCache';
import Layout from '../components/layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CustomThemeContext } from '../providers/CustomThemeContext';
import { store } from '../services/store';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [isCustomThemeSelected, setIsCustomThemeSelected] = React.useState(false);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ReduxProvider store={store}>
        <ThemeProvider theme={isCustomThemeSelected ? customTheme : defaultTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <CustomThemeContext.Provider value={{
            isCustomSelected: isCustomThemeSelected,
            onThemeChange: setIsCustomThemeSelected
          }}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CustomThemeContext.Provider>
        </ThemeProvider>
      </ReduxProvider>
    </CacheProvider>
  );
}
