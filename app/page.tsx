import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Frontend Engineer</h2>
        <p className="text-gray-600">
          I build scalable, performant web applications using React, Next.js,
          and TypeScript.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">Projects</h3>

        <div className="space-y-4">
          <Link href="/projects/marstons">
            <div className="border p-4 rounded hover:bg-gray-50">
              Marston’s Table Ordering App
            </div>
          </Link>

          <Link href="/projects/personai">
            <div className="border p-4 rounded hover:bg-gray-50">
              PersonAI Platform
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
