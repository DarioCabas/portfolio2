import { useState, useEffect, FC } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import config from '@/config';
import { LOADER_DELAY } from '@/lib/constants';
import { useScrollDirection } from '@/hooks';
import { IconLogo } from '@/components/icons';
// import * as gtag from '@lib/gtag';
import { StyledHeader, StyledNav, StyledLinks } from './styles';
import Menu from '@/components/menu';

interface NavProps {
  isHome: boolean;
}
const Nav: FC<NavProps> = ({ isHome }) => {
  const { navLinks } = config
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection({
    initialDirection: 'down', // or 'up'
  });
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? LOADER_DELAY : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  //   const handleClickResume = () => {
  //     if (IS_PRODUCTION) {
  //       gtag.event({
  //         action: 'click_resume',
  //         category: 'resume',
  //         label: 'user clicked on resume button',
  //       });
  //     }
  //     window.open('/resume.pdf', '_blank');
  //   };

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <div className="logo" tabIndex={-1}>
                {isHome ? (
                  <a href="/" aria-label="home">
                    <IconLogo  />
                  </a>
                ) : (
                  <Link href="/" aria-label="home">
                    <IconLogo />
                  </Link>
                )}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={name} classNames={fadeDownClass} timeout={timeout}>
                    <li key={url} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                      <a data-scroll href={url}>
                        {name}
                      </a>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>

          {/* <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                  <a onClick={handleClickResume} className="resume-button">
                    Resume
                  </a>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup> */}
        </StyledLinks>

        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>
      </StyledNav>
    </StyledHeader>
  );
};


export default Nav;
