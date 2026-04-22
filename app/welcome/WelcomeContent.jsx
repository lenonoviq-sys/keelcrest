"use client";

import Link from "next/link";
import Image from "next/image";
import ImageSlot from "@/components/ImageSlot";
import WelcomeForm from "./WelcomeForm";
import { useI18n } from "@/components/I18nProvider";

export default function WelcomeContent() {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen w-full flex overflow-hidden">
      {/* Left — full-height image, hidden on small screens */}
      <div className="hidden lg:block relative w-1/2 h-screen">
        <ImageSlot
          label="WELCOME WALLPAPER"
          description="Atmospheric, moody luxury scene, private library with fireplace, marble hallway, bronze ornamentation, or dusk skyline through curtains."
          filename="welcome.jpg"
          aspect="aspect-auto h-full"
          className="h-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-night" />
      </div>

      {/* Right — sign-in panel */}
      <div className="relative flex w-full lg:w-1/2 min-h-screen items-center justify-center px-6 py-12 sm:px-8 sm:py-16 bg-night">
        <div className="w-full max-w-md animate-fade-up">
          {/* Brand mark */}
          <Link href="/" className="inline-flex items-center mb-10 sm:mb-16">
            <Image
              src="/logo.png"
              alt="KeelCrest Holding LTD"
              width={600}
              height={400}
              quality={100}
              className="h-16 sm:h-20 w-auto"
            />
          </Link>

          {/* Heading */}
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <span className="h-px w-10 bg-gold/70" />
            <span className="eyebrow">{t("welcome.eyebrow")}</span>
          </div>

          <h1 className="section-title text-parchment text-3xl sm:text-4xl md:text-5xl mb-4">
            {t("welcome.title1")}
            <span className="italic text-gold-gradient">{t("welcome.title2")}</span>
          </h1>

          <p className="text-sm sm:text-base text-parchment/55 leading-relaxed mb-8 sm:mb-12">
            {t("welcome.body")}
          </p>

          <WelcomeForm />

          <p className="mt-6 sm:mt-10 text-xs text-parchment/35 leading-relaxed">
            {t("welcome.assistance")}
            <a
              href="mailto:info@keelcrest.com"
              className="text-gold/80 hover:text-gold-light transition-colors"
            >
              info@keelcrest.com
            </a>
            .
          </p>

          <Link
            href="/"
            className="mt-8 sm:mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-parchment/45 hover:text-gold-light transition-colors"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t("welcome.return")}
          </Link>
        </div>
      </div>
    </section>
  );
}
