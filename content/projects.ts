export type ProjectGroup = "personal" | "school";

export type ProjectTemplate =
  | "airline"
  | "drone"
  | "ezbiz"
  | "silver"
  | "ripplemart"
  | "default";

export type Project = {
  id: number;
  group: ProjectGroup;
  /** Title shown on the home carousel. */
  title: string;
  /** Heading on the detail page, when it differs from the card title. */
  pageTitle?: string;
  category?: string;
  date: string;
  description: string;
  image: string;
  template: ProjectTemplate;
  type?: string;
  status?: string;
  tech?: string[];
  links?: { demo?: string; github?: string };
  /**
   * Body copy for template "default".
   * Leave this empty to show the unfinished-page message.
   */
  body?: string;
};

export const projects: Project[] = [
  {
    id: 100,
    group: "personal",
    title: "EzBiz | Hello Future Hedera Hackathon",
    pageTitle: "EzBiz",
    date: "Nov 2025",
    description:
      "A project Web3 (x402) and Agentic AI project created for a HelloFuture hackathon by Hedera",
    image: "/assets/images/projects/ezbiz/ezbiz.png",
    template: "ezbiz",
  },
  {
    id: 101,
    group: "personal",
    title: "SilverCompanionSG | Hackrift Hackathon",
    pageTitle: "SilverCompanionSG",
    category: "Finalist",
    date: "Dec 2025",
    description:
      "An agentic AI system designed to make technology truly accessible for the elderly in Singapore through Singlish conversation",
    image: "/assets/images/projects/silvercompanion/cover.png",
    template: "silver",
  },
  {
    id: 102,
    group: "personal",
    title: "Ripplemart | NUS Fintech Summit 2026",
    pageTitle: "Ripplemart",
    category: "BGA Bounty Award",
    date: "Jan 2026",
    description:
      "A seamless e-commerce platform powered by XRPL Escrows, ensuring secure, trustless transactions and real-time delivery tracking",
    image: "/assets/images/projects/ripplemart/cover.png",
    template: "ripplemart",
  },
  {
    id: 1,
    group: "school",
    title: "Airline Review Sentiment Analysis",
    category: "Uni Module Project",
    date: "Sep 2025 - Oct 2025",
    description: "AI-powered system analyzing airline reviews for sentiment insights..",
    image: "/assets/images/projects/airline/project2-dashboard/image.png",
    template: "airline",
    type: "School Project",
    status: "Completed",
  },
  {
    id: 2,
    group: "school",
    title: "Flood Monitoring Drone System",
    category: "Poly Final Project",
    date: "Oct 2024 - Feb 2025",
    description:
      "Smart drone with sensors for real-time monitoring of flood-prone areas like drains.",
    image: "/assets/images/projects/drone/tello-drone.png",
    template: "drone",
    type: "School Project",
    status: "In Progress",
  },
];

export function getProject(id: number) {
  return projects.find((project) => project.id === id);
}

export function projectsByGroup(group: ProjectGroup) {
  return projects.filter((project) => project.group === group);
}

export function detailTitle(project: Project) {
  return project.pageTitle ?? project.title;
}
