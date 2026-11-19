import type { Metadata } from "next";
import { FiLinkedin } from "react-icons/fi";
import { buttonClassName } from "@/components/ui/Button";
import EmailLink from "@/components/EmailLink";
import FloodlitLayout from "@/components/FloodlitLayout";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Shahrukh Hughes via email or LinkedIn",
};

export default function Contact() {
  return (
    <FloodlitLayout>
      <div className="mx-auto max-w-4xl px-4 pb-16">
        <section
          aria-labelledby="contact-heading"
          className="grid gap-6 rounded-2xl border border-slate-700 bg-slate-900 p-5 sm:gap-8 sm:p-8"
        >
          <div className="grid gap-3">
            <h1
              id="contact-heading"
              className="font-serif text-4xl font-semibold tracking-tight text-[#f5f0e5] sm:text-5xl"
            >
              Get in touch
            </h1>

            <p className="max-w-prose leading-relaxed text-slate-300">
              Have a web project in mind? Tell me what you’re building, who it’s
              for and where you’d like help.
            </p>
          </div>

          <div className="grid w-full max-w-64 grid-cols-2 gap-3 justify-self-start [@media(max-width:425px)]:justify-self-center">
            <EmailLink />

            <a
              href="https://linkedin.com/in/shahrukh-hughes"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClassName("secondary")}
            >
              <FiLinkedin size={16} aria-hidden="true" />
              LinkedIn
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </section>
      </div>
    </FloodlitLayout>
  );
}
