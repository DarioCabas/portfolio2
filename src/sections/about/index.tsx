/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '../../styles/common/styles';
import Image from 'next/image';
import config from '@/config';
import sr from '../../config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const { skills } = config;
  const revealHeading = useRef(null);
  const revealText = useRef(null);
  const revealPic = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const srReveal = ScrollReveal.default();
    srReveal.reveal(revealHeading.current, sr.srConfig());
    srReveal.reveal(revealText.current, sr.srLeft(100));
    srReveal.reveal(revealPic.current, sr.srRight(200));
  }, []);

  return (
    <StyledAboutSection id="about">
      <NumberedHeading ref={revealHeading}>About Me</NumberedHeading>
      <div className="inner">
        <StyledText ref={revealText}>
          <div>
            <p>Hello! I&apos;m a Software Developer based in Quito, Ecuador.</p>
            <p>
              I enjoy creating beautiful and reliable applications for the web and mobile.
              My goal is to always build scalable products and performant experiences
              that people love to use.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>

          <p className="skills-label">Tech Stack</p>
          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic ref={revealPic}>
          <div className="wrapper">
            <Image
              width={300}
              height={300}
              src="/avatar.png"
              alt="Darío Cabascango"
              className="img"
            />
          </div>
          <div className="pic-badge">
            <span>Based in Quito, Ecuador 🇪🇨</span>
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
