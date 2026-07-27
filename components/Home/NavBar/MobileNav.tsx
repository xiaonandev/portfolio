"use client";
import { Navlinks } from "@/Constant/Constant";
import { X } from "lucide-react";
import Link from "next/link";
import { useLocale } from "next-intl";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
  const locale = useLocale();
  const navItemList = Navlinks.map((link, index) => (
    <Link key={index} href={`/${locale}/${link.href}`} onClick={closeNav}>
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

        <X
          onClick={closeNav}
          className="cursor-pointer absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 transition-transform duration-300 hover:rotate-30"
        />
      </div>
    </div>
  );
};

export default MobileNav;
