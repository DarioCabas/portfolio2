import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { StyleSheetManager } from 'styled-components';
import { StyledLoader } from './styles';
import { IconLoader } from '../icons';

interface LoaderProps {
  onFinish: () => void;
}

const Loader = ({ onFinish }: LoaderProps) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => onFinish(),
    });

    loader.add({
      targets: '#logo',
      delay: 1000,
      duration: 300,
      easing: 'easeInOutSine',
      opacity: 0,
      scale: 0.1,
    });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  const shouldForwardProp = (prop: any) => prop !== 'isMounted';

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <StyledLoader className="loader" isMounted={isMounted}>
        <div className="logo-wrapper">
          <IconLoader />
        </div>
      </StyledLoader>
    </StyleSheetManager>
  );
};

Loader.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default Loader;
