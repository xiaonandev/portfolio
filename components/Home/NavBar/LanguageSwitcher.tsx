'use client';

import { usePathname, useRouter } from '@/src/i18n/navigation';
import { useLocale } from 'next-intl';

import { useEffect, useRef, useState } from 'react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'ja', name: '日本語' },
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
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
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
          w-12
          cursor-pointer
          px-3
          py-1
          rounded-full
          border
          border-gray-400
          hover:text-cyan-600
          transition-colors
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
                hover:bg-gray-100
                dark:hover:bg-slate-700
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
