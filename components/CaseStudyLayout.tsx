import type { ReactNode } from "react";
import Link from "next/link";
import FloodlitLayout from "@/components/FloodlitLayout";

type CaseStudyLayoutProps = {
  title: string;
  summary: string;
  accent: "cyan" | "amber";
  children: ReactNode;
};

const accents = {
  cyan: {
    panel: "border-cyan-900 bg-linear-to-br from-cyan-950 to-slate-900",
    link: "text-cyan-300 hover:text-cyan-100 focus-visible:outline-cyan-300",
  },
  amber: {
    panel: "border-amber-900 bg-linear-to-br from-amber-950 to-slate-900",
    link: "text-amber-300 hover:text-amber-100 focus-visible:outline-amber-300",
  },
};

export default function CaseStudyLayout({
  title,
  summary,
  accent,
  children,
}: CaseStudyLayoutProps) {
  const theme = accents[accent];

  return (
    <FloodlitLayout>
      <article className="mx-auto max-w-4xl px-4 pb-16">
        <Link
          href="/projects"
          className={`mb-4 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 ${theme.link}`}
        >
          <span aria-hidden="true">←</span>
          All projects
        </Link>

        <header className={`rounded-2xl border p-5 sm:p-8 ${theme.panel}`}>
          <h1 className="font-serif text-4xl leading-tight font-semibold tracking-tight text-[#f5f0e5] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-prose leading-relaxed text-slate-300">
            {summary}
          </p>
        </header>

        <div className="mx-auto mt-8 grid max-w-2xl gap-8 leading-relaxed text-slate-300 sm:mt-10 sm:gap-10 [&_a]:text-cyan-300 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[#f5f0e5] [&_h3]:font-medium [&_h3]:text-slate-100">
          {children}
        </div>
      </article>
    </FloodlitLayout>
  );
}
