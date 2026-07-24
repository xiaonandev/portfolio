"use client";
import { Navlinks } from "@/Constant/Constant";
import { X } from "lucide-react";
import Link from "next/link";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
  const navItemList = Navlinks.map((link, index) => (
    <Link key={index} href={link.href}>
      <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
        {link.name}
      </p>
    </Link>
  ));

  const sidebarOpenClose = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        onClick={closeNav}
        className={`${sidebarOpenClose} fixed inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen`}
      ></div>

      <div
        className={`${sidebarOpenClose} text-white justify-center items-start flex flex-col h-full transform transition-all duration-500 delay-100 w-[80%] sm:w-[60%] bg-cyan-800 py-12 px-8 z-1050 fixed`}
      >
        <div className="flex flex-col space-y-6 w-full">{navItemList}</div>

        <a
          href="#beyondcoding"
          className="group relative inline-flex items-center gap-2 mt-6 mx-12 px-3 py-1.5 rounded-md text-xs font-medium text-slate-300 bg-white/3 border border-white/8 backdrop-blur-md transition-all duration-300 hover:bg-white/8 hover:border-pink-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(244,114,182,0.15)] w-fit"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          <span>Beyond Coding</span>
        </a>

        <X
          onClick={closeNav}
          className="cursor-pointer absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 transition-transform duration-300 hover:rotate-30"
        />
      </div>
    </div>
  );
};

export default MobileNav;
