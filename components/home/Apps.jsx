"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

function StoreButtons() {
  const { t } = useI18n();
  return (
    <div className="mt-8 lg:mt-10 grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
      <button
        type="button"
        aria-label="Download on the App Store (coming soon)"
        className="group inline-flex items-center gap-2 sm:gap-3 rounded-md border border-gold/35 bg-black/40 px-3 py-2.5 sm:px-5 sm:py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
      >
        <svg
          className="h-9 w-9 sm:h-12 sm:w-12 md:h-10 md:w-10 text-parchment transition-colors group-hover:text-gold-light"
          viewBox="0 0 22 22"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-parchment/60">
            {t("apps.store.apple_top")}
          </span>
          <span className="font-display text-base sm:text-lg text-parchment group-hover:text-gold-light">
            {t("apps.store.apple_bottom")}
          </span>
        </div>
      </button>

      <button
        type="button"
        aria-label="Get it on Google Play (coming soon)"
        className="group inline-flex items-center gap-2 sm:gap-3 rounded-md border border-gold/35 bg-black/40 px-3 py-2.5 sm:px-5 sm:py-3 transition-all duration-500 hover:border-gold hover:bg-gold/10"
      >
        <svg className="h-6 w-6 sm:h-8 sm:w-8" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#E8DCC4"
            d="M3.609 1.814 13.79 12 3.609 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .61-.92z"
          />
          <path
            fill="#C9A961"
            d="m16.81 15.02-2.62-2.62 2.62-2.62 3.44 1.98a1 1 0 0 1 0 1.72l-3.44 1.54z"
          />
          <path
            fill="#E0C88A"
            d="M3.609 1.814 14.19 12.4l2.62-2.62-12.81-7.38a1 1 0 0 0-.39.41z"
          />
          <path
            fill="#A68B47"
            d="M3.609 22.186 14.19 11.6l2.62 2.62-12.81 7.38a1 1 0 0 1-.39-1.41z"
          />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-parchment/60">
            {t("apps.store.google_top")}
          </span>
          <span className="font-display text-base sm:text-lg text-parchment group-hover:text-gold-light">
            {t("apps.store.google_bottom")}
          </span>
        </div>
      </button>
    </div>
  );
}

function PhoneImage({ src, alt, className = "" }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={1536}
      quality={100}
      className={`h-auto ${className}`}
    />
  );
}

export default function Apps() {
  const { t } = useI18n();
  return (
    <>
      {/* Findtable */}
      <section className="relative py-6 sm:py-10 lg:py-16 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-3">
                <span className="hidden h-px w-6 bg-gradient-to-r from-transparent to-gold/60 max-sm:inline-block" />
                <span className="eyebrow eyebrow-app">Findtable</span>
              </span>
              <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
                {t("apps.findtable.title1")}
                <span className="italic text-gold-gradient">{t("apps.findtable.title2")}</span>
                {t("apps.findtable.title3")}
              </h2>

              {/* Mobile-only phone, sits between heading and body */}
              <div className="mt-6 flex justify-center lg:hidden">
                <PhoneImage
                  src="/findtable-phone.png"
                  alt="Findtable app preview on iPhone"
                  className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[400px]"
                />
              </div>

              <div className="divider-gold hidden lg:block lg:mt-8" />

              <p className="mt-4 lg:mt-8 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                <span className="font-display tracking-wide text-gold-gradient">
                  {t("apps.findtable.brand")}
                </span>{" "}
                {t("apps.findtable.body")}
              </p>

              <StoreButtons />

              <div className="divider-gold mx-auto mt-10 lg:hidden" />
            </div>

            {/* Desktop-only phone */}
            <div className="hidden lg:col-span-7 lg:flex lg:justify-end">
              <PhoneImage
                src="/findtable-phone.png"
                alt="Findtable app preview on iPhone"
                className="w-full max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ADDHOTEL — reversed layout on desktop */}
      <section className="relative py-6 sm:py-10 lg:py-16 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-12 lg:gap-20 items-center">
            {/* Desktop-only phone on the left */}
            <div className="hidden lg:col-span-7 lg:flex lg:justify-start">
              <PhoneImage
                src="/addhotel-phone.png"
                alt="ADDHOTEL app preview on iPhone"
                className="w-full max-w-[500px]"
              />
            </div>

            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-3">
                <span className="hidden h-px w-6 bg-gradient-to-r from-transparent to-gold/60 max-sm:inline-block" />
                <span className="eyebrow eyebrow-app">ADDHOTEL</span>
              </span>
              <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
                {t("apps.addhotel.title1")}
                <span className="italic text-gold-gradient">{t("apps.addhotel.title2")}</span>
              </h2>

              {/* Mobile-only phone, sits between heading and body */}
              <div className="mt-6 flex justify-center lg:hidden">
                <PhoneImage
                  src="/addhotel-phone.png"
                  alt="ADDHOTEL app preview on iPhone"
                  className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[400px]"
                />
              </div>

              <div className="divider-gold hidden lg:block lg:mt-8" />

              <p className="mt-4 lg:mt-8 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                <span className="font-display tracking-wide text-gold-gradient">
                  {t("apps.addhotel.brand")}
                </span>{" "}
                {t("apps.addhotel.body")}
              </p>

              <StoreButtons />

              <div className="divider-gold mx-auto mt-10 lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* FindSalad */}
      <section className="relative py-6 sm:py-10 lg:py-16 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-3">
                <span className="hidden h-px w-6 bg-gradient-to-r from-transparent to-gold/60 max-sm:inline-block" />
                <span className="eyebrow eyebrow-app">FindSalad</span>
              </span>
              <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
                {t("apps.findsalad.title1")}
                <span className="italic text-gold-gradient">{t("apps.findsalad.title2")}</span>
              </h2>

              {/* Mobile-only phone, sits between heading and body */}
              <div className="mt-6 flex justify-center lg:hidden">
                <PhoneImage
                  src="/findsalad-phone.png"
                  alt="FindSalad app preview on iPhone"
                  className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[400px]"
                />
              </div>

              <div className="divider-gold hidden lg:block lg:mt-8" />

              <p className="mt-4 lg:mt-8 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                <span className="font-display tracking-wide text-gold-gradient">
                  {t("apps.findsalad.brand")}
                </span>{" "}
                {t("apps.findsalad.body")}
              </p>

              <StoreButtons />

              <div className="divider-gold mx-auto mt-10 lg:hidden" />
            </div>

            {/* Desktop-only phone */}
            <div className="hidden lg:col-span-7 lg:flex lg:justify-end">
              <PhoneImage
                src="/findsalad-phone.png"
                alt="FindSalad app preview on iPhone"
                className="w-full max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FIND&MOVE — reversed layout on desktop */}
      <section className="relative py-6 sm:py-10 lg:py-16 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-12 lg:gap-20 items-center">
            {/* Desktop-only phone on the left */}
            <div className="hidden lg:col-span-7 lg:flex lg:justify-start">
              <PhoneImage
                src="/findmove-phone.png"
                alt="FIND&MOVE app preview on iPhone"
                className="w-full max-w-[500px]"
              />
            </div>

            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-3">
                <span className="hidden h-px w-6 bg-gradient-to-r from-transparent to-gold/60 max-sm:inline-block" />
                <span className="eyebrow eyebrow-app">FIND&amp;MOVE</span>
              </span>
              <h2 className="section-title mt-4 sm:mt-6 text-parchment text-3xl sm:text-4xl md:text-5xl">
                {t("apps.findmove.title1")}
                <span className="italic text-gold-gradient">{t("apps.findmove.title2")}</span>
              </h2>

              {/* Mobile-only phone, sits between heading and body */}
              <div className="mt-6 flex justify-center lg:hidden">
                <PhoneImage
                  src="/findmove-phone.png"
                  alt="FIND&MOVE app preview on iPhone"
                  className="w-full max-w-[200px] sm:max-w-[280px] md:max-w-[400px]"
                />
              </div>

              <div className="divider-gold hidden lg:block lg:mt-8" />

              <p className="mt-4 lg:mt-8 text-base lg:text-lg font-light leading-relaxed text-parchment/70">
                <span className="font-display tracking-wide text-gold-gradient">
                  {t("apps.findmove.brand")}
                </span>{" "}
                {t("apps.findmove.body")}
              </p>

              <StoreButtons />

              <div className="divider-gold mx-auto mt-10 lg:hidden" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
