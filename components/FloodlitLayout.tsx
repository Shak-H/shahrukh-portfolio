import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";

type FloodlitLayoutProps = {
  children: ReactNode;
};

export default function FloodlitLayout({ children }: FloodlitLayoutProps) {
  return (
    <div className="relative isolate min-h-screen text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-slate-950 bg-[radial-gradient(ellipse_at_top_right,#142e41_0%,transparent_55%)]"
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-cyan-300 focus:px-4 focus:py-3 focus:font-semibold focus:text-slate-950 focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Skip to main content
      </a>

      <Navbar variant="floodlit" />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
