/* eslint-disable no-return-assign */
/* eslint-disable global-require */
import { useEffect, useRef } from 'react';


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

const Featured = () => {
  const { featuredProjects } = config
  const revealTitle = useRef<HTMLHeadingElement | null>(null);
  const revealProjects = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const srReveal = ScrollReveal.default();
    srReveal.reveal(revealTitle.current, sr.srConfig());
    revealProjects.current.forEach((ref, i) => srReveal.reveal(ref, sr.srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <NumberedHeading ref={revealTitle}>Some Projects I’ve Built</NumberedHeading>

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
                  <a href={external || github || '#'}>
                    <div className="img-wrapper">
                      <div className="img-cont" />
                      <StyledProjectImage src={cover} alt={title} className="img" />
                    </div>
                  </a>
                </StyledProjectImgWrapper>
              </StyledProject>
            );
          })}
      </div>
    </section>
  );
};

export default Featured;
