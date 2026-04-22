"use client";

import { useI18n } from "@/components/I18nProvider";

export default function Statement() {
  const { t } = useI18n();
  return (
    <section className="relative py-28 lg:py-40 bg-night">
      <div className="mx-auto max-w-3xl px-8 lg:px-14 text-center">
        <span className="eyebrow">{t("about.statement.eyebrow")}</span>
        <h2 className="section-title mt-6 text-parchment text-4xl md:text-5xl">
          {t("about.statement.title1")}
          <span className="italic text-gold-gradient">{t("about.statement.title2")}</span>
        </h2>

        <div className="divider-gold mx-auto my-8" />

        <p className="text-base lg:text-lg font-light leading-relaxed text-parchment/70">
          {t("about.statement.body")}
        </p>

        <p className="mt-6 font-display text-xl italic text-parchment/55">
          {t("about.statement.quote")}
        </p>
      </div>
    </section>
  );
}
