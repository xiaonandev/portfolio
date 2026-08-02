import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";

const challenges = [
  "Changing a filter should update the displayed jobs.",
  "Moving between pages should preserve the existing filters.",
  "Starting a new search should return the user to the first page.",
  "Removing a filter should update the form, URL and results together.",
  "Refreshing or sharing the page should preserve the same search.",
];

const responsibilities = [
  ["Filter component", "Reads user input and updates the URL."],
  ["Pagination", "Changes the page while preserving active filters."],
  ["Application button", "Manages sign-in checks and request feedback."],
  ["Navigation", "Changes according to the current session."],
];

const nextSteps = [
  "Remove duplicated filter state so the URL is the single source of truth.",
  "Add loading, empty and error states to the search results.",
  "Prevent repeated application submissions while a request is in progress.",
  "Add validation and submission feedback to the job-posting form.",
  "Improve pagination when the number of result pages becomes large.",
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
      description="A Next.js application where users can search and filter jobs, view job details, submit applications and track their application status."
      image="/images/job-board-01.png"
      demo="https://job-board-pmt3q38eb-xiaonandevs-projects.vercel.app/"
      github="https://github.com/xiaonandev/job-board"
    >
      <section className="border-b border-gray-200 bg-gray-50 px-6 py-16 dark:border-gray-800 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="01 · The Challenge"
            title="Keeping one page state consistent"
          />
          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            My main frontend focus was organising the flow between search
            controls, URL parameters, page results and user actions. The search
            page combines several filters with pagination, and each part needs
            to stay in sync:
          </p>
          <ul className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-3 text-base leading-relaxed text-gray-600 dark:text-gray-400"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-700 dark:bg-cyan-400" />
                {challenge}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-gray-200 pt-8 text-lg leading-relaxed text-gray-600 dark:border-gray-800 dark:text-gray-400">
            Maintaining separate state for each part could easily cause the
            controls and displayed results to become inconsistent.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading number="02 · Approach" title="URL-based search state" />
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_240px]">
            <div className="space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                The filter component converts submitted values into URL search
                parameters, including the keyword, job type, location and
                posting date.
              </p>
              <p>
                The page reads those parameters and loads the matching results.
                The URL becomes a clear connection between the user&apos;s
                selections and the data displayed on the page.
              </p>
              <p>
                A filtered search can therefore survive a refresh, work with
                browser navigation and be shared as a link.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 px-6 py-16 dark:border-gray-800 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="03 · Pagination"
            title="Preserving the active filters"
          />
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-950 dark:text-white">
                Moving between pages
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                Pagination uses the current URL parameters and changes only the
                page number, so every existing filter remains active.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 dark:text-white">
                Starting a new search
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
                Submitting new filters removes the old page number so that the
                new search begins from the first page.
              </p>
            </div>
          </div>
          <p className="mt-8 border-t border-gray-200 pt-8 text-lg leading-relaxed text-gray-600 dark:border-gray-800 dark:text-gray-400">
            This avoids a separate pagination state that could become out of
            sync with the active search.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="04 · Structure"
            title="Separating data and interaction"
          />
          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Pages are responsible for loading and displaying data, while smaller
            client components handle browser interactions.
          </p>
          <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {responsibilities.map(([name, description]) => (
              <div
                key={name}
                className="grid gap-2 py-5 sm:grid-cols-[180px_1fr]"
              >
                <h3 className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                  {name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Temporary interface state stays close to the component that uses it,
            while page-level search state remains visible in the URL.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 px-6 py-16 dark:border-gray-800 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
          <div>
            <Heading number="05" title="Application feedback" />
            <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">
              Users who are not signed in are redirected to the sign-in page.
              After submission, the interface displays either a success message
              with a dashboard link or an error returned by the request.
            </p>
          </div>
          <div>
            <Heading number="06" title="Insight" />
            <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">
              Search, filters and pagination all describe the same page state.
              This project clarified which state belongs in the URL, which
              should remain inside a component, and how server-rendered pages
              can work with interactive client components.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading number="07 · Next Steps" title="Planned improvements" />
          <ol className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {nextSteps.map((step, index) => (
              <li
                key={step}
                className="flex gap-5 py-5 text-gray-600 dark:text-gray-400"
              >
                <span className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                  0{index + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
