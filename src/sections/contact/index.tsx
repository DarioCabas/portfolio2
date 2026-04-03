/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import config from '@/config';
import sr from '../../config/sr';
import { NumberedHeading } from '../../styles/common/styles';
import { StyledContactSection } from './styles';

const Contact = () => {
  const { email } = config;
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const srReveal = ScrollReveal.default();
    srReveal.reveal(revealContainer.current, sr.srTilt(100, 0.2));
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <div className="contact-card">
        <p className="contact-overline">What&apos;s Next?</p>
        <h2 className="title">Get In Touch</h2>

        <p>
          Although I&apos;m not currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll try my best to get
          back to you!
        </p>

        <a className="email-link" href={`mailto:${email}`}>
          Say Hello
        </a>
      </div>
    </StyledContactSection>
  );
};

export default Contact;
