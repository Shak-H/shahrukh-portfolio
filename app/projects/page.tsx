import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Navbar />

      <h2 className="text-2xl font-bold mb-6">Projects</h2>

      <div className="space-y-4">
        <Link href="/projects/marstons">Marston’s App</Link>
        <Link href="/projects/personai">PersonAI Platform</Link>
      </div>
    </>
  );
}
