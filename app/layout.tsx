import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/base.css";
import "@/styles/home-tokens.css";
import "@/styles/project-shared.css";
import "@/styles/navbar.css";
import "@/styles/gallery.css";
import SiteShell from "@/components/layout/SiteShell";
import { site } from "@/content/site";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={openSans.className} data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
