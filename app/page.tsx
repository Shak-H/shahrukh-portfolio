import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Frontend Engineer building scalable, production-ready React
            applications
          </h1>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            I design and build performant, user-focused web applications using
            React, Next.js, and TypeScript. I’ve worked on AI-driven products,
            workflow-heavy platforms, and customer-facing applications in
            production environments.
          </p>
          <div
            className="mt-6 flex
          gap-4 sm:gap-6 items-center"
          >
            <a
              href="https://github.com/Shak-H"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
            >
              <FiGithub size={18} aria-hidden="true" />
              GitHub
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <a
              href="https://linkedin.com/in/shahrukh-hughes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
            >
              <FiLinkedin size={18} aria-hidden="true" />
              LinkedIn
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <a
              href="/Shahrukh-Hughes-CV.pdf"
              download
              aria-label="Download CV (PDF)"
              className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
            >
              <FiDownload size={18} aria-hidden="true" />
              <span className="whitespace-nowrap">Download CV</span>
            </a>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Selected Work</h2>

          <div className="space-y-6">
            <ProjectCard
              title="PersonAI (Satalia)"
              description="AI-driven persona platform enabling users to simulate focus groups and interact with generated personas through chat."
              href="/projects/personai"
              contributions="Sole FE • Redux workflows • AI product UX"
            />
            <ProjectCard
              title="Marston’s Order & Pay"
              description="Mobile-first ordering platform built with Next.js, supporting real-world customer interactions."
              href="/projects/marstons"
              contributions="Forms • GTM analytics • Ordering flows"
            />
          </div>
        </section>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About</h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Frontend engineer with over 4 years of experience building
            production applications across e-commerce, AI, and customer-facing
            platforms. Experienced working in cross-functional teams and
            delivering features end-to-end.
          </p>
        </section>
      </div>
    </>
  );
}
