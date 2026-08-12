import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";

const conflictConditions = [
  "the same workspace",
  "the same date",
  "the same time slot",
  "another confirmed booking",
];

const supportingFeatures = [
  [
    "Runtime validation",
    "Zod validates and transforms request data before it reaches Prisma. Database lookups then confirm that related records exist and the workspace is available.",
  ],
  [
    "URL-based filtering",
    "Workspace and booking filters remain in the URL, allowing Server Components to load the matching relational data directly.",
  ],
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

export default async function WorkspaceBookingDashboardCaseStudy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <CaseStudyLayout
      locale={locale}
      title="Workspace Dashboard"
      description="A full-stack workspace booking dashboard featuring booking management, with server-side filtering, conflict prevention and database-driven reporting."
      image="/images/workspace-dashboard-02.png"
      demo="https://workspace-dashboard-rho.vercel.app/"
      github="https://github.com/xiaonandev/workspace-dashboard"
    >
      <section className="border-b border-gray-200 bg-gray-50 px-6 py-16 dark:border-gray-800 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="01 · The Challenge"
            title="Keeping bookings consistent through their full lifecycle"
          />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              Creating a booking is only one part of the workflow. A record can
              later be cancelled, its time slot can be taken by someone else,
              and the original booking can then be restored.
            </p>
            <p>
              The main challenge was making sure the interface, API rules and
              database still agree after every state change—not only after the
              initial form submission.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="02 · Booking lifecycle"
            title="Restore is not just a status update"
          />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              Cancelling a booking keeps the record for history but releases its
              slot. If another confirmed booking takes that slot, restoring the
              original record without another check would create a conflict.
            </p>
            <p>
              The restore route therefore loads the original booking from its
              ID, checks whether its workspace is still active, and searches for
              a conflicting record using four conditions:
            </p>
          </div>

          <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {conflictConditions.map((condition) => (
              <li
                key={condition}
                className="flex gap-3 leading-relaxed text-gray-600 dark:text-gray-400"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-700 dark:bg-cyan-400" />
                {condition}
              </li>
            ))}
          </ul>

          <p className="mt-8 border-t border-gray-200 pt-8 text-lg leading-relaxed text-gray-600 dark:border-gray-800 dark:text-gray-400">
            This made the same business rule apply to both creation and
            restoration. It also showed me that validation needs to cover an
            entity&apos;s lifecycle, not only its create form.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 px-6 py-16 dark:border-gray-800 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="03 · Interaction state"
            title="An API response is not the end of the interaction"
          />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              After a cancel or restore request succeeds, the page calls
              <code className="mx-1 font-mono text-base text-gray-800 dark:text-gray-200">
                router.refresh()
              </code>
              to request new Server Component data. That refresh is not a
              Promise, so the request can finish before the updated row appears.
            </p>
            <p>
              Using only an{" "}
              <code className="font-mono text-base text-gray-800 dark:text-gray-200">
                isSaving
              </code>{" "}
              state caused the button to briefly become clickable again while
              the page was still refreshing.
            </p>
          </div>

          <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            <div className="grid gap-2 py-5 sm:grid-cols-[160px_1fr]">
              <span className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                isSaving
              </span>
              <p className="text-gray-600 dark:text-gray-400">
                Tracks the PATCH request to the route handler.
              </p>
            </div>
            <div className="grid gap-2 py-5 sm:grid-cols-[160px_1fr]">
              <span className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                isPending
              </span>
              <p className="text-gray-600 dark:text-gray-400">
                Tracks the React transition while refreshed server data is being
                rendered.
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            The button remains disabled while either state is active, so it
            moves directly from a pending action to the updated row without an
            intermediate clickable state.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="04 · Module boundary"
            title="Keeping server dependencies out of the browser"
          />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              A Client Component initially imported a workspace colour constant
              from a chart component. The chart also imported Prisma, so that
              small import pulled the server dependency chain into the client
              bundle and produced a browser build error for Node&apos;s
              <code className="mx-1 font-mono text-base text-gray-800 dark:text-gray-200">
                dns
              </code>
              module.
            </p>
          </div>

          <div className="mt-8 font-mono text-sm leading-7 text-gray-600 dark:text-gray-400">
            <p>WorkspaceCard (client)</p>
            <p className="pl-5">→ ChartSection</p>
            <p className="pl-10">→ Prisma → pg → dns</p>
          </div>

          <p className="mt-8 border-t border-gray-200 pt-8 text-lg leading-relaxed text-gray-600 dark:border-gray-800 dark:text-gray-400">
            I moved shared booking slots, slot counts and workspace colours into
            a client-safe constants module. Server Components can combine those
            values with Prisma, while Client Components import only plain data.
            This kept the shared source of truth without crossing the
            Server/Client boundary.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 px-6 py-16 dark:border-gray-800 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading
            number="05 · Supporting implementation"
            title="The rest of the data flow"
          />
          <div className="mt-8 divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
            {supportingFeatures.map(([name, description]) => (
              <div
                key={name}
                className="grid gap-3 py-6 sm:grid-cols-[190px_1fr]"
              >
                <h3 className="font-semibold text-gray-950 dark:text-white">
                  {name}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <Heading number="06 · Insight" title="What I learned" />
          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            The most useful lesson was that ordinary features become engineering
            problems at their boundaries. A status change can reintroduce a
            business conflict, an API response can finish before the interface
            updates, and a harmless-looking import can move server code into the
            browser bundle. Following those boundaries made the project more
            reliable than treating each screen as an isolated CRUD task.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
