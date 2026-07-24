import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "nl", "ja"],
  defaultLocale: "nl",
});
