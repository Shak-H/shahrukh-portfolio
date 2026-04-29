import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between mb-10">
      <h1 className="font-semibold">Shahrukh Hughes</h1>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
