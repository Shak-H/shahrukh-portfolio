import Navbar from "@/components/Navbar";

export default function PersonAI() {
  return (
    <>
      <Navbar />

      <h1 className="text-2xl font-bold mb-4">PersonAI Platform</h1>

      <p className="mb-4">
        AI-driven application allowing users to create personas and simulate
        focus group conversations.
      </p>

      <h2 className="font-semibold mt-6 mb-2">My Role</h2>
      <p>
        Sole frontend engineer responsible for architecture and implementation.
      </p>

      <h2 className="font-semibold mt-6 mb-2">Tech</h2>
      <p>React, Redux, TypeScript</p>
    </>
  );
}
