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
  email: 'jrgarciadev@gmail.com',
  featuredProjects,
  projects,
  skills: ['JavaScript', 'TypeScript', 'React Native', 'React', 'Next.js', 'GraphQL'],
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jrgarciadev',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jrgarciadev/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jrgarciadev',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jrgarciadev',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Blog',
      url: 'https://blog.jrgarciadev.com',
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
