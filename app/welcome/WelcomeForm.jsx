"use client";

import { useState } from "react";

export default function WelcomeForm() {
  const [submitting, setSubmitting] = useState(false);

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
          Account
        </label>
        <input
          id="account"
          name="account"
          required
          autoComplete="username"
          placeholder="Client reference or email"
          className="input-luxury mt-3"
        />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className="label-luxury" htmlFor="passcode">
            Passcode
          </label>
          <button
            type="button"
            className="text-[10px] uppercase tracking-[0.25em] text-parchment/40 hover:text-gold-light transition-colors"
          >
            Forgot?
          </button>
        </div>
        <input
          id="passcode"
          name="passcode"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Enter your passcode"
          className="input-luxury mt-3"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-luxury w-full justify-center disabled:opacity-50 disabled:cursor-wait"
      >
        {submitting ? "Verifying…" : "Sign In"}
      </button>
    </form>
  );
}
