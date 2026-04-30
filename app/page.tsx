import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Frontend Engineer building scalable, production-ready React
          applications
        </h1>

        <p className="text-gray-600 max-w-2xl">
          I design and build performant, user-focused web applications using
          React, Next.js, and TypeScript. I’ve worked on AI-driven products and
          large-scale ordering platforms in production environments.
        </p>
        <div className="mt-6 flex gap-6">
          <a
            href="https://github.com/Shak-H"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shahrukh-hughes"
            target="_blank"
            className="underline"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Selected Work</h2>

        <div className="space-y-6">
          <ProjectCard
            title="PersonAI (Satalia)"
            description="AI-driven platform for creating personas and simulating focus group conversations."
            href="/projects/personai"
          />
          <ProjectCard
            title="Marston’s Order & Pay"
            description="Mobile-first ordering platform built with Next.js, supporting real-world customer interactions."
            href="/projects/marstons"
          />
        </div>
      </section>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About</h2>

        <p className="text-gray-600 max-w-2xl">
          Frontend engineer with over 4 years of experience building production
          applications across e-commerce, AI, and customer-facing platforms.
          Experienced working in cross-functional teams and delivering features
          end-to-end.
        </p>
      </section>
    </>
  );
}
