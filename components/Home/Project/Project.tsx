import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import { projects } from "../../../data";
import ProjectCard from "./ProjectCard";
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
  const caseStudySlugs = ["workspace-dashboard", "video-feed", "job-board"];

  return (
    <div className="py-5 bg-gray-100 dark:bg-gray-900">
      <section id="projects">
        <SectionHeading
          title_1={t("title1")}
          title_2={t("title2")}
          description=""
        />

        <div className="grid gap-7 w-[88%] max-w-6xl mx-auto lg:grid-cols-3">
          {projectList.map((project, index) => (
            <ProjectCard
              key={index}
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
        </div>
      </section>
    </div>
  );
};

export default Project;
