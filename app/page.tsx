import Link from "next/link";
import { FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

import FloodlitLayout from "@/components/FloodlitLayout";
import PenaltyShootout from "@/components/PenaltyShootout";
import { buttonClassName } from "@/components/ui/Button";
import { portfolioProjects } from "./projects/portfolio-projects";

const socialLinkClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

export default function Home() {
  return (
    <FloodlitLayout>
      <div className="mx-auto max-w-4xl px-4">
        {/* Homepage introduction and penalty shootout */}
        <section
          aria-labelledby="home-heading"
          className="mb-8 grid gap-6 sm:mb-10 sm:gap-8"
        >
          <div className="grid max-w-2xl gap-3 sm:gap-4">
            <h1
              id="home-heading"
              className="font-serif text-[clamp(2.75rem,7vw,5rem)] leading-[0.98] font-semibold tracking-tight text-[#f5f0e5]"
            >
              Shahrukh Hughes
            </h1>

            <p className="font-serif text-lg text-[#e6dfd2] italic sm:text-2xl">
              Software engineer at iVendi
            </p>

            <p className="max-w-[48ch] text-sm leading-relaxed text-slate-300 sm:text-base">
              I build web products that make complex tasks easier, from ordering
              at your table to getting a vehicle finance quote.
            </p>

            <div className="mt-1 flex flex-wrap gap-3 [@media(max-width:425px)]:justify-center">
              <a href="#selected-work" className={buttonClassName("primary")}>
                See my work
              </a>

              <Link href="/contact" className={buttonClassName("secondary")}>
                Discuss a project
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <h2 className="font-serif text-xl font-semibold text-[#f5f0e5] sm:text-2xl">
                Penalty shootout
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Three shots. How many can you score?
              </p>
            </div>

            <PenaltyShootout />
          </div>
        </section>

        {/* Selected work */}
        <section
          id="selected-work"
          aria-labelledby="selected-work-heading"
          className="mb-16 scroll-mt-8"
        >
          <h2
            id="selected-work-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-[#f5f0e5] sm:text-4xl"
          >
            Selected work
          </h2>

          <ul className="mt-4 divide-y divide-slate-700 border-b border-slate-700">
            {portfolioProjects.map(({ title, description, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-sm px-2 py-4 transition-colors hover:bg-slate-900/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:px-3 sm:py-5"
                >
                  <div className="grid gap-1.5">
                    <h3 className="font-serif text-xl font-semibold text-[#f5f0e5] group-hover:text-cyan-200 sm:text-2xl">
                      {title}
                    </h3>

                    <p className="max-w-prose text-sm leading-relaxed text-slate-300">
                      {description}
                    </p>
                  </div>

                  <span aria-hidden="true" className="text-xl text-cyan-300">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* About and profile actions */}
        <section
          aria-labelledby="about-heading"
          className="mb-10 grid gap-5 sm:mb-12 sm:gap-6"
        >
          <div className="grid gap-4">
            <h2
              id="about-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-[#f5f0e5] sm:text-4xl"
            >
              About me
            </h2>

            <div className="grid max-w-prose gap-4 leading-relaxed text-slate-300">
              <p>
                At iVendi, I build tools that help dealerships put together
                vehicle finance packages. I like finding ways to make everyday
                tasks easier for the people who use our products. When I worked
                on dealer search, I fixed how it responds as people type,
                resolved bugs and made results easier to find and filter.
              </p>

              <p>
                I also put together a plan for tackling technical debt and
                proposed where the team could start. The team has since taken on
                more of that work. I’m proud to have helped make the case for
                it, because a codebase that’s easier to change makes it easier
                to improve the product over time.
              </p>

              <p>
                Outside work, I play five-a-side and coach junior football.
                That’s what inspired the penalty shootout on this site.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 [@media(max-width:425px)]:justify-center">
            <Link href="/contact" className={buttonClassName("secondary")}>
              Discuss a project <span aria-hidden="true">→</span>
            </Link>

            <a
              href="/Shahrukh-Hughes-CV.pdf"
              download
              aria-label="Download CV (PDF)"
              className={buttonClassName("secondary")}
            >
              <FiDownload size={16} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </section>

        {/* Social links */}
        <footer className="flex flex-wrap justify-center gap-3 border-t border-slate-700 pt-3 pb-8 sm:justify-start">
          <a
            href="https://github.com/Shak-H"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
          >
            <FiGithub size={16} aria-hidden="true" />
            GitHub
            <span className="sr-only"> (opens in new tab)</span>
          </a>

          <a
            href="https://linkedin.com/in/shahrukh-hughes"
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinkClass}
          >
            <FiLinkedin size={16} aria-hidden="true" />
            LinkedIn
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </footer>
      </div>
    </FloodlitLayout>
  );
}
