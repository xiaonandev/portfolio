"use client";

import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { Navlinks } from "@/Constant/Constant";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const navItemList = Navlinks.map((link, index) => (
    <Link
      className="dark:text-white text-black hover:text-cyan-800 dark:hover:text-[#FFAE6E] font-semibold transition-all duration-200"
      key={index}
      href={link.href}
    >
      {link.name}
    </Link>
  ));
  return (
    <div
      className="
        fixed
        top-0
        w-full
        h-[12vh]
        z-100
        bg-white
        dark:bg-gray-800
        shadow-md
      "
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        <Logo />
        <div className="hidden lg:flex items-center space-x-10">
          {navItemList}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/cv/Xiaonan Dong CV.pdf"
            download="Xiaonan Dong CV.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-500 border border-cyan-500/40 rounded-full hover:bg-cyan-500/10 hover:border-cyan-500 transition-all"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
          <ThemeToggler />
          <LanguageSwitcher />
          <a
            href="#beyondcoding"
            className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-pink-500/30 hover:text-gray-500 dark:bg-gray-800 dark:border-transparent dark:text-slate-500 dark:hover:border-pink-500/30 dark:hover:text-slate-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span>
            Beyond Coding
          </a>
          <MenuIcon
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
