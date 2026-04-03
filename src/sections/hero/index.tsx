/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import config from '@/config';
import { NAV_DELAY, LOADER_DELAY } from '@/lib/constants';
import { StyledHeroSection, StyledBigTitle, StyledGradientTitle } from './styles';
import { StyleSheetManager } from 'styled-components';
import TypingAnimation from '@/components/typing-animation';

const ThreeBackground = dynamic(() => import('@/components/three-background'), { ssr: false });

const Hero = () => {
  const { email } = config;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), NAV_DELAY);
    return () => clearTimeout(timeout);
  }, []);

  const one = <p className="greeting">Hi there, I&apos;m</p>;
  const two = <StyledBigTitle>Darío Cabascango.</StyledBigTitle>;
  const three = (
    <StyledGradientTitle>
      <TypingAnimation
        words={[
          'I build web experiences.',
          'I craft mobile apps.',
          'I love clean code.',
          'I create digital products.',
        ]}
      />
    </StyledGradientTitle>
  );
  const four = (
    <p className="description">
      Software developer based in Quito, Ecuador — specializing in building exceptional
      web and mobile applications with scalable architecture and delightful user experiences.
    </p>
  );
  const five = (
    <div className="cta-group">
      <a href={`mailto:${email}`} className="email-link">
        Get In Touch
      </a>
      <a href="#about" className="secondary-link">
        Learn more
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  const shouldForwardProp = (prop: any) => prop !== 'isMounted';

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <StyledHeroSection>
        <ThreeBackground />
        <div className="hero-content">
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={LOADER_DELAY}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
      </StyledHeroSection>
    </StyleSheetManager>
  );
};

export default Hero;
