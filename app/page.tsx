import Link from "next/link";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import PenaltyShootout from "@/components/PenaltyShootout";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-slate-950 bg-[radial-gradient(ellipse_at_top_right,#142e41_0%,transparent_55%)]"
      />
      <Navbar />

      <div className="mx-auto max-w-4xl px-4">
        {/* Hero */}
        <section className="mb-16 grid items-center gap-8 rounded-2xl border border-slate-700 bg-slate-950 bg-[radial-gradient(ellipse_at_top_right,#164e63_0%,transparent_60%)] p-5 text-slate-100 sm:p-8 md:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
              Shahrukh Hughes
            </h1>

            <p className="mt-3 text-sm font-semibold text-cyan-300 sm:text-base">
              Frontend Software Engineer at iVendi.
            </p>

            <p className="mt-4 max-w-prose leading-relaxed text-slate-300">
              I build web applications that make complex tasks easier, from
              running AI-supported research to ordering food from your table. I
              work with clients and product teams to turn ideas into products
              people can use.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 [@media(max-width:425px)]:justify-center">
              <a
                href="#selected-work"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                See my work
              </a>

              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-500 bg-slate-950/30 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Discuss a project
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-700 pt-3 text-sm text-slate-300">
              <a
                href="https://github.com/Shak-H"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-slate-700 px-2 font-medium transition-colors hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <FiGithub size={16} className="shrink-0" aria-hidden="true" />
                <span className="sr-only min-[400px]:not-sr-only">GitHub</span>
                <span className="sr-only"> (opens in new tab)</span>
              </a>

              <a
                href="https://linkedin.com/in/shahrukh-hughes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-slate-700 px-2 font-medium transition-colors hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <FiLinkedin size={16} className="shrink-0" aria-hidden="true" />
                <span className="sr-only min-[400px]:not-sr-only">
                  LinkedIn
                </span>
                <span className="sr-only"> (opens in new tab)</span>
              </a>

              <a
                href="/Shahrukh-Hughes-CV.pdf"
                download
                aria-label="Download CV (PDF)"
                className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-slate-700 px-2 font-medium transition-colors hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <FiDownload size={16} className="shrink-0" aria-hidden="true" />
                CV
              </a>
            </div>
          </div>

          <PenaltyShootout />
        </section>

        <section
          id="selected-work"
          aria-labelledby="selected-work-heading"
          className="mb-16 scroll-mt-8"
        >
          <h2
            id="selected-work-heading"
            className="mb-5 font-serif text-3xl font-semibold tracking-tight text-[#f5f0e5] sm:text-4xl"
          >
            Selected work
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <ProjectCard
              title="PersonAI (Satalia)"
              description="An AI research platform that lets teams interview simulated personas and run virtual focus groups."
              href="/projects/personai"
              contributions="Frontend ownership · Workflow design"
            />
            <ProjectCard
              title="Marston’s Order & Pay"
              description="A mobile ordering experience that lets pub customers browse the menu, customise meals and pay from their table."
              href="/projects/marstons"
              contributions="Ordering flows · Forms · Analytics"
            />
          </div>
        </section>

        {/* About */}
        <section
          aria-labelledby="about-heading"
          className="mb-16 grid gap-5 border-t border-slate-700 pt-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8"
        >
          <div>
            <h2
              id="about-heading"
              className="font-serif text-3xl font-semibold tracking-tight text-[#f5f0e5] sm:text-4xl"
            >
              About me
            </h2>

            <p className="mt-4 max-w-prose leading-relaxed text-slate-300">
              I’m a frontend software engineer at iVendi, where I help build
              tools dealerships use to put together vehicle finance packages.
              I’ve also built AI research tools and mobile ordering experiences.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-md border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
