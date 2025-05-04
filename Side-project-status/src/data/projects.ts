export type Status = "Completed" | "In Progress" | "On Hold" | "Abandoned";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: Status;
  learnings: string[];
  dateStarted: Date;
  dateEnded?: Date | null;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website to showcase my work and skills",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    status: "Completed",
    learnings: [
      "Improved my React skills",
      "Learned animation with Framer Motion",
      "Implemented responsive design patterns",
    ],
    dateStarted: new Date("2023-01-15"),
    dateEnded: new Date("2023-03-20"),
    imageUrl: "https://placehold.co/600x400/e2e8f0/475569?text=Portfolio+Website"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag and drop functionality",
    technologies: ["TypeScript", "React", "Redux", "Firebase"],
    status: "In Progress",
    learnings: ["State management with Redux", "Real-time database with Firebase", "TypeScript type safety"],
    dateStarted: new Date("2023-04-10"),
    dateEnded: null,
    imageUrl: "https://placehold.co/600x400/e2e8f0/475569?text=Task+Management"
  },
  {
    id: 3,
    title: "Recipe Finder",
    description: "An app that helps users find recipes based on ingredients they have",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
    status: "On Hold",
    learnings: ["Building RESTful APIs", "Database schema design", "Authentication and authorization"],
    dateStarted: new Date("2022-11-05"),
    dateEnded: new Date("2023-02-15"),
    imageUrl: "https://placehold.co/600x400/e2e8f0/475569?text=Recipe+Finder"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A dashboard showing weather forecasts with interactive maps",
    technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox"],
    status: "Abandoned",
    learnings: ["Working with third-party APIs", "Data visualization with Chart.js", "Geolocation services"],
    dateStarted: new Date("2022-08-20"),
    dateEnded: new Date("2022-10-05"),
    imageUrl: "https://placehold.co/600x400/e2e8f0/475569?text=Weather+Dashboard"
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "A full-featured online store with product listings, cart, and checkout",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    status: "In Progress",
    learnings: ["Full-stack development", "Payment processing integration", "Database relationships"],
    dateStarted: new Date("2023-06-01"),
    dateEnded: null,
    imageUrl: "https://placehold.co/600x400/e2e8f0/475569?text=E-commerce"
  },
  {
    id: 6,
    title: "Markdown Note Taking App",
    description: "A simple note-taking application with markdown support",
    technologies: ["React", "Marked.js", "LocalStorage API"],
    status: "Completed",
    learnings: ["Markdown parsing and rendering", "Client-side storage techniques", "Building keyboard shortcuts"],
    dateStarted: new Date("2022-12-10"),
    dateEnded: new Date("2023-01-25"),
    imageUrl: "https://placehold.co/600x400/e2e8f0/475569?text=Markdown+Notes"
  },
];
