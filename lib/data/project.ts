export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  github?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform Redesign",
    description: "Led frontend architecture for a high-traffic e-commerce platform serving 100K+ daily users",
    longDescription: "Spearheaded the complete frontend redesign of a legacy e-commerce platform, focusing on performance optimization and modern UX patterns.",
    problem: "Legacy codebase with poor performance, 4s+ load times, and declining conversion rates",
    solution: "Migrated to Next.js with incremental static regeneration, implemented code splitting, and optimized Core Web Vitals",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "React Query", "Stripe"],
    highlights: [
      "Reduced initial load time by 65% (4s → 1.4s)",
      "Improved Lighthouse score from 45 to 98",
      "Increased mobile conversion rate by 23%",
    ],
    featured: true,
  },
  {
    id: "project-2",
    title: "Real-Time Collaboration Tool",
    description: "Built a collaborative document editing platform with WebSocket-based real-time synchronization",
    longDescription: "Developed a production-ready collaboration tool enabling teams to edit documents simultaneously with conflict resolution.",
    problem: "Teams needed real-time collaboration without vendor lock-in to expensive SaaS solutions",
    solution: "Architected a WebSocket-based system with operational transformation for conflict-free editing",
    technologies: ["React", "WebSockets", "Node.js", "MongoDB", "Redis"],
    highlights: [
      "Supports 50+ concurrent users per document",
      "Sub-100ms synchronization latency",
      "Implemented offline-first architecture with conflict resolution",
    ],
    featured: true,
  },
  {
    id: "project-3",
    title: "Design System & Component Library",
    description: "Created a comprehensive design system used across 5+ products, reducing development time by 40%",
    longDescription: "Built and maintained a scalable component library with comprehensive documentation and testing.",
    problem: "Inconsistent UI across products, duplicated code, and slow feature development",
    solution: "Developed a centralized design system with composable components, theming support, and accessibility built-in",
    technologies: ["React", "TypeScript", "Storybook", "Radix UI", "CSS-in-JS"],
    highlights: [
      "50+ production-ready components",
      "Reduced development time by 40%",
      "100% accessibility compliance (WCAG 2.1 AA)",
    ],
    featured: false,
  },
];