/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable global-require */
/* eslint-disable no-return-assign */
import { useEffect, useRef } from 'react';
import config from '@/config';
import sr from '@/config/sr';
import { StyledProject, StyledProjectsSection } from './styles';
import { Icon } from '@/components/icons';

const Projects = () => {
  const { projects } = config;

  const revealTitle = useRef(null);
  const revealProjects = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const srReveal = ScrollReveal.default();
    srReveal.reveal(revealTitle.current, sr.srConfig());
    revealProjects.current.forEach((ref, i) =>
      srReveal.reveal(ref, sr.srScale(i * 120, 0.08))
    );
  }, []);

  const handleClickProject = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <StyledProjectsSection>
      <div className="title-container" ref={revealTitle}>
        <h2>Other Projects</h2>
      </div>

      <div className="projects-bento">
        {projects.map((project, i) => {
          const { title, descriptionHtml, github, external, techs } = project;
          return (
            <StyledProject
              key={title}
              ref={(el) => (revealProjects.current[i] = el)}
              tabIndex={0}
              className={`bento-card bento-card--${i + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (external || github)) {
                  handleClickProject(external || github);
                }
              }}
            >
              <div className="project-inner">
                <header>
                  <div className="project-top">
                    <span className="project-number">0{i + 1}</span>
                    <div className="project-links">
                      {github && (
                        <a
                          onClick={() => handleClickProject(github)}
                          aria-label="GitHub Link"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && handleClickProject(github)}
                        >
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a
                          onClick={() => handleClickProject(external)}
                          aria-label="External Link"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && handleClickProject(external)}
                        >
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-folder">
                    <Icon name="Folder" />
                  </div>

                  <h3 className="project-title">{title}</h3>
                  <div
                    className="project-description"
                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  />
                </header>

                <footer>
                  {techs && (
                    <ul className="project-tech-list">
                      {techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </footer>

                <div className="card-glow" aria-hidden="true" />
              </div>
            </StyledProject>
          );
        })}
      </div>
    </StyledProjectsSection>
  );
};

export default Projects;
