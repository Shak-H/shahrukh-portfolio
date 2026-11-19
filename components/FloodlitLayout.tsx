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

      <Navbar variant="floodlit" />

      {children}
    </div>
  );
}
