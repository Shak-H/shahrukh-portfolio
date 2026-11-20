import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Marston’s Order & Pay",
  description:
    "How I helped build Marston’s mobile ordering experience, from menu browsing and item customisation to the basket and checkout.",
};

export default function Marstons() {
  return (
    <CaseStudyLayout
      title="Marston’s Order & Pay"
      summary="Marston’s Order & Pay lets customers browse the menu, customise items and order from their table. I helped build the mobile ordering experience and owned the implementation of analytics across key interactions."
      accent="amber"
    >
      {/* Context */}
      <section className="grid gap-3">
        <h2>Context</h2>
        <p>
          The platform was built for customers ordering on their phones in
          Marston’s pubs. I worked in a two-person frontend team alongside a
          senior engineer, collaborating with product and backend teams as we
          developed and iterated on the ordering journey.
        </p>
      </section>

      {/* Role */}
      <section className="grid gap-3">
        <h2>My Role</h2>
        <ul className="grid list-outside list-disc gap-1 pl-5">
          <li>
            Built features for menu browsing, item customisation and the basket
          </li>
          <li>
            Implemented dynamic form behaviour and validation for item options
          </li>
          <li>
            Owned analytics implementation for key interactions using Google Tag
            Manager
          </li>
          <li>
            Contributed to component structure and styling with CSS Modules
          </li>
        </ul>
      </section>

      {/* Tech stack */}
      <section className="grid gap-3">
        <h2>Tech Stack</h2>
        <p>
          Next.js, React, TypeScript, Context API, React Hook Form, Yup, REST
          APIs and Google Tag Manager
        </p>
      </section>

      {/* Key features */}
      <section className="grid gap-3">
        <h2>Key Features</h2>
        <ul className="grid list-outside list-disc gap-1 pl-5">
          <li>Menu browsing with dynamic availability and filtering</li>
          <li>Menu search that waits briefly for customers to finish typing</li>
          <li>Item customisation with validation for different options</li>
          <li>Basket management and checkout</li>
        </ul>
      </section>

      {/* Engineering decisions */}
      <section className="grid gap-4">
        <h2>Challenges &amp; Decisions</h2>

        <div className="grid gap-5">
          <div className="grid gap-2">
            <h3>Keeping orders consistent across screens</h3>
            <p>
              A customer could move from the menu to item customisation, then
              review the basket and continue to checkout. I worked with shared
              state across those screens so the basket reflected the choices
              customers made earlier in the journey.
            </p>
          </div>

          <div className="grid gap-2">
            <h3>Validating item choices on mobile</h3>
            <p>
              Different menu items had different options and rules. I used React
              Hook Form and Yup to handle dynamic fields and validate choices
              before adding the item to the basket. That gave customers a chance
              to correct a selection while they were still on the item screen.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="grid gap-3">
        <h2>Impact</h2>
        <p>
          The platform went live in Marston’s pubs, where customers could
          browse, customise and order from their tables. My contributions
          supported the menu-to-basket journey, and the analytics I implemented
          gave the team visibility into key interactions once the platform was
          in use.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
