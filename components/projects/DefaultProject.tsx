"use client";

import type { Project } from "@/content/projects";
import { openImageModal } from "@/lib/imageModal";
import "@/styles/projects/default.css";

export default function DefaultProject({ project }: { project: Project }) {
  const body = project.body ?? "";
  if (!body) {
    return (
      <div className="project-detail">
        <div className="container py-5">
          <div className="empty-content">
            <p className="empty-message">Lancea has not finished adding content here, sorry!</p>
          </div>
        </div>
      </div>
    );
  }

  const demo = project.links?.demo;
  const github = project.links?.github;

  return (
    <div className="project-detail">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="project-page-title mb-3">{project.title}</h1>
            <p className="text-muted mb-4">{project.date}</p>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded mb-4 project-img"
                onClick={() => openImageModal(project.image)}
              />
            ) : null}
            <div className="project-description">
              <h3>About This Project</h3>
              <p>{body}</p>
              {project.tech && project.tech.length > 0 ? (
                <>
                  <h4>Technologies Used</h4>
                  <div className="tech-stack mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="badge bg-primary me-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              ) : null}
              <div className="project-links">
                {demo && demo !== "#" ? (
                  <a href={demo} target="_blank" rel="noreferrer" className="btn btn-success me-3">
                    <i className="fas fa-external-link-alt" /> Live Demo
                  </a>
                ) : null}
                {github && github !== "#" ? (
                  <a href={github} target="_blank" rel="noreferrer" className="btn btn-dark">
                    <i className="fab fa-github" /> View Code
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="project-sidebar">
              <h4>Project Details</h4>
              <ul className="list-unstyled">
                <li>
                  <strong>Duration:</strong> {project.date || "TBD"}
                </li>
                <li>
                  <strong>Type:</strong> {project.type || "Academic Project"}
                </li>
                <li>
                  <strong>Status:</strong> {project.status || "Completed"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
