import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Keep translations on disk while the public site is English-only.
  locales: ["en"],
  defaultLocale: "en",
  localeDetection: false,
});
