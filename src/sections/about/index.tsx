/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '../../styles/common/styles';
import Image from 'next/image';
import config from '@/config';
import sr from '../../config/sr';

import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const { skills } = config
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const srReveal = ScrollReveal.default();
    srReveal.reveal(revealContainer.current, sr.srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>About Me</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            <p>Hello! I&apos;m a Software Developer based in Quito, Ecuador.</p>
            <p>
              I enjoy creating beautiful and reliable applications for internet and phones.
              <br />
              My goal is to always build scalable products and performant experiences.
            </p>
            <br />
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image width={300} height={300} src="/avatar.png" alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
