/* eslint-disable no-return-assign */
/* eslint-disable global-require */
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import config from '@/config';
import {
  StyledProject,
  StyledProjectLinks,
  StyledProjectImgWrapper,
  StyledProjectImage,
} from './styles';
import { NumberedHeading } from '@/styles/common/styles';
import sr from '@/config/sr';
import { Icon } from '@/components/icons';
import usePrefersReducedMotion from '@/hooks/use-prefers-reduced-motion';

const ImageViewer = dynamic(() => import('@/components/image-viewer'), { ssr: false });

const Featured = () => {
  const { featuredProjects } = config;
  const prefersReducedMotion = usePrefersReducedMotion();
  const revealTitle = useRef<HTMLHeadingElement | null>(null);
  const revealProjects = useRef<(HTMLDivElement | null)[]>([]);
  const [viewerSrc, setViewerSrc] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const srReveal = ScrollReveal.default();
    srReveal.reveal(revealTitle.current, sr.srConfig());
    revealProjects.current.forEach((ref, i) => {
      const cfg = i % 2 === 0 ? sr.srLeft(i * 150) : sr.srRight(i * 150);
      srReveal.reveal(ref, cfg);
    });
  }, []);

  const openViewer = (src: string, alt: string, imgEl: HTMLImageElement | null) => {
    if (!prefersReducedMotion && imgEl && 'startViewTransition' in document) {
      const transitionName = `project-img-${alt.replace(/\s+/g, '-').toLowerCase()}`;
      (imgEl.style as any).viewTransitionName = transitionName;
      (document as any).startViewTransition(() => {
        setViewerSrc({ src, alt });
      });
    } else {
      setViewerSrc({ src, alt });
    }
  };

  const closeViewer = () => setViewerSrc(null);

  return (
    <>
      {viewerSrc && (
        <ImageViewer src={viewerSrc.src} alt={viewerSrc.alt} onClose={closeViewer} />
      )}

      <section id="projects">
        <NumberedHeading ref={revealTitle}>Some Projects I&apos;ve Built</NumberedHeading>

        <div>
          {featuredProjects &&
            featuredProjects.map((project, i) => {
              const { title, external, techs, github, cover, descriptionHtml } = project;
              return (
                <StyledProject key={title} ref={(el) => (revealProjects.current[i] = el)}>
                  <div className="project-content">
                    <p className="project-overline">Featured Project</p>
                    <h3 className="project-title">{title}</h3>
                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                    />

                    {techs.length && (
                      <ul className="project-tech-list">
                        {techs.map((tech) => (
                          <li key={tech}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <StyledProjectLinks>
                      {github && (
                        <a rel="noreferrer" target="_blank" href={github} aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href={external}
                          aria-label="External Link"
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </StyledProjectLinks>
                  </div>

                  <StyledProjectImgWrapper>
                    {/* Clickable image → opens viewer */}
                    <button
                      className="img-btn"
                      onClick={(e) => {
                        const img = (e.currentTarget as HTMLElement).querySelector('img');
                        openViewer(cover, title, img as HTMLImageElement);
                      }}
                      aria-label={`View ${title} image fullscreen`}
                    >
                      <div className="img-wrapper">
                        <div className="img-cont" />
                        <StyledProjectImage src={cover} alt={title} className="img" />
                      </div>
                      <span className="zoom-hint" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                        </svg>
                        Click to expand
                      </span>
                    </button>
                  </StyledProjectImgWrapper>
                </StyledProject>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Featured;
