'use client';

import Logo from '@/components/Helper/Logo';
import ThemeToggler from '@/components/Helper/ThemeToggler';
import { Navlinks } from '@/Constant/Constant';
import { Download, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
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
            href="/cv/Xiaonan Dong CV Frontend.pdf"
            download="Xiaonan Dong CV Frontend.pdf"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-cyan-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-cyan-300 ring-offset-cyan-200 hover:ring-offset-cyan-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
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
