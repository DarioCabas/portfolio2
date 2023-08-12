import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { MainContainer } from './styles';

interface MainProps {
  id?: string;
  className?: string;
  children: ReactNode | ReactNode[];
}

const Main: React.FC<MainProps> = ({ id, children, className }) => (
  <MainContainer id={id} className={className}>
    {children}
  </MainContainer>
);

Main.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Main;
