import styled from 'styled-components';

interface StyledSideElementProps {
  orientation: string; // Define the type for the orientation prop
}

export const StyledSideElement = styled.div<StyledSideElementProps>` // Pass the interface to the styled component
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${(props) => (props.orientation === 'left' ? 'auto' : '40px')};
  z-index: 10;
  color: ${(props) => props.theme.bg.reverse};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    left: ${(props) => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${(props) => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;
