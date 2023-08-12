/* eslint-disable prefer-destructuring */
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import config from '@/config';
import { KEY_CODES } from '@/lib/constants';
import { useOnClickOutside } from '@/hooks';
import { StyledMenu, StyledHamburgerButton, StyledSidebar } from './styles';

const Menu = () => {
  const { navLinks } = config;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  let menuFocusables: (HTMLElement | null)[] = [];
  let firstFocusableEl: HTMLElement | null = null;
  let lastFocusableEl: HTMLElement | null = null;

  const setFocusables = () => {
    menuFocusables = [buttonRef.current, ...Array.from(navRef?.current?.querySelectorAll('a') || [])];
    firstFocusableEl = menuFocusables[0] ?? null;
    lastFocusableEl = menuFocusables[menuFocusables.length - 1] ?? null;
  };

  const handleBackwardTab = (e: any) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl?.focus();
    }
  };

  const handleForwardTab = (e: any) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl?.focus();
    }
  };

  const onKeyDown = (e: any) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (e: any) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    document.body.className = menuOpen ? 'blur' : '';
  }, [menuOpen]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside({ ref: wrapperRef, handler: () => setMenuOpen(false) });

  return (
    <StyledMenu>
      <div ref={wrapperRef}>
        <StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen} ref={buttonRef}>
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav ref={navRef}>
            {navLinks && (
              <ol>
                {navLinks.map(({ url, name }) => (
                  <li key={url}>
                    <Link href={url}>{name}</Link>
                  </li>
                ))}
              </ol>
            )}
            {/* 
            <a href="/resume.pdf" className="resume-link">
              Resume
            </a> */}
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default Menu;
