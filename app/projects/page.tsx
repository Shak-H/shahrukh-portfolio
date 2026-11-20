import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import FloodlitLayout from "@/components/FloodlitLayout";
import { portfolioProjects } from "./portfolio-projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore two frontend case studies: PersonAI’s simulated research workflows and Marston’s mobile Order & Pay experience.",
};

export default function Projects() {
  return (
    <FloodlitLayout>
      <div className="mx-auto max-w-4xl px-4 pb-16">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#f5f0e5] sm:text-5xl">
          Projects
        </h1>

        <ul className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
          {portfolioProjects.map((project) => (
            <li key={project.href}>
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </div>
    </FloodlitLayout>
  );
}
