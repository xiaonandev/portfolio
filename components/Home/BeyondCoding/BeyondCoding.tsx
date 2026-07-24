import Image from "next/image";
import React, { useRef } from "react";

const BeyondCoding = () => {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const handlePlay = (currentIndex: number) => {
    audioRefs.current.forEach((audio, index) => {
      if (audio && index !== currentIndex) {
        audio.pause();
      }
    });
  };
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <section id="beyondcoding" className="py-16 px-6 max-w-4xl mx-auto">
        <div className="mb-6 border-l-2 border-cyan-500/40 pl-3">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 tracking-tight flex items-center gap-2">
            Beyond Coding
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
            A corner for my own digital art and music compositions.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 transition-all space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                🎨 Original illustration
              </h3>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 h-40 group">
              <Image
                src="/images/my-art.png"
                alt="Art thumbnail"
                fill
                className="absolute object-cover filter blur-[2px] "
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              🎵 Self-Composed Soundtracks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex flex-col gap-2">
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Track 01
                </span>
                <audio
                  ref={(el) => {
                    audioRefs.current[0] = el;
                  }}
                  onPlay={() => handlePlay(0)}
                  controls
                  className="w-full h-7 accent-cyan-500"
                >
                  <source src="/audio-1.mp3" type="audio/mpeg" />
                </audio>
              </div>
              <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 flex flex-col gap-2">
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Track 02
                </span>
                <audio
                  ref={(el) => {
                    audioRefs.current[1] = el;
                  }}
                  onPlay={() => handlePlay(1)}
                  controls
                  className="w-full h-7 accent-cyan-500"
                >
                  <source src="/audio-2.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span>🎮</span> Enjoying video games in downtime.
            </span>
            <span className="text-[11px] text-cyan-700 font-medium">
              Just for fun
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeyondCoding;
