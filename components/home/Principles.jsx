"use client";

import { useI18n } from "@/components/I18nProvider";

const pillarKeys = [
  { labelKey: "home.principles.vision.label", textKey: "home.principles.vision.text" },
  { labelKey: "home.principles.trust.label", textKey: "home.principles.trust.text" },
  { labelKey: "home.principles.excellence.label", textKey: "home.principles.excellence.text" },
];

export default function Principles() {
  const { t } = useI18n();
  return (
    <section className="relative pt-6 pb-6 sm:py-20 lg:py-36 bg-night">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-14">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow">{t("home.principles.eyebrow")}</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="section-title text-parchment text-3xl sm:text-4xl md:text-5xl">
            {t("home.principles.title1")}
            <span className="italic text-gold-gradient">{t("home.principles.title2")}</span>
          </h2>
        </div>

        <div className="grid gap-px bg-gold/10 md:grid-cols-3 border-t border-gold/10 md:border-y">
          {pillarKeys.map((p) => (
            <div
              key={p.labelKey}
              className="bg-night px-6 py-10 text-center sm:px-8 sm:py-12 md:text-left lg:px-12 lg:py-16 transition-colors duration-700 hover:bg-bronze-900"
            >
              <p className="label-luxury">{t(p.labelKey)}</p>
              <div className="divider-gold mx-auto mt-4 mb-5 md:mx-0 md:mt-5 md:mb-6" />
              <p className="text-base leading-relaxed text-parchment/70">
                {t(p.textKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
