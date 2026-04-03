import React, { ReactNode } from 'react';
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

export default Main;
