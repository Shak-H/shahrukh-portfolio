import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/dist/client/link";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Shahrukh Hughes</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-4">
            Software engineer at iVendi.
          </p>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mt-4">
            I build web applications that make complex tasks easier, from
            running AI-supported research to ordering food from your table. I
            work with clients and product teams to turn ideas into products
            people can use.
          </p>

          <div className="flex gap-4 mt-4">
            <a href="#selected-work">See my work</a>
            <Link href="/contact">Discuss a project</Link>
          </div>

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
        <section id="selected-work" className="mb-16">
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
