import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="text-gray-600 mb-4">Feel free to reach out:</p>
      <ul className="space-y-2">
        <li>
          <a href="mailto:shahrukh.hughes@gmail.com" className="underline">
            Email
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/shahrukh-hughes"
            className="underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/Shak-H" className="underline">
            GitHub
          </a>
        </li>
      </ul>
    </>
  );
}
