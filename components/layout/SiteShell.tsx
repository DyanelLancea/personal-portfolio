"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NavBar from "@/components/layout/NavBar";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isProject = pathname.startsWith("/project");

  useEffect(() => {
    if (isProject) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (isHome && sessionStorage.getItem("restoreHomeScroll") === "1") {
      const saved = Number(sessionStorage.getItem("homeScrollPosition") || "0");
      sessionStorage.removeItem("restoreHomeScroll");
      requestAnimationFrame(() => {
        window.scrollTo({ top: saved, behavior: "auto" });
      });
    }
  }, [pathname, isHome, isProject]);

  return (
    <div id="wrapper" className={isHome ? "home-wrapper" : undefined}>
      <NavBar />
      <div id="main">{children}</div>
    </div>
  );
}
