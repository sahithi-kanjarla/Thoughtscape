import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Toolbox } from "@/components/portfolio/Toolbox";
import { Stage } from "@/components/portfolio/Stage";
import { Wins } from "@/components/portfolio/Wins";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sahithi Kanjarla — Creative Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sahithi Kanjarla — Computer Science engineer building meaningful technology at the intersection of AI, creativity and sustainability. Hyderabad, India.",
      },
      { property: "og:title", content: "Sahithi Kanjarla — Creative Developer & AI Engineer" },
      {
        property: "og:description",
        content:
          "Selected work, talks and experiments by Sahithi Kanjarla — AI, computer vision and human-centered software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="top" className="relative bg-background text-foreground grain vignette overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Toolbox />
      <Stage />
      <Wins />
      <Education />
      <Contact />
    </main>
  );
}
