import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Navbar />

      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="space-y-4 flex flex-col">
        <Link
          href="/projects/marstons"
          className="block border border-gray-200 dark:border-gray-700 p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
        >
          Marston&apos;s App
        </Link>
        <Link
          href="/projects/personai"
          className="block border border-gray-200 dark:border-gray-700 p-4 rounded hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
        >
          PersonAI Platform
        </Link>
      </div>
    </>
  );
}
