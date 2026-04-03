import styled from 'styled-components';

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  a {
    margin: 20px auto;
    padding: 10px;
    color: ${(props) => props.theme.text?.accent};
    transition: ${(props) => props.theme.transitions?.default};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover,
    &:focus {
      color: ${(props) => props.theme.brand?.primary};
      transform: translateY(-3px);
    }
  }
`;
