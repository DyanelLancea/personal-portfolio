"use client";

import Link from "next/link";
import { useState } from "react";
import { projectsByGroup, type Project } from "@/content/projects";
import { site } from "@/content/site";
import { markLeaveHome } from "@/lib/scroll";
import "@/styles/home.css";

function visibleProjects(projects: Project[], currentIndex: number) {
  if (projects.length <= 2) return projects;
  const indices = [
    (currentIndex - 1 + projects.length) % projects.length,
    currentIndex,
    (currentIndex + 1) % projects.length,
  ];
  return indices.map((index) => projects[index]);
}

function cardClass(index: number, total: number, currentIndex: number) {
  if (total <= 2) return index === currentIndex ? "center" : "side";
  return index === 1 ? "center" : "side";
}

function actualIndex(visibleIndex: number, currentIndex: number, total: number) {
  if (total <= 2) return visibleIndex;
  const indices = [
    (currentIndex - 1 + total) % total,
    currentIndex,
    (currentIndex + 1) % total,
  ];
  return indices[visibleIndex];
}

function ProjectCarousel({
  id,
  title,
  projects,
}: {
  id: string;
  title: string;
  projects: Project[];
}) {
  const [slide, setSlide] = useState(0);
  const visible = visibleProjects(projects, slide);

  return (
    <section id={id}>
      <div className="carousel-container">
        <h2 className="carousel-title">
          <strong>{title}</strong>
        </h2>
        <div className="carousel-wrapper">
          <button type="button" className="carousel-nav nav-prev" onClick={() => setSlide((value) => (value - 1 + projects.length) % projects.length)}>
            ‹
          </button>
          <div className="carousel-track">
            {visible.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className={`product-card ${cardClass(index, projects.length, slide)}`}
                onClick={() => setSlide(actualIndex(index, slide, projects.length))}
              >
                <div className="product-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{project.title}</h3>
                  <div className="product-meta">
                    {project.category ? <span className="product-category">{project.category}</span> : null}
                    {project.category ? <span className="meta-separator">·</span> : null}
                    <span className="product-date">{project.date}</span>
                  </div>
                  <p className="product-description">{project.description}</p>
                  <Link
                    href={`/project/${project.id}`}
                    className="buy-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      markLeaveHome();
                    }}
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="carousel-nav nav-next" onClick={() => setSlide((value) => (value + 1) % projects.length)}>
            ›
          </button>
        </div>
        <div className="carousel-dots">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`dot${index === slide ? " active" : ""}`}
              onClick={() => setSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const personal = projectsByGroup("personal");
  const school = projectsByGroup("school");

  return (
    <div className="home-page">
      <section id="intro" className="main">
        <div className="spotlight">
          <div className="content">
            <header className="major">
              <h2>
                <strong>{site.introHeading} </strong>
                <img src={site.hammy} alt="heart" className="intro-hammy" />
              </h2>
            </header>
            <p>{site.intro}</p>
            <a className="resume-button" href={site.resumeHref}>
              {site.resumeLabel}
            </a>
          </div>
          <span className="image">
            <img src={site.portrait} alt="" />
          </span>
        </div>
      </section>

      <section id="about">
        <h2>
          <strong>About Me 👋</strong>
        </h2>
        <p>
          {" I am an undergraduate Applied Computing (Fintech) student from the "}
          <a className="decorated-link" href={site.about.sit}>
            Singapore Institute of Technology
          </a>
          {" , with a Diploma in Computer Engineering from "}
          <a className="decorated-link" href={site.about.tp}>
            Temasek Polytechnic.
          </a>
          {" During my free time, I love to teach new technologies to younger students as a Freelance STEM Trainer in "}
          <a className="decorated-link" href={site.about.zenitant}>
            Zenitant
          </a>
          {", as well as creating fun projects! Check them out below!"}
        </p>
      </section>

      <ProjectCarousel id="projects" title="Personal Projects 🚀" projects={personal} />
      <ProjectCarousel id="sProjects" title="School Projects 🎓" projects={school} />

      <section id="contact">
        <div className="contact-section">
          <div className="container">
            <h2 className="text-center mb-3">
              <strong>Get In Touch</strong>
            </h2>
            <div className="contact-icons mb-4">
              <a href={site.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href={site.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
              </a>
              <a href={`mailto:${site.contact.email}`} aria-label="Email">
                <i className="fas fa-envelope" />
              </a>
            </div>
            <a href={`mailto:${site.contact.email}`} className="email-link">
              {site.contact.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
