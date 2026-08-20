import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";

const problems = [
  {
    number: "01",
    title: "A growing feed would mount too many video players",
    problem:
      "Rendering every item would continuously increase DOM, media and event-handling work. Loading more content only at the exact end could also interrupt browsing.",
    solution:
      "The feed mounts only the active video and its immediate neighbours. Other items become same-size placeholders so the scroll position stays stable. IntersectionObserver tracks the active item, CSS scroll snap controls movement, and useSWRInfinite requests the next page before the user reaches the end.",
  },
  {
    number: "02",
    title: "Returning users could lose their feed position and saved state",
    problem:
      "Saved items, playback preferences and the active feed index need to survive navigation. Restoring an index alone is not enough when the page containing that video has not loaded yet, and persisted browser state is unavailable during the initial server render.",
    solution:
      "Zustand stores only the shared persistent values, while temporary modal and selection state remains local. On return, the stored index can trigger more pagination until the target item exists, then scroll it into view. A hydration flag delays persisted views until browser storage has been restored.",
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
