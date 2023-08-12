/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';
import DefaultLayout from '@/layouts/default';
import GlobalStyles from '@/styles/globals';
import theme from '@/themes/dark';
import React from 'react';

interface PageComponentProps {
  Layout?: React.ComponentType<any>; // Change this type if you have more specific props
}

interface AppProps extends PageComponentProps {
  Component: React.ComponentType<any> & PageComponentProps; // Change this type if you have more specific props
  pageProps: any; // Change this type to match your pageProps
}
export default function App({ Component, pageProps }: AppProps) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
