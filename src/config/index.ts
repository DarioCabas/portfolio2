import featuredProjects, { FeaturedProject } from './featured';
import projects, { Project } from './projects';

interface SocialMediaLink {
  name: string;
  url: string;
}

interface NavLink {
  name: string;
  url: string;
}

interface ColorPalette {
  green: string;
  navy: string;
  darkNavy: string;
}

interface Config {
  email: string;
  featuredProjects: FeaturedProject[]; // Replace with the correct type if available
  projects: Project[]; // Replace with the correct type if available
  skills: string[];
  socialMedia: SocialMediaLink[];
  navLinks: NavLink[];
  colors: ColorPalette;
}

const config: Config = {
  email: 'hz-hertzio@hotmail.com',
  featuredProjects,
  projects,
  skills: ['JavaScript', 'TypeScript', 'React Native', 'React', 'Next.js', 'Redux', 'Python'],
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/DarioCabas',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dario-cabascango-9724431a3/',
    },
    {
      name: 'Instagram',
      url: '',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dario_cabas93',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Blog',
      url: '',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },
};

export default config;
