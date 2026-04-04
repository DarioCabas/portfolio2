export interface NavLink {
  name: string;
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export const email = "dario.cabascango.dev@gmail.com";

export const navLinks: NavLink[] = [
  { name: "About", url: "/#about" },
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
