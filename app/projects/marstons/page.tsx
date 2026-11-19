import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Marston's Order & Pay",
  description:
    "Case study: building a mobile-first ordering platform with Next.js for real-world pub environments.",
};

export default function Marstons() {
  return (
    <CaseStudyLayout
      title="Marston’s – Order & Pay Platform"
      summary="A mobile-first web application enabling customers to browse menus,
        customise items, and place orders directly from their table. Built with
        Next.js and TypeScript, the platform supports real-world ordering
        scenarios in high-traffic pub environments."
      accent="amber"
    >
      {/* Context */}
      <section className="grid gap-3">
        <h2>Context</h2>
        <p>
          Developed for Marston’s as part of a small frontend team, this was a
          production application built and iterated on over an extended period.
          I worked alongside a senior frontend engineer, contributing to feature
          development across the core ordering journey.
        </p>
      </section>

      {/* Role */}
      <section className="grid gap-3">
        <h2>My Role</h2>
        <ul className="grid list-outside list-disc gap-1 pl-5">
          <li>
            Frontend engineer in a two-person team, collaborating closely with a
            senior engineer
          </li>
          <li>
            Delivered features across the core ordering journey, including menu
            browsing, product customisation, and basket flows
          </li>
          <li>
            Owned analytics implementation using Google Tag Manager across key
            user interactions
          </li>
          <li>
            Implemented complex form validation and UI logic using
            react-hook-form and Yup
          </li>
          <li>
            Worked within an established architecture, contributing to component
            structure and maintainable styling using CSS Modules
          </li>
          <li>
            Collaborated closely with backend and product teams to deliver
            features end-to-end
          </li>
        </ul>
      </section>

      {/* Tech */}
      <section className="grid gap-3">
        <h2>Tech Stack</h2>
        <p>
          Next.js, TypeScript, React, Context API, react-hook-form, REST APIs
        </p>
      </section>

      {/* Features */}
      <section className="grid gap-3">
        <h2>Key Features</h2>
        <ul className="grid list-outside list-disc gap-1 pl-5">
          <li>Menu browsing with dynamic availability and filtering</li>
          <li>Product customisation with complex form validation</li>
          <li>Basket management and checkout flow</li>
          <li>Search functionality with debounced input</li>
          <li>
            Analytics tracking across key user interactions using Google Tag
            Manager
          </li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="grid gap-4">
        <h2>Challenges &amp; Decisions</h2>

        <div className="grid gap-5">
          <div className="grid gap-2">
            <h3>Managing a multi-step ordering flow</h3>
            <p>
              The ordering journey involved multiple steps, including menu
              browsing, item customisation, basket management, and checkout. I
              worked on ensuring data remained consistent across these steps
              while keeping the experience intuitive for users on mobile
              devices.
            </p>
            <p>
              This required careful handling of shared state across components
              to avoid inconsistencies during navigation and user interaction.
            </p>
          </div>

          <div className="grid gap-2">
            <h3>Handling complex form interactions</h3>
            <p>
              Product customisation required dynamic forms with validation
              rules. Using react-hook-form and schema validation, I helped
              ensure user inputs were handled reliably while keeping the UI
              responsive.
            </p>
          </div>

          <div className="grid gap-2">
            <h3>Performance and user experience</h3>
            <p>
              Given the mobile-first nature of the platform, performance and
              usability were key considerations. I worked within established
              patterns to ensure components remained efficient and responsive,
              particularly in form-heavy and basket-related flows.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="grid gap-3">
        <h2>Impact</h2>
        <p>
          Delivered a production-ready ordering platform used in live
          environments, supporting real customer interactions. The application
          provided a streamlined ordering experience while enabling ongoing
          feature development through a maintainable and scalable frontend.
        </p>
      </section>
    </CaseStudyLayout>
  );
}
