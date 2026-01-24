export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Python"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js", "Express", "TailwindCSS"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Vercel", "Docker", "Webpack", "Vite", "Figma"],
  },
  {
    category: "Concepts",
    skills: ["Responsive Design", "Web Performance", "Accessibility", "SEO", "API Integration"],
  },
];