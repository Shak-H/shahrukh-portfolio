import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import FloodlitLayout from "@/components/FloodlitLayout";
import { portfolioProjects } from "./portfolio-projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected frontend projects including AI platforms and mobile-first ordering applications.",
};

export default function Projects() {
  return (
    <FloodlitLayout>
      <div className="mx-auto max-w-4xl px-4 pb-16">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#f5f0e5] sm:text-5xl">
          Projects
        </h1>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
          {portfolioProjects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </div>
    </FloodlitLayout>
  );
}
