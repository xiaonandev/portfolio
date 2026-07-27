import CaseStudyLayout from "@/components/CaseStudy/CaseStudyLayout";
import { Check } from "lucide-react";

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
    title: "Render around the viewport",
    copy: "The feed renders the active video and its immediate neighbours instead of mounting every player. An active index coordinates visibility while a small preload range keeps the next transition ready.",
    detail:
      "Why: multiple mounted players compete for playback and increase DOM and media work.",
  },
  {
    number: "02",
    title: "Own the playback engine",
    copy: "I replaced a carousel and third-party player combination with CSS scroll snap and the native video element. One video instance changes source, while custom controls handle long press, seeking and the progress bar.",
    detail:
      "Trade-off: more control logic to maintain, but fewer conflicting state layers.",
  },
  {
    number: "03",
    title: "Separate shared and local state",
    copy: "Mute state is lifted so every video follows one preference. Zustand persists bookmarks and the selected video ID, while transient progress and playback values remain close to the player.",
    detail:
      "Why: a URL is content identity, not a reliable playback-state container.",
  },
  {
    number: "04",
    title: "Restore navigation intentionally",
    copy: "The store records the selected video and the feed checks it when the user returns. Keeping the home view mounted preserves scroll context where appropriate.",
    detail:
      "Why: recreating a virtualized list from local component state loses the user’s position.",
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
      title="Short Video Platform"
      eyebrow="Independent project · July 2026 – Present"
      description="A short-video app built to practise loading only nearby videos, controlling playback, saving state and returning users to the same place."
      note="Built independently with a public video API to revisit and extend media-interface patterns encountered during previous commercial frontend work."
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
            <p className="case-label">02 · The Chanllange</p>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              The core problem was coordinating media lifecycle with navigation.
              A naive feed mounts many expensive players, lets multiple videos
              compete for playback and loses the user’s place when they visit a
              detail view.
            </p>
            <p>
              The core problem was coordinating media lifecycle with navigation.
              A naive feed mounts many expensive players, lets multiple videos
              compete for playback and loses the user’s place when they visit a
              detail view.
            </p>

            <p>
              I treated the feed as a small system: rendering range, active
              playback, shared preferences, server-data pagination and
              restoration each have a clear owner. The goal was a predictable
              experience under fast scrolling, route changes and refreshed
              sessions.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="case-label">03 · Key Technical Decisions</p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {decisions.map((decision) => (
              <article
                key={decision.number}
                className="rounded-2xl border border-gray-200 p-7 dark:border-gray-800"
              >
                <span className="font-mono text-sm text-cyan-700 dark:text-cyan-300">
                  {decision.number}
                </span>
                <h3 className="mt-4 text-xl font-bold">{decision.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {decision.copy}
                </p>
                <p className="mt-5 border-t border-gray-200 pt-4 text-sm font-medium dark:border-gray-800">
                  {decision.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 text-gray-950 dark:bg-gray-950 dark:text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-800 dark:text-cyan-300">
              04 · Debugging Case
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              On a hard refresh, network requests returned valid data but the
              feed occasionally rendered no videos. Navigating away and back
              made the content appear—evidence that the problem was rendering
              order, not the API.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [
                  "Signal",
                  "Valid response, empty initial DOM, correct render after navigation.",
                ],
                [
                  "Root cause",
                  "Persisted Zustand state was read before client hydration completed and filtered the initial dataset with stale assumptions.",
                ],
                [
                  "Resolution",
                  "Added a hydration gate and a defensive fallback so feed calculations only use rehydrated client state.",
                ],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="rounded-xl border border-cyan-600 bg-white p-5 dark:border-white/15 dark:bg-white/5"
                >
                  <h3 className="font-semibold text-cyan-800 dark:text-cyan-300">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="case-label">05 · Trade-offs</p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {[
                "Viewport-based mounting improves control but requires careful placeholder sizing to avoid layout collapse.",
                "Pexels provides realistic media but limits product-level control over ranking and metadata.",
                "Client persistence improves continuity on one device; it is not account-backed synchronization.",
                "The custom player reduces dependency conflicts but increases accessibility and browser-testing responsibility.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="case-label">06 · Next Steps</p>
            <ul className="mt-6 space-y-4">
              {[
                "Add automated tests around hydration and restoration paths.",
                "Measure media startup, dropped frames and memory on low-end mobile devices.",
                "Improve keyboard controls, captions and reduced-motion behaviour.",
                "Move bookmarks to authenticated storage for cross-device continuity.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
