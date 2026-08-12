import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";
import { notFound } from "next/navigation";

const projects = {
  "job-board": {
    title: "Job Board Platform",
    description:
      "A full-stack practice project for job listings, sign-in and database-backed user actions.",
    image: "/images/job-board-01.png",
    demo: "https://job-board-pmt3q38eb-xiaonandevs-projects.vercel.app/",
    github: "https://github.com/xiaonandev/job-board",
  },
} as const;

export default async function EmptyCaseStudy({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects[slug as keyof typeof projects];
  if (!project) notFound();

  return (
    <CaseStudyLayout
      locale={locale}
      title={project.title}
      description={project.description}
      image={project.image}
      demo={project.demo}
      github={project.github}
    />
  );
}
