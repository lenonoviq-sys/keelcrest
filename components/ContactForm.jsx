"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="grid gap-6 sm:gap-10 md:grid-cols-2">
        <div>
          <label className="label-luxury" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="input-luxury mt-3"
          />
        </div>

        <div>
          <label className="label-luxury" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@domain.com"
            className="input-luxury mt-3"
          />
        </div>

        <div>
          <label className="label-luxury" htmlFor="company">
            Company / Office
          </label>
          <input
            id="company"
            name="company"
            placeholder="Your organization"
            className="input-luxury mt-3"
          />
        </div>

        <div>
          <label className="label-luxury" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="Private inquiry"
            className="input-luxury mt-3"
          />
        </div>
      </div>

      <div className="mt-6 sm:mt-10">
        <label className="label-luxury" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="A few lines about your enquiry..."
          className="input-luxury mt-3 resize-none"
        />
      </div>

      <div className="mt-8 sm:mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-parchment/40 tracking-wide max-w-md">
          Correspondence is received in confidence. A member of our team will
          be in touch within two business days.
        </p>
        <button type="submit" className="btn-luxury">
          {submitted ? "Message received" : "Send Enquiry"}
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
