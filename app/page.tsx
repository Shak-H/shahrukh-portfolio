import Navbar from "@/components/Navbar";
import Link from "next/link";

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
      </section>

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

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Selected Work</h2>

        <div className="space-y-6">
          <Link href="/projects/personai">
            <div className="border p-6 rounded hover:bg-gray-50 hover:shadow-sm transition">
              <h3 className="text-xl font-semibold mb-2">PersonAI (Satalia)</h3>
              <p className="text-gray-600">
                AI-driven platform for creating personas and simulating focus
                group conversations. Built as the sole frontend engineer,
                focusing on complex state management and scalable frontend
                architecture.
              </p>
            </div>
          </Link>

          <Link href="/projects/marstons">
            <div className="border p-6 rounded hover:bg-gray-50 hover:shadow-sm transition">
              <h3 className="text-xl font-semibold mb-2">
                Marston’s Order & Pay
              </h3>
              <p className="text-gray-600">
                Mobile-first ordering platform built with Next.js, supporting
                real-world customer interactions. Focused on delivering core
                ordering flows, complex form handling, and analytics tracking in
                a production environment.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About</h2>

        <p className="text-gray-600 max-w-2xl">
          Frontend engineer with 4+ years of experience building production
          applications across e-commerce, AI, and customer-facing platforms.
          Experienced working in cross-functional teams and delivering features
          end-to-end.
        </p>
      </section>
    </>
  );
}
