import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shahrukh Hughes via email, LinkedIn, or GitHub.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Feel free to reach out:
      </p>
      <ul aria-label="Contact links" className="space-y-3">
        <li>
          <a
            href="mailto:shahrukh.hughes@gmail.com"
            className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
          >
            <FiMail size={18} aria-hidden="true" />
            Email
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/shahrukh-hughes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
          >
            <FiLinkedin size={18} aria-hidden="true" />
            LinkedIn
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Shak-H"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
          >
            <FiGithub size={18} aria-hidden="true" />
            GitHub
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </li>
      </ul>
    </>
  );
}
