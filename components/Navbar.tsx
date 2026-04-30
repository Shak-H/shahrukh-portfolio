import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between mb-10">
      <h1 className="font-semibold">Shahrukh Hughes</h1>
      <div className="flex gap-6">
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
