export interface NavLink {
  name: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface ProfileFact {
  label: string;
  value: string;
}

export const email = "dario.cabascango.dev@gmail.com";

export const navLinks: NavLink[] = [
  { name: "About", url: "/#about" },
  { name: "UX", url: "/#ux" },
  { name: "AI", url: "/#ai" },
  { name: "Work", url: "/#projects" },
  { name: "Contact", url: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/DarioCabas" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dario-cabascango-9724431a3/",
  },
];

export const profileFacts: ProfileFact[] = [
  { label: "Experience", value: "5+ years" },
  { label: "Based in", value: "Quito, Ecuador (UTC−5)" },
  { label: "Languages", value: "Spanish (native), English (B2)" },
];
