"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function PortfolioIntro() {
  const { t } = useI18n();
  return (
    <>
      {/* Hero banner */}
      <section className="relative w-full h-[60vh] min-h-[420px] sm:h-screen sm:min-h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/portfolio-hero.mp4"
            poster="/portfolio-hero.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />

        <div className="relative z-10 h-full flex items-center sm:items-end">
          <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-14 sm:pb-20 lg:pb-28">
            <div className="max-w-[24rem] sm:max-w-3xl text-start animate-fade-up">
              <div className="mb-4 sm:mb-8">
                <span className="eyebrow text-[0.7rem] tracking-[0.3em]">
                  {t("portfolio.hero.eyebrow")}
                </span>
              </div>
              <h1 className="section-title text-parchment text-[2.125rem] leading-[1.18] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl">
                {t("portfolio.hero.title1")}
                <span className="italic text-gold-gradient">
                  <span className="whitespace-nowrap">{t("portfolio.hero.title2a")}</span>
                  {t("portfolio.hero.title2b")}
                </span>
              </h1>
              <p className="mt-4 sm:mt-6 font-display text-[0.8rem] leading-relaxed sm:text-xl md:text-2xl italic text-parchment/70">
                {t("portfolio.hero.sub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro — leads into the apps below */}
      <section className="relative pt-16 sm:pt-20 lg:pt-32 pb-2 sm:pb-4 lg:pb-6 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
              <span className="h-px w-10 bg-gold/60" />
              <span className="eyebrow">{t("portfolio.intro.eyebrow")}</span>
              <span className="h-px w-10 bg-gold/60" />
            </div>
            <h2 className="section-title text-parchment text-3xl sm:text-4xl md:text-5xl">
              {t("portfolio.intro.title1")}
              <span className="italic text-gold-gradient">
                {t("portfolio.intro.title2")}
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 font-display italic text-base sm:text-xl md:text-2xl text-parchment/65">
              {t("portfolio.intro.sub")}
            </p>
          </div>
        </div>
      </section>

      {/* Decorative gold chevron divider — bridges the intro and the apps */}
      <div className="flex justify-center bg-night pt-2 pb-0 sm:pb-1 lg:pb-2">
        <Image
          src="/down-icon.png"
          alt=""
          width={1536}
          height={1024}
          quality={95}
          aria-hidden="true"
          className="w-24 sm:w-28 md:w-32 h-auto select-none pointer-events-none"
          style={{
            mixBlendMode: "screen",
            filter:
              "saturate(0.55) contrast(1.12) brightness(0.9) sepia(0.08)",
          }}
        />
      </div>
    </>
  );
}
