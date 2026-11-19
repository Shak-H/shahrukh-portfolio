import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "PersonAI – AI Persona & Focus Group Platform",
  description:
    "Case study: building an AI-driven persona platform with simulated focus groups, persona chat workflows, and scalable frontend architecture at Satalia.",
};

export default function PersonAI() {
  return (
    <CaseStudyLayout
      title="PersonAI – AI Persona & Focus Group Platform"
      summary="PersonAI is an AI-driven platform that enables users to generate personas, interact with them through chats, and simulate focus group conversations to explore insights at scale."
      accent="cyan"
    >
      {/* Context */}
      <section className="grid gap-3">
        <h2>Context</h2>
        <p>
          Built at Satalia (part of VML), this was an early-stage AI product. I
          joined early as the sole frontend engineer, working within a
          cross-functional team of product, backend, QA, and DevOps. I
          collaborated closely with these disciplines to deliver features
          end-to-end and ensure alignment between user experience and underlying
          system behaviour.
        </p>
      </section>

      {/* Role */}
      <section className="grid gap-3">
        <h2>My Role</h2>
        <ul className="grid list-outside list-disc gap-1 pl-5">
          <li>Sole frontend engineer on the project</li>
          <li>Owned frontend architecture and overall codebase structure</li>
          <li>Delivered all UI features from concept through to production</li>
          <li>
            Collaborated closely with backend and product teams to shape user
            experience
          </li>
        </ul>
      </section>

      {/* Tech */}
      <section className="grid gap-3">
        <h2>Tech Stack</h2>
        <p>React, Redux, REST APIs</p>
      </section>

      {/* Key Features */}
      <section className="grid gap-3">
        <h2>Key Features</h2>
        <ul className="grid list-outside list-disc gap-1 pl-5">
          <li>Generate simulated personas for research</li>
          <li>Interview individual personas through chat</li>
          <li>
            Run simulated focus group discussions to explore different
            perspectives
          </li>
          <li>Track the status and progress of long-running tasks</li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="grid gap-4">
        <h2>Challenges &amp; Decisions</h2>

        <div className="grid gap-5">
          <div className="grid gap-2">
            <h3>Designing for real-world workflows</h3>
            <p>
              The core challenge wasn’t just building features, but ensuring the
              application behaved predictably under real-world conditions. Users
              could trigger long-running processes, navigate between screens,
              upload media, switch organisation context, and return later
              expecting the system to remain consistent. This also required
              preventing users from unintentionally breaking application state
              through actions such as switching context mid-process or
              navigating away during critical workflows.
            </p>
          </div>

          <div className="grid gap-2">
            <h3>State management strategy</h3>
            <p>
              I treated Redux as workflow infrastructure rather than a global
              store. It was used for shared, durable state such as user session
              data and long-running processes (e.g. background jobs and
              uploads), while short-lived UI state was kept local to reduce
              complexity.
            </p>
          </div>

          <div className="grid gap-2">
            <h3>Handling persistence</h3>
            <p>
              Durable state was persisted across sessions, while volatile state
              was cleared on rehydration to avoid restoring invalid states such
              as stale loading indicators or broken async flows.
            </p>
          </div>

          <div className="grid gap-2">
            <h3>Workflow modelling</h3>
            <p>
              Long-running processes were modelled explicitly with statuses and
              progress indicators, allowing the UI to accurately reflect system
              state and provide better recovery paths.
            </p>
          </div>

          <div className="grid gap-2">
            <h3>Performance</h3>
            <p>
              Performance improvements focused on user impact, including
              route-based code splitting and reducing unnecessary recalculations
              in complex flows.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="grid gap-3">
        <h2>Impact</h2>
        <p>
          The result was a more stable and predictable product experience. Users
          could navigate long-running workflows with fewer inconsistencies and
          clearer feedback, while the underlying state model became more
          intentional and easier to extend without reintroducing common state
          issues.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
