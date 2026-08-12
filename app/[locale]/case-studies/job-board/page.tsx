import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";

const searchRequirements = [
  "Changing a filter updates the displayed jobs.",
  "Pagination preserves every active filter.",
  "A new search begins on the first page.",
  "Removing a filter updates the controls, URL and results together.",
  "Refreshing, navigating back or sharing the URL preserves the search.",
];

const responsibilities = [
  ["Server page", "Reads search parameters and loads the matching jobs."],
  ["Filter controls", "Convert submitted form values into a new URL."],
  ["Pagination", "Changes only the page parameter while preserving filters."],
];

function Heading({ number, title }: { number: string; title: string }) {
  return (
    <div>
      <p className="case-label">{number}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
        {title}
      </h2>
    </div>
  );
}

export default async function JobBoardCaseStudy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <CaseStudyLayout
      locale={locale}
      title="Job Board"
      description="A job discovery application with URL-driven search, multi-criteria filtering, pagination and authenticated application flows."
      image="/images/job-board-01.png"
      demo="https://job-board-ruddy-delta.vercel.app/"
      github="https://github.com/xiaonandev/job-board"
    >
      <section className="border-b border-gray-200 bg-gray-50 px-6 py-16 dark:border-gray-800 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="01 · The Challenge"
            title="Keeping one search state consistent"
          />
          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Search controls, pagination and server-rendered results all describe
            the same page state. Keeping separate React state for each part
            could allow the form, URL and displayed jobs to disagree.
          </p>
          <ul className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {searchRequirements.map((requirement) => (
              <li
                key={requirement}
                className="flex gap-3 leading-relaxed text-gray-600 dark:text-gray-400"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-700 dark:bg-cyan-400" />
                {requirement}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="02 · Core decision"
            title="Using the URL as the shared search state"
          />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              The filter component converts the keyword, job type, location and
              posting date into URL search parameters. The server page reads the
              same parameters and uses them to load the matching results.
            </p>
            <p>
              Pagination starts from the current parameters and changes only the
              page number. Submitting new filters removes the old page value, so
              a different search cannot remain on a page that may no longer
              exist.
            </p>
            <p>
              This makes the current search refresh-safe, compatible with
              browser navigation and shareable without maintaining another
              page-level state store.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 px-6 py-16 dark:border-gray-800 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="03 · Structure"
            title="Separating server data from browser interaction"
          />
          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Pages remain responsible for querying and displaying data, while
            small Client Components handle the browser interactions that change
            the URL.
          </p>
          <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {responsibilities.map(([name, description]) => (
              <div key={name} className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]">
                <h3 className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                  {name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Temporary request and form feedback stays local to the component
            using it; the state that determines the result set remains visible
            in the URL.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading number="04 · Insight" title="What I learned" />
          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Search, filters and pagination are not separate features. They are
            different controls for the same page state. Representing that state
            in the URL created a clearer boundary between browser interaction
            and server data loading while removing several opportunities for
            the interface to become inconsistent.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
