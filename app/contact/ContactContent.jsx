"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { useI18n } from "@/components/I18nProvider";

export default function ContactContent() {
  const { t } = useI18n();
  return (
    <>
      {/* Intro banner */}
      <section className="relative pt-24 pb-12 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 bg-night overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-4 sm:mb-8">
              <span className="eyebrow">{t("contact.hero.eyebrow")}</span>
            </div>

            {/* Heading row — small brand mark sits on the right on mobile */}
            <div className="flex items-center gap-4 lg:block">
              <h1 className="flex-1 section-title text-parchment text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                {t("contact.hero.title1")}
                <span className="italic text-gold-gradient">
                  {t("contact.hero.title2")}
                </span>
              </h1>
              <div className="lg:hidden flex-shrink-0">
                <Image
                  src="/keelcrest-logo.png"
                  alt="Keelcrest Holding LTD"
                  width={600}
                  height={400}
                  quality={95}
                  className="w-32 sm:w-40 h-auto opacity-90"
                />
              </div>
            </div>

            <p className="mt-5 sm:mt-8 max-w-xl text-sm sm:text-base lg:text-lg font-light leading-relaxed text-parchment/65">
              <span className="block font-display italic tracking-wide text-gold-gradient">
                {t("contact.hero.brand")}
              </span>
              {t("contact.hero.body")}
            </p>
          </div>
        </div>
      </section>

      {/* Main — two column */}
      <section className="relative pb-20 sm:pb-32 lg:pb-44 bg-night">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
          <div className="grid gap-12 sm:gap-20 lg:grid-cols-12">
            {/* Left — contact details + image */}
            <aside className="lg:col-span-5 space-y-8 sm:space-y-12">
              <div>
                <p className="label-luxury mb-3 sm:mb-5">{t("contact.email_label")}</p>
                <a
                  href="mailto:info@keelcrest.com"
                  className="font-display text-xl sm:text-2xl md:text-3xl font-light text-parchment transition-colors hover:text-gold-light"
                >
                  info@keelcrest.com
                </a>
              </div>

              <div className="hidden lg:block relative w-full aspect-[3/2] lg:-ml-32">
                <Image
                  src="/keelcrest-logo.png"
                  alt="Keelcrest Holding LTD, brand mark"
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-contain object-left"
                />
              </div>
            </aside>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
