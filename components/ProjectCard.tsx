import Link from "next/link";

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
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm transition-colors hover:border-cyan-600 hover:bg-cyan-50/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600 sm:p-6 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-cyan-300 dark:hover:bg-slate-800 dark:focus-visible:outline-cyan-300"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          aria-hidden="true"
          className="shrink-0 text-xl leading-none text-cyan-700 dark:text-cyan-300"
        >
          ↗
        </span>
      </div>

      <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>

      {contributions && (
        <p className="mt-auto pt-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          {contributions}
        </p>
      )}
    </Link>
  );
}
