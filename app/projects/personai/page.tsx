import Navbar from "@/components/Navbar";

export default function PersonAI() {
  return (
    <>
      <Navbar />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        PersonAI – AI generated audiences, personas with the ability to chat
        with and simulate focus groups
      </h1>

      {/* Intro */}
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        PersonAI is an AI-driven platform that enables users to create audience
        personas and simulate focus group conversations, allowing insights to be
        generated at scale.
      </p>

      {/* Context */}
      <h2 className="font-semibold mt-8 mb-2">Context</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Built at Satalia (part of VML), this was an early-stage AI product. I
        joined early as the sole frontend engineer, working within a
        cross-functional team of product, backend, QA, and DevOps. I
        collaborated closely with these disciplines to deliver features
        end-to-end and ensure alignment between user experience and underlying
        system behaviour.
      </p>

      {/* Role */}
      <h2 className="font-semibold mt-8 mb-2">My Role</h2>
      <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
        <li>Sole frontend engineer on the project</li>
        <li>Owned frontend architecture and overall codebase structure</li>
        <li>Delivered all UI features from concept through to production</li>
        <li>
          Collaborated closely with backend and product teams to shape user
          experience
        </li>
      </ul>

      {/* Tech */}
      <h2 className="font-semibold mt-8 mb-2">Tech Stack</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">React, Redux, REST APIs</p>

      {/* Challenges */}
      <h2 className="font-semibold mt-8 mb-2">Challenges & Decisions</h2>

      <h3 className="font-medium mt-4 mb-1">
        Designing for real-world workflows
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        The core challenge wasn’t just building features, but ensuring the
        application behaved predictably under real-world conditions. Users could
        trigger long-running processes, navigate between screens, upload media,
        switch organisation context, and return later expecting the system to
        remain consistent. This also required preventing users from
        unintentionally breaking application state through actions such as
        switching context mid-process or navigating away during critical
        workflows.
      </p>

      <h3 className="font-medium mt-4 mb-1">State management strategy</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        I treated Redux as workflow infrastructure rather than a global store.
        It was used for shared, durable state such as user session data and
        long-running processes (e.g. background jobs and uploads), while
        short-lived UI state was kept local to reduce complexity.
      </p>

      <h3 className="font-medium mt-4 mb-1">Handling persistence</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Durable state was persisted across sessions, while volatile state was
        cleared on rehydration to avoid restoring invalid states such as stale
        loading indicators or broken async flows.
      </p>

      <h3 className="font-medium mt-4 mb-1">Workflow modelling</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Long-running processes were modelled explicitly with statuses and
        progress indicators, allowing the UI to accurately reflect system state
        and provide better recovery paths.
      </p>

      <h3 className="font-medium mt-4 mb-1">Performance</h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Performance improvements focused on user impact, including route-based
        code splitting and reducing unnecessary recalculations in complex flows.
      </p>

      {/* Impact */}
      <h2 className="font-semibold mt-8 mb-2">Impact</h2>
      <p className="text-gray-600 dark:text-gray-300">
        The result was a more stable and predictable product experience. Users
        could navigate long-running workflows with fewer inconsistencies and
        clearer feedback, while the underlying state model became more
        intentional and easier to extend without reintroducing common state
        issues.
      </p>
    </>
  );
}
