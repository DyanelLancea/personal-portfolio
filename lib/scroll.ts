export function markLeaveHome() {
  if (typeof window === "undefined") return;
  if (window.location.pathname === "/") {
    sessionStorage.setItem("homeScrollPosition", String(window.scrollY));
    sessionStorage.setItem("restoreHomeScroll", "1");
  }
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;
  const navbar = document.getElementById("Navbar");
  const navbarHeight = navbar ? navbar.offsetHeight : 56;
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - navbarHeight - 10;
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
}
