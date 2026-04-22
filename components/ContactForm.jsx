"use client";

import { useState } from "react";
import { useI18n } from "./I18nProvider";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="grid gap-6 sm:gap-10 md:grid-cols-2">
        <div>
          <label className="label-luxury" htmlFor="name">
            {t("form.fullname")}
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder={t("form.fullname_placeholder")}
            className="input-luxury mt-3"
          />
        </div>

        <div>
          <label className="label-luxury" htmlFor="email">
            {t("form.email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t("form.email_placeholder")}
            className="input-luxury mt-3"
          />
        </div>

        <div>
          <label className="label-luxury" htmlFor="company">
            {t("form.company")}
          </label>
          <input
            id="company"
            name="company"
            placeholder={t("form.company_placeholder")}
            className="input-luxury mt-3"
          />
        </div>

        <div>
          <label className="label-luxury" htmlFor="subject">
            {t("form.subject")}
          </label>
          <input
            id="subject"
            name="subject"
            placeholder={t("form.subject_placeholder")}
            className="input-luxury mt-3"
          />
        </div>
      </div>

      <div className="mt-6 sm:mt-10">
        <label className="label-luxury" htmlFor="message">
          {t("form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t("form.message_placeholder")}
          className="input-luxury mt-3 resize-none"
        />
      </div>

      <div className="mt-8 sm:mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-parchment/40 tracking-wide max-w-md">
          {t("form.disclosure")}
        </p>
        <button type="submit" className="btn-luxury">
          {submitted ? t("form.sent") : t("form.send")}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </form>
  );
}
