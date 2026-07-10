import SectionHeading from '@/components/Helper/SectionHeading';
import { experiences } from '@/data';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Experience = () => {
  const t = useTranslations('Experience');
  const translatedItems = t.raw('items') as Array<{
    title: string;
    description: string;
  }>;

  const experienceList = experiences.map((exp, index) => ({
    ...exp,
    title: translatedItems[index]?.title || exp.title,
    description: translatedItems[index]?.description || exp.description,
  }));
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div id="experience">
        <SectionHeading
          title_1={t('title1')}
          title_2={t('title2')}
          description=""
        />
        <div className="relative px-6 max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-400 to-blue-900 md:-translate-x-px"></div>

          {experiences.map((item, index) => {
            const translation = translatedItems[index] || {};

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center z-10">
                  {item.type === 'work' ? (
                    <Briefcase className="w-4 h-4 text-blue-500" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-blue-500" />
                  )}
                </div>

                <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
                  <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-2 text-sm text-blue-400 mb-2">
                      <span className="px-3 py-1 rounded-full bg-blue-600/10 font-medium">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                      {translation.title || item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {item.company}
                    </p>
                    {(translation.description || item.description) && (
                      <p className="text-muted-foreground text-sm mb-4">
                        {translation.description || item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Experience;
