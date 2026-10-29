"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/scroll";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const isProjectPage = pathname.startsWith("/project/");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (isProjectPage) {
      setShowBackToTop(false);
      return;
    }
    const handleScroll = () => setShowBackToTop(window.scrollY > 200);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectPage]);

  const handleProjectsClick = () => {
    if (pathname === "/") {
      scrollToSection("projects");
      return;
    }
    sessionStorage.removeItem("restoreHomeScroll");
    router.push("/");
    window.setTimeout(() => scrollToSection("projects"), 300);
  };

  const handleContactClick = () => {
    if (pathname === "/") {
      scrollToSection("contact");
      return;
    }
    sessionStorage.removeItem("restoreHomeScroll");
    router.push("/");
    window.setTimeout(() => scrollToSection("contact"), 300);
  };

  return (
    <nav id="Navbar" className="navbar px-3">
      {isProjectPage ? (
        <Link href="/" className="navbar-brand" id="backToHome">
          ← Back to Home
        </Link>
      ) : showBackToTop ? (
        <a
          className="navbar-brand"
          href="#top"
          id="backToTop"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to Top
        </a>
      ) : null}

      {isProjectPage ? (
        <ul className="nav nav-pills ms-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#acknowledgements"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("acknowledgements");
              }}
            >
              Acknowledgements
            </a>
          </li>
        </ul>
      ) : (
        <ul className="nav nav-pills ms-auto nav-right">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#projects"
              onClick={(event) => {
                event.preventDefault();
                handleProjectsClick();
              }}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                handleContactClick();
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
