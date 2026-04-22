"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function Ownership() {
  const { t } = useI18n();
  return (
    <section className="relative pt-6 pb-16 sm:py-20 lg:py-40 bg-night">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-12 lg:gap-20 items-center lg:items-stretch">
          {/* Desktop-only image (left) — stretches full height of text column */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full w-full overflow-hidden shadow-frame">
              <Image
                src="/lap-image.jpg"
                alt="Hands at a laptop and phone, daily work in a quiet office"
                fill
                quality={90}
                sizes="40vw"
                className="object-cover object-center"
                style={{
                  filter:
                    "saturate(0.55) contrast(1.12) brightness(0.9) sepia(0.08)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.85)_100%)]" />
            </div>
          </div>

          {/* Right — text (mobile shows: heading → image → divider → body) */}
          <div className="lg:col-span-7">
            <span className="eyebrow">{t("ownership.eyebrow")}</span>
            <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
              {t("ownership.title1")}
              <span className="italic text-gold-gradient">
                {t("ownership.title2")}
              </span>
            </h2>

            {/* Mobile-only image, sits between heading and divider */}
            <div className="mt-6 flex justify-center lg:hidden">
              <div className="relative aspect-[3/2] sm:aspect-[4/3] w-full sm:max-w-[340px] overflow-hidden shadow-frame">
                <Image
                  src="/lap-image.jpg"
                  alt="Hands at a laptop and phone, daily work in a quiet office"
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 340px, 100vw"
                  className="object-cover object-center"
                  style={{
                    filter:
                      "saturate(0.55) contrast(1.12) brightness(0.9) sepia(0.08)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.85)_100%)]" />
              </div>
            </div>

            <div className="divider-gold mt-6 sm:mt-8 mx-auto lg:mx-0" />

            <div className="mt-6 sm:mt-8 space-y-5 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
              <p>{t("ownership.p1")}</p>
              <p>
                <span className="font-display tracking-wide text-gold-gradient">
                  {t("ownership.p2.brand")}
                </span>
                {t("ownership.p2")}
              </p>
              <p>{t("ownership.p3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
