import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";

const overview = [
  ["Role", "Design and frontend development"],
  ["Type", "Independent project"],
  ["Duration", "July 2026 – Present"],
  ["Stack", "Next.js, TypeScript, SWR, Zustand"],
  ["Data", "Pexels API"],
  ["Focus", "Media lifecycle, rendering, persistent state"],
];

const challenges = [
  "Rendering every item creates unnecessary DOM and resource usage.",
  "The application must detect which item is currently active.",
  "More data needs to load before the user reaches the end.",
  "Saved data must remain consistent across the feed and profile views.",
  "Returning to the feed should preserve the user’s previous position.",
  "Persisted client state must not cause incorrect UI during hydration.",
];

const implementations = [
  {
    number: "01",
    title: "Rendering Only the Relevant Items",
    problem:
      "Mounting every content item at once would create unnecessary browser work, especially because each item contains an interactive player and its own event handling.",
    approach:
      "Instead of keeping every video component mounted, the feed renders only the current item and the items directly before and after it. Items farther away are replaced with empty placeholders of the same size. This keeps the scroll position stable while reducing the number of active components on the page. I used CSS scroll snap to create a predictable vertical browsing experience and IntersectionObserver to detect which item is currently visible.",
  },
  {
    number: "02",
    title: "Loading More Data as the User Browses",
    problem:
      "Loading all available data upfront would increase the initial request and rendering cost. Loading only after reaching the exact end could instead leave the user waiting.",
    approach:
      "I used useSWRInfinite to manage paginated requests and flattened the returned pages into one list with useMemo. When the user gets close to the end of the loaded items, the application requests the next page in advance.",
  },
  {
    number: "03",
    title: "Managing State Across Different Views",
    problem:
      "The application uses different types of state for different purposes. Putting all of them in one global store would make unrelated components dependent on each other and make temporary UI state persist longer than intended.",
    approach:
      "I use Zustand to store information that needs to be shared or preserved, including saved items and the previous feed position. And temporary interface state—such as selected items, an open modal —remains inside the page or component where it is used. This prevents short-lived interface state from unnecessarily becoming global.",
  },
  {
    number: "04",
    title: "Preserving User Context Across Views",
    problem:
      "When users open their saved collection and return to the main feed, returning to the beginning would lose their browsing context.",
    approach:
      "The feed stores the active index and reuses it after navigation. If the restored index is beyond the currently loaded dataset, its proximity to the end causes additional pages to load. Once the target item becomes available, the feed scrolls it back into view.",
  },
  {
    number: "05",
    title: "Handling Persisted State During Hydration",
    problem:
      "Saved-items view is stored in the browser so that it remains available after a refresh. However, zustand persistence is restored only after the application loads in the browser. Rendering Saved-items view before that process finishes can temporarily produce an incorrect empty state.",
    approach:
      "I added a hydration status to the store and delay the saved-items view until the restoration process is complete. This keeps the first visible state consistent with the stored data.",
  },
];

const components = [
  {
    name: "FeedContainer",
    desc: "pagination, active position and render window",
  },
  {
    name: "VideoCard",
    desc: "combines the content, controls and overlay for one item",
  },
  { name: "VideoPlayer", desc: "handles the item’s direct interactions" },
  {
    name: "SavedVideoGrid",
    desc: "displays the saved collection and supports selection",
  },
  {
    name: "SavedVideosModal",
    desc: "reuses the feed experience inside the saved-items view",
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
      description="A browsing application built to explore common frontend challenges found in interaction-heavy products: rendering long lists efficiently, loading data incrementally, preserving user state across routes, and restoring context when users return to a previous view."
      image="/images/video-feed.png"
      demo="https://video-feed-three.vercel.app/"
      github="https://github.com/xiaonandev/video-feed"
    >
      <section className="px-6 py-12 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="case-label text-sm font-semibold tracking-widest text-cyan-700 uppercase">
            01 · Overview
          </p>
          <div className="mt-8 grid overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 sm:grid-cols-2 lg:grid-cols-3">
            {overview.map(([label, value]) => (
              <div
                key={label}
                className="border-b border-gray-200 p-6 last:border-b-0 dark:border-gray-800 sm:border-r"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {label}
                </p>
                <p className="mt-2 font-medium text-gray-900 dark:text-gray-100">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl">
          <p className="case-label text-sm font-semibold tracking-widest text-cyan-700 uppercase">
            02 · The Challenge
          </p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
              A continuously scrolling feed introduces several connected
              problems:
            </p>
            <ul className="grid gap-4 md:grid-cols-2 text-base">
              {challenges.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="pt-4 border-t border-gray-200 dark:border-gray-800">
              The main challenge was coordinating these behaviours without
              turning every piece of state into global state or tightly coupling
              the feed to individual content cards.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="case-label text-sm font-semibold tracking-widest text-cyan-700 uppercase">
            03 · Key Technical Decisions
          </p>

          <div className="mt-12 space-y-16">
            {implementations.map((impl) => (
              <article key={impl.number} className="relative">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 mb-8 flex items-baseline gap-3">
                  <span className="font-mono text-cyan-600 dark:text-cyan-400 text-xl">
                    {impl.number}
                  </span>
                  {impl.title}
                </h3>

                <div className="grid gap-6 sm:grid-cols-[120px_1fr] items-start text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  <div className="font-semibold text-gray-900 dark:text-gray-200 text-sm uppercase tracking-wider pt-1">
                    Problem
                  </div>
                  <div className="whitespace-pre-line">{impl.problem}</div>

                  <div className="font-semibold text-gray-900 dark:text-gray-200 text-sm uppercase tracking-wider pt-1">
                    Approach
                  </div>
                  <div className="space-y-4">
                    <div className="whitespace-pre-line">{impl.approach}</div>
                  </div>
                </div>

                <div className="mt-16 h-px w-full bg-gray-100 dark:bg-gray-800/60 block last:hidden" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl">
          <p className="case-label text-sm font-semibold tracking-widest text-cyan-700 uppercase">
            04 · Reusable Component Design
          </p>
          <div className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <p className="mb-8">
              The application is separated into components based on their
              responsibilities:
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {components.map((comp) => (
                <div
                  key={comp.name}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
                >
                  <span className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                    {comp.name}
                  </span>
                  <span className="text-sm text-gray-500">—</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {comp.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-4xl gap-12">
          <div>
            <p className="case-label text-sm font-semibold tracking-widest text-cyan-700 uppercase mb-8">
              05 · Insights
            </p>
            <p className="space-y-5 text-gray-600 dark:text-gray-400">
              This project highlighted how several frontend concerns affect each
              other. Optimising a long list is not only about removing
              components—it also requires keeping the page position stable.
              Restoring a previous position is not only a state problem—it also
              depends on whether the required data has finished loading.
              Persisted state also needs special handling when it is used in a
              server-rendered application.
            </p>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
