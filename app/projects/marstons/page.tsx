import Navbar from "@/components/Navbar";

export default function Marstons() {
  return (
    <>
      <Navbar />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        Marston’s – Table Ordering Platform
      </h1>

      {/* Intro */}
      <p className="mb-6 text-gray-600">
        A web-based table ordering platform allowing customers to browse menus,
        place orders, and pay directly from their table, improving service
        efficiency and customer experience in busy pub environments.
      </p>
    </>
  );
}
