import React, { FC } from 'react';
import PropTypes from 'prop-types';
import config from '@/config';

import { StyledLinkWrapper } from './styles';
import Side from '../side';

interface EmailProps {
  isHome?: boolean;
}
const Email: React.FC<EmailProps> = ({ isHome })=> {
  const { email } = config;
  return (
    <Side isHome={isHome} orientation="right">
      <StyledLinkWrapper>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledLinkWrapper>
    </Side>
  )
}



Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
