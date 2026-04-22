"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function AboutContent() {
  const { t } = useI18n();
  return (
    <>
      {/* Intro / hero banner */}
      <section className="relative h-[70vh] min-h-[480px] sm:min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.png"
            alt="KeelCrest Holding LTD, corporate interior"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
            style={{
              filter:
                "saturate(0.55) contrast(1.12) brightness(0.9) sepia(0.08)",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />

        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-14 pb-12 sm:pb-20 lg:pb-28">
            <div className="max-w-3xl animate-fade-up">
              <div className="mb-4 sm:mb-8">
                <span className="eyebrow">{t("about.hero.eyebrow")}</span>
              </div>
              <h1 className="section-title text-parchment text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">
                  {t("about.hero.strength")}
                  <span className="italic text-gold-gradient">{t("about.hero.structure")}</span>
                </span>
                <span className="block">
                  {t("about.hero.power")}
                  <span className="italic text-gold-gradient">{t("about.hero.vision")}</span>
                </span>
              </h1>
              <p className="mt-4 sm:mt-6 font-display text-base sm:text-xl md:text-2xl italic text-parchment/70">
                {t("about.hero.sub")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership preview — cinematic statement */}
      <section className="relative py-16 sm:py-20 lg:py-40 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[3/2]">
                <Image
                  src="/keelcrest-logo.png"
                  alt="KeelCrest Holding LTD, brand mark"
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <span className="eyebrow">{t("about.statement.eyebrow")}</span>
              <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
                {t("about.statement.title1")}
                <span className="italic text-gold-gradient">
                  {t("about.statement.title2")}
                </span>
              </h2>

              <div className="divider-gold my-6 sm:my-8" />

              <p className="text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                {t("about.statement.body")}
              </p>

              <p className="mt-4 sm:mt-6 font-display text-lg sm:text-xl italic text-parchment/55">
                {t("about.statement.quote")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
