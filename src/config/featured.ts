export interface FeaturedProject {
  title: string;
  cover: string;
  github: string;
  external: string;
  descriptionHtml: string;
  techs: string[];
}

const featured: FeaturedProject[] = [
  {
    title: 'AIG4U',
    cover: '/aig4u.png',
    github: '',
    external: 'https://www.aig.com.ec/',
    descriptionHtml:
      'This app permit to connect with all the team of a insurance, take a date, program, take notes ',
    techs: ['React', 'Typescript', 'Mui'],
  },
  {
    title: 'Ten5',
    cover: '/ten5.png',
    github: '',
    external: 'https://www.ten5connect.com/',
    descriptionHtml:
      'Ten5 is a simple voice-based interface driven by our interactive voice experience (Ivex) technology. Drivers use brief commands to listen to pre-programmed information, ask questions and send comments. Fleet managers and executives use the same platform to respond quickly to driver questions and concerns and prioritize attention to individual drivers based on what they are saying, and how they’re saying it.  ',
    techs: ['React', 'Typescript', 'Vercel'],
  },
];

export default featured;
