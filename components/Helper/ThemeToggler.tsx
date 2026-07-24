"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeToggler = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
      }}
      className="inline-flex items-center justify-center p-2 w-10 h-10 rounded-full text-cyan-500 border border-cyan-500/40 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all cursor-pointer"
    >
      {currentTheme === "dark" ? (
        <SunIcon className="w-5 h-5 cursor-pointer" />
      ) : (
        <MoonIcon className="w-5 h-5 cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeToggler;
