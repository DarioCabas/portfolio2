/* eslint-disable max-len */
import React, { ReactNode, FC } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

interface BaseLayoutProps {
  children: ReactNode | ReactNode[];
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children })=> {
  return (
    <div id="main">
      <Head>
        <title>Darío Cabascango | Web & Mobile developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        
      </Head>
      {children}
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default BaseLayout;
