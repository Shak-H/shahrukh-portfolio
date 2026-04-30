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
      className="block border p-6 rounded hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-600 dark:text-gray-400">{description}</p>

      {contributions && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          {contributions}
        </p>
      )}
    </a>
  );
}
