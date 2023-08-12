'use client';

import type { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import DefaultLayout from '@/layouts/default';
import theme from '@/themes/dark';
import { NextComponentType, NextPageContext } from 'next';
import GlobalStyles from '@/styles/global';


interface LayoutProps {
  Component?: NextComponentType<NextPageContext, any, { Layout: React.ComponentType }>;
  children?: ReactNode;
  pageProps?: any;
}

export const Layout: FC<LayoutProps> = (props: LayoutProps) => {
  const { children, Component, pageProps } = props;
  //const Layout = (Component as any).Layout || DefaultLayout;

  return (

    <ThemeProvider theme={theme}>
     
        <GlobalStyles />
        {children}

    </ThemeProvider>



  );
};
