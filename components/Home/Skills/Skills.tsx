import SectionHeading from "@/components/Helper/SectionHeading";
import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("Skills");

  const skillGroups = [
    {
      title: t("groups.core"),
      highlight: true,
      skills: ["React", "TypeScript", "Next.js", "JavaScript (ES6+)"],
    },
    {
      title: t("groups.frontend"),
      highlight: true,
      skills: ["Zustand", "SWR", "HTML5", "CSS3"],
    },
    {
      title: t("groups.backend"),
      highlight: true,
      skills: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma ORM",
        "Zod",
      ],
    },
    {
      title: t("groups.styling"),
      highlight: false,
      skills: ["Tailwind CSS", "Material UI", "Ant Design", "Chakra UI"],
    },
    {
      title: t("groups.tools"),
      highlight: false,
      skills: ["Git", "AWS (S3, Textract)", "ESLint", "Postman"],
    },
  ];
  return (
    <div className="py-14 bg-gray-100 dark:bg-gray-900">
      <section id="skills">
        <SectionHeading
          title_1={t("title1")}
          title_2={t("title2")}
          description=""
        />

        <div className="grid grid-cols-2 w-[70%] mx-auto space-y-10 ">
          {skillGroups.map((group) => (
            <div key={group.title} className="min-w-0">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                {group.highlight && (
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                )}
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm border
                      ${
                        group.highlight
                          ? "border-cyan-500 text-cyan-600 dark:text-cyan-400"
                          : "border-gray-300 text-gray-600 dark:text-gray-300"
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
