import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Feel free to reach out:
      </p>
      <ul className="space-y-2">
        <li>
          <a
            href="mailto:shahrukh.hughes@gmail.com"
            className="underline hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/shahrukh-hughes"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Shak-H"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
          >
            GitHub
          </a>
        </li>
      </ul>
    </>
  );
}
