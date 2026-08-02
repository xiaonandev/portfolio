import { footerSocialLinks } from "@/data";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 py-12">
      <div className="w-[80%] mx-auto">
        <div className="grid items-center justify-items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <span className="text-xl font-bold text-cyan-600 md:justify-self-start">
            {"</>"}
          </span>
          <div className="flex items-center gap-4">
            {footerSocialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-muted-foreground hover:text-cyan-800 transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1 md:justify-self-end">
            Made by Xiaonan Dong
          </p>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-8 text-center dark:border-gray-800">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
