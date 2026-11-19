import Link from "next/link";

type NavbarProps = {
  variant?: "default" | "floodlit";
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ variant = "default" }: NavbarProps) {
  const isFloodlit = variant === "floodlit";

  const focusClass = isFloodlit
    ? "focus-visible:outline-cyan-300"
    : "focus-visible:outline-cyan-700 dark:focus-visible:outline-cyan-300";

  const linkClass = isFloodlit
    ? "text-slate-300 hover:text-cyan-300"
    : "text-slate-700 hover:text-cyan-700 dark:text-slate-200 dark:hover:text-cyan-300";

  return (
    <nav
      aria-label="Main navigation"
      className={`mb-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b pb-3 sm:mb-10 ${
        isFloodlit
          ? "mx-4 border-slate-700 [@media(max-width:425px)]:flex-col"
          : "border-slate-200 dark:border-slate-700"
      }`}
    >
      <Link
        href="/"
        className={`inline-flex min-h-11 items-center rounded-sm font-serif text-xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 ${focusClass} ${
          isFloodlit ? "text-[#f5f0e5]" : "text-slate-950 dark:text-slate-100"
        }`}
      >
        Shahrukh Hughes
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`inline-flex min-h-11 items-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${focusClass} ${linkClass}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
