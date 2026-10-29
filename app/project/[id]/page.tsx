import { Suspense } from "react";
import type { Metadata } from "next";
import ProjectView from "@/components/projects/ProjectView";
import { detailTitle, getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(Number(id));
  return {
    title: project ? `${detailTitle(project)} - Dyanel Lancea` : "Project not found",
  };
}

async function ProjectPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ProjectView id={id} />;
}

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={null}>
      <ProjectPageContent params={params} />
    </Suspense>
  );
}
