"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative w-full h-screen min-h-[560px] sm:min-h-[720px] overflow-hidden">
      {/* Full-bleed hero wallpaper with slow cinematic zoom */}
      <div className="absolute inset-0 animate-slow-zoom">
        <Image
          src="/hero.png"
          alt="KeelCrest Holding LTD, private horizon"
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

      {/* Dark cinematic overlay for readability */}
      <div className="absolute inset-0 bg-hero-overlay pointer-events-none" />

      {/* Hero content — two-column on desktop: text left, logo right */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
            {/* Left — headline */}
            <div className="animate-fade-up">
              <div className="mb-3 md:mb-8">
                <span className="eyebrow whitespace-nowrap tracking-[0.05em] sm:tracking-[0.35em] text-gold-gradient">
                  {t("home.hero.eyebrow")}
                </span>
              </div>

              <h1 className="section-title text-parchment text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] leading-[1.08] whitespace-normal">
                {t("home.hero.title1")}
                <span className="italic text-gold-gradient">{t("home.hero.title2")}</span>
              </h1>

              <p className="mt-3 md:mt-8 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-parchment/70 font-light italic font-display">
                {t("home.hero.sub")}
              </p>
            </div>

            {/* Right — large logo emblem */}
            <div className="flex items-center justify-center animate-fade-in">
              <Image
                src="/logo.png"
                alt=""
                width={1536}
                height={1024}
                priority
                quality={100}
                className="w-full max-w-[260px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[640px] xl:max-w-[760px] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
