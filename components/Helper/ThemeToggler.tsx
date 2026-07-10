'use client';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from 'lucide-react';

const ThemeToggler = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <button
      onClick={() => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
      }}
      className="p-2 transition w-10 h-10 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center"
    >
      {currentTheme === 'dark' ? (
        <SunIcon className="text-white w-7 h-7 cursor-pointer" />
      ) : (
        <MoonIcon className="text-black w-7 h-7 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggler;
