"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function Solutions() {
  const { t } = useI18n();
  return (
    <section className="relative py-16 sm:py-20 lg:py-40 bg-night">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-20 items-center">
          {/* Left — text block */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <span className="eyebrow">{t("solutions.eyebrow")}</span>
            </div>

            <h2 className="section-title text-parchment text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {t("solutions.title1")}
              <span className="italic text-gold-gradient">
                {t("solutions.title2")}
              </span>
            </h2>

            <div className="divider-gold my-6 sm:my-10" />

            <div className="max-w-lg">
              <p className="font-display text-lg sm:text-xl md:text-2xl italic text-parchment/55 leading-relaxed">
                {t("solutions.body")}
              </p>
            </div>
          </div>

          {/* Right — image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[3/2] w-full overflow-hidden shadow-frame">
              <Image
                src="/office-image.png"
                alt="Private office at dusk, city skyline at golden hour"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{
                  filter:
                    "saturate(0.55) contrast(1.12) brightness(0.9) sepia(0.08)",
                }}
              />
              {/* Edge fade into page background */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.85)_100%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
