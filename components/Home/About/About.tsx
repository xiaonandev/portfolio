import SectionHeading from '@/components/Helper/SectionHeading';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('About');
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <section id="about">
        <SectionHeading
          title_1={t('title1')}
          title_2={t('title2')}
          description=""
        />

        <div className="grid w-[80%] mx-auto md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden p-2">
              <Image
                src={'/images/profile.jpg'}
                alt="profile"
                width={1238}
                height={1280}
                className="w-full h-full object-center rounded-xl"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {t('description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
