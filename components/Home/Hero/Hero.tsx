"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div
      id="home"
      className="relative bg-[radial-gradient(circle_520px_at_78%_42%,rgba(168,229,253,.8)_0%,rgba(244,244,254,1)_58%)] pt-28 pb-14 sm:pt-34 sm:pb-18 overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_75%_45%,rgba(14,53,92,1)_0%,rgba(16,14,72,1)_90%)]!"
    >
      <div className="relative z-10 w-[88%] max-w-6xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight ">
            {t("greeting")}
          </h1>
          <h2 className="text-3xl font-bold leading-[1.08] tracking-tight">
            {t("headline")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground dark:text-gray-200 sm:text-xl">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="w-fit">
              <a href="#projects">
                {t("viewProjects")}
                <ArrowDownRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="mt-7 text-sm font-medium text-foreground/75">
            {t("availability")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
