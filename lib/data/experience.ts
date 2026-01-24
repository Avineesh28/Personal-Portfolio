export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Company Name",
    position: "Software Engineer",
    duration: "2023 - Present",
    location: "Chennai, India",
    description: "Building scalable web applications and leading frontend architecture decisions",
    responsibilities: [
      "Architected and delivered 3+ major features serving 500K+ users",
      "Led migration from Create React App to Next.js, improving performance by 60%",
      "Mentored 2 junior developers and established code review best practices",
      "Collaborated with product and design teams to ship user-centric features",
    ],
    technologies: ["Next.js", "TypeScript", "React", "TailwindCSS", "Node.js"],
  },
  {
    id: "exp-2",
    company: "Previous Company",
    position: "Frontend Developer",
    duration: "2022 - 2023",
    location: "Remote",
    description: "Developed responsive web applications and contributed to design system",
    responsibilities: [
      "Built and maintained 15+ React components used across multiple products",
      "Implemented responsive designs with 100% cross-browser compatibility",
      "Improved application accessibility to meet WCAG 2.1 AA standards",
      "Reduced bundle size by 35% through code splitting and lazy loading",
    ],
    technologies: ["React", "JavaScript", "SCSS", "Redux", "Webpack"],
  },
];