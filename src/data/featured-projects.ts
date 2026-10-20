export interface FeaturedProject {
  title: string;
  cover: string;
  github: string;
  external: string;
  description: string;
  techs: string[];
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "AIG4U",
    cover: "/aig4u.png",
    github: "",
    external: "https://www.aig.com.ec/",
    description:
      "Insurance platform where the whole team books appointments, manages schedules, takes notes and coordinates in one shared workspace.",
    techs: ["React", "TypeScript", "MUI"],
  },
  {
    title: "Ten5",
    cover: "/ten5.png",
    github: "",
    external: "https://www.ten5connect.com/",
    description:
      "Voice-first fleet management: drivers use short commands to get information and leave comments while managers monitor and respond in real time.",
    techs: ["React", "TypeScript", "Vercel"],
  },
  {
    title: "Buk",
    cover: "/buk.png",
    github: "",
    external: "https://www.buk.cl/",
    description:
      "HR and payroll platform used by companies across Latin America. I built and maintained product features across the Rails backend and the jQuery front end.",
    techs: ["Ruby on Rails", "jQuery", "JavaScript", "HTML", "CSS", "Bootstrap", "PostgreSQL"],
  },
];

export default featuredProjects;
