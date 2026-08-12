import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";

const challenges = [
  "Avoid mounting an interactive player for every item in the feed.",
  "Load more content before the user reaches the end.",
  "Keep saved items and playback preferences across routes and refreshes.",
  "Restore the previous feed position even when its data is not loaded yet.",
];

const decisions = [
  {
    number: "01",
    title: "Rendering a small window around the active video",
    problem:
      "Mounting every video would create unnecessary DOM, media and event-handling work as the feed grows.",
    approach:
      "The feed mounts only the active item and its immediate neighbours. Items farther away become same-size placeholders, keeping the scroll geometry stable while reducing active players. CSS scroll snap creates the vertical browsing behaviour, and IntersectionObserver identifies the active item.",
  },
  {
    number: "02",
    title: "Loading the next page before it is needed",
    problem:
      "Loading everything upfront would increase the initial request, while waiting for the exact end of the feed could interrupt browsing.",
    approach:
      "useSWRInfinite manages paginated requests and the returned pages are flattened into one list. When the active item approaches the end of the loaded data, the next page is requested in advance.",
  },
  {
    number: "03",
    title: "Preserving state and restoring context",
    problem:
      "Saved items, playback preferences and the previous feed position need to survive navigation, but temporary UI state should not become global. Restoring an index is also not enough if the corresponding page of data has not loaded yet.",
    approach:
      "Zustand stores only shared or persistent values, while modal and selection state remains local. When users return to the feed, the stored index can trigger additional pagination until the target item exists, after which it scrolls into view. A hydration flag delays persisted views until browser storage has been restored, avoiding an incorrect empty state on first render.",
  },
];

export default async function VideoFeedCaseStudy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <CaseStudyLayout
      locale={locale}
      title="Video Feed"
      description="A browsing application focused on viewport-aware rendering, incremental loading and preserving user context across routes."
      image="/images/video-feed.png"
      demo="https://video-feed-three.vercel.app/"
      github="https://github.com/xiaonandev/video-feed"
    >
      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="case-label">01 · The Challenge</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
            Coordinating performance, loading and persistent state
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            A continuously scrolling media feed connects several concerns that
            are easy to treat separately:
          </p>
          <ul className="mt-8 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-3 leading-relaxed text-gray-600 dark:text-gray-400"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-700 dark:bg-cyan-400" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="case-label">02 · Key Technical Decisions</p>
          <div className="mt-12 space-y-16">
            {decisions.map((decision) => (
              <article key={decision.number}>
                <h3 className="flex items-baseline gap-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  <span className="font-mono text-xl text-cyan-700 dark:text-cyan-400">
                    {decision.number}
                  </span>
                  {decision.title}
                </h3>
                <div className="mt-8 grid items-start gap-6 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:grid-cols-[120px_1fr]">
                  <p className="pt-1 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200">
                    Problem
                  </p>
                  <p>{decision.problem}</p>
                  <p className="pt-1 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-200">
                    Approach
                  </p>
                  <p>{decision.approach}</p>
                </div>
                <div className="mt-16 h-px bg-gray-100 dark:bg-gray-800/60" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 px-6 py-16 dark:border-gray-800 dark:bg-gray-900/50 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="case-label">03 · Insight</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 dark:text-white">
            The concerns depend on each other
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Optimising the mounted items also requires preserving scroll
            geometry. Restoring a position depends on whether the required data
            exists. Persisting state requires waiting for hydration before
            showing the correct browser-owned values. The project helped me see
            these as one connected browsing experience rather than isolated
            performance and state-management tasks.
          </p>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
