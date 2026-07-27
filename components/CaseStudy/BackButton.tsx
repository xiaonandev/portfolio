"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-cyan-800 hover:text-cyan-950 dark:text-cyan-300 dark:hover:text-cyan-200"
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
}
