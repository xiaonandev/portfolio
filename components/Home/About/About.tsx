import SectionHeading from "@/components/Helper/SectionHeading";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowDownRight, Briefcase, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "MA in Music Management",
    school: "The University of Sheffield",
    period: "2021 – 2022",
  },
  {
    degree: "BA in Musicology",
    school: "Shandong University",
    period: "2017 – 2021",
  },
];

const About = () => {
  const t = useTranslations("About");
  return (
    <div className=" bg-gray-100 dark:bg-gray-900">
      <section id="about">
        <SectionHeading
          title_1={t("title1")}
          title_2={t("title2")}
          description=""
        />

        <div className="mx-auto mb-12 grid w-[88%] max-w-5xl gap-4 lg:grid-cols-[1.2fr_.8fr]">
          <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-cyan-100 p-2 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">
                <Briefcase className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-gray-500 dark:text-gray-400">
                  Experience
                </p>
                <h3 className="mt-1 font-semibold text-gray-950 dark:text-gray-50">
                  Frontend Developer
                </h3>
                <p className="mt-0.5 text-sm text-gray-700 dark:text-gray-300">
                  Science Infinity Technology Limited
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Sep 2025 – Jan 2026 · Hangzhou, China
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Built AI-assisted media workflows, cross-platform WebView
                  interfaces and internal administration tools with React and
                  TypeScript.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {education.map((item) => (
              <article
                key={item.degree}
                className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950"
              >
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700 dark:text-cyan-300" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.14em] text-gray-500 dark:text-gray-400">
                    Education
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-gray-950 dark:text-gray-50">
                    {item.degree}
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">
                    {item.school} · {item.period}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid w-[88%] max-w-5xl mx-auto md:grid-cols-[.8fr_1.2fr] gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden p-2">
              <Image
                src={"/images/selfie-01.jpg"}
                alt="selfie"
                width={1238}
                height={1280}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {t("description")}
            </p>
            <a
              href="#beyondcoding"
              className="inline-flex items-center gap-2 font-semibold text-cyan-700 hover:text-cyan-900 dark:text-cyan-300"
            >
              {t("beyondLink")} <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
