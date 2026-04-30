import Navbar from "@/components/Navbar";

export default function Marstons() {
  return (
    <>
      <Navbar />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        Marston’s – Order & Pay Platform
      </h1>

      {/* Intro */}
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        A mobile-first web application enabling customers to browse menus,
        customise items, and place orders directly from their table. Built with
        Next.js and TypeScript, the platform supports real-world ordering
        scenarios in high-traffic pub environments.
      </p>

      {/* Context */}
      <h2 className="font-semibold mt-8 mb-2">Context</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Developed for Marston’s as part of a small frontend team, this was a
        production application built and iterated on over an extended period. I
        worked alongside a senior frontend engineer, contributing to feature
        development across the core ordering journey.
      </p>

      {/* Role */}
      <h2 className="font-semibold mt-8 mb-2">My Role</h2>
      <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
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
          Implemented complex form validation and UI logic using react-hook-form
          and Yup
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

      {/* Tech */}
      <h2 className="font-semibold mt-8 mb-2">Tech Stack</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Next.js, TypeScript, React, Context API, react-hook-form, REST APIs
      </p>

      {/* Features */}
      <h2 className="font-semibold mt-8 mb-2">Key Features</h2>
      <ul className="list-disc pl-5 mb-6 text-gray-600 dark:text-gray-300">
        <li>Menu browsing with dynamic availability and filtering</li>
        <li>Product customisation with complex form validation</li>
        <li>Basket management and checkout flow</li>
        <li>Search functionality with debounced input</li>
        <li>
          Analytics tracking across key user interactions using Google Tag
          Manager
        </li>
      </ul>

      {/* Challenges */}
      <h2 className="font-semibold mt-8 mb-2">Challenges & Decisions</h2>

      <h3 className="font-medium mt-4 mb-1">
        Managing a multi-step ordering flow
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        The ordering journey involved multiple steps, including menu browsing,
        item customisation, basket management, and checkout. I worked on
        ensuring data remained consistent across these steps while keeping the
        experience intuitive for users on mobile devices.
      </p>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        This required careful handling of shared state across components to
        avoid inconsistencies during navigation and user interaction.
      </p>

      <h3 className="font-medium mt-4 mb-1">
        Handling complex form interactions
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Product customisation required dynamic forms with validation rules.
        Using react-hook-form and schema validation, I helped ensure user inputs
        were handled reliably while keeping the UI responsive.
      </p>

      <h3 className="font-medium mt-4 mb-1">Performance and user experience</h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Given the mobile-first nature of the platform, performance and usability
        were key considerations. I worked within established patterns to ensure
        components remained efficient and responsive, particularly in form-heavy
        and basket-related flows.
      </p>

      {/* Impact */}
      <h2 className="font-semibold mt-8 mb-2">Impact</h2>
      <p className="text-gray-600 dark:text-gray-300">
        Delivered a production-ready ordering platform used in live
        environments, supporting real customer interactions. The application
        provided a streamlined ordering experience while enabling ongoing
        feature development through a maintainable and scalable frontend.
      </p>
    </>
  );
}
