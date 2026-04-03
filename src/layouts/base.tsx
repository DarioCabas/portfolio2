/* eslint-disable max-len */
import React, { ReactNode, FC } from 'react';
import Head from 'next/head';

interface BaseLayoutProps {
  children: ReactNode | ReactNode[];
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div id="main">
      <Head>
        <title>Darío Cabascango | Web & Mobile developer</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </div>
  );
};

export default BaseLayout;
