/* eslint-disable max-len */
import React, { ReactNode, FC } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

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



      </Head>
      {children}
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default BaseLayout;
