import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  contributions?: string;
};

const ProjectCard = ({
  title,
  description,
  href,
  contributions,
}: ProjectCardProps) => {
  return (
    <Link
      href={href}
      className="flex h-full flex-col rounded-2xl border border-slate-700 bg-slate-900 p-5 text-slate-100 transition-colors hover:border-cyan-300 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          aria-hidden="true"
          className="shrink-0 text-xl leading-none text-cyan-300"
        >
          ↗
        </span>
      </div>

      <p className="mt-3 leading-relaxed text-slate-300">{description}</p>

      {contributions && (
        <p className="mt-auto pt-4 text-sm font-medium text-slate-400">
          {contributions}
        </p>
      )}
    </Link>
  );
};

export default ProjectCard;
