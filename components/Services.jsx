const services = [
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile experiences engineered for performance, polish, and longevity.",
    icon: PhoneIcon,
  },
  {
    title: "UI / UX Design",
    description:
      "Refined interfaces and seamless journeys that translate brand prestige into intuitive interaction.",
    icon: PenIcon,
  },
  {
    title: "Backend Development",
    description:
      "Robust, scalable backend systems with enterprise-grade security and graceful architecture.",
    icon: StackIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 bg-black">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="section-heading mt-4 text-white">
            Our <span className="gold-text italic">Services</span>
          </h2>
          <div className="divider-gold mt-6 w-40" />
          <p className="mt-6 max-w-2xl text-white/60">
            Every engagement is handcrafted — a meticulous blend of strategy,
            design, and engineering tailored for brands that demand more.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon }, i) => (
            <article
              key={title}
              className="luxury-card group relative overflow-hidden rounded-sm p-8 md:p-10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute right-0 top-0 h-24 w-24 bg-gold/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-sm border border-gold/30 bg-gold/5 text-gold transition-all duration-500 group-hover:border-gold group-hover:shadow-gold">
                  <Icon />
                </div>
                <h3 className="font-serif text-2xl font-medium text-white">
                  {title}
                </h3>
                <div className="mt-3 h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-20 group-hover:bg-gold" />
                <p className="mt-5 text-sm leading-relaxed text-white/60">
                  {description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold/70 transition-colors duration-300 group-hover:text-gold">
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 3.5l6 6L7 23H3v-4L14.5 3.5z" />
      <path d="M13 5l6 6" />
      <path d="M3 21h8" />
    </svg>
  );
}

function StackIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="4" rx="1" />
      <rect x="3" y="10" width="18" height="4" rx="1" />
      <rect x="3" y="16" width="18" height="4" rx="1" />
    </svg>
  );
}
