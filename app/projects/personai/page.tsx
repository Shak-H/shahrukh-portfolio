import Navbar from "@/components/Navbar";

export default function PersonAI() {
  return (
    <>
      <Navbar />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        PersonAI – AI Personas & Focus Group Platform
      </h1>

      {/* Intro */}
      <p className="mb-6 text-gray-600">
        PersonAI is an AI-driven platform that enables users to create audience
        personas and simulate focus group conversations to generate insights at
        scale.
      </p>

      {/* Context */}
      <h2 className="font-semibold mt-8 mb-2">Context</h2>
      <p className="mb-4 text-gray-600">
        Built at Satalia (part of VML), this was an early-stage product. I
        joined early as the sole frontend engineer and was responsible for all
        frontend development.
      </p>

      {/* Role */}
      <h2 className="font-semibold mt-8 mb-2">My Role</h2>
      <ul className="list-disc pl-5 mb-4 text-gray-600">
        <li>Sole frontend engineer on the project</li>
        <li>Owned frontend architecture and codebase structure</li>
        <li>Delivered all UI features from concept to production</li>
      </ul>

      {/* Tech */}
      <h2 className="font-semibold mt-8 mb-2">Tech Stack</h2>
      <p className="mb-6 text-gray-600">React, TypeScript, Redux, REST APIs</p>

      {/* Challenges */}
      <h2 className="font-semibold mt-8 mb-2">Challenges & Decisions</h2>

      <h3 className="font-medium mt-4 mb-1">
        Designing for real-world workflows
      </h3>
      <p className="mb-4 text-gray-600">
        The core challenge wasn’t just building features, but ensuring the
        application behaved predictably under real-world conditions. Users could
        trigger long-running processes, navigate between screens, upload media,
        switch organisation context, and return later expecting the system to
        remain consistent.
      </p>

      <h3 className="font-medium mt-4 mb-1">State management strategy</h3>
      <p className="mb-4 text-gray-600">
        I treated Redux as workflow infrastructure rather than a global store.
        It was used for shared, durable state such as user session data and
        long-running processes, while short-lived UI state was kept local to
        reduce complexity.
      </p>

      <h3 className="font-medium mt-4 mb-1">Handling persistence</h3>
      <p className="mb-4 text-gray-600">
        Durable state was persisted across sessions, while volatile state was
        cleared on rehydration to avoid restoring invalid states such as stale
        loading indicators or broken async flows.
      </p>

      <h3 className="font-medium mt-4 mb-1">Workflow modelling</h3>
      <p className="mb-4 text-gray-600">
        Long-running processes were modelled explicitly with statuses and
        progress indicators, allowing the UI to accurately reflect system state
        and provide better recovery paths.
      </p>

      <h3 className="font-medium mt-4 mb-1">Performance</h3>
      <p className="mb-6 text-gray-600">
        Performance improvements focused on user impact, including route-based
        code splitting and reducing unnecessary recalculations in complex flows.
      </p>

      {/* Impact */}
      <h2 className="font-semibold mt-8 mb-2">Impact</h2>
      <p className="text-gray-600">
        The result was a more stable and predictable product experience. Users
        could navigate long-running workflows with fewer inconsistencies and
        clearer feedback, while the underlying state model became easier to
        extend and maintain.
      </p>
    </>
  );
}
