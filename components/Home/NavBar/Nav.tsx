"use client";

import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { Navlinks } from "@/Constant/Constant";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "next-intl";
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const locale = useLocale();
  const navItemList = Navlinks.map((link, index) => (
    <Link
      className="dark:text-white text-black hover:text-cyan-800 dark:hover:text-[#FFAE6E] font-semibold transition-all duration-200"
      key={index}
      href={`/${locale}/${link.href}`}
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
          <ThemeToggler />
          <LanguageSwitcher />
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
