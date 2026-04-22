"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function LeadershipHero() {
  const { t } = useI18n();
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] sm:h-screen sm:min-h-[640px] overflow-hidden">
      <div className="absolute inset-0 animate-slow-zoom">
        <Image
          src="/leadership-hero.png"
          alt="Private boardroom at dusk, city skyline at golden hour"
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

      <div className="relative z-10 h-full flex items-center sm:items-end">
        <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-14 sm:pb-20 lg:pb-28">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-4 sm:mb-8">
              <span className="eyebrow">{t("leadership.hero.eyebrow")}</span>
            </div>
            <h1 className="section-title text-parchment text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {t("leadership.hero.title1")}
              <span className="italic text-gold-gradient">{t("leadership.hero.title2")}</span>
            </h1>
            <p className="mt-4 sm:mt-6 font-display text-base sm:text-xl md:text-2xl italic text-parchment/70">
              {t("leadership.hero.sub1")}
              <span className="whitespace-nowrap sm:whitespace-normal">
                {t("leadership.hero.sub2")}
              </span>
              {t("leadership.hero.sub3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
