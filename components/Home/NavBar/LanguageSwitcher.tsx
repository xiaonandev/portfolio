"use client";

import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";

import { useEffect, useRef, useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "nl", name: "Nederlands" },
  // { code: 'ja', name: '日本語' },
] as const;

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const switchLocale = (newLocale: string) => {
    setIsOpen(false);

    router.replace(pathname, {
      locale: newLocale,
      scroll: false,
    });
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="
      w-10
      h-8
      inline-flex
      items-center
      justify-center
      cursor-pointer
      rounded-full
      text-xs
      font-medium
      text-cyan-500
      border
      border-cyan-500/40
      hover:bg-cyan-500/10
      hover:border-cyan-500
      transition-all
    "
      >
        {locale.toUpperCase()}
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="
        absolute
        right-0
        mt-2
        w-36
        py-2
        bg-white
        dark:bg-slate-800
        rounded-lg
        shadow-xl
        border
        border-slate-200
        dark:border-slate-700
        z-50
      "
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={locale === lang.code}
              onClick={() => switchLocale(lang.code)}
              className="
            block
            w-full
            text-left
            px-4
            py-2
            text-xs
            text-slate-700
            dark:text-slate-200
            hover:bg-gray-100
            dark:hover:bg-slate-700
            transition-colors
            cursor-pointer
          "
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
