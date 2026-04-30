import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex justify-between items-center flex-wrap gap-4 mb-10"
    >
      <Link href="/" className="font-semibold">
        Shahrukh Hughes
      </Link>
      <div className="flex gap-4 sm:gap-6">
        <Link
          href="/"
          className="hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
