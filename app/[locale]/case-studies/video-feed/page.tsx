import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";

const overview = [
  ["Role", "Design and frontend development"],
  ["Type", "Independent project"],
  ["Duration", "July 2026 – Present"],
  ["Stack", "Next.js, TypeScript, SWR, Zustand"],
  ["Data", "Pexels API"],
  ["Focus", "Media lifecycle, rendering, persistent state"],
];

const decisions = [
  {
    number: "01",
    title: "Viewport-aware rendering",
    copy: "The feed keeps the active video and its immediate neighbours mounted. Items outside that range are replaced with full-height placeholders, preserving the scroll-snap layout without keeping every video player active in the DOM.\n\nEach mounted player uses an IntersectionObserver with a visibility threshold to determine when it becomes active. Entering the viewport starts the video and accompanying audio; leaving it pauses both and reports the new active index to the parent feed.",
    detail:
      "Why this decision: Conditional rendering alone would collapse the page and change scroll positions. Keeping lightweight placeholders preserves the physical structure of the feed while reducing the number of mounted media elements.",
  },
  {
    number: "02",
    title: "Incremental loading",
    copy: "Video pages are loaded with SWR Infinite and flattened into one feed. Rather than maintaining a separate scroll sentinel, the final implementation uses the active index as the pagination signal. When the user reaches the last few loaded items, the feed requests the next page.",
    detail:
      "This keeps pagination connected to the same state that controls the rendering window, although production code would also need stronger end-of-data and request-deduplication guards.",
  },
  {
    number: "03",
    title: "Synchronize video, BGM and custom controls",
    copy: "Each video is paired with a separate background-audio element. The video timeline acts as the source of truth: during time updates, the audio position is corrected when drift exceeds 0.8 seconds.\n\nThe custom progress bar converts the click position into a percentage of the element width, calculates the corresponding media time and updates both the video and audio elements. Play, pause, seek and mute actions therefore remain coordinated rather than being handled by unrelated controls.",
    detail:
      "Trade-off: Using separate video and audio elements gives explicit control over the sound layer, but it also creates synchronization and autoplay responsibilities that would not exist with a single media source.",
  },
];

const tradeoffs = [
  "The placeholder approach reduces mounted media players but still retains one layout node for every loaded video.",
  "The active index is persisted, but restoring by index assumes that API ordering remains stable between sessions.",
  "Bookmarks currently store complete external API objects in local storage rather than normalized IDs or account-backed records.",
  "Separate video and audio elements require synchronization logic and additional autoplay, accessibility and cross-browser testing.",
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
      title="Short Video Platform"
      eyebrow="Independent project · July 2026 – Present"
      description="A mobile-first video feed exploring viewport-aware rendering, coordinated media playback, incremental loading and persistent navigation state."
      note="Built independently with the Pexels API to revisit and extend media-interface patterns I previously encountered in commercial frontend work."
      image="/images/video-feed.png"
      demo="https://video-feed-three.vercel.app/"
      github="https://github.com/xiaonandev/video-feed"
    >
      <section className="px-6 py-5">
        <div className="mx-auto max-w-6xl">
          <p className="case-label">01 · Overview</p>
          <div className="mt-6 grid overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 sm:grid-cols-2 lg:grid-cols-3">
            {overview.map(([label, value]) => (
              <div
                key={label}
                className="border-b border-gray-200 p-5 last:border-b-0 dark:border-gray-800 sm:border-r"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="mt-2 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="case-label">02 · The Challenge</p>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              A continuously scrolling video feed creates several connected
              frontend problems. Mounting every video keeps unnecessary media
              elements alive, while independently controlled players can compete
              for playback. Navigation introduces another challenge: opening a
              saved-video view and returning to the feed should not reset the
              user’s position.
            </p>

            <p>
              I treated the feed as a coordination problem between four layers:
              server-data pagination, the active rendering range, local media
              state, and persisted navigation state. Each layer needed a clear
              owner so that scrolling, playback and route changes would remain
              predictable.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="case-label">03 · Key Technical Decisions</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {decisions.map((decision) => (
              <article
                key={decision.number}
                className="flex flex-col justify-between rounded-2xl border border-gray-200 p-7 dark:border-gray-800"
              >
                <div>
                  <span className="font-mono text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                    {decision.number}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{decision.title}</h3>
                  <p className="mt-3 whitespace-pre-line leading-relaxed text-muted-foreground">
                    {decision.copy}
                  </p>
                </div>
                <p className="mt-6 border-t border-gray-200 pt-4 text-xs font-medium leading-relaxed text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  {decision.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <p className="case-label">
            04 · Persistent State & Position Restoration
          </p>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground max-w-4xl">
            <p>
              The persisted store records the active feed index. After paginated
              video data becomes available on a later visit, the feed resolves
              the corresponding video element and restores its position with{" "}
              <code className="text-sm bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded text-gray-900 dark:text-gray-100 font-mono">
                scrollIntoView
              </code>
              .
            </p>
            <p>
              The saved-video modal uses a similar strategy: it receives the
              selected thumbnail index, scrolls to that item on opening, and
              mounts only the selected video and its neighbours.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-cyan-500/20 bg-white p-8 dark:bg-gray-950 dark:border-gray-800 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-800 dark:text-cyan-300 mb-2">
              Debugging Case · Hydration & Order of Execution
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              On a hard refresh, the API could return valid data while the first
              feed still appeared empty. Navigating away and back made the
              videos appear, which suggested that the failure was caused by
              rendering order rather than the network request.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [
                  "Signal",
                  "Successful network response, empty initial feed and correct rendering after a later navigation.",
                ],
                [
                  "Root Cause",
                  "The persisted active index could rehydrate before the initial paginated dataset and corresponding DOM structure were ready. The render-window calculation then focused on a later index while the first visible items were replaced with placeholders.",
                ],
                [
                  "Resolution",
                  "I kept the first feed item renderable as a defensive fallback and delayed scroll restoration until video data was available. For saved-video UI, I added an explicit hydration flag through Zustand’s onRehydrateStorage callback and avoided rendering persisted collections before rehydration completed.",
                ],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-xl border border-gray-200 bg-gray-50/50 p-5 dark:border-gray-800 dark:bg-gray-900/50"
                >
                  <h5 className="font-semibold text-cyan-800 dark:text-cyan-300 text-sm">
                    {title}
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-gray-100 dark:border-gray-800/60 pt-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  What I learned: &nbsp;
                </span>
                Persisted client state adds another lifecycle to the
                application. A value can be valid in storage but temporarily
                inconsistent with data and DOM elements that have not loaded
                yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="case-label">05 · Saved-video Workflow</p>
          <div className="mt-6 max-w-4xl text-muted-foreground leading-relaxed text-base space-y-4">
            <p>
              Bookmarked videos are persisted in Zustand and displayed in a
              profile grid. Users can open a saved item directly in a vertical
              playback modal, enter selection mode and remove multiple items in
              one operation. Selection state remains local to the profile page,
              while the updated saved collection is written back to the shared
              store.
            </p>
            <p className="text-sm bg-gray-50 dark:bg-gray-900 border-l-2 border-cyan-600 dark:border-cyan-400 p-3 rounded-r-lg">
              <strong className="text-gray-900 dark:text-gray-200 font-medium">
                Design Decision:
              </strong>{" "}
              The delete action owns the mutation rather than individual
              selection controls, keeping selection temporary until the user
              confirms the operation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <p className="case-label">06 · Trade-offs and Limitations</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
            {tradeoffs.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-950"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-600" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
