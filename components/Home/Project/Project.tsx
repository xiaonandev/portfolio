import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import { projects } from "../../../data";
import ProjectCard from "./ProjectCard";
import MoreWorkCard from "./MoreWorkCard";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
const Project = () => {
  const t = useTranslations("Projects");
  const locale = useLocale();

  const projectTranslations = t.raw("items") as Array<{
    title: string;
    description: string;
    highlights?: string[];
    eyebrow?: string;
    caseStudy?: { challenge: string; approach: string; outcome: string };
  }>;
  const projectList = projects.map((p, index) => ({
    ...p,
    title: projectTranslations[index]?.title || p.title,
    description: projectTranslations[index]?.description || p.description,
    highlights: projectTranslations[index]?.highlights || p.highlights || [],
    eyebrow: projectTranslations[index]?.eyebrow || p.eyebrow,
    caseStudy: projectTranslations[index]?.caseStudy || p.caseStudy,
  }));
  const featuredProjects = projectList.slice(0, 2);
  const moreWorks = projectList.slice(2);
  const caseStudySlugs = ["workspace-dashboard", "video-feed"];

  return (
    <div className="py-5 bg-gray-100 dark:bg-gray-900">
      <section id="projects">
        <SectionHeading
          title_1={t("title1")}
          title_2={t("title2")}
          description=""
        />

        <div className="mx-auto grid w-[88%] max-w-6xl gap-7 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              labels={{
                highlights: t("labels.highlights"),
                caseStudy: t("labels.caseStudy"),
                challenge: t("labels.challenge"),
                approach: t("labels.approach"),
                outcome: t("labels.outcome"),
                demo: t("labels.demo"),
                code: t("labels.code"),
              }}
              caseStudyUrl={`/${locale}/case-studies/${caseStudySlugs[index]}`}
            />
          ))}

          <div className="flex min-h-96 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white/40 px-8 text-center dark:border-gray-700 dark:bg-gray-950/30">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-cyan-700 dark:text-cyan-400">
                {t("comingSoon")}
              </p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                {t("placeholder")}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 w-[88%] max-w-6xl">
          <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-gray-100">
            {t("moreWorks")}
          </h3>
          <div className="space-y-1">
            {moreWorks.map((project) => (
              <MoreWorkCard
                key={project.title}
                title={project.title}
                techStack={project.techStack}
                demoUrl={project.demoUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
