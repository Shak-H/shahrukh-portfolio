import Navbar from "@/components/Navbar";

export default function Marstons() {
  return (
    <>
      <Navbar />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        Marston’s – Table Ordering Platform
      </h1>

      {/* Intro */}
      <p className="mb-6 text-gray-600">
        A mobile-first web application enabling customers to browse menus,
        customise items, and place orders directly from their table. Built using
        Next.js and TypeScript, the platform supports real-world ordering
        scenarios in high-traffic pub environments.
      </p>

      {/* Context */}
      <h2 className="font-semibold mt-8 mb-2">Context</h2>
      <p className="mb-4 text-gray-600">
        Developed for Marston’s as part of a small frontend team, this was a
        production application built and iterated on over an extended period. I
        worked alongside a senior frontend engineer, contributing to feature
        development across the core ordering experience.
      </p>

      {/* Role */}
      <h2 className="font-semibold mt-8 mb-2">My Role</h2>
      <ul className="list-disc pl-5 mb-4 text-gray-600">
        <li>Frontend engineer working across the full ordering journey</li>
        <li>
          Delivered features end-to-end, from UI implementation to API
          integration
        </li>
        <li>Implemented analytics tracking using Google Tag Manager</li>
        <li>
          Contributed to component design and overall application structure
        </li>
      </ul>

      {/* Tech */}
      <h2 className="font-semibold mt-8 mb-2">Tech Stack</h2>
      <p className="mb-6 text-gray-600">
        Next.js, TypeScript, React, Context API, react-hook-form, REST APIs
      </p>
    </>
  );
}
