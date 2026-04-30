import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section>
        <h1 className="text-4xl font-bold">
          Frontend Engineer building scalable React applications
        </h1>

        <p className="text-gray-600">
          I design and build performant, user-focused web applications using
          React, Next.js, and TypeScript. Recently worked on AI-driven products
          and large-scale ordering platforms in production environments.
        </p>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div>
          <Link href="/projects/personai">
            <div>
              <h3 className="text-xl font-semibold">PersonAI (Satalia)</h3>
              <p className="text-gray-600">
                AI-driven platform for creating personas and simulating focus
                group conversations. Built as the sole frontend engineer with a
                focus on complex state management and scalable architecture.
              </p>
            </div>
          </Link>

          <Link href="/projects/marstons">
            <div>
              <h3 className="text-xl font-semibold">Marston’s Order & Pay</h3>
              <p className="text-gray-600">
                Mobile-first ordering platform built with Next.js, supporting
                real-world customer interactions. Focused on delivering core
                ordering flows, form handling, and analytics tracking.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* About */}
      <section></section>
    </>
  );
}
