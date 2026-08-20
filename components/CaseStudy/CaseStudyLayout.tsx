import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import BackButton from "./BackButton";

type CaseStudyLayoutProps = {
  locale: string;
  title: string;
  description?: string;
  note?: string;
  image?: string;
  demo?: string;
  showDemo?: boolean;
  github?: string;
  children?: ReactNode;
};

export default function CaseStudyLayout({
  locale,
  title,
  description,
  note,
  image,
  demo,
  showDemo = false,
  github,
  children,
}: CaseStudyLayoutProps) {
  return (
    <main className="min-h-screen bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50">
      <section className="border-b border-gray-200 bg-white px-6 pb-12 pt-28 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <BackButton />
          <div
            className={`mt-8 grid gap-8 ${
              image ? "lg:grid-cols-[1.05fr_.95fr] lg:items-center" : ""
            }`}
          >
            <div className="max-w-3xl">
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                {title}
              </h1>
              {description && (
                <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              )}
              {note && (
                <p className="mt-5 border-l-2 border-cyan-700 pl-4 text-sm leading-relaxed text-gray-600 dark:border-cyan-400 dark:text-gray-400">
                  {note}
                </p>
              )}
              {(demo || showDemo || github) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {demo && (
                    <Button asChild>
                      <a href={demo} target="_blank" rel="noreferrer">
                        Live demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {!demo && showDemo && (
                    <Button disabled aria-label="Live demo not yet available">
                      Live demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                  {github && (
                    <Button asChild variant="outline">
                      <a href={github} target="_blank" rel="noreferrer">
                        GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
            {image && (
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-md dark:border-gray-800 dark:bg-gray-900">
                <Image
                  src={image}
                  alt={`${title} application interface`}
                  width={1462}
                  height={1070}
                  className="h-auto w-full"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {children}

      <section className="border-t border-gray-200 bg-white px-6 py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              End of case study
            </p>

            <h2 className="mt-1 text-2xl font-bold underline hover:scale-105 transition-all duration-200">
              <Link href={`/${locale}/#projects`}>See my other projects</Link>
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
