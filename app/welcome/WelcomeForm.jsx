"use client";

import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";

export default function WelcomeForm() {
  const [submitting, setSubmitting] = useState(false);
  const { t } = useI18n();

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Portal auth is not wired — placeholder for future integration.
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div>
        <label className="label-luxury" htmlFor="account">
          {t("welcome.account")}
        </label>
        <input
          id="account"
          name="account"
          required
          autoComplete="username"
          placeholder={t("welcome.account_placeholder")}
          className="input-luxury mt-3"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="label-luxury" htmlFor="passcode">
            {t("welcome.passcode")}
          </label>
          <button
            type="button"
            className="text-[10px] uppercase tracking-[0.25em] text-parchment/40 hover:text-gold-light transition-colors"
          >
            {t("welcome.forgot")}
          </button>
        </div>
        <input
          id="passcode"
          name="passcode"
          type="password"
          required
          autoComplete="current-password"
          placeholder={t("welcome.passcode_placeholder")}
          className="input-luxury mt-3"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-luxury w-full justify-center disabled:opacity-50 disabled:cursor-wait"
      >
        {submitting ? t("welcome.verifying") : t("welcome.signin")}
      </button>
    </form>
  );
}
