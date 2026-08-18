import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  techStack: string[];
  demoUrl: string;
};

export default function MoreWorkCard({ title, techStack, demoUrl }: Props) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-cyan-700 dark:text-gray-100 dark:hover:text-cyan-400"
      >
        {title}
        <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
      <span aria-hidden="true">—</span>
      <span>{techStack.join(" · ")}</span>
    </p>
  );
}
