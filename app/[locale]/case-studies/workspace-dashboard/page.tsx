import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";

const problems = [
  {
    number: "01",
    title: "Restoring a booking could create a new conflict",
    problem:
      "Cancelling a booking releases its time slot. If another booking takes that slot, changing the original record back to Confirmed would leave two active bookings for the same workspace and time.",
    solution:
      "The restore route reloads the original booking from its ID and checks that the workspace is active. It then searches for another confirmed booking with the same workspace, date and time slot before updating the status. Create requests follow the same rule, with Zod validating the request data before Prisma writes to PostgreSQL.",
  },
  {
    number: "02",
    title: "The action looked finished before the interface updated",
    problem:
      "After a cancel or restore request succeeds, router.refresh() still needs to fetch and render new Server Component data. Tracking only the request caused the button to briefly become clickable again before the updated row appeared.",
    solution:
      "The button combines isSaving for the PATCH request with isPending for the React transition. It remains disabled while either stage is active, moving directly from the pending action to the refreshed result.",
  },
  {
    number: "03",
    title: "A shared constant pulled Prisma into the browser bundle",
    problem:
      "A Client Component imported a colour constant from a server chart component. Because that module also imported Prisma, the client dependency chain reached pg and Node's dns module, causing the browser build to fail.",
    solution:
      "I moved workspace colours, booking slots and derived slot counts into a client-safe constants module. Server Components can combine those values with Prisma, while Client Components import only plain data.",
  },
];

export default async function WorkspaceDashboardCaseStudy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <CaseStudyLayout
      locale={locale}
      title="Workspace Dashboard"
      description="A full-stack workspace booking dashboard with server-side filtering, conflict prevention and database-driven reporting."
      image="/images/workspace-dashboard-02.png"
      demo="https://workspace-dashboard-rho.vercel.app/"
      github="https://github.com/xiaonandev/workspace-dashboard"
    >
      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="case-label">Problems solved</p>
          <div className="mt-10 space-y-14">
            {problems.map((item) => (
              <article key={item.number}>
                <h2 className="flex items-baseline gap-3 text-2xl font-bold tracking-tight text-gray-950 dark:text-white">
                  <span className="font-mono text-lg text-cyan-700 dark:text-cyan-400">
                    {item.number}
                  </span>
                  {item.title}
                </h2>
                <div className="mt-6 grid gap-5 leading-relaxed text-gray-600 dark:text-gray-400 sm:grid-cols-[100px_1fr]">
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200">
                    Problem
                  </p>
                  <p>{item.problem}</p>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200">
                    Solution
                  </p>
                  <p>{item.solution}</p>
                </div>
                <div className="mt-12 h-px bg-gray-200 dark:bg-gray-800" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
