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
      summary="PersonAI lets research teams chat with simulated personas and run virtual focus groups. As the sole frontend engineer, I designed how the interface would handle long-running tasks when people moved between screens or returned later."
      accent="cyan"
    >
      {/* Context */}
      <section className="grid gap-3">
        <h2>Context</h2>
        <p>
          Built at Satalia (part of VML), PersonAI was an early-stage product. I
          worked with product, backend, QA and DevOps to take features from
          design through to production and make sure the interface reflected
          what was happening behind the scenes.
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

      {/* Tech stack */}
      <section className="grid gap-3">
        <h2>Tech Stack</h2>
        <p>React, Redux, REST APIs</p>
      </section>

      {/* Key features */}
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

      {/* Engineering decisions */}
      <section className="grid gap-4">
        <h2>Challenges &amp; Decisions</h2>

        <div className="grid gap-5">
          <div className="grid gap-2">
            <h3>Designing for real-world workflows</h3>
            <p>
              A user could start a long-running task, switch screens or
              organisations, and return later expecting to see what had
              happened. The interface needed to keep track of that work and
              handle changes in context without losing the task’s state.
            </p>
          </div>

          <div className="grid gap-2">
            <h3>Deciding what state should survive</h3>
            <p>
              I used Redux for shared state such as session data and the status
              of background jobs and uploads. I kept short-lived interface state
              local to the components that needed it.
            </p>
            <p>
              When someone returned to the app, we restored the state they still
              needed and cleared temporary values like old loading indicators.
              That prevented the interface from showing a task as loading based
              on stale state.
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
          Users could move between screens during a long-running task and still
          see its status. Returning to the app restored useful state without
          bringing back stale loading indicators. The same state model gave the
          team a clearer way to add new workflows.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
