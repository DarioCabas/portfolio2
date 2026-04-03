import React, { FC } from 'react';
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
        <a href={`mailto:${email}`} aria-label="Send me an email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M2 7l10 7 10-7"/>
          </svg>
        </a>
      </StyledLinkWrapper>
    </Side>
  )
}



export default Email;
