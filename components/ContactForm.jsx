"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="luxury-card relative overflow-hidden rounded-sm p-8 md:p-10"
    >
      <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
      <h2 className="font-serif text-3xl text-white">
        Tell us about your <span className="gold-text italic">project</span>
      </h2>
      <p className="mt-2 text-sm text-white/60">
        The more context you share, the more considered our first reply.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="name" placeholder="Alexandra Monroe" required />
        <Field label="Email" name="email" type="email" placeholder="you@brand.com" required />
        <Field label="Company" name="company" placeholder="Your organization" />
        <Field label="Budget" name="budget" placeholder="$25k – $100k+" />
      </div>

      <div className="mt-6">
        <label className="eyebrow">Project Overview</label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="A few lines about your vision, timeline, and ambitions..."
          className="mt-3 w-full resize-none rounded-sm border border-gold/20 bg-ink/50 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all focus:border-gold/70 focus:outline-none focus:shadow-gold"
        />
      </div>

      <button type="submit" className="gold-btn-solid mt-8 w-full sm:w-auto">
        {submitted ? "Thank you — we'll be in touch" : "Send Inquiry"}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <div>
      <label className="eyebrow">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-sm border border-gold/20 bg-ink/50 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all focus:border-gold/70 focus:outline-none focus:shadow-gold"
      />
    </div>
  );
}
