import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
type Props = {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  highlights?: string[];
  eyebrow: string;
  caseStudy: { challenge: string; approach: string; outcome: string };
  labels: {
    highlights: string;
    caseStudy: string;
    challenge: string;
    approach: string;
    outcome: string;
    demo: string;
    code: string;
  };
  caseStudyUrl?: string;
};
const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  demoUrl,
  githubUrl,
  highlights = [],
  eyebrow,
  labels,
  caseStudyUrl,
}: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 shadow-sm hover:shadow-md rounded-2xl overflow-hidden flex flex-col h-full border border-gray-200/80 dark:border-gray-800 transition-all duration-300 focus-within:ring-2 focus-within:ring-cyan-600 focus-within:ring-offset-2 dark:focus-within:ring-cyan-400 dark:focus-within:ring-offset-gray-950">
      {caseStudyUrl && image && (
        <Link
          href={caseStudyUrl}
          aria-label={`Read ${title} case study`}
          className="block cursor-pointer"
        >
          <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      )}
      {!caseStudyUrl && image && (
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      {!image && (
        <Link
          href={caseStudyUrl || "#"}
          aria-label={`Read ${title} case study`}
          className="flex h-48 items-center justify-center bg-gray-100 px-8 text-center dark:bg-gray-800"
        >
          <span className="text-xl font-semibold tracking-tight text-gray-700 dark:text-gray-200">
            Workspace Booking
          </span>
        </Link>
      )}

      <div className="p-6 flex flex-col flex-1">
        {eyebrow && (
          <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {eyebrow}
          </p>
        )}
        <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-cyan-700 dark:text-gray-100 dark:group-hover:text-cyan-600">
          {caseStudyUrl ? (
            <Link href={caseStudyUrl} className="cursor-pointer">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {highlights && highlights.length > 0 && (
          <div className="mb-5 pt-3 border-t border-gray-100 dark:border-gray-800/80">
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-wider">
              {labels.highlights}
            </p>
            <ul className="space-y-1.5">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2 leading-relaxed"
                >
                  <span className="text-gray-400 dark:text-gray-500 font-bold select-none">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        {caseStudyUrl && (
          <Link
            href={caseStudyUrl}
            className="group/cs mb-5 flex cursor-pointer items-center justify-between rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-semibold text-cyan-600 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:shadow-sm dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-500 dark:hover:bg-cyan-400/20"
          >
            <span className="flex items-center gap-2">{labels.caseStudy}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/cs:translate-x-1" />
          </Link>
        )}

        <div className="flex gap-2.5">
          {demoUrl && (
            <Button asChild size="sm" className="flex-1 cursor-pointer text-xs">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                {labels.demo}
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 cursor-pointer text-xs"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-3.5 h-3.5 mr-1.5" />
                {labels.code}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
