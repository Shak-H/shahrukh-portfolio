import Navbar from "@/components/Navbar";

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
      <section></section>

      {/* About */}
      <section></section>
    </>
  );
}
