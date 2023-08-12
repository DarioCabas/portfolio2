/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import config from '@/config';
import sr from '../../config/sr';
import { NumberedHeading } from '../../styles/common/styles';
import { StyledContactSection } from './styles';

const Contact = () => {
  const { email } = config
  const revealContainer = useRef(null);
  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const srReveal = ScrollReveal.default();
    srReveal.reveal(revealContainer.current, sr.srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <NumberedHeading overline>What’s Next?</NumberedHeading>

      <h2 className="title">Get In Touch</h2>

      <p>
        Although I&apos;m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to
        you!
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
