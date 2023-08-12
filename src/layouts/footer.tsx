/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { Icon } from '@/components/icons';
import config from '@/config';
import sr from '@/config/sr';
import Image from 'next/image';
import { StyledFooter, StyledSocialLinks, StyledMadeWith, StyledCredit } from './styles';

const Footer = () => {
    const { socialMedia } = config
  const revealContainer = useRef(null);
  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const srReveal = ScrollReveal.default();
    srReveal.reveal(revealContainer.current, sr.srConfig());
  }, []);

  return (
    <StyledFooter ref={revealContainer}>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }) => (
              <li key={name}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledMadeWith>
        <p>Made with</p>
        <a rel="noreferrer" target="_blank" href="https://nextjs.org/">
          <Image src="/nextjs-white-logo.svg" width={100} height={100} alt='' />
        </a>
      </StyledMadeWith>

      <StyledCredit tabIndex={-1}>
        <a rel="noreferrer" target="_blank" href="https://github.com/bchiang7/v4">
          <div>Adapted from the Brittany Chiang Portfolio</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
