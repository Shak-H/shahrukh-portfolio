type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  contributions?: string;
};

export default function ProjectCard({
  title,
  description,
  href,
  contributions,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="block border p-6 rounded hover:bg-gray-50 hover:shadow-sm transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-600">{description}</p>

      {contributions && (
        <p className="text-sm text-gray-500 mt-2">{contributions}</p>
      )}
    </a>
  );
}
