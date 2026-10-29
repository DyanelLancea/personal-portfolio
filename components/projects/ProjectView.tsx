"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { detailTitle, getProject, type ProjectTemplate } from "@/content/projects";
import AirlineProject from "@/components/projects/pages/AirlineProject";
import DroneProject from "@/components/projects/pages/DroneProject";
import EzBizProject from "@/components/projects/pages/EzBizProject";
import SilverCompanionProject from "@/components/projects/pages/SilverCompanionProject";
import RipplemartProject from "@/components/projects/pages/RipplemartProject";
import DefaultProject from "@/components/projects/DefaultProject";

const customPages: Partial<Record<ProjectTemplate, ComponentType<{ title: string }>>> = {
  airline: AirlineProject,
  drone: DroneProject,
  ezbiz: EzBizProject,
  silver: SilverCompanionProject,
  ripplemart: RipplemartProject,
};

export default function ProjectView({ id }: { id: string }) {
  const project = getProject(Number(id));
  if (!project) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">
          Project not found. <Link href="/">Return to home</Link>
        </div>
      </div>
    );
  }

  if (project.template === "default") return <DefaultProject project={project} />;

  const Page = customPages[project.template];
  if (!Page) return <DefaultProject project={project} />;
  return <Page title={detailTitle(project)} />;
}
