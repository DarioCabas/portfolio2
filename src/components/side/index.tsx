import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { LOADER_DELAY } from '@/lib/constants';
import { StyledSideElement } from './styles';
import { StyleSheetManager } from 'styled-components';

interface SideProps {
  children: React.ReactNode;
  isHome?: boolean;
  orientation: string
}

const Side: React.FC<SideProps> = ({ children, isHome, orientation }) => {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      return () => { }; // Return an empty cleanup function
    }
    const timeout = setTimeout(() => setIsMounted(true), LOADER_DELAY);
    return () => clearTimeout(timeout);
  }, []);


  const shouldForwardProp = (prop: any) => prop !== 'isMounted';
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <StyledSideElement orientation={orientation}>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={isHome ? 'fade' : ''} timeout={isHome ? LOADER_DELAY : 0}>
              {children}
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledSideElement>
    </StyleSheetManager>
  );
};




export default Side;
