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
      "Insurance platform that connects the full team-book appointments, manage schedules, take notes, and coordinate across the organization in one unified workspace.",
    techs: ["React", "TypeScript", "MUI"],
  },
  {
    title: "Ten5",
    cover: "/ten5.png",
    github: "",
    external: "https://www.ten5connect.com/",
    description:
      "Voice-based fleet management interface powered by interactive voice experience (Ivex) technology. Drivers use brief voice commands to access information and send comments while fleet managers monitor and respond in real time.",
    techs: ["React", "TypeScript", "Vercel"],
  },
];

export default featuredProjects;
