import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import { projects } from '../../../data';
import ProjectCard from './ProjectCard';
import { useTranslations } from 'next-intl';
const Project = () => {
  const t = useTranslations('Projects');

  const projectTranslations = t.raw('items') as Array<{
    title: string;
    description: string;
  }>;
  const projectList = projects.map((p, index) => ({
    ...p,
    title: projectTranslations[index]?.title || p.title,
    description: projectTranslations[index]?.description || p.description,
  }));

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div id="projects">
        <SectionHeading
          title_1={t('title1')}
          title_2={t('title2')}
          description=""
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
